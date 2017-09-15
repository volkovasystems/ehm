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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("ehm", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ehm( )`", function () {
		it("should return Meta class", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof ehm( ); } ).value, "function" );
   			//: @end-ignore

			assert.equal(browser.url(bridgeURL).execute(function () {return ehm().name;}).value, "Meta");

		});
	});

	describe("`ehm( ).create( 'helloworld' ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( "helloworld" ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.create("helloworld").serialize();
			}).

			value;

			assert.equal(testB, "[string String:data:text/string;base64,aGVsbG93b3JsZA%3D%3D]");
		});
	});

	describe("`ehm( ).create( 1 ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( 1 ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.create(1).serialize();
			}).

			value;

			assert.equal(testB, "[number Number:data:text/number;base64,MQ%3D%3D]");
		});
	});

	describe("`ehm( ).create( true ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( true ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.create(true).serialize();
			}).

			value;

			assert.equal(testB, "[boolean Boolean:data:text/boolean;base64,dHJ1ZQ%3D%3D]");
		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( { "hello": "world" } ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");

			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.create({ "hello": "world" }).serialize();

			}).

			value;

			assert.equal(testB, "[object Object:data:text/object;base64,eyJoZWxsbyI6IndvcmxkIn0%3D]");
		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( Symbol.for( "hello" ) ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");
			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( Symbol.for( "hello" ) ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, "[symbol Symbol:data:text/symbol;base64,U3ltYm9sKGhlbGxvKQ%3D%3D]");
		});
	});

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

	describe("`ehm( ).create( Error ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return typeof Meta.create( Error ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();
				return Meta.create(Error).serialize();
			}).

			value;

			assert.equal(testB, "[function Function:data:text/function;base64,ZnVuY3Rpb24gRXJyb3IoKSB7IFtuYXRpdmUgY29kZV0gfQ%3D%3D]");
		});
	});

	describe("`ehm( ).create( ( ) => { } ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( ( ) => { } ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( ( ) => { } ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, "[function Function:data:text/function;base64,KCApID0%2BIHsgfQ%3D%3D]");
		});
	});

	describe("`ehm( ).create( null ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( null ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( null ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, "[object Object:data:text/object;base64,bnVsbA%3D%3D]");
		});
	});

	describe("`ehm( ).create( undefined ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( undefined ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( undefined ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, "[undefined Undefined:data:text/undefined;base64,dW5kZWZpbmVk]");
		});
	});

	describe("`ehm( ).create( NaN ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( NaN ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( NaN ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, "[number Number:data:text/number;base64,TmFO]");
		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.deserialize( Meta.create( "helloworld" ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");

			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.deserialize(Meta.create("helloworld").serialize()).valueOf();
			}).

			value;

			assert.equal(testB, "helloworld");
		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "number");

			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.deserialize(Meta.create(1).serialize()).valueOf();
			}).

			value;

			assert.equal(testB, 1);
		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "boolean");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.deserialize(Meta.create(true).serialize()).valueOf();
			}).

			value;

			assert.equal(testB, true);
		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "object");


			var testB = browser.url(bridgeURL).execute(

			function () {
				var Meta = ehm();

				return Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf();
			}).

			value;

			assert.deepEqual(testB, { "hello": "world" });
		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( Symbol.for( 'hello' ) ).serialize( ) ).valueOf( )`", function () {
		it("should return symbol type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "symbol");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.deserialize( Meta.create( Symbol.for( "hello" ) ).serialize( ) ).valueOf( ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, "Symbol(hello)");
		});
	});

	describe("`ehm( ).create( 'helloworld' ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( "helloworld" ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					const STRING_TAG_PATTERN = /^\[object String(?:\:(.+?))?\]$/;
   
   					return STRING_TAG_PATTERN.test( Meta.create( "helloworld" ).toString( ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, true);
		});
	});

	describe("`ehm( ).create( 1 ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( 1 ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const NUMBER_TAG_PATTERN = /^\[object Number(?:\:(.+?))?\]$/;
   
   					return NUMBER_TAG_PATTERN.test( Meta.create( 1 ).toString( ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);
		});
	});

	describe("`ehm( ).create( true ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( true ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const BOOLEAN_TAG_PATTERN = /^\[object Boolean(?:\:(.+?))?\]$/;
   
   					return BOOLEAN_TAG_PATTERN.test( Meta.create( true ).toString( ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, true);
		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( { "hello": "world" } ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const OBJECT_TAG_PATTERN = /^\[object Object(?:\:(.+?))?\]$/;
   
   					return OBJECT_TAG_PATTERN.test( Meta.create( { "hello": "world" } ).toString( ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return typeof Meta.create( Symbol.for( "hello" ) ).toString( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");


			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const SYMBOL_TAG_PATTERN = /^\[object Symbol(?:\:(.+?))?\]$/;
   
   					return SYMBOL_TAG_PATTERN.test( Meta.create( Symbol.for( "hello" ) ).toString( ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(testB, true);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( "helloworld" ).toNumber( ) == Infinity;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( 1 ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( 1 ).toNumber( ) == Infinity;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( true ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( true ).toNumber( ) == Infinity;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( { "hello": "world" } ).toNumber( ) == Infinity;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( Symbol.for( "hello" ) ).toNumber( ) == Infinity;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( "helloworld" ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( 1 ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( 1 ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( true ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( true ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( { "hello": "world" } ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( Symbol.for( "hello" ) ).toBoolean( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					let descriptor = Meta.create( "helloworld" ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( 1 ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					let descriptor = Meta.create( 1 ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( true ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					let descriptor = Meta.create( true ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					let descriptor = Meta.create( { "hello": "world" } ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					let descriptor = Meta.create( Symbol.for( "hello" ) ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiZWhtIiwibmFtZSIsInZhbHVlIiwidGVzdEEiLCJ0ZXN0QiIsIk1ldGEiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJFcnJvciIsImRlc2VyaWFsaXplIiwidmFsdWVPZiIsImRlZXBFcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFPQyxJQUFkLEVBQWxDLEVBQXVEQyxLQUFyRSxFQUE0RSxNQUE1RTs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQVgsVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7QUFXQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsUUFBckI7OztBQUdBLE9BQUlDLFFBQVFQLFFBQVFDLEdBQVIs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cUJBckIsVUFBVSw2Q0FBVixFQUF5RCxZQUFPO0FBQy9ESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjZ0IsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXpCRDtBQTBCQSxFQTNCRDs7QUE2QkFyQixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNnQixNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBekJEO0FBMEJBLEVBM0JEOztBQTZCQXJCLFVBQVUscUNBQVYsRUFBaUQsWUFBTztBQUN2REksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY2dCLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0F6QkQ7QUEwQkEsRUEzQkQ7O0FBNkJBckIsVUFBVSxxREFBVixFQUFpRSxZQUFPO0FBQ3ZFSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjZ0IsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXpCRDtBQTBCQSxFQTNCRDs7QUE2QkFyQixVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNnQixNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBekJEO0FBMEJBLEVBM0JEOztBQTZCQSxDQTdqQ0Q7O0FBK2pDQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiZWhtXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBNZXRhIGNsYXNzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCBmdW5jdGlvbiggKXsgcmV0dXJuIHR5cGVvZiBlaG0oICk7IH0gKS52YWx1ZSwgXCJmdW5jdGlvblwiICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlaG0oICkubmFtZSApLnZhbHVlLCBcIk1ldGFcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW3N0cmluZyBTdHJpbmc6ZGF0YTp0ZXh0L3N0cmluZztiYXNlNjQsYUdWc2JHOTNiM0pzWkElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LE1RJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbYm9vbGVhbiBCb29sZWFuOmRhdGE6dGV4dC9ib29sZWFuO2Jhc2U2NCxkSEoxWlElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW29iamVjdCBPYmplY3Q6ZGF0YTp0ZXh0L29iamVjdDtiYXNlNjQsZXlKb1pXeHNieUk2SW5kdmNteGtJbjAlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbc3ltYm9sIFN5bWJvbDpkYXRhOnRleHQvc3ltYm9sO2Jhc2U2NCxVM2x0WW05c0tHaGxiR3h2S1ElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdC8vIFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHQvLyBcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHQvLyBcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cdC8vXG5cdC8vIFx0XHRcdGZ1bmN0aW9uKCApe1xuXHQvLyBcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHQvL1xuXHQvLyBcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApO1xuXHQvLyBcdFx0XHR9XG5cdC8vXG5cdC8vIFx0XHQpLnZhbHVlO1xuXHQvLyBcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXHQvL1xuXHQvLyBcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cdC8vXG5cdC8vIFx0XHRcdGZ1bmN0aW9uKCApe1xuXHQvLyBcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHQvL1xuXHQvLyBcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICk7XG5cdC8vIFx0XHRcdH1cblx0Ly9cblx0Ly8gXHRcdCkudmFsdWU7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LFpuVnVZM1JwYjI0Z2FHVnNiRzhvSUNsN0lIMCUzRF1cIiApO1xuXHQvLyBcdH0gKTtcblx0Ly8gfSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdSWEp5YjNJb0tTQjdJRnR1WVhScGRtVWdZMjlrWlYwZ2ZRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICggKSA9PiB7IH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoICggKSA9PiB7IH0gKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxLQ0FwSUQwJTJCSUhzZ2ZRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBudWxsICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxiblZzYkElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHVuZGVmaW5lZCApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIlt1bmRlZmluZWQgVW5kZWZpbmVkOmRhdGE6dGV4dC91bmRlZmluZWQ7YmFzZTY0LGRXNWtaV1pwYm1Wa11cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggTmFOICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsVG1GT11cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcImhlbGxvd29ybGRcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwibnVtYmVyXCIgKTtcblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIDEgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJib29sZWFuXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwib2JqZWN0XCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0ZXN0QiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN5bWJvbCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzeW1ib2xcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0Y29uc3QgU1RSSU5HX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgU3RyaW5nKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFNUUklOR19UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgTlVNQkVSX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgTnVtYmVyKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE5VTUJFUl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgQk9PTEVBTl9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEJvb2xlYW4oPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gQk9PTEVBTl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgT2JqZWN0KD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE9CSkVDVF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgU1lNQk9MX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgU3ltYm9sKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFNZTUJPTF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9OdW1iZXIoICkgPT0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCAxICkudG9OdW1iZXIoICkgPT0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0cnVlICkudG9OdW1iZXIoICkgPT0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9OdW1iZXIoICkgPT0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkudG9OdW1iZXIoICkgPT0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggMSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRydWUgKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIDEgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHRcdFxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
