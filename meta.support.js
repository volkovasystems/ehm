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
			this[NAME] = name;
			this[ENTITY] = entity;
			this[TYPE] = (0, _typeof3.default)(this[ENTITY]);

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
    */ }, { key: "toJSON", value: function toJSON()

























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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9faW5pdGlhbGl6ZV9fIiwiZW50aXR5IiwidHlwZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJ0b0xvd2VyQ2FzZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJJbmZpbml0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQixDOztBQUVNQyxJO0FBQzBCQyxVLEVBQVU7QUFDeEMsVUFBTyxLQUFLQyxVQUFMLENBQWlCRCxRQUFqQixFQUEyQixJQUEzQixDQUFQO0FBQ0EsRzs7QUFFa0JBLFUsRUFBVUUsUyxFQUFXO0FBQ3ZDO0FBQ0MsV0FBT0YsUUFBUCx1REFBT0Es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QjtBQUNBWCxPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCSSxJQUExQjtBQUNBWCxPQUFRLFFBQVIsRUFBa0JRLE1BQWxCLEVBQTBCRyxJQUExQjtBQUNBWCxPQUFRLE9BQVIsRUFBaUJTLEtBQWpCLEVBQXdCRSxJQUF4Qjs7QUFFQVgsT0FBUSxTQUFSLEVBQW1CVSxPQUFuQixFQUE0QkMsSUFBNUI7O0FBRUFrQixPQUFPQyxPQUFQLEdBQWlCbkIsSUFBakIiLCJmaWxlIjoibWV0YS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlaG1cIixcblx0XHRcdFwicGF0aFwiOiBcImVobS9tZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWhtXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9laG0uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlaG0tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TWV0YSBjbGFzcyBjb25zdHJ1Y3QuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuY29uc3QgTkFNRSA9IFN5bWJvbCggXCJuYW1lXCIgKTtcbmNvbnN0IEVOVElUWSA9IFN5bWJvbCggXCJlbnRpdHlcIiApO1xuY29uc3QgVFlQRSA9IFN5bWJvbCggXCJ0eXBlXCIgKTtcblxuY29uc3QgT0JKRUNUID0gU3ltYm9sKCBcIm9iamVjdFwiICk7XG5jb25zdCBCT09MRUFOID0gU3ltYm9sKCBcImJvb2xlYW5cIiApO1xuY29uc3QgU1RSSU5HID0gU3ltYm9sKCBcInN0cmluZ1wiICk7XG5jb25zdCBOVU1CRVIgPSBTeW1ib2woIFwibnVtYmVyXCIgKTtcbmNvbnN0IFZBTFVFID0gU3ltYm9sKCBcInZhbHVlXCIgKTtcblxuY29uc3QgR0FSQkFHRSA9IFN5bWJvbCggXCJnYXJiYWdlXCIgKTtcblxuY2xhc3MgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdGlmKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwib2JqZWN0XCJcblx0XHRcdCYmIGluc3RhbmNlICE9IG51bGxcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSAhPT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IG9mIGluc3RhbmNlIGJlaW5nIGdhcmJhZ2UuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBpbnN0YW5jZSA9PT0gR0FSQkFHRSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gKCBuZXcgYmx1ZXByaW50KCBHQVJCQUdFICkgKVxuXHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlb2YgdGhpc1sgRU5USVRZIF07XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Z2V0IFsgT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdGdldCBbIEJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIFNUUklORyBdKCApe1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHRoaXNbIEVOVElUWSBdICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGVzZSBtZXRob2RzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdHRvQm9vbGVhbiggKXtcblx0XHRyZXR1cm4gdGhpc1sgQk9PTEVBTiBdO1xuXHR9XG5cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXNbIEVOVElUWSBdID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFNvbWUgY2FzZXMgdGhhdCBpbnN0YW5jZU9mIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGluc3RhbmNlT2YoIGJsdWVwcmludCApe1xuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0aGlzWyBFTlRJVFkgXSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRpZiggdGhpcy50eXBlT2YoIGJsdWVwcmludC50b0xvd2VyQ2FzZSggKSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgZW50aXR5ID0gdGhpc1sgRU5USVRZIF07XG5cdFx0XHRpZiggZW50aXR5ID09PSBudWxsIHx8IHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRpZihcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblx0XHRcdFx0d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKXtcblx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmhhcmRlbiggXCJOQU1FXCIsIE5BTUUsIE1ldGEgKTtcbmhhcmRlbiggXCJFTlRJVFlcIiwgRU5USVRZLCBNZXRhICk7XG5oYXJkZW4oIFwiVFlQRVwiLCBUWVBFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJPQkpFQ1RcIiwgT0JKRUNULCBNZXRhICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBCT09MRUFOLCBNZXRhICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFNUUklORywgTWV0YSApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBOVU1CRVIsIE1ldGEgKTtcbmhhcmRlbiggXCJWQUxVRVwiLCBWQUxVRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiR0FSQkFHRVwiLCBHQVJCQUdFLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcbiJdfQ==
//# sourceMappingURL=meta.support.js.map
