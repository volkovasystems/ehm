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

const assert = require( "should" );

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

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {

			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

			assert.equal( Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

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

	describe( "`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", ( ) => {
		it( "should return string type", ( ) => {

			let Meta = ehm( );

			assert.equal( typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

			assert.equal( Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ), Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( ) );

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
