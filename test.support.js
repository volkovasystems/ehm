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

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()), (0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()));

			assert.equal(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf(), Meta.deserialize(Meta.create("helloworld").serialize()).valueOf());

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJoZWxsbyIsImRlc2VyaWFsaXplIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE1BQU1ELFFBQVMsa0JBQVQsQ0FBWjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDNUJDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLFFBQXFCRCxJQUFyQix1REFBcUJBLElBQXJCLEdBQTJCLFVBQTNCOztBQUVBTCxVQUFPTSxLQUFQLENBQWNELEtBQUtFLElBQW5CLEVBQXlCLE1BQXpCOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLDhDQUFWLEVBQTBELFlBQU87QUFDaEVDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQXJCLEdBQStELFFBQS9EOztBQUVBVCxVQUFPTSxLQUFQLENBQWNELEtBQUtHLE1BQUwsQ0FBYSxZQUFiLEVBQTRCQyxTQUE1QixFQUFkLEVBQXdESixLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBeEQ7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FOLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREMsS0FBSSwy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QUFsQixFQUE2REcsT0FBN0QsRUFBckc7O0FBRUFaLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS00sV0FBTCxDQUFrQk4sS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQWxCLEVBQTZERyxPQUE3RCxFQUFkLEVBQXVGUCxLQUFLTSxXQUFMLENBQWtCTixLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBbEIsRUFBNkRHLE9BQTdELEVBQXZGOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBLENBMUZEO0FBMkZBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBlaG0gPSByZXF1aXJlKCBcIi4vZWhtLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwiZWhtXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIE1ldGEgY2xhc3NcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLCBcImZ1bmN0aW9uXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLm5hbWUsIFwiTWV0YVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggJ2hlbGxvd29ybGQnICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSwgTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICksIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSwgTWV0YS5jcmVhdGUoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICkuc2VyaWFsaXplKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSwgTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
