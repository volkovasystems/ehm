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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJwYXJzZXIiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJmaWx0ZXIiLCJjb25jYXQiLCJ0b2tlbiIsIm1hdGNoIiwidHlwZSIsInZhbHVlIiwicmVwbGFjZSIsImRlY29kZSIsInRvTG93ZXJDYXNlIiwibWV0aG9kIiwiRnVuY3Rpb24iLCJzdGFjayIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiZm9ybWF0IiwiZGVzZXJpYWxpemUiLCJ2YWx1ZU9mIiwic3ltYm9sIiwidHJpbSIsImRlZmVyIiwiY3JlYXRlIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInNlcmlhbGl6ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLE9BQU8sc0JBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPLHNCQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxZQUFZLHNCQUFRLFdBQVIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxxQkFBcUIscUJBQTNCO0FBQ0EsSUFBTUMsbUJBQW1CLDREQUF6QjtBQUNBLElBQU1DLHFCQUFxQiwwQkFBM0I7QUFDQSxJQUFNQywrQkFBK0Isa0NBQXJDO0FBQ0EsSUFBTUMsdUJBQXVCLElBQTdCO0FBQ0EsSUFBTUMsaUJBQWlCLG1CQUF2QjtBQUNBLElBQU1DLGNBQWMsZ0VBQXBCOztBQUVBLElBQU1DLGVBQWUsY0FBckI7QUFDQSxJQUFNQyxpQkFB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LElBQXRCLEVBRUExQixPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCbUIsSUFBMUIsRUFDQTFCLE9BQVEsU0FBUixFQUFtQlEsT0FBbkIsRUFBNEJrQixJQUE1QixFQUNBMUIsT0FBUSxRQUFSLEVBQWtCUyxNQUFsQixFQUEwQmlCLElBQTFCLEVBQ0ExQixPQUFRLFFBQVIsRUFBa0JVLE1BQWxCLEVBQTBCZ0IsSUFBMUIsRUFDQTFCLE9BQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JlLElBQXhCLEVBRUExQixPQUFRLFNBQVIsRUFBbUJZLE9BQW5CLEVBQTRCYyxJQUE1QixFQUNBMUIsT0FBUSxXQUFSLEVBQXFCYSxTQUFyQixFQUFnQ2EsSUFBaEM7QUFDQTFCLE9BQVEsUUFBUixFQUFrQmMsTUFBbEIsRUFBMEJZLElBQTFCOztBQUVBMUIsT0FBUSxhQUFSLEVBQXVCcUIsV0FBdkIsRUFBb0NLLElBQXBDOztBQUVBMUIsT0FBUSxjQUFSLEVBQXdCc0IsWUFBeEIsRUFBc0NJLElBQXRDOztBQUVBaUUsT0FBT0MsT0FBUCxHQUFpQmxFLElBQWpCIiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHN4dHk0ID0gcmVxdWlyZSggXCJzeHR5NFwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IEVSUk9SID0gU3ltYm9sKCBcImVycm9yXCIgKTtcblxuY29uc3QgT0JKRUNUID0gU3ltYm9sKCBcIm9iamVjdFwiICk7XG5jb25zdCBCT09MRUFOID0gU3ltYm9sKCBcImJvb2xlYW5cIiApO1xuY29uc3QgU1RSSU5HID0gU3ltYm9sKCBcInN0cmluZ1wiICk7XG5jb25zdCBOVU1CRVIgPSBTeW1ib2woIFwibnVtYmVyXCIgKTtcbmNvbnN0IFZBTFVFID0gU3ltYm9sKCBcInZhbHVlXCIgKTtcblxuY29uc3QgR0FSQkFHRSA9IFN5bWJvbCggXCJnYXJiYWdlXCIgKTtcbmNvbnN0IENPUlJVUFRFRCA9IFN5bWJvbCggXCJjb3JydXB0ZWRcIiApO1xuY29uc3QgVEFHR0VEID0gU3ltYm9sKCBcInRhZ2dlZFwiICk7XG5cbmNvbnN0IENMQVNTX05BTUVfUEFUVEVSTiA9IC9eW0EtWl1bYS16QS1aMC05XSskLztcbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGFcXDpbYS16XVtcXC1hLXowLTldK1xcLyhbYS16XVtcXC1hLXowLTldKykoPzpcXDtiYXNlNjQpP1xcLC87XG5jb25zdCBFVkFMX1VTQUdFX1BBVFRFUk4gPSAvXFxiZXZhbFxcKC4qP1xcKXxcXGJldmFsXFxiL2dtO1xuY29uc3QgRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTiA9IC9cXGJGdW5jdGlvblxcKC4qP1xcKXxcXGJGdW5jdGlvblxcYi9nbTtcbmNvbnN0IEZMT0FUX05VTUJFUl9QQVRURVJOID0gL1xcLi87XG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4qPylcXCkkLztcbmNvbnN0IFRBR19QQVRURVJOID0gL15cXFsoW2EtekEtWl1bXFwtYS16QS1aMC05XSspXFxzK1tBLVpdW2EtekEtWjAtOV0rKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jb25zdCBEQVRBX1VSTF9UQUcgPSBcImRhdGEtdXJsLXRhZ1wiO1xuY29uc3QgREVGQVVMVF9GT1JNQVQgPSBEQVRBX1VSTF9UQUc7XG5jb25zdCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCA9IFwiZGF0YTp0ZXh0L0B0eXBlO2Jhc2U2NCxcIjtcbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpIHx8IChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXG5cdFx0XHRcdERvIG5vdCByZW1vdmUgdGhpcy4gVGhpcyBpcyBhIHNwZWNpYWwgcHJvY2VkdXJlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0XHQuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKCBibHVlcHJpbnQsIGVudGl0eSwgc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJlbnRpdHlcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gdW5kZWZpbmVkO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDEgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlID09IFwib2JqZWN0XCIgKXtcblx0XHRcdHN0YXRlID0gQXJyYXkuZnJvbSggc3RhdGUgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgd2UgYXJlIGdvaW5nIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIHBvc3NpYmlsaXR5IG9mIGluZmluaXRlIHJlY3Vyc2lvbi5cblxuXHRcdFx0XHRXZSBjYW4gcHVzaCBhbiBlcnJvciBpbnN0ZWFkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggYmx1ZXByaW50IGluc3RhbmNlb2YgdGhpcyApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBpbmNvbXBhdGlibGUgYmx1ZXByaW50LCAkeyBibHVlcHJpbnQubmFtZSB9YCApICk7XG5cblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSBuZXcgYmx1ZXByaW50KCBlbnRpdHkgKTtcblxuXHRcdGlmKCBUQUdfUEFUVEVSTi50ZXN0KCBkYXRhLnN0cmluZ2lmeSggKSApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBUQUdHRUQgKTtcblx0XHR9XG5cblx0XHRsZXQgaW5kZXggPSBzdGF0ZS5sZW5ndGg7XG5cdFx0d2hpbGUoIGluZGV4LS0gKXtcblx0XHRcdGxldCBzdGF0dXMgPSBzdGF0ZVsgaW5kZXggXTtcblxuXHRcdFx0aWYoIHN0YXR1cyBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdGRhdGEuc2V0RXJyb3IoIHN0YXR1cyApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0aGFyZGVuKCBzdGF0dXMsIHN0YXR1cywgZGF0YSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBkYXRhICk7XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJpYyBtZXRhIGRhdGEgZGVzZXJpYWxpemF0aW9uLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRwYXJhbWV0ZXIgPSBbIGFyZ3VtZW50c1sgMCBdLCB1bmRlZmluZWQsIGFyZ3VtZW50c1sgMSBdIF07XG5cdFx0fVxuXG5cdFx0Ymx1ZXByaW50ID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHBhcmFtZXRlclxuXHRcdFx0XHRcdCYmIHR5cGVvZiBwYXJhbWV0ZXIubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0JiYgcGFyYW1ldGVyLm5hbWUgIT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0JiYgQ0xBU1NfTkFNRV9QQVRURVJOLnRlc3QoIHBhcmFtZXRlci5uYW1lIClcblx0XHRcdFx0KTtcblx0XHRcdH0gKVxuXHRcdFx0LmNvbmNhdCggdGhpcyApWyAwIF07XG5cblx0XHR2YXIgWyBwYXJzZXIsIGRlZmVyIF0gPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0ISggXCJuYW1lXCIgaW4gcGFyYW1ldGVyIClcblx0XHRcdFx0XHRcdHx8IHR5cGVvZiBwYXJhbWV0ZXIubmFtZSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwicGFyc2VyXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIGZ1bmN0aW9uIHBhcnNlciggZGF0YSApe1xuXHRcdFx0XHRpZiggdHlwZW9mIGRhdGEgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0XHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0dHlwZSA9ICggdmFsdWUubWF0Y2goIERBVEFfVVJMX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IHR5cGU7XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJmYWxzZVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGJvb2xlYW4sICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIEVWQUxfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSAoIG5ldyBGdW5jdGlvbiggXCJyZXR1cm4gXCIgKyB2YWx1ZSApICkoICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwibnVsbFwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGlzIGlzIHRoZSBzcGVjaWZpY2F0aW9uIGZvciB0aGUgYmFzaWNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXRhIG9iamVjdCBzdHJ1Y3R1cmUuXG5cdFx0XHRcdFx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQmJiBcInZhbHVlXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJmb3JtYXRcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuZm9ybWF0ID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgdmFsdWUuZm9ybWF0ID09IERBVEFfVVJMX1RBR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQmJiBUQUdfUEFUVEVSTi50ZXN0KCB2YWx1ZS52YWx1ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTWV0YS5kZXNlcmlhbGl6ZSggdmFsdWUudmFsdWUgKS52YWx1ZU9mKCApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG9iamVjdCwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBzeW1ib2wsICR7IHZhbHVlIH1gICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlLCAkeyBkYXRhIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9ICk7XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgcGFyc2VyKCBkYXRhICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBkZWZlciggZGF0YSApLCBbIENPUlJVUFRFRCwgZXJyb3IgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIHRhZyBpcyBjb21wYXRpYmxlLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBzcGVjaWZpYyBjb21wYXRpYmlsaXR5IGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRhZ1wiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdGFnICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIGlzIGFuIGludGVybmFsIGluaXRpYWxpemF0aW9uIHByb2NlZHVyZS5cblxuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICF0aGlzLmNoZWNrKCBlbnRpdHkgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0XHR9XG5cblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBlbnRpdHk7XG5cblx0XHRuYW1lID0gbmFtZSB8fCB0eXBlLnJlcGxhY2UoIC9eLi8sICggbWF0Y2ggKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSggKSApO1xuXG5cdFx0aWYoIHR5cGVvZiBuYW1lICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRZUEUgXSA9IHR5cGU7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Rm9yIGdlbmVyaWMgY2hlY2tpbmcgb2YgZW50aXR5IHRoaXMgaXMgYWx3YXlzIHRydWUsXG5cdFx0XHRcdGFuZCB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJhbGx5LCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBiYXNpYyBvYmplY3QgbWV0YSBzcGVjaWZpY2F0aW9uLlxuXG5cdFx0XHRUaGUgZm9ybWF0IHByb3BlcnR5IGRpY3RhdGVzIGhvdyB0aGUgdmFsdWUgbXVzdCBiZSBpbnRlcnByZXRlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEZvciBzcGVjaWFsIHZhbHVlcyB0aGF0IG5lZWRzIHNwZWNpZmljIGNvbnZlcnNpb24gdG8gb2JqZWN0IHR5cGUsXG5cdFx0XHRcdHRoaXMgbWV0aG9kIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGdldCBbIE9CSkVDVCBdKCApe1xuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCB7XG5cdFx0XHRcInR5cGVcIjogdGhpc1sgVFlQRSBdLFxuXHRcdFx0XCJuYW1lXCI6IHRoaXNbIE5BTUUgXSxcblx0XHRcdFwidmFsdWVcIjogdGhpcy5zZXJpYWxpemUoICksXG5cdFx0XHRcImZvcm1hdFwiOiBEQVRBX1VSTF9UQUdcblx0XHR9ICk7XG5cdH1cblxuXHRnZXQgWyBCT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBTVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBnZXQtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSBkbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLWdldC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiBhIHN0cmluZyB0YWcgZm9ybWF0LFxuXG5cdFx0XHRcdFt0eXBlIE5hbWU6dmFsdWVdXG5cblx0XHRcdFRoZSB2YWx1ZSBpcyBvcHRpb25hbC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRhZyggdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR2YWx1ZSA9IEVNUFRZX1NUUklORztcblx0XHR9XG5cblx0XHRpZiggdmFsdWUgIT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHR2YWx1ZSA9IGA6JHsgdmFsdWUgfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHsgdGhpc1sgVFlQRSBdIH0gJHsgdGhpc1sgTkFNRSBdIH06QHZhbHVlXWAucmVwbGFjZSggXCI6QHZhbHVlXCIsIHZhbHVlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvYmplY3QgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cblx0XHRcdFRoaXMgd2lsbCBiZSB1c2VkIG9uIEpTT04uc3RyaW5naWZ5IG1ldGhvZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBib29sZWFuIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b0Jvb2xlYW4oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEJPT0xFQU4gXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgbnVtZXJpY2FsIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMudmFsdWVPZiggKSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRTb21lIGNhc2VzIHRoYXQgaW5zdGFuY2VPZiBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpbnN0YW5jZU9mKCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IGVudGl0eSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRpZiggdGhpcy50eXBlT2YoIGJsdWVwcmludC50b0xvd2VyQ2FzZSggKSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZW50aXR5ID09PSBudWxsIHx8IHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkb3tcblx0XHRcdFx0aWYoIChcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KSB8fCAoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCkgKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fXdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICk7XG5cblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB5b3UgcmVtb3ZlZCB0aGUgY29uZGl0aW9uLCB0aGlzIG1heSBjYXVzZSB1bndhbnRlZCBiZWhhdmlvci5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIHRoaXMuY29uc3RydWN0b3IubmFtZSAhPSBibHVlcHJpbnQgKXtcblx0XHRcdFx0bGV0IGVudGl0eSA9IHRoaXM7XG5cblx0XHRcdFx0ZG97XG5cdFx0XHRcdFx0aWYoIChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KSB8fCAoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCkgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fXdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGdlbmVyaWMgc3RyaW5naWZ5IGZ1bmN0aW9uLFxuXHRcdFx0XHRmb3IgY29tcGxleCBlbnRpdHkgeW91IG5lZWQgdG8gb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RyaW5naWZ5KCApe1xuXHRcdHRyeXtcblx0XHRcdGlmKCB0aGlzWyBUWVBFIF0gPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRoaXMudmFsdWVPZiggKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HICsgdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBjYWxsIHRoZSBzdGF0aWMgZGVzZXJpYWxpemF0aW9uIHByb2NlZHVyZSBvZiB0aGUgY29uc3RydWN0b3IuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcHJvY2VkdXJlID0gTWV0YS5kZXNlcmlhbGl6ZTtcblxuXHRcdGlmKFxuXHRcdFx0dHlwZW9mIHRoaXMuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUubmFtZSA9PT0gXCJkZXNlcmlhbGl6ZVwiXG5cdFx0KXtcblx0XHRcdHByb2NlZHVyZSA9IHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemU7XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggdGhpcy52YWx1ZU9mKCApLCBhcmd1bWVudHNbIDAgXSwgYXJndW1lbnRzWyAxIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIGEgdGFnIGZvcm1hdCB3aXRoIHZhbHVlLlxuXHRcdFx0VGhlIHZhbHVlIG11c3QgYmUgYSBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgZnVuY3Rpb24gd2lsbCBhY2NlcHQgYSBjb250ZXh0IHBhcmFtZXRlci5cblxuXHRcdFx0QnkgZGVmYXVsdCB0aGlzIHdpbGwgc2VyaWFsaXplIHRoZSBlbnRpdHkgdXNpbmcgcGxhaW4vdGV4dCBiYXNlNjQgZGF0YSBVUkwgZm9ybWF0LlxuXG5cdFx0XHRUaGUgcGFyc2VyIG11c3QgcmV0dXJuIGEgc2VyaWFsaXplIGZvcm1hdCBvZiB0aGUgZGF0YSB0byBiZSBwbGFjZWQgb24gdGhlIHRhZy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBkZWZlciA9IGZ1bmN0aW9uIHBhcnNlciggc2VsZiApe1xuXHRcdFx0bGV0IHZhbHVlID0gc3h0eTQoIHNlbGYuc3RyaW5naWZ5KCApICkuZW5jb2RlKCApO1xuXG5cdFx0XHRyZXR1cm4gYCR7IERFRkFVTFRfREFUQV9VUkxfUFJFRklYLnJlcGxhY2UoIFwiQHR5cGVcIiwgc2VsZlsgVFlQRSBdICkgfSR7IHZhbHVlIH1gO1xuXHRcdH07XG5cblx0XHRpZiggdHlwZW9mIHBhcnNlciAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHBhcnNlciA9IGRlZmVyO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggcGFyc2VyKCB0aGlzICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiB0aGlzLnRhZyggZGVmZXIoIHRoaXMgKSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFN0cmljdCB2YWx1ZSBlcXVhbGl0eS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBkZWVwIGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpc0VxdWFsKCBlbnRpdHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRXaGVuIHRoZSBkZXNlcmlhbGl6YXRpb24gZmFpbHMsIG9yIGlmIHRoZXJlIGlzIGVycm9yLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRpc0NvcnJ1cHRlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgQ09SUlVQVEVEIF0gPT09IENPUlJVUFRFRFxuXHRcdFx0fHwgdGhpcy5oYXNFcnJvciggKVxuXHRcdCk7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRJZiB0aGUgZW50aXR5IGlzIG5vdCBhIHRhZyBmb3JtYXQgdGhlbiBpdCdzIHJhdy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzUmF3KCApe1xuXHRcdHJldHVybiAhdGhpcy5pc1RhZ2dlZCggKTtcblx0fVxuXG5cdHNldEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzWyBFUlJPUiBdID0gZXJyb3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXTtcblx0fVxuXG5cdGhhc0Vycm9yKCApe1xuXHRcdHJldHVybiB0aGlzWyBFUlJPUiBdIGluc3RhbmNlb2YgRXJyb3I7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBjbG9uZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRjbG9uZSggKXtcblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMuY29uc3RydWN0b3IsIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgTWV0YSBpbnN0YW5jZSBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRuYXRpdmUoICl7XG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxufVxuXG5oYXJkZW4oIFwiTkFNRVwiLCBOQU1FLCBNZXRhICk7XG5oYXJkZW4oIFwiRU5USVRZXCIsIEVOVElUWSwgTWV0YSApO1xuaGFyZGVuKCBcIlRZUEVcIiwgVFlQRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiT0JKRUNUXCIsIE9CSkVDVCwgTWV0YSApO1xuaGFyZGVuKCBcIkJPT0xFQU5cIiwgQk9PTEVBTiwgTWV0YSApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBTVFJJTkcsIE1ldGEgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgTlVNQkVSLCBNZXRhICk7XG5oYXJkZW4oIFwiVkFMVUVcIiwgVkFMVUUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIkdBUkJBR0VcIiwgR0FSQkFHRSwgTWV0YSApO1xuaGFyZGVuKCBcIkNPUlJVUFRFRFwiLCBDT1JSVVBURUQsIE1ldGEgKTtcbmhhcmRlbiggXCJUQUdHRURcIiwgVEFHR0VELCBNZXRhICk7XG5cbmhhcmRlbiggXCJUQUdfUEFUVEVSTlwiLCBUQUdfUEFUVEVSTiwgTWV0YSApO1xuXG5oYXJkZW4oIFwiREFUQV9VUkxfVEFHXCIsIERBVEFfVVJMX1RBRywgTWV0YSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGE7XG4iXX0=
//# sourceMappingURL=meta.support.js.map
