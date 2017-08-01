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
						throw new Error("cannot parse data, " + data + ", " + error.stack);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJzdGFjayIsImNyZWF0ZSIsInBhcnNlciIsInBhcmFtZXRlciIsInNwbGljZSIsImZpbHRlciIsImNvbmNhdCIsImRlZmVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInB1c2hFcnJvciIsInJldmVyc2UiLCJjb250YWluZXIiLCJBcnJheSIsImxpc3QiLCJpc0NvcnJ1cHRlZCIsInRyYW5zZmVyRXJyb3IiLCJuYXRpdmUiLCJzZXJpYWxpemUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsWUFBWSxzQkFBUSxXQUFSLENBQWxCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7O0FBRUEsSUFBTUMscUJBQXFCLHFCQUEzQjtBQUNBLElBQU1DLG1CQUFtQiw0REFBekI7QUFDQSxJQUFNQyxxQkFBcUIsMEJBQTNCO0FBQ0EsSUFBTUMsK0JBQStCLGtDQUFyQztBQUNBLElBQU1DLHVCQUF1QixJQUE3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Q29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVobVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWhtL21ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRhLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlaG1cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VobS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVobS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRNZXRhIGNsYXNzIGNvbnN0cnVjdC5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInN4dHk0XCI6IFwic3h0eTRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuXG5jb25zdCBOQU1FID0gU3ltYm9sKCBcIm5hbWVcIiApO1xuY29uc3QgRU5USVRZID0gU3ltYm9sKCBcImVudGl0eVwiICk7XG5jb25zdCBUWVBFID0gU3ltYm9sKCBcInR5cGVcIiApO1xuXG5jb25zdCBFUlJPUiA9IFN5bWJvbCggXCJlcnJvclwiICk7XG5cbmNvbnN0IE9CSkVDVCA9IFN5bWJvbCggXCJvYmplY3RcIiApO1xuY29uc3QgQk9PTEVBTiA9IFN5bWJvbCggXCJib29sZWFuXCIgKTtcbmNvbnN0IFNUUklORyA9IFN5bWJvbCggXCJzdHJpbmdcIiApO1xuY29uc3QgTlVNQkVSID0gU3ltYm9sKCBcIm51bWJlclwiICk7XG5jb25zdCBWQUxVRSA9IFN5bWJvbCggXCJ2YWx1ZVwiICk7XG5cbmNvbnN0IEdBUkJBR0UgPSBTeW1ib2woIFwiZ2FyYmFnZVwiICk7XG5jb25zdCBDT1JSVVBURUQgPSBTeW1ib2woIFwiY29ycnVwdGVkXCIgKTtcbmNvbnN0IFRBR0dFRCA9IFN5bWJvbCggXCJ0YWdnZWRcIiApO1xuXG5jb25zdCBDTEFTU19OQU1FX1BBVFRFUk4gPSAvXltBLVpdW2EtekEtWjAtOV0rJC87XG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhXFw6W2Etel1bXFwtYS16MC05XStcXC8oW2Etel1bXFwtYS16MC05XSspKD86XFw7YmFzZTY0KT9cXCwvO1xuY29uc3QgRVZBTF9VU0FHRV9QQVRURVJOID0gL1xcYmV2YWxcXCguKj9cXCl8XFxiZXZhbFxcYi9nbTtcbmNvbnN0IEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4gPSAvXFxiRnVuY3Rpb25cXCguKj9cXCl8XFxiRnVuY3Rpb25cXGIvZ207XG5jb25zdCBGTE9BVF9OVU1CRVJfUEFUVEVSTiA9IC9cXC4vO1xuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKj8pXFwpJC87XG5jb25zdCBUQUdfUEFUVEVSTiA9IC9eXFxbKFthLXpBLVpdW1xcLWEtekEtWjAtOV0rKVxccytbQS1aXVthLXpBLVowLTldKyg/OlxcOiguKz8pKT9cXF0kLztcblxuY29uc3QgREFUQV9VUkxfVEFHID0gXCJkYXRhLXVybC10YWdcIjtcbmNvbnN0IERFRkFVTFRfRk9STUFUID0gREFUQV9VUkxfVEFHO1xuY29uc3QgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVggPSBcImRhdGE6dGV4dC9AdHlwZTtiYXNlNjQsXCI7XG5jb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuXG5jbGFzcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpbnN0YW5jZTpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApO1xuXHR9XG5cblx0c3RhdGljIGluc3RhbmNlT2YoIGluc3RhbmNlLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KSB8fCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJvYmplY3RcIlxuXHRcdFx0JiYgaW5zdGFuY2UgIT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludC5uYW1lXG5cdFx0KSApe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2liaWxpdHkgb2YgaW5zdGFuY2UgYmVpbmcgZ2FyYmFnZS5cblxuXHRcdFx0XHREbyBub3QgcmVtb3ZlIHRoaXMuIFRoaXMgaXMgYSBzcGVjaWFsIHByb2NlZHVyZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIGluc3RhbmNlID09PSBHQVJCQUdFICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiAoIG5ldyBibHVlcHJpbnQoIEdBUkJBR0UgKSApXG5cdFx0XHRcdC5fX2luaXRpYWxpemVfXyggaW5zdGFuY2UsIGJsdWVwcmludC5uYW1lIClcblx0XHRcdFx0Lmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSggYmx1ZXByaW50LCBlbnRpdHksIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiZW50aXR5XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IHVuZGVmaW5lZDtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDAgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdGJsdWVwcmludCA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0ZW50aXR5ID0gYXJndW1lbnRzWyAxIF07XG5cdFx0XHRzdGF0ZSA9IFsgXTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBzdGF0ZSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRzdGF0ZSA9IEFycmF5LmZyb20oIHN0YXRlICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHdlIGFyZSBnb2luZyB0byB0aHJvdyBhbiBlcnJvciBoZXJlLCBwb3NzaWJpbGl0eSBvZiBpbmZpbml0ZSByZWN1cnNpb24uXG5cblx0XHRcdFx0V2UgY2FuIHB1c2ggYW4gZXJyb3IgaW5zdGVhZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIGJsdWVwcmludCBpbnN0YW5jZW9mIHRoaXMgKSApe1xuXHRcdFx0c3RhdGUucHVzaCggbmV3IEVycm9yKCBgaW5jb21wYXRpYmxlIGJsdWVwcmludCwgJHsgYmx1ZXByaW50Lm5hbWUgfWAgKSApO1xuXG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGxldCBkYXRhID0gbmV3IGJsdWVwcmludCggZW50aXR5ICk7XG5cblx0XHRcdGlmKCBUQUdfUEFUVEVSTi50ZXN0KCBkYXRhLnN0cmluZ2lmeSggKSApICl7XG5cdFx0XHRcdHN0YXRlLnB1c2goIFRBR0dFRCApO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaW5kZXggPSBzdGF0ZS5sZW5ndGg7XG5cdFx0XHR3aGlsZSggaW5kZXgtLSApe1xuXHRcdFx0XHRsZXQgc3RhdHVzID0gc3RhdGVbIGluZGV4IF07XG5cblx0XHRcdFx0aWYoIHN0YXR1cyBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdFx0ZGF0YS5zZXRFcnJvciggc3RhdHVzICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aGFyZGVuKCBzdGF0dXMsIHN0YXR1cywgZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBPYmplY3QuZnJlZXplKCBkYXRhICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBjYW5ub3Qgd3JhcCBkYXRhLCAkeyBlcnJvci5zdGFjayB9YCApICk7XG5cblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcywgZW50aXR5LCBzdGF0ZSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRHZW5lcmljIG1ldGEgZGF0YSBkZXNlcmlhbGl6YXRpb24uXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHBhcmFtZXRlciA9IFsgYXJndW1lbnRzWyAwIF0sIHVuZGVmaW5lZCwgYXJndW1lbnRzWyAxIF0gXTtcblx0XHR9XG5cblx0XHRibHVlcHJpbnQgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgXCJuYW1lXCIgaW4gcGFyYW1ldGVyXG5cdFx0XHRcdFx0JiYgdHlwZW9mIHBhcmFtZXRlci5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHQmJiBwYXJhbWV0ZXIubmFtZSAhPSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHQmJiBDTEFTU19OQU1FX1BBVFRFUk4udGVzdCggcGFyYW1ldGVyLm5hbWUgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCB0aGlzIClbIDAgXTtcblxuXHQgXHRsZXQgZGVmZXIgPSBmdW5jdGlvbiBwYXJzZXIoIGRhdGEgKXtcblx0XHRcdGlmKCB0eXBlb2YgZGF0YSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRsZXQgdG9rZW4gPSBkYXRhLm1hdGNoKCBUQUdfUEFUVEVSTiApIHx8IFsgXTtcblx0XHRcdFx0XHRsZXQgdHlwZSA9IHRva2VuWyAxIF0gfHwgXCJ1bmRlZmluZWRcIjtcblx0XHRcdFx0XHRsZXQgdmFsdWUgPSB0b2tlblsgMiBdIHx8IEVNUFRZX1NUUklORztcblxuXHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdHZhbHVlID0gZGF0YTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0XHRJZiB0aGUgdmFsdWUgaXMgYSBkYXRhIHVybCBmb3JtYXQsIHRyeSB0byBkZWNvZGUgaXQuXG5cblx0XHRcdFx0XHRcdFx0RW5zdXJlIHRoYXQgd2UgaGF2ZSB0aGUgY29ycmVjdCB0eXBlLlxuXHRcdFx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRpZiggREFUQV9VUkxfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHR0eXBlID0gKCB2YWx1ZS5tYXRjaCggREFUQV9VUkxfUEFUVEVSTiApIHx8IFsgXSApWyAxIF0gfHwgdHlwZTtcblx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCB0eXBlICksIEVNUFRZX1NUUklORyApO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBzeHR5NCggdmFsdWUgKS5kZWNvZGUoICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRcdFx0XHRjYXNlIFwiYm9vbGVhblwiOlxuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWUudG9Mb3dlckNhc2UoICkgPT0gXCJ0cnVlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcImZhbHNlXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgYm9vbGVhbiwgJHsgdmFsdWUgfWAgKTtcblxuXHRcdFx0XHRcdFx0Y2FzZSBcImZ1bmN0aW9uXCI6XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggRVZBTF9VU0FHRV9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcGFyc2UgZnVuY3Rpb24sIGNvbnRhaW5zIGV2YWwsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIEZVTkNUSU9OX0NMQVNTX1VTQUdFX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZnVuY3Rpb24gY2xhc3MsIHBvdGVudGlhbCBzZWN1cml0eSBpc3N1ZVwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG1ldGhvZCA9ICggbmV3IEZ1bmN0aW9uKCBcInJldHVybiBcIiArIHZhbHVlICkgKSggKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmKCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCApeyB0aHJvdyBuZXcgRXJyb3IoIGBubyBvcGVyYXRpb24gZG9uZSwgJHsgdmFsdWUgfWAgKTsgfTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZnVuY3Rpb24sICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2FzZSBcIm51bWJlclwiOlxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiSW5maW5pdHlcIiApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEluZmluaXR5O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZSA9PSBcIk5hTlwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCBGTE9BVF9OVU1CRVJfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggIUZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdmFsdWUgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgbnVtYmVyLCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJvYmplY3RcIjpcblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwibnVsbFwiICl7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdFx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0XHRcdFx0XHRUaGlzIGlzIHRoZSBzcGVjaWZpY2F0aW9uIGZvciB0aGUgYmFzaWNcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWV0YSBvYmplY3Qgc3RydWN0dXJlLlxuXHRcdFx0XHRcdFx0XHRcdCovXG5cdFx0XHRcdFx0XHRcdFx0aWYoXG5cdFx0XHRcdFx0XHRcdFx0XHRcInR5cGVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBcInZhbHVlXCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwiZm9ybWF0XCIgaW4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmZvcm1hdCA9PSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiB2YWx1ZS5mb3JtYXQgPT0gREFUQV9VUkxfVEFHXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBUQUdfUEFUVEVSTi50ZXN0KCB2YWx1ZS52YWx1ZSApXG5cdFx0XHRcdFx0XHRcdFx0KXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBNZXRhLmRlc2VyaWFsaXplKCB2YWx1ZS52YWx1ZSApLnZhbHVlT2YoICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIG9iamVjdCwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjYXNlIFwic3ltYm9sXCI6XG5cdFx0XHRcdFx0XHRcdGxldCBzeW1ib2wgPSAoICggdmFsdWUubWF0Y2goIFNZTUJPTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCBFTVBUWV9TVFJJTkcgKS50cmltKCApO1xuXG5cdFx0XHRcdFx0XHRcdGlmKCBzeW1ib2wgPT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIHN5bWJvbCwgJHsgdmFsdWUgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBTeW1ib2woIHN5bWJvbCApO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0Y2FzZSBcInVuZGVmaW5lZFwiOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblxuXHRcdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgY2Fubm90IHBhcnNlIGRhdGEsICR7IGRhdGEgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9O1xuXG5cdFx0cGFyc2VyID0gcGFyYW1ldGVyLnNwbGljZSggMSApXG5cdFx0XHQuZmlsdGVyKCAoIHBhcmFtZXRlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0eXBlb2YgcGFyYW1ldGVyID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIChcblx0XHRcdFx0XHRcdCEoIFwibmFtZVwiIGluIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0XHR8fCB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgIT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0fHwgcGFyYW1ldGVyLm5hbWUgPT0gRU1QVFlfU1RSSU5HXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcImFub255bW91c1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBcInBhcnNlclwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSApXG5cdFx0XHQuY29uY2F0KCBkZWZlciApWyAwIF07XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIGJsdWVwcmludCwgcGFyc2VyKCBkYXRhICkgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBkZWZlciggZGF0YSApLCBbIENPUlJVUFRFRCwgZXJyb3IgXSApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIHRhZyBpcyBjb21wYXRpYmxlLlxuXHRcdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdE92ZXJyaWRlIGZvciBzcGVjaWZpYyBjb21wYXRpYmlsaXR5IGNoZWNraW5nLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdGF0aWMgaXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRhZ1wiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdGFnICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gVEFHX1BBVFRFUk4udGVzdCggdGFnICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpcy5fX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIGlzIGFuIGludGVybmFsIGluaXRpYWxpemF0aW9uIHByb2NlZHVyZS5cblxuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRfX2luaXRpYWxpemVfXyggZW50aXR5LCBuYW1lICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICF0aGlzLmNoZWNrKCBlbnRpdHkgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0XHR9XG5cblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBlbnRpdHk7XG5cblx0XHRuYW1lID0gbmFtZSB8fCB0eXBlLnJlcGxhY2UoIC9eLi8sICggbWF0Y2ggKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSggKSApO1xuXG5cdFx0aWYoIHR5cGVvZiBuYW1lICE9IFwic3RyaW5nXCIgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRZUEUgXSA9IHR5cGU7XG5cdFx0dGhpc1sgTkFNRSBdID0gbmFtZTtcblx0XHR0aGlzWyBFTlRJVFkgXSA9IGVudGl0eTtcblxuXHRcdHRoaXNbIEVSUk9SIF0gPSBbIF07XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEZvciBnZW5lcmljIGNoZWNraW5nIG9mIGVudGl0eSB0aGlzIGlzIGFsd2F5cyB0cnVlLFxuXHRcdFx0XHRhbmQgdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNoZWNrKCBlbnRpdHkgKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgd2lsbCBvbmx5IHN1cHBvcnQgdGhyZWUgdHlwZXM7IHN0cmluZywgbnVtYmVyLCBib29sZWFuLlxuXG5cdFx0XHRUaGVzZSB0eXBlcyBhcmUgc2VyaWFsaXphYmxlLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0RG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdFsgU3ltYm9sLnRvUHJpbWl0aXZlIF0oIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0c3dpdGNoKCB0eXBlICl7XG5cdFx0XHRjYXNlIFwic3RyaW5nXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvTnVtYmVyKCApO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b0Jvb2xlYW4oICk7XG5cdFx0fVxuXHR9XG5cblx0Lypcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cblx0Z2V0IFsgU3ltYm9sLnRvU3RyaW5nVGFnIF0oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5BTUUgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyYWxseSwgdGhpcyB3aWxsIHJldHVybiB0aGUgYmFzaWMgb2JqZWN0IG1ldGEgc3BlY2lmaWNhdGlvbi5cblxuXHRcdFx0VGhlIGZvcm1hdCBwcm9wZXJ0eSBkaWN0YXRlcyBob3cgdGhlIHZhbHVlIG11c3QgYmUgaW50ZXJwcmV0ZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRGb3Igc3BlY2lhbCB2YWx1ZXMgdGhhdCBuZWVkcyBzcGVjaWZpYyBjb252ZXJzaW9uIHRvIG9iamVjdCB0eXBlLFxuXHRcdFx0XHR0aGlzIG1ldGhvZCBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRnZXQgWyBPQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LmZyZWV6ZSgge1xuXHRcdFx0XCJ0eXBlXCI6IHRoaXNbIFRZUEUgXSxcblx0XHRcdFwibmFtZVwiOiB0aGlzWyBOQU1FIF0sXG5cdFx0XHRcInZhbHVlXCI6IHRoaXMuc2VyaWFsaXplKCApLFxuXHRcdFx0XCJmb3JtYXRcIjogREFUQV9VUkxfVEFHXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0IFsgQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0IFsgU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggdGhpcy52YWx1ZU9mKCApICk7XG5cdH1cblxuXHRnZXQgWyBOVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAZ2V0LW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUgZG8gbm90IG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1nZXQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Z2V0IFsgVkFMVUUgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgRU5USVRZIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gYSBzdHJpbmcgdGFnIGZvcm1hdCxcblxuXHRcdFx0XHRbdHlwZSBOYW1lOnZhbHVlXVxuXG5cdFx0XHRUaGUgdmFsdWUgaXMgb3B0aW9uYWwuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0YWcoIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdmFsdWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cdFx0fVxuXG5cdFx0aWYoIHZhbHVlICE9IEVNUFRZX1NUUklORyApe1xuXHRcdFx0dmFsdWUgPSBgOiR7IHZhbHVlIH1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBgWyR7IHRoaXNbIFRZUEUgXSB9ICR7IHRoaXNbIE5BTUUgXSB9OkB2YWx1ZV1gLnJlcGxhY2UoIFwiOkB2YWx1ZVwiLCB2YWx1ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb2JqZWN0IGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXG5cdFx0XHRUaGlzIHdpbGwgYmUgdXNlZCBvbiBKU09OLnN0cmluZ2lmeSBtZXRob2QuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHR0b0pTT04oICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb2JqZWN0IGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0dG9PYmplY3QoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE9CSkVDVCBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgYm9vbGVhbiBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9Cb29sZWFuKCApe1xuXHRcdHJldHVybiB0aGlzWyBCT09MRUFOIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiB0aGlzWyBTVFJJTkcgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIG51bWVyaWNhbCBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9OdW1iZXIoICl7XG5cdFx0cmV0dXJuIHRoaXNbIE5VTUJFUiBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgb3JpZ2luYWwgdmFsdWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRBcyBtdWNoIGFzIHBvc3NpYmxlLCBkbyBub3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFZBTFVFIF07XG5cdH1cblxuXHR0eXBlT2YoIHR5cGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggdHlwZW9mIHR5cGUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlT2YoICkgPT0gdHlwZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0U29tZSBjYXNlcyB0aGF0IGluc3RhbmNlT2YgbmVlZHMgdG8gYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aW5zdGFuY2VPZiggYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGVudGl0eSA9IHRoaXMudmFsdWVPZiggKTtcblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcyBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCBlbnRpdHkgaW5zdGFuY2VvZiBibHVlcHJpbnRcblx0XHRcdFx0fHwgdHlwZW9mIGJsdWVwcmludC5uYW1lID09IFwic3RyaW5nXCIgJiYgdGhpcy5pbnN0YW5jZU9mKCBibHVlcHJpbnQubmFtZSApXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGlmKCB0aGlzLnR5cGVPZiggYmx1ZXByaW50LnRvTG93ZXJDYXNlKCApICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBlbnRpdHkgPT09IG51bGwgfHwgdHlwZW9mIGVudGl0eSA9PSBcInVuZGVmaW5lZFwiICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiICYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnQgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGRve1xuXHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHR0eXBlb2YgZW50aXR5LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHlvdSByZW1vdmVkIHRoZSBjb25kaXRpb24sIHRoaXMgbWF5IGNhdXNlIHVud2FudGVkIGJlaGF2aW9yLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IGJsdWVwcmludCApe1xuXHRcdFx0XHRsZXQgZW50aXR5ID0gdGhpcztcblxuXHRcdFx0XHRkb3tcblx0XHRcdFx0XHRpZiggKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpIHx8IChcblx0XHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQmJiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdFx0KSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9d2hpbGUoIGVudGl0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZW50aXR5ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZ2VuZXJpYyBzdHJpbmdpZnkgZnVuY3Rpb24sXG5cdFx0XHRcdGZvciBjb21wbGV4IGVudGl0eSB5b3UgbmVlZCB0byBvdmVycmlkZSB0aGlzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRzdHJpbmdpZnkoICl7XG5cdFx0dHJ5e1xuXHRcdFx0aWYoIHRoaXNbIFRZUEUgXSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggdGhpcy52YWx1ZU9mKCApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBFTVBUWV9TVFJJTkcgKyB0aGlzLnZhbHVlT2YoICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkudG9TdHJpbmcoICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIGNhbGwgdGhlIHN0YXRpYyBkZXNlcmlhbGl6YXRpb24gcHJvY2VkdXJlIG9mIHRoZSBjb25zdHJ1Y3Rvci5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwcm9jZWR1cmUgPSBNZXRhLmRlc2VyaWFsaXplO1xuXG5cdFx0aWYoXG5cdFx0XHR0eXBlb2YgdGhpcy5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdCYmIHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZS5uYW1lID09PSBcImRlc2VyaWFsaXplXCJcblx0XHQpe1xuXHRcdFx0cHJvY2VkdXJlID0gdGhpcy5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZTtcblx0XHR9XG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAyICl7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCB0aGlzLnZhbHVlT2YoICksIGFyZ3VtZW50c1sgMCBdLCBhcmd1bWVudHNbIDEgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gcHJvY2VkdXJlKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApO1xuXHRcdH1cblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgYSB0YWcgZm9ybWF0IHdpdGggdmFsdWUuXG5cdFx0XHRUaGUgdmFsdWUgbXVzdCBiZSBhIGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBmdW5jdGlvbiB3aWxsIGFjY2VwdCBhIGNvbnRleHQgcGFyYW1ldGVyLlxuXG5cdFx0XHRCeSBkZWZhdWx0IHRoaXMgd2lsbCBzZXJpYWxpemUgdGhlIGVudGl0eSB1c2luZyBwbGFpbi90ZXh0IGJhc2U2NCBkYXRhIFVSTCBmb3JtYXQuXG5cblx0XHRcdFRoZSBwYXJzZXIgbXVzdCByZXR1cm4gYSBzZXJpYWxpemUgZm9ybWF0IG9mIHRoZSBkYXRhIHRvIGJlIHBsYWNlZCBvbiB0aGUgdGFnLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IGRlZmVyID0gZnVuY3Rpb24gcGFyc2VyKCBzZWxmICl7XG5cdFx0XHRsZXQgdmFsdWUgPSBzeHR5NCggc2VsZi5zdHJpbmdpZnkoICkgKS5lbmNvZGUoICk7XG5cblx0XHRcdHJldHVybiBgJHsgREVGQVVMVF9EQVRBX1VSTF9QUkVGSVgucmVwbGFjZSggXCJAdHlwZVwiLCBzZWxmWyBUWVBFIF0gKSB9JHsgdmFsdWUgfWA7XG5cdFx0fTtcblxuXHRcdGlmKCB0eXBlb2YgcGFyc2VyICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0cGFyc2VyID0gZGVmZXI7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBwYXJzZXIoIHRoaXMgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIHRoaXMudGFnKCBkZWZlciggdGhpcyApICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0U3RyaWN0IHZhbHVlIGVxdWFsaXR5LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIGRlZXAgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlzRXF1YWwoIGVudGl0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBlbnRpdHkgaW5zdGFuY2VvZiBNZXRhICl7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHkudmFsdWVPZiggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWx1ZU9mKCApID09PSBlbnRpdHk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRXaGVuIHRoZSBkZXNlcmlhbGl6YXRpb24gZmFpbHMsIG9yIGlmIHRoZXJlIGlzIGVycm9yLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRpc0NvcnJ1cHRlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgQ09SUlVQVEVEIF0gPT09IENPUlJVUFRFRFxuXHRcdFx0fHwgdGhpcy5oYXNFcnJvciggKVxuXHRcdCk7XG5cdH1cblxuXHRpc1RhZ2dlZCggKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpc1sgVEFHR0VEIF0gPT09IFRBR0dFRFxuXHRcdFx0fHwgVEFHX1BBVFRFUk4udGVzdCggdGhpcy5zdHJpbmdpZnkoICkgKVxuXHRcdCk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRJZiB0aGUgZW50aXR5IGlzIG5vdCBhIHRhZyBmb3JtYXQgdGhlbiBpdCdzIHJhdy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzUmF3KCApe1xuXHRcdHJldHVybiAhdGhpcy5pc1RhZ2dlZCggKTtcblx0fVxuXG5cdHNldEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzLnB1c2hFcnJvciggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHB1c2hFcnJvciggZXJyb3IgKXtcblx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0dGhpc1sgRVJST1IgXS5wdXNoKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0ucmV2ZXJzZSggKVsgMCBdO1xuXHR9XG5cblx0aGFzRXJyb3IoICl7XG5cdFx0cmV0dXJuIHRoaXNbIEVSUk9SIF0ubGVuZ3RoID4gMDtcblx0fVxuXG5cdHRyYW5zZmVyRXJyb3IoIGNvbnRhaW5lciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY29udGFpbmVyXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBjb250YWluZXIgaW5zdGFuY2VvZiBBcnJheSApe1xuXHRcdFx0bGV0IGxpc3QgPSB0aGlzWyBFUlJPUiBdLnJldmVyc2UoICk7XG5cdFx0XHRsZXQgaW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdHdoaWxlKCBpbmRleC0tICkgY29udGFpbmVyLnB1c2goIGxpc3RbIGluZGV4IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIGNsb25lIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGNsb25lKCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLnZhbHVlT2YoICksIHN0YXRlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdG5hdGl2ZSggc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInN0YXRlXCI6IEFycmF5XG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggTWV0YSwgdGhpcy52YWx1ZU9mKCApLCBzdGF0ZSApO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV2ZXJ0cyB0byB0aGUgTWV0YSBpbnN0YW5jZSBvZiB0aGlzIGRhdGEsXG5cdFx0XHRcdHBhc3NpbmcgdGhlIGluY3VycmVkIHN0YXRlIGZyb20gcHJldmlvdXMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRyZXZlcnQoICl7XG5cdFx0bGV0IHN0YXRlID0gWyBdO1xuXG5cdFx0aWYoIHRoaXMuaXNDb3JydXB0ZWQoICkgKXtcblx0XHRcdHN0YXRlLnB1c2goIENPUlJVUFRFRCApO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmhhc0Vycm9yKCApICl7XG5cdFx0XHR0aGlzLnRyYW5zZmVyRXJyb3IoIHN0YXRlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubmF0aXZlKCBzdGF0ZSApO1xuXHR9XG5cblx0Z2V0VHlwZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgVFlQRSBdO1xuXHR9XG5cblx0Z2V0TmFtZSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG59XG5cbmhhcmRlbiggXCJOQU1FXCIsIE5BTUUsIE1ldGEgKTtcbmhhcmRlbiggXCJFTlRJVFlcIiwgRU5USVRZLCBNZXRhICk7XG5oYXJkZW4oIFwiVFlQRVwiLCBUWVBFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJPQkpFQ1RcIiwgT0JKRUNULCBNZXRhICk7XG5oYXJkZW4oIFwiQk9PTEVBTlwiLCBCT09MRUFOLCBNZXRhICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFNUUklORywgTWV0YSApO1xuaGFyZGVuKCBcIk5VTUJFUlwiLCBOVU1CRVIsIE1ldGEgKTtcbmhhcmRlbiggXCJWQUxVRVwiLCBWQUxVRSwgTWV0YSApO1xuXG5oYXJkZW4oIFwiR0FSQkFHRVwiLCBHQVJCQUdFLCBNZXRhICk7XG5oYXJkZW4oIFwiQ09SUlVQVEVEXCIsIENPUlJVUFRFRCwgTWV0YSApO1xuaGFyZGVuKCBcIlRBR0dFRFwiLCBUQUdHRUQsIE1ldGEgKTtcblxuaGFyZGVuKCBcIlRBR19QQVRURVJOXCIsIFRBR19QQVRURVJOLCBNZXRhICk7XG5cbmhhcmRlbiggXCJEQVRBX1VSTF9UQUdcIiwgREFUQV9VUkxfVEFHLCBNZXRhICk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YTtcbiJdfQ==
//# sourceMappingURL=meta.support.js.map
