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
			"assert": "should",
			"ehm": "ehm"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const ehm = require( "./ehm.js" );
//: @end-server

//: @client:
const ehm = require( "./ehm.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


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

} );
//: @end-server


//: @client:
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

	describe( "`ehm( ).create( Error ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Error ).serialize( ), "string" );

			assert.equal( Meta.create( Error ).serialize( ), "[function Function:data:text/function;base64,ZnVuY3Rpb24gRXJyb3IoKSB7IFtuYXRpdmUgY29kZV0gfQ%3D%3D]" );
		} );
	} );

	// describe( "`ehm( ).create( function hello( ){ } ).serialize( )`", ( ) => {
	// 	it( "should return string type", ( ) => {
	// 		let Meta = ehm( );
	//
	// 		assert.equal( typeof Meta.create( function hello( ){ } ).serialize( ), "string" );
	//
	// 		assert.equal( Meta.create( function hello( ){ } ).serialize( ), "[function Function:data:text/function;base64,ZnVuY3Rpb24gaGVsbG8oICl7IH0%3D]" );
	//
	// 	} );
	// } );

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

	describe( "`ehm( ).deserialize( ehm( ).create( function hello( ){ } ).serialize( ) ).valueOf( ).name`", ( ) => {
		it( "should return function type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( function hello( ){ } ).serialize( ) ).valueOf( ), "function" );

			assert.equal( Meta.deserialize( Meta.create( function hello( ){ } ).serialize( ) ).valueOf( ).name, "hello" );
		} );
	} );

} );
//: @end-client


//: @bridge:

describe( "ehm", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`ehm( )`", ( ) => {
		it( "should return Meta class", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof ehm( ); } ).value, "function" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => ehm( ).name ).value, "Meta" );

		} );
	} );

	describe( "`ehm( ).create( 'helloworld' ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( "helloworld" ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( "helloworld" ).serialize( );
				}

			).value;

			assert.equal( testB, "[string String:data:text/string;base64,aGVsbG93b3JsZA%3D%3D]" );
		} );
	} );

	describe( "`ehm( ).create( 1 ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( 1 ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( 1 ).serialize( );
				}

			).value;

			assert.equal( testB, "[number Number:data:text/number;base64,MQ%3D%3D]" );
		} );
	} );

	describe( "`ehm( ).create( true ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( true ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( true ).serialize( );
				}

			).value;

			assert.equal( testB, "[boolean Boolean:data:text/boolean;base64,dHJ1ZQ%3D%3D]" );
		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( { "hello": "world" } ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );

			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( { "hello": "world" } ).serialize( );

				}

			).value;

			assert.equal( testB, "[object Object:data:text/object;base64,eyJoZWxsbyI6IndvcmxkIn0%3D]" );
		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( Symbol.for( "hello" ) ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );
			//: @ignore:
			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( Symbol.for( "hello" ) ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testB, "[symbol Symbol:data:text/symbol;base64,U3ltYm9sKGhlbGxvKQ%3D%3D]" );
		} );
	} );

	// describe( "`ehm( ).create( function hello( ){ } ).serialize( )`", ( ) => {
	// 	it( "should return string type", ( ) => {
	// 		//: @ignore:
	// 		let testA = browser.url( bridgeURL ).execute(
	//
	// 			function( ){
	// 				let Meta = ehm( );
	//
	// 				return typeof Meta.create( function hello( ){ } ).serialize( );
	// 			}
	//
	// 		).value;
	// 		//: @end-ignore
	// 		assert.equal( testA, "string" );
	//
	// 		let testB = browser.url( bridgeURL ).execute(
	//
	// 			function( ){
	// 				let Meta = ehm( );
	//
	// 				return Meta.create( function hello( ){ } ).serialize( );
	// 			}
	//
	// 		).value;
	//
	// 		assert.equal( testB, "[function Function:data:text/function;base64,ZnVuY3Rpb24gaGVsbG8oICl7IH0%3D]" );
	// 	} );
	// } );

	describe( "`ehm( ).create( null ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( null ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			//: @ignore:
			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( null ).serialize( );
				}

			).value;
			//: @end-ignore

			assert.equal( testB, "[object Object:data:text/object;base64,bnVsbA%3D%3D]" );
		} );
	} );

	describe( "`ehm( ).create( undefined ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.create( undefined ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			//: @ignore:
			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.create( undefined ).serialize( );
				}

			).value;
			//: @end-ignore

			assert.equal( testB, "[undefined Undefined:data:text/undefined;base64,dW5kZWZpbmVk]" );
		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );

			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( );
				}

			).value;

			assert.equal( testB, "helloworld" );
		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "number" );

			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( );
				}

			).value;

			assert.equal( testB, 1 );
		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "boolean" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( );
				}

			).value;

			assert.equal( testB, true );
		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "object" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( );
				}

			).value;

			assert.deepEqual( testB, { "hello": "world" } );
		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( Symbol.for( 'hello' ) ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return symbol type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return typeof Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "symbol" );


			//: @ignore:
			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );

					return Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( ).toString( );
				}

			).value;
			//: @end-ignore
			assert.equal( testB, "Symbol(hello)" );
		} );
	} );

	describe( "`ehm( ).create( Error ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let testA = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );
					return typeof Meta.create( Error ).serialize( );
				}

			).value;
			//: @end-ignore
			assert.equal( testA, "string" );


			let testB = browser.url( bridgeURL ).execute(

				function( ){
					let Meta = ehm( );
					return Meta.create( Error ).serialize( );
				}

			).value;

			assert.equal( testB, "[function Function:data:text/function;base64,ZnVuY3Rpb24gRXJyb3IoKSB7IFtuYXRpdmUgY29kZV0gfQ%3D%3D]" );
		} );
	} );

} );

//: @end-bridge
