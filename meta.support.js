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
              			"harden": "harden",
              			"sxty4": "sxty4"
              		}
              	@end-include
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");
var sxty4 = require("sxty4");

var NAME = (0, _symbol2.default)("name");
var ENTITY = (0, _symbol2.default)("entity");
var TYPE = (0, _symbol2.default)("type");

var ERROR = (0, _symbol2.default)("error");

var OBJECT = (0, _symbol2.default)("object");
var BOOLEAN = (0, _symbol2.default)("boolean");
var STRING = (0, _symbol2.default)("string");
var NUMBER = (0, _symbol2.default)("number");
var VALUE = (0, _symbol2.default)("value");

var GARBAGE = (0, _symbol2.default)("garbage");
var CORRUPTED = (0, _symbol2.default)("corrupted");
var TAGGED = (0, _symbol2.default)("tagged");

var CLASS_NAME_PATTERN = /^[A-Z][a-zA-Z0-9]+$/;
var DATA_URL_PATTERN = /^data\:[a-z][\-a-z0-9]+\/([a-z][\-a-z0-9]+)(?:\;base64)?\,/;
var EVAL_USAGE_PATTERN = /\beval\(.*?\)|\beval\b/gm;
var FUNCTION_CLASS_USAGE_PATTERN = /\bFunction\(.*?\)|\bFunction\b/gm;
var FLOAT_NUMBER_PATTERN = /\./;
var SYMBOL_PATTERN = /^Symbol\((.*?)\)$/;
var TAG_PATTERN = /^\[([a-zA-Z][\-a-zA-Z0-9]+)\s+[A-Z][a-zA-Z0-9]+(?:\:(.+?))?\]$/;

var DATA_URL_TAG = "data-url-tag";
var DEFAULT_FORMAT = DATA_URL_TAG;
var DEFAULT_DATA_URL_PREFIX = "data:text/@type;base64,";
var EMPTY_STRING = "";var

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
     			Do not remove this. This is a special procedure.
     	@end-note
     */

			if (instance === GARBAGE) {
				return false;
			}

			if (typeof blueprint != "function") {
				blueprint = this;
			}

			try {
				return new blueprint(GARBAGE).
				__initialize__(instance, blueprint.name).
				instanceOf(blueprint.name);

			} catch (error) {
				return false;
			}
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

			/*;
     	@note:
     		If we are going to throw an error here, possibility of infinite recursion.
     			We can push an error instead.
     	@end-note
     */

			if (!(blueprint instanceof this)) {
				state.push(new Error("incompatible blueprint, " + blueprint.name));

				blueprint = this;
			}

			var data = new blueprint(entity);

			if (TAG_PATTERN.test(data.stringify())) {
				state.push(TAGGED);
			}

			var index = state.length;
			while (index--) {
				var status = state[index];

				if (status instanceof Error) {
					data.setError(status);

				} else {
					harden(status, status, data);
				}
			}

			return (0, _freeze2.default)(data);
		}

		/*;
    	@static-method-documentation:
    		Generic meta data deserialization.
    	@end-static-method-documentation
    */ }, { key: "deserialize", value: function deserialize(
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
					parameter.name != EMPTY_STRING &&
					CLASS_NAME_PATTERN.test(parameter.name));

			}).
			concat(this)[0];var _parameter$splice$fil =

			parameter.splice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" && (

					!("name" in parameter) ||
					typeof parameter.name != "string" ||
					parameter.name == EMPTY_STRING ||
					parameter.name == "anonymous" ||
					parameter.name == "parser"));


			}).
			concat(function parser(data) {
				if (typeof data == "string") {
					try {
						var token = data.match(TAG_PATTERN) || [];
						var type = token[1] || "undefined";
						var value = token[2] || EMPTY_STRING;

						if (value == EMPTY_STRING) {
							value = data;
						}

						/*;
        	@note:
        		If the value is a data url format, try to decode it.
        			Ensure that we have the correct type.
        	@end-note
        */

						if (DATA_URL_PATTERN.test(value)) {
							type = (value.match(DATA_URL_PATTERN) || [])[1] || type;
							value = value.replace(DEFAULT_DATA_URL_PREFIX.replace("@type", type), EMPTY_STRING);
							value = sxty4(value).decode();
						}

						switch (type) {
							case "boolean":
								if (value.toLowerCase() == "true") {
									return true;
								}

								if (value.toLowerCase() == "false") {
									return false;
								}

								throw new Error("cannot parse boolean, " + value);

							case "function":
								try {
									if (EVAL_USAGE_PATTERN.test(value)) {
										throw new Error("cannot parse function, contains eval, potential security issue");
									}

									if (FUNCTION_CLASS_USAGE_PATTERN.test(value)) {
										throw new Error("cannot parse function, contains function class, potential security issue");
									}

									var method = new Function("return " + value)();

									if (typeof method != "function") {
										return function () {throw new Error("no operation done, " + value);};
									}

									return method;

								} catch (error) {
									throw new Error("cannot parse function, " + value + ", " + error.stack);
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
									throw new Error("cannot parse number, " + value + ", " + error.stack);
								}

							case "object":
								if (value == "null") {
									return null;
								}

								try {
									value = JSON.parse(value);

									/*;
                                    	This is the specification for the basic
                                    		meta object structure.
                                    */
									if (
									"type" in value && typeof value.name == "string" &&
									"name" in value && typeof value.name == "string" &&
									"value" in value && typeof value.value == "string" &&
									"format" in value && typeof value.format == "string" &&
									value.format == DATA_URL_TAG &&
									TAG_PATTERN.test(value.value))
									{
										return Meta.deserialize(value.value).valueOf();
									}

									return value;

								} catch (error) {
									return new Error("cannot parse object, " + value + ", " + error.stack);
								}

							case "symbol":
								var symbol = ((value.match(SYMBOL_PATTERN) || [])[1] || EMPTY_STRING).trim();

								if (symbol == EMPTY_STRING) {
									throw new Error("cannot parse symbol, " + value);
								}

								return (0, _symbol2.default)(symbol);

							case "string":
								return value;

							case "undefined":
								return undefined;}


						return value;

					} catch (error) {
						throw new Error("cannot parse, " + data + ", " + error.stack);
					}
				}

				return data;
			}),_parameter$splice$fil2 = (0, _slicedToArray3.default)(_parameter$splice$fil, 2),parser = _parameter$splice$fil2[0],defer = _parameter$splice$fil2[1];

			try {
				return Meta.create(blueprint, parser(data));

			} catch (error) {
				return Meta.create(blueprint, defer(data), [CORRUPTED, error]);
			}
		}

		/*;
    	@static-method-documentation:
    		Checks if the tag is compatible.
    	@end-static-method-documentation
    		@note:
    		Override for specific compatibility checking.
    	@end-note
    */ }, { key: "isCompatible", value: function isCompatible(

		tag) {
			/*;
        	@meta-configuration:
        		{
        			"tag": "string"
        		}
        	@end-meta-configuration
        */

			if (typeof tag != "string") {
				return false;
			}

			return TAG_PATTERN.test(tag);
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

			if (!this.check(entity)) {
				throw new Error("invalid entity");
			}

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
    		For generic checking of entity this is always true,
    			and this should be overridden.
    	@end-method-documentation
    */ }, { key: "check", value: function check(
		entity) {
			return true;
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
    */ }, { key: "tag",





































		/*;
                        	@method-documentation:
                        		Return a string tag format,
                        				[type Name:value]
                        			The value is optional.
                        	@end-method-documentation
                        */value: function tag(


		value) {
			/*;
          	@meta-configuration:
          		{
          			"value": "string"
          		}
          	@end-meta-configuration
          */

			if (typeof value != "string") {
				value = EMPTY_STRING;
			}

			if (value != EMPTY_STRING) {
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

				return EMPTY_STRING + this[ENTITY];

			} catch (error) {
				try {
					return this[ENTITY].toString();

				} catch (error) {
					return this.toString();
				}
			}
		}

		/*;
    	@method-documentation:
    		This will call the static deserialization procedure of the constructor.
    	@end-method-documentation
    */ }, { key: "deserialize", value: function deserialize(
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
				var value = sxty4(self.stringify()).encode();

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
		}

		/*;
    	@method-documentation:
    		Strict value equality.
    	@end-method-documentation
    		@note:
    		Override for deep checking.
    	@end-note
    */ }, { key: "isEqual", value: function isEqual(

		entity) {
			/*;
           	@meta-configuration:
           		{
           			"entity:required": "*"
           		}
           	@end-meta-configuration
           */

			return this[ENTITY] === entity;
		}

		/*;
    	@method-documentation:
    		When the deserialization fails, or if there is error, this method returns true.
    	@end-method-documentation
    */ }, { key: "isCorrupted", value: function isCorrupted()
		{
			return (
				this[CORRUPTED] === CORRUPTED ||
				this.hasError());

		} }, { key: "isTagged", value: function isTagged()

		{
			return (
				this[TAGGED] === TAGGED ||
				TAG_PATTERN.test(this.stringify()));

		}

		/*;
    	@method-documentation:
    		If the entity is not a tag format then it's raw.
    	@end-method-documentation
    */ }, { key: "isRaw", value: function isRaw()
		{
			return !this.isTagged();
		} }, { key: "setError", value: function setError(

		error) {
			if (error instanceof Error) {
				this[ERROR] = error;
			}

			return this;
		} }, { key: "getError", value: function getError()

		{
			return this[ERROR];
		} }, { key: "hasError", value: function hasError()

		{
			return this[ERROR] instanceof Error;
		} }, { key: _toStringTag2.default, get: function get() {return this[NAME];} /*;
                                                                              	@method-documentation:
                                                                              		Generally, this will return the basic object meta specification.
                                                                              			The format property dictates how the value must be interpreted.
                                                                              	@end-method-documentation
                                                                              */ }, { key: OBJECT, get: function get() {return { "type": this[TYPE], "name": this[NAME], "value": this.serialize(), "format": DATA_URL_TAG };} }, { key: BOOLEAN, get: function get() {return true;} }, { key: STRING, get: function get() {return Object.prototype.toString.call(this[ENTITY]);} }, { key: NUMBER, get: function get() {return Infinity;} }, { key: VALUE, get: function get() {return this[ENTITY];} }]);return Meta;}();harden("NAME", NAME, Meta);harden("ENTITY", ENTITY, Meta);harden("TYPE", TYPE, Meta);

harden("OBJECT", OBJECT, Meta);
harden("BOOLEAN", BOOLEAN, Meta);
harden("STRING", STRING, Meta);
harden("NUMBER", NUMBER, Meta);
harden("VALUE", VALUE, Meta);

harden("GARBAGE", GARBAGE, Meta);
harden("CORRUPTED", CORRUPTED, Meta);
harden("TAGGED", TAGGED, Meta);

harden("TAG_PATTERN", TAG_PATTERN, Meta);

harden("DATA_URL_TAG", DATA_URL_TAG, Meta);

module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJwYXJzZXIiLCJwYXJhbWV0ZXIiLCJjb25jYXQiLCJzcGxpY2UiLCJmaWx0ZXIiLCJ0b2tlbiIsIm1hdGNoIiwidHlwZSIsInZhbHVlIiwicmVwbGFjZSIsImRlY29kZSIsInRvTG93ZXJDYXNlIiwibWV0aG9kIiwiRnVuY3Rpb24iLCJzdGFjayIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiZm9ybWF0IiwiZGVzZXJpYWxpemUiLCJ2YWx1ZU9mIiwic3ltYm9sIiwidHJpbSIsImRlZmVyIiwiY3JlYXRlIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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R0FBaUJsRSxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBDTEFTU19OQU1FX1BBVFRFUk4gPSAvXltBLVpdW2EtekEtWjAtOV0rJC87XG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhXFw6W2Etel1bXFwtYS16MC05XStcXC8oW2Etel1bXFwtYS16MC05XSspKD86XFw7YmFzZTY0KT9cXCwvO1xuY29uc3QgRVZBTF9VU0FHRV9QQVRURVJOID0gL1xcYmV2YWxcXCguKj9cXCl8XFxiZXZhbFxcYi9nbTtcbmNvbnN0IEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4gPSAvXFxiRnVuY3Rpb25cXCguKj9cXCl8XFxiRnVuY3Rpb25cXGIvZ207XG5jb25zdCBGTE9BVF9OVU1CRVJfUEFUVEVSTiA9IC9cXC4vO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKj8pXFwpJC87XG5jb25zdCBUQUdfUEFUVEVSTiA9IC9eXFxbKFthLXpBLVpdW1xcLWEtekEtWjAtOV0rKVxccytbQS1aXVthLXpBLVowLTldKyg/OlxcOiguKz8pKT9cXF0kLztcblxuY29uc3QgREFUQV9VUkxfVEFHID0gXCJkYXRhLXVybC10YWdcIjtcbmNvbnN0IERFRkFVTFRfRk9STUFUID0gREFUQV9VUkxfVEFHO1xuY29uc3QgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9AdHlwZTtiYXNlNjQsXCI7XG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2liaWxpdHkgb2YgaW5zdGFuY2UgYmVpbmcgZ2FyYmFnZS5cblxuXHRcdFx0XHREbyBub3QgcmVtb3ZlIHRoaXMuIFRoaXMgaXMgYSBzcGVjaWFsIHByb2NlZHVyZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGluc3RhbmNlID09PSBHQVJCQUdFICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiAoIG5ldyBibHVlcHJpbnQoIEdBUkJBR0UgKSApXG5cdFx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSggYmx1ZXByaW50LCBlbnRpdHksIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IHVuZGVmaW5lZDtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGJsdWVwcmludCA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAxIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRzdGF0ZSA9IEFycmF5LmZyb20oIHN0YXRlICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHdlIGFyZSBnb2luZyB0byB0aHJvdyBhbiBlcnJvciBoZXJlLCBwb3NzaWJpbGl0eSBvZiBpbmZpbml0ZSByZWN1cnNpb24uXG5cblx0XHRcdFx0V2UgY2FuIHB1c2ggYW4gZXJyb3IgaW5zdGVhZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIGJsdWVwcmludCBpbnN0YW5jZW9mIHRoaXMgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgaW5jb21wYXRpYmxlIGJsdWVwcmludCwgJHsgYmx1ZXByaW50Lm5hbWUgfWAgKSApO1xuXG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGxldCBkYXRhID0gbmV3IGJsdWVwcmludCggZW50aXR5ICk7XG5cblx0XHRpZiggVEFHX1BBVFRFUk4udGVzdCggZGF0YS5zdHJpbmdpZnkoICkgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggVEFHR0VEICk7XG5cdFx0fVxuXG5cdFx0bGV0IGluZGV4ID0gc3RhdGUubGVuZ3RoO1xuXHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRsZXQgc3RhdHVzID0gc3RhdGVbIGluZGV4IF07XG5cblx0XHRcdGlmKCBzdGF0dXMgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRkYXRhLnNldEVycm9yKCBzdGF0dXMgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGhhcmRlbiggc3RhdHVzLCBzdGF0dXMsIGRhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggZGF0YSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyaWMgbWV0YSBkYXRhIGRlc2VyaWFsaXphdGlvbi5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0ZGF0YSA9IHRoaXNbIEVOVElUWSBdO1xuXG5cdFx0XHRwYXJhbWV0ZXIgPSBbIHVuZGVmaW5lZCBdLmNvbmNhdCggcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0Ymx1ZXByaW50ID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHBhcmFtZXRlclxuXHRcdFx0XHRcdCYmIHR5cGVvZiBwYXJhbWV0ZXIubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0JiYgcGFyYW1ldGVyLm5hbWUgIT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0JiYgQ0xBU1NfTkFNRV9QQVRURVJOLnRlc3QoIHBhcmFtZXRlci5uYW1lIClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggdGhpcyApWyAwIF07XG5cblx0XHR2YXIgWyBwYXJzZXIsIGRlZmVyIF0gPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0ISggXCJuYW1lXCIgaW4gcGFyYW1ldGVyIClcblx0XHRcdFx0XHRcdHx8IHR5cGVvZiBwYXJhbWV0ZXIubmFtZSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwicGFyc2VyXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIGZ1bmN0aW9uIHBhcnNlciggZGF0YSApe1xuXHRcdFx0XHRpZiggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0XHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0dHlwZSA9ICggdmFsdWUubWF0Y2goIERBVEFfVVJMX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IHR5cGU7XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJmYWxzZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGJvb2xlYW4sICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIEVWQUxfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSAoIG5ldyBGdW5jdGlvbiggXCJyZXR1cm4gXCIgKyB2YWx1ZSApICkoICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwibnVsbFwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGlzIGlzIHRoZSBzcGVjaWZpY2F0aW9uIGZvciB0aGUgYmFzaWNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXRhIG9iamVjdCBzdHJ1Y3R1cmUuXG5cdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmJiBcInZhbHVlXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJmb3JtYXRcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuZm9ybWF0ID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgdmFsdWUuZm9ybWF0ID09IERBVEFfVVJMX1RBR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQmJiBUQUdfUEFUVEVSTi50ZXN0KCB2YWx1ZS52YWx1ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggdmFsdWUudmFsdWUgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG9iamVjdCwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBzeW1ib2wsICR7IHZhbHVlIH1gICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlLCAkeyBkYXRhIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9ICk7XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgcGFyc2VyKCBkYXRhICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBkZWZlciggZGF0YSApLCBbIENPUlJVUFRFRCwgZXJyb3IgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIHRhZyBpcyBjb21wYXRpYmxlLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBzcGVjaWZpYyBjb21wYXRpYmlsaXR5IGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRhZ1wiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdGFnICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICF0aGlzLmNoZWNrKCBlbnRpdHkgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0XHR9XG5cblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBlbnRpdHk7XG5cblx0XHRuYW1lID0gbmFtZSB8fCB0eXBlLnJlcGxhY2UoIC9eLi8sICggbWF0Y2ggKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSggKSApO1xuXG5cdFx0aWYoIHR5cGVvZiBuYW1lICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRZUEUgXSA9IHR5cGU7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Rm9yIGdlbmVyaWMgY2hlY2tpbmcgb2YgZW50aXR5IHRoaXMgaXMgYWx3YXlzIHRydWUsXG5cdFx0XHRcdGFuZCB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJhbGx5LCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBiYXNpYyBvYmplY3QgbWV0YSBzcGVjaWZpY2F0aW9uLlxuXG5cdFx0XHRUaGUgZm9ybWF0IHByb3BlcnR5IGRpY3RhdGVzIGhvdyB0aGUgdmFsdWUgbXVzdCBiZSBpbnRlcnByZXRlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGdldCBbIE9CSkVDVCBdKCApe1xuXHRcdHJldHVybiB7XG5cdFx0XHRcInR5cGVcIjogdGhpc1sgVFlQRSBdLFxuXHRcdFx0XCJuYW1lXCI6IHRoaXNbIE5BTUUgXSxcblx0XHRcdFwidmFsdWVcIjogdGhpcy5zZXJpYWxpemUoICksXG5cdFx0XHRcImZvcm1hdFwiOiBEQVRBX1VSTF9UQUdcblx0XHR9O1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpc1sgRU5USVRZIF0gKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdGdldCBbIFZBTFVFIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVOVElUWSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJuIGEgc3RyaW5nIHRhZyBmb3JtYXQsXG5cblx0XHRcdFx0W3R5cGUgTmFtZTp2YWx1ZV1cblxuXHRcdFx0VGhlIHZhbHVlIGlzIG9wdGlvbmFsLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0dGFnKCB2YWx1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXHRcdH1cblxuXHRcdGlmKCB2YWx1ZSAhPSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdHZhbHVlID0gYDokeyB2YWx1ZSB9YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFskeyB0aGlzWyBUWVBFIF0gfSAkeyB0aGlzWyBOQU1FIF0gfTpAdmFsdWVdYC5yZXBsYWNlKCBcIjpAdmFsdWVcIiwgdmFsdWUgKTtcblx0fVxuXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGVzZSBtZXRob2RzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdHRvQm9vbGVhbiggKXtcblx0XHRyZXR1cm4gdGhpc1sgQk9PTEVBTiBdO1xuXHR9XG5cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXNbIEVOVElUWSBdID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFNvbWUgY2FzZXMgdGhhdCBpbnN0YW5jZU9mIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGluc3RhbmNlT2YoIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0aGlzWyBFTlRJVFkgXSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRpZiggdGhpcy50eXBlT2YoIGJsdWVwcmludC50b0xvd2VyQ2FzZSggKSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgZW50aXR5ID0gdGhpc1sgRU5USVRZIF07XG5cdFx0XHRpZiggZW50aXR5ID09PSBudWxsIHx8IHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApe1xuXHRcdFx0XHRpZihcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblx0XHRcdFx0d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKXtcblx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBnZW5lcmljIHN0cmluZ2lmeSBmdW5jdGlvbixcblx0XHRcdFx0Zm9yIGNvbXBsZXggZW50aXR5IHlvdSBuZWVkIHRvIG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0cmluZ2lmeSggKXtcblx0XHR0cnl7XG5cdFx0XHRpZiggdGhpc1sgVFlQRSBdID09IFwib2JqZWN0XCIgKXtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzWyBFTlRJVFkgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HICsgdGhpc1sgRU5USVRZIF07XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXS50b1N0cmluZyggKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgY2FsbCB0aGUgc3RhdGljIGRlc2VyaWFsaXphdGlvbiBwcm9jZWR1cmUgb2YgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0ZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHByb2NlZHVyZSA9IE1ldGEuZGVzZXJpYWxpemU7XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplLm5hbWUgPT09IFwiZGVzZXJpYWxpemVcIlxuXHRcdCl7XG5cdFx0XHRwcm9jZWR1cmUgPSB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIHRoaXNbIEVOVElUWSBdLCBhcmd1bWVudHNbIDAgXSwgYXJndW1lbnRzWyAxIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIGEgdGFnIGZvcm1hdCB3aXRoIHZhbHVlLlxuXHRcdFx0VGhlIHZhbHVlIG11c3QgYmUgYSBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgZnVuY3Rpb24gd2lsbCBhY2NlcHQgYSBjb250ZXh0IHBhcmFtZXRlci5cblxuXHRcdFx0QnkgZGVmYXVsdCB0aGlzIHdpbGwgc2VyaWFsaXplIHRoZSBlbnRpdHkgdXNpbmcgcGxhaW4vdGV4dCBiYXNlNjQgZGF0YSBVUkwgZm9ybWF0LlxuXG5cdFx0XHRUaGUgcGFyc2VyIG11c3QgcmV0dXJuIGEgc2VyaWFsaXplIGZvcm1hdCBvZiB0aGUgZGF0YSB0byBiZSBwbGFjZWQgb24gdGhlIHRhZy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBkZWZlciA9IGZ1bmN0aW9uIHBhcnNlciggc2VsZiApe1xuXHRcdFx0bGV0IHZhbHVlID0gc3h0eTQoIHNlbGYuc3RyaW5naWZ5KCApICkuZW5jb2RlKCApO1xuXG5cdFx0XHRyZXR1cm4gYCR7IERFRkFVTFRfREFUQV9VUkxfUFJFRklYLnJlcGxhY2UoIFwiQHR5cGVcIiwgc2VsZlsgVFlQRSBdICkgfSR7IHZhbHVlIH1gO1xuXHRcdH07XG5cblx0XHRpZiggdHlwZW9mIHBhcnNlciAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHBhcnNlciA9IGRlZmVyO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggcGFyc2VyKCB0aGlzICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggZGVmZXIoIHRoaXMgKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFN0cmljdCB2YWx1ZSBlcXVhbGl0eS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBkZWVwIGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpc0VxdWFsKCBlbnRpdHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF0gPT09IGVudGl0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFdoZW4gdGhlIGRlc2VyaWFsaXphdGlvbiBmYWlscywgb3IgaWYgdGhlcmUgaXMgZXJyb3IsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzQ29ycnVwdGVkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBDT1JSVVBURUQgXSA9PT0gQ09SUlVQVEVEXG5cdFx0XHR8fCB0aGlzLmhhc0Vycm9yKCApXG5cdFx0KTtcblx0fVxuXG5cdGlzVGFnZ2VkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBUQUdHRUQgXSA9PT0gVEFHR0VEXG5cdFx0XHR8fCBUQUdfUEFUVEVSTi50ZXN0KCB0aGlzLnN0cmluZ2lmeSggKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgbm90IGEgdGFnIGZvcm1hdCB0aGVuIGl0J3MgcmF3LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0aXNSYXcoICl7XG5cdFx0cmV0dXJuICF0aGlzLmlzVGFnZ2VkKCApO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdHRoaXNbIEVSUk9SIF0gPSBlcnJvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEVycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0gaW5zdGFuY2VvZiBFcnJvcjtcblx0fVxufVxuXG5oYXJkZW4oIFwiTkFNRVwiLCBOQU1FLCBNZXRhICk7XG5oYXJkZW4oIFwiRU5USVRZXCIsIEVOVElUWSwgTWV0YSApO1xuaGFyZGVuKCBcIlRZUEVcIiwgVFlQRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiT0JKRUNUXCIsIE9CSkVDVCwgTWV0YSApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgQk9PTEVBTiwgTWV0YSApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBTVFJJTkcsIE1ldGEgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgTlVNQkVSLCBNZXRhICk7XG5oYXJkZW4oIFwiVkFMVUVcIiwgVkFMVUUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIkdBUkJBR0VcIiwgR0FSQkFHRSwgTWV0YSApO1xuaGFyZGVuKCBcIkNPUlJVUFRFRFwiLCBDT1JSVVBURUQsIE1ldGEgKTtcbmhhcmRlbiggXCJUQUdHRURcIiwgVEFHR0VELCBNZXRhICk7XG5cbmhhcmRlbiggXCJUQUdfUEFUVEVSTlwiLCBUQUdfUEFUVEVSTiwgTWV0YSApO1xuXG5oYXJkZW4oIFwiREFUQV9VUkxfVEFHXCIsIERBVEFfVVJMX1RBRywgTWV0YSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGE7XG4iXX0=
//# sourceMappingURL=meta.support.js.map
