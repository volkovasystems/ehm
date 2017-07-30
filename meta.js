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
			"harden": "harden",
			"sxty4": "sxty4"
		}
	@end-include
*/

const harden = require( "harden" );
const sxty4 = require( "sxty4" );

const NAME = Symbol( "name" );
const ENTITY = Symbol( "entity" );
const TYPE = Symbol( "type" );

const ERROR = Symbol( "error" );

const OBJECT = Symbol( "object" );
const BOOLEAN = Symbol( "boolean" );
const STRING = Symbol( "string" );
const NUMBER = Symbol( "number" );
const VALUE = Symbol( "value" );

const GARBAGE = Symbol( "garbage" );
const CORRUPTED = Symbol( "corrupted" );
const TAGGED = Symbol( "tagged" );

const CLASS_NAME_PATTERN = /^[A-Z][a-zA-Z0-9]+$/;
const DATA_URL_PATTERN = /^data\:[a-z][\-a-z0-9]+\/([a-z][\-a-z0-9]+)(?:\;base64)?\,/;
const EVAL_USAGE_PATTERN = /\beval\(.*?\)|\beval\b/gm;
const FUNCTION_CLASS_USAGE_PATTERN = /\bFunction\(.*?\)|\bFunction\b/gm;
const FLOAT_NUMBER_PATTERN = /\./;
const SYMBOL_PATTERN = /^Symbol\((.*?)\)$/;
const TAG_PATTERN = /^\[([a-zA-Z][\-a-zA-Z0-9]+)\s+[A-Z][a-zA-Z0-9]+(?:\:(.+?))?\]$/;

const DATA_URL_TAG = "data-url-tag";
const DEFAULT_FORMAT = DATA_URL_TAG;
const DEFAULT_DATA_URL_PREFIX = "data:text/@type;base64,";
const EMPTY_STRING = "";

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

				Do not remove this. This is a special procedure.
			@end-note
		*/
		if( instance === GARBAGE ){
			return false;
		}

		if( typeof blueprint != "function" ){
			blueprint = this;
		}

		try{
			return ( new blueprint( GARBAGE ) )
				.__initialize__( instance, blueprint.name )
				.instanceOf( blueprint.name );

		}catch( error ){
			return false;
		}
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

		/*;
			@note:
				If we are going to throw an error here, possibility of infinite recursion.

				We can push an error instead.
			@end-note
		*/
		if( !( blueprint instanceof this ) ){
			state.push( new Error( `incompatible blueprint, ${ blueprint.name }` ) );

			blueprint = this;
		}

		let data = new blueprint( entity );

		if( TAG_PATTERN.test( data.stringify( ) ) ){
			state.push( TAGGED );
		}

		let index = state.length;
		while( index-- ){
			let status = state[ index ];

			if( status instanceof Error ){
				data.setError( status );

			}else{
				harden( status, status, data );
			}
		}

		return Object.freeze( data );
	}

	/*;
		@static-method-documentation:
			Generic meta data deserialization.
		@end-static-method-documentation
	*/
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
					&& parameter.name != EMPTY_STRING
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
						|| parameter.name == EMPTY_STRING
						|| parameter.name == "anonymous"
						|| parameter.name == "parser"
					)
				);
			} )
			.concat( function parser( data ){
				if( typeof data == "string" ){
					try{
						let token = data.match( TAG_PATTERN ) || [ ];
						let type = token[ 1 ] || "undefined";
						let value = token[ 2 ] || EMPTY_STRING;

						if( value == EMPTY_STRING ){
							value = data;
						}

						/*;
							@note:
								If the value is a data url format, try to decode it.

								Ensure that we have the correct type.
							@end-note
						*/
						if( DATA_URL_PATTERN.test( value ) ){
							type = ( value.match( DATA_URL_PATTERN ) || [ ] )[ 1 ] || type;
							value = value.replace( DEFAULT_DATA_URL_PREFIX.replace( "@type", type ), EMPTY_STRING );
							value = sxty4( value ).decode( );
						}

						switch( type ){
							case "boolean":
								if( value.toLowerCase( ) == "true" ){
									return true;
								}

								if( value.toLowerCase( ) == "false" ){
									return false;
								}

								throw new Error( `cannot parse boolean, ${ value }` );

							case "function":
								try{
									if( EVAL_USAGE_PATTERN.test( value ) ){
										throw new Error( "cannot parse function, contains eval, potential security issue" );
									}

									if( FUNCTION_CLASS_USAGE_PATTERN.test( value ) ){
										throw new Error( "cannot parse function, contains function class, potential security issue" );
									}

									let method = ( new Function( "return " + value ) )( );

									if( typeof method != "function" ){
										return function( ){ throw new Error( `no operation done, ${ value }` ); };
									}

									return method;

								}catch( error ){
									throw new Error( `cannot parse function, ${ value }, ${ error.stack }` );
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
									throw new Error( `cannot parse number, ${ value }, ${ error.stack }` );
								}

							case "object":
								if( value == "null" ){
									return null;
								}

								try{
									value = JSON.parse( value );

									/*;
										This is the specification for the basic
											meta object structure.
									*/
									if(
										"type" in value && typeof value.name == "string"
										&& "name" in value && typeof value.name == "string"
										&& "value" in value && typeof value.value == "string"
										&& "format" in value && typeof value.format == "string"
										&& value.format == DATA_URL_TAG
										&& TAG_PATTERN.test( value.value )
									){
										return Meta.deserialize( value.value ).valueOf( );
									}

									return value;

								}catch( error ){
									return new Error( `cannot parse object, ${ value }, ${ error.stack }` );
								}

							case "symbol":
								let symbol = ( ( value.match( SYMBOL_PATTERN ) || [ ] )[ 1 ] || EMPTY_STRING ).trim( );

								if( symbol == EMPTY_STRING ){
									throw new Error( `cannot parse symbol, ${ value }` );
								}

								return Symbol( symbol );

							case "string":
								return value;

							case "undefined":
								return undefined;
						}

						return value;

					}catch( error ){
						throw new Error( `cannot parse, ${ data }, ${ error.stack }` );
					}
				}

				return data;
			} );

		try{
			return Meta.create( blueprint, parser( data ) );

		}catch( error ){
			return Meta.create( blueprint, defer( data ), [ CORRUPTED, error ] );
		}
	}

	/*;
		@static-method-documentation:
			Checks if the tag is compatible.
		@end-static-method-documentation

		@note:
			Override for specific compatibility checking.
		@end-note
	*/
	static isCompatible( tag ){
		/*;
			@meta-configuration:
				{
					"tag": "string"
				}
			@end-meta-configuration
		*/

		if( typeof tag != "string" ){
			return false;
		}

		return TAG_PATTERN.test( tag );
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

		if( !this.check( entity ) ){
			throw new Error( "invalid entity" );
		}

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
			For generic checking of entity this is always true,
				and this should be overridden.
		@end-method-documentation
	*/
	check( entity ){
		return true;
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

	/*;
		@method-documentation:
			Generally, this will return the basic object meta specification.

			The format property dictates how the value must be interpreted.
		@end-method-documentation
	*/
	get [ OBJECT ]( ){
		return {
			"type": this[ TYPE ],
			"name": this[ NAME ],
			"value": this.serialize( ),
			"format": DATA_URL_TAG
		};
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

	/*;
		@method-documentation:
			Return a string tag format,

				[type Name:value]

			The value is optional.
		@end-method-documentation
	*/
	tag( value ){
		/*;
			@meta-configuration:
				{
					"value": "string"
				}
			@end-meta-configuration
		*/

		if( typeof value != "string" ){
			value = EMPTY_STRING;
		}

		if( value != EMPTY_STRING ){
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

			return EMPTY_STRING + this[ ENTITY ];

		}catch( error ){
			try{
				return this[ ENTITY ].toString( );

			}catch( error ){
				return this.toString( );
			}
		}
	}

	/*;
		@method-documentation:
			This will call the static deserialization procedure of the constructor.
		@end-method-documentation
	*/
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
			let value = sxty4( self.stringify( ) ).encode( );

			return `${ DEFAULT_DATA_URL_PREFIX.replace( "@type", self[ TYPE ] ) }${ value }`;
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

	/*;
		@method-documentation:
			Strict value equality.
		@end-method-documentation

		@note:
			Override for deep checking.
		@end-note
	*/
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

	/*;
		@method-documentation:
			When the deserialization fails, or if there is error, this method returns true.
		@end-method-documentation
	*/
	isCorrupted( ){
		return (
			this[ CORRUPTED ] === CORRUPTED
			|| this.hasError( )
		);
	}

	isTagged( ){
		return (
			this[ TAGGED ] === TAGGED
			|| TAG_PATTERN.test( this.stringify( ) )
		);
	}

	/*;
		@method-documentation:
			If the entity is not a tag format then it's raw.
		@end-method-documentation
	*/
	isRaw( ){
		return !this.isTagged( );
	}

	setError( error ){
		if( error instanceof Error ){
			this[ ERROR ] = error;
		}

		return this;
	}

	getError( ){
		return this[ ERROR ];
	}

	hasError( ){
		return this[ ERROR ] instanceof Error;
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

harden( "DATA_URL_TAG", DATA_URL_TAG, Meta );

module.exports = Meta;
