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
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

var NAME = (0, _symbol2.default)("name");
var ENTITY = (0, _symbol2.default)("entity");
var TYPE = (0, _symbol2.default)("type");

var OBJECT = (0, _symbol2.default)("object");
var BOOLEAN = (0, _symbol2.default)("boolean");
var STRING = (0, _symbol2.default)("string");
var NUMBER = (0, _symbol2.default)("number");
var VALUE = (0, _symbol2.default)("value");

var GARBAGE = (0, _symbol2.default)("garbage");
var CORRUPTED = (0, _symbol2.default)("corrupted");
var TAGGED = (0, _symbol2.default)("tagged");

var CLASS_NAME_PATTERN = /^[A-Z][a-zA-Z0-9]+$/;
var FLOAT_NUMBER_PATTERN = /\./;
var SYMBOL_PATTERN = /^Symbol\((.*?)\)$/;
var TAG_PATTERN = /^\[([a-zA-Z][\-a-zA-Z0-9]+)\s+[A-Z][a-zA-Z0-9]+\:?(.+?)?\]$/;

var DEFAULT_DATA_URL_PREFIX = "data:text/@type;base64,";var

Meta = function () {(0, _createClass3.default)(Meta, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			/*;
             	@meta-configuration:
             		{
             			"instance:required": "*"
             		}
             	@end-meta-configuration
             */

			return this.instanceOf(instance, this);
		} }, { key: "instanceOf", value: function instanceOf(

		instance, blueprint) {
			/*;
                        	@meta-configuration:
                        		{
                        			"instance:required": "*",
                        			"blueprint": "function"
                        		}
                        	@end-meta-configuration
                        */

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
		} }, { key: "create", value: function create(

		blueprint, entity, state) {
			/*;
                             	@meta-configuration:
                             		{
                             			"blueprint:required": "function",
                             			"entity": "*",
                             			"state": Array
                             		}
                             	@end-meta-configuration
                             */

			if (arguments.length == 0) {
				blueprint = this;
				entity = undefined;
				state = [];
			}

			if (arguments.length == 1) {
				blueprint = this;
				entity = arguments[0];
				state = [];
			}

			if (arguments.length == 2) {
				blueprint = arguments[0];
				entity = arguments[1];
				state = [];
			}

			if (typeof blueprint != "function") {
				blueprint = this;
			}

			if ((typeof state === "undefined" ? "undefined" : (0, _typeof3.default)(state)) == "object") {
				state = (0, _from2.default)(state);

			} else {
				state = [];
			}

			var data = new blueprint(entity);

			if (TAG_PATTERN.test(data.stringify())) {
				state.push(TAGGED);
			}

			var index = state.length;
			while (index--) {
				var status = state[index];
				harden(status, status, data);
			}

			return (0, _freeze2.default)(data);
		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			var parameter = (0, _from2.default)(arguments);

			if (arguments.length == 2) {
				data = this[ENTITY];

				parameter = [undefined].concat(parameter);
			}

			blueprint = parameter.splice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" &&
					"name" in parameter &&
					typeof parameter.name == "string" &&
					parameter.name != "" &&
					CLASS_NAME_PATTERN.test(parameter.name));

			}).
			concat(this)[0];var _parameter$splice$fil =

			parameter.splice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" && (

					!("name" in parameter) ||
					typeof parameter.name != "string" ||
					parameter.name == "" ||
					parameter.name == "anonymous" ||
					parameter.name == "parser"));


			}).
			concat(function parser(data) {
				if (typeof data == "string") {
					var token = data.match(TAG_PATTERN) || [];
					var type = token[1] || "undefined";
					var value = token[2] || "";

					if (value == "") {
						return data;
					}

					value = value.replace(DEFAULT_DATA_URL_PREFIX.replace("@type", type), "");

					try {


						//: @client:
						value = atob(value);
						//: @end-client

						switch (type) {
							case "boolean":
								if (value.toLowerCase() == "true") {
									return true;
								}

								if (value.toLowerCase() == "false") {
									return false;
								}

								return false;

							case "function":
								try {
									var method = new Function("return " + value)();

									if (typeof method != "function") {
										return function () {throw new Error("no operation done, " + value);};
									}

									return method;

								} catch (error) {
									return function () {throw new Error("no operation done, " + error.stack);};
								}

							case "number":
								try {
									if (value == "Infinity") {
										return Infinity;
									}

									if (value == "NaN") {
										return NaN;
									}

									if (FLOAT_NUMBER_PATTERN.test(value)) {
										return parseFloat(value);
									}

									if (!FLOAT_NUMBER_PATTERN.test(value)) {
										return parseInt(value);
									}

									return Infinity;

								} catch (error) {
									return NaN;
								}

							case "object":
								if (value == "null") {
									return null;
								}

								try {
									return JSON.parse(value);

								} catch (error) {
									return new Error("cannot parse, " + value + ", " + error.stack);
								}

							case "symbol":
								return (0, _symbol2.default)((value.match(SYMBOL_PATTERN) || [])[1] || "");

							case "string":
								return value;

							case "undefined":
								return undefined;}


						return value;

					} catch (error) {
						return data;
					}
				}

				return data;
			}),_parameter$splice$fil2 = (0, _slicedToArray3.default)(_parameter$splice$fil, 2),parser = _parameter$splice$fil2[0],defer = _parameter$splice$fil2[1];

			try {
				return Meta.create(blueprint, parser(data));

			} catch (error) {
				return Meta.create(blueprint, defer(data), [CORRUPTED]);
			}
		} }]);

	function Meta(entity, name) {(0, _classCallCheck3.default)(this, Meta);
		/*;
                                                                         	@meta-configuration:
                                                                         		{
                                                                         			"entity:required": "*",
                                                                         			"name:required": "string"
                                                                         		}
                                                                         	@end-meta-configuration
                                                                         */

		this.__initialize__(entity, name);
	}(0, _createClass3.default)(Meta, [{ key: "__initialize__", value: function __initialize__(

		entity, name) {
			/*;
                 	@meta-configuration:
                 		{
                 			"entity:required": "*",
                 			"name:required": "string"
                 		}
                 	@end-meta-configuration
                 */

			var type = typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity);

			name = name || type.replace(/^./, function (match) {return match.toUpperCase();});

			if (typeof name != "string") {
				throw new Error("invalid name");
			}

			this[TYPE] = type;
			this[NAME] = name;
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
			/*;
         	@meta-configuration:
         		{
         			"type:required": "string",
         		}
         	@end-meta-configuration
         */

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
    */ }, { key: "tag", value: function tag(

























		value) {
			/*;
          	@meta-configuration:
          		{
          			"value": "string"
          		}
          	@end-meta-configuration
          */

			if (typeof value != "string") {
				value = "";
			}

			if (value != "") {
				value = ":" + value;
			}

			return ("[" + this[TYPE] + " " + this[NAME] + ":@value]").replace(":@value", value);
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
			/*;
         	@meta-configuration:
         		{
         			"type:required": "string"
         		}
         	@end-meta-configuration
         */

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
			/*;
              	@meta-configuration:
              		{
              			"blueprint:required": [
              				"function",
              				"string"
              			]
              		}
              	@end-meta-configuration
              */

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
		}

		/*;
    	@note:
    		This is the generic stringify function,
    			for complex entity you need to override this.
    	@end-note
    */ }, { key: "stringify", value: function stringify()
		{
			try {
				if (this[TYPE] == "object") {
					return (0, _stringify2.default)(this[ENTITY]);
				}

				return "" + this[ENTITY];

			} catch (error) {
				try {
					return this[ENTITY].toString();

				} catch (error) {
					return this.toString();
				}
			}
		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			var procedure = Meta.deserialize;

			if (
			typeof this.constructor == "function" &&
			typeof this.constructor.deserialize == "function" &&
			this.constructor.deserialize.name === "deserialize")
			{
				procedure = this.constructor.deserialize;
			}

			if (arguments.length == 2) {
				return procedure(this[ENTITY], arguments[0], arguments[1]);

			} else {
				return procedure(data, parser, blueprint);
			}
		}

		/*;
    	@method-documentation:
    		Returns a tag format with value.
    		The value must be a data URL format.
    			The parser function will accept a context parameter.
    			By default this will serialize the entity using plain/text base64 data URL format.
    			The parser must return a serialize format of the data to be placed on the tag.
    	@end-method-documentation
    */ }, { key: "serialize", value: function serialize(



		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			var defer = function parser(self) {


				//: @client:
				var value = btoa(self.stringify());
				//: @end-client

				return "" + DEFAULT_DATA_URL_PREFIX.replace("@type", self[TYPE]) + value;
			};

			if (typeof parser != "function") {
				parser = defer;
			}

			try {
				return this.tag(parser(this));

			} catch (error) {
				return this.tag(defer(this));
			}
		} }, { key: "isEqual", value: function isEqual(

		entity) {
			/*;
           	@meta-configuration:
           		{
           			"entity:required": "*"
           		}
           	@end-meta-configuration
           */

			return this[ENTITY] === entity;
		} }, { key: "isCorrupted", value: function isCorrupted()

		{
			return this[CORRUPTED] === CORRUPTED;
		} }, { key: "isTagged", value: function isTagged()

		{
			return (
				this[TAGGED] === TAGGED ||
				TAG_PATTERN.test(this.stringify()));

		} }, { key: "isRaw", value: function isRaw()

		{
			return !this.isTagged();
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			/*;
        	@meta-configuration:
        		{
        			"tag": "string"
        		}
        	@end-meta-configuration
        */

			return true;
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
harden("CORRUPTED", CORRUPTED, Meta);
harden("TAGGED", TAGGED, Meta);

harden("TAG_PATTERN", TAG_PATTERN, Meta);

module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiQ09SUlVQVEVEIiwiVEFHR0VEIiwiQ0xBU1NfTkFNRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgiLCJNZXRhIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9mIiwiYmx1ZXByaW50IiwiY29uc3RydWN0b3IiLCJuYW1lIiwiX19pbml0aWFsaXplX18iLCJlbnRpdHkiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRhdGEiLCJ0ZXN0Iiwic3RyaW5naWZ5IiwicHVzaCIsImluZGV4Iiwic3RhdHVzIiwicGFyc2VyIiwicGFyYW1ldGVyIiwiY29uY2F0Iiwic3BsaWNlIiwiZmlsdGVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJhdG9iIiwidG9Mb3dlckNhc2UiLCJtZXRob2QiLCJGdW5jdGlvbiIsIkVycm9yIiwiZXJyb3IiLCJzdGFjayIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiZGVmZXIiLCJjcmVhdGUiLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJkZXNlcmlhbGl6ZSIsInNlbGYiLCJidG9hIiwidGFnIiwiaXNUYWdnZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUExQjtBQUNBbEIsT0FBUSxRQUFSLEVBQWtCUSxNQUFsQixFQUEwQlUsSUFBMUI7QUFDQWxCLE9BQVEsT0FBUixFQUFpQlMsS0FBakIsRUFBd0JTLElBQXhCOztBQUVBbEIsT0FBUSxTQUFSLEVBQW1CVSxPQUFuQixFQUE0QlEsSUFBNUI7QUFDQWxCLE9BQVEsV0FBUixFQUFxQlcsU0FBckIsRUFBZ0NPLElBQWhDO0FBQ0FsQixPQUFRLFFBQVIsRUFBa0JZLE1BQWxCLEVBQTBCTSxJQUExQjs7QUFFQWxCLE9BQVEsYUFBUixFQUF1QmdCLFdBQXZCLEVBQW9DRSxJQUFwQzs7QUFFQXlELE9BQU9DLE9BQVAsR0FBaUIxRCxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBPQkpFQ1QgPSBTeW1ib2woIFwib2JqZWN0XCIgKTtcbmNvbnN0IEJPT0xFQU4gPSBTeW1ib2woIFwiYm9vbGVhblwiICk7XG5jb25zdCBTVFJJTkcgPSBTeW1ib2woIFwic3RyaW5nXCIgKTtcbmNvbnN0IE5VTUJFUiA9IFN5bWJvbCggXCJudW1iZXJcIiApO1xuY29uc3QgVkFMVUUgPSBTeW1ib2woIFwidmFsdWVcIiApO1xuXG5jb25zdCBHQVJCQUdFID0gU3ltYm9sKCBcImdhcmJhZ2VcIiApO1xuY29uc3QgQ09SUlVQVEVEID0gU3ltYm9sKCBcImNvcnJ1cHRlZFwiICk7XG5jb25zdCBUQUdHRUQgPSBTeW1ib2woIFwidGFnZ2VkXCIgKTtcblxuY29uc3QgQ0xBU1NfTkFNRV9QQVRURVJOID0gL15bQS1aXVthLXpBLVowLTldKyQvO1xuY29uc3QgRkxPQVRfTlVNQkVSX1BBVFRFUk4gPSAvXFwuLztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLio/KVxcKSQvO1xuY29uc3QgVEFHX1BBVFRFUk4gPSAvXlxcWyhbYS16QS1aXVtcXC1hLXpBLVowLTldKylcXHMrW0EtWl1bYS16QS1aMC05XStcXDo/KC4rPyk/XFxdJC87XG5cbmNvbnN0IERFRkFVTFRfREFUQV9VUkxfUFJFRklYID0gXCJkYXRhOnRleHQvQHR5cGU7YmFzZTY0LFwiO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2liaWxpdHkgb2YgaW5zdGFuY2UgYmVpbmcgZ2FyYmFnZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGluc3RhbmNlID09PSBHQVJCQUdFICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiAoIG5ldyBibHVlcHJpbnQoIEdBUkJBR0UgKSApXG5cdFx0XHQuX19pbml0aWFsaXplX18oIGluc3RhbmNlLCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHQuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUoIGJsdWVwcmludCwgZW50aXR5LCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImVudGl0eVwiOiBcIipcIixcblx0XHRcdFx0XHRcInN0YXRlXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRibHVlcHJpbnQgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMSBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2Ygc3RhdGUgPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0c3RhdGUgPSBBcnJheS5mcm9tKCBzdGF0ZSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRsZXQgZGF0YSA9IG5ldyBibHVlcHJpbnQoIGVudGl0eSApO1xuXG5cdFx0aWYoIFRBR19QQVRURVJOLnRlc3QoIGRhdGEuc3RyaW5naWZ5KCApICkgKXtcblx0XHRcdHN0YXRlLnB1c2goIFRBR0dFRCApO1xuXHRcdH1cblxuXHRcdGxldCBpbmRleCA9IHN0YXRlLmxlbmd0aDtcblx0XHR3aGlsZSggaW5kZXgtLSApe1xuXHRcdFx0bGV0IHN0YXR1cyA9IHN0YXRlWyBpbmRleCBdO1xuXHRcdFx0aGFyZGVuKCBzdGF0dXMsIHN0YXR1cywgZGF0YSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBkYXRhICk7XG5cdH1cblxuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0ZGF0YSA9IHRoaXNbIEVOVElUWSBdO1xuXG5cdFx0XHRwYXJhbWV0ZXIgPSBbIHVuZGVmaW5lZCBdLmNvbmNhdCggcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0Ymx1ZXByaW50ID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHBhcmFtZXRlclxuXHRcdFx0XHRcdCYmIHR5cGVvZiBwYXJhbWV0ZXIubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0JiYgcGFyYW1ldGVyLm5hbWUgIT0gXCJcIlxuXHRcdFx0XHRcdCYmIENMQVNTX05BTUVfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIubmFtZSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIHRoaXMgKVsgMCBdO1xuXG5cdFx0dmFyIFsgcGFyc2VyLCBkZWZlciBdID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIChcblx0XHRcdFx0XHRcdCEoIFwibmFtZVwiIGluIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0XHR8fCB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgIT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJwYXJzZXJcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggZnVuY3Rpb24gcGFyc2VyKCBkYXRhICl7XG5cdFx0XHRcdGlmKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdFx0bGV0IHRva2VuID0gZGF0YS5tYXRjaCggVEFHX1BBVFRFUk4gKSB8fCBbIF07XG5cdFx0XHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gdG9rZW5bIDIgXSB8fCBcIlwiO1xuXG5cdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiXCIgKXtcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIFwiXCIgKTtcblxuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0XHQvLzogQGNsaWVudDpcblx0XHRcdFx0XHRcdHZhbHVlID0gYXRvYiggdmFsdWUgKTtcblx0XHRcdFx0XHRcdC8vOiBAZW5kLWNsaWVudFxuXG5cdFx0XHRcdFx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJ0cnVlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcImZhbHNlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IG1ldGhvZCA9ICggbmV3IEZ1bmN0aW9uKCBcInJldHVybiBcIiArIHZhbHVlICkgKSggKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiggKXsgdGhyb3cgbmV3IEVycm9yKCBgbm8gb3BlcmF0aW9uIGRvbmUsICR7IHZhbHVlIH1gICk7IH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBtZXRob2Q7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyBlcnJvci5zdGFjayB9YCApOyB9O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwibnVsbFwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSggdmFsdWUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzeW1ib2xcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gU3ltYm9sKCAoIHZhbHVlLm1hdGNoKCBTWU1CT0xfUEFUVEVSTiApIHx8IFsgXSApWyAxIF0gfHwgXCJcIiApO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIHBhcnNlciggZGF0YSApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgZGVmZXIoIGRhdGEgKSwgWyBDT1JSVVBURUQgXSApO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR0aGlzLl9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKTtcblx0fVxuXG5cdF9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBlbnRpdHk7XG5cblx0XHRuYW1lID0gbmFtZSB8fCB0eXBlLnJlcGxhY2UoIC9eLi8sICggbWF0Y2ggKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSggKSApO1xuXG5cdFx0aWYoIHR5cGVvZiBuYW1lICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRZUEUgXSA9IHR5cGU7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Z2V0IFsgT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdGdldCBbIEJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIFNUUklORyBdKCApe1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHRoaXNbIEVOVElUWSBdICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdHRhZyggdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR2YWx1ZSA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0aWYoIHZhbHVlICE9IFwiXCIgKXtcblx0XHRcdHZhbHVlID0gYDokeyB2YWx1ZSB9YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFskeyB0aGlzWyBUWVBFIF0gfSAkeyB0aGlzWyBOQU1FIF0gfTpAdmFsdWVdYC5yZXBsYWNlKCBcIjpAdmFsdWVcIiwgdmFsdWUgKTtcblx0fVxuXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGVzZSBtZXRob2RzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdHRvQm9vbGVhbiggKXtcblx0XHRyZXR1cm4gdGhpc1sgQk9PTEVBTiBdO1xuXHR9XG5cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXNbIEVOVElUWSBdID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFNvbWUgY2FzZXMgdGhhdCBpbnN0YW5jZU9mIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGluc3RhbmNlT2YoIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0aGlzWyBFTlRJVFkgXSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRpZiggdGhpcy50eXBlT2YoIGJsdWVwcmludC50b0xvd2VyQ2FzZSggKSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgZW50aXR5ID0gdGhpc1sgRU5USVRZIF07XG5cdFx0XHRpZiggZW50aXR5ID09PSBudWxsIHx8IHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRpZihcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblx0XHRcdFx0d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKXtcblx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBnZW5lcmljIHN0cmluZ2lmeSBmdW5jdGlvbixcblx0XHRcdFx0Zm9yIGNvbXBsZXggZW50aXR5IHlvdSBuZWVkIHRvIG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0cmluZ2lmeSggKXtcblx0XHR0cnl7XG5cdFx0XHRpZiggdGhpc1sgVFlQRSBdID09IFwib2JqZWN0XCIgKXtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzWyBFTlRJVFkgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gXCJcIiArIHRoaXNbIEVOVElUWSBdO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF0udG9TdHJpbmcoICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHByb2NlZHVyZSA9IE1ldGEuZGVzZXJpYWxpemU7XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplLm5hbWUgPT09IFwiZGVzZXJpYWxpemVcIlxuXHRcdCl7XG5cdFx0XHRwcm9jZWR1cmUgPSB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIHRoaXNbIEVOVElUWSBdLCBhcmd1bWVudHNbIDAgXSwgYXJndW1lbnRzWyAxIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIGEgdGFnIGZvcm1hdCB3aXRoIHZhbHVlLlxuXHRcdFx0VGhlIHZhbHVlIG11c3QgYmUgYSBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgZnVuY3Rpb24gd2lsbCBhY2NlcHQgYSBjb250ZXh0IHBhcmFtZXRlci5cblxuXHRcdFx0QnkgZGVmYXVsdCB0aGlzIHdpbGwgc2VyaWFsaXplIHRoZSBlbnRpdHkgdXNpbmcgcGxhaW4vdGV4dCBiYXNlNjQgZGF0YSBVUkwgZm9ybWF0LlxuXG5cdFx0XHRUaGUgcGFyc2VyIG11c3QgcmV0dXJuIGEgc2VyaWFsaXplIGZvcm1hdCBvZiB0aGUgZGF0YSB0byBiZSBwbGFjZWQgb24gdGhlIHRhZy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBkZWZlciA9IGZ1bmN0aW9uIHBhcnNlciggc2VsZiApe1xuXHRcdFx0XG5cblx0XHRcdC8vOiBAY2xpZW50OlxuXHRcdFx0bGV0IHZhbHVlID0gYnRvYSggc2VsZi5zdHJpbmdpZnkoICkgKTtcblx0XHRcdC8vOiBAZW5kLWNsaWVudFxuXG5cdFx0XHRyZXR1cm4gYCR7IERFRkFVTFRfREFUQV9VUkxfUFJFRklYLnJlcGxhY2UoIFwiQHR5cGVcIiwgc2VsZlsgVFlQRSBdICkgfSR7IHZhbHVlIH1gO1xuXHRcdH07XG5cblx0XHRpZiggdHlwZW9mIHBhcnNlciAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHBhcnNlciA9IGRlZmVyO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggcGFyc2VyKCB0aGlzICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggZGVmZXIoIHRoaXMgKSApO1xuXHRcdH1cblx0fVxuXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXSA9PT0gZW50aXR5O1xuXHR9XG5cblx0aXNDb3JydXB0ZWQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIENPUlJVUFRFRCBdID09PSBDT1JSVVBURUQ7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHRpc1JhdyggKXtcblx0XHRyZXR1cm4gIXRoaXMuaXNUYWdnZWQoICk7XG5cdH1cblxuXHRpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGFnXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcbmhhcmRlbiggXCJDT1JSVVBURURcIiwgQ09SUlVQVEVELCBNZXRhICk7XG5oYXJkZW4oIFwiVEFHR0VEXCIsIFRBR0dFRCwgTWV0YSApO1xuXG5oYXJkZW4oIFwiVEFHX1BBVFRFUk5cIiwgVEFHX1BBVFRFUk4sIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
