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

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWhtIiwiZGVzY3JpYmUiLCJpdCIsIk1ldGEiLCJlcXVhbCIsIm5hbWUiLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJkZWVwRXF1YWwiLCJ0b1N0cmluZyIsImhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLFVBQVYsRUFBc0IsWUFBTztBQUM1QkMsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsVUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsSUFBbkIsRUFBeUIsTUFBekI7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBckIsR0FBK0QsUUFBL0Q7O0FBRUFULFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0csTUFBTCxDQUFhLFlBQWIsRUFBNEJDLFNBQTVCLEVBQWQsRUFBd0QsOERBQXhEOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBTixVQUFVLG1DQUFWLEVBQStDLFlBQU87QUFDckRDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0csTUFBTCxDQUFhLENBQWIsRUFBaUJDLFNBQWpCLEVBQXJCLEdBQW9ELFFBQXBEOztBQUVBVCxVQUFPTSxLQUFQLENBQWNELEtBQUtHLE1BQUwsQ0FBYSxDQUFiLEVBQWlCQyxTQUFqQixFQUFkLEVBQTZDLGtEQUE3Qzs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQU4sVUFBVSxzQ0FBVixFQUFrRCxZQUFPO0FBQ3hEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCx1QkFBcUJELEtBQUtHLE1BQUwsQ0FBYSxJQUFiLEVBQW9CQyxTQUFwQixFQUFyQixHQUF1RCxRQUF2RDs7QUFFQVQsVUFBT00sS0FBUCxDQUFjRCxLQUFLRyxNQUFMLENBQWEsSUFBYixFQUFvQkMsU0FBcEIsRUFBZCxFQUFnRCx5REFBaEQ7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FOLFVBQVUsc0RBQVYsRUFBa0UsWUFBTztBQUN4RUMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLRyxNQUFMLENBQWEsRUFBRSxTQUFTLE9BQVgsRUFBYixFQUFvQ0MsU0FBcEMsRUFBckIsR0FBdUUsUUFBdkU7O0FBRUFULFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0csTUFBTCxDQUFhLEVBQUUsU0FBUyxPQUFYLEVBQWIsRUFBb0NDLFNBQXBDLEVBQWQsRUFBZ0Usb0VBQWhFOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBTixVQUFVLHVEQUFWLEVBQW1FLFlBQU87QUFDekVDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0csTUFBTCxDQUFhLG1CQUFZLE9BQVosQ0FBYixFQUFxQ0MsU0FBckMsRUFBckIsR0FBd0UsUUFBeEU7O0FBRUFULFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0csTUFBTCxDQUFhLG1CQUFZLE9BQVosQ0FBYixFQUFxQ0MsU0FBckMsRUFBZCxFQUFpRSxrRUFBakU7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFOLFVBQVUsK0VBQVYsRUFBMkYsWUFBTztBQUNqR0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsWUFBYixFQUE0QkMsU0FBNUIsRUFBbEIsRUFBNkRFLE9BQTdELEVBQXJCLEdBQThGLFFBQTlGOztBQUVBWCxVQUFPTSxLQUFQLENBQWNELEtBQUtLLFdBQUwsQ0FBa0JMLEtBQUtHLE1BQUwsQ0FBYSxZQUFiLEVBQTRCQyxTQUE1QixFQUFsQixFQUE2REUsT0FBN0QsRUFBZCxFQUF1RixZQUF2Rjs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQVIsVUFBVSxvRUFBVixFQUFnRixZQUFPO0FBQ3RGQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMsT0FBSUMsT0FBT0gsS0FBWDs7QUFFQUYsVUFBT00sS0FBUCx1QkFBcUJELEtBQUtLLFdBQUwsQ0FBa0JMLEtBQUtHLE1BQUwsQ0FBYSxDQUFiLEVBQWlCQyxTQUFqQixFQUFsQixFQUFrREUsT0FBbEQsRUFBckIsR0FBbUYsUUFBbkY7O0FBRUFYLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0ssV0FBTCxDQUFrQkwsS0FBS0csTUFBTCxDQUFhLENBQWIsRUFBaUJDLFNBQWpCLEVBQWxCLEVBQWtERSxPQUFsRCxFQUFkLEVBQTRFLENBQTVFOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBUixVQUFVLHVFQUFWLEVBQW1GLFlBQU87QUFDekZDLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0ssV0FBTCxDQUFrQkwsS0FBS0csTUFBTCxDQUFhLElBQWIsRUFBb0JDLFNBQXBCLEVBQWxCLEVBQXFERSxPQUFyRCxFQUFyQixHQUFzRixTQUF0Rjs7QUFFQVgsVUFBT00sS0FBUCxDQUFjRCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsSUFBYixFQUFvQkMsU0FBcEIsRUFBbEIsRUFBcURFLE9BQXJELEVBQWQsRUFBK0UsSUFBL0U7O0FBRUEsR0FQRDtBQVFBLEVBVEQ7O0FBV0FSLFVBQVUsdUZBQVYsRUFBbUcsWUFBTztBQUN6R0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlDLE9BQU9ILEtBQVg7O0FBRUFGLFVBQU9NLEtBQVAsdUJBQXFCRCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsRUFBRSxTQUFTLE9BQVgsRUFBYixFQUFvQ0MsU0FBcEMsRUFBbEIsRUFBcUVFLE9BQXJFLEVBQXJCLEdBQXNHLFFBQXRHOztBQUVBWCxVQUFPWSxTQUFQLENBQWtCUCxLQUFLSyxXQUFMLENBQWtCTCxLQUFLRyxNQUFMLENBQWEsRUFBRSxTQUFTLE9BQVgsRUFBYixFQUFvQ0MsU0FBcEMsRUFBbEIsRUFBcUVFLE9BQXJFLEVBQWxCLEVBQW1HLEVBQUUsU0FBUyxPQUFYLEVBQW5HOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBUixVQUFVLHdGQUFWLEVBQW9HLFlBQU87QUFDMUdDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0ssV0FBTCxDQUFrQkwsS0FBS0csTUFBTCxDQUFhLG1CQUFZLE9BQVosQ0FBYixFQUFxQ0MsU0FBckMsRUFBbEIsRUFBc0VFLE9BQXRFLEVBQXJCLEdBQXVHLFFBQXZHOztBQUVBWCxVQUFPTSxLQUFQLENBQWNELEtBQUtLLFdBQUwsQ0FBa0JMLEtBQUtHLE1BQUwsQ0FBYSxtQkFBWSxPQUFaLENBQWIsRUFBcUNDLFNBQXJDLEVBQWxCLEVBQXNFRSxPQUF0RSxHQUFpRkUsUUFBakYsRUFBZCxFQUE0RyxlQUE1RztBQUNBLEdBTkQ7QUFPQSxFQVJEOztBQVVBVixVQUFVLDRGQUFWLEVBQXdHLFlBQU87QUFDOUdDLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QyxPQUFJQyxPQUFPSCxLQUFYOztBQUVBRixVQUFPTSxLQUFQLHVCQUFxQkQsS0FBS0ssV0FBTCxDQUFrQkwsS0FBS0csTUFBTCxDQUFhLFNBQVNNLEtBQVQsR0FBaUIsQ0FBRyxDQUFqQyxFQUFvQ0wsU0FBcEMsRUFBbEIsRUFBcUVFLE9BQXJFLEVBQXJCLEdBQXNHLFVBQXRHOztBQUVBWCxVQUFPTSxLQUFQLENBQWNELEtBQUtLLFdBQUwsQ0FBa0JMLEtBQUtHLE1BQUwsQ0FBYSxTQUFTTSxLQUFULEdBQWlCLENBQUcsQ0FBakMsRUFBb0NMLFNBQXBDLEVBQWxCLEVBQXFFRSxPQUFyRSxHQUFnRkosSUFBOUYsRUFBb0csT0FBcEc7QUFDQSxHQU5EO0FBT0EsRUFSRDs7QUFVQSxDQS9JRDtBQWdKQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZWhtID0gcmVxdWlyZSggXCIuL2VobS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImVobVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBNZXRhIGNsYXNzXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YSwgXCJmdW5jdGlvblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5uYW1lLCBcIk1ldGFcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIFwiaGVsbG93b3JsZFwiICkuc2VyaWFsaXplKCApLCBcIltzdHJpbmcgU3RyaW5nOmRhdGE6dGV4dC9zdHJpbmc7YmFzZTY0LGFHVnNiRzkzYjNKc1pBJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgTWV0YSA9IGVobSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgTWV0YS5jcmVhdGUoIDEgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSwgXCJbbnVtYmVyIE51bWJlcjpkYXRhOnRleHQvbnVtYmVyO2Jhc2U2NCxNUSUzRCUzRF1cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB0cnVlICkuc2VyaWFsaXplKCApLCBcInN0cmluZ1wiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICksIFwiW2Jvb2xlYW4gQm9vbGVhbjpkYXRhOnRleHQvYm9vbGVhbjtiYXNlNjQsZEhKMVpRJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggeyAnaGVsbG8nOiAnd29ybGQnIH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggeyBcImhlbGxvXCI6IFwid29ybGRcIiB9ICkuc2VyaWFsaXplKCApLCBcIltvYmplY3QgT2JqZWN0OmRhdGE6dGV4dC9vYmplY3Q7YmFzZTY0LGV5Sm9aV3hzYnlJNkluZHZjbXhrSW4wJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggU3ltYm9sLmZvciggJ2hlbGxvJyApICkuc2VyaWFsaXplKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICksIFwiW3N5bWJvbCBTeW1ib2w6ZGF0YTp0ZXh0L3N5bWJvbDtiYXNlNjQsVTNsdFltOXNLR2hsYkd4dktRJTNEJTNEXVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvLyBkZXNjcmliZSggXCJgZWhtKCApLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoIClgXCIsICggKSA9PiB7XG5cdC8vIFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHQvLyBcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cdC8vXG5cdC8vIFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmNyZWF0ZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKS5zZXJpYWxpemUoICksIFwic3RyaW5nXCIgKTtcblx0Ly9cblx0Ly8gXHRcdGFzc2VydC5lcXVhbCggTWV0YS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApLCBcIltmdW5jdGlvbiBGdW5jdGlvbjpkYXRhOnRleHQvZnVuY3Rpb247YmFzZTY0LFpuVnVZM1JwYjI0Z2FHVnNiRzhvSUNsN0lIMCUzRF1cIiApO1xuXHQvL1xuXHQvLyBcdH0gKTtcblx0Ly8gfSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoICdoZWxsb3dvcmxkJyApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBcImhlbGxvd29ybGRcIiApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggXCJoZWxsb3dvcmxkXCIgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcImhlbGxvd29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggMSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgXCJudW1iZXJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCAxICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKSwgMSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVobSggKS5kZXNlcmlhbGl6ZSggZWhtKCApLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBNZXRhID0gZWhtKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggdHJ1ZSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwiYm9vbGVhblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggTWV0YS5kZXNlcmlhbGl6ZSggTWV0YS5jcmVhdGUoIHRydWUgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWhtKCApLmRlc2VyaWFsaXplKCBlaG0oICkuY3JlYXRlKCB7ICdoZWxsbyc6ICd3b3JsZCcgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzeW1ib2wgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwic3ltYm9sXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBNZXRhLmRlc2VyaWFsaXplKCBNZXRhLmNyZWF0ZSggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKS5zZXJpYWxpemUoICkgKS52YWx1ZU9mKCApLnRvU3RyaW5nKCApLCBcIlN5bWJvbChoZWxsbylcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlaG0oICkuZGVzZXJpYWxpemUoIGVobSggKS5jcmVhdGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkuc2VyaWFsaXplKCApICkudmFsdWVPZiggKS5uYW1lYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZnVuY3Rpb24gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IE1ldGEgPSBlaG0oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICksIFwiZnVuY3Rpb25cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIE1ldGEuZGVzZXJpYWxpemUoIE1ldGEuY3JlYXRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLnNlcmlhbGl6ZSggKSApLnZhbHVlT2YoICkubmFtZSwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
