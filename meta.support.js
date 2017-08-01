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

var ARGUMENTS_PATTERN = /^\[object Arguments\]$/;
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
    		Default generic deserialization parser.
    	@end-static-method-documentation
    */ }, { key: "parser", value: function parser(
		data) {
			/*;
         	@meta-configuration:
         		{
         			"data:required": "string"
         		}
         	@end-meta-configuration
         */

			if (typeof data != "string") {
				throw new Error("cannot parse data, " + data);
			}

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

					case "string":
						return value;

					case "symbol":
						var symbol = ((value.match(SYMBOL_PATTERN) || [])[1] || EMPTY_STRING).trim();

						if (symbol == EMPTY_STRING) {
							throw new Error("cannot parse symbol, " + value);
						}

						return (0, _symbol2.default)(symbol);

					case "undefined":
						return undefined;}


			} catch (error) {
				throw new Error("cannot parse data, " + data + ", " + error.stack);
			}

			throw new Error("cannot parse data, " + data);
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
                            */var _Meta$__deserializeDe =

			Meta.__deserializeDefer__(arguments, this, Meta.parser),_Meta$__deserializeDe2 = (0, _slicedToArray3.default)(_Meta$__deserializeDe, 4),data = _Meta$__deserializeDe2[0],parser = _Meta$__deserializeDe2[1],defer = _Meta$__deserializeDe2[2],blueprint = _Meta$__deserializeDe2[3];

			try {
				return Meta.create(blueprint, parser(data));

			} catch (error) {
				return Meta.create(blueprint, defer(data), [CORRUPTED, error]);
			}
		} }, { key: "__deserializeDefer__", value: function __deserializeDefer__(

		parameter, blueprint, parser) {
			/*;
                                 	@meta-configuration:
                                 		{
                                 			"parameter:required": Arguments,
                                 			"blueprint:required": "function",
                                 			"parser:required": "function"
                                 		}
                                 	@end-meta-configuration
                                 */

			if (!ARGUMENTS_PATTERN.test(parameter)) {
				throw new Error("invalid parameter");
			}

			if (typeof blueprint != "function") {
				throw new Error("invalid blueprint");
			}

			if (typeof parser != "function") {
				throw new Error("invalid parser");
			}

			var argument = parameter;

			try {
				parameter = (0, _from2.default)(parameter);

			} catch (error) {
				throw new Error("cannot process parameter, " + error.stack);
			}

			if (argument.length == 2) {
				parameter = [argument[0], undefined, argument[1]];
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
			concat(blueprint)[0];

			var defer = parser;

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

			return [parameter[0], parser, defer, blueprint];
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

			this[ERROR] = [];

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

			return ("[" + this.getType() + " " + this.getName() + ":@value]").replace(":@value", value);
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
    		Returns the object conversion of this data.
    	@end-method-documentation
    */ }, { key: "toObject", value: function toObject()
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
				if (this.getType() == "object") {
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
    	@static-method-documentation:
    		Default generic serialization interpreter.
    	@end-static-method-documentation
    */ }, { key: "serialize",














		/*;
                              	@method-documentation:
                              		Returns a tag format with value.
                              		The value must be a data URL format.
                              			The interpreter function will accept a context parameter.
                              			By default this will serialize the entity using plain/text base64 data URL format.
                              			The interpreter must return a serialize format of the data to be placed on the tag.
                              	@end-method-documentation
                              */value: function serialize(



		interpreter) {
			/*;
                	@meta-configuration:
                		{
                			"interpreter": "function"
                		}
                	@end-meta-configuration
                */

			var defer = Meta.interpreter;

			if (typeof interpreter != "function") {
				interpreter = defer;
			}

			try {
				return this.tag(interpreter(this));

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
				this.pushError(error);
			}

			return this;
		} }, { key: "pushError", value: function pushError(

		error) {
			if (error instanceof Error) {
				this[ERROR].push(error);
			}

			return this;
		} }, { key: "getError", value: function getError()

		{
			return this[ERROR].reverse()[0];
		} }, { key: "hasError", value: function hasError()

		{
			return this[ERROR].length > 0;
		} }, { key: "transferError", value: function transferError(

		container) {
			/*;
              	@meta-configuration:
              		{
              			"container": Array
              		}
              	@end-meta-configuration
              */

			if (container instanceof Array) {
				var list = this[ERROR].reverse();
				var index = list.length;
				while (index--) {container.push(list[index]);}
			}

			return this;
		}

		/*;
    	@method-documentation:
    		Returns the clone of this data.
    	@end-method-documentation
    */ }, { key: "clone", value: function clone(
		state) {
			/*;
          	@meta-configuration:
          		{
          			"state": Array
          		}
          	@end-meta-configuration
          */

			return Meta.create(this.constructor, this.valueOf(), state);
		}

		/*;
    	@method-documentation:
    		Returns the Meta instance of this data.
    	@end-method-documentation
    */ }, { key: "native", value: function native(
		state) {
			/*;
          	@meta-configuration:
          		{
          			"state": Array
          		}
          	@end-meta-configuration
          */

			return Meta.create(Meta, this.valueOf(), state);
		}

		/*;
    	@method-documentation:
    		Reverts to the Meta instance of this data,
    			passing the incurred state from previous.
    	@end-method-documentation
    */ }, { key: "revert", value: function revert()
		{
			var state = [];

			if (this.isCorrupted()) {
				state.push(CORRUPTED);
			}

			if (this.hasError()) {
				this.transferError(state);
			}

			return this.native(state);
		} }, { key: "getType", value: function getType()

		{
			return this[TYPE];
		} }, { key: "getName", value: function getName()

		{
			return this[NAME];
		} }, { key: _toStringTag2.default, get: function get() {return this.getName();} /*;
                                                                                  	@method-documentation:
                                                                                  		Generally, this will return the basic object meta specification.
                                                                                  			The format property dictates how the value must be interpreted.
                                                                                  	@end-method-documentation
                                                                                  		@note:
                                                                                  		For special values that needs specific conversion to object type,
                                                                                  			this method needs to be overridden.
                                                                                  	@end-note
                                                                                  */ }, { key: OBJECT, get: function get() {return (0, _freeze2.default)({ "type": this.getType(), "name": this.getName(), "value": this.serialize(), "format": DATA_URL_TAG });} }, { key: BOOLEAN, get: function get() {return true;} }, { key: STRING, get: function get() {return Object.prototype.toString.call(this.valueOf());} }, { key: NUMBER, get: function get() {return Infinity;} /*;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	@get-method-documentation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                		Returns the original value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                			As much as possible do not override this.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	@end-get-method-documentation
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ }, { key: VALUE, get: function get() {return this[ENTITY];} }], [{ key: "interpreter", value: function interpreter(self) {/*;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             	@meta-configuration:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             		{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             			"self": Meta
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             		}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             	@end-meta-configuration
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var value = sxty4(self.stringify()).encode();return "" + DEFAULT_DATA_URL_PREFIX.replace("@type", self[TYPE]) + value;} }]);return Meta;}();harden("NAME", NAME, Meta);harden("ENTITY", ENTITY, Meta);harden("TYPE", TYPE, Meta);harden("OBJECT", OBJECT, Meta);harden("BOOLEAN", BOOLEAN, Meta);harden("STRING", STRING, Meta);harden("NUMBER", NUMBER, Meta);harden("VALUE", VALUE, Meta);harden("GARBAGE", GARBAGE, Meta);harden("CORRUPTED", CORRUPTED, Meta);harden("TAGGED", TAGGED, Meta);harden("TAG_PATTERN", TAG_PATTERN, Meta);harden("DATA_URL_TAG", DATA_URL_TAG, Meta);
module.exports = Meta;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkFSR1VNRU5UU19QQVRURVJOIiwiQ0xBU1NfTkFNRV9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsIkVWQUxfVVNBR0VfUEFUVEVSTiIsIkZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4iLCJGTE9BVF9OVU1CRVJfUEFUVEVSTiIsIlNZTUJPTF9QQVRURVJOIiwiVEFHX1BBVFRFUk4iLCJEQVRBX1VSTF9UQUciLCJERUZBVUxUX0ZPUk1BVCIsIkRFRkFVTFRfREFUQV9VUkxfUFJFRklYIiwiRU1QVFlfU1RSSU5HIiwiTWV0YSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImJsdWVwcmludCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsIl9faW5pdGlhbGl6ZV9fIiwiZXJyb3IiLCJlbnRpdHkiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2giLCJFcnJvciIsImRhdGEiLCJ0ZXN0Iiwic3RyaW5naWZ5IiwiaW5kZXgiLCJzdGF0dXMiLCJzZXRFcnJvciIsInN0YWNrIiwiY3JlYXRlIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwicGFyc2VyIiwiX19kZXNlcmlhbGl6ZURlZmVyX18iLCJkZWZlciIsInBhcmFtZXRlciIsImFyZ3VtZW50Iiwic3BsaWNlIiwiZmlsdGVyIiwiY29uY2F0IiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJnZXRUeXBlIiwiZ2V0TmFtZSIsInR5cGVPZiIsInByb2NlZHVyZSIsImludGVycHJldGVyIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInB1c2hFcnJvciIsInJldmVyc2UiLCJjb250YWluZXIiLCJBcnJheSIsImxpc3QiLCJpc0NvcnJ1cHRlZCIsInRyYW5zZmVyRXJyb3IiLCJuYXRpdmUiLCJzZXJpYWxpemUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic2VsZiIsImVuY29kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUUsT0FBTyxzQkFBUSxNQUFSLENBQWI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkOztBQUVBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFlBQVksc0JBQVEsV0FBUixDQUFsQjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmOztBQUVBLElBQU1DLG9CQUFvQix3QkFBMUI7QUFDQSxJQUFN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LENBQ0EsQyx3REFxUW1CbUcsSSxFQUFNLENBQ3pCOzs7Ozs7K2tCQVFBLElBQUlsRCxRQUFRbkQsTUFBT3FHLEtBQUszRCxTQUFMLEVBQVAsRUFBMkI0RCxNQUEzQixFQUFaLENBRUEsWUFBVy9FLHdCQUF3QjZCLE9BQXhCLENBQWlDLE9BQWpDLEVBQTBDaUQsS0FBTWxHLElBQU4sQ0FBMUMsQ0FBWCxHQUF3RWdELEtBQXhFLENBQ0EsQyxxQkFtTUZyRCxPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCd0IsSUFBdEIsRUFDQTNCLE9BQVEsUUFBUixFQUFrQkksTUFBbEIsRUFBMEJ1QixJQUExQixFQUNBM0IsT0FBUSxNQUFSLEVBQWdCSyxJQUFoQixFQUFzQnNCLElBQXRCLEVBRUEzQixPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCb0IsSUFBMUIsRUFDQTNCLE9BQVEsU0FBUixFQUFtQlEsT0FBbkIsRUFBNEJtQixJQUE1QixFQUNBM0IsT0FBUSxRQUFSLEVBQWtCUyxNQUFsQixFQUEwQmtCLElBQTFCLEVBQ0EzQixPQUFRLFFBQVIsRUFBa0JVLE1BQWxCLEVBQTBCaUIsSUFBMUIsRUFDQTNCLE9BQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JnQixJQUF4QixFQUVBM0IsT0FBUSxTQUFSLEVBQW1CWSxPQUFuQixFQUE0QmUsSUFBNUIsRUFDQTNCLE9BQVEsV0FBUixFQUFxQmEsU0FBckIsRUFBZ0NjLElBQWhDLEVBQ0EzQixPQUFRLFFBQVIsRUFBa0JjLE1BQWxCLEVBQTBCYSxJQUExQixFQUVBM0IsT0FBUSxhQUFSLEVBQXVCc0IsV0FBdkIsRUFBb0NLLElBQXBDLEVBRUEzQixPQUFRLGNBQVIsRUFBd0J1QixZQUF4QixFQUFzQ0ksSUFBdEM7QUFFQThFLE9BQU9DLE9BQVAsR0FBaUIvRSxJQUFqQiIsImZpbGUiOiJtZXRhLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBBUkdVTUVOVFNfUEFUVEVSTiA9IC9eXFxbb2JqZWN0IEFyZ3VtZW50c1xcXSQvO1xuY29uc3QgQ0xBU1NfTkFNRV9QQVRURVJOID0gL15bQS1aXVthLXpBLVowLTldKyQvO1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YVxcOlthLXpdW1xcLWEtejAtOV0rXFwvKFthLXpdW1xcLWEtejAtOV0rKSg/OlxcO2Jhc2U2NCk/XFwsLztcbmNvbnN0IEVWQUxfVVNBR0VfUEFUVEVSTiA9IC9cXGJldmFsXFwoLio/XFwpfFxcYmV2YWxcXGIvZ207XG5jb25zdCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOID0gL1xcYkZ1bmN0aW9uXFwoLio/XFwpfFxcYkZ1bmN0aW9uXFxiL2dtO1xuY29uc3QgRkxPQVRfTlVNQkVSX1BBVFRFUk4gPSAvXFwuLztcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLio/KVxcKSQvO1xuY29uc3QgVEFHX1BBVFRFUk4gPSAvXlxcWyhbYS16QS1aXVtcXC1hLXpBLVowLTldKylcXHMrW0EtWl1bYS16QS1aMC05XSsoPzpcXDooLis/KSk/XFxdJC87XG5cbmNvbnN0IERBVEFfVVJMX1RBRyA9IFwiZGF0YS11cmwtdGFnXCI7XG5jb25zdCBERUZBVUxUX0ZPUk1BVCA9IERBVEFfVVJMX1RBRztcbmNvbnN0IERFRkFVTFRfREFUQV9VUkxfUFJFRklYID0gXCJkYXRhOnRleHQvQHR5cGU7YmFzZTY0LFwiO1xuY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcblxuY2xhc3MgTWV0YSB7XG5cdHN0YXRpYyBbIFN5bWJvbC5oYXNJbnN0YW5jZSBdKCBpbnN0YW5jZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKTtcblx0fVxuXG5cdHN0YXRpYyBpbnN0YW5jZU9mKCBpbnN0YW5jZSwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCkgfHwgKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwib2JqZWN0XCJcblx0XHRcdCYmIGluc3RhbmNlICE9IG51bGxcblx0XHRcdCYmIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnQubmFtZVxuXHRcdCkgKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IG9mIGluc3RhbmNlIGJlaW5nIGdhcmJhZ2UuXG5cblx0XHRcdFx0RG8gbm90IHJlbW92ZSB0aGlzLiBUaGlzIGlzIGEgc3BlY2lhbCBwcm9jZWR1cmUuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBpbnN0YW5jZSA9PT0gR0FSQkFHRSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gKCBuZXcgYmx1ZXByaW50KCBHQVJCQUdFICkgKVxuXHRcdFx0XHQuX19pbml0aWFsaXplX18oIGluc3RhbmNlLCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHRcdC5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUoIGJsdWVwcmludCwgZW50aXR5LCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImVudGl0eVwiOiBcIipcIixcblx0XHRcdFx0XHRcInN0YXRlXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAxICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRibHVlcHJpbnQgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMSBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2Ygc3RhdGUgPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0c3RhdGUgPSBBcnJheS5mcm9tKCBzdGF0ZSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB3ZSBhcmUgZ29pbmcgdG8gdGhyb3cgYW4gZXJyb3IgaGVyZSwgcG9zc2liaWxpdHkgb2YgaW5maW5pdGUgcmVjdXJzaW9uLlxuXG5cdFx0XHRcdFdlIGNhbiBwdXNoIGFuIGVycm9yIGluc3RlYWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCAhKCBibHVlcHJpbnQgaW5zdGFuY2VvZiB0aGlzICkgKXtcblx0XHRcdHN0YXRlLnB1c2goIG5ldyBFcnJvciggYGluY29tcGF0aWJsZSBibHVlcHJpbnQsICR7IGJsdWVwcmludC5uYW1lIH1gICkgKTtcblxuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRsZXQgZGF0YSA9IG5ldyBibHVlcHJpbnQoIGVudGl0eSApO1xuXG5cdFx0XHRpZiggVEFHX1BBVFRFUk4udGVzdCggZGF0YS5zdHJpbmdpZnkoICkgKSApe1xuXHRcdFx0XHRzdGF0ZS5wdXNoKCBUQUdHRUQgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGluZGV4ID0gc3RhdGUubGVuZ3RoO1xuXHRcdFx0d2hpbGUoIGluZGV4LS0gKXtcblx0XHRcdFx0bGV0IHN0YXR1cyA9IHN0YXRlWyBpbmRleCBdO1xuXG5cdFx0XHRcdGlmKCBzdGF0dXMgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRcdGRhdGEuc2V0RXJyb3IoIHN0YXR1cyApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGhhcmRlbiggc3RhdHVzLCBzdGF0dXMsIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSggZGF0YSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgY2Fubm90IHdyYXAgZGF0YSwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIGVudGl0eSwgc3RhdGUgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0RGVmYXVsdCBnZW5lcmljIGRlc2VyaWFsaXphdGlvbiBwYXJzZXIuXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c3RhdGljIHBhcnNlciggZGF0YSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZGF0YSwgJHsgZGF0YSB9YCApO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0bGV0IHR5cGUgPSB0b2tlblsgMSBdIHx8IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHR2YWx1ZSA9IGRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0dHlwZSA9ICggdmFsdWUubWF0Y2goIERBVEFfVVJMX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IHR5cGU7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwidHJ1ZVwiICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJmYWxzZVwiICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGJvb2xlYW4sICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0aWYoIEVWQUxfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCBGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSAoIG5ldyBGdW5jdGlvbiggXCJyZXR1cm4gXCIgKyB2YWx1ZSApICkoICk7XG5cblx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG51bWJlciwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIm51bGxcIiApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0VGhpcyBpcyB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgdGhlIGJhc2ljXG5cdFx0XHRcdFx0XHRcdFx0bWV0YSBvYmplY3Qgc3RydWN0dXJlLlxuXHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdGlmKFxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0JiYgXCJ2YWx1ZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIFwiZm9ybWF0XCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmZvcm1hdCA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdCYmIHZhbHVlLmZvcm1hdCA9PSBEQVRBX1VSTF9UQUdcblx0XHRcdFx0XHRcdFx0JiYgVEFHX1BBVFRFUk4udGVzdCggdmFsdWUudmFsdWUgKVxuXHRcdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIHZhbHVlLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBvYmplY3QsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0Y2FzZSBcInN5bWJvbFwiOlxuXHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBzeW1ib2wsICR7IHZhbHVlIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZGF0YSwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBkYXRhLCAkeyBkYXRhIH1gICk7XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJpYyBtZXRhIGRhdGEgZGVzZXJpYWxpemF0aW9uLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR2YXIgWyBkYXRhLCBwYXJzZXIsIGRlZmVyLCBibHVlcHJpbnQgXSA9IE1ldGEuX19kZXNlcmlhbGl6ZURlZmVyX18oIGFyZ3VtZW50cywgdGhpcywgTWV0YS5wYXJzZXIgKTtcblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBwYXJzZXIoIGRhdGEgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIGRlZmVyKCBkYXRhICksIFsgQ09SUlVQVEVELCBlcnJvciBdICk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIF9fZGVzZXJpYWxpemVEZWZlcl9fKCBwYXJhbWV0ZXIsIGJsdWVwcmludCwgcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogQXJndW1lbnRzLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInBhcnNlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICFBUkdVTUVOVFNfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGFyYW1ldGVyXCIgKTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBwYXJzZXIgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXJzZXJcIiApO1xuXHRcdH1cblxuXHRcdGxldCBhcmd1bWVudCA9IHBhcmFtZXRlcjtcblxuXHRcdHRyeXtcblx0XHRcdHBhcmFtZXRlciA9IEFycmF5LmZyb20oIHBhcmFtZXRlciApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHByb2Nlc3MgcGFyYW1ldGVyLCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudC5sZW5ndGggPT0gMiApe1xuXHRcdFx0cGFyYW1ldGVyID0gWyBhcmd1bWVudFsgMCBdLCB1bmRlZmluZWQsIGFyZ3VtZW50WyAxIF0gXTtcblx0XHR9XG5cblx0XHRibHVlcHJpbnQgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gcGFyYW1ldGVyXG5cdFx0XHRcdFx0JiYgdHlwZW9mIHBhcmFtZXRlci5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHQmJiBwYXJhbWV0ZXIubmFtZSAhPSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHQmJiBDTEFTU19OQU1FX1BBVFRFUk4udGVzdCggcGFyYW1ldGVyLm5hbWUgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBibHVlcHJpbnQgKVsgMCBdO1xuXG5cdFx0bGV0IGRlZmVyID0gcGFyc2VyO1xuXG5cdFx0cGFyc2VyID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIChcblx0XHRcdFx0XHRcdCEoIFwibmFtZVwiIGluIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0XHR8fCB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgIT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcImFub255bW91c1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcInBhcnNlclwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBkZWZlciApWyAwIF07XG5cblx0XHRyZXR1cm4gWyBwYXJhbWV0ZXJbIDAgXSwgcGFyc2VyLCBkZWZlciwgYmx1ZXByaW50IF07XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSB0YWcgaXMgY29tcGF0aWJsZS5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3Igc3BlY2lmaWMgY29tcGF0aWJpbGl0eSBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RhdGljIGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0YWdcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHRhZyAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFRBR19QQVRURVJOLnRlc3QoIHRhZyApO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXMuX19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyBpcyBhbiBpbnRlcm5hbCBpbml0aWFsaXphdGlvbiBwcm9jZWR1cmUuXG5cblxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0X19pbml0aWFsaXplX18oIGVudGl0eSwgbmFtZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAhdGhpcy5jaGVjayggZW50aXR5ICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdFx0fVxuXG5cdFx0bGV0IHR5cGUgPSB0eXBlb2YgZW50aXR5O1xuXG5cdFx0bmFtZSA9IG5hbWUgfHwgdHlwZS5yZXBsYWNlKCAvXi4vLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9VcHBlckNhc2UoICkgKTtcblxuXHRcdGlmKCB0eXBlb2YgbmFtZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBuYW1lXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUWVBFIF0gPSB0eXBlO1xuXHRcdHRoaXNbIE5BTUUgXSA9IG5hbWU7XG5cdFx0dGhpc1sgRU5USVRZIF0gPSBlbnRpdHk7XG5cblx0XHR0aGlzWyBFUlJPUiBdID0gWyBdO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRGb3IgZ2VuZXJpYyBjaGVja2luZyBvZiBlbnRpdHkgdGhpcyBpcyBhbHdheXMgdHJ1ZSxcblx0XHRcdFx0YW5kIHRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRjaGVjayggZW50aXR5ICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgb25seSBzdXBwb3J0IHRocmVlIHR5cGVzOyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbi5cblxuXHRcdFx0VGhlc2UgdHlwZXMgYXJlIHNlcmlhbGl6YWJsZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdERvIG5vdCBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRbIFN5bWJvbC50b1ByaW1pdGl2ZSBdKCB0eXBlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlOnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHN3aXRjaCggdHlwZSApe1xuXHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblxuXHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b051bWJlciggKTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9Cb29sZWFuKCApO1xuXHRcdH1cblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXG5cdGdldCBbIFN5bWJvbC50b1N0cmluZ1RhZyBdKCApe1xuXHRcdHJldHVybiB0aGlzLmdldE5hbWUoICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRHZW5lcmFsbHksIHRoaXMgd2lsbCByZXR1cm4gdGhlIGJhc2ljIG9iamVjdCBtZXRhIHNwZWNpZmljYXRpb24uXG5cblx0XHRcdFRoZSBmb3JtYXQgcHJvcGVydHkgZGljdGF0ZXMgaG93IHRoZSB2YWx1ZSBtdXN0IGJlIGludGVycHJldGVkLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0Rm9yIHNwZWNpYWwgdmFsdWVzIHRoYXQgbmVlZHMgc3BlY2lmaWMgY29udmVyc2lvbiB0byBvYmplY3QgdHlwZSxcblx0XHRcdFx0dGhpcyBtZXRob2QgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0Z2V0IFsgT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoIHtcblx0XHRcdFwidHlwZVwiOiB0aGlzLmdldFR5cGUoICksXG5cdFx0XHRcIm5hbWVcIjogdGhpcy5nZXROYW1lKCApLFxuXHRcdFx0XCJ2YWx1ZVwiOiB0aGlzLnNlcmlhbGl6ZSggKSxcblx0XHRcdFwiZm9ybWF0XCI6IERBVEFfVVJMX1RBR1xuXHRcdH0gKTtcblx0fVxuXG5cdGdldCBbIEJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldCBbIFNUUklORyBdKCApe1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIHRoaXMudmFsdWVPZiggKSApO1xuXHR9XG5cblx0Z2V0IFsgTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIEluZmluaXR5O1xuXHR9XG5cblx0Lyo7XG5cdFx0QGdldC1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLlxuXG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlIGRvIG5vdCBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtZ2V0LW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGdldCBbIFZBTFVFIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVOVElUWSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJuIGEgc3RyaW5nIHRhZyBmb3JtYXQsXG5cblx0XHRcdFx0W3R5cGUgTmFtZTp2YWx1ZV1cblxuXHRcdFx0VGhlIHZhbHVlIGlzIG9wdGlvbmFsLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0dGFnKCB2YWx1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidmFsdWVcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXHRcdH1cblxuXHRcdGlmKCB2YWx1ZSAhPSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdHZhbHVlID0gYDokeyB2YWx1ZSB9YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gYFskeyB0aGlzLmdldFR5cGUoICkgfSAkeyB0aGlzLmdldE5hbWUoICkgfTpAdmFsdWVdYC5yZXBsYWNlKCBcIjpAdmFsdWVcIiwgdmFsdWUgKTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG9iamVjdCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblxuXHRcdFx0VGhpcyB3aWxsIGJlIHVzZWQgb24gSlNPTi5zdHJpbmdpZnkgbWV0aG9kLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0dG9KU09OKCApe1xuXHRcdHJldHVybiB0aGlzWyBPQkpFQ1QgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG9iamVjdCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRvT2JqZWN0KCApe1xuXHRcdHJldHVybiB0aGlzWyBPQkpFQ1QgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIGJvb2xlYW4gY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvQm9vbGVhbiggKXtcblx0XHRyZXR1cm4gdGhpc1sgQk9PTEVBTiBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgc3RyaW5nIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gdGhpc1sgU1RSSU5HIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBudW1lcmljYWwgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvTnVtYmVyKCApe1xuXHRcdHJldHVybiB0aGlzWyBOVU1CRVIgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG9yaWdpbmFsIHZhbHVlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzWyBWQUxVRSBdO1xuXHR9XG5cblx0dHlwZU9mKCB0eXBlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0eXBlID09IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZU9mKCApID09IHR5cGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFNvbWUgY2FzZXMgdGhhdCBpbnN0YW5jZU9mIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGluc3RhbmNlT2YoIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiYmx1ZXByaW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBlbnRpdHkgPSB0aGlzLnZhbHVlT2YoICk7XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdFx0fHwgZW50aXR5IGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IHR5cGVvZiBibHVlcHJpbnQubmFtZSA9PSBcInN0cmluZ1wiICYmIHRoaXMuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRpZiggdGhpcy50eXBlT2YoIGJsdWVwcmludC50b0xvd2VyQ2FzZSggKSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZW50aXR5ID09PSBudWxsIHx8IHR5cGVvZiBlbnRpdHkgPT0gXCJ1bmRlZmluZWRcIiApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIiAmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRkb3tcblx0XHRcdFx0aWYoIChcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KSB8fCAoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCkgKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fXdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICk7XG5cblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB5b3UgcmVtb3ZlZCB0aGUgY29uZGl0aW9uLCB0aGlzIG1heSBjYXVzZSB1bndhbnRlZCBiZWhhdmlvci5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIHRoaXMuY29uc3RydWN0b3IubmFtZSAhPSBibHVlcHJpbnQgKXtcblx0XHRcdFx0bGV0IGVudGl0eSA9IHRoaXM7XG5cblx0XHRcdFx0ZG97XG5cdFx0XHRcdFx0aWYoIChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KSB8fCAoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCkgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fXdoaWxlKCBlbnRpdHkgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGVudGl0eSApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGdlbmVyaWMgc3RyaW5naWZ5IGZ1bmN0aW9uLFxuXHRcdFx0XHRmb3IgY29tcGxleCBlbnRpdHkgeW91IG5lZWQgdG8gb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0c3RyaW5naWZ5KCApe1xuXHRcdHRyeXtcblx0XHRcdGlmKCB0aGlzLmdldFR5cGUoICkgPT0gXCJvYmplY3RcIiApe1xuXHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHRoaXMudmFsdWVPZiggKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HICsgdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBjYWxsIHRoZSBzdGF0aWMgZGVzZXJpYWxpemF0aW9uIHByb2NlZHVyZSBvZiB0aGUgY29uc3RydWN0b3IuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcHJvY2VkdXJlID0gTWV0YS5kZXNlcmlhbGl6ZTtcblxuXHRcdGlmKFxuXHRcdFx0dHlwZW9mIHRoaXMuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUubmFtZSA9PT0gXCJkZXNlcmlhbGl6ZVwiXG5cdFx0KXtcblx0XHRcdHByb2NlZHVyZSA9IHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemU7XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggdGhpcy52YWx1ZU9mKCApLCBhcmd1bWVudHNbIDAgXSwgYXJndW1lbnRzWyAxIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHByb2NlZHVyZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0RGVmYXVsdCBnZW5lcmljIHNlcmlhbGl6YXRpb24gaW50ZXJwcmV0ZXIuXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c3RhdGljIGludGVycHJldGVyKCBzZWxmICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IE1ldGFcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHZhbHVlID0gc3h0eTQoIHNlbGYuc3RyaW5naWZ5KCApICkuZW5jb2RlKCApO1xuXG5cdFx0cmV0dXJuIGAkeyBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWC5yZXBsYWNlKCBcIkB0eXBlXCIsIHNlbGZbIFRZUEUgXSApIH0keyB2YWx1ZSB9YDtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIGludGVycHJldGVyIGZ1bmN0aW9uIHdpbGwgYWNjZXB0IGEgY29udGV4dCBwYXJhbWV0ZXIuXG5cblx0XHRcdEJ5IGRlZmF1bHQgdGhpcyB3aWxsIHNlcmlhbGl6ZSB0aGUgZW50aXR5IHVzaW5nIHBsYWluL3RleHQgYmFzZTY0IGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIGludGVycHJldGVyIG11c3QgcmV0dXJuIGEgc2VyaWFsaXplIGZvcm1hdCBvZiB0aGUgZGF0YSB0byBiZSBwbGFjZWQgb24gdGhlIHRhZy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHNlcmlhbGl6ZSggaW50ZXJwcmV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImludGVycHJldGVyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZGVmZXIgPSBNZXRhLmludGVycHJldGVyO1xuXG5cdFx0aWYoIHR5cGVvZiBpbnRlcnByZXRlciAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGludGVycHJldGVyID0gZGVmZXI7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBpbnRlcnByZXRlciggdGhpcyApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWcoIGRlZmVyKCB0aGlzICkgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRTdHJpY3QgdmFsdWUgZXF1YWxpdHkuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3IgZGVlcCBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aXNFcXVhbCggZW50aXR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGVudGl0eSBpbnN0YW5jZW9mIE1ldGEgKXtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eS52YWx1ZU9mKCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFdoZW4gdGhlIGRlc2VyaWFsaXphdGlvbiBmYWlscywgb3IgaWYgdGhlcmUgaXMgZXJyb3IsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzQ29ycnVwdGVkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBDT1JSVVBURUQgXSA9PT0gQ09SUlVQVEVEXG5cdFx0XHR8fCB0aGlzLmhhc0Vycm9yKCApXG5cdFx0KTtcblx0fVxuXG5cdGlzVGFnZ2VkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBUQUdHRUQgXSA9PT0gVEFHR0VEXG5cdFx0XHR8fCBUQUdfUEFUVEVSTi50ZXN0KCB0aGlzLnN0cmluZ2lmeSggKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgbm90IGEgdGFnIGZvcm1hdCB0aGVuIGl0J3MgcmF3LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0aXNSYXcoICl7XG5cdFx0cmV0dXJuICF0aGlzLmlzVGFnZ2VkKCApO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdHRoaXMucHVzaEVycm9yKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHVzaEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzWyBFUlJPUiBdLnB1c2goIGVycm9yICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXS5yZXZlcnNlKCApWyAwIF07XG5cdH1cblxuXHRoYXNFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXS5sZW5ndGggPiAwO1xuXHR9XG5cblx0dHJhbnNmZXJFcnJvciggY29udGFpbmVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb250YWluZXJcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGNvbnRhaW5lciBpbnN0YW5jZW9mIEFycmF5ICl7XG5cdFx0XHRsZXQgbGlzdCA9IHRoaXNbIEVSUk9SIF0ucmV2ZXJzZSggKTtcblx0XHRcdGxldCBpbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0d2hpbGUoIGluZGV4LS0gKSBjb250YWluZXIucHVzaCggbGlzdFsgaW5kZXggXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgY2xvbmUgb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2xvbmUoIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMuY29uc3RydWN0b3IsIHRoaXMudmFsdWVPZiggKSwgc3RhdGUgKTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIE1ldGEgaW5zdGFuY2Ugb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0bmF0aXZlKCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBNZXRhLCB0aGlzLnZhbHVlT2YoICksIHN0YXRlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXZlcnRzIHRvIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YSxcblx0XHRcdFx0cGFzc2luZyB0aGUgaW5jdXJyZWQgc3RhdGUgZnJvbSBwcmV2aW91cy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHJldmVydCggKXtcblx0XHRsZXQgc3RhdGUgPSBbIF07XG5cblx0XHRpZiggdGhpcy5pc0NvcnJ1cHRlZCggKSApe1xuXHRcdFx0c3RhdGUucHVzaCggQ09SUlVQVEVEICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaGFzRXJyb3IoICkgKXtcblx0XHRcdHRoaXMudHJhbnNmZXJFcnJvciggc3RhdGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmUoIHN0YXRlICk7XG5cdH1cblxuXHRnZXRUeXBlKCApe1xuXHRcdHJldHVybiB0aGlzWyBUWVBFIF07XG5cdH1cblxuXHRnZXROYW1lKCApe1xuXHRcdHJldHVybiB0aGlzWyBOQU1FIF07XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcbmhhcmRlbiggXCJDT1JSVVBURURcIiwgQ09SUlVQVEVELCBNZXRhICk7XG5oYXJkZW4oIFwiVEFHR0VEXCIsIFRBR0dFRCwgTWV0YSApO1xuXG5oYXJkZW4oIFwiVEFHX1BBVFRFUk5cIiwgVEFHX1BBVFRFUk4sIE1ldGEgKTtcblxuaGFyZGVuKCBcIkRBVEFfVVJMX1RBR1wiLCBEQVRBX1VSTF9UQUcsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
