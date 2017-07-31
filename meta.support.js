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
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _stringify = require("babel-runtime/core-js/json/stringify");var _stringify2 = _interopRequireDefault(_stringify);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _freeze = require("babel-runtime/core-js/object/freeze");var _freeze2 = _interopRequireDefault(_freeze);var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
			typeof instance == "function" &&
			typeof blueprint == "function" &&
			instance.name === blueprint.name ||

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
				parameter = [arguments[0], undefined, arguments[1]];
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
			concat(this)[0];

			var defer = function parser(data) {
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

									throw new Error("cannot parse number, " + value);

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
			};

			parser = parameter.splice(1).
			filter(function (parameter) {
				return (
					typeof parameter == "function" && (

					!("name" in parameter) ||
					typeof parameter.name != "string" ||
					parameter.name == EMPTY_STRING ||
					parameter.name == "anonymous" ||
					parameter.name == "parser"));


			}).
			concat(defer);

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
	}

	/*;
   	@method-documentation:
   		This is an internal initialization procedure.
   
   	@end-method-documentation
   */(0, _createClass3.default)(Meta, [{ key: "__initialize__", value: function __initialize__(

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
		}

		/*;
    	@method-documentation:
    		Returns the object conversion of this data.
    			This will be used on JSON.stringify method.
    	@end-method-documentation
    */ }, { key: "toJSON", value: function toJSON()

		{
			return this[OBJECT];
		}

		/*;
    	@method-documentation:
    		Returns the boolean conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toBoolean", value: function toBoolean()

		{
			return this[BOOLEAN];
		}

		/*;
    	@method-documentation:
    		Returns the string conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toString", value: function toString()

		{
			return this[STRING];
		}

		/*;
    	@method-documentation:
    		Returns the numerical conversion of this data.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "toNumber", value: function toNumber()

		{
			return this[NUMBER];
		}

		/*;
    	@method-documentation:
    		Returns the original value.
    	@end-method-documentation
    		@note:
    		As much as possible, do not override this method.
    	@end-note
    */ }, { key: "valueOf", value: function valueOf()

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
				return (0, _typeof3.default)(this.valueOf()) == type;
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

			var entity = this.valueOf();

			if (typeof blueprint == "function") {
				return (
					this instanceof blueprint ||
					entity instanceof blueprint ||
					typeof blueprint.name == "string" && this.instanceOf(blueprint.name));

			}

			if (typeof blueprint == "string") {
				if (this.typeOf(blueprint.toLowerCase())) {
					return true;
				}

				if (entity === null || typeof entity == "undefined") {
					return false;
				}

				if (typeof entity == "function" && entity.name === blueprint) {
					return true;
				}

				do {
					if (
					typeof entity == "function" &&
					entity.name === blueprint ||

					typeof entity.constructor == "function" &&
					entity.constructor.name === blueprint)
					{
						return true;
					}
				} while (entity = (0, _getPrototypeOf2.default)(entity));

				/*;
                                                              	@note:
                                                              		If you removed the condition, this may cause unwanted behavior.
                                                              	@end-note
                                                              */
				if (this.constructor.name != blueprint) {
					var _entity = this;

					do {
						if (
						typeof _entity == "function" &&
						_entity.name === blueprint ||

						typeof _entity.constructor == "function" &&
						_entity.constructor.name === blueprint)
						{
							return true;
						}
					} while (_entity = (0, _getPrototypeOf2.default)(_entity));
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
					return (0, _stringify2.default)(this.valueOf());
				}

				return EMPTY_STRING + this.valueOf();

			} catch (error) {
				try {
					return this.valueOf().toString();

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
				return procedure(this.valueOf(), arguments[0], arguments[1]);

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

			if (entity instanceof Meta) {
				return this.valueOf() === entity.valueOf();
			}

			return this.valueOf() === entity;
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
		}

		/*;
    	@method-documentation:
    		Returns the clone of this data.
    	@end-method-documentation
    */ }, { key: "clone", value: function clone()
		{
			return Meta.create(this.constructor, this.valueOf());
		}

		/*;
    	@method-documentation:
    		Returns the Meta instance of this data.
    	@end-method-documentation
    */ }, { key: "native", value: function native()
		{
			return Meta.create(this.valueOf());
		} }, { key: "getType", value: function getType()

		{
			return this[TYPE];
		} }, { key: "getName", value: function getName()

		{
			return this[NAME];
		} }, { key: _toStringTag2.default, get: function get() {return this[NAME];} /*;
                                                                              	@method-documentation:
                                                                              		Generally, this will return the basic object meta specification.
                                                                              			The format property dictates how the value must be interpreted.
                                                                              	@end-method-documentation
                                                                              		@note:
                                                                              		For special values that needs specific conversion to object type,
                                                                              			this method needs to be overridden.
                                                                              	@end-note
                                                                              */ }, { key: OBJECT, get: function get() {return (0, _freeze2.default)({ "type": this[TYPE], "name": this[NAME], "value": this.serialize(), "format": DATA_URL_TAG });} }, { key: BOOLEAN, get: function get() {return true;} }, { key: STRING, get: function get() {return Object.prototype.toString.call(this.valueOf());} }, { key: NUMBER, get: function get() {return Infinity;} /*;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	@get-method-documentation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    		Returns the original value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    			As much as possible do not override this.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	@end-get-method-documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ }, { key: VALUE, get: function get() {return this[ENTITY];} }]);return Meta;}();harden("NAME", NAME, Meta);harden("ENTITY", ENTITY, Meta);harden("TYPE", TYPE, Meta);harden("OBJECT", OBJECT, Meta);harden("BOOLEAN", BOOLEAN, Meta);harden("STRING", STRING, Meta);harden("NUMBER", NUMBER, Meta);harden("VALUE", VALUE, Meta);harden("GARBAGE", GARBAGE, Meta);harden("CORRUPTED", CORRUPTED, Meta);
harden("TAGGED", TAGGED, Meta);

harden("TAG_PATTERN", TAG_PATTERN, Meta);

harden("DATA_URL_TAG", DATA_URL_TAG, Meta);

module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJwYXJzZXIiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJmaWx0ZXIiLCJjb25jYXQiLCJkZWZlciIsInRva2VuIiwibWF0Y2giLCJ0eXBlIiwidmFsdWUiLCJyZXBsYWNlIiwiZGVjb2RlIiwidG9Mb3dlckNhc2UiLCJtZXRob2QiLCJGdW5jdGlvbiIsInN0YWNrIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwiY3JlYXRlIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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QixPQUFMLEVBQWhDLENBQVAsQ0FDQSxDLFdBRUs3RCxNLHNCQUFXLENBQ2hCLE9BQU9xRCxRQUFQLENBQ0EsQyxDQUVEOzs7OztpZEFPTXBELEssc0JBQVUsQ0FDZixPQUFPLEtBQU1QLE1BQU4sQ0FBUCxDQUNBLEMscUJBOFhGSixPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCdUIsSUFBdEIsRUFDQTFCLE9BQVEsUUFBUixFQUFrQkksTUFBbEIsRUFBMEJzQixJQUExQixFQUNBMUIsT0FBUSxNQUFSLEVBQWdCSyxJQUFoQixFQUFzQnFCLElBQXRCLEVBRUExQixPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCbUIsSUFBMUIsRUFDQTFCLE9BQVEsU0FBUixFQUFtQlEsT0FBbkIsRUFBNEJrQixJQUE1QixFQUNBMUIsT0FBUSxRQUFSLEVBQWtCUyxNQUFsQixFQUEwQmlCLElBQTFCLEVBQ0ExQixPQUFRLFFBQVIsRUFBa0JVLE1BQWxCLEVBQTBCZ0IsSUFBMUIsRUFDQTFCLE9BQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JlLElBQXhCLEVBRUExQixPQUFRLFNBQVIsRUFBbUJZLE9BQW5CLEVBQTRCYyxJQUE1QixFQUNBMUIsT0FBUSxXQUFSLEVBQXFCYSxTQUFyQixFQUFnQ2EsSUFBaEM7QUFDQTFCLE9BQVEsUUFBUixFQUFrQmMsTUFBbEIsRUFBMEJZLElBQTFCOztBQUVBMUIsT0FBUSxhQUFSLEVBQXVCcUIsV0FBdkIsRUFBb0NLLElBQXBDOztBQUVBMUIsT0FBUSxjQUFSLEVBQXdCc0IsWUFBeEIsRUFBc0NJLElBQXRDOztBQUVBaUUsT0FBT0MsT0FBUCxHQUFpQmxFLElBQWpCIiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHN4dHk0ID0gcmVxdWlyZSggXCJzeHR5NFwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IEVSUk9SID0gU3ltYm9sKCBcImVycm9yXCIgKTtcblxuY29uc3QgT0JKRUNUID0gU3ltYm9sKCBcIm9iamVjdFwiICk7XG5jb25zdCBCT09MRUFOID0gU3ltYm9sKCBcImJvb2xlYW5cIiApO1xuY29uc3QgU1RSSU5HID0gU3ltYm9sKCBcInN0cmluZ1wiICk7XG5jb25zdCBOVU1CRVIgPSBTeW1ib2woIFwibnVtYmVyXCIgKTtcbmNvbnN0IFZBTFVFID0gU3ltYm9sKCBcInZhbHVlXCIgKTtcblxuY29uc3QgR0FSQkFHRSA9IFN5bWJvbCggXCJnYXJiYWdlXCIgKTtcbmNvbnN0IENPUlJVUFRFRCA9IFN5bWJvbCggXCJjb3JydXB0ZWRcIiApO1xuY29uc3QgVEFHR0VEID0gU3ltYm9sKCBcInRhZ2dlZFwiICk7XG5cbmNvbnN0IENMQVNTX05BTUVfUEFUVEVSTiA9IC9eW0EtWl1bYS16QS1aMC05XSskLztcbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGFcXDpbYS16XVtcXC1hLXowLTldK1xcLyhbYS16XVtcXC1hLXowLTldKykoPzpcXDtiYXNlNjQpP1xcLC87XG5jb25zdCBFVkFMX1VTQUdFX1BBVFRFUk4gPSAvXFxiZXZhbFxcKC4qP1xcKXxcXGJldmFsXFxiL2dtO1xuY29uc3QgRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTiA9IC9cXGJGdW5jdGlvblxcKC4qP1xcKXxcXGJGdW5jdGlvblxcYi9nbTtcbmNvbnN0IEZMT0FUX05VTUJFUl9QQVRURVJOID0gL1xcLi87XG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4qPylcXCkkLztcbmNvbnN0IFRBR19QQVRURVJOID0gL15cXFsoW2EtekEtWl1bXFwtYS16QS1aMC05XSspXFxzK1tBLVpdW2EtekEtWjAtOV0rKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jb25zdCBEQVRBX1VSTF9UQUcgPSBcImRhdGEtdXJsLXRhZ1wiO1xuY29uc3QgREVGQVVMVF9GT1JNQVQgPSBEQVRBX1VSTF9UQUc7XG5jb25zdCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCA9IFwiZGF0YTp0ZXh0L0B0eXBlO2Jhc2U2NCxcIjtcbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpIHx8IChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXG5cdFx0XHRcdERvIG5vdCByZW1vdmUgdGhpcy4gVGhpcyBpcyBhIHNwZWNpYWwgcHJvY2VkdXJlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0XHQuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKCBibHVlcHJpbnQsIGVudGl0eSwgc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJlbnRpdHlcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gdW5kZWZpbmVkO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDEgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlID09IFwib2JqZWN0XCIgKXtcblx0XHRcdHN0YXRlID0gQXJyYXkuZnJvbSggc3RhdGUgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgd2UgYXJlIGdvaW5nIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIHBvc3NpYmlsaXR5IG9mIGluZmluaXRlIHJlY3Vyc2lvbi5cblxuXHRcdFx0XHRXZSBjYW4gcHVzaCBhbiBlcnJvciBpbnN0ZWFkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggYmx1ZXByaW50IGluc3RhbmNlb2YgdGhpcyApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBpbmNvbXBhdGlibGUgYmx1ZXByaW50LCAkeyBibHVlcHJpbnQubmFtZSB9YCApICk7XG5cblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSBuZXcgYmx1ZXByaW50KCBlbnRpdHkgKTtcblxuXHRcdGlmKCBUQUdfUEFUVEVSTi50ZXN0KCBkYXRhLnN0cmluZ2lmeSggKSApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBUQUdHRUQgKTtcblx0XHR9XG5cblx0XHRsZXQgaW5kZXggPSBzdGF0ZS5sZW5ndGg7XG5cdFx0d2hpbGUoIGluZGV4LS0gKXtcblx0XHRcdGxldCBzdGF0dXMgPSBzdGF0ZVsgaW5kZXggXTtcblxuXHRcdFx0aWYoIHN0YXR1cyBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdGRhdGEuc2V0RXJyb3IoIHN0YXR1cyApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aGFyZGVuKCBzdGF0dXMsIHN0YXR1cywgZGF0YSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBkYXRhICk7XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJpYyBtZXRhIGRhdGEgZGVzZXJpYWxpemF0aW9uLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRwYXJhbWV0ZXIgPSBbIGFyZ3VtZW50c1sgMCBdLCB1bmRlZmluZWQsIGFyZ3VtZW50c1sgMSBdIF07XG5cdFx0fVxuXG5cdFx0Ymx1ZXByaW50ID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHBhcmFtZXRlclxuXHRcdFx0XHRcdCYmIHR5cGVvZiBwYXJhbWV0ZXIubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0JiYgcGFyYW1ldGVyLm5hbWUgIT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0JiYgQ0xBU1NfTkFNRV9QQVRURVJOLnRlc3QoIHBhcmFtZXRlci5uYW1lIClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggdGhpcyApWyAwIF07XG5cblx0IFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBkYXRhICl7XG5cdFx0XHRpZiggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0bGV0IHRva2VuID0gZGF0YS5tYXRjaCggVEFHX1BBVFRFUk4gKSB8fCBbIF07XG5cdFx0XHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gdG9rZW5bIDIgXSB8fCBFTVBUWV9TVFJJTkc7XG5cblx0XHRcdFx0XHRpZiggdmFsdWUgPT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdFx0SWYgdGhlIHZhbHVlIGlzIGEgZGF0YSB1cmwgZm9ybWF0LCB0cnkgdG8gZGVjb2RlIGl0LlxuXG5cdFx0XHRcdFx0XHRcdEVuc3VyZSB0aGF0IHdlIGhhdmUgdGhlIGNvcnJlY3QgdHlwZS5cblx0XHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0aWYoIERBVEFfVVJMX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0dHlwZSA9ICggdmFsdWUubWF0Y2goIERBVEFfVVJMX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IHR5cGU7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIERFRkFVTFRfREFUQV9VUkxfUFJFRklYLnJlcGxhY2UoIFwiQHR5cGVcIiwgdHlwZSApLCBFTVBUWV9TVFJJTkcgKTtcblx0XHRcdFx0XHRcdHZhbHVlID0gc3h0eTQoIHZhbHVlICkuZGVjb2RlKCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0XHRcdFx0Y2FzZSBcImJvb2xlYW5cIjpcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJmYWxzZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGJvb2xlYW4sICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJmdW5jdGlvblwiOlxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0aWYoIEVWQUxfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCBjb250YWlucyBldmFsLCBwb3RlbnRpYWwgc2VjdXJpdHkgaXNzdWVcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGZ1bmN0aW9uIGNsYXNzLCBwb3RlbnRpYWwgc2VjdXJpdHkgaXNzdWVcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSAoIG5ldyBGdW5jdGlvbiggXCJyZXR1cm4gXCIgKyB2YWx1ZSApICkoICk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiggKXsgdGhyb3cgbmV3IEVycm9yKCBgbm8gb3BlcmF0aW9uIGRvbmUsICR7IHZhbHVlIH1gICk7IH07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDtcblxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIkluZmluaXR5XCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBJbmZpbml0eTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJOYU5cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIE5hTjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggRkxPQVRfTlVNQkVSX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoICFGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG51bWJlciwgJHsgdmFsdWUgfWAgKTtcblxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG51bWJlciwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIm51bGxcIiApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSggdmFsdWUgKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0XHRcdFx0VGhpcyBpcyB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgdGhlIGJhc2ljXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1ldGEgb2JqZWN0IHN0cnVjdHVyZS5cblx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJ2YWx1ZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBcImZvcm1hdFwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5mb3JtYXQgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgdmFsdWUuZm9ybWF0ID09IERBVEFfVVJMX1RBR1xuXHRcdFx0XHRcdFx0XHRcdFx0JiYgVEFHX1BBVFRFUk4udGVzdCggdmFsdWUudmFsdWUgKVxuXHRcdFx0XHRcdFx0XHRcdCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggdmFsdWUudmFsdWUgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBvYmplY3QsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdFx0XHRsZXQgc3ltYm9sID0gKCAoIHZhbHVlLm1hdGNoKCBTWU1CT0xfUEFUVEVSTiApIHx8IFsgXSApWyAxIF0gfHwgRU1QVFlfU1RSSU5HICkudHJpbSggKTtcblxuXHRcdFx0XHRcdFx0XHRpZiggc3ltYm9sID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBzeW1ib2wsICR7IHZhbHVlIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gU3ltYm9sKCBzeW1ib2wgKTtcblxuXHRcdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH07XG5cblx0XHRwYXJzZXIgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0ISggXCJuYW1lXCIgaW4gcGFyYW1ldGVyIClcblx0XHRcdFx0XHRcdHx8IHR5cGVvZiBwYXJhbWV0ZXIubmFtZSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwicGFyc2VyXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIGRlZmVyICk7XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgcGFyc2VyKCBkYXRhICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBkZWZlciggZGF0YSApLCBbIENPUlJVUFRFRCwgZXJyb3IgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIHRhZyBpcyBjb21wYXRpYmxlLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBzcGVjaWZpYyBjb21wYXRpYmlsaXR5IGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRhZ1wiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdGFnICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIGlzIGFuIGludGVybmFsIGluaXRpYWxpemF0aW9uIHByb2NlZHVyZS5cblxuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICF0aGlzLmNoZWNrKCBlbnRpdHkgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0XHR9XG5cblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBlbnRpdHk7XG5cblx0XHRuYW1lID0gbmFtZSB8fCB0eXBlLnJlcGxhY2UoIC9eLi8sICggbWF0Y2ggKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSggKSApO1xuXG5cdFx0aWYoIHR5cGVvZiBuYW1lICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRZUEUgXSA9IHR5cGU7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Rm9yIGdlbmVyaWMgY2hlY2tpbmcgb2YgZW50aXR5IHRoaXMgaXMgYWx3YXlzIHRydWUsXG5cdFx0XHRcdGFuZCB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJhbGx5LCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBiYXNpYyBvYmplY3QgbWV0YSBzcGVjaWZpY2F0aW9uLlxuXG5cdFx0XHRUaGUgZm9ybWF0IHByb3BlcnR5IGRpY3RhdGVzIGhvdyB0aGUgdmFsdWUgbXVzdCBiZSBpbnRlcnByZXRlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEZvciBzcGVjaWFsIHZhbHVlcyB0aGF0IG5lZWRzIHNwZWNpZmljIGNvbnZlcnNpb24gdG8gb2JqZWN0IHR5cGUsXG5cdFx0XHRcdHRoaXMgbWV0aG9kIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGdldCBbIE9CSkVDVCBdKCApe1xuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCB7XG5cdFx0XHRcInR5cGVcIjogdGhpc1sgVFlQRSBdLFxuXHRcdFx0XCJuYW1lXCI6IHRoaXNbIE5BTUUgXSxcblx0XHRcdFwidmFsdWVcIjogdGhpcy5zZXJpYWxpemUoICksXG5cdFx0XHRcImZvcm1hdFwiOiBEQVRBX1VSTF9UQUdcblx0XHR9ICk7XG5cdH1cblxuXHRnZXQgWyBCT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBTVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBnZXQtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSBkbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLWdldC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiBhIHN0cmluZyB0YWcgZm9ybWF0LFxuXG5cdFx0XHRcdFt0eXBlIE5hbWU6dmFsdWVdXG5cblx0XHRcdFRoZSB2YWx1ZSBpcyBvcHRpb25hbC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRhZyggdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR2YWx1ZSA9IEVNUFRZX1NUUklORztcblx0XHR9XG5cblx0XHRpZiggdmFsdWUgIT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHR2YWx1ZSA9IGA6JHsgdmFsdWUgfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHsgdGhpc1sgVFlQRSBdIH0gJHsgdGhpc1sgTkFNRSBdIH06QHZhbHVlXWAucmVwbGFjZSggXCI6QHZhbHVlXCIsIHZhbHVlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvYmplY3QgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cblx0XHRcdFRoaXMgd2lsbCBiZSB1c2VkIG9uIEpTT04uc3RyaW5naWZ5IG1ldGhvZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBib29sZWFuIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b0Jvb2xlYW4oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEJPT0xFQU4gXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgbnVtZXJpY2FsIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMudmFsdWVPZiggKSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRTb21lIGNhc2VzIHRoYXQgaW5zdGFuY2VPZiBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpbnN0YW5jZU9mKCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IGVudGl0eSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0eXBlb2YgYmx1ZXByaW50Lm5hbWUgPT0gXCJzdHJpbmdcIiAmJiB0aGlzLmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lIClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0aWYoIHRoaXMudHlwZU9mKCBibHVlcHJpbnQudG9Mb3dlckNhc2UoICkgKSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCB8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludCApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0ZG97XG5cdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgeW91IHJlbW92ZWQgdGhlIGNvbmRpdGlvbiwgdGhpcyBtYXkgY2F1c2UgdW53YW50ZWQgYmVoYXZpb3IuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXG5cdFx0XHRcdGRve1xuXHRcdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBnZW5lcmljIHN0cmluZ2lmeSBmdW5jdGlvbixcblx0XHRcdFx0Zm9yIGNvbXBsZXggZW50aXR5IHlvdSBuZWVkIHRvIG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0cmluZ2lmeSggKXtcblx0XHR0cnl7XG5cdFx0XHRpZiggdGhpc1sgVFlQRSBdID09IFwib2JqZWN0XCIgKXtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlT2YoICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORyArIHRoaXMudmFsdWVPZiggKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVPZiggKS50b1N0cmluZyggKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgY2FsbCB0aGUgc3RhdGljIGRlc2VyaWFsaXphdGlvbiBwcm9jZWR1cmUgb2YgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0ZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHByb2NlZHVyZSA9IE1ldGEuZGVzZXJpYWxpemU7XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplLm5hbWUgPT09IFwiZGVzZXJpYWxpemVcIlxuXHRcdCl7XG5cdFx0XHRwcm9jZWR1cmUgPSB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIHRoaXMudmFsdWVPZiggKSwgYXJndW1lbnRzWyAwIF0sIGFyZ3VtZW50c1sgMSBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyBhIHRhZyBmb3JtYXQgd2l0aCB2YWx1ZS5cblx0XHRcdFRoZSB2YWx1ZSBtdXN0IGJlIGEgZGF0YSBVUkwgZm9ybWF0LlxuXG5cdFx0XHRUaGUgcGFyc2VyIGZ1bmN0aW9uIHdpbGwgYWNjZXB0IGEgY29udGV4dCBwYXJhbWV0ZXIuXG5cblx0XHRcdEJ5IGRlZmF1bHQgdGhpcyB3aWxsIHNlcmlhbGl6ZSB0aGUgZW50aXR5IHVzaW5nIHBsYWluL3RleHQgYmFzZTY0IGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBtdXN0IHJldHVybiBhIHNlcmlhbGl6ZSBmb3JtYXQgb2YgdGhlIGRhdGEgdG8gYmUgcGxhY2VkIG9uIHRoZSB0YWcuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZGVmZXIgPSBmdW5jdGlvbiBwYXJzZXIoIHNlbGYgKXtcblx0XHRcdGxldCB2YWx1ZSA9IHN4dHk0KCBzZWxmLnN0cmluZ2lmeSggKSApLmVuY29kZSggKTtcblxuXHRcdFx0cmV0dXJuIGAkeyBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWC5yZXBsYWNlKCBcIkB0eXBlXCIsIHNlbGZbIFRZUEUgXSApIH0keyB2YWx1ZSB9YDtcblx0XHR9O1xuXG5cdFx0aWYoIHR5cGVvZiBwYXJzZXIgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRwYXJzZXIgPSBkZWZlcjtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWcoIHBhcnNlciggdGhpcyApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWcoIGRlZmVyKCB0aGlzICkgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRTdHJpY3QgdmFsdWUgZXF1YWxpdHkuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3IgZGVlcCBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aXNFcXVhbCggZW50aXR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGVudGl0eSBpbnN0YW5jZW9mIE1ldGEgKXtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eS52YWx1ZU9mKCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFdoZW4gdGhlIGRlc2VyaWFsaXphdGlvbiBmYWlscywgb3IgaWYgdGhlcmUgaXMgZXJyb3IsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzQ29ycnVwdGVkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBDT1JSVVBURUQgXSA9PT0gQ09SUlVQVEVEXG5cdFx0XHR8fCB0aGlzLmhhc0Vycm9yKCApXG5cdFx0KTtcblx0fVxuXG5cdGlzVGFnZ2VkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBUQUdHRUQgXSA9PT0gVEFHR0VEXG5cdFx0XHR8fCBUQUdfUEFUVEVSTi50ZXN0KCB0aGlzLnN0cmluZ2lmeSggKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgbm90IGEgdGFnIGZvcm1hdCB0aGVuIGl0J3MgcmF3LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0aXNSYXcoICl7XG5cdFx0cmV0dXJuICF0aGlzLmlzVGFnZ2VkKCApO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdHRoaXNbIEVSUk9SIF0gPSBlcnJvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEVycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0gaW5zdGFuY2VvZiBFcnJvcjtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIGNsb25lIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNsb25lKCApe1xuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcy5jb25zdHJ1Y3RvciwgdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdG5hdGl2ZSggKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Z2V0VHlwZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgVFlQRSBdO1xuXHR9XG5cblx0Z2V0TmFtZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG59XG5cbmhhcmRlbiggXCJOQU1FXCIsIE5BTUUsIE1ldGEgKTtcbmhhcmRlbiggXCJFTlRJVFlcIiwgRU5USVRZLCBNZXRhICk7XG5oYXJkZW4oIFwiVFlQRVwiLCBUWVBFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJPQkpFQ1RcIiwgT0JKRUNULCBNZXRhICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBCT09MRUFOLCBNZXRhICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFNUUklORywgTWV0YSApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBOVU1CRVIsIE1ldGEgKTtcbmhhcmRlbiggXCJWQUxVRVwiLCBWQUxVRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiR0FSQkFHRVwiLCBHQVJCQUdFLCBNZXRhICk7XG5oYXJkZW4oIFwiQ09SUlVQVEVEXCIsIENPUlJVUFRFRCwgTWV0YSApO1xuaGFyZGVuKCBcIlRBR0dFRFwiLCBUQUdHRUQsIE1ldGEgKTtcblxuaGFyZGVuKCBcIlRBR19QQVRURVJOXCIsIFRBR19QQVRURVJOLCBNZXRhICk7XG5cbmhhcmRlbiggXCJEQVRBX1VSTF9UQUdcIiwgREFUQV9VUkxfVEFHLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcbiJdfQ==
//# sourceMappingURL=meta.support.js.map
