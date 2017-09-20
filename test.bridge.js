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

	describe("`ehm( ).create( Infinity ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let test = typeof Meta.create( Infinity ).toString( );
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "string");

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

	describe("`ehm( ).create( null ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const OBJECT_TAG_PATTERN = /^\[object Null(?:\:(.+?))?\]$/;
   
   					let test = typeof Meta.create( null ).toString( ) == "string" &&
   						OBJECT_TAG_PATTERN.test( Meta.create( null ).toString( ) ) == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

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

	describe("`ehm( ).create( undefined ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					const OBJECT_TAG_PATTERN = /^\[object Undefined(?:\:(.+?))?\]$/;
   
   					let test = typeof Meta.create( undefined ).toString( ) == "string" &&
   						OBJECT_TAG_PATTERN.test( Meta.create( undefined ).toString( ) ) == true;
   
   					return test;
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

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

	describe("`ehm( ).create( Infinity ).toNumber( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let test = Meta.create( Infinity ).toNumber( ) == Infinity;
   
   					return test;
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

	describe("`ehm( ).create( null ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( null ).toNumber( ) == Infinity;
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

	describe("`ehm( ).create( undefined ).toNumber( )`", function () {
		it("should return Infinity", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( undefined ).toNumber( ) == Infinity;
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

	describe("`ehm( ).create( Infinity ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( Infinity ).toBoolean( );
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

	describe("`ehm( ).create( null ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( null ).toBoolean( );
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

	describe("`ehm( ).create( undefined ).toBoolean( )`", function () {
		it("should return true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   
   					return Meta.create( undefined ).toBoolean( );
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

	describe("`ehm( ).create( Infinity ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let descriptor = Meta.create( Infinity ).toObject( );
   
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

	describe("`ehm( ).create( null ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let descriptor = Meta.create( null ).toObject( );
   
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

	describe("`ehm( ).create( undefined ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					let descriptor = Meta.create( undefined ).toObject( );
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiZWhtIiwibmFtZSIsInZhbHVlIiwidGVzdEEiLCJ0ZXN0QiIsIk1ldGEiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJFcnJvciIsImRlc2VyaWFsaXplIiwidmFsdWVPZiIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7QUFHQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLG9CQUFPQyxNQUFPQyxJQUFkLEVBQWxDLEVBQXVEQyxLQUFyRSxFQUE0RSxNQUE1RTs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQVgsVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7QUFXQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsUUFBckI7OztBQUdBLE9BQUlDLFFBQVFQLFFBQVFDLEdBQVIs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Ozs7Ozs7Ozs7QUFtQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1ksTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXpCRDtBQTBCQSxFQTNCRDs7QUE2QkFqQixVQUFVLDBDQUFWLEVBQXNELFlBQU87QUFDNURJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1ksTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXhCRDtBQXlCQSxFQTFCRDs7QUE0QkEsQ0FyNENEOztBQXU0Q0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2YgZWhtKCApOyB9ICkudmFsdWUsIFwiZnVuY3Rpb25cIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZWhtKCApLm5hbWUgKS52YWx1ZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltzdHJpbmcgU3RyaW5nOmRhdGE6dGV4dC9zdHJpbmc7YmFzZTY0LGFHVnNiRzkzYjNKc1pBJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbbnVtYmVyIE51bWJlcjpkYXRhOnRleHQvbnVtYmVyO2Jhc2U2NCxNUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgTWV0YS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApID09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0XHRcdE1ldGEuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKSA9PSBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LFNXNW1hVzVwZEhrJTNEXVwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltib29sZWFuIEJvb2xlYW46ZGF0YTp0ZXh0L2Jvb2xlYW47YmFzZTY0LGRISjFaUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxleUpvWld4c2J5STZJbmR2Y214a0luMCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltzeW1ib2wgU3ltYm9sOmRhdGE6dGV4dC9zeW1ib2w7YmFzZTY0LFUzbHRZbTlzS0dobGJHeHZLUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8vIGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0Ly8gXHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdC8vIFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdC8vIFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblx0Ly9cblx0Ly8gXHRcdFx0ZnVuY3Rpb24oICl7XG5cdC8vIFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdC8vXG5cdC8vIFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICk7XG5cdC8vIFx0XHRcdH1cblx0Ly9cblx0Ly8gXHRcdCkudmFsdWU7XG5cdC8vIFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cdC8vXG5cdC8vIFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblx0Ly9cblx0Ly8gXHRcdFx0ZnVuY3Rpb24oICl7XG5cdC8vIFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdC8vXG5cdC8vIFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKTtcblx0Ly8gXHRcdFx0fVxuXHQvL1xuXHQvLyBcdFx0KS52YWx1ZTtcblx0Ly9cblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsWm5WdVkzUnBiMjRnYUdWc2JHOG9JQ2w3SUgwJTNEXVwiICk7XG5cdC8vIFx0fSApO1xuXHQvLyB9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIEVycm9yICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIEVycm9yICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LFpuVnVZM1JwYjI0Z1JYSnliM0lvS1NCN0lGdHVZWFJwZG1VZ1kyOWtaVjBnZlElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoICggKSA9PiB7IH0gKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LEtDQXBJRDAlMkJJSHNnZlElM0QlM0RdXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltvYmplY3QgT2JqZWN0OmRhdGE6dGV4dC9vYmplY3Q7YmFzZTY0LGJuVnNiQSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW3VuZGVmaW5lZCBVbmRlZmluZWQ6ZGF0YTp0ZXh0L3VuZGVmaW5lZDtiYXNlNjQsZFc1a1pXWnBibVZrXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbbnVtYmVyIE51bWJlcjpkYXRhOnRleHQvbnVtYmVyO2Jhc2U2NCxUbUZPXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiaGVsbG93b3JsZFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJudW1iZXJcIiApO1xuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgMSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApID09IEluZmluaXR5O1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJib29sZWFuXCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwib2JqZWN0XCIgKTtcblxuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCB0ZXN0QiwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN5bWJvbCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzeW1ib2xcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0Y29uc3QgU1RSSU5HX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgU3RyaW5nKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFNUUklOR19UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgTlVNQkVSX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgTnVtYmVyKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE5VTUJFUl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgTWV0YS5jcmVhdGUoIEluZmluaXR5ICkudG9TdHJpbmcoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJzdHJpbmdcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHRydWUgKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdGNvbnN0IEJPT0xFQU5fVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBCb29sZWFuKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRcdFx0cmV0dXJuIEJPT0xFQU5fVEFHX1BBVFRFUk4udGVzdCggTWV0YS5jcmVhdGUoIHRydWUgKS50b1N0cmluZyggKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdGNvbnN0IE9CSkVDVF9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IE9iamVjdCg/OlxcOiguKz8pKT9cXF0kLztcblxuXHRcdFx0XHRcdHJldHVybiBPQkpFQ1RfVEFHX1BBVFRFUk4udGVzdCggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIG51bGwgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0Y29uc3QgT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgTnVsbCg/OlxcOiguKz8pKT9cXF0kLztcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIE1ldGEuY3JlYXRlKCBudWxsICkudG9TdHJpbmcoICkgPT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHRcdFx0T0JKRUNUX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBudWxsICkudG9TdHJpbmcoICkgKSA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBTWU1CT0xfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTeW1ib2woPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRyZXR1cm4gU1lNQk9MX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHVuZGVmaW5lZCApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRjb25zdCBPQkpFQ1RfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBVbmRlZmluZWQoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9TdHJpbmcoICkgPT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHRcdFx0T0JKRUNUX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS50b1N0cmluZyggKSApID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggMSApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggbnVsbCApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggbnVsbCApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvTnVtYmVyKCApID09IEluZmluaXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdW5kZWZpbmVkICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS50b051bWJlciggKSA9PSBJbmZpbml0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIEluZmluaXR5ICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBudWxsICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBudWxsICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvQm9vbGVhbiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHVuZGVmaW5lZCApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9Cb29sZWFuKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggMSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIEluZmluaXR5ICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIEluZmluaXR5ICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSB0eXBlb2YgZGVzY3JpcHRvciA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdFx0XHRcInR5cGVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwibmFtZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggbnVsbCApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCBudWxsICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWUgJiZcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
