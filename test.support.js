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

	describe("`ehm( ).deserialize( ehm( ).create( function hello( ){ } ).serialize( ) ).valueOf( ).name`", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJFcnJvciIsInVuZGVmaW5lZCIsIk5hTiIsImRlc2VyaWFsaXplIiwidmFsdWVPZiIsImRlZXBFcXVhbCIsInRvU3RyaW5nIiwiaGVsbG8iLCJTVFJJTkdfVEFHX1BBVFRFUk4iLCJ0ZXN0IiwiTlVNQkVSX1RBR19QQVRURVJOIiwiQk9PTEVBTl9UQUdfUEFUVEVSTiIsIk9CSkVDVF9UQUdfUEFUVEVSTiIsIlNZTUJPTF9UQUdfUEFUVEVSTiIsInRvTnVtYmVyIiwiSW5maW5pdHkiLCJ0b0Jvb2xlYW4iLCJkZXNjcmlwdG9yIiwidG9PYmplY3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkJBLFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixVQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxJQUFuQixFQUF5QixNQUF6Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCx1QkFBcUJELEtBQUtH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QXhCLEVBQW9DLElBQXBDOztBQUVBM0IsVUFBT00sS0FBUCxDQUFjLFdBQVdxQixVQUF6QixFQUFxQyxJQUFyQzs7QUFFQTNCLFVBQU9NLEtBQVAsQ0FBYyxZQUFZcUIsVUFBMUIsRUFBc0MsSUFBdEM7O0FBRUEsR0FmRDtBQWdCQSxFQWpCRDs7QUFtQkEsQ0FqY0Q7QUFrY0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlaG1cIixcblx0XHRcdFwicGF0aFwiOiBcImVobS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJlaG1cIjogXCJlaG1cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGVobSA9IHJlcXVpcmUoIFwiLi9laG0uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJlaG1cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEsIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEubmFtZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSwgXCJbc3RyaW5nIFN0cmluZzpkYXRhOnRleHQvc3RyaW5nO2Jhc2U2NCxhR1ZzYkc5M2IzSnNaQSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICksIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsTVElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApLCBcIltib29sZWFuIEJvb2xlYW46ZGF0YTp0ZXh0L2Jvb2xlYW47YmFzZTY0LGRISjFaUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxleUpvWld4c2J5STZJbmR2Y214a0luMCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApLCBcIltzeW1ib2wgU3ltYm9sOmRhdGE6dGV4dC9zeW1ib2w7YmFzZTY0LFUzbHRZbTlzS0dobGJHeHZLUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Ly8gZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHQvLyBcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0Ly8gXHRcdGxldCBNZXRhID0gZWhtKCApO1xuXHQvL1xuXHQvLyBcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdhR1ZzYkc4b0lDbDdJSDAlM0RdXCIgKTtcblx0Ly9cblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggRXJyb3IgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBFcnJvciApLnNlcmlhbGl6ZSggKSwgXCJbZnVuY3Rpb24gRnVuY3Rpb246ZGF0YTp0ZXh0L2Z1bmN0aW9uO2Jhc2U2NCxablZ1WTNScGIyNGdSWEp5YjNJb0tTQjdJRnR1WVhScGRtVWdZMjlrWlYwZ2ZRJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggKCApID0+IHsgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0Ly8gXHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdC8vIFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblx0Ly9cblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCAoICkgPT4geyB9ICkuc2VyaWFsaXplKCApLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LEtDQXBJRDAlMkJJSHNnZlElM0QlM0RdXCIgKTtcblx0Ly8gXHR9ICk7XG5cdC8vIH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIG51bGwgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggbnVsbCApLnNlcmlhbGl6ZSggKSwgXCJbb2JqZWN0IE9iamVjdDpkYXRhOnRleHQvb2JqZWN0O2Jhc2U2NCxiblZzYkElM0QlM0RdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB1bmRlZmluZWQgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdW5kZWZpbmVkICkuc2VyaWFsaXplKCApLCBcIlt1bmRlZmluZWQgVW5kZWZpbmVkOmRhdGE6dGV4dC91bmRlZmluZWQ7YmFzZTY0LGRXNWtaV1pwYm1Wa11cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIE5hTiApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBOYU4gKS5zZXJpYWxpemUoICksIFwiW251bWJlciBOdW1iZXI6ZGF0YTp0ZXh0L251bWJlcjtiYXNlNjQsVG1GT11cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwiaGVsbG93b3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcIm51bWJlclwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCAxICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJib29sZWFuXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN5bWJvbCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJzeW1ib2xcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkudG9TdHJpbmcoICksIFwiU3ltYm9sKGhlbGxvKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkubmFtZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcImZ1bmN0aW9uXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLm5hbWUsIFwiaGVsbG9cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBTVFJJTkdfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTdHJpbmcoPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggU1RSSU5HX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgTlVNQkVSX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgTnVtYmVyKD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE5VTUJFUl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggMSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgQk9PTEVBTl9UQUdfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEJvb2xlYW4oPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggQk9PTEVBTl9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0Y29uc3QgT0JKRUNUX1RBR19QQVRURVJOID0gL15cXFtvYmplY3QgT2JqZWN0KD86XFw6KC4rPykpP1xcXSQvO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE9CSkVDVF9UQUdfUEFUVEVSTi50ZXN0KCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkudG9TdHJpbmcoICkgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRjb25zdCBTWU1CT0xfVEFHX1BBVFRFUk4gPSAvXlxcW29iamVjdCBTeW1ib2woPzpcXDooLis/KSk/XFxdJC87XG5cblx0XHRcdGFzc2VydC5lcXVhbCggU1lNQk9MX1RBR19QQVRURVJOLnRlc3QoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnRvU3RyaW5nKCApICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBJbmZpbml0eVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvTnVtYmVyKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gSW5maW5pdHlcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIEluZmluaXR5XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b051bWJlciggKSwgSW5maW5pdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b0Jvb2xlYW4oICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIDEgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB0cnVlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGxldCBkZXNjcmlwdG9yID0gTWV0YS5jcmVhdGUoIHRydWUgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGVzY3JpcHRvciwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidHlwZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcIm5hbWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
