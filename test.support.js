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

			assert.equal(Meta.create("helloworld").serialize(), Meta.create("helloworld").serialize());

		});
	});

	describe("`ehm( ).create( 1 ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(1).serialize()), "string");

			assert.equal(Meta.create(1).serialize(), Meta.create(1).serialize());

		});
	});

	describe("`ehm( ).create( true ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(true).serialize()), "string");

			assert.equal(Meta.create(true).serialize(), Meta.create(true).serialize());

		});
	});

	describe("`ehm( ).create( { 'hello': 'world' } ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create({ "hello": "world" }).serialize()), "string");

			assert.equal(Meta.create({ "hello": "world" }).serialize(), Meta.create({ "hello": "world" }).serialize());

		});
	});

	describe("`ehm( ).create( Symbol.for( 'hello' ) ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create((0, _for2.default)("hello")).serialize()), "string");

			assert.equal(Meta.create((0, _for2.default)("hello")).serialize(), Meta.create((0, _for2.default)("hello")).serialize());

		});
	});

	describe("`ehm( ).create( function hello( ){ } ).serialize( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.create(function hello() {}).serialize()), "string");

			assert.equal(Meta.create(function hello() {}).serialize(), Meta.create(function hello() {}).serialize());

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", function () {
		it("should return string type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()), "string");

			assert.equal(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf(), Meta.deserialize(Meta.create("helloworld").serialize()).valueOf());

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( 1 ).serialize( ) ).valueOf( )`", function () {
		it("should return number type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create(1).serialize()).valueOf()), "number");

			assert.equal(Meta.deserialize(Meta.create(1).serialize()).valueOf(), Meta.deserialize(Meta.create(1).serialize()).valueOf());

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( true ).serialize( ) ).valueOf( )`", function () {
		it("should return boolean type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create(true).serialize()).valueOf()), "boolean");

			assert.equal(Meta.deserialize(Meta.create(true).serialize()).valueOf(), Meta.deserialize(Meta.create(true).serialize()).valueOf());

		});
	});

	describe("`ehm( ).deserialize( ehm( ).create( { 'hello': 'world' } ).serialize( ) ).valueOf( )`", function () {
		it("should return object type", function () {
			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf()), "object");

			assert.deepEqual(Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf(), Meta.deserialize(Meta.create({ "hello": "world" }).serialize()).valueOf());

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJoZWxsbyIsImRlc2VyaWFsaXplIiwidmFsdWVPZiIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE1BQU1ELFFBQVMsa0JBQVQsQ0FBWjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLFFBQXFCRCxJQUFyQix1REFBcUJBLElBQXJCLEdBQTJCLFVBQTNCOztBQUVBTCxVQUFPTSxLQUFQLENBQWNELEtBQUtFLElBQW5CLEVBQXlCLE1BQXpCOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLDhDQUFWLEVBQTBELFlBQU87QUFDaEVDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQXJCLEdBQStELFFBQS9EOztBQUVBVCxVQUFPTSxLQUFQLENBQWNELEtBQUtHLE1BQUwsQ0FBYSxZQUFiLEVBQTRCQyxTQUE1QixFQUFkLEVBQXdESixLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBeEQ7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FOLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztB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LENBQWEsSUFBYixFQUFvQkMsU0FBcEIsRUFBbEIsRUFBcURHLE9BQXJELEVBQS9FOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBVCxVQUFVLHVGQUFWLEVBQW1HLFlBQU87QUFDekdDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS00sV0FBTCxDQUFrQk4sS0FBS0csTUFBTCxDQUFhLEVBQUUsU0FBUyxPQUFYLEVBQWIsRUFBb0NDLFNBQXBDLEVBQWxCLEVBQXFFRyxPQUFyRSxFQUFyQixHQUFzRyxRQUF0Rzs7QUFFQVosVUFBT2EsU0FBUCxDQUFrQlIsS0FBS00sV0FBTCxDQUFrQk4sS0FBS0csTUFBTCxDQUFhLEVBQUUsU0FBUyxPQUFYLEVBQWIsRUFBb0NDLFNBQXBDLEVBQWxCLEVBQXFFRyxPQUFyRSxFQUFsQixFQUFtR1AsS0FBS00sV0FBTCxDQUFrQk4sS0FBS0csTUFBTCxDQUFhLEVBQUUsU0FBUyxPQUFYLEVBQWIsRUFBb0NDLFNBQXBDLEVBQWxCLEVBQXFFRyxPQUFyRSxFQUFuRzs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQSxDQTNIRDtBQTRIQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZWhtID0gcmVxdWlyZSggXCIuL2VobS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBNZXRhIGNsYXNzXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YSwgXCJmdW5jdGlvblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5uYW1lLCBcIk1ldGFcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApLCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApLCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gbnVtYmVyIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwibnVtYmVyXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwiYm9vbGVhblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
