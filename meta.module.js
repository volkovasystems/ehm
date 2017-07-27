"use strict";

/*;
	@submodule-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "ehm",
			"path": "ehm/meta.module.js",
			"file": "meta.module.js",
			"module": "ehm",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ehm.git",
			"test": "ehm-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Meta class construct.
	@end-submodule-documentation

	@include:
		{
			"harden": "harden"
		}
	@end-include
*/

const harden = require( "harden" );

const NAME = Symbol( "name" );
const ENTITY = Symbol( "entity" );
const TYPE = Symbol( "type" );

const OBJECT = Symbol( "object" );
const BOOLEAN = Symbol( "boolean" );
const STRING = Symbol( "string" );
const NUMBER = Symbol( "number" );
const VALUE = Symbol( "value" );

const GARBAGE = Symbol( "garbage" );
const CORRUPTED = Symbol( "corrupted" );
const TAGGED = Symbol( "tagged" );

const CLASS_NAME_PATTERN = /^[A-Z][a-zA-Z0-9]+$/;
const FLOAT_NUMBER_PATTERN = /\./;
const SYMBOL_PATTERN = /^Symbol\((.*?)\)$/;
const TAG_PATTERN = /^\[([a-zA-Z][\-a-zA-Z0-9]+)\s+[A-Z][a-zA-Z0-9]+\:?(.+?)?\]$/;

const DEFAULT_DATA_URL_PREFIX = "data:text/plain;base64,";

class Meta {
	static [ Symbol.hasInstance ]( instance ){
		/*;
			@meta-configuration:
				{
					"instance:required": "*"
				}
			@end-meta-configuration
		*/

		return this.instanceOf( instance, this );
	}

	static instanceOf( instance, blueprint ){
		/*;
			@meta-configuration:
				{
					"instance:required": "*",
					"blueprint": "function"
				}
			@end-meta-configuration
		*/

		if(
			typeof instance == "object"
			&& instance != null
			&& typeof blueprint == "function"
			&& instance.constructor.name === blueprint.name
		){
			return true;
		}

		/*;
			@note:
				Possibility of instance being garbage.
			@end-note
		*/
		if( instance === GARBAGE ){
			return false;
		}

		if( typeof blueprint != "function" ){
			blueprint = this;
		}

		return ( new blueprint( GARBAGE ) )
			.__initialize__( instance, blueprint.name )
			.instanceOf( blueprint.name );
	}

	static create( blueprint, entity, state ){
		/*;
			@meta-configuration:
				{
					"blueprint:required": "function",
					"entity": "*",
					"state": Array
				}
			@end-meta-configuration
		*/

		if( arguments.length == 0 ){
			blueprint = this;
			entity = undefined;
			state = [ ];
		}

		if( arguments.length == 1 ){
			blueprint = this;
			entity = arguments[ 0 ];
			state = [ ];
		}

		if( arguments.length == 2 ){
			blueprint = arguments[ 0 ];
			entity = arguments[ 1 ];
			state = [ ];
		}

		if( typeof blueprint != "function" ){
			blueprint = this;
		}

		if( typeof state == "object" ){
			state = Array.from( state );

		}else{
			state = [ ];
		}

		let data = new blueprint( entity );

		if( TAG_PATTERN.test( data.stringify( ) ) ){
			state.push( TAGGED );
		}

		let index = state.length;
		while( index-- ){
			let status = state[ index ];
			harden( status, status, data );
		}

		return Object.freeze( data );
	}

	static deserialize( data, parser, blueprint ){
		/*;
			@meta-configuration:
				{
					"data": "*",
					"parser": "function",
					"blueprint": "function"
				}
			@end-meta-configuration
		*/

		let parameter = Array.from( arguments );

		if( arguments.length == 2 ){
			data = this[ ENTITY ];

			parameter = [ undefined ].concat( parameter );
		}

		blueprint = parameter.splice( 1 )
			.filter( ( parameter ) => {
				return (
					typeof parameter == "function"
					&& "name" in parameter
					&& typeof parameter.name == "string"
					&& parameter.name != ""
					&& CLASS_NAME_PATTERN.test( parameter.name )
				);
			} )
			.concat( this )[ 0 ];

		var [ parser, defer ] = parameter.splice( 1 )
			.filter( ( parameter ) => {
				return (
					typeof parameter == "function"
					&& (
						!( "name" in parameter )
						|| typeof parameter.name != "string"
						|| parameter.name == ""
						|| parameter.name == "anonymous"
						|| parameter.name == "parser"
					)
				);
			} )
			.concat( function parser( data ){
				if( typeof data == "string" ){
					let token = data.match( TAG_PATTERN ) || [ ];
					let type = token[ 1 ] || "undefined";
					let value = token[ 2 ] || "";

					if( value == "" ){
						return data;
					}

					value = value.replace( DEFAULT_DATA_URL_PREFIX, "" );

					try{
						//: @server:
						value = Buffer.from( value, "base64" ).toString( "utf8" );
						//: @end-server

						//: @client:
						value = atob( value );
						//: @end-client

						switch( type ){
							case "boolean":
								if( value.toLowerCase( ) == "true" ){
									return true;
								}

								if( value.toLowerCase( ) == "false" ){
									return false;
								}

								return false;

							case "function":
								try{
									let method = ( new Function( "return " + value ) )( );

									if( typeof method != "function" ){
										return function( ){ throw new Error( `no operation done, ${ value }` ); };
									}

									return method;

								}catch( error ){
									return function( ){ throw new Error( `no operation done, ${ error.stack }` ); };
								}

							case "number":
								try{
									if( value == "Infinity" ){
										return Infinity;
									}

									if( value == "NaN" ){
										return NaN;
									}

									if( FLOAT_NUMBER_PATTERN.test( value ) ){
										return parseFloat( value );
									}

									if( !FLOAT_NUMBER_PATTERN.test( value ) ){
										return parseInt( value );
									}

									return Infinity;

								}catch( error ){
									return NaN;
								}

							case "object":
								if( value == "null" ){
									return null;
								}

								try{
									return JSON.parse( value );

								}catch( error ){
									return new Error( `cannot parse, ${ value }, ${ error.stack }` );
								}

							case "symbol":
								return Symbol( ( value.match( SYMBOL_PATTERN ) || [ ] )[ 1 ] || "" );

							case "string":
								return value;

							case "undefined":
								return undefined;
						}

						return value;

					}catch( error ){
						return data;
					}
				}

				return data;
			} );

		try{
			return Meta.create( blueprint, parser( data ) );

		}catch( error ){
			return Meta.create( blueprint, defer( data ), [ CORRUPTED ] );
		}
	}

	constructor( entity, name ){
		/*;
			@meta-configuration:
				{
					"entity:required": "*",
					"name:required": "string"
				}
			@end-meta-configuration
		*/

		this.__initialize__( entity, name );
	}

	__initialize__( entity, name ){
		/*;
			@meta-configuration:
				{
					"entity:required": "*",
					"name:required": "string"
				}
			@end-meta-configuration
		*/

		let type = typeof entity;

		name = name || type.replace( /^./, ( match ) => match.toUpperCase( ) );

		if( typeof name != "string" ){
			throw new Error( "invalid name" );
		}

		this[ TYPE ] = type;
		this[ NAME ] = name;
		this[ ENTITY ] = entity;

		return this;
	}

	/*;
		@method-documentation:
			This will only support three types; string, number, boolean.

			These types are serializable.
		@end-method-documentation

		@note:
			Do not override this.
		@end-note
	*/
	[ Symbol.toPrimitive ]( type ){
		/*;
			@meta-configuration:
				{
					"type:required": "string",
				}
			@end-meta-configuration
		*/

		switch( type ){
			case "string":
				return this.toString( );

			case "number":
				return this.toNumber( );

			default:
				return this.toBoolean( );
		}
	}

	/*
		@note:
			These methods should be overridden.
		@end-note
	*/

	get [ Symbol.toStringTag ]( ){
		return this[ NAME ];
	}

	get [ OBJECT ]( ){
		return { };
	}

	get [ BOOLEAN ]( ){
		return true;
	}

	get [ STRING ]( ){
		return Object.prototype.toString.call( this[ ENTITY ] );
	}

	get [ NUMBER ]( ){
		return Infinity;
	}

	get [ VALUE ]( ){
		return this[ ENTITY ];
	}

	tag( value ){
		/*;
			@meta-configuration:
				{
					"value": "string"
				}
			@end-meta-configuration
		*/

		if( typeof value != "string" ){
			value = "";
		}

		if( value != "" ){
			value = `:${ value }`;
		}

		return `[${ this[ TYPE ] } ${ this[ NAME ] }:@value]`.replace( ":@value", value );
	}

	toJSON( ){
		return this[ OBJECT ];
	}

	/*;
		@note:
			As much as possible, do not override these methods.
		@end-note
	*/

	toBoolean( ){
		return this[ BOOLEAN ];
	}

	toString( ){
		return this[ STRING ];
	}

	toNumber( ){
		return this[ NUMBER ];
	}

	valueOf( ){
		return this[ VALUE ];
	}

	typeOf( type ){
		/*;
			@meta-configuration:
				{
					"type:required": "string"
				}
			@end-meta-configuration
		*/

		if( typeof type == "string" ){
			return typeof this[ ENTITY ] == type;
		}

		return false;
	}

	/*
		@note:
			Some cases that instanceOf needs to be overridden.
		@end-note
	*/
	instanceOf( blueprint ){
		/*;
			@meta-configuration:
				{
					"blueprint:required": [
						"function",
						"string"
					]
				}
			@end-meta-configuration
		*/

		if( typeof blueprint == "function" ){
			return (
				this instanceof blueprint
				|| this[ ENTITY ] instanceof blueprint
			);
		}

		if( typeof blueprint == "string" ){
			if( this.typeOf( blueprint.toLowerCase( ) ) ){
				return true;
			}

			let entity = this[ ENTITY ];
			if( entity === null || typeof entity == "undefined" ){
				return false;
			}

			if( typeof entity == "function" && entity.name === blueprint ){
				return true;
			}

			while( entity = Object.getPrototypeOf( entity ) ){
				if(
					typeof entity.constructor == "function"
					&& entity.constructor.name === blueprint
				){
					return true;
				}
			}

			if( this.constructor.name != blueprint ){
				let entity = this;
				while( entity = Object.getPrototypeOf( entity ) ){
					if(
						typeof entity.constructor == "function"
						&& entity.constructor.name === blueprint
					){
						return true;
					}
				}
			}

			return false;
		}

		return false;
	}

	/*;
		@note:
			This is the generic stringify function,
				for complex entity you need to override this.
		@end-note
	*/
	stringify( ){
		try{
			if( this[ TYPE ] == "object" ){
				return JSON.stringify( this[ ENTITY ] );
			}

			return "" + this[ ENTITY ];

		}catch( error ){
			try{
				return this[ ENTITY ].toString( );

			}catch( error ){
				return this.toString( );
			}
		}
	}

	deserialize( data, parser, blueprint ){
		/*;
			@meta-configuration:
				{
					"data": "*",
					"parser": "function",
					"blueprint": "function"
				}
			@end-meta-configuration
		*/

		let procedure = Meta.deserialize;

		if(
			typeof this.constructor == "function"
			&& typeof this.constructor.deserialize == "function"
			&& this.constructor.deserialize.name === "deserialize"
		){
			procedure = this.constructor.deserialize;
		}

		if( arguments.length == 2 ){
			return procedure( this[ ENTITY ], arguments[ 0 ], arguments[ 1 ] );

		}else{
			return procedure( data, parser, blueprint );
		}
	}

	/*;
		@method-documentation:
			Returns a tag format with value.
			The value must be a data URL format.

			The parser function will accept a context parameter.

			By default this will serialize the entity using plain/text base64 data URL format.

			The parser must return a serialize format of the data to be placed on the tag.
		@end-method-documentation
	*/
	serialize( parser ){
		/*;
			@meta-configuration:
				{
					"parser": "function"
				}
			@end-meta-configuration
		*/

		let defer = function parser( self ){
			//: @server:
			let value = Buffer.from( self.stringify( ) ).toString( "base64" );
			//: @end-server

			//: @client:
			let value = btoa( self.stringify( ) );
			//: @end-client

			return `${ DEFAULT_DATA_URL_PREFIX }${ value }`;
		};

		if( typeof parser != "function" ){
			parser = defer;
		}

		try{
			return this.tag( parser( this ) );

		}catch( error ){
			return this.tag( defer( this ) );
		}
	}

	isEqual( entity ){
		/*;
			@meta-configuration:
				{
					"entity:required": "*"
				}
			@end-meta-configuration
		*/

		return this[ ENTITY ] === entity;
	}

	isCorrupted( ){
		return this[ CORRUPTED ] === CORRUPTED;
	}

	isTagged( ){
		return (
			this[ TAGGED ] === TAGGED
			|| TAG_PATTERN.test( this.stringify( ) )
		);
	}

	isRaw( ){
		return !this.isTagged( );
	}
}

harden( "NAME", NAME, Meta );
harden( "ENTITY", ENTITY, Meta );
harden( "TYPE", TYPE, Meta );

harden( "OBJECT", OBJECT, Meta );
harden( "BOOLEAN", BOOLEAN, Meta );
harden( "STRING", STRING, Meta );
harden( "NUMBER", NUMBER, Meta );
harden( "VALUE", VALUE, Meta );

harden( "GARBAGE", GARBAGE, Meta );
harden( "CORRUPTED", CORRUPTED, Meta );
harden( "TAGGED", TAGGED, Meta );

harden( "TAG_PATTERN", TAG_PATTERN, Meta );

module.exports = Meta;
