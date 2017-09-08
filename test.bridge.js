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
   			let testA= browser.url( bridgeURL ).execute(
   
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
				return Meta.create("helloworld").serialize() === Meta.create("helloworld").serialize();
			}).

			value;

			assert.equal(testB, true);

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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.create( 1 ).serialize( ) === Meta.create( 1 ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);
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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.create( true ).serialize( ) === Meta.create( true ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);
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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.create( { "hello": "world" } ).serialize( ) === Meta.create( { "hello": "world" } ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);
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
   					return Meta.create( Symbol.for( "hello" ) ).serialize( ) === Meta.create( Symbol.for( "hello" ) ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);
		});
	});

	describe("`ehm( ).create( function hello( ){ } ).serialize( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let testA = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return typeof Meta.create( function hello( ){ } ).serialize( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testA, "string");

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.create( function hello( ){ } ).serialize( ) === "[function Function:data:text/function;base64,ZnVuY3Rpb24gaGVsbG8oICl7IH0%3D]";
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);

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
				return Meta.deserialize(Meta.create("helloworld").serialize()).valueOf() === Meta.deserialize(Meta.create("helloworld").serialize()).valueOf();

			}).

			value;

			assert.equal(testB, true);

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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( ) === Meta.deserialize( Meta.create( 1 ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);

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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( ) === Meta.deserialize( Meta.create( true ).serialize( ) ).valueOf( );
   				}
   
   			).value;
   			//: @end-ignore
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

			//: @ignore:
   			let testB = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Meta = ehm( );
   					return Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ).hello == Meta.deserialize( Meta.create( { "hello": "world" } ).serialize( ) ).valueOf( ).hello;
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(testB, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiZWhtIiwibmFtZSIsInZhbHVlIiwidGVzdEEiLCJ0ZXN0QiIsIk1ldGEiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7OztBQVNBOztBQUVBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEM7QUFDSDs7O0FBR0E7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBT0MsSUFBZCxFQUFsQyxFQUF1REMsS0FBckUsRUFBNEUsTUFBNUU7O0FBRUEsR0FURDtBQVVBLEVBWEQ7O0FBYUFYLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7QUFVQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsUUFBckI7O0FBRUEsT0FBSUMsUUFBUVAsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWCxl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Q0g7Ozs7Ozs7Ozs7QUFVQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsUUFBckI7O0FBRUE7QUFDSDs7Ozs7Ozs7OztBQVVBO0FBQ0dmLFVBQU9RLEtBQVAsQ0FBY1EsS0FBZCxFQUFxQixJQUFyQjs7QUFFQSxHQTdCRDtBQThCQSxFQS9CRDs7QUFpQ0FiLFVBQVUsdUVBQVYsRUFBbUYsWUFBTztBQUN6RkksS0FBSSw0QkFBSixFQUFrQyxZQUFPO0FBQ3hDO0FBQ0g7Ozs7Ozs7Ozs7QUFVQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNPLEtBQWQsRUFBcUIsU0FBckI7O0FBRUE7QUFDSDs7Ozs7Ozs7OztBQVVBO0FBQ0dmLFVBQU9RLEtBQVAsQ0FBY1EsS0FBZCxFQUFxQixJQUFyQjtBQUNBLEdBNUJEO0FBNkJBLEVBOUJEOztBQWdDQWIsVUFBVSx1RkFBVixFQUFtRyxZQUFPO0FBQ3pHSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7OztBQVVBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY08sS0FBZCxFQUFxQixRQUFyQjs7QUFFQTtBQUNIOzs7Ozs7Ozs7O0FBVUE7QUFDR2YsVUFBT1EsS0FBUCxDQUFjUSxLQUFkLEVBQXFCLElBQXJCOztBQUVBLEdBN0JEO0FBOEJBLEVBL0JEOztBQWlDQSxDQXBWRDs7QUFzVkEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggZnVuY3Rpb24oICl7IHJldHVybiB0eXBlb2YgZWhtKCApOyB9ICkudmFsdWUsIFwiZnVuY3Rpb25cIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZWhtKCApLm5hbWUgKS52YWx1ZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApID09PSBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgPT09IE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgPT09IE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSA9PT0gTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSA9PT0gTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICkgPT09IFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsWm5WdVkzUnBiMjRnYUdWc2JHOG9JQ2w3SUgwJTNEXVwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RCLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEEsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0bGV0IHRlc3RCID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSA9PT0gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcIm51bWJlclwiICk7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QiA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgPT09IE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCB0ZXN0QSA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRlc3RBLCBcImJvb2xlYW5cIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApID09PSBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHRlc3RBID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0ZXN0QSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgdGVzdEIgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkuaGVsbG8gPT0gTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkuaGVsbG87XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggdGVzdEIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
