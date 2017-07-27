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
			var type = typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9faW5pdGlhbGl6ZV9fIiwiZW50aXR5IiwidHlwZSIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsInR5cGVPZiIsInRvTG93ZXJDYXNlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIkluZmluaXR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCLEM7O0FBRU1DLEk7QUFDMEJDLFUsRUFBVTtBQUN4QyxVQUFPLEtBQUtDLFVBQUwsQ0FBaUJELFFBQWpCLEVBQTJCLElBQTNCLENBQVA7QUFDQSxHOztBQUVrQkEsVSxFQUFVRSxTLEVB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QVEsU0FBUixFQUFtQk0sT0FBbkIsRUFBNEJLLElBQTVCO0FBQ0FYLE9BQVEsUUFBUixFQUFrQk8sTUFBbEIsRUFBMEJJLElBQTFCO0FBQ0FYLE9BQVEsUUFBUixFQUFrQlEsTUFBbEIsRUFBMEJHLElBQTFCO0FBQ0FYLE9BQVEsT0FBUixFQUFpQlMsS0FBakIsRUFBd0JFLElBQXhCOztBQUVBWCxPQUFRLFNBQVIsRUFBbUJVLE9BQW5CLEVBQTRCQyxJQUE1Qjs7QUFFQXFCLE9BQU9DLE9BQVAsR0FBaUJ0QixJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBPQkpFQ1QgPSBTeW1ib2woIFwib2JqZWN0XCIgKTtcbmNvbnN0IEJPT0xFQU4gPSBTeW1ib2woIFwiYm9vbGVhblwiICk7XG5jb25zdCBTVFJJTkcgPSBTeW1ib2woIFwic3RyaW5nXCIgKTtcbmNvbnN0IE5VTUJFUiA9IFN5bWJvbCggXCJudW1iZXJcIiApO1xuY29uc3QgVkFMVUUgPSBTeW1ib2woIFwidmFsdWVcIiApO1xuXG5jb25zdCBHQVJCQUdFID0gU3ltYm9sKCBcImdhcmJhZ2VcIiApO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKTtcblx0fVxuXG5cdHN0YXRpYyBpbnN0YW5jZU9mKCBpbnN0YW5jZSwgYmx1ZXByaW50ICl7XG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJvYmplY3RcIlxuXHRcdFx0JiYgaW5zdGFuY2UgIT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IG9mIGluc3RhbmNlIGJlaW5nIGdhcmJhZ2UuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBpbnN0YW5jZSA9PT0gR0FSQkFHRSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBuZXcgYmx1ZXByaW50KCBHQVJCQUdFICkgKVxuXHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgZW50aXR5O1xuXG5cdFx0dGhpc1sgVFlQRSBdID0gdHlwZTtcblx0XHR0aGlzWyBOQU1FIF0gPSBuYW1lIHx8IHR5cGUucmVwbGFjZSggL14uLywgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Z2V0IFsgT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdGdldCBbIEJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIFNUUklORyBdKCApe1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHRoaXNbIEVOVElUWSBdICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdHRhZyggKXtcblx0XHRyZXR1cm4gYFskeyB0aGlzWyBUWVBFIF0gfSAkeyB0aGlzWyBOQU1FIF0gfV1gO1xuXHR9XG5cblx0dG9KU09OKCApe1xuXHRcdHJldHVybiB0aGlzWyBPQkpFQ1QgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHR0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gdGhpc1sgU1RSSU5HIF07XG5cdH1cblxuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHR2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzWyBWQUxVRSBdO1xuXHR9XG5cblx0dHlwZU9mKCB0eXBlICl7XG5cdFx0aWYoIHR5cGVvZiB0eXBlID09IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpc1sgRU5USVRZIF0gPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IHRoaXNbIEVOVElUWSBdIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBlbnRpdHkgPSB0aGlzWyBFTlRJVFkgXTtcblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICl7XG5cdFx0XHRcdGlmKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXHRcdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
