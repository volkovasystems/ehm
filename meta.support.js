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

var DEFAULT_DATA_URL_PREFIX = "data:text/plain;base64,";var

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

					value = value.replace(DEFAULT_DATA_URL_PREFIX, "");

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

				return "" + DEFAULT_DATA_URL_PREFIX + value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiTkFNRSIsIkVOVElUWSIsIlRZUEUiLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwiVkFMVUUiLCJHQVJCQUdFIiwiQ09SUlVQVEVEIiwiVEFHR0VEIiwiQ0xBU1NfTkFNRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgiLCJNZXRhIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9mIiwiYmx1ZXByaW50IiwiY29uc3RydWN0b3IiLCJuYW1lIiwiX19pbml0aWFsaXplX18iLCJlbnRpdHkiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRhdGEiLCJ0ZXN0Iiwic3RyaW5naWZ5IiwicHVzaCIsImluZGV4Iiwic3RhdHVzIiwicGFyc2VyIiwicGFyYW1ldGVyIiwiY29uY2F0Iiwic3BsaWNlIiwiZmlsdGVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJhdG9iIiwidG9Mb3dlckNhc2UiLCJtZXRob2QiLCJGdW5jdGlvbiIsIkVycm9yIiwiZXJyb3IiLCJzdGFjayIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiZGVmZXIiLCJjcmVhdGUiLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJkZXNlcmlhbGl6ZSIsInNlbGYiLCJidG9hIiwidGFnIiwiaXNUYWdnZWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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bEIsT0FBUSxXQUFSLEVBQXFCVyxTQUFyQixFQUFnQ08sSUFBaEM7QUFDQWxCLE9BQVEsUUFBUixFQUFrQlksTUFBbEIsRUFBMEJNLElBQTFCOztBQUVBbEIsT0FBUSxhQUFSLEVBQXVCZ0IsV0FBdkIsRUFBb0NFLElBQXBDOztBQUVBeUQsT0FBT0MsT0FBUCxHQUFpQjFELElBQWpCIiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBDTEFTU19OQU1FX1BBVFRFUk4gPSAvXltBLVpdW2EtekEtWjAtOV0rJC87XG5jb25zdCBGTE9BVF9OVU1CRVJfUEFUVEVSTiA9IC9cXC4vO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKj8pXFwpJC87XG5jb25zdCBUQUdfUEFUVEVSTiA9IC9eXFxbKFthLXpBLVpdW1xcLWEtekEtWjAtOV0rKVxccytbQS1aXVthLXpBLVowLTldK1xcOj8oLis/KT9cXF0kLztcblxuY29uc3QgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9wbGFpbjtiYXNlNjQsXCI7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwib2JqZWN0XCJcblx0XHRcdCYmIGluc3RhbmNlICE9IG51bGxcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdC5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSggYmx1ZXByaW50LCBlbnRpdHksIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IHVuZGVmaW5lZDtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGJsdWVwcmludCA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAxIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRzdGF0ZSA9IEFycmF5LmZyb20oIHN0YXRlICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGxldCBkYXRhID0gbmV3IGJsdWVwcmludCggZW50aXR5ICk7XG5cblx0XHRpZiggVEFHX1BBVFRFUk4udGVzdCggZGF0YS5zdHJpbmdpZnkoICkgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggVEFHR0VEICk7XG5cdFx0fVxuXG5cdFx0bGV0IGluZGV4ID0gc3RhdGUubGVuZ3RoO1xuXHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRsZXQgc3RhdHVzID0gc3RhdGVbIGluZGV4IF07XG5cdFx0XHRoYXJkZW4oIHN0YXR1cywgc3RhdHVzLCBkYXRhICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoIGRhdGEgKTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRkYXRhID0gdGhpc1sgRU5USVRZIF07XG5cblx0XHRcdHBhcmFtZXRlciA9IFsgdW5kZWZpbmVkIF0uY29uY2F0KCBwYXJhbWV0ZXIgKTtcblx0XHR9XG5cblx0XHRibHVlcHJpbnQgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gcGFyYW1ldGVyXG5cdFx0XHRcdFx0JiYgdHlwZW9mIHBhcmFtZXRlci5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHQmJiBwYXJhbWV0ZXIubmFtZSAhPSBcIlwiXG5cdFx0XHRcdFx0JiYgQ0xBU1NfTkFNRV9QQVRURVJOLnRlc3QoIHBhcmFtZXRlci5uYW1lIClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggdGhpcyApWyAwIF07XG5cblx0XHR2YXIgWyBwYXJzZXIsIGRlZmVyIF0gPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0ISggXCJuYW1lXCIgaW4gcGFyYW1ldGVyIClcblx0XHRcdFx0XHRcdHx8IHR5cGVvZiBwYXJhbWV0ZXIubmFtZSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcIlwiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcImFub255bW91c1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcInBhcnNlclwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBmdW5jdGlvbiBwYXJzZXIoIGRhdGEgKXtcblx0XHRcdFx0aWYoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKXtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSBkYXRhLm1hdGNoKCBUQUdfUEFUVEVSTiApIHx8IFsgXTtcblx0XHRcdFx0XHRsZXQgdHlwZSA9IHRva2VuWyAxIF0gfHwgXCJ1bmRlZmluZWRcIjtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IFwiXCI7XG5cblx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJcIiApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCwgXCJcIiApO1xuXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHRcdC8vOiBAY2xpZW50OlxuXHRcdFx0XHRcdFx0dmFsdWUgPSBhdG9iKCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0Ly86IEBlbmQtY2xpZW50XG5cblx0XHRcdFx0XHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0XHRcdFx0XHRjYXNlIFwiYm9vbGVhblwiOlxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcInRydWVcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwiZmFsc2VcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgbWV0aG9kID0gKCBuZXcgRnVuY3Rpb24oIFwicmV0dXJuIFwiICsgdmFsdWUgKSApKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCApeyB0aHJvdyBuZXcgRXJyb3IoIGBubyBvcGVyYXRpb24gZG9uZSwgJHsgdmFsdWUgfWAgKTsgfTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDtcblxuXHRcdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiggKXsgdGhyb3cgbmV3IEVycm9yKCBgbm8gb3BlcmF0aW9uIGRvbmUsICR7IGVycm9yLnN0YWNrIH1gICk7IH07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJJbmZpbml0eVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBJbmZpbml0eTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiTmFOXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIEZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCAhRkxPQVRfTlVNQkVSX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBJbmZpbml0eTtcblxuXHRcdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJvYmplY3RcIjpcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJudWxsXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBTeW1ib2woICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBcIlwiICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9ICk7XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgcGFyc2VyKCBkYXRhICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBkZWZlciggZGF0YSApLCBbIENPUlJVUFRFRCBdICk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCB0eXBlID0gdHlwZW9mIGVudGl0eTtcblxuXHRcdG5hbWUgPSBuYW1lIHx8IHR5cGUucmVwbGFjZSggL14uLywgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XG5cblx0XHRpZiggdHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgVFlQRSBdID0gdHlwZTtcblx0XHR0aGlzWyBOQU1FIF0gPSBuYW1lO1xuXHRcdHRoaXNbIEVOVElUWSBdID0gZW50aXR5O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgb25seSBzdXBwb3J0IHRocmVlIHR5cGVzOyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbi5cblxuXHRcdFx0VGhlc2UgdHlwZXMgYXJlIHNlcmlhbGl6YWJsZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdERvIG5vdCBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRbIFN5bWJvbC50b1ByaW1pdGl2ZSBdKCB0eXBlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlOnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblxuXHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b051bWJlciggKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9Cb29sZWFuKCApO1xuXHRcdH1cblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdGdldCBbIFN5bWJvbC50b1N0cmluZ1RhZyBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBOQU1FIF07XG5cdH1cblxuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4geyB9O1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpc1sgRU5USVRZIF0gKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdGdldCBbIFZBTFVFIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVOVElUWSBdO1xuXHR9XG5cblx0dGFnKCB2YWx1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHZhbHVlID0gXCJcIjtcblx0XHR9XG5cblx0XHRpZiggdmFsdWUgIT0gXCJcIiApe1xuXHRcdFx0dmFsdWUgPSBgOiR7IHZhbHVlIH1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9OkB2YWx1ZV1gLnJlcGxhY2UoIFwiOkB2YWx1ZVwiLCB2YWx1ZSApO1xuXHR9XG5cblx0dG9KU09OKCApe1xuXHRcdHJldHVybiB0aGlzWyBPQkpFQ1QgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHR0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gdGhpc1sgU1RSSU5HIF07XG5cdH1cblxuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHR2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzWyBWQUxVRSBdO1xuXHR9XG5cblx0dHlwZU9mKCB0eXBlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0eXBlID09IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpc1sgRU5USVRZIF0gPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IHRoaXNbIEVOVElUWSBdIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBlbnRpdHkgPSB0aGlzWyBFTlRJVFkgXTtcblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICl7XG5cdFx0XHRcdGlmKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXHRcdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGdlbmVyaWMgc3RyaW5naWZ5IGZ1bmN0aW9uLFxuXHRcdFx0XHRmb3IgY29tcGxleCBlbnRpdHkgeW91IG5lZWQgdG8gb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RyaW5naWZ5KCApe1xuXHRcdHRyeXtcblx0XHRcdGlmKCB0aGlzWyBUWVBFIF0gPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRoaXNbIEVOVElUWSBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBcIlwiICsgdGhpc1sgRU5USVRZIF07XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXS50b1N0cmluZyggKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcHJvY2VkdXJlID0gTWV0YS5kZXNlcmlhbGl6ZTtcblxuXHRcdGlmKFxuXHRcdFx0dHlwZW9mIHRoaXMuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUubmFtZSA9PT0gXCJkZXNlcmlhbGl6ZVwiXG5cdFx0KXtcblx0XHRcdHByb2NlZHVyZSA9IHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemU7XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggdGhpc1sgRU5USVRZIF0sIGFyZ3VtZW50c1sgMCBdLCBhcmd1bWVudHNbIDEgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgbXVzdCByZXR1cm4gYSBzZXJpYWxpemUgZm9ybWF0IG9mIHRoZSBkYXRhIHRvIGJlIHBsYWNlZCBvbiB0aGUgdGFnLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBzZWxmICl7XG5cdFx0XHRcblxuXHRcdFx0Ly86IEBjbGllbnQ6XG5cdFx0XHRsZXQgdmFsdWUgPSBidG9hKCBzZWxmLnN0cmluZ2lmeSggKSApO1xuXHRcdFx0Ly86IEBlbmQtY2xpZW50XG5cblx0XHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggfSR7IHZhbHVlIH1gO1xuXHRcdH07XG5cblx0XHRpZiggdHlwZW9mIHBhcnNlciAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHBhcnNlciA9IGRlZmVyO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggcGFyc2VyKCB0aGlzICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggZGVmZXIoIHRoaXMgKSApO1xuXHRcdH1cblx0fVxuXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXSA9PT0gZW50aXR5O1xuXHR9XG5cblx0aXNDb3JydXB0ZWQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIENPUlJVUFRFRCBdID09PSBDT1JSVVBURUQ7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHRpc1JhdyggKXtcblx0XHRyZXR1cm4gIXRoaXMuaXNUYWdnZWQoICk7XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcbmhhcmRlbiggXCJDT1JSVVBURURcIiwgQ09SUlVQVEVELCBNZXRhICk7XG5oYXJkZW4oIFwiVEFHR0VEXCIsIFRBR0dFRCwgTWV0YSApO1xuXG5oYXJkZW4oIFwiVEFHX1BBVFRFUk5cIiwgVEFHX1BBVFRFUk4sIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
