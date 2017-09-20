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

	describe("`ehm( ).create( Infinity ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(Infinity).toString()), "string");

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

	describe("`ehm( ).create( null ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(null).toString()), "string");

			var OBJECT_TAG_PATTERN = /^\[object Null(?:\:(.+?))?\]$/;

			assert.equal(OBJECT_TAG_PATTERN.test(Meta.create(null).toString()), true);

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

	describe("`ehm( ).create( undefined ).toString( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(undefined).toString()), "string");

			var OBJECT_TAG_PATTERN = /^\[object Undefined(?:\:(.+?))?\]$/;

			assert.equal(OBJECT_TAG_PATTERN.test(Meta.create(undefined).toString()), true);

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

	describe("`ehm( ).create( Infinity ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create(Infinity).toNumber(), Infinity);

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

	describe("`ehm( ).create( null ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create(null).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create((0, _for2.default)("hello")).toNumber(), Infinity);

		});
	});

	describe("`ehm( ).create( undefined ).toNumber( )`", function () {
		it("should return Infinity", function () {
			var Meta = ehm();

			assert.equal(Meta.create(undefined).toNumber(), Infinity);

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

	describe("`ehm( ).create( Infinity ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create(Infinity).toBoolean(), true);

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

	describe("`ehm( ).create( null ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create(null).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create((0, _for2.default)("hello")).toBoolean(), true);

		});
	});

	describe("`ehm( ).create( undefined ).toBoolean( )`", function () {
		it("should return true", function () {
			var Meta = ehm();

			assert.equal(Meta.create(undefined).toBoolean(), true);

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

	describe("`ehm( ).create( Infinity ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create(Infinity).toObject();

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

	describe("`ehm( ).create( null ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create(null).toObject();

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

	describe("`ehm( ).create( undefined ).toObject( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			var descriptor = Meta.create(undefined).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJJbmZpbml0eSIsIkVycm9yIiwidW5kZWZpbmVkIiwiTmFOIiwiZGVzZXJpYWxpemUiLCJ2YWx1ZU9mIiwiZGVlcEVxdWFsIiwidG9TdHJpbmciLCJoZWxsbyIsIlNUUklOR19UQUdfUEFUVEVSTiIsInRlc3QiLCJOVU1CRVJfVEFHX1BBVFRFUk4iLCJCT09MRUFOX1RBR19QQVRURVJOIiwiT0JKRUNUX1RBR19QQVRURVJOIiwiU1lNQk9MX1RBR19QQVRURVJOIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJkZXNjcmlwdG9yIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkJBLFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixVQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxJQUFuQixFQUF5QixNQUF6Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCx1QkFBcUJELEtBQUtH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T00sS0FBUCxDQUFjLFVBQVVxQixVQUF4QixFQUFvQyxJQUFwQzs7QUFFQTNCLFVBQU9NLEtBQVAsQ0FBYyxXQUFXcUIsVUFBekIsRUFBcUMsSUFBckM7O0FBRUEzQixVQUFPTSxLQUFQLENBQWMsWUFBWXFCLFVBQTFCLEVBQXNDLElBQXRDOztBQUVBLEdBZkQ7QUFnQkEsRUFqQkQ7O0FBbUJBLENBeG1CRDtBQXltQkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlaG1cIixcblx0XHRcdFwicGF0aFwiOiBcImVobS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGVobSA9IHJlcXVpcmUoIFwiLi9laG0uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJlaG1cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEsIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEubmFtZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSwgXCJbc3RyaW5nIFN0cmluZzpkYXRhOnRleHQvc3RyaW5nO2Jhc2U2NCxhR1ZzYkc5M2IzSnNaQSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICksIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsTVElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIEluZmluaXR5ICkuc2VyaWFsaXplKCApLCBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LFNXNW1hVzVwZEhrJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSwgXCJbYm9vbGVhbiBCb29sZWFuOmRhdGE6dGV4dC9ib29sZWFuO2Jhc2U2NCxkSEoxWlElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICksIFwiW29iamVjdCBPYmplY3Q6ZGF0YTp0ZXh0L29iamVjdDtiYXNlNjQsZXlKb1pXeHNieUk2SW5kdmNteGtJbjAlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSwgXCJbc3ltYm9sIFN5bWJvbDpkYXRhOnRleHQvc3ltYm9sO2Jhc2U2NCxVM2x0WW05c0tHaGxiR3h2S1ElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8vIGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0Ly8gXHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdC8vIFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICksIFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsWm5WdVkzUnBiMjRnYUdWc2JHOG9JQ2w3SUgwJTNEXVwiICk7XG5cdC8vXG5cdC8vIFx0fSApO1xuXHQvLyB9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIEVycm9yICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoICksIFwiW2Z1bmN0aW9uIEZ1bmN0aW9uOmRhdGE6dGV4dC9mdW5jdGlvbjtiYXNlNjQsWm5WdVkzUnBiMjRnUlhKeWIzSW9LU0I3SUZ0dVlYUnBkbVVnWTI5a1pWMGdmUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICggKSA9PiB7IH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdC8vIFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHQvLyBcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKSwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxLQ0FwSUQwJTJCSUhzZ2ZRJTNEJTNEXVwiICk7XG5cdC8vXG5cdC8vIFx0fSApO1xuXHQvLyB9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBudWxsICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoICksIFwiW29iamVjdCBPYmplY3Q6ZGF0YTp0ZXh0L29iamVjdDtiYXNlNjQsYm5Wc2JBJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHVuZGVmaW5lZCApLnNlcmlhbGl6ZSggKSwgXCJbdW5kZWZpbmVkIFVuZGVmaW5lZDpkYXRhOnRleHQvdW5kZWZpbmVkO2Jhc2U2NCxkVzVrWldacGJtVmtdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggTmFOICkuc2VyaWFsaXplKCApLCBcIltudW1iZXIgTnVtYmVyOmRhdGE6dGV4dC9udW1iZXI7YmFzZTY0LFRtRk9dXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcImhlbGxvd29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJudW1iZXJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgMSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBJbmZpbml0eSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIEluZmluaXR5ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJib29sZWFuXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN5bWJvbCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJzeW1ib2xcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkudG9TdHJpbmcoICksIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmdW5jdGlvbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJmdW5jdGlvblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKS5uYW1lLCBcImhlbGxvXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgU1RSSU5HX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgU3RyaW5nKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFNUUklOR19UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGNvbnN0IE5VTUJFUl9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IE51bWJlcig/OlxcOiguKz8pKT9cXF0kLztcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBOVU1CRVJfVEFHX1BBVFRFUk4udGVzdCggTWV0YS5jcmVhdGUoIDEgKS50b1N0cmluZyggKSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIEluZmluaXR5ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgQk9PTEVBTl9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEJvb2xlYW4oPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggQk9PTEVBTl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgT2JqZWN0KD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE9CSkVDVF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICkgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIG51bGwgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIG51bGwgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBPQkpFQ1RfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBOdWxsKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE9CSkVDVF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggbnVsbCApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgU1lNQk9MX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgU3ltYm9sKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFNZTUJPTF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdW5kZWZpbmVkICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBPQkpFQ1RfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBVbmRlZmluZWQoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggT0JKRUNUX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS50b1N0cmluZyggKSApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9OdW1iZXIoICksIEluZmluaXR5ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCAxICkudG9OdW1iZXIoICksIEluZmluaXR5ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBudWxsICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIG51bGwgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9OdW1iZXIoICksIEluZmluaXR5ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBudWxsICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIG51bGwgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9Cb29sZWFuKCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkudG9PYmplY3QoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCAxICkudG9PYmplY3QoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggSW5maW5pdHkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggSW5maW5pdHkgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIHRydWUgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBudWxsICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIG51bGwgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkudG9PYmplY3QoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
