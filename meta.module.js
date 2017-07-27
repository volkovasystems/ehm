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

class Meta {
	static [ Symbol.hasInstance ]( instance ){
		return this.instanceOf( instance, this );
	}

	static instanceOf( instance, blueprint ){
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

	constructor( entity, name ){
		this.__initialize__( entity, name );
	}

	__initialize__( entity, name ){
		let type = typeof entity;

		this[ TYPE ] = type;
		this[ NAME ] = name || type.replace( /^./, ( match ) => match.toUpperCase( ) );
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

	tag( ){
		return `[${ this[ TYPE ] } ${ this[ NAME ] }]`;
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

module.exports = Meta;
