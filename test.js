"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "ehm",
			"path": "ehm/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/ehm.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"ehm": "ehm"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const ehm = require( "./ehm.js" );
//: @end-server






//: @server:
describe( "ehm", ( ) => {

	describe( "`ehm( )`", ( ) => {
		it( "should return Meta class", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta, "function" );

			assert.equal( Meta.name, "Meta" );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( "helloworld" ).serialize( ), "string" );

			assert.equal( Meta.create( "helloworld" ).serialize( ), "[string String:data:text/string;base64,aGVsbG93b3JsZA%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( 1 ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( 1 ).serialize( ), "string" );

			assert.equal( Meta.create( 1 ).serialize( ), "[number Number:data:text/number;base64,MQ%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( Infinity ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Infinity ).serialize( ), "string" );

			assert.equal( Meta.create( Infinity ).serialize( ), "[number Number:data:text/number;base64,SW5maW5pdHk%3D]" );

		} );
	} );

	describe( "`ehm( ).create( true ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( true ).serialize( ), "string" );

			assert.equal( Meta.create( true ).serialize( ), "[boolean Boolean:data:text/boolean;base64,dHJ1ZQ%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( { "hello": "world" } ).serialize( ), "string" );

			assert.equal( Meta.create( { "hello": "world" } ).serialize( ), "[object Object:data:text/object;base64,eyJoZWxsbyI6IndvcmxkIn0%3D]" );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Symbol.for( "hello" ) ).serialize( ), "string" );

			assert.equal( Meta.create( Symbol.for( "hello" ) ).serialize( ), "[symbol Symbol:data:text/symbol;base64,U3ltYm9sKGhlbGxvKQ%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( function hello( ){ } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( function hello( ){ } ).serialize( ), "string" );

			assert.equal( Meta.create( function hello( ){ } ).serialize( ), "[function Function:data:text/function;base64,ZnVuY3Rpb24gaGVsbG8oICl7IH0%3D]" );

		} );
	} );

	describe( "`ehm( ).create( Error ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Error ).serialize( ), "string" );

			assert.equal( Meta.create( Error ).serialize( ), "[function Function:data:text/function;base64,ZnVuY3Rpb24gRXJyb3IoKSB7IFtuYXRpdmUgY29kZV0gfQ%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( ( ) => { } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( ( ) => { } ).serialize( ), "string" );

			assert.equal( Meta.create( ( ) => { } ).serialize( ), "[function Function:data:text/function;base64,KCApID0%2BIHsgfQ%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( null ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( null ).serialize( ), "string" );

			assert.equal( Meta.create( null ).serialize( ), "[object Object:data:text/object;base64,bnVsbA%3D%3D]" );

		} );
	} );

	describe( "`ehm( ).create( undefined ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( undefined ).serialize( ), "string" );

			assert.equal( Meta.create( undefined ).serialize( ), "[undefined Undefined:data:text/undefined;base64,dW5kZWZpbmVk]" );

		} );
	} );

	describe( "`ehm( ).create( NaN ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( NaN ).serialize( ), "string" );

			assert.equal( Meta.create( NaN ).serialize( ), "[number Number:data:text/number;base64,TmFO]" );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), "string" );

			assert.equal( Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), "helloworld" );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return number type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), "number" );

			assert.equal( Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), 1 );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( Infinity ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.deserialize( Meta.create( Infinity ).serialize( ) ).valueOf( ), Infinity );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), "boolean" );

			assert.equal( Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), true );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), "object" );

			assert.deepEqual( Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), { "hello": "world" } );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( Symbol.for( 'hello' ) ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return symbol type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( ), "symbol" );

			assert.equal( Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( ).toString( ), "Symbol(hello)" );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( function hello( ){ } ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return function type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( function hello( ){ } ).serialize( ) ).valueOf( ), "function" );

			assert.equal( Meta.deserialize( Meta.create( function hello( ){ } ).serialize( ) ).valueOf( ).name, "hello" );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( "helloworld" ).toString( ), "string" );

			const STRING_TAG_PATTERN = /^\[object String(?:\:(.+?))?\]$/;

			assert.equal( STRING_TAG_PATTERN.test( Meta.create( "helloworld" ).toString( ) ), true );

		} );
	} );

	describe( "`ehm( ).create( 1 ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( 1 ).toString( ), "string" );

			const NUMBER_TAG_PATTERN = /^\[object Number(?:\:(.+?))?\]$/;

			assert.equal( NUMBER_TAG_PATTERN.test( Meta.create( 1 ).toString( ) ), true );

		} );
	} );

	describe( "`ehm( ).create( true ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( true ).toString( ), "string" );

			const BOOLEAN_TAG_PATTERN = /^\[object Boolean(?:\:(.+?))?\]$/;

			assert.equal( BOOLEAN_TAG_PATTERN.test( Meta.create( true ).toString( ) ), true );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( { "hello": "world" } ).toString( ), "string" );

			const OBJECT_TAG_PATTERN = /^\[object Object(?:\:(.+?))?\]$/;

			assert.equal( OBJECT_TAG_PATTERN.test( Meta.create( { "hello": "world" } ).toString( ) ), true );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Symbol.for( "hello" ) ).toString( ), "string" );

			const SYMBOL_TAG_PATTERN = /^\[object Symbol(?:\:(.+?))?\]$/;

			assert.equal( SYMBOL_TAG_PATTERN.test( Meta.create( Symbol.for( "hello" ) ).toString( ) ), true );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).toNumber( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( "helloworld" ).toNumber( ), Infinity );

		} );
	} );

	describe( "`ehm( ).create( 1 ).toNumber( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( 1 ).toNumber( ), Infinity );

		} );
	} );

	describe( "`ehm( ).create( true ).toNumber( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( true ).toNumber( ), Infinity );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).toNumber( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( { "hello": "world" } ).toNumber( ), Infinity );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).toNumber( )`", ( ) => {
		it( "should return Infinity", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( Symbol.for( "hello" ) ).toNumber( ), Infinity );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).toBoolean( )`", ( ) => {
		it( "should return true", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( "helloworld" ).toBoolean( ), true );

		} );
	} );

	describe( "`ehm( ).create( 1 ).toBoolean( )`", ( ) => {
		it( "should return true", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( 1 ).toBoolean( ), true );

		} );
	} );

	describe( "`ehm( ).create( true ).toBoolean( )`", ( ) => {
		it( "should return true", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( true ).toBoolean( ), true );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).toBoolean( )`", ( ) => {
		it( "should return true", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( { "hello": "world" } ).toBoolean( ), true );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).toBoolean( )`", ( ) => {
		it( "should return true", ( ) => {
			let Meta = ehm( );

			assert.equal( Meta.create( Symbol.for( "hello" ) ).toBoolean( ), true );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			let descriptor = Meta.create( "helloworld" ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`ehm( ).create( 1 ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			let descriptor = Meta.create( 1 ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`ehm( ).create( true ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			let descriptor = Meta.create( true ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			let descriptor = Meta.create( { "hello": "world" } ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			let descriptor = Meta.create( Symbol.for( "hello" ) ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );
//: @end-server






