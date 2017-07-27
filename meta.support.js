"use strict";

/*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "ehm",
              			"path": "ehm/meta.module.js",
              			"file": "meta.module.js",
              			"module": "ehm",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ehm.git",
              			"test": "ehm-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Meta class construct.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"harden": "harden"
              		}
              	@end-include
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

var NAME = (0, _symbol2.default)("name");
var ENTITY = (0, _symbol2.default)("entity");
var TYPE = (0, _symbol2.default)("type");

var OBJECT = (0, _symbol2.default)("object");
var BOOLEAN = (0, _symbol2.default)("boolean");
var STRING = (0, _symbol2.default)("string");
var NUMBER = (0, _symbol2.default)("number");
var VALUE = (0, _symbol2.default)("value");

var GARBAGE = (0, _symbol2.default)("garbage");var

Meta = function () {(0, _createClass3.default)(Meta, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return this.instanceOf(instance, this);
		} }, { key: "instanceOf", value: function instanceOf(

		instance, blueprint) {
			if (
			(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == "object" &&
			instance != null &&
			typeof blueprint == "function" &&
			instance.constructor.name === blueprint.name)
			{
				return true;
			}

			if (
			(typeof instance === "undefined" ? "undefined" : (0, _typeof3.default)(instance)) == "object" &&
			instance != null &&
			typeof blueprint == "function" &&
			instance.constructor.name !== blueprint.name)
			{
				return false;
			}

			/*;
     	@note:
     		Possibility of instance being garbage.
     	@end-note
     */
			if (instance === GARBAGE) {
				return false;
			}

			if (typeof blueprint != "function") {
				blueprint = this;
			}

			return new blueprint(GARBAGE).
			__initialize__(instance, blueprint.name).
			instanceOf(blueprint.name);
		} }]);

	function Meta(entity, name) {(0, _classCallCheck3.default)(this, Meta);
		this.__initialize__(entity, name);
	}(0, _createClass3.default)(Meta, [{ key: "__initialize__", value: function __initialize__(

		entity, name) {
			var type = (0, _typeof3.default)(this[ENTITY]);

			this[TYPE] = type;
			this[NAME] = name || type.replace(/^./, function (match) {return match.toUpperCase();});
			this[ENTITY] = entity;

			return this;
		}

		/*;
    	@method-documentation:
    		This will only support three types; string, number, boolean.
    			These types are serializable.
    	@end-method-documentation
    		@note:
    		Do not override this.
    	@end-note
    */ }, { key: _toPrimitive2.default, value: function value(


		type) {
			switch (type) {
				case "string":
					return this.toString();

				case "number":
					return this.toNumber();

				default:
					return this.toBoolean();}

		}

		/*
    	@note:
    		These methods should be overridden.
    	@end-note
    */ }, { key: "tag", value: function tag()

























		{
			return "[" + this[TYPE] + " " + this[NAME] + "]";
		} }, { key: "toJSON", value: function toJSON()

		{
			return this[OBJECT];
		}

		/*;
    	@note:
    		As much as possible, do not override these methods.
    	@end-note
    */ }, { key: "toBoolean", value: function toBoolean()

		{
			return this[BOOLEAN];
		} }, { key: "toString", value: function toString()

		{
			return this[STRING];
		} }, { key: "toNumber", value: function toNumber()

		{
			return this[NUMBER];
		} }, { key: "valueOf", value: function valueOf()

		{
			return this[VALUE];
		} }, { key: "typeOf", value: function typeOf(

		type) {
			if (typeof type == "string") {
				return (0, _typeof3.default)(this[ENTITY]) == type;
			}

			return false;
		}

		/*
    	@note:
    		Some cases that instanceOf needs to be overridden.
    	@end-note
    */ }, { key: "instanceOf", value: function instanceOf(
		blueprint) {
			if (typeof blueprint == "function") {
				return (
					this instanceof blueprint ||
					this[ENTITY] instanceof blueprint);

			}

			if (typeof blueprint == "string") {
				if (this.typeOf(blueprint.toLowerCase())) {
					return true;
				}

				var entity = this[ENTITY];
				if (entity === null || typeof entity == "undefined") {
					return false;
				}

				if (typeof entity == "function" && entity.name === blueprint) {
					return true;
				}

				while (entity = (0, _getPrototypeOf2.default)(entity)) {
					if (
					typeof entity.constructor == "function" &&
					entity.constructor.name === blueprint)
					{
						return true;
					}
				}

				if (this.constructor.name != blueprint) {
					var _entity = this;
					while (_entity = (0, _getPrototypeOf2.default)(_entity)) {
						if (
						typeof _entity.constructor == "function" &&
						_entity.constructor.name === blueprint)
						{
							return true;
						}
					}
				}

				return false;
			}

			return false;
		} }, { key: _toStringTag2.default, get: function get() {return this[NAME];} }, { key: OBJECT, get: function get() {return {};} }, { key: BOOLEAN, get: function get() {return true;} }, { key: STRING, get: function get() {return Object.prototype.toString.call(this[ENTITY]);} }, { key: NUMBER, get: function get() {return Infinity;} }, { key: VALUE, get: function get() {return this[ENTITY];} }]);return Meta;}();


harden("NAME", NAME, Meta);
harden("ENTITY", ENTITY, Meta);
harden("TYPE", TYPE, Meta);

harden("OBJECT", OBJECT, Meta);
harden("BOOLEAN", BOOLEAN, Meta);
harden("STRING", STRING, Meta);
harden("NUMBER", NUMBER, Meta);
harden("VALUE", VALUE, Meta);

harden("GARBAGE", GARBAGE, Meta);

module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9faW5pdGlhbGl6ZV9fIiwiZW50aXR5IiwidHlwZSIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsInR5cGVPZiIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIkluZmluaXR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCLEM7O0FBRU1DLEk7QUFDMEJDLFUsRUFBVTtBQUN4QyxVQUFPLEtBQUtDLFVBQUwsQ0FBaUJELFFBQWpCLEVBQTJCLElBQTNCLENBQVA7QUFDQSxHOztBQUVrQkEsVSxFQUFVRSxTLEVB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QVIsRUFBZ0JFLElBQWhCLEVBQXNCUyxJQUF0QjtBQUNBWCxPQUFRLFFBQVIsRUFBa0JHLE1BQWxCLEVBQTBCUSxJQUExQjtBQUNBWCxPQUFRLE1BQVIsRUFBZ0JJLElBQWhCLEVBQXNCTyxJQUF0Qjs7QUFFQVgsT0FBUSxRQUFSLEVBQWtCSyxNQUFsQixFQUEwQk0sSUFBMUI7QUFDQVgsT0FBUSxTQUFSLEVBQW1CTSxPQUFuQixFQUE0QkssSUFBNUI7QUFDQVgsT0FBUSxRQUFSLEVBQWtCTyxNQUFsQixFQUEwQkksSUFBMUI7QUFDQVgsT0FBUSxRQUFSLEVBQWtCUSxNQUFsQixFQUEwQkcsSUFBMUI7QUFDQVgsT0FBUSxPQUFSLEVBQWlCUyxLQUFqQixFQUF3QkUsSUFBeEI7O0FBRUFYLE9BQVEsU0FBUixFQUFtQlUsT0FBbkIsRUFBNEJDLElBQTVCOztBQUVBcUIsT0FBT0MsT0FBUCxHQUFpQnRCLElBQWpCIiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHRpZihcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJvYmplY3RcIlxuXHRcdFx0JiYgaW5zdGFuY2UgIT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgIT09IGJsdWVwcmludC5uYW1lXG5cdFx0KXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdC5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdGxldCB0eXBlID0gdHlwZW9mIHRoaXNbIEVOVElUWSBdO1xuXG5cdFx0dGhpc1sgVFlQRSBdID0gdHlwZTtcblx0XHR0aGlzWyBOQU1FIF0gPSBuYW1lIHx8IHR5cGUucmVwbGFjZSggL14uLywgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Z2V0IFsgT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdGdldCBbIEJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIFNUUklORyBdKCApe1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHRoaXNbIEVOVElUWSBdICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdHRhZyggKXtcblx0XHRyZXR1cm4gYFskeyB0aGlzWyBUWVBFIF0gfSAkeyB0aGlzWyBOQU1FIF0gfV1gO1xuXHR9XG5cblx0dG9KU09OKCApe1xuXHRcdHJldHVybiB0aGlzWyBPQkpFQ1QgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHR0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gdGhpc1sgU1RSSU5HIF07XG5cdH1cblxuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHR2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzWyBWQUxVRSBdO1xuXHR9XG5cblx0dHlwZU9mKCB0eXBlICl7XG5cdFx0aWYoIHR5cGVvZiB0eXBlID09IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpc1sgRU5USVRZIF0gPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IHRoaXNbIEVOVElUWSBdIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBlbnRpdHkgPSB0aGlzWyBFTlRJVFkgXTtcblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICl7XG5cdFx0XHRcdGlmKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXHRcdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
