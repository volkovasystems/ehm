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

			assert.equal( Meta.create( "helloworld" ).serialize( ), Meta.create( "helloworld" ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( 1 ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( 1 ).serialize( ), "string" );

			assert.equal( Meta.create( 1 ).serialize( ), Meta.create( 1 ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( true ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( true ).serialize( ), "string" );

			assert.equal( Meta.create( true ).serialize( ), Meta.create( true ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( { "hello": "world" } ).serialize( ), "string" );

			assert.equal( Meta.create( { "hello": "world" } ).serialize( ), Meta.create( { "hello": "world" } ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Symbol.for( "hello" ) ).serialize( ), "string" );

			assert.equal( Meta.create( Symbol.for( "hello" ) ).serialize( ), Meta.create( Symbol.for( "hello" ) ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( function hello( ){ } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( function hello( ){ } ).serialize( ), "string" );

			assert.equal( Meta.create( function hello( ){ } ).serialize( ), Meta.create( function hello( ){ } ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), "string" );

			assert.equal( Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return number type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), "number" );

			assert.equal( Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), "boolean" );

			assert.equal( Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), "object" );

			assert.deepEqual( Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ) );

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

			assert.equal( Meta.create( "helloworld" ).serialize( ), Meta.create( "helloworld" ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( 1 ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( 1 ).serialize( ), "string" );

			assert.equal( Meta.create( 1 ).serialize( ), Meta.create( 1 ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( true ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( true ).serialize( ), "string" );

			assert.equal( Meta.create( true ).serialize( ), Meta.create( true ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( { 'hello': 'world' } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( { "hello": "world" } ).serialize( ), "string" );

			assert.equal( Meta.create( { "hello": "world" } ).serialize( ), Meta.create( { "hello": "world" } ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( Symbol.for( "hello" ) ).serialize( ), "string" );

			assert.equal( Meta.create( Symbol.for( "hello" ) ).serialize( ), Meta.create( Symbol.for( "hello" ) ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).create( function hello( ){ } ).serialize( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.create( function hello( ){ } ).serialize( ), "string" );

			assert.equal( Meta.create( function hello( ){ } ).serialize( ), Meta.create( function hello( ){ } ).serialize( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), "string" );

			assert.equal( Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return number type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), "number" );

			assert.equal( Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), "boolean" );

			assert.equal( Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ) );

		} );
	} );

	describe( "`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return object type", ( ) => {
			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), "object" );

			assert.deepEqual( Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ) );

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
			let testA= browser.url( bridgeURL ).execute(

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
					return Meta.create( "helloworld" ).serialize( ) === Meta.create( "helloworld" ).serialize( );
				}

			).value;

			assert.equal( testB, true );

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
					return Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) === Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( );

				}

			).value;

			assert.equal( testB, true );

		} );
	} );

} );

//: @end-bridge
