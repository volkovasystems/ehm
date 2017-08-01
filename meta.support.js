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
			concat(defer)[0];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJzdGFjayIsImNyZWF0ZSIsInBhcnNlciIsInBhcmFtZXRlciIsInNwbGljZSIsImZpbHRlciIsImNvbmNhdCIsImRlZmVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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aUJsRSxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBDTEFTU19OQU1FX1BBVFRFUk4gPSAvXltBLVpdW2EtekEtWjAtOV0rJC87XG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhXFw6W2Etel1bXFwtYS16MC05XStcXC8oW2Etel1bXFwtYS16MC05XSspKD86XFw7YmFzZTY0KT9cXCwvO1xuY29uc3QgRVZBTF9VU0FHRV9QQVRURVJOID0gL1xcYmV2YWxcXCguKj9cXCl8XFxiZXZhbFxcYi9nbTtcbmNvbnN0IEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4gPSAvXFxiRnVuY3Rpb25cXCguKj9cXCl8XFxiRnVuY3Rpb25cXGIvZ207XG5jb25zdCBGTE9BVF9OVU1CRVJfUEFUVEVSTiA9IC9cXC4vO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKj8pXFwpJC87XG5jb25zdCBUQUdfUEFUVEVSTiA9IC9eXFxbKFthLXpBLVpdW1xcLWEtekEtWjAtOV0rKVxccytbQS1aXVthLXpBLVowLTldKyg/OlxcOiguKz8pKT9cXF0kLztcblxuY29uc3QgREFUQV9VUkxfVEFHID0gXCJkYXRhLXVybC10YWdcIjtcbmNvbnN0IERFRkFVTFRfRk9STUFUID0gREFUQV9VUkxfVEFHO1xuY29uc3QgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9AdHlwZTtiYXNlNjQsXCI7XG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KSB8fCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJvYmplY3RcIlxuXHRcdFx0JiYgaW5zdGFuY2UgIT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KSApe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2liaWxpdHkgb2YgaW5zdGFuY2UgYmVpbmcgZ2FyYmFnZS5cblxuXHRcdFx0XHREbyBub3QgcmVtb3ZlIHRoaXMuIFRoaXMgaXMgYSBzcGVjaWFsIHByb2NlZHVyZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGluc3RhbmNlID09PSBHQVJCQUdFICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiAoIG5ldyBibHVlcHJpbnQoIEdBUkJBR0UgKSApXG5cdFx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSggYmx1ZXByaW50LCBlbnRpdHksIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IHVuZGVmaW5lZDtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGJsdWVwcmludCA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAxIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRzdGF0ZSA9IEFycmF5LmZyb20oIHN0YXRlICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHdlIGFyZSBnb2luZyB0byB0aHJvdyBhbiBlcnJvciBoZXJlLCBwb3NzaWJpbGl0eSBvZiBpbmZpbml0ZSByZWN1cnNpb24uXG5cblx0XHRcdFx0V2UgY2FuIHB1c2ggYW4gZXJyb3IgaW5zdGVhZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIGJsdWVwcmludCBpbnN0YW5jZW9mIHRoaXMgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgaW5jb21wYXRpYmxlIGJsdWVwcmludCwgJHsgYmx1ZXByaW50Lm5hbWUgfWAgKSApO1xuXG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGxldCBkYXRhID0gbmV3IGJsdWVwcmludCggZW50aXR5ICk7XG5cblx0XHRcdGlmKCBUQUdfUEFUVEVSTi50ZXN0KCBkYXRhLnN0cmluZ2lmeSggKSApICl7XG5cdFx0XHRcdHN0YXRlLnB1c2goIFRBR0dFRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaW5kZXggPSBzdGF0ZS5sZW5ndGg7XG5cdFx0XHR3aGlsZSggaW5kZXgtLSApe1xuXHRcdFx0XHRsZXQgc3RhdHVzID0gc3RhdGVbIGluZGV4IF07XG5cblx0XHRcdFx0aWYoIHN0YXR1cyBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdFx0ZGF0YS5zZXRFcnJvciggc3RhdHVzICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aGFyZGVuKCBzdGF0dXMsIHN0YXR1cywgZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBkYXRhICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBjYW5ub3Qgd3JhcCBkYXRhLCAkeyBlcnJvci5zdGFjayB9YCApICk7XG5cblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcywgZW50aXR5LCBzdGF0ZSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRHZW5lcmljIG1ldGEgZGF0YSBkZXNlcmlhbGl6YXRpb24uXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHBhcmFtZXRlciA9IFsgYXJndW1lbnRzWyAwIF0sIHVuZGVmaW5lZCwgYXJndW1lbnRzWyAxIF0gXTtcblx0XHR9XG5cblx0XHRibHVlcHJpbnQgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gcGFyYW1ldGVyXG5cdFx0XHRcdFx0JiYgdHlwZW9mIHBhcmFtZXRlci5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHQmJiBwYXJhbWV0ZXIubmFtZSAhPSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHQmJiBDTEFTU19OQU1FX1BBVFRFUk4udGVzdCggcGFyYW1ldGVyLm5hbWUgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCB0aGlzIClbIDAgXTtcblxuXHQgXHRsZXQgZGVmZXIgPSBmdW5jdGlvbiBwYXJzZXIoIGRhdGEgKXtcblx0XHRcdGlmKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSBkYXRhLm1hdGNoKCBUQUdfUEFUVEVSTiApIHx8IFsgXTtcblx0XHRcdFx0XHRsZXQgdHlwZSA9IHRva2VuWyAxIF0gfHwgXCJ1bmRlZmluZWRcIjtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdHZhbHVlID0gZGF0YTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRcdFx0RW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgY29ycmVjdCB0eXBlLlxuXHRcdFx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRpZiggREFUQV9VUkxfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHR0eXBlID0gKCB2YWx1ZS5tYXRjaCggREFUQV9VUkxfUEFUVEVSTiApIHx8IFsgXSApWyAxIF0gfHwgdHlwZTtcblx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBzeHR5NCggdmFsdWUgKS5kZWNvZGUoICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0XHRjYXNlIFwiYm9vbGVhblwiOlxuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJ0cnVlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcImZhbHNlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgYm9vbGVhbiwgJHsgdmFsdWUgfWAgKTtcblxuXHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggRVZBTF9VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG1ldGhvZCA9ICggbmV3IEZ1bmN0aW9uKCBcInJldHVybiBcIiArIHZhbHVlICkgKSggKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCApeyB0aHJvdyBuZXcgRXJyb3IoIGBubyBvcGVyYXRpb24gZG9uZSwgJHsgdmFsdWUgfWAgKTsgfTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZnVuY3Rpb24sICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEluZmluaXR5O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJvYmplY3RcIjpcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwibnVsbFwiICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0XHRcdFx0XHRUaGlzIGlzIHRoZSBzcGVjaWZpY2F0aW9uIGZvciB0aGUgYmFzaWNcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWV0YSBvYmplY3Qgc3RydWN0dXJlLlxuXHRcdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBcInZhbHVlXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwiZm9ybWF0XCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmZvcm1hdCA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiB2YWx1ZS5mb3JtYXQgPT0gREFUQV9VUkxfVEFHXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBUQUdfUEFUVEVSTi50ZXN0KCB2YWx1ZS52YWx1ZSApXG5cdFx0XHRcdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCB2YWx1ZS52YWx1ZSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG9iamVjdCwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjYXNlIFwic3ltYm9sXCI6XG5cdFx0XHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0XHRcdGlmKCBzeW1ib2wgPT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIHN5bWJvbCwgJHsgdmFsdWUgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBTeW1ib2woIHN5bWJvbCApO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlLCAkeyBkYXRhIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fTtcblxuXHRcdHBhcnNlciA9IHBhcmFtZXRlci5zcGxpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiAoXG5cdFx0XHRcdFx0XHQhKCBcIm5hbWVcIiBpbiBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdFx0fHwgdHlwZW9mIHBhcmFtZXRlci5uYW1lICE9IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gXCJwYXJzZXJcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggZGVmZXIgKVsgMCBdO1xuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIHBhcnNlciggZGF0YSApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgZGVmZXIoIGRhdGEgKSwgWyBDT1JSVVBURUQsIGVycm9yIF0gKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSB0YWcgaXMgY29tcGF0aWJsZS5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3Igc3BlY2lmaWMgY29tcGF0aWJpbGl0eSBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyBpcyBhbiBpbnRlcm5hbCBpbml0aWFsaXphdGlvbiBwcm9jZWR1cmUuXG5cblxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAhdGhpcy5jaGVjayggZW50aXR5ICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdFx0fVxuXG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgZW50aXR5O1xuXG5cdFx0bmFtZSA9IG5hbWUgfHwgdHlwZS5yZXBsYWNlKCAvXi4vLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9VcHBlckNhc2UoICkgKTtcblxuXHRcdGlmKCB0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlO1xuXHRcdHRoaXNbIE5BTUUgXSA9IG5hbWU7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEZvciBnZW5lcmljIGNoZWNraW5nIG9mIGVudGl0eSB0aGlzIGlzIGFsd2F5cyB0cnVlLFxuXHRcdFx0XHRhbmQgdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvTnVtYmVyKCApO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b0Jvb2xlYW4oICk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0Z2V0IFsgU3ltYm9sLnRvU3RyaW5nVGFnIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyYWxseSwgdGhpcyB3aWxsIHJldHVybiB0aGUgYmFzaWMgb2JqZWN0IG1ldGEgc3BlY2lmaWNhdGlvbi5cblxuXHRcdFx0VGhlIGZvcm1hdCBwcm9wZXJ0eSBkaWN0YXRlcyBob3cgdGhlIHZhbHVlIG11c3QgYmUgaW50ZXJwcmV0ZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRGb3Igc3BlY2lhbCB2YWx1ZXMgdGhhdCBuZWVkcyBzcGVjaWZpYyBjb252ZXJzaW9uIHRvIG9iamVjdCB0eXBlLFxuXHRcdFx0XHR0aGlzIG1ldGhvZCBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSgge1xuXHRcdFx0XCJ0eXBlXCI6IHRoaXNbIFRZUEUgXSxcblx0XHRcdFwibmFtZVwiOiB0aGlzWyBOQU1FIF0sXG5cdFx0XHRcInZhbHVlXCI6IHRoaXMuc2VyaWFsaXplKCApLFxuXHRcdFx0XCJmb3JtYXRcIjogREFUQV9VUkxfVEFHXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAZ2V0LW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUgZG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1nZXQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Z2V0IFsgVkFMVUUgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gYSBzdHJpbmcgdGFnIGZvcm1hdCxcblxuXHRcdFx0XHRbdHlwZSBOYW1lOnZhbHVlXVxuXG5cdFx0XHRUaGUgdmFsdWUgaXMgb3B0aW9uYWwuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0YWcoIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYoIHZhbHVlICE9IEVNUFRZX1NUUklORyApe1xuXHRcdFx0dmFsdWUgPSBgOiR7IHZhbHVlIH1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9OkB2YWx1ZV1gLnJlcGxhY2UoIFwiOkB2YWx1ZVwiLCB2YWx1ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb2JqZWN0IGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXG5cdFx0XHRUaGlzIHdpbGwgYmUgdXNlZCBvbiBKU09OLnN0cmluZ2lmeSBtZXRob2QuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0b0pTT04oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgYm9vbGVhbiBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiB0aGlzWyBTVFJJTkcgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG51bWVyaWNhbCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFZBTFVFIF07XG5cdH1cblxuXHR0eXBlT2YoIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlT2YoICkgPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGVudGl0eSA9IHRoaXMudmFsdWVPZiggKTtcblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdFx0fHwgdHlwZW9mIGJsdWVwcmludC5uYW1lID09IFwic3RyaW5nXCIgJiYgdGhpcy5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGRve1xuXHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHlvdSByZW1vdmVkIHRoZSBjb25kaXRpb24sIHRoaXMgbWF5IGNhdXNlIHVud2FudGVkIGJlaGF2aW9yLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblxuXHRcdFx0XHRkb3tcblx0XHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZ2VuZXJpYyBzdHJpbmdpZnkgZnVuY3Rpb24sXG5cdFx0XHRcdGZvciBjb21wbGV4IGVudGl0eSB5b3UgbmVlZCB0byBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdHJpbmdpZnkoICl7XG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHRoaXNbIFRZUEUgXSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcy52YWx1ZU9mKCApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkcgKyB0aGlzLnZhbHVlT2YoICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIGNhbGwgdGhlIHN0YXRpYyBkZXNlcmlhbGl6YXRpb24gcHJvY2VkdXJlIG9mIHRoZSBjb25zdHJ1Y3Rvci5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwcm9jZWR1cmUgPSBNZXRhLmRlc2VyaWFsaXplO1xuXG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgdGhpcy5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZS5uYW1lID09PSBcImRlc2VyaWFsaXplXCJcblx0XHQpe1xuXHRcdFx0cHJvY2VkdXJlID0gdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCB0aGlzLnZhbHVlT2YoICksIGFyZ3VtZW50c1sgMCBdLCBhcmd1bWVudHNbIDEgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgbXVzdCByZXR1cm4gYSBzZXJpYWxpemUgZm9ybWF0IG9mIHRoZSBkYXRhIHRvIGJlIHBsYWNlZCBvbiB0aGUgdGFnLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBzZWxmICl7XG5cdFx0XHRsZXQgdmFsdWUgPSBzeHR5NCggc2VsZi5zdHJpbmdpZnkoICkgKS5lbmNvZGUoICk7XG5cblx0XHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCBzZWxmWyBUWVBFIF0gKSB9JHsgdmFsdWUgfWA7XG5cdFx0fTtcblxuXHRcdGlmKCB0eXBlb2YgcGFyc2VyICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cGFyc2VyID0gZGVmZXI7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBwYXJzZXIoIHRoaXMgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBkZWZlciggdGhpcyApICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0U3RyaWN0IHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIGRlZXAgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBlbnRpdHkgaW5zdGFuY2VvZiBNZXRhICl7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHkudmFsdWVPZiggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRXaGVuIHRoZSBkZXNlcmlhbGl6YXRpb24gZmFpbHMsIG9yIGlmIHRoZXJlIGlzIGVycm9yLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRpc0NvcnJ1cHRlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgQ09SUlVQVEVEIF0gPT09IENPUlJVUFRFRFxuXHRcdFx0fHwgdGhpcy5oYXNFcnJvciggKVxuXHRcdCk7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRJZiB0aGUgZW50aXR5IGlzIG5vdCBhIHRhZyBmb3JtYXQgdGhlbiBpdCdzIHJhdy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzUmF3KCApe1xuXHRcdHJldHVybiAhdGhpcy5pc1RhZ2dlZCggKTtcblx0fVxuXG5cdHNldEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzWyBFUlJPUiBdID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXTtcblx0fVxuXG5cdGhhc0Vycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdIGluc3RhbmNlb2YgRXJyb3I7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBjbG9uZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRjbG9uZSggKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMuY29uc3RydWN0b3IsIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgTWV0YSBpbnN0YW5jZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRuYXRpdmUoICl7XG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldFR5cGUoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFRZUEUgXTtcblx0fVxuXG5cdGdldE5hbWUoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxufVxuXG5oYXJkZW4oIFwiTkFNRVwiLCBOQU1FLCBNZXRhICk7XG5oYXJkZW4oIFwiRU5USVRZXCIsIEVOVElUWSwgTWV0YSApO1xuaGFyZGVuKCBcIlRZUEVcIiwgVFlQRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiT0JKRUNUXCIsIE9CSkVDVCwgTWV0YSApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgQk9PTEVBTiwgTWV0YSApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBTVFJJTkcsIE1ldGEgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgTlVNQkVSLCBNZXRhICk7XG5oYXJkZW4oIFwiVkFMVUVcIiwgVkFMVUUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIkdBUkJBR0VcIiwgR0FSQkFHRSwgTWV0YSApO1xuaGFyZGVuKCBcIkNPUlJVUFRFRFwiLCBDT1JSVVBURUQsIE1ldGEgKTtcbmhhcmRlbiggXCJUQUdHRURcIiwgVEFHR0VELCBNZXRhICk7XG5cbmhhcmRlbiggXCJUQUdfUEFUVEVSTlwiLCBUQUdfUEFUVEVSTiwgTWV0YSApO1xuXG5oYXJkZW4oIFwiREFUQV9VUkxfVEFHXCIsIERBVEFfVVJMX1RBRywgTWV0YSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGE7XG4iXX0=
//# sourceMappingURL=meta.support.js.map
