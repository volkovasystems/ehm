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
			return this[ERROR].length > 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwic3h0eTQiLCJOQU1FIiwiRU5USVRZIiwiVFlQRSIsIkVSUk9SIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIlZBTFVFIiwiR0FSQkFHRSIsIkNPUlJVUFRFRCIsIlRBR0dFRCIsIkNMQVNTX05BTUVfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJFVkFMX1VTQUdFX1BBVFRFUk4iLCJGVU5DVElPTl9DTEFTU19VU0FHRV9QQVRURVJOIiwiRkxPQVRfTlVNQkVSX1BBVFRFUk4iLCJTWU1CT0xfUEFUVEVSTiIsIlRBR19QQVRURVJOIiwiREFUQV9VUkxfVEFHIiwiREVGQVVMVF9GT1JNQVQiLCJERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCIsIkVNUFRZX1NUUklORyIsIk1ldGEiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJibHVlcHJpbnQiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJfX2luaXRpYWxpemVfXyIsImVycm9yIiwiZW50aXR5Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiRXJyb3IiLCJkYXRhIiwidGVzdCIsInN0cmluZ2lmeSIsImluZGV4Iiwic3RhdHVzIiwic2V0RXJyb3IiLCJzdGFjayIsImNyZWF0ZSIsInBhcnNlciIsInBhcmFtZXRlciIsInNwbGljZSIsImZpbHRlciIsImNvbmNhdCIsImRlZmVyIiwidG9rZW4iLCJtYXRjaCIsInR5cGUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCJ0b0xvd2VyQ2FzZSIsIm1ldGhvZCIsIkZ1bmN0aW9uIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtYXQiLCJkZXNlcmlhbGl6ZSIsInZhbHVlT2YiLCJzeW1ib2wiLCJ0cmltIiwidGFnIiwiY2hlY2siLCJ0b1VwcGVyQ2FzZSIsInRvU3RyaW5nIiwidG9OdW1iZXIiLCJ0b0Jvb2xlYW4iLCJ0eXBlT2YiLCJwcm9jZWR1cmUiLCJzZWxmIiwiZW5jb2RlIiwiaGFzRXJyb3IiLCJpc1RhZ2dlZCIsInB1c2hFcnJvciIsInJldmVyc2UiLCJjb250YWluZXIiLCJBcnJheSIsImxpc3QiLCJpc0NvcnJ1cHRlZCIsInRyYW5zZmVyRXJyb3IiLCJuYXRpdmUiLCJzZXJpYWxpemUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxPQUFPLHNCQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVMsc0JBQVEsUUFBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsWUFBWSxzQkFBUSxXQUFSLENBQWxCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7O0FBRUEsSUFBTUMscUJBQXFCLHFCQUEzQjtBQUNBLElBQU1DLG1CQUFtQiw0REFBekI7QUFDQSxJQUFNQyxxQkFBcUIsMEJBQTNCO0FBQ0EsSUFBTUMsK0JBQStCLGtDQUFyQztBQUNBLElBQU1DLHVCQUF1QixJQUE3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QUFPLElBQVAsQ0FDQSxDLFdBRUtDLE0sc0JBQVcsQ0FDaEIsT0FBT3VGLE9BQU9DLFNBQVAsQ0FBaUJuQixRQUFqQixDQUEwQm9CLElBQTFCLENBQWdDLEtBQUsxQixPQUFMLEVBQWhDLENBQVAsQ0FDQSxDLFdBRUs5RCxNLHNCQUFXLENBQ2hCLE9BQU9zRCxRQUFQLENBQ0EsQyxDQUVEOzs7OztpZEFPTXJELEssc0JBQVUsQ0FDZixPQUFPLEtBQU1QLE1BQU4sQ0FBUCxDQUNBLEMscUJBNGJGSixPQUFRLE1BQVIsRUFBZ0JHLElBQWhCLEVBQXNCdUIsSUFBdEIsRUFDQTFCLE9BQVEsUUFBUixFQUFrQkksTUFBbEIsRUFBMEJzQixJQUExQixFQUNBMUIsT0FBUSxNQUFSLEVBQWdCSyxJQUFoQixFQUFzQnFCLElBQXRCLEVBRUExQixPQUFRLFFBQVIsRUFBa0JPLE1BQWxCLEVBQTBCbUIsSUFBMUIsRUFDQTFCLE9BQVEsU0FBUixFQUFtQlEsT0FBbkIsRUFBNEJrQixJQUE1QixFQUNBMUIsT0FBUSxRQUFSLEVBQWtCUyxNQUFsQixFQUEwQmlCLElBQTFCLEVBQ0ExQixPQUFRLFFBQVIsRUFBa0JVLE1BQWxCLEVBQTBCZ0IsSUFBMUIsRUFDQTFCLE9BQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JlLElBQXhCLEVBRUExQixPQUFRLFNBQVIsRUFBbUJZLE9BQW5CLEVBQTRCYyxJQUE1QixFQUNBMUIsT0FBUSxXQUFSLEVBQXFCYSxTQUFyQixFQUFnQ2EsSUFBaEM7QUFDQTFCLE9BQVEsUUFBUixFQUFrQmMsTUFBbEIsRUFBMEJZLElBQTFCOztBQUVBMUIsT0FBUSxhQUFSLEVBQXVCcUIsV0FBdkIsRUFBb0NLLElBQXBDOztBQUVBMUIsT0FBUSxjQUFSLEVBQXdCc0IsWUFBeEIsRUFBc0NJLElBQXRDOztBQUVBeUUsT0FBT0MsT0FBUCxHQUFpQjFFLElBQWpCIiwiZmlsZSI6Im1ldGEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWhtXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlaG0vbWV0YS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm1ldGEubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVobVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWhtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWhtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1ldGEgY2xhc3MgY29uc3RydWN0LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHN4dHk0ID0gcmVxdWlyZSggXCJzeHR5NFwiICk7XG5cbmNvbnN0IE5BTUUgPSBTeW1ib2woIFwibmFtZVwiICk7XG5jb25zdCBFTlRJVFkgPSBTeW1ib2woIFwiZW50aXR5XCIgKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woIFwidHlwZVwiICk7XG5cbmNvbnN0IEVSUk9SID0gU3ltYm9sKCBcImVycm9yXCIgKTtcblxuY29uc3QgT0JKRUNUID0gU3ltYm9sKCBcIm9iamVjdFwiICk7XG5jb25zdCBCT09MRUFOID0gU3ltYm9sKCBcImJvb2xlYW5cIiApO1xuY29uc3QgU1RSSU5HID0gU3ltYm9sKCBcInN0cmluZ1wiICk7XG5jb25zdCBOVU1CRVIgPSBTeW1ib2woIFwibnVtYmVyXCIgKTtcbmNvbnN0IFZBTFVFID0gU3ltYm9sKCBcInZhbHVlXCIgKTtcblxuY29uc3QgR0FSQkFHRSA9IFN5bWJvbCggXCJnYXJiYWdlXCIgKTtcbmNvbnN0IENPUlJVUFRFRCA9IFN5bWJvbCggXCJjb3JydXB0ZWRcIiApO1xuY29uc3QgVEFHR0VEID0gU3ltYm9sKCBcInRhZ2dlZFwiICk7XG5cbmNvbnN0IENMQVNTX05BTUVfUEFUVEVSTiA9IC9eW0EtWl1bYS16QS1aMC05XSskLztcbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGFcXDpbYS16XVtcXC1hLXowLTldK1xcLyhbYS16XVtcXC1hLXowLTldKykoPzpcXDtiYXNlNjQpP1xcLC87XG5jb25zdCBFVkFMX1VTQUdFX1BBVFRFUk4gPSAvXFxiZXZhbFxcKC4qP1xcKXxcXGJldmFsXFxiL2dtO1xuY29uc3QgRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTiA9IC9cXGJGdW5jdGlvblxcKC4qP1xcKXxcXGJGdW5jdGlvblxcYi9nbTtcbmNvbnN0IEZMT0FUX05VTUJFUl9QQVRURVJOID0gL1xcLi87XG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4qPylcXCkkLztcbmNvbnN0IFRBR19QQVRURVJOID0gL15cXFsoW2EtekEtWl1bXFwtYS16QS1aMC05XSspXFxzK1tBLVpdW2EtekEtWjAtOV0rKD86XFw6KC4rPykpP1xcXSQvO1xuXG5jb25zdCBEQVRBX1VSTF9UQUcgPSBcImRhdGEtdXJsLXRhZ1wiO1xuY29uc3QgREVGQVVMVF9GT1JNQVQgPSBEQVRBX1VSTF9UQUc7XG5jb25zdCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWCA9IFwiZGF0YTp0ZXh0L0B0eXBlO2Jhc2U2NCxcIjtcbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5cbmNsYXNzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImluc3RhbmNlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzICk7XG5cdH1cblxuXHRzdGF0aWMgaW5zdGFuY2VPZiggaW5zdGFuY2UsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaW5zdGFuY2U6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAoXG5cdFx0XHR0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpIHx8IChcblx0XHRcdHR5cGVvZiBpbnN0YW5jZSA9PSBcIm9iamVjdFwiXG5cdFx0XHQmJiBpbnN0YW5jZSAhPSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgYmx1ZXByaW50ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWVcblx0XHQpICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSBvZiBpbnN0YW5jZSBiZWluZyBnYXJiYWdlLlxuXG5cdFx0XHRcdERvIG5vdCByZW1vdmUgdGhpcy4gVGhpcyBpcyBhIHNwZWNpYWwgcHJvY2VkdXJlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggaW5zdGFuY2UgPT09IEdBUkJBR0UgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuICggbmV3IGJsdWVwcmludCggR0FSQkFHRSApIClcblx0XHRcdFx0Ll9faW5pdGlhbGl6ZV9fKCBpbnN0YW5jZSwgYmx1ZXByaW50Lm5hbWUgKVxuXHRcdFx0XHQuaW5zdGFuY2VPZiggYmx1ZXByaW50Lm5hbWUgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKCBibHVlcHJpbnQsIGVudGl0eSwgc3RhdGUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJlbnRpdHlcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0XHRibHVlcHJpbnQgPSB0aGlzO1xuXHRcdFx0ZW50aXR5ID0gdW5kZWZpbmVkO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMSApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHRcdGVudGl0eSA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gYXJndW1lbnRzWyAwIF07XG5cdFx0XHRlbnRpdHkgPSBhcmd1bWVudHNbIDEgXTtcblx0XHRcdHN0YXRlID0gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgYmx1ZXByaW50ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdFx0Ymx1ZXByaW50ID0gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlID09IFwib2JqZWN0XCIgKXtcblx0XHRcdHN0YXRlID0gQXJyYXkuZnJvbSggc3RhdGUgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0c3RhdGUgPSBbIF07XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgd2UgYXJlIGdvaW5nIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIHBvc3NpYmlsaXR5IG9mIGluZmluaXRlIHJlY3Vyc2lvbi5cblxuXHRcdFx0XHRXZSBjYW4gcHVzaCBhbiBlcnJvciBpbnN0ZWFkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggYmx1ZXByaW50IGluc3RhbmNlb2YgdGhpcyApICl7XG5cdFx0XHRzdGF0ZS5wdXNoKCBuZXcgRXJyb3IoIGBpbmNvbXBhdGlibGUgYmx1ZXByaW50LCAkeyBibHVlcHJpbnQubmFtZSB9YCApICk7XG5cblx0XHRcdGJsdWVwcmludCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0bGV0IGRhdGEgPSBuZXcgYmx1ZXByaW50KCBlbnRpdHkgKTtcblxuXHRcdFx0aWYoIFRBR19QQVRURVJOLnRlc3QoIGRhdGEuc3RyaW5naWZ5KCApICkgKXtcblx0XHRcdFx0c3RhdGUucHVzaCggVEFHR0VEICk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpbmRleCA9IHN0YXRlLmxlbmd0aDtcblx0XHRcdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0XHRcdGxldCBzdGF0dXMgPSBzdGF0ZVsgaW5kZXggXTtcblxuXHRcdFx0XHRpZiggc3RhdHVzIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkYXRhLnNldEVycm9yKCBzdGF0dXMgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRoYXJkZW4oIHN0YXR1cywgc3RhdHVzLCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE9iamVjdC5mcmVlemUoIGRhdGEgKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHN0YXRlLnB1c2goIG5ldyBFcnJvciggYGNhbm5vdCB3cmFwIGRhdGEsICR7IGVycm9yLnN0YWNrIH1gICkgKTtcblxuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLCBlbnRpdHksIHN0YXRlICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEdlbmVyaWMgbWV0YSBkYXRhIGRlc2VyaWFsaXphdGlvbi5cblx0XHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMiApe1xuXHRcdFx0cGFyYW1ldGVyID0gWyBhcmd1bWVudHNbIDAgXSwgdW5kZWZpbmVkLCBhcmd1bWVudHNbIDEgXSBdO1xuXHRcdH1cblxuXHRcdGJsdWVwcmludCA9IHBhcmFtZXRlci5zcGxpY2UoIDEgKVxuXHRcdFx0LmZpbHRlciggKCBwYXJhbWV0ZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0dHlwZW9mIHBhcmFtZXRlciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBcIm5hbWVcIiBpbiBwYXJhbWV0ZXJcblx0XHRcdFx0XHQmJiB0eXBlb2YgcGFyYW1ldGVyLm5hbWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdCYmIHBhcmFtZXRlci5uYW1lICE9IEVNUFRZX1NUUklOR1xuXHRcdFx0XHRcdCYmIENMQVNTX05BTUVfUEFUVEVSTi50ZXN0KCBwYXJhbWV0ZXIubmFtZSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIHRoaXMgKVsgMCBdO1xuXG5cdCBcdGxldCBkZWZlciA9IGZ1bmN0aW9uIHBhcnNlciggZGF0YSApe1xuXHRcdFx0aWYoIHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgKXtcblx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdGxldCB0b2tlbiA9IGRhdGEubWF0Y2goIFRBR19QQVRURVJOICkgfHwgWyBdO1xuXHRcdFx0XHRcdGxldCB0eXBlID0gdG9rZW5bIDEgXSB8fCBcInVuZGVmaW5lZFwiO1xuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IHRva2VuWyAyIF0gfHwgRU1QVFlfU1RSSU5HO1xuXG5cdFx0XHRcdFx0aWYoIHZhbHVlID09IEVNUFRZX1NUUklORyApe1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBkYXRhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRcdElmIHRoZSB2YWx1ZSBpcyBhIGRhdGEgdXJsIGZvcm1hdCwgdHJ5IHRvIGRlY29kZSBpdC5cblxuXHRcdFx0XHRcdFx0XHRFbnN1cmUgdGhhdCB3ZSBoYXZlIHRoZSBjb3JyZWN0IHR5cGUuXG5cdFx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0XHQqL1xuXHRcdFx0XHRcdGlmKCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdHR5cGUgPSAoIHZhbHVlLm1hdGNoKCBEQVRBX1VSTF9QQVRURVJOICkgfHwgWyBdIClbIDEgXSB8fCB0eXBlO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWC5yZXBsYWNlKCBcIkB0eXBlXCIsIHR5cGUgKSwgRU1QVFlfU1RSSU5HICk7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHN4dHk0KCB2YWx1ZSApLmRlY29kZSggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdFx0XHRcdGNhc2UgXCJib29sZWFuXCI6XG5cdFx0XHRcdFx0XHRcdGlmKCB2YWx1ZS50b0xvd2VyQ2FzZSggKSA9PSBcInRydWVcIiApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlLnRvTG93ZXJDYXNlKCApID09IFwiZmFsc2VcIiApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBib29sZWFuLCAkeyB2YWx1ZSB9YCApO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRcdFx0dHJ5e1xuXHRcdFx0XHRcdFx0XHRcdGlmKCBFVkFMX1VTQUdFX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgY29udGFpbnMgZXZhbCwgcG90ZW50aWFsIHNlY3VyaXR5IGlzc3VlXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiggRlVOQ1RJT05fQ0xBU1NfVVNBR0VfUEFUVEVSTi50ZXN0KCB2YWx1ZSApICl7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHBhcnNlIGZ1bmN0aW9uLCBjb250YWlucyBmdW5jdGlvbiBjbGFzcywgcG90ZW50aWFsIHNlY3VyaXR5IGlzc3VlXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRsZXQgbWV0aG9kID0gKCBuZXcgRnVuY3Rpb24oIFwicmV0dXJuIFwiICsgdmFsdWUgKSApKCApO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHR5cGVvZiBtZXRob2QgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oICl7IHRocm93IG5ldyBFcnJvciggYG5vIG9wZXJhdGlvbiBkb25lLCAkeyB2YWx1ZSB9YCApOyB9O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBtZXRob2Q7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBmdW5jdGlvbiwgJHsgdmFsdWUgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjYXNlIFwibnVtYmVyXCI6XG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJJbmZpbml0eVwiICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gSW5maW5pdHk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIHZhbHVlID09IFwiTmFOXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYoIEZMT0FUX05VTUJFUl9QQVRURVJOLnRlc3QoIHZhbHVlICkgKXtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmKCAhRkxPQVRfTlVNQkVSX1BBVFRFUk4udGVzdCggdmFsdWUgKSApe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB2YWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBudW1iZXIsICR7IHZhbHVlIH1gICk7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCBwYXJzZSBudW1iZXIsICR7IHZhbHVlIH0sICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2FzZSBcIm9iamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRpZiggdmFsdWUgPT0gXCJudWxsXCIgKXtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRyeXtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cblx0XHRcdFx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdFx0XHRcdFRoaXMgaXMgdGhlIHNwZWNpZmljYXRpb24gZm9yIHRoZSBiYXNpY1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZXRhIG9iamVjdCBzdHJ1Y3R1cmUuXG5cdFx0XHRcdFx0XHRcdFx0Ki9cblx0XHRcdFx0XHRcdFx0XHRpZihcblx0XHRcdFx0XHRcdFx0XHRcdFwidHlwZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwibmFtZVwiIGluIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFwidmFsdWVcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmFsdWUgPT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0JiYgXCJmb3JtYXRcIiBpbiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuZm9ybWF0ID09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdCYmIHZhbHVlLmZvcm1hdCA9PSBEQVRBX1VSTF9UQUdcblx0XHRcdFx0XHRcdFx0XHRcdCYmIFRBR19QQVRURVJOLnRlc3QoIHZhbHVlLnZhbHVlIClcblx0XHRcdFx0XHRcdFx0XHQpe1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIE1ldGEuZGVzZXJpYWxpemUoIHZhbHVlLnZhbHVlICkudmFsdWVPZiggKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2Ugb2JqZWN0LCAkeyB2YWx1ZSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJzeW1ib2xcIjpcblx0XHRcdFx0XHRcdFx0bGV0IHN5bWJvbCA9ICggKCB2YWx1ZS5tYXRjaCggU1lNQk9MX1BBVFRFUk4gKSB8fCBbIF0gKVsgMSBdIHx8IEVNUFRZX1NUUklORyApLnRyaW0oICk7XG5cblx0XHRcdFx0XHRcdFx0aWYoIHN5bWJvbCA9PSBFTVBUWV9TVFJJTkcgKXtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2Ugc3ltYm9sLCAkeyB2YWx1ZSB9YCApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIFN5bWJvbCggc3ltYm9sICk7XG5cblx0XHRcdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXG5cdFx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBjYW5ub3QgcGFyc2UgZGF0YSwgJHsgZGF0YSB9LCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH07XG5cblx0XHRwYXJzZXIgPSBwYXJhbWV0ZXIuc3BsaWNlKCAxIClcblx0XHRcdC5maWx0ZXIoICggcGFyYW1ldGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdHR5cGVvZiBwYXJhbWV0ZXIgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgKFxuXHRcdFx0XHRcdFx0ISggXCJuYW1lXCIgaW4gcGFyYW1ldGVyIClcblx0XHRcdFx0XHRcdHx8IHR5cGVvZiBwYXJhbWV0ZXIubmFtZSAhPSBcInN0cmluZ1wiXG5cdFx0XHRcdFx0XHR8fCBwYXJhbWV0ZXIubmFtZSA9PSBFTVBUWV9TVFJJTkdcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHRcdHx8IHBhcmFtZXRlci5uYW1lID09IFwicGFyc2VyXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IClcblx0XHRcdC5jb25jYXQoIGRlZmVyIClbIDAgXTtcblxuXHRcdHRyeXtcblx0XHRcdHJldHVybiBNZXRhLmNyZWF0ZSggYmx1ZXByaW50LCBwYXJzZXIoIGRhdGEgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBibHVlcHJpbnQsIGRlZmVyKCBkYXRhICksIFsgQ09SUlVQVEVELCBlcnJvciBdICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdENoZWNrcyBpZiB0aGUgdGFnIGlzIGNvbXBhdGlibGUuXG5cdFx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0T3ZlcnJpZGUgZm9yIHNwZWNpZmljIGNvbXBhdGliaWxpdHkgY2hlY2tpbmcuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0YXRpYyBpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGFnXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB0YWcgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBUQUdfUEFUVEVSTi50ZXN0KCB0YWcgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR0aGlzLl9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRoaXMgaXMgYW4gaW50ZXJuYWwgaW5pdGlhbGl6YXRpb24gcHJvY2VkdXJlLlxuXG5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdF9faW5pdGlhbGl6ZV9fKCBlbnRpdHksIG5hbWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggIXRoaXMuY2hlY2soIGVudGl0eSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHRcdH1cblxuXHRcdGxldCB0eXBlID0gdHlwZW9mIGVudGl0eTtcblxuXHRcdG5hbWUgPSBuYW1lIHx8IHR5cGUucmVwbGFjZSggL14uLywgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XG5cblx0XHRpZiggdHlwZW9mIG5hbWUgIT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgVFlQRSBdID0gdHlwZTtcblx0XHR0aGlzWyBOQU1FIF0gPSBuYW1lO1xuXHRcdHRoaXNbIEVOVElUWSBdID0gZW50aXR5O1xuXG5cdFx0dGhpc1sgRVJST1IgXSA9IFsgXTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Rm9yIGdlbmVyaWMgY2hlY2tpbmcgb2YgZW50aXR5IHRoaXMgaXMgYWx3YXlzIHRydWUsXG5cdFx0XHRcdGFuZCB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2hlY2soIGVudGl0eSApe1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VGhpcyB3aWxsIG9ubHkgc3VwcG9ydCB0aHJlZSB0eXBlczsgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4uXG5cblx0XHRcdFRoZXNlIHR5cGVzIGFyZSBzZXJpYWxpemFibGUuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHREbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0WyBTeW1ib2wudG9QcmltaXRpdmUgXSggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRzd2l0Y2goIHR5cGUgKXtcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoICk7XG5cblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9OdW1iZXIoICk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvQm9vbGVhbiggKTtcblx0XHR9XG5cdH1cblxuXHQvKlxuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgYmUgb3ZlcnJpZGRlbi5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblxuXHRnZXQgWyBTeW1ib2wudG9TdHJpbmdUYWcgXSggKXtcblx0XHRyZXR1cm4gdGhpc1sgTkFNRSBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0R2VuZXJhbGx5LCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBiYXNpYyBvYmplY3QgbWV0YSBzcGVjaWZpY2F0aW9uLlxuXG5cdFx0XHRUaGUgZm9ybWF0IHByb3BlcnR5IGRpY3RhdGVzIGhvdyB0aGUgdmFsdWUgbXVzdCBiZSBpbnRlcnByZXRlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEZvciBzcGVjaWFsIHZhbHVlcyB0aGF0IG5lZWRzIHNwZWNpZmljIGNvbnZlcnNpb24gdG8gb2JqZWN0IHR5cGUsXG5cdFx0XHRcdHRoaXMgbWV0aG9kIG5lZWRzIHRvIGJlIG92ZXJyaWRkZW4uXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGdldCBbIE9CSkVDVCBdKCApe1xuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKCB7XG5cdFx0XHRcInR5cGVcIjogdGhpc1sgVFlQRSBdLFxuXHRcdFx0XCJuYW1lXCI6IHRoaXNbIE5BTUUgXSxcblx0XHRcdFwidmFsdWVcIjogdGhpcy5zZXJpYWxpemUoICksXG5cdFx0XHRcImZvcm1hdFwiOiBEQVRBX1VSTF9UQUdcblx0XHR9ICk7XG5cdH1cblxuXHRnZXQgWyBCT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRnZXQgWyBTVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCB0aGlzLnZhbHVlT2YoICkgKTtcblx0fVxuXG5cdGdldCBbIE5VTUJFUiBdKCApe1xuXHRcdHJldHVybiBJbmZpbml0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBnZXQtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSBkbyBub3Qgb3ZlcnJpZGUgdGhpcy5cblx0XHRAZW5kLWdldC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRnZXQgWyBWQUxVRSBdKCApe1xuXHRcdHJldHVybiB0aGlzWyBFTlRJVFkgXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiBhIHN0cmluZyB0YWcgZm9ybWF0LFxuXG5cdFx0XHRcdFt0eXBlIE5hbWU6dmFsdWVdXG5cblx0XHRcdFRoZSB2YWx1ZSBpcyBvcHRpb25hbC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRhZyggdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiICl7XG5cdFx0XHR2YWx1ZSA9IEVNUFRZX1NUUklORztcblx0XHR9XG5cblx0XHRpZiggdmFsdWUgIT0gRU1QVFlfU1RSSU5HICl7XG5cdFx0XHR2YWx1ZSA9IGA6JHsgdmFsdWUgfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBbJHsgdGhpc1sgVFlQRSBdIH0gJHsgdGhpc1sgTkFNRSBdIH06QHZhbHVlXWAucmVwbGFjZSggXCI6QHZhbHVlXCIsIHZhbHVlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvYmplY3QgY29udmVyc2lvbiBvZiB0aGlzIGRhdGEuXG5cblx0XHRcdFRoaXMgd2lsbCBiZSB1c2VkIG9uIEpTT04uc3RyaW5naWZ5IG1ldGhvZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHRvSlNPTiggKXtcblx0XHRyZXR1cm4gdGhpc1sgT0JKRUNUIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBib29sZWFuIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b0Jvb2xlYW4oICl7XG5cdFx0cmV0dXJuIHRoaXNbIEJPT0xFQU4gXTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIHRoaXMgZGF0YS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFNUUklORyBdO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgbnVtZXJpY2FsIGNvbnZlcnNpb24gb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEBub3RlOlxuXHRcdFx0QXMgbXVjaCBhcyBwb3NzaWJsZSwgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHR0b051bWJlciggKXtcblx0XHRyZXR1cm4gdGhpc1sgTlVNQkVSIF07XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAbm90ZTpcblx0XHRcdEFzIG11Y2ggYXMgcG9zc2libGUsIGRvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0dmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpc1sgVkFMVUUgXTtcblx0fVxuXG5cdHR5cGVPZiggdHlwZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCB0eXBlb2YgdHlwZSA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMudmFsdWVPZiggKSA9PSB0eXBlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qXG5cdFx0QG5vdGU6XG5cdFx0XHRTb21lIGNhc2VzIHRoYXQgaW5zdGFuY2VPZiBuZWVkcyB0byBiZSBvdmVycmlkZGVuLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpbnN0YW5jZU9mKCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZW50aXR5ID0gdGhpcy52YWx1ZU9mKCApO1xuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzIGluc3RhbmNlb2YgYmx1ZXByaW50XG5cdFx0XHRcdHx8IGVudGl0eSBpbnN0YW5jZW9mIGJsdWVwcmludFxuXHRcdFx0XHR8fCB0eXBlb2YgYmx1ZXByaW50Lm5hbWUgPT0gXCJzdHJpbmdcIiAmJiB0aGlzLmluc3RhbmNlT2YoIGJsdWVwcmludC5uYW1lIClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBibHVlcHJpbnQgPT0gXCJzdHJpbmdcIiApe1xuXHRcdFx0aWYoIHRoaXMudHlwZU9mKCBibHVlcHJpbnQudG9Mb3dlckNhc2UoICkgKSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCB8fCB0eXBlb2YgZW50aXR5ID09IFwidW5kZWZpbmVkXCIgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludCApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0ZG97XG5cdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHQmJiBlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50XG5cdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdHR5cGVvZiBlbnRpdHkuY29uc3RydWN0b3IgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0JiYgZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgeW91IHJlbW92ZWQgdGhlIGNvbmRpdGlvbiwgdGhpcyBtYXkgY2F1c2UgdW53YW50ZWQgYmVoYXZpb3IuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gYmx1ZXByaW50ICl7XG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzO1xuXG5cdFx0XHRcdGRve1xuXHRcdFx0XHRcdGlmKCAoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZW50aXR5ID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0JiYgZW50aXR5Lm5hbWUgPT09IGJsdWVwcmludFxuXHRcdFx0XHRcdCkgfHwgKFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVudGl0eS5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdCYmIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSBibHVlcHJpbnRcblx0XHRcdFx0XHQpICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH13aGlsZSggZW50aXR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBlbnRpdHkgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBnZW5lcmljIHN0cmluZ2lmeSBmdW5jdGlvbixcblx0XHRcdFx0Zm9yIGNvbXBsZXggZW50aXR5IHlvdSBuZWVkIHRvIG92ZXJyaWRlIHRoaXMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHN0cmluZ2lmeSggKXtcblx0XHR0cnl7XG5cdFx0XHRpZiggdGhpc1sgVFlQRSBdID09IFwib2JqZWN0XCIgKXtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlT2YoICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIEVNUFRZX1NUUklORyArIHRoaXMudmFsdWVPZiggKTtcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVPZiggKS50b1N0cmluZyggKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUaGlzIHdpbGwgY2FsbCB0aGUgc3RhdGljIGRlc2VyaWFsaXphdGlvbiBwcm9jZWR1cmUgb2YgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0ZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHByb2NlZHVyZSA9IE1ldGEuZGVzZXJpYWxpemU7XG5cblx0XHRpZihcblx0XHRcdHR5cGVvZiB0aGlzLmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIlxuXHRcdFx0JiYgdHlwZW9mIHRoaXMuY29uc3RydWN0b3IuZGVzZXJpYWxpemUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQmJiB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplLm5hbWUgPT09IFwiZGVzZXJpYWxpemVcIlxuXHRcdCl7XG5cdFx0XHRwcm9jZWR1cmUgPSB0aGlzLmNvbnN0cnVjdG9yLmRlc2VyaWFsaXplO1xuXHRcdH1cblxuXHRcdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDIgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIHRoaXMudmFsdWVPZiggKSwgYXJndW1lbnRzWyAwIF0sIGFyZ3VtZW50c1sgMSBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICk7XG5cdFx0fVxuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyBhIHRhZyBmb3JtYXQgd2l0aCB2YWx1ZS5cblx0XHRcdFRoZSB2YWx1ZSBtdXN0IGJlIGEgZGF0YSBVUkwgZm9ybWF0LlxuXG5cdFx0XHRUaGUgcGFyc2VyIGZ1bmN0aW9uIHdpbGwgYWNjZXB0IGEgY29udGV4dCBwYXJhbWV0ZXIuXG5cblx0XHRcdEJ5IGRlZmF1bHQgdGhpcyB3aWxsIHNlcmlhbGl6ZSB0aGUgZW50aXR5IHVzaW5nIHBsYWluL3RleHQgYmFzZTY0IGRhdGEgVVJMIGZvcm1hdC5cblxuXHRcdFx0VGhlIHBhcnNlciBtdXN0IHJldHVybiBhIHNlcmlhbGl6ZSBmb3JtYXQgb2YgdGhlIGRhdGEgdG8gYmUgcGxhY2VkIG9uIHRoZSB0YWcuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRzZXJpYWxpemUoIHBhcnNlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgZGVmZXIgPSBmdW5jdGlvbiBwYXJzZXIoIHNlbGYgKXtcblx0XHRcdGxldCB2YWx1ZSA9IHN4dHk0KCBzZWxmLnN0cmluZ2lmeSggKSApLmVuY29kZSggKTtcblxuXHRcdFx0cmV0dXJuIGAkeyBERUZBVUxUX0RBVEFfVVJMX1BSRUZJWC5yZXBsYWNlKCBcIkB0eXBlXCIsIHNlbGZbIFRZUEUgXSApIH0keyB2YWx1ZSB9YDtcblx0XHR9O1xuXG5cdFx0aWYoIHR5cGVvZiBwYXJzZXIgIT0gXCJmdW5jdGlvblwiICl7XG5cdFx0XHRwYXJzZXIgPSBkZWZlcjtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWcoIHBhcnNlciggdGhpcyApICk7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWcoIGRlZmVyKCB0aGlzICkgKTtcblx0XHR9XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRTdHJpY3QgdmFsdWUgZXF1YWxpdHkuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QG5vdGU6XG5cdFx0XHRPdmVycmlkZSBmb3IgZGVlcCBjaGVja2luZy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aXNFcXVhbCggZW50aXR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGVudGl0eSBpbnN0YW5jZW9mIE1ldGEgKXtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eS52YWx1ZU9mKCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHVlT2YoICkgPT09IGVudGl0eTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFdoZW4gdGhlIGRlc2VyaWFsaXphdGlvbiBmYWlscywgb3IgaWYgdGhlcmUgaXMgZXJyb3IsIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZS5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdGlzQ29ycnVwdGVkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBDT1JSVVBURUQgXSA9PT0gQ09SUlVQVEVEXG5cdFx0XHR8fCB0aGlzLmhhc0Vycm9yKCApXG5cdFx0KTtcblx0fVxuXG5cdGlzVGFnZ2VkKCApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzWyBUQUdHRUQgXSA9PT0gVEFHR0VEXG5cdFx0XHR8fCBUQUdfUEFUVEVSTi50ZXN0KCB0aGlzLnN0cmluZ2lmeSggKSApXG5cdFx0KTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdElmIHRoZSBlbnRpdHkgaXMgbm90IGEgdGFnIGZvcm1hdCB0aGVuIGl0J3MgcmF3LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0aXNSYXcoICl7XG5cdFx0cmV0dXJuICF0aGlzLmlzVGFnZ2VkKCApO1xuXHR9XG5cblx0c2V0RXJyb3IoIGVycm9yICl7XG5cdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdHRoaXMucHVzaEVycm9yKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHVzaEVycm9yKCBlcnJvciApe1xuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHR0aGlzWyBFUlJPUiBdLnB1c2goIGVycm9yICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXS5yZXZlcnNlKCApWyAwIF07XG5cdH1cblxuXHRoYXNFcnJvciggKXtcblx0XHRyZXR1cm4gdGhpc1sgRVJST1IgXS5sZW5ndGggPiAxO1xuXHR9XG5cblx0dHJhbnNmZXJFcnJvciggY29udGFpbmVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjb250YWluZXJcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGNvbnRhaW5lciBpbnN0YW5jZW9mIEFycmF5ICl7XG5cdFx0XHRsZXQgbGlzdCA9IHRoaXNbIEVSUk9SIF0ucmV2ZXJzZSggKTtcblx0XHRcdGxldCBpbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0d2hpbGUoIGluZGV4LS0gKSBjb250YWluZXIucHVzaCggbGlzdFsgaW5kZXggXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJucyB0aGUgY2xvbmUgb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0Y2xvbmUoIHN0YXRlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJzdGF0ZVwiOiBBcnJheVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMuY29uc3RydWN0b3IsIHRoaXMudmFsdWVPZiggKSwgc3RhdGUgKTtcblx0fVxuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybnMgdGhlIE1ldGEgaW5zdGFuY2Ugb2YgdGhpcyBkYXRhLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0bmF0aXZlKCBzdGF0ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwic3RhdGVcIjogQXJyYXlcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCBNZXRhLCB0aGlzLnZhbHVlT2YoICksIHN0YXRlICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXZlcnRzIHRvIHRoZSBNZXRhIGluc3RhbmNlIG9mIHRoaXMgZGF0YSxcblx0XHRcdFx0cGFzc2luZyB0aGUgaW5jdXJyZWQgc3RhdGUgZnJvbSBwcmV2aW91cy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdHJldmVydCggKXtcblx0XHRsZXQgc3RhdGUgPSBbIF07XG5cblx0XHRpZiggdGhpcy5pc0NvcnJ1cHRlZCggKSApe1xuXHRcdFx0c3RhdGUucHVzaCggQ09SUlVQVEVEICk7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaGFzRXJyb3IoICkgKXtcblx0XHRcdHRoaXMudHJhbnNmZXJFcnJvciggc3RhdGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5uYXRpdmUoIHN0YXRlICk7XG5cdH1cblxuXHRnZXRUeXBlKCApe1xuXHRcdHJldHVybiB0aGlzWyBUWVBFIF07XG5cdH1cblxuXHRnZXROYW1lKCApe1xuXHRcdHJldHVybiB0aGlzWyBOQU1FIF07XG5cdH1cbn1cblxuaGFyZGVuKCBcIk5BTUVcIiwgTkFNRSwgTWV0YSApO1xuaGFyZGVuKCBcIkVOVElUWVwiLCBFTlRJVFksIE1ldGEgKTtcbmhhcmRlbiggXCJUWVBFXCIsIFRZUEUsIE1ldGEgKTtcblxuaGFyZGVuKCBcIk9CSkVDVFwiLCBPQkpFQ1QsIE1ldGEgKTtcbmhhcmRlbiggXCJCT09MRUFOXCIsIEJPT0xFQU4sIE1ldGEgKTtcbmhhcmRlbiggXCJTVFJJTkdcIiwgU1RSSU5HLCBNZXRhICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIE5VTUJFUiwgTWV0YSApO1xuaGFyZGVuKCBcIlZBTFVFXCIsIFZBTFVFLCBNZXRhICk7XG5cbmhhcmRlbiggXCJHQVJCQUdFXCIsIEdBUkJBR0UsIE1ldGEgKTtcbmhhcmRlbiggXCJDT1JSVVBURURcIiwgQ09SUlVQVEVELCBNZXRhICk7XG5oYXJkZW4oIFwiVEFHR0VEXCIsIFRBR0dFRCwgTWV0YSApO1xuXG5oYXJkZW4oIFwiVEFHX1BBVFRFUk5cIiwgVEFHX1BBVFRFUk4sIE1ldGEgKTtcblxuaGFyZGVuKCBcIkRBVEFfVVJMX1RBR1wiLCBEQVRBX1VSTF9UQUcsIE1ldGEgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXRhO1xuIl19
//# sourceMappingURL=meta.support.js.map
