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

			try {
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

			} catch (error) {
				state.push(new Error("cannot wrap data, " + error.stack));

				return Meta.create(this, entity, state);
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJzdGFjayIsImNyZWF0ZSIsInBhcnNlciIsInBhcmFtZXRlciIsInNwbGljZSIsImZpbHRlciIsImNvbmNhdCIsImRlZmVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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IiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHN4dHk0ID0gcmVxdWlyZSggXCJzeHR5NFwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IEVSUk9SID0gU3ltYm9sKCBcImVycm9yXCIgKTtcblxuY29uc3QgT0JKRUNUID0gU3ltYm9sKCBcIm9iamVjdFwiICk7XG5jb25zdCBCT09MRUFOID0gU3ltYm9sKCBcImJvb2xlYW5cIiApO1xuY29uc3QgU1RSSU5HID0gU3ltYm9sKCBcInN0cmluZ1wiICk7XG5jb25zdCBOVU1CRVIgPSBTeW1ib2woIFwibnVtYmVyXCIgKTtcbmNvbnN0IFZBTFVFID0gU3ltYm9sKCBcInZhbHVlXCIgKTtcblxuY29uc3QgR0FSQkFHRSA9IFN5bWJvbCggXCJnYXJiYWdlXCIgKTtcbmNvbnN0IENPUlJVUFRFRCA9IFN5bWJvbCggXCJjb3JydXB0ZWRcIiApO1xuY29uc3QgVEFHR0VEID0gU3ltYm9sKCBcInRhZ2dlZFwiICk7XG5cbmNvbnN0IENMQVNTX05BTUVfUEFUVEVSTiA9IC9eW0EtWl1bYS16QS1aMC05XSskLztcbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGFcXDpbYS16XVtcXC1hLXowLTldK1xcLyhbYS16XVtcXC1hLXowLTldKykoPzpcXDtiYXNlNjQpP1xcLC87XG5jb25zdCBFVkFMX1VTQUdFX1BBVFRFUk4gPSAvXFxiZXZhbFxcKC4qP1xcKXxcXGJldmFsXFxiL2dtO1xuY29uc3QgRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTiA9IC9cXGJGdW5jdGlvblxcKC4qP1xcKXxcXGJGdW5jdGlvblxcYi9nbTtcbmNvbnN0IEZMT0FUX05VTUJFUl9QQVRURVJOID0gL1xcLi87XG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4qPylcXCkkLztcbmNvbnN0IFRBR19QQVRURVJOID0gL15cXFsoW2EtekEtWl1bXFwtYS16QS1aMC05XSspXFxzK1tBLVpdW2EtekEtWjAtOV0rKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jb25zdCBEQVRBX1VSTF9UQUcgPSBcImRhdGEtdXJsLXRhZ1wiO1xuY29uc3QgREVGQVVMVF9GT1JNQVQgPSBEQVRBX1VSTF9UQUc7XG5jb25zdCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCA9IFwiZGF0YTp0ZXh0L0B0eXBlO2Jhc2U2NCxcIjtcbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpIHx8IChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXG5cdFx0XHRcdERvIG5vdCByZW1vdmUgdGhpcy4gVGhpcyBpcyBhIHNwZWNpYWwgcHJvY2VkdXJlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0XHQuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKCBibHVlcHJpbnQsIGVudGl0eSwgc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJlbnRpdHlcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gdW5kZWZpbmVkO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDEgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlID09IFwib2JqZWN0XCIgKXtcblx0XHRcdHN0YXRlID0gQXJyYXkuZnJvbSggc3RhdGUgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgd2UgYXJlIGdvaW5nIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIHBvc3NpYmlsaXR5IG9mIGluZmluaXRlIHJlY3Vyc2lvbi5cblxuXHRcdFx0XHRXZSBjYW4gcHVzaCBhbiBlcnJvciBpbnN0ZWFkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggYmx1ZXByaW50IGluc3RhbmNlb2YgdGhpcyApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBpbmNvbXBhdGlibGUgYmx1ZXByaW50LCAkeyBibHVlcHJpbnQubmFtZSB9YCApICk7XG5cblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0bGV0IGRhdGEgPSBuZXcgYmx1ZXByaW50KCBlbnRpdHkgKTtcblxuXHRcdFx0aWYoIFRBR19QQVRURVJOLnRlc3QoIGRhdGEuc3RyaW5naWZ5KCApICkgKXtcblx0XHRcdFx0c3RhdGUucHVzaCggVEFHR0VEICk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpbmRleCA9IHN0YXRlLmxlbmd0aDtcblx0XHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRcdGxldCBzdGF0dXMgPSBzdGF0ZVsgaW5kZXggXTtcblxuXHRcdFx0XHRpZiggc3RhdHVzIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkYXRhLnNldEVycm9yKCBzdGF0dXMgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRoYXJkZW4oIHN0YXR1cywgc3RhdHVzLCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoIGRhdGEgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHN0YXRlLnB1c2goIG5ldyBFcnJvciggYGNhbm5vdCB3cmFwIGRhdGEsICR7IGVycm9yLnN0YWNrIH1gICkgKTtcblxuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLCBlbnRpdHksIHN0YXRlICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyaWMgbWV0YSBkYXRhIGRlc2VyaWFsaXphdGlvbi5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cGFyYW1ldGVyID0gWyBhcmd1bWVudHNbIDAgXSwgdW5kZWZpbmVkLCBhcmd1bWVudHNbIDEgXSBdO1xuXHRcdH1cblxuXHRcdGJsdWVwcmludCA9IHBhcmFtZXRlci5zcGxpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiBwYXJhbWV0ZXJcblx0XHRcdFx0XHQmJiB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdCYmIHBhcmFtZXRlci5uYW1lICE9IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdCYmIENMQVNTX05BTUVfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIubmFtZSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIHRoaXMgKVsgMCBdO1xuXG5cdCBcdGxldCBkZWZlciA9IGZ1bmN0aW9uIHBhcnNlciggZGF0YSApe1xuXHRcdFx0aWYoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0XHRcdGxldCB0eXBlID0gdG9rZW5bIDEgXSB8fCBcInVuZGVmaW5lZFwiO1xuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IHRva2VuWyAyIF0gfHwgRU1QVFlfU1RSSU5HO1xuXG5cdFx0XHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBkYXRhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRcdElmIHRoZSB2YWx1ZSBpcyBhIGRhdGEgdXJsIGZvcm1hdCwgdHJ5IHRvIGRlY29kZSBpdC5cblxuXHRcdFx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdHR5cGUgPSAoIHZhbHVlLm1hdGNoKCBEQVRBX1VSTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCB0eXBlO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWC5yZXBsYWNlKCBcIkB0eXBlXCIsIHR5cGUgKSwgRU1QVFlfU1RSSU5HICk7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcInRydWVcIiApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwiZmFsc2VcIiApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBib29sZWFuLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBFVkFMX1VTQUdFX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZXZhbCwgcG90ZW50aWFsIHNlY3VyaXR5IGlzc3VlXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCBjb250YWlucyBmdW5jdGlvbiBjbGFzcywgcG90ZW50aWFsIHNlY3VyaXR5IGlzc3VlXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRsZXQgbWV0aG9kID0gKCBuZXcgRnVuY3Rpb24oIFwicmV0dXJuIFwiICsgdmFsdWUgKSApKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBtZXRob2Q7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJJbmZpbml0eVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiTmFOXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIEZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCAhRkxPQVRfTlVNQkVSX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBudW1iZXIsICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBudW1iZXIsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJudWxsXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0XHRcdFRoaXMgaXMgdGhlIHNwZWNpZmljYXRpb24gZm9yIHRoZSBiYXNpY1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZXRhIG9iamVjdCBzdHJ1Y3R1cmUuXG5cdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwidmFsdWVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmFsdWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJmb3JtYXRcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuZm9ybWF0ID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIHZhbHVlLmZvcm1hdCA9PSBEQVRBX1VSTF9UQUdcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFRBR19QQVRURVJOLnRlc3QoIHZhbHVlLnZhbHVlIClcblx0XHRcdFx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIHZhbHVlLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2Ugb2JqZWN0LCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJzeW1ib2xcIjpcblx0XHRcdFx0XHRcdFx0bGV0IHN5bWJvbCA9ICggKCB2YWx1ZS5tYXRjaCggU1lNQk9MX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IEVNUFRZX1NUUklORyApLnRyaW0oICk7XG5cblx0XHRcdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2Ugc3ltYm9sLCAkeyB2YWx1ZSB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UsICR7IGRhdGEgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9O1xuXG5cdFx0cGFyc2VyID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIChcblx0XHRcdFx0XHRcdCEoIFwibmFtZVwiIGluIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0XHR8fCB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgIT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcImFub255bW91c1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcInBhcnNlclwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBkZWZlciApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIHBhcnNlciggZGF0YSApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgZGVmZXIoIGRhdGEgKSwgWyBDT1JSVVBURUQsIGVycm9yIF0gKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSB0YWcgaXMgY29tcGF0aWJsZS5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3Igc3BlY2lmaWMgY29tcGF0aWJpbGl0eSBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyBpcyBhbiBpbnRlcm5hbCBpbml0aWFsaXphdGlvbiBwcm9jZWR1cmUuXG5cblxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAhdGhpcy5jaGVjayggZW50aXR5ICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdFx0fVxuXG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgZW50aXR5O1xuXG5cdFx0bmFtZSA9IG5hbWUgfHwgdHlwZS5yZXBsYWNlKCAvXi4vLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9VcHBlckNhc2UoICkgKTtcblxuXHRcdGlmKCB0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlO1xuXHRcdHRoaXNbIE5BTUUgXSA9IG5hbWU7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEZvciBnZW5lcmljIGNoZWNraW5nIG9mIGVudGl0eSB0aGlzIGlzIGFsd2F5cyB0cnVlLFxuXHRcdFx0XHRhbmQgdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvTnVtYmVyKCApO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b0Jvb2xlYW4oICk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0Z2V0IFsgU3ltYm9sLnRvU3RyaW5nVGFnIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyYWxseSwgdGhpcyB3aWxsIHJldHVybiB0aGUgYmFzaWMgb2JqZWN0IG1ldGEgc3BlY2lmaWNhdGlvbi5cblxuXHRcdFx0VGhlIGZvcm1hdCBwcm9wZXJ0eSBkaWN0YXRlcyBob3cgdGhlIHZhbHVlIG11c3QgYmUgaW50ZXJwcmV0ZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRGb3Igc3BlY2lhbCB2YWx1ZXMgdGhhdCBuZWVkcyBzcGVjaWZpYyBjb252ZXJzaW9uIHRvIG9iamVjdCB0eXBlLFxuXHRcdFx0XHR0aGlzIG1ldGhvZCBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSgge1xuXHRcdFx0XCJ0eXBlXCI6IHRoaXNbIFRZUEUgXSxcblx0XHRcdFwibmFtZVwiOiB0aGlzWyBOQU1FIF0sXG5cdFx0XHRcInZhbHVlXCI6IHRoaXMuc2VyaWFsaXplKCApLFxuXHRcdFx0XCJmb3JtYXRcIjogREFUQV9VUkxfVEFHXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAZ2V0LW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUgZG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1nZXQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Z2V0IFsgVkFMVUUgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gYSBzdHJpbmcgdGFnIGZvcm1hdCxcblxuXHRcdFx0XHRbdHlwZSBOYW1lOnZhbHVlXVxuXG5cdFx0XHRUaGUgdmFsdWUgaXMgb3B0aW9uYWwuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0YWcoIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYoIHZhbHVlICE9IEVNUFRZX1NUUklORyApe1xuXHRcdFx0dmFsdWUgPSBgOiR7IHZhbHVlIH1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9OkB2YWx1ZV1gLnJlcGxhY2UoIFwiOkB2YWx1ZVwiLCB2YWx1ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb2JqZWN0IGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXG5cdFx0XHRUaGlzIHdpbGwgYmUgdXNlZCBvbiBKU09OLnN0cmluZ2lmeSBtZXRob2QuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0b0pTT04oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgYm9vbGVhbiBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiB0aGlzWyBTVFJJTkcgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG51bWVyaWNhbCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFZBTFVFIF07XG5cdH1cblxuXHR0eXBlT2YoIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlT2YoICkgPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGVudGl0eSA9IHRoaXMudmFsdWVPZiggKTtcblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdFx0fHwgdHlwZW9mIGJsdWVwcmludC5uYW1lID09IFwic3RyaW5nXCIgJiYgdGhpcy5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGRve1xuXHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHlvdSByZW1vdmVkIHRoZSBjb25kaXRpb24sIHRoaXMgbWF5IGNhdXNlIHVud2FudGVkIGJlaGF2aW9yLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblxuXHRcdFx0XHRkb3tcblx0XHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZ2VuZXJpYyBzdHJpbmdpZnkgZnVuY3Rpb24sXG5cdFx0XHRcdGZvciBjb21wbGV4IGVudGl0eSB5b3UgbmVlZCB0byBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdHJpbmdpZnkoICl7XG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHRoaXNbIFRZUEUgXSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcy52YWx1ZU9mKCApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkcgKyB0aGlzLnZhbHVlT2YoICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIGNhbGwgdGhlIHN0YXRpYyBkZXNlcmlhbGl6YXRpb24gcHJvY2VkdXJlIG9mIHRoZSBjb25zdHJ1Y3Rvci5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwcm9jZWR1cmUgPSBNZXRhLmRlc2VyaWFsaXplO1xuXG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgdGhpcy5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZS5uYW1lID09PSBcImRlc2VyaWFsaXplXCJcblx0XHQpe1xuXHRcdFx0cHJvY2VkdXJlID0gdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCB0aGlzLnZhbHVlT2YoICksIGFyZ3VtZW50c1sgMCBdLCBhcmd1bWVudHNbIDEgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgbXVzdCByZXR1cm4gYSBzZXJpYWxpemUgZm9ybWF0IG9mIHRoZSBkYXRhIHRvIGJlIHBsYWNlZCBvbiB0aGUgdGFnLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBzZWxmICl7XG5cdFx0XHRsZXQgdmFsdWUgPSBzeHR5NCggc2VsZi5zdHJpbmdpZnkoICkgKS5lbmNvZGUoICk7XG5cblx0XHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCBzZWxmWyBUWVBFIF0gKSB9JHsgdmFsdWUgfWA7XG5cdFx0fTtcblxuXHRcdGlmKCB0eXBlb2YgcGFyc2VyICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cGFyc2VyID0gZGVmZXI7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBwYXJzZXIoIHRoaXMgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBkZWZlciggdGhpcyApICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0U3RyaWN0IHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIGRlZXAgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBlbnRpdHkgaW5zdGFuY2VvZiBNZXRhICl7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHkudmFsdWVPZiggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRXaGVuIHRoZSBkZXNlcmlhbGl6YXRpb24gZmFpbHMsIG9yIGlmIHRoZXJlIGlzIGVycm9yLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRpc0NvcnJ1cHRlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgQ09SUlVQVEVEIF0gPT09IENPUlJVUFRFRFxuXHRcdFx0fHwgdGhpcy5oYXNFcnJvciggKVxuXHRcdCk7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRJZiB0aGUgZW50aXR5IGlzIG5vdCBhIHRhZyBmb3JtYXQgdGhlbiBpdCdzIHJhdy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzUmF3KCApe1xuXHRcdHJldHVybiAhdGhpcy5pc1RhZ2dlZCggKTtcblx0fVxuXG5cdHNldEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzWyBFUlJPUiBdID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXTtcblx0fVxuXG5cdGhhc0Vycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdIGluc3RhbmNlb2YgRXJyb3I7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBjbG9uZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRjbG9uZSggKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMuY29uc3RydWN0b3IsIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgTWV0YSBpbnN0YW5jZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRuYXRpdmUoICl7XG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldFR5cGUoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFRZUEUgXTtcblx0fVxuXG5cdGdldE5hbWUoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxufVxuXG5oYXJkZW4oIFwiTkFNRVwiLCBOQU1FLCBNZXRhICk7XG5oYXJkZW4oIFwiRU5USVRZXCIsIEVOVElUWSwgTWV0YSApO1xuaGFyZGVuKCBcIlRZUEVcIiwgVFlQRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiT0JKRUNUXCIsIE9CSkVDVCwgTWV0YSApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgQk9PTEVBTiwgTWV0YSApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBTVFJJTkcsIE1ldGEgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgTlVNQkVSLCBNZXRhICk7XG5oYXJkZW4oIFwiVkFMVUVcIiwgVkFMVUUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIkdBUkJBR0VcIiwgR0FSQkFHRSwgTWV0YSApO1xuaGFyZGVuKCBcIkNPUlJVUFRFRFwiLCBDT1JSVVBURUQsIE1ldGEgKTtcbmhhcmRlbiggXCJUQUdHRURcIiwgVEFHR0VELCBNZXRhICk7XG5cbmhhcmRlbiggXCJUQUdfUEFUVEVSTlwiLCBUQUdfUEFUVEVSTiwgTWV0YSApO1xuXG5oYXJkZW4oIFwiREFUQV9VUkxfVEFHXCIsIERBVEFfVVJMX1RBRywgTWV0YSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGE7XG4iXX0=
//# sourceMappingURL=meta.support.js.map
