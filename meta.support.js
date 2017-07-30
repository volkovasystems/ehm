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
					entity instanceof blueprint);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJwYXJzZXIiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJmaWx0ZXIiLCJjb25jYXQiLCJ0b2tlbiIsIm1hdGNoIiwidHlwZSIsInZhbHVlIiwicmVwbGFjZSIsImRlY29kZSIsInRvTG93ZXJDYXNlIiwibWV0aG9kIiwiRnVuY3Rpb24iLCJzdGFjayIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiZm9ybWF0IiwiZGVzZXJpYWxpemUiLCJ2YWx1ZU9mIiwic3ltYm9sIiwidHJpbSIsImRlZmVyIiwiY3JlYXRlIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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QUVBMUIsT0FBUSxTQUFSLEVBQW1CWSxPQUFuQixFQUE0QmMsSUFBNUIsRUFDQTFCLE9BQVEsV0FBUixFQUFxQmEsU0FBckIsRUFBZ0NhLElBQWhDO0FBQ0ExQixPQUFRLFFBQVIsRUFBa0JjLE1BQWxCLEVBQTBCWSxJQUExQjs7QUFFQTFCLE9BQVEsYUFBUixFQUF1QnFCLFdBQXZCLEVBQW9DSyxJQUFwQzs7QUFFQTFCLE9BQVEsY0FBUixFQUF3QnNCLFlBQXhCLEVBQXNDSSxJQUF0Qzs7QUFFQWlFLE9BQU9DLE9BQVAsR0FBaUJsRSxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBDTEFTU19OQU1FX1BBVFRFUk4gPSAvXltBLVpdW2EtekEtWjAtOV0rJC87XG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhXFw6W2Etel1bXFwtYS16MC05XStcXC8oW2Etel1bXFwtYS16MC05XSspKD86XFw7YmFzZTY0KT9cXCwvO1xuY29uc3QgRVZBTF9VU0FHRV9QQVRURVJOID0gL1xcYmV2YWxcXCguKj9cXCl8XFxiZXZhbFxcYi9nbTtcbmNvbnN0IEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4gPSAvXFxiRnVuY3Rpb25cXCguKj9cXCl8XFxiRnVuY3Rpb25cXGIvZ207XG5jb25zdCBGTE9BVF9OVU1CRVJfUEFUVEVSTiA9IC9cXC4vO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKj8pXFwpJC87XG5jb25zdCBUQUdfUEFUVEVSTiA9IC9eXFxbKFthLXpBLVpdW1xcLWEtekEtWjAtOV0rKVxccytbQS1aXVthLXpBLVowLTldKyg/OlxcOiguKz8pKT9cXF0kLztcblxuY29uc3QgREFUQV9VUkxfVEFHID0gXCJkYXRhLXVybC10YWdcIjtcbmNvbnN0IERFRkFVTFRfRk9STUFUID0gREFUQV9VUkxfVEFHO1xuY29uc3QgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9AdHlwZTtiYXNlNjQsXCI7XG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2liaWxpdHkgb2YgaW5zdGFuY2UgYmVpbmcgZ2FyYmFnZS5cblxuXHRcdFx0XHREbyBub3QgcmVtb3ZlIHRoaXMuIFRoaXMgaXMgYSBzcGVjaWFsIHByb2NlZHVyZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGluc3RhbmNlID09PSBHQVJCQUdFICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiAoIG5ldyBibHVlcHJpbnQoIEdBUkJBR0UgKSApXG5cdFx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSggYmx1ZXByaW50LCBlbnRpdHksIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IHVuZGVmaW5lZDtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGJsdWVwcmludCA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAxIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRzdGF0ZSA9IEFycmF5LmZyb20oIHN0YXRlICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHdlIGFyZSBnb2luZyB0byB0aHJvdyBhbiBlcnJvciBoZXJlLCBwb3NzaWJpbGl0eSBvZiBpbmZpbml0ZSByZWN1cnNpb24uXG5cblx0XHRcdFx0V2UgY2FuIHB1c2ggYW4gZXJyb3IgaW5zdGVhZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIGJsdWVwcmludCBpbnN0YW5jZW9mIHRoaXMgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgaW5jb21wYXRpYmxlIGJsdWVwcmludCwgJHsgYmx1ZXByaW50Lm5hbWUgfWAgKSApO1xuXG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGxldCBkYXRhID0gbmV3IGJsdWVwcmludCggZW50aXR5ICk7XG5cblx0XHRpZiggVEFHX1BBVFRFUk4udGVzdCggZGF0YS5zdHJpbmdpZnkoICkgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggVEFHR0VEICk7XG5cdFx0fVxuXG5cdFx0bGV0IGluZGV4ID0gc3RhdGUubGVuZ3RoO1xuXHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRsZXQgc3RhdHVzID0gc3RhdGVbIGluZGV4IF07XG5cblx0XHRcdGlmKCBzdGF0dXMgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRkYXRhLnNldEVycm9yKCBzdGF0dXMgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGhhcmRlbiggc3RhdHVzLCBzdGF0dXMsIGRhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggZGF0YSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyaWMgbWV0YSBkYXRhIGRlc2VyaWFsaXphdGlvbi5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cGFyYW1ldGVyID0gWyBhcmd1bWVudHNbIDAgXSwgdW5kZWZpbmVkLCBhcmd1bWVudHNbIDEgXSBdO1xuXHRcdH1cblxuXHRcdGJsdWVwcmludCA9IHBhcmFtZXRlci5zcGxpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiBwYXJhbWV0ZXJcblx0XHRcdFx0XHQmJiB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdCYmIHBhcmFtZXRlci5uYW1lICE9IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdCYmIENMQVNTX05BTUVfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIubmFtZSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIHRoaXMgKVsgMCBdO1xuXG5cdFx0dmFyIFsgcGFyc2VyLCBkZWZlciBdID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIChcblx0XHRcdFx0XHRcdCEoIFwibmFtZVwiIGluIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0XHR8fCB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgIT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcImFub255bW91c1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcInBhcnNlclwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBmdW5jdGlvbiBwYXJzZXIoIGRhdGEgKXtcblx0XHRcdFx0aWYoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKXtcblx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRsZXQgdG9rZW4gPSBkYXRhLm1hdGNoKCBUQUdfUEFUVEVSTiApIHx8IFsgXTtcblx0XHRcdFx0XHRcdGxldCB0eXBlID0gdG9rZW5bIDEgXSB8fCBcInVuZGVmaW5lZFwiO1xuXHRcdFx0XHRcdFx0bGV0IHZhbHVlID0gdG9rZW5bIDIgXSB8fCBFTVBUWV9TVFJJTkc7XG5cblx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBkYXRhO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRcdFx0SWYgdGhlIHZhbHVlIGlzIGEgZGF0YSB1cmwgZm9ybWF0LCB0cnkgdG8gZGVjb2RlIGl0LlxuXG5cdFx0XHRcdFx0XHRcdFx0RW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgY29ycmVjdCB0eXBlLlxuXHRcdFx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRpZiggREFUQV9VUkxfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdHR5cGUgPSAoIHZhbHVlLm1hdGNoKCBEQVRBX1VSTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCB0eXBlO1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoIERFRkFVTFRfREFUQV9VUkxfUFJFRklYLnJlcGxhY2UoIFwiQHR5cGVcIiwgdHlwZSApLCBFTVBUWV9TVFJJTkcgKTtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBzeHR5NCggdmFsdWUgKS5kZWNvZGUoICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0XHRcdFx0XHRjYXNlIFwiYm9vbGVhblwiOlxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcInRydWVcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwiZmFsc2VcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBib29sZWFuLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJmdW5jdGlvblwiOlxuXHRcdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBFVkFMX1VTQUdFX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCBjb250YWlucyBldmFsLCBwb3RlbnRpYWwgc2VjdXJpdHkgaXNzdWVcIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGZ1bmN0aW9uIGNsYXNzLCBwb3RlbnRpYWwgc2VjdXJpdHkgaXNzdWVcIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgbWV0aG9kID0gKCBuZXcgRnVuY3Rpb24oIFwicmV0dXJuIFwiICsgdmFsdWUgKSApKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggdHlwZW9mIG1ldGhvZCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCApeyB0aHJvdyBuZXcgRXJyb3IoIGBubyBvcGVyYXRpb24gZG9uZSwgJHsgdmFsdWUgfWAgKTsgfTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDtcblxuXHRcdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIkluZmluaXR5XCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEluZmluaXR5O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJOYU5cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggRkxPQVRfTlVNQkVSX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoICFGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEluZmluaXR5O1xuXG5cdFx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG51bWJlciwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIm51bGxcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhpcyBpcyB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgdGhlIGJhc2ljXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWV0YSBvYmplY3Qgc3RydWN0dXJlLlxuXHRcdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJ2YWx1ZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYmIFwiZm9ybWF0XCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmZvcm1hdCA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCYmIHZhbHVlLmZvcm1hdCA9PSBEQVRBX1VSTF9UQUdcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgVEFHX1BBVFRFUk4udGVzdCggdmFsdWUudmFsdWUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIHZhbHVlLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBvYmplY3QsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzeW1ib2xcIjpcblx0XHRcdFx0XHRcdFx0XHRsZXQgc3ltYm9sID0gKCAoIHZhbHVlLm1hdGNoKCBTWU1CT0xfUEFUVEVSTiApIHx8IFsgXSApWyAxIF0gfHwgRU1QVFlfU1RSSU5HICkudHJpbSggKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmKCBzeW1ib2wgPT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2Ugc3ltYm9sLCAkeyB2YWx1ZSB9YCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBTeW1ib2woIHN5bWJvbCApO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIHBhcnNlciggZGF0YSApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgZGVmZXIoIGRhdGEgKSwgWyBDT1JSVVBURUQsIGVycm9yIF0gKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSB0YWcgaXMgY29tcGF0aWJsZS5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3Igc3BlY2lmaWMgY29tcGF0aWJpbGl0eSBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyBpcyBhbiBpbnRlcm5hbCBpbml0aWFsaXphdGlvbiBwcm9jZWR1cmUuXG5cblxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAhdGhpcy5jaGVjayggZW50aXR5ICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdFx0fVxuXG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgZW50aXR5O1xuXG5cdFx0bmFtZSA9IG5hbWUgfHwgdHlwZS5yZXBsYWNlKCAvXi4vLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9VcHBlckNhc2UoICkgKTtcblxuXHRcdGlmKCB0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlO1xuXHRcdHRoaXNbIE5BTUUgXSA9IG5hbWU7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEZvciBnZW5lcmljIGNoZWNraW5nIG9mIGVudGl0eSB0aGlzIGlzIGFsd2F5cyB0cnVlLFxuXHRcdFx0XHRhbmQgdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvTnVtYmVyKCApO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b0Jvb2xlYW4oICk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0Z2V0IFsgU3ltYm9sLnRvU3RyaW5nVGFnIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyYWxseSwgdGhpcyB3aWxsIHJldHVybiB0aGUgYmFzaWMgb2JqZWN0IG1ldGEgc3BlY2lmaWNhdGlvbi5cblxuXHRcdFx0VGhlIGZvcm1hdCBwcm9wZXJ0eSBkaWN0YXRlcyBob3cgdGhlIHZhbHVlIG11c3QgYmUgaW50ZXJwcmV0ZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRGb3Igc3BlY2lhbCB2YWx1ZXMgdGhhdCBuZWVkcyBzcGVjaWZpYyBjb252ZXJzaW9uIHRvIG9iamVjdCB0eXBlLFxuXHRcdFx0XHR0aGlzIG1ldGhvZCBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSgge1xuXHRcdFx0XCJ0eXBlXCI6IHRoaXNbIFRZUEUgXSxcblx0XHRcdFwibmFtZVwiOiB0aGlzWyBOQU1FIF0sXG5cdFx0XHRcInZhbHVlXCI6IHRoaXMuc2VyaWFsaXplKCApLFxuXHRcdFx0XCJmb3JtYXRcIjogREFUQV9VUkxfVEFHXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAZ2V0LW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUgZG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1nZXQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Z2V0IFsgVkFMVUUgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gYSBzdHJpbmcgdGFnIGZvcm1hdCxcblxuXHRcdFx0XHRbdHlwZSBOYW1lOnZhbHVlXVxuXG5cdFx0XHRUaGUgdmFsdWUgaXMgb3B0aW9uYWwuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0YWcoIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYoIHZhbHVlICE9IEVNUFRZX1NUUklORyApe1xuXHRcdFx0dmFsdWUgPSBgOiR7IHZhbHVlIH1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9OkB2YWx1ZV1gLnJlcGxhY2UoIFwiOkB2YWx1ZVwiLCB2YWx1ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb2JqZWN0IGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXG5cdFx0XHRUaGlzIHdpbGwgYmUgdXNlZCBvbiBKU09OLnN0cmluZ2lmeSBtZXRob2QuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0b0pTT04oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgYm9vbGVhbiBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiB0aGlzWyBTVFJJTkcgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG51bWVyaWNhbCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFZBTFVFIF07XG5cdH1cblxuXHR0eXBlT2YoIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlT2YoICkgPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGVudGl0eSA9IHRoaXMudmFsdWVPZiggKTtcblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0aWYoIHRoaXMudHlwZU9mKCBibHVlcHJpbnQudG9Mb3dlckNhc2UoICkgKSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCB8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludCApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKXtcblx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIHRoaXMuY29uc3RydWN0b3IubmFtZSAhPSBibHVlcHJpbnQgKXtcblx0XHRcdFx0bGV0IGVudGl0eSA9IHRoaXM7XG5cdFx0XHRcdHdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICl7XG5cdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZ2VuZXJpYyBzdHJpbmdpZnkgZnVuY3Rpb24sXG5cdFx0XHRcdGZvciBjb21wbGV4IGVudGl0eSB5b3UgbmVlZCB0byBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdHJpbmdpZnkoICl7XG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHRoaXNbIFRZUEUgXSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcy52YWx1ZU9mKCApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkcgKyB0aGlzLnZhbHVlT2YoICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIGNhbGwgdGhlIHN0YXRpYyBkZXNlcmlhbGl6YXRpb24gcHJvY2VkdXJlIG9mIHRoZSBjb25zdHJ1Y3Rvci5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwcm9jZWR1cmUgPSBNZXRhLmRlc2VyaWFsaXplO1xuXG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgdGhpcy5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZS5uYW1lID09PSBcImRlc2VyaWFsaXplXCJcblx0XHQpe1xuXHRcdFx0cHJvY2VkdXJlID0gdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCB0aGlzLnZhbHVlT2YoICksIGFyZ3VtZW50c1sgMCBdLCBhcmd1bWVudHNbIDEgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgbXVzdCByZXR1cm4gYSBzZXJpYWxpemUgZm9ybWF0IG9mIHRoZSBkYXRhIHRvIGJlIHBsYWNlZCBvbiB0aGUgdGFnLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBzZWxmICl7XG5cdFx0XHRsZXQgdmFsdWUgPSBzeHR5NCggc2VsZi5zdHJpbmdpZnkoICkgKS5lbmNvZGUoICk7XG5cblx0XHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCBzZWxmWyBUWVBFIF0gKSB9JHsgdmFsdWUgfWA7XG5cdFx0fTtcblxuXHRcdGlmKCB0eXBlb2YgcGFyc2VyICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cGFyc2VyID0gZGVmZXI7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBwYXJzZXIoIHRoaXMgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBkZWZlciggdGhpcyApICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0U3RyaWN0IHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIGRlZXAgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFdoZW4gdGhlIGRlc2VyaWFsaXphdGlvbiBmYWlscywgb3IgaWYgdGhlcmUgaXMgZXJyb3IsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzQ29ycnVwdGVkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBDT1JSVVBURUQgXSA9PT0gQ09SUlVQVEVEXG5cdFx0XHR8fCB0aGlzLmhhc0Vycm9yKCApXG5cdFx0KTtcblx0fVxuXG5cdGlzVGFnZ2VkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBUQUdHRUQgXSA9PT0gVEFHR0VEXG5cdFx0XHR8fCBUQUdfUEFUVEVSTi50ZXN0KCB0aGlzLnN0cmluZ2lmeSggKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgbm90IGEgdGFnIGZvcm1hdCB0aGVuIGl0J3MgcmF3LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0aXNSYXcoICl7XG5cdFx0cmV0dXJuICF0aGlzLmlzVGFnZ2VkKCApO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdHRoaXNbIEVSUk9SIF0gPSBlcnJvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEVycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0gaW5zdGFuY2VvZiBFcnJvcjtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIGNsb25lIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNsb25lKCApe1xuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcy5jb25zdHJ1Y3RvciwgdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdG5hdGl2ZSggKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG59XG5cbmhhcmRlbiggXCJOQU1FXCIsIE5BTUUsIE1ldGEgKTtcbmhhcmRlbiggXCJFTlRJVFlcIiwgRU5USVRZLCBNZXRhICk7XG5oYXJkZW4oIFwiVFlQRVwiLCBUWVBFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJPQkpFQ1RcIiwgT0JKRUNULCBNZXRhICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBCT09MRUFOLCBNZXRhICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFNUUklORywgTWV0YSApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBOVU1CRVIsIE1ldGEgKTtcbmhhcmRlbiggXCJWQUxVRVwiLCBWQUxVRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiR0FSQkFHRVwiLCBHQVJCQUdFLCBNZXRhICk7XG5oYXJkZW4oIFwiQ09SUlVQVEVEXCIsIENPUlJVUFRFRCwgTWV0YSApO1xuaGFyZGVuKCBcIlRBR0dFRFwiLCBUQUdHRUQsIE1ldGEgKTtcblxuaGFyZGVuKCBcIlRBR19QQVRURVJOXCIsIFRBR19QQVRURVJOLCBNZXRhICk7XG5cbmhhcmRlbiggXCJEQVRBX1VSTF9UQUdcIiwgREFUQV9VUkxfVEFHLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcbiJdfQ==
//# sourceMappingURL=meta.support.js.map
