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

	describe("`ehm( ).create( Infinity ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let test = typeof Meta.create( Infinity ).serialize( ) == "string" &&
   						Meta.create( Infinity ).serialize( ) == "[number Number:data:text/number;base64,SW5maW5pdHk%3D]";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

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

	describe("`ehm( ).deserialize( ehm( ).create( Infinity ).serialize( ) ).valueOf( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let test = Meta.deserialize( Meta.create( Infinity ).serialize( ) ).valueOf( ) == Infinity;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiZWhtIiwibmFtZSIsInZhbHVlIiwidGVzdEEiLCJ0ZXN0QiIsIk1ldGEiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJFcnJvciIsImRlc2VyaWFsaXplIiwidmFsdWVPZiIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFPQyxJQUFkLEVBQWxDLEVBQXVEQyxLQUFyRSxFQUE0RSxNQUE1RTs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQVgsVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7QUFXQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsUUFBckI7OztBQUdBLE9BQUlDLFFBQVFQLFFBQVFDLEdBQVIs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SUFBdEI7O0FBRUEsR0F6QkQ7QUEwQkEsRUEzQkQ7O0FBNkJBakIsVUFBVSxzREFBVixFQUFrRSxZQUFPO0FBQ3hFSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjWSxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBekJEO0FBMEJBLEVBM0JEOztBQTZCQSxDQXhtQ0Q7O0FBMG1DQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiZWhtXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBNZXRhIGNsYXNzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCBmdW5jdGlvbiggKXsgcmV0dXJuIHR5cGVvZiBlaG0oICk7IH0gKS52YWx1ZSwgXCJmdW5jdGlvblwiICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlaG0oICkubmFtZSApLnZhbHVlLCBcIk1ldGFcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW3N0cmluZyBTdHJpbmc6ZGF0YTp0ZXh0L3N0cmluZztiYXNlNjQsYUdWc2JHOTNiM0pzWkElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LE1RJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICkgPT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHRcdFx0TWV0YS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApID09IFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsU1c1bWFXNXBkSGslM0RdXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW2Jvb2xlYW4gQm9vbGVhbjpkYXRhOnRleHQvYm9vbGVhbjtiYXNlNjQsZEhKMVpRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltvYmplY3QgT2JqZWN0OmRhdGE6dGV4dC9vYmplY3Q7YmFzZTY0LGV5Sm9aV3hzYnlJNkluZHZjbXhrSW4wJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW3N5bWJvbCBTeW1ib2w6ZGF0YTp0ZXh0L3N5bWJvbDtiYXNlNjQsVTNsdFltOXNLR2hsYkd4dktRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHQvLyBcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0Ly8gXHRcdC8vOiBAaWdub3JlOlxuLypcblx0Ly8gXHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHQvL1xuXHQvLyBcdFx0XHRmdW5jdGlvbiggKXtcblx0Ly8gXHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKTtcblx0Ly8gXHRcdFx0fVxuXHQvL1xuXHQvLyBcdFx0KS52YWx1ZTtcblx0Ly8gXHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblx0Ly9cblx0Ly8gXHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHQvL1xuXHQvLyBcdFx0XHRmdW5jdGlvbiggKXtcblx0Ly8gXHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApO1xuXHQvLyBcdFx0XHR9XG5cdC8vXG5cdC8vIFx0XHQpLnZhbHVlO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdhR1ZzYkc4b0lDbDdJSDAlM0RdXCIgKTtcblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIEVycm9yICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsWm5WdVkzUnBiMjRnUlhKeWIzSW9LU0I3SUZ0dVlYUnBkbVVnWTI5a1pWMGdmUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsS0NBcElEMCUyQklIc2dmUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBudWxsICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBudWxsICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW29iamVjdCBPYmplY3Q6ZGF0YTp0ZXh0L29iamVjdDtiYXNlNjQsYm5Wc2JBJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHVuZGVmaW5lZCApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHVuZGVmaW5lZCApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbdW5kZWZpbmVkIFVuZGVmaW5lZDpkYXRhOnRleHQvdW5kZWZpbmVkO2Jhc2U2NCxkVzVrWldacGJtVmtdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggTmFOICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggTmFOICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LFRtRk9dXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJoZWxsb3dvcmxkXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcIm51bWJlclwiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCAxICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRsZXQgdGVzdCA9IE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgPT0gSW5maW5pdHk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcImJvb2xlYW5cIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJvYmplY3RcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRlc3RCLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3ltYm9sIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN5bWJvbFwiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJTeW1ib2woaGVsbG8pXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRjb25zdCBTVFJJTkdfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTdHJpbmcoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gU1RSSU5HX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBOVU1CRVJfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBOdW1iZXIoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gTlVNQkVSX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCAxICkudG9TdHJpbmcoICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBCT09MRUFOX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgQm9vbGVhbig/OlxcOiguKz8pKT9cXF0kLztcblxuXHRcdFx0XHRcdHJldHVybiBCT09MRUFOX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBPQkpFQ1RfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBPYmplY3QoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gT0JKRUNUX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b1N0cmluZyggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBTWU1CT0xfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTeW1ib2woPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gU1lNQk9MX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIDEgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRydWUgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggMSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
