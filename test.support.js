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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



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

	describe("`ehm( ).deserialize( ehm( ).create( 'helloworld' ).serialize( ) ).valueOf( )`", function () {
		it("should return string type", function () {

			var Meta = ehm();

			assert.equal((0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()), (0, _typeof3.default)(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf()));

			assert.equal(Meta.deserialize(Meta.create("helloworld").serialize()).valueOf(), Meta.deserialize(Meta.create("helloworld").serialize()).valueOf());

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE1BQU1ELFFBQVMsa0JBQVQsQ0FBWjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLEtBQVYsRUFBaUIsWUFBTzs7QUFFdkJBLFVBQVUsVUFBVixFQUFzQixZQUFPO0FBQzVCQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixVQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxJQUFuQixFQUF5QixNQUF6Qjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRXZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBckIsR0FBK0QsUUFBL0Q7O0FBRUFULFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQWQsRUFBd0RKLEtBQUtHLE1BQUwsQ0FBYSxZQUFiLEVBQTRCQyxTQUE1QixFQUF4RDs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQU4sVUFBVSwrRUFBVixFQUEyRixZQUFPO0FBQ2pHQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRXZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBbEIsRUFBNkRFLE9BQTdELEVBQXJCLHlCQUFxR04sS0FBS0ssV0FBTCxDQUFrQkwsS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQWxCLEVBQTZERSxPQUE3RCxFQUFyRzs7QUFFQVgsVUFBT00sS0FBUCxDQUFjRCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBbEIsRUFBNkRFLE9BQTdELEVBQWQsRUFBdUZOLEtBQUtLLFdBQUwsQ0FBa0JMLEtBQUtHLE1BQUwsQ0FBYSxZQUFiLEVBQTRCQyxTQUE1QixFQUFsQixFQUE2REUsT0FBN0QsRUFBdkY7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7O0FBWUEsQ0FyQ0Q7O0FBdUNBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBlaG0gPSByZXF1aXJlKCBcIi4vZWhtLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJlaG1cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gTWV0YSBjbGFzc1wiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEsIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEubmFtZSwgXCJNZXRhXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuY3JlYXRlKCAnaGVsbG93b3JsZCcgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
