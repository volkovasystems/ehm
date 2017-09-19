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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var ehm = require("./ehm.support.js");
//: @end-client







//: @client:
describe("ehm", function () {

	describe("`ehm( )`", function () {
		it("should return Meta class", function () {
			var Meta = ehm();

			assert.equal(typeof Meta === "undefined" ? "undefined" : (0, _typeof3.default)(Meta), "function");

			assert.equal(Meta.name, "Meta");

		});
	});

	describe("`ehm( ).create( 'helloworld' ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create("helloworld").serialize()), "string");

			assert.equal(Meta.create("helloworld").serialize(), "[string String:data:text/string;base64,aGVsbG93b3JsZA%3D%3D]");

		});
	});

	describe("`ehm( ).create( 1 ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(1).serialize()), "string");

			assert.equal(Meta.create(1).serialize(), "[number Number:data:text/number;base64,MQ%3D%3D]");

		});
	});

	describe("`ehm( ).create( Infinity ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(Infinity).serialize()), "string");

			assert.equal(Meta.create(Infinity).serialize(), "[number Number:data:text/number;base64,SW5maW5pdHk%3D]");

		});
	});

	describe("`ehm( ).create( true ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(true).serialize()), "string");

			assert.equal(Meta.create(true).serialize(), "[boolean Boolean:data:text/boolean;base64,dHJ1ZQ%3D%3D]");

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create({ "hello": "world" }).serialize()), "string");

			assert.equal(Meta.create({ "hello": "world" }).serialize(), "[object Object:data:text/object;base64,eyJoZWxsbyI6IndvcmxkIn0%3D]");

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create((0, _for2.default)("hello")).serialize()), "string");

			assert.equal(Meta.create((0, _for2.default)("hello")).serialize(), "[symbol Symbol:data:text/symbol;base64,U3ltYm9sKGhlbGxvKQ%3D%3D]");

		});
	});

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

	describe("`ehm( ).create( Error ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(Error).serialize()), "string");

			assert.equal(Meta.create(Error).serialize(), "[function Function:data:text/function;base64,ZnVuY3Rpb24gRXJyb3IoKSB7IFtuYXRpdmUgY29kZV0gfQ%3D%3D]");

		});
	});

	// describe( "`ehm( ).create( ( ) => { } ).serialize( )`", ( ) => {
	// 	it( "should return string type", ( ) => {
	// 		let Meta = ehm( );
	//
	// 		assert.equal( typeof Meta.create( ( ) => { } ).serialize( ), "string" );
	//
	// 		assert.equal( Meta.create( ( ) => { } ).serialize( ), "[function Function:data:text/function;base64,KCApID0%2BIHsgfQ%3D%3D]" );
	//
	// 	} );
	// } );

	describe("`ehm( ).create( null ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(null).serialize()), "string");

			assert.equal(Meta.create(null).serialize(), "[object Object:data:text/object;base64,bnVsbA%3D%3D]");

		});
	});

	describe("`ehm( ).create( undefined ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(undefined).serialize()), "string");

			assert.equal(Meta.create(undefined).serialize(), "[undefined Undefined:data:text/undefined;base64,dW5kZWZpbmVk]");

		});
	});

	describe("`ehm( ).create( NaN ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(NaN).serialize()), "string");

			assert.equal(Meta.create(NaN).serialize(), "[number Number:data:text/number;base64,TmFO]");

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()), "string");

			assert.equal(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf(), "helloworld");

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", function () {
		it("should return number type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create(1).serialize()).valueOf()), "number");

			assert.equal(Meta.deserialize(Meta.create(1).serialize()).valueOf(), 1);

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( Infinity ).serialize( ) ).valueOf( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.deserialize(Meta.create(Infinity).serialize()).valueOf(), Infinity);

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", function () {
		it("should return boolean type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create(true).serialize()).valueOf()), "boolean");

			assert.equal(Meta.deserialize(Meta.create(true).serialize()).valueOf(), true);

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf()), "object");

			assert.deepEqual(Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf(), { "hello": "world" });

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( Symbol.for( 'hello' ) ).serialize( ) ).valueOf( )`", function () {
		it("should return symbol type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create((0, _for2.default)("hello")).serialize()).valueOf()), "symbol");

			assert.equal(Meta.deserialize(Meta.create((0, _for2.default)("hello")).serialize()).valueOf().toString(), "Symbol(hello)");

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( function hello( ){ } ).serialize( ) ).valueOf( )`", function () {
		it("should return function type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create(function hello() {}).serialize()).valueOf()), "function");

			assert.equal(Meta.deserialize(Meta.create(function hello() {}).serialize()).valueOf().name, "hello");

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create("helloworld").toString()), "string");

			var STRING_TAG_PATTERN = /^\[object String(?:\:(.+?))?\]$/;

			assert.equal(STRING_TAG_PATTERN.test(Meta.create("helloworld").toString()), true);

		});
	});

	describe("`ehm( ).create( 1 ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(1).toString()), "string");

			var NUMBER_TAG_PATTERN = /^\[object Number(?:\:(.+?))?\]$/;

			assert.equal(NUMBER_TAG_PATTERN.test(Meta.create(1).toString()), true);

		});
	});

	describe("`ehm( ).create( true ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(true).toString()), "string");

			var BOOLEAN_TAG_PATTERN = /^\[object Boolean(?:\:(.+?))?\]$/;

			assert.equal(BOOLEAN_TAG_PATTERN.test(Meta.create(true).toString()), true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create({ "hello": "world" }).toString()), "string");

			var OBJECT_TAG_PATTERN = /^\[object Object(?:\:(.+?))?\]$/;

			assert.equal(OBJECT_TAG_PATTERN.test(Meta.create({ "hello": "world" }).toString()), true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create((0, _for2.default)("hello")).toString()), "string");

			var SYMBOL_TAG_PATTERN = /^\[object Symbol(?:\:(.+?))?\]$/;

			assert.equal(SYMBOL_TAG_PATTERN.test(Meta.create((0, _for2.default)("hello")).toString()), true);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create("helloworld").toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( 1 ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create(1).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( true ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create(true).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create({ "hello": "world" }).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create((0, _for2.default)("hello")).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create("helloworld").toBoolean(), true);

		});
	});

	describe("`ehm( ).create( 1 ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create(1).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( true ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create(true).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create({ "hello": "world" }).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create((0, _for2.default)("hello")).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( 'helloworld' ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create("helloworld").toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`ehm( ).create( 1 ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create(1).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`ehm( ).create( true ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create(true).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create({ "hello": "world" }).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create((0, _for2.default)("hello")).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJJbmZpbml0eSIsIkVycm9yIiwidW5kZWZpbmVkIiwiTmFOIiwiZGVzZXJpYWxpemUiLCJ2YWx1ZU9mIiwiZGVlcEVxdWFsIiwidG9TdHJpbmciLCJoZWxsbyIsIlNUUklOR19UQUdfUEFUVEVSTiIsInRlc3QiLCJOVU1CRVJfVEFHX1BBVFRFUk4iLCJCT09MRUFOX1RBR19QQVRURVJOIiwiT0JKRUNUX1RBR19QQVRURVJOIiwiU1lNQk9MX1RBR19QQVRURVJOIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJkZXNjcmlwdG9yIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkJBLFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixVQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxJQUFuQixFQUF5QixNQUF6Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCx1QkFBcUJELEtBQUtH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QW9DLElBQXBDOztBQUVBM0IsVUFBT00sS0FBUCxDQUFjLFVBQVVxQixVQUF4QixFQUFvQyxJQUFwQzs7QUFFQTNCLFVBQU9NLEtBQVAsQ0FBYyxXQUFXcUIsVUFBekIsRUFBcUMsSUFBckM7O0FBRUEzQixVQUFPTSxLQUFQLENBQWMsWUFBWXFCLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBZkQ7QUFnQkEsRUFqQkQ7O0FBbUJBeEIsVUFBVSxzREFBVixFQUFrRSxZQUFPO0FBQ3hFQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQSxPQUFJeUIsYUFBYXRCLEtBQUtHLE1BQUwsQ0FBYSxtQkFBWSxPQUFaLENBQWIsRUFBcUNvQixRQUFyQyxFQUFqQjs7QUFFQTVCLFVBQU9NLEtBQVAsUUFBcUJxQixVQUFyQix1REFBcUJBLFVBQXJCLEdBQWlDLFFBQWpDOztBQUVBM0IsVUFBT00sS0FBUCxDQUFjLFVBQVVxQixVQUF4QixFQUFvQyxJQUFwQzs7QUFFQTNCLFVBQU9NLEtBQVAsQ0FBYyxVQUFVcUIsVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUEzQixVQUFPTSxLQUFQLENBQWMsV0FBV3FCLFVBQXpCLEVBQXFDLElBQXJDOztBQUVBM0IsVUFBT00sS0FBUCxDQUFjLFlBQVlxQixVQUExQixFQUFzQyxJQUF0Qzs7QUFFQSxHQWZEO0FBZ0JBLEVBakJEOztBQW1CQSxDQXRkRDtBQXVkQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZWhtID0gcmVxdWlyZSggXCIuL2VobS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBNZXRhIGNsYXNzXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YSwgXCJmdW5jdGlvblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5uYW1lLCBcIk1ldGFcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcIltzdHJpbmcgU3RyaW5nOmRhdGE6dGV4dC9zdHJpbmc7YmFzZTY0LGFHVnNiRzkzYjNKc1pBJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSwgXCJbbnVtYmVyIE51bWJlcjpkYXRhOnRleHQvbnVtYmVyO2Jhc2U2NCxNUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICksIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsU1c1bWFXNXBkSGslM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApLCBcIltib29sZWFuIEJvb2xlYW46ZGF0YTp0ZXh0L2Jvb2xlYW47YmFzZTY0LGRISjFaUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxleUpvWld4c2J5STZJbmR2Y214a0luMCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApLCBcIltzeW1ib2wgU3ltYm9sOmRhdGE6dGV4dC9zeW1ib2w7YmFzZTY0LFUzbHRZbTlzS0dobGJHeHZLUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHQvLyBcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0Ly8gXHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdhR1ZzYkc4b0lDbDdJSDAlM0RdXCIgKTtcblx0Ly9cblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKSwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdSWEp5YjNJb0tTQjdJRnR1WVhScGRtVWdZMjlrWlYwZ2ZRJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0Ly8gXHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdC8vIFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LEtDQXBJRDAlMkJJSHNnZlElM0QlM0RdXCIgKTtcblx0Ly9cblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKSwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxiblZzYkElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApLCBcIlt1bmRlZmluZWQgVW5kZWZpbmVkOmRhdGE6dGV4dC91bmRlZmluZWQ7YmFzZTY0LGRXNWtaV1pwYm1Wa11cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoICksIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsVG1GT11cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwiaGVsbG93b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcIm51bWJlclwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCAxICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcImJvb2xlYW5cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3ltYm9sIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcInN5bWJvbFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKS50b1N0cmluZyggKSwgXCJTeW1ib2woaGVsbG8pXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcImZ1bmN0aW9uXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLm5hbWUsIFwiaGVsbG9cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBTVFJJTkdfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTdHJpbmcoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggU1RSSU5HX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgTlVNQkVSX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgTnVtYmVyKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE5VTUJFUl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgQk9PTEVBTl9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEJvb2xlYW4oPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggQk9PTEVBTl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgT2JqZWN0KD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE9CSkVDVF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICkgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBTWU1CT0xfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTeW1ib2woPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggU1lNQk9MX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIDEgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIHRydWUgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
