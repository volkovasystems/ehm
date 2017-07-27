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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9faW5pdGlhbGl6ZV9fIiwiZW50aXR5IiwidHlwZSIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsInR5cGVPZiIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIkluZmluaXR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCLEM7O0FBRU1DLEk7QUFDMEJDLFUsRUFBVTtBQUN4QyxVQUFPLEtBQUtDLFVBQUwsQ0FBaUJELFFBQWpCLEVBQTJCLElBQTNCLENBQVA7QUFDQSxHOztBQUVrQkEsVSxFQUFVRSxTLEVB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QVEsU0FBUixFQUFtQk0sT0FBbkIsRUFBNEJLLElBQTVCO0FBQ0FYLE9BQVEsUUFBUixFQUFrQk8sTUFBbEIsRUFBMEJJLElBQTFCO0FBQ0FYLE9BQVEsUUFBUixFQUFrQlEsTUFBbEIsRUFBMEJHLElBQTFCO0FBQ0FYLE9BQVEsT0FBUixFQUFpQlMsS0FBakIsRUFBd0JFLElBQXhCOztBQUVBWCxPQUFRLFNBQVIsRUFBbUJVLE9BQW5CLEVBQTRCQyxJQUE1Qjs7QUFFQXFCLE9BQU9DLE9BQVAsR0FBaUJ0QixJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBPQkpFQ1QgPSBTeW1ib2woIFwib2JqZWN0XCIgKTtcbmNvbnN0IEJPT0xFQU4gPSBTeW1ib2woIFwiYm9vbGVhblwiICk7XG5jb25zdCBTVFJJTkcgPSBTeW1ib2woIFwic3RyaW5nXCIgKTtcbmNvbnN0IE5VTUJFUiA9IFN5bWJvbCggXCJudW1iZXJcIiApO1xuY29uc3QgVkFMVUUgPSBTeW1ib2woIFwidmFsdWVcIiApO1xuXG5jb25zdCBHQVJCQUdFID0gU3ltYm9sKCBcImdhcmJhZ2VcIiApO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKTtcblx0fVxuXG5cdHN0YXRpYyBpbnN0YW5jZU9mKCBpbnN0YW5jZSwgYmx1ZXByaW50ICl7XG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJvYmplY3RcIlxuXHRcdFx0JiYgaW5zdGFuY2UgIT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IG9mIGluc3RhbmNlIGJlaW5nIGdhcmJhZ2UuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBpbnN0YW5jZSA9PT0gR0FSQkFHRSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBuZXcgYmx1ZXByaW50KCBHQVJCQUdFICkgKVxuXHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgdGhpc1sgRU5USVRZIF07XG5cblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlO1xuXHRcdHRoaXNbIE5BTUUgXSA9IG5hbWUgfHwgdHlwZS5yZXBsYWNlKCAvXi4vLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9VcHBlckNhc2UoICkgKTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblxuXHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b051bWJlciggKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9Cb29sZWFuKCApO1xuXHRcdH1cblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdGdldCBbIFN5bWJvbC50b1N0cmluZ1RhZyBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBOQU1FIF07XG5cdH1cblxuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4geyB9O1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpc1sgRU5USVRZIF0gKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdGdldCBbIFZBTFVFIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVOVElUWSBdO1xuXHR9XG5cblx0dGFnKCApe1xuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9XWA7XG5cdH1cblxuXHR0b0pTT04oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHR0b0Jvb2xlYW4oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEJPT0xFQU4gXTtcblx0fVxuXG5cdHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiB0aGlzWyBTVFJJTkcgXTtcblx0fVxuXG5cdHRvTnVtYmVyKCApe1xuXHRcdHJldHVybiB0aGlzWyBOVU1CRVIgXTtcblx0fVxuXG5cdHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFZBTFVFIF07XG5cdH1cblxuXHR0eXBlT2YoIHR5cGUgKXtcblx0XHRpZiggdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzWyBFTlRJVFkgXSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRTb21lIGNhc2VzIHRoYXQgaW5zdGFuY2VPZiBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpbnN0YW5jZU9mKCBibHVlcHJpbnQgKXtcblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdFx0fHwgdGhpc1sgRU5USVRZIF0gaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0aWYoIHRoaXMudHlwZU9mKCBibHVlcHJpbnQudG9Mb3dlckNhc2UoICkgKSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGVudGl0eSA9IHRoaXNbIEVOVElUWSBdO1xuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCB8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludCApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKXtcblx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIHRoaXMuY29uc3RydWN0b3IubmFtZSAhPSBibHVlcHJpbnQgKXtcblx0XHRcdFx0bGV0IGVudGl0eSA9IHRoaXM7XG5cdFx0XHRcdHdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICl7XG5cdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5oYXJkZW4oIFwiTkFNRVwiLCBOQU1FLCBNZXRhICk7XG5oYXJkZW4oIFwiRU5USVRZXCIsIEVOVElUWSwgTWV0YSApO1xuaGFyZGVuKCBcIlRZUEVcIiwgVFlQRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiT0JKRUNUXCIsIE9CSkVDVCwgTWV0YSApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgQk9PTEVBTiwgTWV0YSApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBTVFJJTkcsIE1ldGEgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgTlVNQkVSLCBNZXRhICk7XG5oYXJkZW4oIFwiVkFMVUVcIiwgVkFMVUUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIkdBUkJBR0VcIiwgR0FSQkFHRSwgTWV0YSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGE7XG4iXX0=
//# sourceMappingURL=meta.support.js.map
