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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiZWhtIiwibmFtZSIsInZhbHVlIiwidGVzdEEiLCJ0ZXN0QiIsIk1ldGEiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7OztBQVNBOztBQUVBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEM7QUFDSDs7O0FBR0E7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBT0MsSUFBZCxFQUFsQyxFQUF1REMsS0FBckUsRUFBNEUsTUFBNUU7O0FBRUEsR0FURDtBQVVBLEVBWEQ7O0FBYUFYLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7O0FBV0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjTyxLQUFkLEVBQXFCLFFBQXJCOzs7QUFHQSxPQUFJQyxRQUFRUCxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJP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O0FBQ0EsR0E1QkQ7QUE2QkEsRUE5QkQ7O0FBZ0NBYixVQUFVLHVGQUFWLEVBQW1HLFlBQU87QUFDekdJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7OztBQVdBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY08sS0FBZCxFQUFxQixRQUFyQjs7O0FBR0EsT0FBSUMsUUFBUVAsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWCxlQUFXO0FBQ1YsUUFBSU0sT0FBT0wsS0FBWDs7QUFFQSxXQUFPSyxLQUFLRyxXQUFMLENBQWtCSCxLQUFLQyxNQUFMLENBQWEsRUFBRSxTQUFTLE9BQVgsRUFBYixFQUFvQ0MsU0FBcEMsRUFBbEIsRUFBcUVFLE9BQXJFLEVBQVA7QUFDQSxJQU5VOztBQVFWUCxRQVJGOztBQVVBZCxVQUFPc0IsU0FBUCxDQUFrQk4sS0FBbEIsRUFBeUIsRUFBRSxTQUFTLE9BQVgsRUFBekI7QUFDQSxHQTVCRDtBQTZCQSxFQTlCRDs7QUFnQ0FiLFVBQVUsd0ZBQVYsRUFBb0csWUFBTztBQUMxR0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7O0FBV0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjTyxLQUFkLEVBQXFCLFFBQXJCOzs7QUFHQTtBQUNIOzs7Ozs7Ozs7OztBQVdBO0FBQ0dmLFVBQU9RLEtBQVAsQ0FBY1EsS0FBZCxFQUFxQixlQUFyQjtBQUNBLEdBL0JEO0FBZ0NBLEVBakNEOztBQW1DQSxDQWxYRDs7QUFvWEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2YgZWhtKCApOyB9ICkudmFsdWUsIFwiZnVuY3Rpb25cIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZWhtKCApLm5hbWUgKS52YWx1ZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltzdHJpbmcgU3RyaW5nOmRhdGE6dGV4dC9zdHJpbmc7YmFzZTY0LGFHVnNiRzkzYjNKc1pBJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbbnVtYmVyIE51bWJlcjpkYXRhOnRleHQvbnVtYmVyO2Jhc2U2NCxNUSUzRCUzRF1cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW2Jvb2xlYW4gQm9vbGVhbjpkYXRhOnRleHQvYm9vbGVhbjtiYXNlNjQsZEhKMVpRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIltvYmplY3QgT2JqZWN0OmRhdGE6dGV4dC9vYmplY3Q7YmFzZTY0LGV5Sm9aV3hzYnlJNkluZHZjbXhrSW4wJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIFwiW3N5bWJvbCBTeW1ib2w6ZGF0YTp0ZXh0L3N5bWJvbDtiYXNlNjQsVTNsdFltOXNLR2hsYkd4dktRJTNEJTNEXVwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHQvLyBcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0Ly8gXHRcdC8vOiBAaWdub3JlOlxuLypcblx0Ly8gXHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHQvL1xuXHQvLyBcdFx0XHRmdW5jdGlvbiggKXtcblx0Ly8gXHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKTtcblx0Ly8gXHRcdFx0fVxuXHQvL1xuXHQvLyBcdFx0KS52YWx1ZTtcblx0Ly8gXHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblx0Ly9cblx0Ly8gXHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXHQvL1xuXHQvLyBcdFx0XHRmdW5jdGlvbiggKXtcblx0Ly8gXHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApO1xuXHQvLyBcdFx0XHR9XG5cdC8vXG5cdC8vIFx0XHQpLnZhbHVlO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdhR1ZzYkc4b0lDbDdJSDAlM0RdXCIgKTtcblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgXCJoZWxsb3dvcmxkXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEEgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcIm51bWJlclwiICk7XG5cblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCAxICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwiYm9vbGVhblwiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcIm9iamVjdFwiICk7XG5cblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdEIsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzeW1ib2wgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3ltYm9sXCIgKTtcblxuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCBcIlN5bWJvbChoZWxsbylcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
