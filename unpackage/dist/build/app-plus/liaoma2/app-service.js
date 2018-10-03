var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;




define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = global["webpackJsonp"];
/******/ 	global["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		15: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var isFn = function isFn(v) {
  return typeof v === 'function';
};

var handlePromise = function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
};

var REGEX = /^on|^create|Sync$|Manager$|^pause/;
var API_NORMAL_LIST = ['os', 'stopRecord', 'stopVoice', 'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket', 'pageScrollTo', 'drawCanvas'];

var shouldPromise = function shouldPromise(name) {
  if (REGEX.test(name) && name !== 'createBLEConnection') {
    return false;
  }
  if (~API_NORMAL_LIST.indexOf(name)) {
    return false;
  }
  return true;
};

var promisify = function promisify(api) {
  return function () {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(undefined, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(undefined, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].
      concat(params));
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(function (value) {
          return promise.resolve(callback()).then(function () {
            return value;
          });
        }, function (reason) {
          return promise.resolve(callback()).then(function () {
            throw reason;
          });
        });
      };
    }));
  };
};

var uni = {};

var baseUni = {
  os: {
    plus: true } };



if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseUni.hasOwnProperty(name)) {
        return baseUni[name];
      }
      if (!wx.hasOwnProperty(name)) {
        return;
      }
      if (shouldPromise(name)) {
        return promisify(wx[name]);
      }
      return wx[name];
    } });

} else {

  Object.keys(baseUni).forEach(function (key) {
    uni[key] = baseUni[key];
  });

  Object.keys(wx).forEach(function (key) {
    if (wx.hasOwnProperty(key)) {
      if (shouldPromise(key)) {
        uni[key] = promisify(wx[key]);
      } else {
        uni[key] = wx[key];
      }
    }
  });
}

var uni$1 = uni;exports.default =

uni$1;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory();
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		root.CryptoJS = factory();
	}
})(undefined, function () {

	/**
                            * CryptoJS core components.
                            */
	var CryptoJS = CryptoJS || function (Math, undefined) {
		/*
                                                         * Local polyfil of Object.create
                                                         */
		var create = Object.create || function () {
			function F() {};

			return function (obj) {
				var subtype;

				F.prototype = obj;

				subtype = new F();

				F.prototype = null;

				return subtype;
			};
		}();

		/**
        * CryptoJS namespace.
        */
		var C = {};

		/**
               * Library namespace.
               */
		var C_lib = C.lib = {};

		/**
                           * Base object for prototypal inheritance.
                           */
		var Base = C_lib.Base = function () {


			return {
				/**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
				extend: function extend(overrides) {
					// Spawn
					var subtype = create(this);

					// Augment
					if (overrides) {
						subtype.mixIn(overrides);
					}

					// Create default initializer
					if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
						subtype.init = function () {
							subtype.$super.init.apply(this, arguments);
						};
					}

					// Initializer's prototype is the subtype object
					subtype.init.prototype = subtype;

					// Reference supertype
					subtype.$super = this;

					return subtype;
				},

				/**
        * Extends this object and runs the init method.
        * Arguments to create() will be passed to init().
        *
        * @return {Object} The new object.
        *
        * @static
        *
        * @example
        *
        *     var instance = MyType.create();
        */
				create: function create() {
					var instance = this.extend();
					instance.init.apply(instance, arguments);

					return instance;
				},

				/**
        * Initializes a newly created object.
        * Override this method to add some logic when your objects are created.
        *
        * @example
        *
        *     var MyType = CryptoJS.lib.Base.extend({
        *         init: function () {
        *             // ...
        *         }
        *     });
        */
				init: function init() {
				},

				/**
        * Copies properties into this object.
        *
        * @param {Object} properties The properties to mix in.
        *
        * @example
        *
        *     MyType.mixIn({
        *         field: 'value'
        *     });
        */
				mixIn: function mixIn(properties) {
					for (var propertyName in properties) {
						if (properties.hasOwnProperty(propertyName)) {
							this[propertyName] = properties[propertyName];
						}
					}

					// IE won't copy toString using the loop above
					if (properties.hasOwnProperty('toString')) {
						this.toString = properties.toString;
					}
				},

				/**
        * Creates a copy of this object.
        *
        * @return {Object} The clone.
        *
        * @example
        *
        *     var clone = instance.clone();
        */
				clone: function clone() {
					return this.init.prototype.extend(this);
				} };

		}();

		/**
        * An array of 32-bit words.
        *
        * @property {Array} words The array of 32-bit words.
        * @property {number} sigBytes The number of significant bytes in this word array.
        */
		var WordArray = C_lib.WordArray = Base.extend({
			/**
                                                   * Initializes a newly created word array.
                                                   *
                                                   * @param {Array} words (Optional) An array of 32-bit words.
                                                   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                                                   *
                                                   * @example
                                                   *
                                                   *     var wordArray = CryptoJS.lib.WordArray.create();
                                                   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
                                                   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
                                                   */
			init: function init(words, sigBytes) {
				words = this.words = words || [];

				if (sigBytes != undefined) {
					this.sigBytes = sigBytes;
				} else {
					this.sigBytes = words.length * 4;
				}
			},

			/**
       * Converts this word array to a string.
       *
       * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
       *
       * @return {string} The stringified word array.
       *
       * @example
       *
       *     var string = wordArray + '';
       *     var string = wordArray.toString();
       *     var string = wordArray.toString(CryptoJS.enc.Utf8);
       */
			toString: function toString(encoder) {
				return (encoder || Hex).stringify(this);
			},

			/**
       * Concatenates a word array to this word array.
       *
       * @param {WordArray} wordArray The word array to append.
       *
       * @return {WordArray} This word array.
       *
       * @example
       *
       *     wordArray1.concat(wordArray2);
       */
			concat: function concat(wordArray) {
				// Shortcuts
				var thisWords = this.words;
				var thatWords = wordArray.words;
				var thisSigBytes = this.sigBytes;
				var thatSigBytes = wordArray.sigBytes;

				// Clamp excess bits
				this.clamp();

				// Concat
				if (thisSigBytes % 4) {
					// Copy one byte at a time
					for (var i = 0; i < thatSigBytes; i++) {
						var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
						thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
					}
				} else {
					// Copy one word at a time
					for (var i = 0; i < thatSigBytes; i += 4) {
						thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
					}
				}
				this.sigBytes += thatSigBytes;

				// Chainable
				return this;
			},

			/**
       * Removes insignificant bits.
       *
       * @example
       *
       *     wordArray.clamp();
       */
			clamp: function clamp() {
				// Shortcuts
				var words = this.words;
				var sigBytes = this.sigBytes;

				// Clamp
				words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
				words.length = Math.ceil(sigBytes / 4);
			},

			/**
       * Creates a copy of this word array.
       *
       * @return {WordArray} The clone.
       *
       * @example
       *
       *     var clone = wordArray.clone();
       */
			clone: function clone() {
				var clone = Base.clone.call(this);
				clone.words = this.words.slice(0);

				return clone;
			},

			/**
       * Creates a word array filled with random bytes.
       *
       * @param {number} nBytes The number of random bytes to generate.
       *
       * @return {WordArray} The random word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.lib.WordArray.random(16);
       */
			random: function random(nBytes) {
				var words = [];

				var r = function r(m_w) {
					var m_w = m_w;
					var m_z = 0x3ade68b1;
					var mask = 0xffffffff;

					return function () {
						m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
						m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
						var result = (m_z << 0x10) + m_w & mask;
						result /= 0x100000000;
						result += 0.5;
						return result * (Math.random() > .5 ? 1 : -1);
					};
				};

				for (var i = 0, rcache; i < nBytes; i += 4) {
					var _r = r((rcache || Math.random()) * 0x100000000);

					rcache = _r() * 0x3ade67b7;
					words.push(_r() * 0x100000000 | 0);
				}

				return new WordArray.init(words, nBytes);
			} });


		/**
          * Encoder namespace.
          */
		var C_enc = C.enc = {};

		/**
                           * Hex encoding strategy.
                           */
		var Hex = C_enc.Hex = {
			/**
                           * Converts a word array to a hex string.
                           *
                           * @param {WordArray} wordArray The word array.
                           *
                           * @return {string} The hex string.
                           *
                           * @static
                           *
                           * @example
                           *
                           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                           */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var hexChars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
					hexChars.push((bite >>> 4).toString(16));
					hexChars.push((bite & 0x0f).toString(16));
				}

				return hexChars.join('');
			},

			/**
       * Converts a hex string to a word array.
       *
       * @param {string} hexStr The hex string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
       */
			parse: function parse(hexStr) {
				// Shortcut
				var hexStrLength = hexStr.length;

				// Convert
				var words = [];
				for (var i = 0; i < hexStrLength; i += 2) {
					words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
				}

				return new WordArray.init(words, hexStrLength / 2);
			} };


		/**
         * Latin1 encoding strategy.
         */
		var Latin1 = C_enc.Latin1 = {
			/**
                                 * Converts a word array to a Latin1 string.
                                 *
                                 * @param {WordArray} wordArray The word array.
                                 *
                                 * @return {string} The Latin1 string.
                                 *
                                 * @static
                                 *
                                 * @example
                                 *
                                 *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
                                 */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var latin1Chars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
					latin1Chars.push(String.fromCharCode(bite));
				}

				return latin1Chars.join('');
			},

			/**
       * Converts a Latin1 string to a word array.
       *
       * @param {string} latin1Str The Latin1 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
       */
			parse: function parse(latin1Str) {
				// Shortcut
				var latin1StrLength = latin1Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < latin1StrLength; i++) {
					words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
				}

				return new WordArray.init(words, latin1StrLength);
			} };


		/**
         * UTF-8 encoding strategy.
         */
		var Utf8 = C_enc.Utf8 = {
			/**
                             * Converts a word array to a UTF-8 string.
                             *
                             * @param {WordArray} wordArray The word array.
                             *
                             * @return {string} The UTF-8 string.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
                             */
			stringify: function stringify(wordArray) {
				try {
					return decodeURIComponent(escape(Latin1.stringify(wordArray)));
				} catch (e) {
					throw new Error('Malformed UTF-8 data');
				}
			},

			/**
       * Converts a UTF-8 string to a word array.
       *
       * @param {string} utf8Str The UTF-8 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
       */
			parse: function parse(utf8Str) {
				return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
			} };


		/**
         * Abstract buffered block algorithm template.
         *
         * The property blockSize must be implemented in a concrete subtype.
         *
         * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
         */
		var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
			/**
                                                                             * Resets this block algorithm's data buffer to its initial state.
                                                                             *
                                                                             * @example
                                                                             *
                                                                             *     bufferedBlockAlgorithm.reset();
                                                                             */
			reset: function reset() {
				// Initial values
				this._data = new WordArray.init();
				this._nDataBytes = 0;
			},

			/**
       * Adds new data to this block algorithm's buffer.
       *
       * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
       *
       * @example
       *
       *     bufferedBlockAlgorithm._append('data');
       *     bufferedBlockAlgorithm._append(wordArray);
       */
			_append: function _append(data) {
				// Convert string to WordArray, else assume WordArray already
				if (typeof data == 'string') {
					data = Utf8.parse(data);
				}

				// Append
				this._data.concat(data);
				this._nDataBytes += data.sigBytes;
			},

			/**
       * Processes available data blocks.
       *
       * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
       *
       * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
       *
       * @return {WordArray} The processed data.
       *
       * @example
       *
       *     var processedData = bufferedBlockAlgorithm._process();
       *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
       */
			_process: function _process(doFlush) {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;
				var dataSigBytes = data.sigBytes;
				var blockSize = this.blockSize;
				var blockSizeBytes = blockSize * 4;

				// Count blocks ready
				var nBlocksReady = dataSigBytes / blockSizeBytes;
				if (doFlush) {
					// Round up to include partial blocks
					nBlocksReady = Math.ceil(nBlocksReady);
				} else {
					// Round down to include only full blocks,
					// less the number of blocks that must remain in the buffer
					nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
				}

				// Count words ready
				var nWordsReady = nBlocksReady * blockSize;

				// Count bytes ready
				var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

				// Process blocks
				if (nWordsReady) {
					for (var offset = 0; offset < nWordsReady; offset += blockSize) {
						// Perform concrete-algorithm logic
						this._doProcessBlock(dataWords, offset);
					}

					// Remove processed words
					var processedWords = dataWords.splice(0, nWordsReady);
					data.sigBytes -= nBytesReady;
				}

				// Return processed words
				return new WordArray.init(processedWords, nBytesReady);
			},

			/**
       * Creates a copy of this object.
       *
       * @return {Object} The clone.
       *
       * @example
       *
       *     var clone = bufferedBlockAlgorithm.clone();
       */
			clone: function clone() {
				var clone = Base.clone.call(this);
				clone._data = this._data.clone();

				return clone;
			},

			_minBufferSize: 0 });


		/**
                          * Abstract hasher template.
                          *
                          * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
                          */
		var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
			/**
                                                               * Configuration options.
                                                               */
			cfg: Base.extend(),

			/**
                        * Initializes a newly created hasher.
                        *
                        * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
                        *
                        * @example
                        *
                        *     var hasher = CryptoJS.algo.SHA256.create();
                        */
			init: function init(cfg) {
				// Apply config defaults
				this.cfg = this.cfg.extend(cfg);

				// Set initial values
				this.reset();
			},

			/**
       * Resets this hasher to its initial state.
       *
       * @example
       *
       *     hasher.reset();
       */
			reset: function reset() {
				// Reset data buffer
				BufferedBlockAlgorithm.reset.call(this);

				// Perform concrete-hasher logic
				this._doReset();
			},

			/**
       * Updates this hasher with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {Hasher} This hasher.
       *
       * @example
       *
       *     hasher.update('message');
       *     hasher.update(wordArray);
       */
			update: function update(messageUpdate) {
				// Append
				this._append(messageUpdate);

				// Update the hash
				this._process();

				// Chainable
				return this;
			},

			/**
       * Finalizes the hash computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The hash.
       *
       * @example
       *
       *     var hash = hasher.finalize();
       *     var hash = hasher.finalize('message');
       *     var hash = hasher.finalize(wordArray);
       */
			finalize: function finalize(messageUpdate) {
				// Final message update
				if (messageUpdate) {
					this._append(messageUpdate);
				}

				// Perform concrete-hasher logic
				var hash = this._doFinalize();

				return hash;
			},

			blockSize: 512 / 32,

			/**
                         * Creates a shortcut function to a hasher's object interface.
                         *
                         * @param {Hasher} hasher The hasher to create a helper for.
                         *
                         * @return {Function} The shortcut function.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
                         */
			_createHelper: function _createHelper(hasher) {
				return function (message, cfg) {
					return new hasher.init(cfg).finalize(message);
				};
			},

			/**
       * Creates a shortcut function to the HMAC's object interface.
       *
       * @param {Hasher} hasher The hasher to use in this HMAC helper.
       *
       * @return {Function} The shortcut function.
       *
       * @static
       *
       * @example
       *
       *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
       */
			_createHmacHelper: function _createHmacHelper(hasher) {
				return function (message, key) {
					return new C_algo.HMAC.init(hasher, key).finalize(message);
				};
			} });


		/**
          * Algorithm namespace.
          */
		var C_algo = C.algo = {};

		return C;
	}(Math);


	return CryptoJS;

});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(5));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Cipher core components.
                                    */
	CryptoJS.lib.Cipher || function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
		var C_enc = C.enc;
		var Utf8 = C_enc.Utf8;
		var Base64 = C_enc.Base64;
		var C_algo = C.algo;
		var EvpKDF = C_algo.EvpKDF;

		/**
                               * Abstract base cipher template.
                               *
                               * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
                               * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
                               * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
                               * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
                               */
		var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
			/**
                                                               * Configuration options.
                                                               *
                                                               * @property {WordArray} iv The IV to use for this operation.
                                                               */
			cfg: Base.extend(),

			/**
                        * Creates this cipher in encryption mode.
                        *
                        * @param {WordArray} key The key.
                        * @param {Object} cfg (Optional) The configuration options to use for this operation.
                        *
                        * @return {Cipher} A cipher instance.
                        *
                        * @static
                        *
                        * @example
                        *
                        *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
                        */
			createEncryptor: function createEncryptor(key, cfg) {
				return this.create(this._ENC_XFORM_MODE, key, cfg);
			},

			/**
       * Creates this cipher in decryption mode.
       *
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {Cipher} A cipher instance.
       *
       * @static
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
       */
			createDecryptor: function createDecryptor(key, cfg) {
				return this.create(this._DEC_XFORM_MODE, key, cfg);
			},

			/**
       * Initializes a newly created cipher.
       *
       * @param {number} xformMode Either the encryption or decryption transormation mode constant.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @example
       *
       *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
       */
			init: function init(xformMode, key, cfg) {
				// Apply config defaults
				this.cfg = this.cfg.extend(cfg);

				// Store transform mode and key
				this._xformMode = xformMode;
				this._key = key;

				// Set initial values
				this.reset();
			},

			/**
       * Resets this cipher to its initial state.
       *
       * @example
       *
       *     cipher.reset();
       */
			reset: function reset() {
				// Reset data buffer
				BufferedBlockAlgorithm.reset.call(this);

				// Perform concrete-cipher logic
				this._doReset();
			},

			/**
       * Adds data to be encrypted or decrypted.
       *
       * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
       *
       * @return {WordArray} The data after processing.
       *
       * @example
       *
       *     var encrypted = cipher.process('data');
       *     var encrypted = cipher.process(wordArray);
       */
			process: function process(dataUpdate) {
				// Append
				this._append(dataUpdate);

				// Process available blocks
				return this._process();
			},

			/**
       * Finalizes the encryption or decryption process.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
       *
       * @return {WordArray} The data after final processing.
       *
       * @example
       *
       *     var encrypted = cipher.finalize();
       *     var encrypted = cipher.finalize('data');
       *     var encrypted = cipher.finalize(wordArray);
       */
			finalize: function finalize(dataUpdate) {
				// Final data update
				if (dataUpdate) {
					this._append(dataUpdate);
				}

				// Perform concrete-cipher logic
				var finalProcessedData = this._doFinalize();

				return finalProcessedData;
			},

			keySize: 128 / 32,

			ivSize: 128 / 32,

			_ENC_XFORM_MODE: 1,

			_DEC_XFORM_MODE: 2,

			/**
                        * Creates shortcut functions to a cipher's object interface.
                        *
                        * @param {Cipher} cipher The cipher to create a helper for.
                        *
                        * @return {Object} An object with encrypt and decrypt shortcut functions.
                        *
                        * @static
                        *
                        * @example
                        *
                        *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
                        */
			_createHelper: function () {
				function selectCipherStrategy(key) {
					if (typeof key == 'string') {
						return PasswordBasedCipher;
					} else {
						return SerializableCipher;
					}
				}

				return function (cipher) {
					return {
						encrypt: function encrypt(message, key, cfg) {
							return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
						},

						decrypt: function decrypt(ciphertext, key, cfg) {
							return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
						} };

				};
			}() });


		/**
            * Abstract base stream cipher template.
            *
            * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
            */
		var StreamCipher = C_lib.StreamCipher = Cipher.extend({
			_doFinalize: function _doFinalize() {
				// Process partial blocks
				var finalProcessedBlocks = this._process(!!'flush');

				return finalProcessedBlocks;
			},

			blockSize: 1 });


		/**
                     * Mode namespace.
                     */
		var C_mode = C.mode = {};

		/**
                             * Abstract base block cipher mode template.
                             */
		var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
			/**
                                                               * Creates this mode for encryption.
                                                               *
                                                               * @param {Cipher} cipher A block cipher instance.
                                                               * @param {Array} iv The IV words.
                                                               *
                                                               * @static
                                                               *
                                                               * @example
                                                               *
                                                               *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
                                                               */
			createEncryptor: function createEncryptor(cipher, iv) {
				return this.Encryptor.create(cipher, iv);
			},

			/**
       * Creates this mode for decryption.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @static
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
       */
			createDecryptor: function createDecryptor(cipher, iv) {
				return this.Decryptor.create(cipher, iv);
			},

			/**
       * Initializes a newly created mode.
       *
       * @param {Cipher} cipher A block cipher instance.
       * @param {Array} iv The IV words.
       *
       * @example
       *
       *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
       */
			init: function init(cipher, iv) {
				this._cipher = cipher;
				this._iv = iv;
			} });


		/**
          * Cipher Block Chaining mode.
          */
		var CBC = C_mode.CBC = function () {
			/**
                                       * Abstract base CBC mode.
                                       */
			var CBC = BlockCipherMode.extend();

			/**
                                        * CBC encryptor.
                                        */
			CBC.Encryptor = CBC.extend({
				/**
                                 * Processes the data block at offset.
                                 *
                                 * @param {Array} words The data words to operate on.
                                 * @param {number} offset The offset where the block starts.
                                 *
                                 * @example
                                 *
                                 *     mode.processBlock(data.words, offset);
                                 */
				processBlock: function processBlock(words, offset) {
					// Shortcuts
					var cipher = this._cipher;
					var blockSize = cipher.blockSize;

					// XOR and encrypt
					xorBlock.call(this, words, offset, blockSize);
					cipher.encryptBlock(words, offset);

					// Remember this block to use with next block
					this._prevBlock = words.slice(offset, offset + blockSize);
				} });


			/**
           * CBC decryptor.
           */
			CBC.Decryptor = CBC.extend({
				/**
                                 * Processes the data block at offset.
                                 *
                                 * @param {Array} words The data words to operate on.
                                 * @param {number} offset The offset where the block starts.
                                 *
                                 * @example
                                 *
                                 *     mode.processBlock(data.words, offset);
                                 */
				processBlock: function processBlock(words, offset) {
					// Shortcuts
					var cipher = this._cipher;
					var blockSize = cipher.blockSize;

					// Remember this block to use with next block
					var thisBlock = words.slice(offset, offset + blockSize);

					// Decrypt and XOR
					cipher.decryptBlock(words, offset);
					xorBlock.call(this, words, offset, blockSize);

					// This block becomes the previous block
					this._prevBlock = thisBlock;
				} });


			function xorBlock(words, offset, blockSize) {
				// Shortcut
				var iv = this._iv;

				// Choose mixing block
				if (iv) {
					var block = iv;

					// Remove IV for subsequent blocks
					this._iv = undefined;
				} else {
					var block = this._prevBlock;
				}

				// XOR blocks
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= block[i];
				}
			}

			return CBC;
		}();

		/**
        * Padding namespace.
        */
		var C_pad = C.pad = {};

		/**
                           * PKCS #5/7 padding strategy.
                           */
		var Pkcs7 = C_pad.Pkcs7 = {
			/**
                               * Pads data using the algorithm defined in PKCS #5/7.
                               *
                               * @param {WordArray} data The data to pad.
                               * @param {number} blockSize The multiple that the data should be padded to.
                               *
                               * @static
                               *
                               * @example
                               *
                               *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
                               */
			pad: function pad(data, blockSize) {
				// Shortcut
				var blockSizeBytes = blockSize * 4;

				// Count padding bytes
				var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

				// Create padding word
				var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;

				// Create padding
				var paddingWords = [];
				for (var i = 0; i < nPaddingBytes; i += 4) {
					paddingWords.push(paddingWord);
				}
				var padding = WordArray.create(paddingWords, nPaddingBytes);

				// Add padding
				data.concat(padding);
			},

			/**
       * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
       *
       * @param {WordArray} data The data to unpad.
       *
       * @static
       *
       * @example
       *
       *     CryptoJS.pad.Pkcs7.unpad(wordArray);
       */
			unpad: function unpad(data) {
				// Get number of padding bytes from last byte
				var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

				// Remove padding
				data.sigBytes -= nPaddingBytes;
			} };


		/**
         * Abstract base block cipher template.
         *
         * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
         */
		var BlockCipher = C_lib.BlockCipher = Cipher.extend({
			/**
                                                         * Configuration options.
                                                         *
                                                         * @property {Mode} mode The block mode to use. Default: CBC
                                                         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
                                                         */
			cfg: Cipher.cfg.extend({
				mode: CBC,
				padding: Pkcs7 }),


			reset: function reset() {
				// Reset cipher
				Cipher.reset.call(this);

				// Shortcuts
				var cfg = this.cfg;
				var iv = cfg.iv;
				var mode = cfg.mode;

				// Reset block mode
				if (this._xformMode == this._ENC_XFORM_MODE) {
					var modeCreator = mode.createEncryptor;
				} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
						var modeCreator = mode.createDecryptor;
						// Keep at least one block in the buffer for unpadding
						this._minBufferSize = 1;
					}

				if (this._mode && this._mode.__creator == modeCreator) {
					this._mode.init(this, iv && iv.words);
				} else {
					this._mode = modeCreator.call(mode, this, iv && iv.words);
					this._mode.__creator = modeCreator;
				}
			},

			_doProcessBlock: function _doProcessBlock(words, offset) {
				this._mode.processBlock(words, offset);
			},

			_doFinalize: function _doFinalize() {
				// Shortcut
				var padding = this.cfg.padding;

				// Finalize
				if (this._xformMode == this._ENC_XFORM_MODE) {
					// Pad data
					padding.pad(this._data, this.blockSize);

					// Process final blocks
					var finalProcessedBlocks = this._process(!!'flush');
				} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{
						// Process final blocks
						var finalProcessedBlocks = this._process(!!'flush');

						// Unpad data
						padding.unpad(finalProcessedBlocks);
					}

				return finalProcessedBlocks;
			},

			blockSize: 128 / 32 });


		/**
                            * A collection of cipher parameters.
                            *
                            * @property {WordArray} ciphertext The raw ciphertext.
                            * @property {WordArray} key The key to this ciphertext.
                            * @property {WordArray} iv The IV used in the ciphering operation.
                            * @property {WordArray} salt The salt used with a key derivation function.
                            * @property {Cipher} algorithm The cipher algorithm.
                            * @property {Mode} mode The block mode used in the ciphering operation.
                            * @property {Padding} padding The padding scheme used in the ciphering operation.
                            * @property {number} blockSize The block size of the cipher.
                            * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
                            */
		var CipherParams = C_lib.CipherParams = Base.extend({
			/**
                                                         * Initializes a newly created cipher params object.
                                                         *
                                                         * @param {Object} cipherParams An object with any of the possible cipher parameters.
                                                         *
                                                         * @example
                                                         *
                                                         *     var cipherParams = CryptoJS.lib.CipherParams.create({
                                                         *         ciphertext: ciphertextWordArray,
                                                         *         key: keyWordArray,
                                                         *         iv: ivWordArray,
                                                         *         salt: saltWordArray,
                                                         *         algorithm: CryptoJS.algo.AES,
                                                         *         mode: CryptoJS.mode.CBC,
                                                         *         padding: CryptoJS.pad.PKCS7,
                                                         *         blockSize: 4,
                                                         *         formatter: CryptoJS.format.OpenSSL
                                                         *     });
                                                         */
			init: function init(cipherParams) {
				this.mixIn(cipherParams);
			},

			/**
       * Converts this cipher params object to a string.
       *
       * @param {Format} formatter (Optional) The formatting strategy to use.
       *
       * @return {string} The stringified cipher params.
       *
       * @throws Error If neither the formatter nor the default formatter is set.
       *
       * @example
       *
       *     var string = cipherParams + '';
       *     var string = cipherParams.toString();
       *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
       */
			toString: function toString(formatter) {
				return (formatter || this.formatter).stringify(this);
			} });


		/**
          * Format namespace.
          */
		var C_format = C.format = {};

		/**
                                 * OpenSSL formatting strategy.
                                 */
		var OpenSSLFormatter = C_format.OpenSSL = {
			/**
                                               * Converts a cipher params object to an OpenSSL-compatible string.
                                               *
                                               * @param {CipherParams} cipherParams The cipher params object.
                                               *
                                               * @return {string} The OpenSSL-compatible string.
                                               *
                                               * @static
                                               *
                                               * @example
                                               *
                                               *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
                                               */
			stringify: function stringify(cipherParams) {
				// Shortcuts
				var ciphertext = cipherParams.ciphertext;
				var salt = cipherParams.salt;

				// Format
				if (salt) {
					var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
				} else {
					var wordArray = ciphertext;
				}

				return wordArray.toString(Base64);
			},

			/**
       * Converts an OpenSSL-compatible string to a cipher params object.
       *
       * @param {string} openSSLStr The OpenSSL-compatible string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
       */
			parse: function parse(openSSLStr) {
				// Parse base64
				var ciphertext = Base64.parse(openSSLStr);

				// Shortcut
				var ciphertextWords = ciphertext.words;

				// Test for salt
				if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
					// Extract salt
					var salt = WordArray.create(ciphertextWords.slice(2, 4));

					// Remove salt from ciphertext
					ciphertextWords.splice(0, 4);
					ciphertext.sigBytes -= 16;
				}

				return CipherParams.create({ ciphertext: ciphertext, salt: salt });
			} };


		/**
         * A cipher wrapper that returns ciphertext as a serializable cipher params object.
         */
		var SerializableCipher = C_lib.SerializableCipher = Base.extend({
			/**
                                                                     * Configuration options.
                                                                     *
                                                                     * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
                                                                     */
			cfg: Base.extend({
				format: OpenSSLFormatter }),


			/**
                                  * Encrypts a message.
                                  *
                                  * @param {Cipher} cipher The cipher algorithm to use.
                                  * @param {WordArray|string} message The message to encrypt.
                                  * @param {WordArray} key The key.
                                  * @param {Object} cfg (Optional) The configuration options to use for this operation.
                                  *
                                  * @return {CipherParams} A cipher params object.
                                  *
                                  * @static
                                  *
                                  * @example
                                  *
                                  *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
                                  *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
                                  *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
                                  */
			encrypt: function encrypt(cipher, message, key, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Encrypt
				var encryptor = cipher.createEncryptor(key, cfg);
				var ciphertext = encryptor.finalize(message);

				// Shortcut
				var cipherCfg = encryptor.cfg;

				// Create and return serializable cipher params
				return CipherParams.create({
					ciphertext: ciphertext,
					key: key,
					iv: cipherCfg.iv,
					algorithm: cipher,
					mode: cipherCfg.mode,
					padding: cipherCfg.padding,
					blockSize: cipher.blockSize,
					formatter: cfg.format });

			},

			/**
       * Decrypts serialized ciphertext.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {WordArray} key The key.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
       */
			decrypt: function decrypt(cipher, ciphertext, key, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Convert string to CipherParams
				ciphertext = this._parse(ciphertext, cfg.format);

				// Decrypt
				var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

				return plaintext;
			},

			/**
       * Converts serialized ciphertext to CipherParams,
       * else assumed CipherParams already and returns ciphertext unchanged.
       *
       * @param {CipherParams|string} ciphertext The ciphertext.
       * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
       *
       * @return {CipherParams} The unserialized ciphertext.
       *
       * @static
       *
       * @example
       *
       *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
       */
			_parse: function _parse(ciphertext, format) {
				if (typeof ciphertext == 'string') {
					return format.parse(ciphertext, this);
				} else {
					return ciphertext;
				}
			} });


		/**
          * Key derivation function namespace.
          */
		var C_kdf = C.kdf = {};

		/**
                           * OpenSSL key derivation function.
                           */
		var OpenSSLKdf = C_kdf.OpenSSL = {
			/**
                                      * Derives a key and IV from a password.
                                      *
                                      * @param {string} password The password to derive from.
                                      * @param {number} keySize The size in words of the key to generate.
                                      * @param {number} ivSize The size in words of the IV to generate.
                                      * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
                                      *
                                      * @return {CipherParams} A cipher params object with the key, IV, and salt.
                                      *
                                      * @static
                                      *
                                      * @example
                                      *
                                      *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
                                      *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
                                      */
			execute: function execute(password, keySize, ivSize, salt) {
				// Generate random salt
				if (!salt) {
					salt = WordArray.random(64 / 8);
				}

				// Derive key and IV
				var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

				// Separate key and IV
				var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
				key.sigBytes = keySize * 4;

				// Return params
				return CipherParams.create({ key: key, iv: iv, salt: salt });
			} };


		/**
         * A serializable cipher wrapper that derives the key from a password,
         * and returns ciphertext as a serializable cipher params object.
         */
		var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
			/**
                                                                                     * Configuration options.
                                                                                     *
                                                                                     * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
                                                                                     */
			cfg: SerializableCipher.cfg.extend({
				kdf: OpenSSLKdf }),


			/**
                         * Encrypts a message using a password.
                         *
                         * @param {Cipher} cipher The cipher algorithm to use.
                         * @param {WordArray|string} message The message to encrypt.
                         * @param {string} password The password.
                         * @param {Object} cfg (Optional) The configuration options to use for this operation.
                         *
                         * @return {CipherParams} A cipher params object.
                         *
                         * @static
                         *
                         * @example
                         *
                         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
                         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
                         */
			encrypt: function encrypt(cipher, message, password, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Derive key and other params
				var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

				// Add IV to config
				cfg.iv = derivedParams.iv;

				// Encrypt
				var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

				// Mix in derived params
				ciphertext.mixIn(derivedParams);

				return ciphertext;
			},

			/**
       * Decrypts serialized ciphertext using a password.
       *
       * @param {Cipher} cipher The cipher algorithm to use.
       * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
       * @param {string} password The password.
       * @param {Object} cfg (Optional) The configuration options to use for this operation.
       *
       * @return {WordArray} The plaintext.
       *
       * @static
       *
       * @example
       *
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
       *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
       */
			decrypt: function decrypt(cipher, ciphertext, password, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Convert string to CipherParams
				ciphertext = this._parse(ciphertext, cfg.format);

				// Derive key and other params
				var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

				// Add IV to config
				cfg.iv = derivedParams.iv;

				// Decrypt
				var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

				return plaintext;
			} });

	}();


});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// fix env
try {
    if (!global) global = {}
    global.process = global.process || {}
    global.process.env = global.process.env || {}
    global.App = global.App || App
    global.Page = global.Page || Page
    global.Component = global.Component || Component
    global.getApp = global.getApp || getApp
} catch (e) {}

;(function(global, factory) {
     true
        ? (module.exports = factory())
        : typeof define === "function" && define.amd
            ? define(factory)
            : (global.Vue = factory())
})(this, function() {
    "use strict"

    //fixed by xxxxxx
    function calcDiff(holder, key, newObj, oldObj) {
        if (newObj === oldObj || newObj === undefined) {
            return
        }

        if (newObj == null || oldObj == null || typeof newObj !== typeof oldObj) {
            holder[key] = newObj
        } else if (Array.isArray(newObj) && Array.isArray(oldObj)) {
            if (newObj.length === oldObj.length) {
                for (var i = 0, len = newObj.length; i < len; ++i) {
                    calcDiff(holder, key + "[" + i + "]", newObj[i], oldObj[i])
                }
            } else {
                holder[key] = newObj
            }
        } else if (typeof newObj === "object" && typeof oldObj === "object") {
            var newKeys = Object.keys(newObj)
            var oldKeys = Object.keys(oldObj)

            if (newKeys.length !== oldKeys.length) {
                holder[key] = newObj
            } else {
                var allKeysSet = Object.create(null)
                for (var i = 0, len = newKeys.length; i < len; ++i) {
                    allKeysSet[newKeys[i]] = true
                    allKeysSet[oldKeys[i]] = true
                }
                if (Object.keys(allKeysSet).length !== newKeys.length) {
                    holder[key] = newObj
                } else {
                    for (var i = 0, len = newKeys.length; i < len; ++i) {
                        var k = newKeys[i]
                        calcDiff(holder, key + "." + k, newObj[k], oldObj[k])
                    }
                }
            }
        } else if (newObj !== oldObj) {
            holder[key] = newObj
        }
    }

    function diff(newObj, oldObj) {
        var keys = Object.keys(newObj)
        var diffResult = {}
        for (var i = 0, len = keys.length; i < len; ++i) {
            var k = keys[i]
            var oldKeyPath = k.split(".")
            var oldValue = oldObj[oldKeyPath[0]]
            for (var j = 1, jlen = oldKeyPath.length; j < jlen && oldValue !== undefined; ++j) {
                oldValue = oldValue[oldKeyPath[j]]
            }
            calcDiff(diffResult, k, newObj[k], oldValue)
        }
        return diffResult
    }

    /*  */

    // these helpers produces better vm code in JS engines due to their
    // explicitness and function inlining
    function isUndef(v) {
        return v === undefined || v === null
    }

    function isDef(v) {
        return v !== undefined && v !== null
    }

    function isTrue(v) {
        return v === true
    }

    function isFalse(v) {
        return v === false
    }

    /**
     * Check if value is primitive
     */
    function isPrimitive(value) {
        return typeof value === "string" || typeof value === "number"
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject(obj) {
        return obj !== null && typeof obj === "object"
    }

    var _toString = Object.prototype.toString

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject(obj) {
        return _toString.call(obj) === "[object Object]"
    }

    function isRegExp(v) {
        return _toString.call(v) === "[object RegExp]"
    }

    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex(val) {
        var n = parseFloat(val)
        return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString(val) {
        return val == null
            ? ""
            : typeof val === "object"
                ? JSON.stringify(val, null, 2)
                : String(val)
    }

    /**
     * Convert a input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber(val) {
        var n = parseFloat(val)
        return isNaN(n) ? val : n
    }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap(str, expectsLowerCase) {
        var map = Object.create(null)
        var list = str.split(",")
        for (var i = 0; i < list.length; i++) {
            map[list[i]] = true
        }
        return expectsLowerCase
            ? function(val) {
                  return map[val.toLowerCase()]
              }
            : function(val) {
                  return map[val]
              }
    }

    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap("slot,component", true)

    /**
     * Check if a attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap("key,ref,slot,is")

    /**
     * Remove an item from an array
     */
    function remove(arr, item) {
        if (arr.length) {
            var index = arr.indexOf(item)
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }

    /**
     * Check whether the object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key)
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached(fn) {
        var cache = Object.create(null)
        return function cachedFn(str) {
            var hit = cache[str]
            return hit || (cache[str] = fn(str))
        }
    }

    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g
    var camelize = cached(function(str) {
        return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : ""
        })
    })

    /**
     * Capitalize a string.
     */
    var capitalize = cached(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /([^-])([A-Z])/g
    var hyphenate = cached(function(str) {
        return str
            .replace(hyphenateRE, "$1-$2")
            .replace(hyphenateRE, "$1-$2")
            .toLowerCase()
    })

    /**
     * Simple bind, faster than native
     */
    function bind(fn, ctx) {
        function boundFn(a) {
            var l = arguments.length
            return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)
        }
        // record original fn length
        boundFn._length = fn.length
        return boundFn
    }

    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray(list, start) {
        start = start || 0
        var i = list.length - start
        var ret = new Array(i)
        while (i--) {
            ret[i] = list[i + start]
        }
        return ret
    }

    /**
     * Mix properties into target object.
     */
    function extend(to, _from) {
        for (var key in _from) {
            to[key] = _from[key]
        }
        return to
    }

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject(arr) {
        var res = {}
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                extend(res, arr[i])
            }
        }
        return res
    }

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
     */
    function noop(a, b, c) {}

    /**
     * Always return false.
     */
    var no = function(a, b, c) {
        return false
    }

    /**
     * Return same value
     */
    var identity = function(_) {
        return _
    }

    /**
     * Generate a static keys string from compiler modules.
     */

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual(a, b) {
        var isObjectA = isObject(a)
        var isObjectB = isObject(b)
        if (isObjectA && isObjectB) {
            try {
                return JSON.stringify(a) === JSON.stringify(b)
            } catch (e) {
                // possible circular reference
                return a === b
            }
        } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b)
        } else {
            return false
        }
    }

    function looseIndexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
                return i
            }
        }
        return -1
    }

    /**
     * Ensure a function is called only once.
     */
    function once(fn) {
        var called = false
        return function() {
            if (!called) {
                called = true
                fn.apply(this, arguments)
            }
        }
    }

    var SSR_ATTR = "data-server-rendered"

    var ASSET_TYPES = ["component", "directive", "filter"]

    var LIFECYCLE_HOOKS = [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed",
        "activated",
        "deactivated",
        "onLaunch",
        "onLoad",
        "onShow",
        "onReady",
        "onHide",
        "onUnload",
        "onPullDownRefresh",
        "onReachBottom",
        "onShareAppMessage",
        "onPageScroll",
        "onTabItemTap",
        "attached",
        "ready",
        "moved",
        "detached",
        "onUniNViewMessage", //fixed by xxxxxx
        "onNavigationBarButtonTap" //fixed by xxxxxx
    ]

    /*  */

    var config = {
        /**
         * Option merge strategies (used in core/util/options)
         */
        optionMergeStrategies: Object.create(null),

        /**
         * Whether to suppress warnings.
         */
        silent: false,

        /**
         * Show production mode tip message on boot?
         */
        productionTip: "production" !== "production",

        /**
         * Whether to enable devtools
         */
        devtools: "production" !== "production",

        /**
         * Whether to record perf
         */
        performance: false,

        /**
         * Error handler for watcher errors
         */
        errorHandler: null,

        /**
         * Warn handler for watcher warns
         */
        warnHandler: null,

        /**
         * Ignore certain custom elements
         */
        ignoredElements: [],

        /**
         * Custom user key aliases for v-on
         */
        keyCodes: Object.create(null),

        /**
         * Check if a tag is reserved so that it cannot be registered as a
         * component. This is platform-dependent and may be overwritten.
         */
        isReservedTag: no,

        /**
         * Check if an attribute is reserved so that it cannot be used as a component
         * prop. This is platform-dependent and may be overwritten.
         */
        isReservedAttr: no,

        /**
         * Check if a tag is an unknown element.
         * Platform-dependent.
         */
        isUnknownElement: no,

        /**
         * Get the namespace of an element
         */
        getTagNamespace: noop,

        /**
         * Parse the real tag name for the specific platform.
         */
        parsePlatformTagName: identity,

        /**
         * Check if an attribute must be bound using property, e.g. value
         * Platform-dependent.
         */
        mustUseProp: no,

        /**
         * Exposed for legacy reasons
         */
        _lifecycleHooks: LIFECYCLE_HOOKS
    }

    /*  */

    var emptyObject = Object.freeze({})

    /**
     * Check if a string starts with $ or _
     */
    function isReserved(str) {
        var c = (str + "").charCodeAt(0)
        return c === 0x24 || c === 0x5f
    }

    /**
     * Define a property.
     */
    function def(obj, key, val, enumerable) {
        Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
        })
    }

    /**
     * Parse simple path.
     */
    var bailRE = /[^\w.$]/

    function parsePath(path) {
        if (bailRE.test(path)) {
            return
        }
        var segments = path.split(".")
        return function(obj) {
            for (var i = 0; i < segments.length; i++) {
                if (!obj) {
                    return
                }
                obj = obj[segments[i]]
            }
            return obj
        }
    }

    /*  */

    var warn = noop

    var formatComponentName = null // work around flow check

    /*  */

    function handleError(err, vm, info) {
        if (config.errorHandler) {
            config.errorHandler.call(null, err, vm, info)
        } else {
            if (inBrowser && typeof console !== "undefined") {
                console.error(err)
            } else {
                throw err
            }
        }
    }

    /*  */

    // can we use __proto__?
    var hasProto = "__proto__" in {}

    // Browser environment sniffing
    var inBrowser = typeof window !== "undefined"
    var UA = ["mpvue-runtime"].join()
    var isIE = UA && /msie|trident/.test(UA)
    var isIE9 = UA && UA.indexOf("msie 9.0") > 0
    var isEdge = UA && UA.indexOf("edge/") > 0
    var isAndroid = UA && UA.indexOf("android") > 0
    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

    // Firefix has a "watch" function on Object.prototype...
    var nativeWatch = {}.watch

    var supportsPassive = false
    if (inBrowser) {
        try {
            var opts = {}
            Object.defineProperty(opts, "passive", {
                get: function get() {
                    /* istanbul ignore next */
                    supportsPassive = true
                }
            }) // https://github.com/facebook/flow/issues/285
            window.addEventListener("test-passive", null, opts)
        } catch (e) {}
    }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer
    var isServerRendering = function() {
        if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && typeof global !== "undefined") {
                // detect presence of vue-server-renderer and avoid
                // Webpack shimming the process
                _isServer = global["process"].env.VUE_ENV === "server"
            } else {
                _isServer = false
            }
        }
        return _isServer
    }

    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

    /* istanbul ignore next */
    function isNative(Ctor) {
        return typeof Ctor === "function" && /native code/.test(Ctor.toString())
    }

    var hasSymbol =
        typeof Symbol !== "undefined" &&
        isNative(Symbol) &&
        typeof Reflect !== "undefined" &&
        isNative(Reflect.ownKeys)

    /**
     * Defer a task to execute it asynchronously.
     */
    var nextTick = (function() {
        var callbacks = []
        var pending = false
        var timerFunc

        function nextTickHandler() {
            pending = false
            var copies = callbacks.slice(0)
            callbacks.length = 0
            for (var i = 0; i < copies.length; i++) {
                copies[i]()
            }
        }

        // the nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore if */
        if (typeof Promise !== "undefined" && isNative(Promise)) {
            var p = Promise.resolve()
            var logError = function(err) {
                console.error(err)
            }
            timerFunc = function() {
                p.then(nextTickHandler).catch(logError)
                // in problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                if (isIOS) {
                    setTimeout(noop)
                }
            }
            // } else if (typeof MutationObserver !== 'undefined' && (
            //   isNative(MutationObserver) ||
            //   // PhantomJS and iOS 7.x
            //   MutationObserver.toString() === '[object MutationObserverConstructor]'
            // )) {
            //   // use MutationObserver where native Promise is not available,
            //   // e.g. PhantomJS IE11, iOS7, Android 4.4
            //   var counter = 1
            //   var observer = new MutationObserver(nextTickHandler)
            //   var textNode = document.createTextNode(String(counter))
            //   observer.observe(textNode, {
            //     characterData: true
            //   })
            //   timerFunc = () => {
            //     counter = (counter + 1) % 2
            //     textNode.data = String(counter)
            //   }
        } else {
            // fallback to setTimeout
            /* istanbul ignore next */
            timerFunc = function() {
                setTimeout(nextTickHandler, 0)
            }
        }

        return function queueNextTick(cb, ctx) {
            var _resolve
            callbacks.push(function() {
                if (cb) {
                    try {
                        cb.call(ctx)
                    } catch (e) {
                        handleError(e, ctx, "nextTick")
                    }
                } else if (_resolve) {
                    _resolve(ctx)
                }
            })
            if (!pending) {
                pending = true
                timerFunc()
            }
            if (!cb && typeof Promise !== "undefined") {
                return new Promise(function(resolve, reject) {
                    _resolve = resolve
                })
            }
        }
    })()

    var _Set
    /* istanbul ignore if */
    if (typeof Set !== "undefined" && isNative(Set)) {
        // use native Set when available.
        _Set = Set
    } else {
        // a non-standard Set polyfill that only works with primitive keys.
        _Set = (function() {
            function Set() {
                this.set = Object.create(null)
            }
            Set.prototype.has = function has(key) {
                return this.set[key] === true
            }
            Set.prototype.add = function add(key) {
                this.set[key] = true
            }
            Set.prototype.clear = function clear() {
                this.set = Object.create(null)
            }

            return Set
        })()
    }

    /*  */

    var uid$1 = 0

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep() {
        this.id = uid$1++
        this.subs = []
    }

    Dep.prototype.addSub = function addSub(sub) {
        this.subs.push(sub)
    }

    Dep.prototype.removeSub = function removeSub(sub) {
        remove(this.subs, sub)
    }

    Dep.prototype.depend = function depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    Dep.prototype.notify = function notify() {
        // stabilize the subscriber list first
        var subs = this.subs.slice()
        for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }

    // the current target watcher being evaluated.
    // this is globally unique because there could be only one
    // watcher being evaluated at any time.
    Dep.target = null
    var targetStack = []

    function pushTarget(_target) {
        if (Dep.target) {
            targetStack.push(Dep.target)
        }
        Dep.target = _target
    }

    function popTarget() {
        Dep.target = targetStack.pop()
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

    var arrayProto = Array.prototype
    var arrayMethods = Object.create(arrayProto)
    ;["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(method) {
        // cache original method
        var original = arrayProto[method]
        def(arrayMethods, method, function mutator() {
            var args = [],
                len = arguments.length
            while (len--) args[len] = arguments[len]

            var result = original.apply(this, args)
            var ob = this.__ob__
            var inserted
            switch (method) {
                case "push":
                case "unshift":
                    inserted = args
                    break
                case "splice":
                    inserted = args.slice(2)
                    break
            }
            if (inserted) {
                ob.observeArray(inserted)
            }
            // notify change
            ob.dep.notify()
            return result
        })
    })

    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

    /**
     * By default, when a reactive property is set, the new value is
     * also converted to become reactive. However when passing down props,
     * we don't want to force conversion because the value may be a nested value
     * under a frozen data structure. Converting it would defeat the optimization.
     */
    var observerState = {
        shouldConvert: true
    }

    /**
     * Observer class that are attached to each observed
     * object. Once attached, the observer converts target
     * object's property keys into getter/setters that
     * collect dependencies and dispatches updates.
     */
    var Observer = function Observer(value) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, "__ob__", this)
        if (Array.isArray(value)) {
            var augment = hasProto ? protoAugment : copyAugment
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    /**
     * Walk through each property and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk(obj) {
        var keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i], obj[keys[i]])
        }
    }

    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray(items) {
        for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }

    // helpers

    /**
     * Augment an target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment(target, src, keys) {
        /* eslint-disable no-proto */
        target.__proto__ = src
        /* eslint-enable no-proto */
    }

    /**
     * Augment an target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment(target, src, keys) {
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            def(target, key, src[key])
        }
    }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe(value, asRootData) {
        if (!isObject(value)) {
            return
        }
        var ob
        if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__
        } else if (
            observerState.shouldConvert &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
        ) {
            ob = new Observer(value)
        }
        if (asRootData && ob) {
            ob.vmCount++
        }
        return ob
    }

    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1(obj, key, val, customSetter, shallow) {
        var dep = new Dep()

        var property = Object.getOwnPropertyDescriptor(obj, key)
        if (property && property.configurable === false) {
            return
        }

        // cater for pre-defined getter/setters
        var getter = property && property.get
        var setter = property && property.set

        var childOb = !shallow && observe(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
                var value = getter ? getter.call(obj) : val
                if (Dep.target) {
                    dep.depend()
                    if (childOb) {
                        childOb.dep.depend()
                    }
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
                return value
            },
            set: function reactiveSetter(newVal) {
                var value = getter ? getter.call(obj) : val
                /* eslint-disable no-self-compare */
                if (newVal === value || (newVal !== newVal && value !== value)) {
                    return
                }
                /* eslint-enable no-self-compare */
                if (false) {
                    customSetter()
                }
                if (setter) {
                    setter.call(obj, newVal)
                } else {
                    val = newVal
                }
                childOb = !shallow && observe(newVal)
                dep.notify()
            }
        })
    }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set(target, key, val) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key)
            target.splice(key, 1, val)
            return val
        }
        if (hasOwn(target, key)) {
            target[key] = val
            return val
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
            "production" !== "production" &&
                warn(
                    "Avoid adding reactive properties to a Vue instance or its root $data " +
                        "at runtime - declare it upfront in the data option."
                )
            return val
        }
        if (!ob) {
            target[key] = val
            return val
        }
        defineReactive$$1(ob.value, key, val)
        ob.dep.notify()
        return val
    }

    /**
     * Delete a property and trigger change if necessary.
     */
    function del(target, key) {
        if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1)
            return
        }
        var ob = target.__ob__
        if (target._isVue || (ob && ob.vmCount)) {
            "production" !== "production" &&
                warn(
                    "Avoid deleting properties on a Vue instance or its root $data " +
                        "- just set it to null."
                )
            return
        }
        if (!hasOwn(target, key)) {
            return
        }
        delete target[key]
        if (!ob) {
            return
        }
        ob.dep.notify()
    }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray(value) {
        for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            e && e.__ob__ && e.__ob__.dep.depend()
            if (Array.isArray(e)) {
                dependArray(e)
            }
        }
    }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies

    /**
     * Options with restrictions
     */
    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData(to, from) {
        if (!from) {
            return to
        }
        var key, toVal, fromVal
        var keys = Object.keys(from)
        for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            toVal = to[key]
            fromVal = from[key]
            if (!hasOwn(to, key)) {
                set(to, key, fromVal)
            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                mergeData(toVal, fromVal)
            }
        }
        return to
    }

    /**
     * Data
     */
    function mergeDataOrFn(parentVal, childVal, vm) {
        if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
                return parentVal
            }
            if (!parentVal) {
                return childVal
            }
            // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.
            return function mergedDataFn() {
                return mergeData(
                    typeof childVal === "function" ? childVal.call(this) : childVal,
                    parentVal.call(this)
                )
            }
        } else if (parentVal || childVal) {
            return function mergedInstanceDataFn() {
                // instance merge
                var instanceData = typeof childVal === "function" ? childVal.call(vm) : childVal
                var defaultData = typeof parentVal === "function" ? parentVal.call(vm) : undefined
                if (instanceData) {
                    return mergeData(instanceData, defaultData)
                } else {
                    return defaultData
                }
            }
        }
    }

    strats.data = function(parentVal, childVal, vm) {
        if (!vm) {
            if (childVal && typeof childVal !== "function") {
                "production" !== "production" &&
                    warn(
                        'The "data" option should be a function ' +
                            "that returns a per-instance value in component " +
                            "definitions.",
                        vm
                    )

                return parentVal
            }
            return mergeDataOrFn.call(this, parentVal, childVal)
        }

        return mergeDataOrFn(parentVal, childVal, vm)
    }

    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook(parentVal, childVal) {
        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : Array.isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal
    }

    LIFECYCLE_HOOKS.forEach(function(hook) {
        strats[hook] = mergeHook
    })

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets(parentVal, childVal) {
        var res = Object.create(parentVal || null)
        return childVal ? extend(res, childVal) : res
    }

    ASSET_TYPES.forEach(function(type) {
        strats[type + "s"] = mergeAssets
    })

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function(parentVal, childVal) {
        // work around Firefox's Object.prototype.watch...
        if (parentVal === nativeWatch) {
            parentVal = undefined
        }
        if (childVal === nativeWatch) {
            childVal = undefined
        }
        /* istanbul ignore if */
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = {}
        extend(ret, parentVal)
        for (var key in childVal) {
            var parent = ret[key]
            var child = childVal[key]
            if (parent && !Array.isArray(parent)) {
                parent = [parent]
            }
            ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]
        }
        return ret
    }

    /**
     * Other object hashes.
     */
    strats.props = strats.methods = strats.inject = strats.computed = function(
        parentVal,
        childVal
    ) {
        if (!childVal) {
            return Object.create(parentVal || null)
        }
        if (!parentVal) {
            return childVal
        }
        var ret = Object.create(null)
        extend(ret, parentVal)
        extend(ret, childVal)
        return ret
    }
    strats.provide = mergeDataOrFn

    /**
     * Default strategy.
     */
    var defaultStrat = function(parentVal, childVal) {
        return childVal === undefined ? parentVal : childVal
    }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps(options) {
        var props = options.props
        if (!props) {
            return
        }
        var res = {}
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }
        options.props = res
    }

    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject(options) {
        var inject = options.inject
        if (Array.isArray(inject)) {
            var normalized = (options.inject = {})
            for (var i = 0; i < inject.length; i++) {
                normalized[inject[i]] = inject[i]
            }
        }
    }

    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives(options) {
        var dirs = options.directives
        if (dirs) {
            for (var key in dirs) {
                var def = dirs[key]
                if (typeof def === "function") {
                    dirs[key] = {
                        bind: def,
                        update: def
                    }
                }
            }
        }
    }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions(parent, child, vm) {
        if (typeof child === "function") {
            child = child.options
        }

        normalizeProps(child)
        normalizeInject(child)
        normalizeDirectives(child)
        var extendsFrom = child.extends
        if (extendsFrom) {
            parent = mergeOptions(parent, extendsFrom, vm)
        }
        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm)
            }
        }
        var options = {}
        var key
        for (key in parent) {
            mergeField(key)
        }
        for (key in child) {
            if (!hasOwn(parent, key)) {
                mergeField(key)
            }
        }

        function mergeField(key) {
            var strat = strats[key] || defaultStrat
            options[key] = strat(parent[key], child[key], vm, key)
        }
        return options
    }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset(options, type, id, warnMissing) {
        /* istanbul ignore if */
        if (typeof id !== "string") {
            return
        }
        var assets = options[type]
        // check local registration variations first
        if (hasOwn(assets, id)) {
            return assets[id]
        }
        var camelizedId = camelize(id)
        if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId]
        }
        var PascalCaseId = capitalize(camelizedId)
        if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId]
        }
        // fallback to prototype chain
        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
        if (false) {
            warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options)
        }
        return res
    }

    /*  */

    function validateProp(key, propOptions, propsData, vm) {
        var prop = propOptions[key]
        var absent = !hasOwn(propsData, key)
        var value = propsData[key]
        // handle boolean props
        if (isType(Boolean, prop.type)) {
            if (absent && !hasOwn(prop, "default")) {
                value = false
            } else if (!isType(String, prop.type) && (value === "" || value === hyphenate(key))) {
                value = true
            }
        }
        // check default value
        if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key)
            // since the default value is a fresh copy,
            // make sure to observe it.
            var prevShouldConvert = observerState.shouldConvert
            observerState.shouldConvert = true
            observe(value)
            observerState.shouldConvert = prevShouldConvert
        }
        return value
    }

    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue(vm, prop, key) {
        // no default, return undefined
        if (!hasOwn(prop, "default")) {
            return undefined
        }
        var def = prop.default
        // warn against non-factory defaults for Object & Array
        if (false) {
            warn(
                'Invalid default value for prop "' +
                    key +
                    '": ' +
                    "Props with type Object/Array must use a factory function " +
                    "to return the default value.",
                vm
            )
        }
        // the raw prop value was also undefined from previous render,
        // return previous default value to avoid unnecessary watcher trigger
        if (
            vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
        ) {
            return vm._props[key]
        }
        // call factory function for non-Function types
        // a value is Function if its prototype is function even across different execution context
        return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def
    }

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType(fn) {
        var match = fn && fn.toString().match(/^\s*function (\w+)/)
        return match ? match[1] : ""
    }

    function isType(type, fn) {
        if (!Array.isArray(fn)) {
            return getType(fn) === getType(type)
        }
        for (var i = 0, len = fn.length; i < len; i++) {
            if (getType(fn[i]) === getType(type)) {
                return true
            }
        }
        /* istanbul ignore next */
        return false
    }

    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */

    var mark
    var measure

    /*  */

    var VNode = function VNode(
        tag,
        data,
        children,
        text,
        elm,
        context,
        componentOptions,
        asyncFactory
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.functionalContext = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    }

    var prototypeAccessors = {
        child: {}
    }

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function() {
        return this.componentInstance
    }

    Object.defineProperties(VNode.prototype, prototypeAccessors)

    var createEmptyVNode = function(text) {
        if (text === void 0) text = ""

        var node = new VNode()
        node.text = text
        node.isComment = true
        return node
    }

    function createTextVNode(val) {
        return new VNode(undefined, undefined, undefined, String(val))
    }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode(vnode) {
        var cloned = new VNode(
            vnode.tag,
            vnode.data,
            vnode.children,
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
        )
        cloned.ns = vnode.ns
        cloned.isStatic = vnode.isStatic
        cloned.key = vnode.key
        cloned.isComment = vnode.isComment
        cloned.isCloned = true
        return cloned
    }

    function cloneVNodes(vnodes) {
        var len = vnodes.length
        var res = new Array(len)
        for (var i = 0; i < len; i++) {
            res[i] = cloneVNode(vnodes[i])
        }
        return res
    }

    /*  */

    var normalizeEvent = cached(function(name) {
        var passive = name.charAt(0) === "&"
        name = passive ? name.slice(1) : name
        var once$$1 = name.charAt(0) === "~" // Prefixed last, checked first
        name = once$$1 ? name.slice(1) : name
        var capture = name.charAt(0) === "!"
        name = capture ? name.slice(1) : name
        return {
            name: name,
            once: once$$1,
            capture: capture,
            passive: passive
        }
    })

    function createFnInvoker(fns) {
        function invoker() {
            var arguments$1 = arguments

            var fns = invoker.fns
            if (Array.isArray(fns)) {
                var cloned = fns.slice()
                for (var i = 0; i < cloned.length; i++) {
                    cloned[i].apply(null, arguments$1)
                }
            } else {
                // return handler return value for single handlers
                return fns.apply(null, arguments)
            }
        }
        invoker.fns = fns
        return invoker
    }

    function updateListeners(on, oldOn, add, remove$$1, vm) {
        var name, cur, old, event
        for (name in on) {
            cur = on[name]
            old = oldOn[name]
            event = normalizeEvent(name)
            if (isUndef(cur)) {
                "production" !== "production" &&
                    warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm)
            } else if (isUndef(old)) {
                if (isUndef(cur.fns)) {
                    cur = on[name] = createFnInvoker(cur)
                }
                add(event.name, cur, event.once, event.capture, event.passive)
            } else if (cur !== old) {
                old.fns = cur
                on[name] = old
            }
        }
        for (name in oldOn) {
            if (isUndef(on[name])) {
                event = normalizeEvent(name)
                remove$$1(event.name, oldOn[name], event.capture)
            }
        }
    }

    /*  */

    /*  */

    function extractPropsFromVNodeData(data, Ctor, tag) {
        // we are only extracting raw values here.
        // validation and default values are handled in the child
        // component itself.
        var propOptions = Ctor.options.props
        if (isUndef(propOptions)) {
            return
        }
        var res = {}
        var attrs = data.attrs
        var props = data.props
        if (isDef(attrs) || isDef(props)) {
            for (var key in propOptions) {
                var altKey = hyphenate(key)
                checkProp(res, props, key, altKey, true) ||
                    checkProp(res, attrs, key, altKey, false)
            }
        }
        return res
    }

    function checkProp(res, hash, key, altKey, preserve) {
        if (isDef(hash)) {
            if (hasOwn(hash, key)) {
                res[key] = hash[key]
                if (!preserve) {
                    delete hash[key]
                }
                return true
            } else if (hasOwn(hash, altKey)) {
                res[key] = hash[altKey]
                if (!preserve) {
                    delete hash[altKey]
                }
                return true
            }
        }
        return false
    }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren(children) {
        for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
                return Array.prototype.concat.apply([], children)
            }
        }
        return children
    }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren(children) {
        return isPrimitive(children)
            ? [createTextVNode(children)]
            : Array.isArray(children)
                ? normalizeArrayChildren(children)
                : undefined
    }

    function isTextNode(node) {
        return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }

    function normalizeArrayChildren(children, nestedIndex) {
        var res = []
        var i, c, last
        for (i = 0; i < children.length; i++) {
            c = children[i]
            if (isUndef(c) || typeof c === "boolean") {
                continue
            }
            last = res[res.length - 1]
            //  nested
            if (Array.isArray(c)) {
                res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || "") + "_" + i))
            } else if (isPrimitive(c)) {
                if (isTextNode(last)) {
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    last.text += String(c)
                } else if (c !== "") {
                    // convert primitive to vnode
                    res.push(createTextVNode(c))
                }
            } else {
                if (isTextNode(c) && isTextNode(last)) {
                    // merge adjacent text nodes
                    res[res.length - 1] = createTextVNode(last.text + c.text)
                } else {
                    // default key for nested array children (likely generated by v-for)
                    if (
                        isTrue(children._isVList) &&
                        isDef(c.tag) &&
                        isUndef(c.key) &&
                        isDef(nestedIndex)
                    ) {
                        c.key = "__vlist" + nestedIndex + "_" + i + "__"
                    }
                    res.push(c)
                }
            }
        }
        return res
    }

    /*  */

    function ensureCtor(comp, base) {
        if (comp.__esModule && comp.default) {
            comp = comp.default
        }
        return isObject(comp) ? base.extend(comp) : comp
    }

    function createAsyncPlaceholder(factory, data, context, children, tag) {
        var node = createEmptyVNode()
        node.asyncFactory = factory
        node.asyncMeta = {
            data: data,
            context: context,
            children: children,
            tag: tag
        }
        return node
    }

    function resolveAsyncComponent(factory, baseCtor, context) {
        if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp
        }

        if (isDef(factory.resolved)) {
            return factory.resolved
        }

        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp
        }

        if (isDef(factory.contexts)) {
            // already pending
            factory.contexts.push(context)
        } else {
            var contexts = (factory.contexts = [context])
            var sync = true

            var forceRender = function() {
                for (var i = 0, l = contexts.length; i < l; i++) {
                    contexts[i].$forceUpdate()
                }
            }

            var resolve = once(function(res) {
                // cache resolved
                factory.resolved = ensureCtor(res, baseCtor)
                // invoke callbacks only if this is not a synchronous resolve
                // (async resolves are shimmed as synchronous during SSR)
                if (!sync) {
                    forceRender()
                }
            })

            var reject = once(function(reason) {
                "production" !== "production" &&
                    warn(
                        "Failed to resolve async component: " +
                            String(factory) +
                            (reason ? "\nReason: " + reason : "")
                    )
                if (isDef(factory.errorComp)) {
                    factory.error = true
                    forceRender()
                }
            })

            var res = factory(resolve, reject)

            if (isObject(res)) {
                if (typeof res.then === "function") {
                    // () => Promise
                    if (isUndef(factory.resolved)) {
                        res.then(resolve, reject)
                    }
                } else if (isDef(res.component) && typeof res.component.then === "function") {
                    res.component.then(resolve, reject)

                    if (isDef(res.error)) {
                        factory.errorComp = ensureCtor(res.error, baseCtor)
                    }

                    if (isDef(res.loading)) {
                        factory.loadingComp = ensureCtor(res.loading, baseCtor)
                        if (res.delay === 0) {
                            factory.loading = true
                        } else {
                            setTimeout(function() {
                                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                    factory.loading = true
                                    forceRender()
                                }
                            }, res.delay || 200)
                        }
                    }

                    if (isDef(res.timeout)) {
                        setTimeout(function() {
                            if (isUndef(factory.resolved)) {
                                reject(null)
                            }
                        }, res.timeout)
                    }
                }
            }

            sync = false
            // return in case resolved synchronously
            return factory.loading ? factory.loadingComp : factory.resolved
        }
    }

    /*  */

    function getFirstComponentChild(children) {
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                var c = children[i]
                if (isDef(c) && isDef(c.componentOptions)) {
                    return c
                }
            }
        }
    }

    /*  */

    /*  */

    function initEvents(vm) {
        vm._events = Object.create(null)
        vm._hasHookEvent = false
        // init parent attached events
        var listeners = vm.$options._parentListeners
        if (listeners) {
            updateComponentListeners(vm, listeners)
        }
    }

    var target

    function add(event, fn, once$$1) {
        if (once$$1) {
            target.$once(event, fn)
        } else {
            target.$on(event, fn)
        }
    }

    function remove$1(event, fn) {
        target.$off(event, fn)
    }

    function updateComponentListeners(vm, listeners, oldListeners) {
        target = vm
        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)
    }

    function eventsMixin(Vue) {
        var hookRE = /^hook:/
        Vue.prototype.$on = function(event, fn) {
            var this$1 = this

            var vm = this
            if (Array.isArray(event)) {
                for (var i = 0, l = event.length; i < l; i++) {
                    this$1.$on(event[i], fn)
                }
            } else {
                ;(vm._events[event] || (vm._events[event] = [])).push(fn)
                // optimize hook:event cost by using a boolean flag marked at registration
                // instead of a hash lookup
                if (hookRE.test(event)) {
                    vm._hasHookEvent = true
                }
            }
            return vm
        }

        Vue.prototype.$once = function(event, fn) {
            var vm = this

            function on() {
                vm.$off(event, on)
                fn.apply(vm, arguments)
            }
            on.fn = fn
            vm.$on(event, on)
            return vm
        }

        Vue.prototype.$off = function(event, fn) {
            var this$1 = this

            var vm = this
            // all
            if (!arguments.length) {
                vm._events = Object.create(null)
                return vm
            }
            // array of events
            if (Array.isArray(event)) {
                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                    this$1.$off(event[i$1], fn)
                }
                return vm
            }
            // specific event
            var cbs = vm._events[event]
            if (!cbs) {
                return vm
            }
            if (arguments.length === 1) {
                vm._events[event] = null
                return vm
            }
            // specific handler
            var cb
            var i = cbs.length
            while (i--) {
                cb = cbs[i]
                if (cb === fn || cb.fn === fn) {
                    cbs.splice(i, 1)
                    break
                }
            }
            return vm
        }

        Vue.prototype.$emit = function(event) {
            var vm = this
            var cbs = vm._events[event]
            if (cbs) {
                cbs = cbs.length > 1 ? toArray(cbs) : cbs
                var args = toArray(arguments, 1)
                for (var i = 0, l = cbs.length; i < l; i++) {
                    try {
                        cbs[i].apply(vm, args)
                    } catch (e) {
                        handleError(e, vm, 'event handler for "' + event + '"')
                    }
                }
            }
            return vm
        }
    }

    /*  */

    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots(children, context) {
        var slots = {}
        if (!children) {
            return slots
        }
        var defaultSlot = []
        for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i]
            // named slots should only be respected if the vnode was rendered in the
            // same context.
            if (
                (child.context === context || child.functionalContext === context) &&
                child.data &&
                child.data.slot != null
            ) {
                var name = child.data.slot
                var slot = slots[name] || (slots[name] = [])
                if (child.tag === "template") {
                    slot.push.apply(slot, child.children)
                } else {
                    slot.push(child)
                }
            } else {
                defaultSlot.push(child)
            }
        }
        // ignore whitespace
        if (!defaultSlot.every(isWhitespace)) {
            slots.default = defaultSlot
        }
        return slots
    }

    function isWhitespace(node) {
        return node.isComment || node.text === " "
    }

    function resolveScopedSlots(
        fns, // see flow/vnode
        res
    ) {
        res = res || {}
        for (var i = 0; i < fns.length; i++) {
            if (Array.isArray(fns[i])) {
                resolveScopedSlots(fns[i], res)
            } else {
                res[fns[i].key] = fns[i].fn
            }
        }
        return res
    }

    /*  */

    var activeInstance = null

    function initLifecycle(vm) {
        var options = vm.$options

        // locate first non-abstract parent
        var parent = options.parent
        if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
                parent = parent.$parent
            }
            parent.$children.push(vm)
        }

        vm.$parent = parent
        vm.$root = parent ? parent.$root : vm

        vm.$children = []
        vm.$refs = {}

        vm._watcher = null
        vm._inactive = null
        vm._directInactive = false
        vm._isMounted = false
        vm._isDestroyed = false
        vm._isBeingDestroyed = false
    }

    function lifecycleMixin(Vue) {
        Vue.prototype._update = function(vnode, hydrating) {
            var vm = this
            if (vm._isMounted) {
                callHook(vm, "beforeUpdate")
            }
            var prevEl = vm.$el
            var prevVnode = vm._vnode
            var prevActiveInstance = activeInstance
            activeInstance = vm
            vm._vnode = vnode
            // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.
            if (!prevVnode) {
                // initial render
                vm.$el = vm.__patch__(
                    vm.$el,
                    vnode,
                    hydrating,
                    false /* removeOnly */,
                    vm.$options._parentElm,
                    vm.$options._refElm
                )
                // no need for the ref nodes after initial patch
                // this prevents keeping a detached DOM tree in memory (#5851)
                vm.$options._parentElm = vm.$options._refElm = null
            } else {
                // updates
                vm.$el = vm.__patch__(prevVnode, vnode)
            }
            activeInstance = prevActiveInstance
            // update __vue__ reference
            if (prevEl) {
                prevEl.__vue__ = null
            }
            if (vm.$el) {
                vm.$el.__vue__ = vm
            }
            // if parent is an HOC, update its $el as well
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                vm.$parent.$el = vm.$el
            }
            // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
        }

        Vue.prototype.$forceUpdate = function() {
            var vm = this
            if (vm._watcher) {
                vm._watcher.update()
            }
        }

        Vue.prototype.$destroy = function() {
            var vm = this
            if (vm._isBeingDestroyed) {
                return
            }
            callHook(vm, "beforeDestroy")
            vm._isBeingDestroyed = true
            // remove self from parent
            var parent = vm.$parent
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                remove(parent.$children, vm)
            }
            // teardown watchers
            if (vm._watcher) {
                vm._watcher.teardown()
            }
            var i = vm._watchers.length
            while (i--) {
                vm._watchers[i].teardown()
            }
            // remove reference from data ob
            // frozen object may not have observer.
            if (vm._data.__ob__) {
                vm._data.__ob__.vmCount--
            }
            // call the last hook...
            vm._isDestroyed = true
            // invoke destroy hooks on current rendered tree
            vm.__patch__(vm._vnode, null)
            // fire destroyed hook
            callHook(vm, "destroyed")
            // turn off all instance listeners.
            vm.$off()
            // remove __vue__ reference
            if (vm.$el) {
                vm.$el.__vue__ = null
            }
        }
    }

    function mountComponent(vm, el, hydrating) {
        vm.$el = el
        if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode
        }
        callHook(vm, "beforeMount")

        var updateComponent
        /* istanbul ignore if */
        if (false) {
            updateComponent = function() {
                var name = vm._name
                var id = vm._uid
                var startTag = "vue-perf-start:" + id
                var endTag = "vue-perf-end:" + id

                mark(startTag)
                var vnode = vm._render()
                mark(endTag)
                measure(name + " render", startTag, endTag)

                mark(startTag)
                vm._update(vnode, hydrating)
                mark(endTag)
                measure(name + " patch", startTag, endTag)
            }
        } else {
            updateComponent = function() {
                vm._update(vm._render(), hydrating)
            }
        }

        vm._watcher = new Watcher(vm, updateComponent, noop)
        hydrating = false

        // manually mounted instance, call mounted on self
        // mounted is called for render-created child components in its inserted hook
        if (vm.$vnode == null) {
            vm._isMounted = true
            callHook(vm, "mounted")
        }
        return vm
    }

    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
        var hasChildren = !!(
            renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            parentVnode.data.scopedSlots || // has new scoped slots
            vm.$scopedSlots !== emptyObject
        ) // has old scoped slots

        vm.$options._parentVnode = parentVnode
        vm.$vnode = parentVnode // update vm's placeholder node without re-render

        if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode
        }
        vm.$options._renderChildren = renderChildren

        // update $attrs and $listensers hash
        // these are also reactive so they may trigger child update if the child
        // used them during render
        vm.$attrs = parentVnode.data && parentVnode.data.attrs
        vm.$listeners = listeners

        // update props
        if (propsData && vm.$options.props) {
            observerState.shouldConvert = false
            var props = vm._props
            var propKeys = vm.$options._propKeys || []
            for (var i = 0; i < propKeys.length; i++) {
                var key = propKeys[i]
                props[key] = validateProp(key, vm.$options.props, propsData, vm)
            }
            observerState.shouldConvert = true
            // keep a copy of raw propsData
            vm.$options.propsData = propsData
        }

        // update listeners
        if (listeners) {
            var oldListeners = vm.$options._parentListeners
            vm.$options._parentListeners = listeners
            updateComponentListeners(vm, listeners, oldListeners)
        }
        // resolve slots + force update if has children
        if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context)
            vm.$forceUpdate()
        }
    }

    function isInInactiveTree(vm) {
        while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
                return true
            }
        }
        return false
    }

    function activateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = false
            if (isInInactiveTree(vm)) {
                return
            }
        } else if (vm._directInactive) {
            return
        }
        if (vm._inactive || vm._inactive === null) {
            vm._inactive = false
            for (var i = 0; i < vm.$children.length; i++) {
                activateChildComponent(vm.$children[i])
            }
            callHook(vm, "activated")
        }
    }

    function deactivateChildComponent(vm, direct) {
        if (direct) {
            vm._directInactive = true
            if (isInInactiveTree(vm)) {
                return
            }
        }
        if (!vm._inactive) {
            vm._inactive = true
            for (var i = 0; i < vm.$children.length; i++) {
                deactivateChildComponent(vm.$children[i])
            }
            callHook(vm, "deactivated")
        }
    }

    function callHook(vm, hook) {
        var handlers = vm.$options[hook]
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    handlers[i].call(vm)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }
    }

    /*  */

    var MAX_UPDATE_COUNT = 100

    var queue = []
    var activatedChildren = []
    var has = {}
    var circular = {}
    var waiting = false
    var flushing = false
    var index = 0

    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState() {
        index = queue.length = activatedChildren.length = 0
        has = {}
        waiting = flushing = false
    }

    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue() {
        flushing = true
        var watcher, id

        // Sort queue before flush.
        // This ensures that:
        // 1. Components are updated from parent to child. (because parent is always
        //    created before the child)
        // 2. A component's user watchers are run before its render watcher (because
        //    user watchers are created before the render watcher)
        // 3. If a component is destroyed during a parent component's watcher run,
        //    its watchers can be skipped.
        queue.sort(function(a, b) {
            return a.id - b.id
        })

        // do not cache length because more watchers might be pushed
        // as we run existing watchers
        for (index = 0; index < queue.length; index++) {
            watcher = queue[index]
            id = watcher.id
            has[id] = null
            watcher.run()
            // in dev build, check and stop circular updates.
            if (false) {
                circular[id] = (circular[id] || 0) + 1
                if (circular[id] > MAX_UPDATE_COUNT) {
                    warn(
                        "You may have an infinite update loop " +
                            (watcher.user
                                ? 'in watcher with expression "' + watcher.expression + '"'
                                : "in a component render function."),
                        watcher.vm
                    )
                    break
                }
            }
        }

        // keep copies of post queues before resetting state
        var activatedQueue = activatedChildren.slice()
        var updatedQueue = queue.slice()

        resetSchedulerState()

        // call component updated and activated hooks
        callActivatedHooks(activatedQueue)
        callUpdatedHooks(updatedQueue)

        // devtool hook
        /* istanbul ignore if */
        if (devtools && config.devtools) {
            devtools.emit("flush")
        }
    }

    function callUpdatedHooks(queue) {
        var i = queue.length
        while (i--) {
            var watcher = queue[i]
            var vm = watcher.vm
            if (vm._watcher === watcher && vm._isMounted) {
                callHook(vm, "updated")
            }
        }
    }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent(vm) {
        // setting _inactive to false here so that a render function can
        // rely on checking whether it's in an inactive tree (e.g. router-view)
        vm._inactive = false
        activatedChildren.push(vm)
    }

    function callActivatedHooks(queue) {
        for (var i = 0; i < queue.length; i++) {
            queue[i]._inactive = true
            activateChildComponent(queue[i], true /* true */)
        }
    }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher(watcher) {
        var id = watcher.id
        if (has[id] == null) {
            has[id] = true
            if (!flushing) {
                queue.push(watcher)
            } else {
                // if already flushing, splice the watcher based on its id
                // if already past its id, it will be run next immediately.
                var i = queue.length - 1
                while (i > index && queue[i].id > watcher.id) {
                    i--
                }
                queue.splice(i + 1, 0, watcher)
            }
            // queue the flush
            if (!waiting) {
                waiting = true
                nextTick(flushSchedulerQueue)
            }
        }
    }

    /*  */

    var uid$2 = 0

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher(vm, expOrFn, cb, options) {
        this.vm = vm
        vm._watchers.push(this)
        // options
        if (options) {
            this.deep = !!options.deep
            this.user = !!options.user
            this.lazy = !!options.lazy
            this.sync = !!options.sync
        } else {
            this.deep = this.user = this.lazy = this.sync = false
        }
        this.cb = cb
        this.id = ++uid$2 // uid for batching
        this.active = true
        this.dirty = this.lazy // for lazy watchers
        this.deps = []
        this.newDeps = []
        this.depIds = new _Set()
        this.newDepIds = new _Set()
        this.expression = ""
        // parse expression for getter
        if (typeof expOrFn === "function") {
            this.getter = expOrFn
        } else {
            this.getter = parsePath(expOrFn)
            if (!this.getter) {
                this.getter = function() {}
                "production" !== "production" &&
                    warn(
                        'Failed watching path: "' +
                            expOrFn +
                            '" ' +
                            "Watcher only accepts simple dot-delimited paths. " +
                            "For full control, use a function instead.",
                        vm
                    )
            }
        }
        this.value = this.lazy ? undefined : this.get()
    }

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get() {
        pushTarget(this)
        var value
        var vm = this.vm
        try {
            value = this.getter.call(vm, vm)
        } catch (e) {
            if (this.user) {
                handleError(e, vm, 'getter for watcher "' + this.expression + '"')
            } else {
                throw e
            }
        } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
                traverse(value)
            }
            popTarget()
            this.cleanupDeps()
        }
        return value
    }

    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep(dep) {
        var id = dep.id
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id)
            this.newDeps.push(dep)
            if (!this.depIds.has(id)) {
                dep.addSub(this)
            }
        }
    }

    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            var dep = this$1.deps[i]
            if (!this$1.newDepIds.has(dep.id)) {
                dep.removeSub(this$1)
            }
        }
        var tmp = this.depIds
        this.depIds = this.newDepIds
        this.newDepIds = tmp
        this.newDepIds.clear()
        tmp = this.deps
        this.deps = this.newDeps
        this.newDeps = tmp
        this.newDeps.length = 0
    }

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update() {
        /* istanbul ignore else */
        if (this.lazy) {
            this.dirty = true
        } else if (this.sync) {
            this.run()
        } else {
            queueWatcher(this)
        }
    }

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run() {
        if (this.active) {
            var value = this.get()
            if (
                value !== this.value ||
                // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                isObject(value) ||
                this.deep
            ) {
                // set new value
                var oldValue = this.value
                this.value = value
                if (this.user) {
                    try {
                        this.cb.call(this.vm, value, oldValue)
                    } catch (e) {
                        handleError(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                } else {
                    this.cb.call(this.vm, value, oldValue)
                }
            }
        }
    }

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate() {
        this.value = this.get()
        this.dirty = false
    }

    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend() {
        var this$1 = this

        var i = this.deps.length
        while (i--) {
            this$1.deps[i].depend()
        }
    }

    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown() {
        var this$1 = this

        if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
                remove(this.vm._watchers, this)
            }
            var i = this.deps.length
            while (i--) {
                this$1.deps[i].removeSub(this$1)
            }
            this.active = false
        }
    }

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    var seenObjects = new _Set()

    function traverse(val) {
        seenObjects.clear()
        _traverse(val, seenObjects)
    }

    function _traverse(val, seen) {
        var i, keys
        var isA = Array.isArray(val)
        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
            return
        }
        if (val.__ob__) {
            var depId = val.__ob__.dep.id
            if (seen.has(depId)) {
                return
            }
            seen.add(depId)
        }
        if (isA) {
            i = val.length
            while (i--) {
                _traverse(val[i], seen)
            }
        } else {
            keys = Object.keys(val)
            i = keys.length
            while (i--) {
                _traverse(val[keys[i]], seen)
            }
        }
    }

    /*  */

    var sharedPropertyDefinition = {
        enumerable: true,
        configurable: true,
        get: noop,
        set: noop
    }

    function proxy(target, sourceKey, key) {
        sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key]
        }
        sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function initState(vm) {
        vm._watchers = []
        var opts = vm.$options
        if (opts.props) {
            initProps(vm, opts.props)
        }
        if (opts.methods) {
            initMethods(vm, opts.methods)
        }
        if (opts.data) {
            initData(vm)
        } else {
            observe((vm._data = {}), true /* asRootData */)
        }
        if (opts.computed) {
            initComputed(vm, opts.computed)
        }
        if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch)
        }
    }

    function checkOptionType(vm, name) {
        var option = vm.$options[name]
        if (!isPlainObject(option)) {
            warn('component option "' + name + '" should be an object.', vm)
        }
    }

    function initProps(vm, propsOptions) {
        var propsData = vm.$options.propsData || {}
        var props = (vm._props = {})
        // cache prop keys so that future props updates can iterate using Array
        // instead of dynamic object key enumeration.
        var keys = (vm.$options._propKeys = [])
        var isRoot = !vm.$parent
        // root instance props should be converted
        observerState.shouldConvert = isRoot
        var loop = function(key) {
            keys.push(key)
            var value = validateProp(key, propsOptions, propsData, vm)
            /* istanbul ignore else */
            {
                defineReactive$$1(props, key, value)
            }
            // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.
            if (!(key in vm)) {
                proxy(vm, "_props", key)
            }
        }

        for (var key in propsOptions) loop(key)
        observerState.shouldConvert = true
    }

    function initData(vm) {
        var data = vm.$options.data
        data = vm._data = typeof data === "function" ? getData(data, vm) : data || {}
        if (!isPlainObject(data)) {
            data = {}
            "production" !== "production" &&
                warn(
                    "data functions should return an object:\n" +
                        "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function",
                    vm
                )
        }
        // proxy data on instance
        var keys = Object.keys(data)
        var props = vm.$options.props
        var methods = vm.$options.methods
        var i = keys.length
        while (i--) {
            var key = keys[i]
            if (props && hasOwn(props, key)) {
                "production" !== "production" &&
                    warn(
                        'The data property "' +
                            key +
                            '" is already declared as a prop. ' +
                            "Use prop default value instead.",
                        vm
                    )
            } else if (!isReserved(key)) {
                proxy(vm, "_data", key)
            }
        }
        // observe data
        observe(data, true /* asRootData */)
    }

    function getData(data, vm) {
        try {
            return data.call(vm)
        } catch (e) {
            handleError(e, vm, "data()")
            return {}
        }
    }

    var computedWatcherOptions = {
        lazy: true
    }

    function initComputed(vm, computed) {
        "production" !== "production" && checkOptionType(vm, "computed")
        var watchers = (vm._computedWatchers = Object.create(null))

        for (var key in computed) {
            var userDef = computed[key]
            var getter = typeof userDef === "function" ? userDef : userDef.get
            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)

            // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.
            if (!(key in vm)) {
                defineComputed(vm, key, userDef)
            } else {
            }
        }
    }

    function defineComputed(target, key, userDef) {
        if (typeof userDef === "function") {
            sharedPropertyDefinition.get = createComputedGetter(key)
            sharedPropertyDefinition.set = noop
        } else {
            sharedPropertyDefinition.get = userDef.get
                ? userDef.cache !== false
                    ? createComputedGetter(key)
                    : userDef.get
                : noop
            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop
        }
        Object.defineProperty(target, key, sharedPropertyDefinition)
    }

    function createComputedGetter(key) {
        return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key]
            if (watcher) {
                if (watcher.dirty) {
                    watcher.evaluate()
                }
                if (Dep.target) {
                    watcher.depend()
                }
                return watcher.value
            }
        }
    }

    function initMethods(vm, methods) {
        "production" !== "production" && checkOptionType(vm, "methods")
        var props = vm.$options.props
        for (var key in methods) {
            vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
        }
    }

    function initWatch(vm, watch) {
        "production" !== "production" && checkOptionType(vm, "watch")
        for (var key in watch) {
            var handler = watch[key]
            if (Array.isArray(handler)) {
                for (var i = 0; i < handler.length; i++) {
                    createWatcher(vm, key, handler[i])
                }
            } else {
                createWatcher(vm, key, handler)
            }
        }
    }

    function createWatcher(vm, keyOrFn, handler, options) {
        if (isPlainObject(handler)) {
            options = handler
            handler = handler.handler
        }
        if (typeof handler === "string") {
            handler = vm[handler]
        }
        return vm.$watch(keyOrFn, handler, options)
    }

    function stateMixin(Vue) {
        // flow somehow has problems with directly declared definition object
        // when using Object.defineProperty, so we have to procedurally build up
        // the object here.
        var dataDef = {}
        dataDef.get = function() {
            return this._data
        }
        var propsDef = {}
        propsDef.get = function() {
            return this._props
        }
        Object.defineProperty(Vue.prototype, "$data", dataDef)
        Object.defineProperty(Vue.prototype, "$props", propsDef)

        Vue.prototype.$set = set
        Vue.prototype.$delete = del

        Vue.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this
            if (isPlainObject(cb)) {
                return createWatcher(vm, expOrFn, cb, options)
            }
            options = options || {}
            options.user = true
            var watcher = new Watcher(vm, expOrFn, cb, options)
            if (options.immediate) {
                cb.call(vm, watcher.value)
            }
            return function unwatchFn() {
                watcher.teardown()
            }
        }
    }

    /*  */

    function initProvide(vm) {
        var provide = vm.$options.provide
        if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide
        }
    }

    function initInjections(vm) {
        var result = resolveInject(vm.$options.inject, vm)
        if (result) {
            observerState.shouldConvert = false
            Object.keys(result).forEach(function(key) {
                /* istanbul ignore else */
                {
                    defineReactive$$1(vm, key, result[key])
                }
            })
            observerState.shouldConvert = true
        }
    }

    function resolveInject(inject, vm) {
        if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            var result = Object.create(null)
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)

            for (var i = 0; i < keys.length; i++) {
                var key = keys[i]
                var provideKey = inject[key]
                var source = vm
                while (source) {
                    if (source._provided && provideKey in source._provided) {
                        result[key] = source._provided[provideKey]
                        break
                    }
                    source = source.$parent
                }
                if (false) {
                    warn('Injection "' + key + '" not found', vm)
                }
            }
            return result
        }
    }

    /*  */

    function createFunctionalComponent(Ctor, propsData, data, context, children) {
        var props = {}
        var propOptions = Ctor.options.props
        if (isDef(propOptions)) {
            for (var key in propOptions) {
                props[key] = validateProp(key, propOptions, propsData || {})
            }
        } else {
            if (isDef(data.attrs)) {
                mergeProps(props, data.attrs)
            }
            if (isDef(data.props)) {
                mergeProps(props, data.props)
            }
        }
        // ensure the createElement function in functional components
        // gets a unique context - this is necessary for correct named slot check
        var _context = Object.create(context)
        var h = function(a, b, c, d) {
            return createElement(_context, a, b, c, d, true)
        }
        var vnode = Ctor.options.render.call(null, h, {
            data: data,
            props: props,
            children: children,
            parent: context,
            listeners: data.on || {},
            injections: resolveInject(Ctor.options.inject, context),
            slots: function() {
                return resolveSlots(children, context)
            }
        })
        if (vnode instanceof VNode) {
            vnode.functionalContext = context
            vnode.functionalOptions = Ctor.options
            if (data.slot) {
                ;(vnode.data || (vnode.data = {})).slot = data.slot
            }
        }
        return vnode
    }

    function mergeProps(to, from) {
        for (var key in from) {
            to[camelize(key)] = from[key]
        }
    }

    /*  */

    // hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
        init: function init(vnode, hydrating, parentElm, refElm) {
            if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
                var child = (vnode.componentInstance = createComponentInstanceForVnode(
                    vnode,
                    activeInstance,
                    parentElm,
                    refElm
                ))
                child.$mount(hydrating ? vnode.elm : undefined, hydrating)
            } else if (vnode.data.keepAlive) {
                // kept-alive components, treat as a patch
                var mountedNode = vnode // work around flow
                componentVNodeHooks.prepatch(mountedNode, mountedNode)
            }
        },

        prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions
            var child = (vnode.componentInstance = oldVnode.componentInstance)
            updateChildComponent(
                child,
                options.propsData, // updated props
                options.listeners, // updated listeners
                vnode, // new parent vnode
                options.children // new children
            )
        },

        insert: function insert(vnode) {
            var context = vnode.context
            var componentInstance = vnode.componentInstance

            if (!componentInstance._isMounted) {
                componentInstance._isMounted = true
                callHook(componentInstance, "mounted")
            }
            if (vnode.data.keepAlive) {
                if (context._isMounted) {
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
                    queueActivatedComponent(componentInstance)
                } else {
                    activateChildComponent(componentInstance, true /* direct */)
                }
            }
        },

        destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance
            if (!componentInstance._isDestroyed) {
                if (!vnode.data.keepAlive) {
                    componentInstance.$destroy()
                } else {
                    deactivateChildComponent(componentInstance, true /* direct */)
                }
            }
        }
    }

    var hooksToMerge = Object.keys(componentVNodeHooks)

    function createComponent(Ctor, data, context, children, tag) {
        if (isUndef(Ctor)) {
            return
        }

        var baseCtor = context.$options._base

        // plain options object: turn it into a constructor
        if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor)
        }

        // if at this stage it's not a constructor or an async component factory,
        // reject.
        if (typeof Ctor !== "function") {
            return
        }

        // async component
        var asyncFactory
        if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)
            if (Ctor === undefined) {
                // return a placeholder node for async component, which is rendered
                // as a comment node but preserves all the raw information for the node.
                // the information will be used for async server-rendering and hydration.
                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)
            }
        }

        data = data || {}

        // resolve constructor options in case global mixins are applied after
        // component constructor creation
        resolveConstructorOptions(Ctor)

        // transform component v-model data into props & events
        if (isDef(data.model)) {
            transformModel(Ctor.options, data)
        }

        // extract props
        var propsData = extractPropsFromVNodeData(data, Ctor, tag)

        // functional component
        if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children)
        }

        // keep listeners
        var listeners = data.on

        if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot

            // work around flow
            var slot = data.slot
            data = {}
            if (slot) {
                data.slot = slot
            }
        }

        // merge component management hooks onto the placeholder node
        mergeHooks(data)

        // return a placeholder vnode
        var name = Ctor.options.name || tag
        var vnode = new VNode(
            "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
            data,
            undefined,
            undefined,
            undefined,
            context,
            {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            },
            asyncFactory
        )
        return vnode
    }

    function createComponentInstanceForVnode(
        vnode, // we know it's MountedComponentVNode but flow doesn't
        parent, // activeInstance in lifecycle state
        parentElm,
        refElm
    ) {
        var vnodeComponentOptions = vnode.componentOptions
        var options = {
            _isComponent: true,
            parent: parent,
            propsData: vnodeComponentOptions.propsData,
            _componentTag: vnodeComponentOptions.tag,
            _parentVnode: vnode,
            _parentListeners: vnodeComponentOptions.listeners,
            _renderChildren: vnodeComponentOptions.children,
            _parentElm: parentElm || null,
            _refElm: refElm || null
        }
        // check inline-template render functions
        var inlineTemplate = vnode.data.inlineTemplate
        if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render
            options.staticRenderFns = inlineTemplate.staticRenderFns
        }
        return new vnodeComponentOptions.Ctor(options)
    }

    function mergeHooks(data) {
        if (!data.hook) {
            data.hook = {}
        }
        for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i]
            var fromParent = data.hook[key]
            var ours = componentVNodeHooks[key]
            data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
        }
    }

    function mergeHook$1(one, two) {
        return function(a, b, c, d) {
            one(a, b, c, d)
            two(a, b, c, d)
        }
    }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel(options, data) {
        var prop = (options.model && options.model.prop) || "value"
        var event = (options.model && options.model.event) || "input"
        ;(data.props || (data.props = {}))[prop] = data.model.value
        var on = data.on || (data.on = {})
        if (isDef(on[event])) {
            on[event] = [data.model.callback].concat(on[event])
        } else {
            on[event] = data.model.callback
        }
    }

    /*  */

    var SIMPLE_NORMALIZE = 1
    var ALWAYS_NORMALIZE = 2

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
        if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children
            children = data
            data = undefined
        }
        if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE
        }
        return _createElement(context, tag, data, children, normalizationType)
    }

    function _createElement(context, tag, data, children, normalizationType) {
        if (isDef(data) && isDef(data.__ob__)) {
            "production" !== "production" &&
                warn(
                    "Avoid using observed data object as vnode data: " +
                        JSON.stringify(data) +
                        "\n" +
                        "Always create fresh vnode data objects in each render!",
                    context
                )
            return createEmptyVNode()
        }
        // object syntax in v-bind
        if (isDef(data) && isDef(data.is)) {
            tag = data.is
        }
        if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode()
        }
        // warn against non-primitive key
        if (
            false
        ) {
            warn(
                "Avoid using non-primitive value as key, " + "use string/number value instead.",
                context
            )
        }
        // support single function children as default scoped slot
        if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {}
            data.scopedSlots = {
                default: children[0]
            }
            children.length = 0
        }
        if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children)
        } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children)
        }
        var vnode, ns
        if (typeof tag === "string") {
            var Ctor
            ns = config.getTagNamespace(tag)
            if (config.isReservedTag(tag)) {
                // platform built-in elements
                vnode = new VNode(
                    config.parsePlatformTagName(tag),
                    data,
                    children,
                    undefined,
                    undefined,
                    context
                )
            } else if (isDef((Ctor = resolveAsset(context.$options, "components", tag)))) {
                // component
                vnode = createComponent(Ctor, data, context, children, tag)
            } else {
                // unknown or unlisted namespaced elements
                // check at runtime because it may get assigned a namespace when its
                // parent normalizes children
                vnode = new VNode(tag, data, children, undefined, undefined, context)
            }
        } else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children)
        }
        if (isDef(vnode)) {
            if (ns) {
                applyNS(vnode, ns)
            }
            return vnode
        } else {
            return createEmptyVNode()
        }
    }

    function applyNS(vnode, ns) {
        vnode.ns = ns
        if (vnode.tag === "foreignObject") {
            // use default namespace inside foreignObject
            return
        }
        if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
                var child = vnode.children[i]
                if (isDef(child.tag) && isUndef(child.ns)) {
                    applyNS(child, ns)
                }
            }
        }
    }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList(val, render) {
        var ret, i, l, keys, key
        if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length)
            for (i = 0, l = val.length; i < l; i++) {
                ret[i] = render(val[i], i)
            }
        } else if (typeof val === "number") {
            ret = new Array(val)
            for (i = 0; i < val; i++) {
                ret[i] = render(i + 1, i)
            }
        } else if (isObject(val)) {
            keys = Object.keys(val)
            ret = new Array(keys.length)
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i]
                ret[i] = render(val[key], key, i)
            }
        }
        if (isDef(ret)) {
            ret._isVList = true
        }
        return ret
    }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot(name, fallback, props, bindObject) {
        var scopedSlotFn = this.$scopedSlots[name]
        if (scopedSlotFn) {
            // scoped slot
            props = props || {}
            if (bindObject) {
                props = extend(extend({}, bindObject), props)
            }
            return scopedSlotFn(props) || fallback
        } else {
            var slotNodes = this.$slots[name]
            // warn duplicate slot usage
            if (slotNodes && "production" !== "production") {
                slotNodes._rendered &&
                    warn(
                        'Duplicate presence of slot "' +
                            name +
                            '" found in the same render tree ' +
                            "- this will likely cause render errors.",
                        this
                    )
                slotNodes._rendered = true
            }
            return slotNodes || fallback
        }
    }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter(id) {
        return resolveAsset(this.$options, "filters", id, true) || identity
    }

    /*  */

    /**
     * Runtime helper for checking keyCodes from config.
     */
    function checkKeyCodes(eventKeyCode, key, builtInAlias) {
        var keyCodes = config.keyCodes[key] || builtInAlias
        if (Array.isArray(keyCodes)) {
            return keyCodes.indexOf(eventKeyCode) === -1
        } else {
            return keyCodes !== eventKeyCode
        }
    }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps(data, tag, value, asProp, isSync) {
        if (value) {
            if (!isObject(value)) {
                "production" !== "production" &&
                    warn("v-bind without argument expects an Object or Array value", this)
            } else {
                if (Array.isArray(value)) {
                    value = toObject(value)
                }
                var hash
                var loop = function(key) {
                    if (key === "class" || key === "style" || isReservedAttribute(key)) {
                        hash = data
                    } else {
                        var type = data.attrs && data.attrs.type
                        hash =
                            asProp || config.mustUseProp(tag, type, key)
                                ? data.domProps || (data.domProps = {})
                                : data.attrs || (data.attrs = {})
                    }
                    if (!(key in hash)) {
                        hash[key] = value[key]

                        if (isSync) {
                            var on = data.on || (data.on = {})
                            on["update:" + key] = function($event) {
                                value[key] = $event
                            }
                        }
                    }
                }

                for (var key in value) loop(key)
            }
        }
        return data
    }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic(index, isInFor) {
        var tree = this._staticTrees[index]
        // if has already-rendered static tree and not inside v-for,
        // we can reuse the same tree by doing a shallow clone.
        if (tree && !isInFor) {
            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)
        }
        // otherwise, render a fresh tree.
        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(
            this._renderProxy
        )
        markStatic(tree, "__static__" + index, false)
        return tree
    }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce(tree, index, key) {
        markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true)
        return tree
    }

    function markStatic(tree, key, isOnce) {
        if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
                if (tree[i] && typeof tree[i] !== "string") {
                    markStaticNode(tree[i], key + "_" + i, isOnce)
                }
            }
        } else {
            markStaticNode(tree, key, isOnce)
        }
    }

    function markStaticNode(node, key, isOnce) {
        node.isStatic = true
        node.key = key
        node.isOnce = isOnce
    }

    /*  */

    function bindObjectListeners(data, value) {
        if (value) {
            if (!isPlainObject(value)) {
                "production" !== "production" &&
                    warn("v-on without argument expects an Object value", this)
            } else {
                var on = (data.on = data.on ? extend({}, data.on) : {})
                for (var key in value) {
                    var existing = on[key]
                    var ours = value[key]
                    on[key] = existing ? [].concat(ours, existing) : ours
                }
            }
        }
        return data
    }

    /*  */

    function initRender(vm) {
        vm._vnode = null // the root of the child tree
        vm._staticTrees = null
        var parentVnode = (vm.$vnode = vm.$options._parentVnode) // the placeholder node in parent tree
        var renderContext = parentVnode && parentVnode.context
        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)
        vm.$scopedSlots = emptyObject
        // bind the createElement fn to this instance
        // so that we get proper render context inside it.
        // args order: tag, data, children, normalizationType, alwaysNormalize
        // internal version is used by render functions compiled from templates
        vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false)
        }
        // normalization is always applied for the public version, used in
        // user-written render functions.
        vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true)
        }

        // $attrs & $listeners are exposed for easier HOC creation.
        // they need to be reactive so that HOCs using them are always updated
        var parentData = parentVnode && parentVnode.data
        /* istanbul ignore else */
        {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs, null, true)
            defineReactive$$1(vm, "$listeners", parentData && parentData.on, null, true)
        }
    }

    function renderMixin(Vue) {
        Vue.prototype.$nextTick = function(fn) {
            return nextTick(fn, this)
        }

        Vue.prototype._render = function() {
            var vm = this
            var ref = vm.$options
            var render = ref.render
            var staticRenderFns = ref.staticRenderFns
            var _parentVnode = ref._parentVnode

            if (vm._isMounted) {
                // clone slot nodes on re-renders
                for (var key in vm.$slots) {
                    vm.$slots[key] = cloneVNodes(vm.$slots[key])
                }
            }

            vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject

            if (staticRenderFns && !vm._staticTrees) {
                vm._staticTrees = []
            }
            // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.
            vm.$vnode = _parentVnode
            // render self
            var vnode
            try {
                vnode = render.call(vm._renderProxy, vm.$createElement)
            } catch (e) {
                handleError(e, vm, "render function")
                // return error render result,
                // or previous vnode to prevent render error causing blank component
                /* istanbul ignore else */
                {
                    vnode = vm._vnode
                }
            }
            // return empty vnode in case the render function errored out
            if (!(vnode instanceof VNode)) {
                if (false) {
                    warn(
                        "Multiple root nodes returned from render function. Render function " +
                            "should return a single root node.",
                        vm
                    )
                }
                vnode = createEmptyVNode()
            }
            // set parent
            vnode.parent = _parentVnode
            return vnode
        }

        // internal render helpers.
        // these are exposed on the instance prototype to reduce generated render
        // code size.
        Vue.prototype._o = markOnce
        Vue.prototype._n = toNumber
        Vue.prototype._s = toString
        Vue.prototype._l = renderList
        Vue.prototype._t = renderSlot
        Vue.prototype._q = looseEqual
        Vue.prototype._i = looseIndexOf
        Vue.prototype._m = renderStatic
        Vue.prototype._f = resolveFilter
        Vue.prototype._k = checkKeyCodes
        Vue.prototype._b = bindObjectProps
        Vue.prototype._v = createTextVNode
        Vue.prototype._e = createEmptyVNode
        Vue.prototype._u = resolveScopedSlots
        Vue.prototype._g = bindObjectListeners
    }

    /*  */

    var uid = 0

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            var vm = this
            // a uid
            vm._uid = uid++

            var startTag, endTag
            /* istanbul ignore if */
            if (false) {
                startTag = "vue-perf-init:" + vm._uid
                endTag = "vue-perf-end:" + vm._uid
                mark(startTag)
            }

            // a flag to avoid this being observed
            vm._isVue = true
            // merge options
            if (options && options._isComponent) {
                // optimize internal component instantiation
                // since dynamic options merging is pretty slow, and none of the
                // internal component options needs special treatment.
                initInternalComponent(vm, options)
            } else {
                vm.$options = mergeOptions(
                    resolveConstructorOptions(vm.constructor),
                    options || {},
                    vm
                )
            }
            /* istanbul ignore else */
            {
                vm._renderProxy = vm
            }
            // expose real self
            vm._self = vm
            initLifecycle(vm)
            initEvents(vm)
            initRender(vm)
            callHook(vm, "beforeCreate")
            initInjections(vm) // resolve injections before data/props
            initState(vm)
            initProvide(vm) // resolve provide after data/props
            callHook(vm, "created")

            /* istanbul ignore if */
            if (false) {
                vm._name = formatComponentName(vm, false)
                mark(endTag)
                measure(vm._name + " init", startTag, endTag)
            }

            if (vm.$options.el) {
                vm.$mount(vm.$options.el)
            }
        }
    }

    function initInternalComponent(vm, options) {
        var opts = (vm.$options = Object.create(vm.constructor.options))
        // doing this because it's faster than dynamic enumeration.
        opts.parent = options.parent
        opts.propsData = options.propsData
        opts._parentVnode = options._parentVnode
        opts._parentListeners = options._parentListeners
        opts._renderChildren = options._renderChildren
        opts._componentTag = options._componentTag
        opts._parentElm = options._parentElm
        opts._refElm = options._refElm
        if (options.render) {
            opts.render = options.render
            opts.staticRenderFns = options.staticRenderFns
        }
    }

    function resolveConstructorOptions(Ctor) {
        var options = Ctor.options
        if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super)
            var cachedSuperOptions = Ctor.superOptions
            if (superOptions !== cachedSuperOptions) {
                // super option changed,
                // need to resolve new options.
                Ctor.superOptions = superOptions
                // check if there are any late-modified/attached options (#4976)
                var modifiedOptions = resolveModifiedOptions(Ctor)
                // update base extend options
                if (modifiedOptions) {
                    extend(Ctor.extendOptions, modifiedOptions)
                }
                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
                if (options.name) {
                    options.components[options.name] = Ctor
                }
            }
        }
        return options
    }

    function resolveModifiedOptions(Ctor) {
        var modified
        var latest = Ctor.options
        var extended = Ctor.extendOptions
        var sealed = Ctor.sealedOptions
        for (var key in latest) {
            if (latest[key] !== sealed[key]) {
                if (!modified) {
                    modified = {}
                }
                modified[key] = dedupe(latest[key], extended[key], sealed[key])
            }
        }
        return modified
    }

    function dedupe(latest, extended, sealed) {
        // compare latest and sealed to ensure lifecycle hooks won't be duplicated
        // between merges
        if (Array.isArray(latest)) {
            var res = []
            sealed = Array.isArray(sealed) ? sealed : [sealed]
            extended = Array.isArray(extended) ? extended : [extended]
            for (var i = 0; i < latest.length; i++) {
                // push original options and not sealed options to exclude duplicated options
                if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
                    res.push(latest[i])
                }
            }
            return res
        } else {
            return latest
        }
    }

    function Vue$3(options) {
        if (false) {
            warn("Vue is a constructor and should be called with the `new` keyword")
        }
        this._init(options)
    }

    initMixin(Vue$3)
    stateMixin(Vue$3)
    eventsMixin(Vue$3)
    lifecycleMixin(Vue$3)
    renderMixin(Vue$3)

    /*  */

    function initUse(Vue) {
        Vue.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = [])
            if (installedPlugins.indexOf(plugin) > -1) {
                return this
            }

            // additional parameters
            var args = toArray(arguments, 1)
            args.unshift(this)
            if (typeof plugin.install === "function") {
                plugin.install.apply(plugin, args)
            } else if (typeof plugin === "function") {
                plugin.apply(null, args)
            }
            installedPlugins.push(plugin)
            return this
        }
    }

    /*  */

    function initMixin$1(Vue) {
        Vue.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin)
            return this
        }
    }

    /*  */

    function initExtend(Vue) {
        /**
         * Each instance constructor, including Vue, has a unique
         * cid. This enables us to create wrapped "child
         * constructors" for prototypal inheritance and cache them.
         */
        Vue.cid = 0
        var cid = 1

        /**
         * Class inheritance
         */
        Vue.extend = function(extendOptions) {
            extendOptions = extendOptions || {}
            var Super = this
            var SuperId = Super.cid
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
            if (cachedCtors[SuperId]) {
                return cachedCtors[SuperId]
            }

            var name = extendOptions.name || Super.options.name
            var Sub = function VueComponent(options) {
                this._init(options)
            }
            Sub.prototype = Object.create(Super.prototype)
            Sub.prototype.constructor = Sub
            Sub.cid = cid++
            Sub.options = mergeOptions(Super.options, extendOptions)
            Sub["super"] = Super

            // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.
            if (Sub.options.props) {
                initProps$1(Sub)
            }
            if (Sub.options.computed) {
                initComputed$1(Sub)
            }

            // allow further extension/mixin/plugin usage
            Sub.extend = Super.extend
            Sub.mixin = Super.mixin
            Sub.use = Super.use

            // create asset registers, so extended classes
            // can have their private assets too.
            ASSET_TYPES.forEach(function(type) {
                Sub[type] = Super[type]
            })
            // enable recursive self-lookup
            if (name) {
                Sub.options.components[name] = Sub
            }

            // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.
            Sub.superOptions = Super.options
            Sub.extendOptions = extendOptions
            Sub.sealedOptions = extend({}, Sub.options)

            // cache constructor
            cachedCtors[SuperId] = Sub
            return Sub
        }
    }

    function initProps$1(Comp) {
        var props = Comp.options.props
        for (var key in props) {
            proxy(Comp.prototype, "_props", key)
        }
    }

    function initComputed$1(Comp) {
        var computed = Comp.options.computed
        for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key])
        }
    }

    /*  */

    function initAssetRegisters(Vue) {
        /**
         * Create asset registration methods.
         */
        ASSET_TYPES.forEach(function(type) {
            Vue[type] = function(id, definition) {
                if (!definition) {
                    return this.options[type + "s"][id]
                } else {
                    /* istanbul ignore if */
                    if (type === "component" && isPlainObject(definition)) {
                        definition.name = definition.name || id
                        definition = this.options._base.extend(definition)
                    }
                    if (type === "directive" && typeof definition === "function") {
                        definition = {
                            bind: definition,
                            update: definition
                        }
                    }
                    this.options[type + "s"][id] = definition
                    return definition
                }
            }
        })
    }

    /*  */

    var patternTypes = [String, RegExp, Array]

    function getComponentName(opts) {
        return opts && (opts.Ctor.options.name || opts.tag)
    }

    function matches(pattern, name) {
        if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1
        } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1
        } else if (isRegExp(pattern)) {
            return pattern.test(name)
        }
        /* istanbul ignore next */
        return false
    }

    function pruneCache(cache, current, filter) {
        for (var key in cache) {
            var cachedNode = cache[key]
            if (cachedNode) {
                var name = getComponentName(cachedNode.componentOptions)
                if (name && !filter(name)) {
                    if (cachedNode !== current) {
                        pruneCacheEntry(cachedNode)
                    }
                    cache[key] = null
                }
            }
        }
    }

    function pruneCacheEntry(vnode) {
        if (vnode) {
            vnode.componentInstance.$destroy()
        }
    }

    var KeepAlive = {
        name: "keep-alive",
        abstract: true,

        props: {
            include: patternTypes,
            exclude: patternTypes
        },

        created: function created() {
            this.cache = Object.create(null)
        },

        destroyed: function destroyed() {
            var this$1 = this

            for (var key in this$1.cache) {
                pruneCacheEntry(this$1.cache[key])
            }
        },

        watch: {
            include: function include(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return matches(val, name)
                })
            },
            exclude: function exclude(val) {
                pruneCache(this.cache, this._vnode, function(name) {
                    return !matches(val, name)
                })
            }
        },

        render: function render() {
            var vnode = getFirstComponentChild(this.$slots.default)
            var componentOptions = vnode && vnode.componentOptions
            if (componentOptions) {
                // check pattern
                var name = getComponentName(componentOptions)
                if (
                    name &&
                    ((this.include && !matches(this.include, name)) ||
                        (this.exclude && matches(this.exclude, name)))
                ) {
                    return vnode
                }
                var key =
                    vnode.key == null
                        ? // same constructor may get registered as different local components
                          // so cid alone is not enough (#3269)
                          componentOptions.Ctor.cid +
                          (componentOptions.tag ? "::" + componentOptions.tag : "")
                        : vnode.key
                if (this.cache[key]) {
                    vnode.componentInstance = this.cache[key].componentInstance
                } else {
                    this.cache[key] = vnode
                }
                vnode.data.keepAlive = true
            }
            return vnode
        }
    }

    var builtInComponents = {
        KeepAlive: KeepAlive
    }

    /*  */

    function initGlobalAPI(Vue) {
        // config
        var configDef = {}
        configDef.get = function() {
            return config
        }
        Object.defineProperty(Vue, "config", configDef)

        // exposed util methods.
        // NOTE: these are not considered part of the public API - avoid relying on
        // them unless you are aware of the risk.
        Vue.util = {
            warn: warn,
            extend: extend,
            mergeOptions: mergeOptions,
            defineReactive: defineReactive$$1
        }

        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick

        Vue.options = Object.create(null)
        ASSET_TYPES.forEach(function(type) {
            Vue.options[type + "s"] = Object.create(null)
        })

        // this is used to identify the "base" constructor to extend all plain-object
        // components with in Weex's multi-instance scenarios.
        Vue.options._base = Vue

        extend(Vue.options.components, builtInComponents)

        initUse(Vue)
        initMixin$1(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
    }

    initGlobalAPI(Vue$3)

    Object.defineProperty(Vue$3.prototype, "$isServer", {
        get: isServerRendering
    })

    Object.defineProperty(Vue$3.prototype, "$ssrContext", {
        get: function get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext
        }
    })

    Vue$3.version = "2.4.1"
    Vue$3.mpvueVersion = "1.0.12"

    /* globals renderer */

    var isReservedTag = makeMap(
        "template,script,style,element,content,slot,link,meta,svg,view," +
            "a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select," +
            "slider,slider-neighbor,indicator,trisition,trisition-group,canvas," +
            "list,cell,header,loading,loading-indicator,refresh,scrollable,scroller," +
            "video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",
        true
    )

    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap("style,class")

    // Elements that you can, intentionally, leave open (and which close themselves)
    // more flexable than web
    var canBeLeftOpenTag = makeMap(
        "web,spinner,switch,video,textarea,canvas," + "indicator,marquee,countdown",
        true
    )

    var isUnaryTag = makeMap("embed,img,image,input,link,meta", true)

    function mustUseProp() {
        /* console.log('mustUseProp') */
    }

    function getTagNamespace() {
        /* console.log('getTagNamespace') */
    }

    function isUnknownElement() {
        /* console.log('isUnknownElement') */
    }

    function getComKey(vm) {
        return vm && vm.$attrs ? vm.$attrs["mpcomid"] : "0"
    }

    // 用于小程序的 event type 到 web 的 event
    var eventTypeMap = {
        tap: ["tap", "click"],
        touchstart: ["touchstart"],
        touchmove: ["touchmove"],
        touchcancel: ["touchcancel"],
        touchend: ["touchend"],
        longtap: ["longtap"],
        input: ["input"],
        blur: ["change", "blur"],
        submit: ["submit"],
        focus: ["focus"],
        scrolltoupper: ["scrolltoupper"],
        scrolltolower: ["scrolltolower"],
        scroll: ["scroll"]
    }

    /*  */

    // import { namespaceMap } from 'mp/util/index'

    var obj = {}

    function createElement$1(tagName, vnode) {
        return obj
    }

    function createElementNS(namespace, tagName) {
        return obj
    }

    function createTextNode(text) {
        return obj
    }

    function createComment(text) {
        return obj
    }

    function insertBefore(parentNode, newNode, referenceNode) {}

    function removeChild(node, child) {}

    function appendChild(node, child) {}

    function parentNode(node) {
        return obj
    }

    function nextSibling(node) {
        return obj
    }

    function tagName(node) {
        return "div"
    }

    function setTextContent(node, text) {
        return obj
    }

    function setAttribute(node, key, val) {
        return obj
    }

    var nodeOps = Object.freeze({
        createElement: createElement$1,
        createElementNS: createElementNS,
        createTextNode: createTextNode,
        createComment: createComment,
        insertBefore: insertBefore,
        removeChild: removeChild,
        appendChild: appendChild,
        parentNode: parentNode,
        nextSibling: nextSibling,
        tagName: tagName,
        setTextContent: setTextContent,
        setAttribute: setAttribute
    })

    /*  */

    var ref = {
        create: function create(_, vnode) {
            registerRef(vnode)
        },
        update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
                registerRef(oldVnode, true)
                registerRef(vnode)
            }
        },
        destroy: function destroy(vnode) {
            registerRef(vnode, true)
        }
    }

    function registerRef(vnode, isRemoval) {
        var key = vnode.data.ref
        if (!key) {
            return
        }

        var vm = vnode.context
        var ref = vnode.componentInstance || vnode.elm
        var refs = vm.$refs
        if (isRemoval) {
            if (Array.isArray(refs[key])) {
                remove(refs[key], ref)
            } else if (refs[key] === ref) {
                refs[key] = undefined
            }
        } else {
            if (vnode.data.refInFor) {
                if (!Array.isArray(refs[key])) {
                    refs[key] = [ref]
                } else if (refs[key].indexOf(ref) < 0) {
                    // $flow-disable-line
                    refs[key].push(ref)
                }
            } else {
                refs[key] = ref
            }
        }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *

    /*
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

    var emptyNode = new VNode("", {}, [])

    var hooks = ["create", "activate", "update", "remove", "destroy"]

    function sameVnode(a, b) {
        return (
            a.key === b.key &&
            ((a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)) ||
                (isTrue(a.isAsyncPlaceholder) &&
                    a.asyncFactory === b.asyncFactory &&
                    isUndef(b.asyncFactory.error)))
        )
    }

    // Some browsers do not support dynamically changing type for <input>
    // so they need to be treated as different nodes
    function sameInputType(a, b) {
        if (a.tag !== "input") {
            return true
        }
        var i
        var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type
        var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type
        return typeA === typeB
    }

    function createKeyToOldIdx(children, beginIdx, endIdx) {
        var i, key
        var map = {}
        for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key
            if (isDef(key)) {
                map[key] = i
            }
        }
        return map
    }

    function createPatchFunction(backend) {
        var i, j
        var cbs = {}

        var modules = backend.modules
        var nodeOps = backend.nodeOps

        for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = []
            for (j = 0; j < modules.length; ++j) {
                if (isDef(modules[j][hooks[i]])) {
                    cbs[hooks[i]].push(modules[j][hooks[i]])
                }
            }
        }

        function emptyNodeAt(elm) {
            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
        }

        function createRmCb(childElm, listeners) {
            function remove$$1() {
                if (--remove$$1.listeners === 0) {
                    removeNode(childElm)
                }
            }
            remove$$1.listeners = listeners
            return remove$$1
        }

        function removeNode(el) {
            var parent = nodeOps.parentNode(el)
            // element may have already been removed due to v-html / v-text
            if (isDef(parent)) {
                nodeOps.removeChild(parent, el)
            }
        }

        var inPre = 0

        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
            vnode.isRootInsert = !nested // for transition enter check
            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                return
            }

            var data = vnode.data
            var children = vnode.children
            var tag = vnode.tag
            if (isDef(tag)) {
                vnode.elm = vnode.ns
                    ? nodeOps.createElementNS(vnode.ns, tag)
                    : nodeOps.createElement(tag, vnode)
                setScope(vnode)

                /* istanbul ignore if */
                {
                    createChildren(vnode, children, insertedVnodeQueue)
                    if (isDef(data)) {
                        invokeCreateHooks(vnode, insertedVnodeQueue)
                    }
                    insert(parentElm, vnode.elm, refElm)
                }

                if (false) {
                    inPre--
                }
            } else if (isTrue(vnode.isComment)) {
                vnode.elm = nodeOps.createComment(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            } else {
                vnode.elm = nodeOps.createTextNode(vnode.text)
                insert(parentElm, vnode.elm, refElm)
            }
        }

        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i = vnode.data
            if (isDef(i)) {
                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
                if (isDef((i = i.hook)) && isDef((i = i.init))) {
                    i(vnode, false /* hydrating */, parentElm, refElm)
                }
                // after calling the init hook, if the vnode is a child component
                // it should've created a child instance and mounted it. the child
                // component also has set the placeholder vnode's elm.
                // in that case we can just return the element and be done.
                if (isDef(vnode.componentInstance)) {
                    initComponent(vnode, insertedVnodeQueue)
                    if (isTrue(isReactivated)) {
                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
                    }
                    return true
                }
            }
        }

        function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
                vnode.data.pendingInsert = null
            }
            vnode.elm = vnode.componentInstance.$el
            if (isPatchable(vnode)) {
                invokeCreateHooks(vnode, insertedVnodeQueue)
                setScope(vnode)
            } else {
                // empty component root.
                // skip all element-related modules except for ref (#3455)
                registerRef(vnode)
                // make sure to invoke the insert hook
                insertedVnodeQueue.push(vnode)
            }
        }

        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i
            // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.
            var innerNode = vnode
            while (innerNode.componentInstance) {
                innerNode = innerNode.componentInstance._vnode
                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                    for (i = 0; i < cbs.activate.length; ++i) {
                        cbs.activate[i](emptyNode, innerNode)
                    }
                    insertedVnodeQueue.push(innerNode)
                    break
                }
            }
            // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself
            insert(parentElm, vnode.elm, refElm)
        }

        function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
                if (isDef(ref$$1)) {
                    if (ref$$1.parentNode === parent) {
                        nodeOps.insertBefore(parent, elm, ref$$1)
                    }
                } else {
                    nodeOps.appendChild(parent, elm)
                }
            }
        }

        function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
                for (var i = 0; i < children.length; ++i) {
                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)
                }
            } else if (isPrimitive(vnode.text)) {
                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
            }
        }

        function isPatchable(vnode) {
            while (vnode.componentInstance) {
                vnode = vnode.componentInstance._vnode
            }
            return isDef(vnode.tag)
        }

        function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, vnode)
            }
            i = vnode.data.hook // Reuse variable
            if (isDef(i)) {
                if (isDef(i.create)) {
                    i.create(emptyNode, vnode)
                }
                if (isDef(i.insert)) {
                    insertedVnodeQueue.push(vnode)
                }
            }
        }

        // set scope id attribute for scoped CSS.
        // this is implemented as a special case to avoid the overhead
        // of going through the normal attribute patching process.
        function setScope(vnode) {
            var i
            var ancestor = vnode
            while (ancestor) {
                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
                    nodeOps.setAttribute(vnode.elm, i, "")
                }
                ancestor = ancestor.parent
            }
            // for slot content they should also get the scopeId from the host instance.
            if (
                isDef((i = activeInstance)) &&
                i !== vnode.context &&
                isDef((i = i.$options._scopeId))
            ) {
                nodeOps.setAttribute(vnode.elm, i, "")
            }
        }

        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)
            }
        }

        function invokeDestroyHook(vnode) {
            var i, j
            var data = vnode.data
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
                    i(vnode)
                }
                for (i = 0; i < cbs.destroy.length; ++i) {
                    cbs.destroy[i](vnode)
                }
            }
            if (isDef((i = vnode.children))) {
                for (j = 0; j < vnode.children.length; ++j) {
                    invokeDestroyHook(vnode.children[j])
                }
            }
        }

        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
                var ch = vnodes[startIdx]
                if (isDef(ch)) {
                    if (isDef(ch.tag)) {
                        removeAndInvokeRemoveHook(ch)
                        invokeDestroyHook(ch)
                    } else {
                        // Text node
                        removeNode(ch.elm)
                    }
                }
            }
        }

        function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
                var i
                var listeners = cbs.remove.length + 1
                if (isDef(rm)) {
                    // we have a recursively passed down rm callback
                    // increase the listeners count
                    rm.listeners += listeners
                } else {
                    // directly removing
                    rm = createRmCb(vnode.elm, listeners)
                }
                // recursively invoke hooks on child component root node
                if (
                    isDef((i = vnode.componentInstance)) &&
                    isDef((i = i._vnode)) &&
                    isDef(i.data)
                ) {
                    removeAndInvokeRemoveHook(i, rm)
                }
                for (i = 0; i < cbs.remove.length; ++i) {
                    cbs.remove[i](vnode, rm)
                }
                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                    i(vnode, rm)
                } else {
                    rm()
                }
            } else {
                removeNode(vnode.elm)
            }
        }

        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0
            var newStartIdx = 0
            var oldEndIdx = oldCh.length - 1
            var oldStartVnode = oldCh[0]
            var oldEndVnode = oldCh[oldEndIdx]
            var newEndIdx = newCh.length - 1
            var newStartVnode = newCh[0]
            var newEndVnode = newCh[newEndIdx]
            var oldKeyToIdx, idxInOld, elmToMove, refElm

            // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions
            var canMove = !removeOnly

            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                if (isUndef(oldStartVnode)) {
                    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
                } else if (isUndef(oldEndVnode)) {
                    oldEndVnode = oldCh[--oldEndIdx]
                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
                    oldStartVnode = oldCh[++oldStartIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldStartVnode, newEndVnode)) {
                    // Vnode moved right
                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
                    canMove &&
                        nodeOps.insertBefore(
                            parentElm,
                            oldStartVnode.elm,
                            nodeOps.nextSibling(oldEndVnode.elm)
                        )
                    oldStartVnode = oldCh[++oldStartIdx]
                    newEndVnode = newCh[--newEndIdx]
                } else if (sameVnode(oldEndVnode, newStartVnode)) {
                    // Vnode moved left
                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
                    oldEndVnode = oldCh[--oldEndIdx]
                    newStartVnode = newCh[++newStartIdx]
                } else {
                    if (isUndef(oldKeyToIdx)) {
                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
                    }
                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
                    if (isUndef(idxInOld)) {
                        // New element
                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
                        newStartVnode = newCh[++newStartIdx]
                    } else {
                        elmToMove = oldCh[idxInOld]
                        /* istanbul ignore if */
                        if (false) {
                            warn(
                                "It seems there are duplicate keys that is causing an update error. " +
                                    "Make sure each v-for item has a unique key."
                            )
                        }
                        if (sameVnode(elmToMove, newStartVnode)) {
                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
                            oldCh[idxInOld] = undefined
                            canMove &&
                                nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm)
                            newStartVnode = newCh[++newStartIdx]
                        } else {
                            // same key but different element. treat as new element
                            createElm(
                                newStartVnode,
                                insertedVnodeQueue,
                                parentElm,
                                oldStartVnode.elm
                            )
                            newStartVnode = newCh[++newStartIdx]
                        }
                    }
                }
            }
            if (oldStartIdx > oldEndIdx) {
                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
            } else if (newStartIdx > newEndIdx) {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
            }
        }

        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
            if (oldVnode === vnode) {
                return
            }

            var elm = (vnode.elm = oldVnode.elm)

            if (isTrue(oldVnode.isAsyncPlaceholder)) {
                if (isDef(vnode.asyncFactory.resolved)) {
                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
                } else {
                    vnode.isAsyncPlaceholder = true
                }
                return
            }

            // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.
            if (
                isTrue(vnode.isStatic) &&
                isTrue(oldVnode.isStatic) &&
                vnode.key === oldVnode.key &&
                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
                vnode.componentInstance = oldVnode.componentInstance
                return
            }

            var i
            var data = vnode.data
            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
                i(oldVnode, vnode)
            }

            var oldCh = oldVnode.children
            var ch = vnode.children
            if (isDef(data) && isPatchable(vnode)) {
                for (i = 0; i < cbs.update.length; ++i) {
                    cbs.update[i](oldVnode, vnode)
                }
                if (isDef((i = data.hook)) && isDef((i = i.update))) {
                    i(oldVnode, vnode)
                }
            }
            if (isUndef(vnode.text)) {
                if (isDef(oldCh) && isDef(ch)) {
                    if (oldCh !== ch) {
                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
                    }
                } else if (isDef(ch)) {
                    if (isDef(oldVnode.text)) {
                        nodeOps.setTextContent(elm, "")
                    }
                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
                } else if (isDef(oldCh)) {
                    removeVnodes(elm, oldCh, 0, oldCh.length - 1)
                } else if (isDef(oldVnode.text)) {
                    nodeOps.setTextContent(elm, "")
                }
            } else if (oldVnode.text !== vnode.text) {
                nodeOps.setTextContent(elm, vnode.text)
            }
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
                    i(oldVnode, vnode)
                }
            }
        }

        function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
                vnode.parent.data.pendingInsert = queue
            } else {
                for (var i = 0; i < queue.length; ++i) {
                    queue[i].data.hook.insert(queue[i])
                }
            }
        }

        var bailed = false
        // list of modules that can skip create hook during hydration because they
        // are already rendered on the client or has no need for initialization
        var isRenderedModule = makeMap("attrs,style,class,staticClass,staticStyle,key")

        // Note: this is a browser-only function so we can assume elms are DOM nodes.
        function hydrate(elm, vnode, insertedVnodeQueue) {
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                vnode.elm = elm
                vnode.isAsyncPlaceholder = true
                return true
            }
            vnode.elm = elm
            var tag = vnode.tag
            var data = vnode.data
            var children = vnode.children
            if (isDef(data)) {
                if (isDef((i = data.hook)) && isDef((i = i.init))) {
                    i(vnode, true /* hydrating */)
                }
                if (isDef((i = vnode.componentInstance))) {
                    // child component. it should have hydrated its own tree.
                    initComponent(vnode, insertedVnodeQueue)
                    return true
                }
            }
            if (isDef(tag)) {
                if (isDef(children)) {
                    // empty element, allow client to pick up and populate children
                    if (!elm.hasChildNodes()) {
                        createChildren(vnode, children, insertedVnodeQueue)
                    } else {
                        var childrenMatch = true
                        var childNode = elm.firstChild
                        for (var i$1 = 0; i$1 < children.length; i$1++) {
                            if (
                                !childNode ||
                                !hydrate(childNode, children[i$1], insertedVnodeQueue)
                            ) {
                                childrenMatch = false
                                break
                            }
                            childNode = childNode.nextSibling
                        }
                        // if childNode is not null, it means the actual childNodes list is
                        // longer than the virtual children list.
                        if (!childrenMatch || childNode) {
                            if (
                                false
                            ) {
                                bailed = true
                                console.warn("Parent: ", elm)
                                console.warn(
                                    "Mismatching childNodes vs. VNodes: ",
                                    elm.childNodes,
                                    children
                                )
                            }
                            return false
                        }
                    }
                }
                if (isDef(data)) {
                    for (var key in data) {
                        if (!isRenderedModule(key)) {
                            invokeCreateHooks(vnode, insertedVnodeQueue)
                            break
                        }
                    }
                }
            } else if (elm.data !== vnode.text) {
                elm.data = vnode.text
            }
            return true
        }

        return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
            if (isUndef(vnode)) {
                if (isDef(oldVnode)) {
                    invokeDestroyHook(oldVnode)
                }
                return
            }

            var isInitialPatch = false
            var insertedVnodeQueue = []

            if (isUndef(oldVnode)) {
                // empty mount (likely as component), create new root element
                isInitialPatch = true
                createElm(vnode, insertedVnodeQueue, parentElm, refElm)
            } else {
                var isRealElement = isDef(oldVnode.nodeType)
                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                    // patch existing root node
                    patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
                } else {
                    if (isRealElement) {
                        // mounting to a real element
                        // check if this is server-rendered content and if we can perform
                        // a successful hydration.
                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                            oldVnode.removeAttribute(SSR_ATTR)
                            hydrating = true
                        }
                        if (isTrue(hydrating)) {
                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                invokeInsertHook(vnode, insertedVnodeQueue, true)
                                return oldVnode
                            } else {
                            }
                        }
                        // either not server-rendered, or hydration failed.
                        // create an empty node and replace it
                        oldVnode = emptyNodeAt(oldVnode)
                    }
                    // replacing existing element
                    var oldElm = oldVnode.elm
                    var parentElm$1 = nodeOps.parentNode(oldElm)
                    createElm(
                        vnode,
                        insertedVnodeQueue,
                        // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        oldElm._leaveCb ? null : parentElm$1,
                        nodeOps.nextSibling(oldElm)
                    )

                    if (isDef(vnode.parent)) {
                        // component root element replaced.
                        // update parent placeholder node element, recursively
                        var ancestor = vnode.parent
                        while (ancestor) {
                            ancestor.elm = vnode.elm
                            ancestor = ancestor.parent
                        }
                        if (isPatchable(vnode)) {
                            for (var i = 0; i < cbs.create.length; ++i) {
                                cbs.create[i](emptyNode, vnode.parent)
                            }
                        }
                    }

                    if (isDef(parentElm$1)) {
                        removeVnodes(parentElm$1, [oldVnode], 0, 0)
                    } else if (isDef(oldVnode.tag)) {
                        invokeDestroyHook(oldVnode)
                    }
                }
            }

            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
            return vnode.elm
        }
    }

    /*  */

    // import baseModules from 'core/vdom/modules/index'
    // const platformModules = []
    // import platformModules from 'web/runtime/modules/index'

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    // const modules = platformModules.concat(baseModules)
    var modules = [ref]

    var corePatch = createPatchFunction({
        nodeOps: nodeOps,
        modules: modules
    })

    function patch() {
        corePatch.apply(this, arguments)
        this.$updateDataToMP()
    }

    function callHook$1(vm, hook, params) {
        var handlers = vm.$options[hook]
        if (hook === "onError" && handlers) {
            handlers = [handlers]
        }

        var ret
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                try {
                    ret = handlers[i].call(vm, params)
                } catch (e) {
                    handleError(e, vm, hook + " hook")
                }
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook)
        }

        // for child
        if (vm.$children.length) {
            vm.$children.forEach(function(v) {
                return callHook$1(v, hook, params)
            })
        }

        return ret
    }

    // mpType 小程序实例的类型，可能的值是 'app', 'page'
    // rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得
    function getGlobalData(app, rootVueVM) {
        var mp = rootVueVM.$mp
        if (app && app.globalData) {
            mp.appOptions = app.globalData.appOptions
        }
    }

    // 格式化 properties 属性，并给每个属性加上 observer 方法

    // properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
    // properties: {
    //   paramA: Number,
    //   myProperty: { // 属性名
    //     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    //     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    //     observer: function(newVal, oldVal, changedPath) {
    //        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    //        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
    //     }
    //   },
    // }

    // props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad
    // props: {
    //   // 基础的类型检查 (`null` 匹配任何类型)
    //   propA: Number,
    //   // 多个可能的类型
    //   propB: [String, Number],
    //   // 必填的字符串
    //   propC: {
    //     type: String,
    //     required: true
    //   },
    //   // 带有默认值的数字
    //   propD: {
    //     type: Number,
    //     default: 100
    //   },
    //   // 带有默认值的对象
    //   propE: {
    //     type: Object,
    //     // 对象或数组且一定会从一个工厂函数返回默认值
    //     default: function () {
    //       return { message: 'hello' }
    //     }
    //   },
    //   // 自定义验证函数
    //   propF: {
    //     validator: function (value) {
    //       // 这个值必须匹配下列字符串中的一个
    //       return ['success', 'warning', 'danger'].indexOf(value) !== -1
    //     }
    //   }
    // }

    // core/util/options
    function normalizeProps$1(props, res, vm) {
        if (!props) {
            return
        }
        var i, val, name
        if (Array.isArray(props)) {
            i = props.length
            while (i--) {
                val = props[i]
                if (typeof val === "string") {
                    name = camelize(val)
                    res[name] = {
                        type: null
                    }
                } else {
                }
            }
        } else if (isPlainObject(props)) {
            for (var key in props) {
                val = props[key]
                name = camelize(key)
                res[name] = isPlainObject(val)
                    ? val
                    : {
                          type: val
                      }
            }
        }

        // fix vueProps to properties
        for (var key$1 in res) {
            if (res.hasOwnProperty(key$1)) {
                var item = res[key$1]
                if (item.default) {
                    item.value = item.default
                }
                var oldObserver = item.observer
                item.observer = function(newVal, oldVal) {
                    vm[name] = newVal
                    // 先修改值再触发原始的 observer，跟 watch 行为保持一致
                    if (typeof oldObserver === "function") {
                        oldObserver.call(vm, newVal, oldVal)
                    }
                }
            }
        }

        return res
    }

    function normalizeProperties(vm) {
        var properties = vm.$options.properties
        var vueProps = vm.$options.props
        var res = {}

        normalizeProps$1(properties, res, vm)
        normalizeProps$1(vueProps, res, vm)

        return res
    }

    /**
     * 把 properties 中的属性 proxy 到 vm 上
     */
    function initMpProps(vm) {
        var mpProps = (vm._mpProps = {})
        var keys = Object.keys(vm.$options.properties || {})
        keys.forEach(function(key) {
            if (!(key in vm)) {
                proxy(vm, "_mpProps", key)
                mpProps[key] = undefined // for observe
            }
        })
        observe(mpProps, true)
    }

    function initMP(mpType, next) {
        var rootVueVM = this.$root
        if (!rootVueVM.$mp) {
            rootVueVM.$mp = {}
        }

        var mp = rootVueVM.$mp

        // Please do not register multiple Pages
        // if (mp.registered) {
        if (mp.status) {
            // 处理子组件的小程序生命周期
            if (mpType === "app") {
                callHook$1(this, "onLaunch", mp.appOptions)
            } else {
                callHook$1(this, "onLoad", mp.query)
                callHook$1(this, "onReady")
            }
            return next()
        }
        // mp.registered = true

        mp.mpType = mpType
        mp.status = "register"

        if (mpType === "app") {
            global.App({
                // 页面的初始数据
                globalData: {
                    appOptions: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // Do something initial when launch.
                onLaunch: function onLaunch(options) {
                    if (options === void 0) options = {}

                    mp.app = this
                    mp.status = "launch"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onLaunch", options)
                    next()
                },

                // Do something when app show.
                onShow: function onShow(options) {
                    if (options === void 0) options = {}

                    mp.status = "show"
                    this.globalData.appOptions = mp.appOptions = options
                    callHook$1(rootVueVM, "onShow", options)
                },

                // Do something when app hide.
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
                },

                onError: function onError(err) {
                    callHook$1(rootVueVM, "onError", err)
                },
                //fixed by xxxxxx
                onUniNViewMessage: function onUniNViewMessage(e) {
                    callHook$1(rootVueVM, "onUniNViewMessage", e)
                }
            })
        } else if (mpType === "component") {
            initMpProps(rootVueVM)

            global.Component({
                // 小程序原生的组件属性
                properties: normalizeProperties(rootVueVM),
                // 页面的初始数据
                data: {
                    $root: {}
                },
                methods: {
                    handleProxy: function handleProxy(e) {
                        return rootVueVM.$handleProxyWithVue(e)
                    }
                },
                // mp lifecycle for vue
                // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
                created: function created() {
                    mp.status = "created"
                    mp.page = this
                },
                // 组件生命周期函数，在组件实例进入页面节点树时执行
                attached: function attached() {
                    mp.status = "attached"
                    callHook$1(rootVueVM, "attached")
                },
                // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
                ready: function ready() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "ready")
                    next()

                    // 只有页面需要 setData
                    rootVueVM.$nextTick(function() {
                        rootVueVM._initDataToMP()
                    })
                },
                // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
                moved: function moved() {
                    callHook$1(rootVueVM, "moved")
                },
                // 组件生命周期函数，在组件实例被从页面节点树移除时执行
                detached: function detached() {
                    mp.status = "detached"
                    callHook$1(rootVueVM, "detached")
                }
            })
        } else {
            var app = global.getApp()
            //fixed by xxxxxx (将将初始数据赋值 page.data，加快速度)
            //             const pageData = {
            //                 $root: {}
            //             }
            //             if (rootVueVM.$options) {
            //                 if (typeof rootVueVM.$options.data === 'object') {
            //                     Object.assign(pageData, rootVueVM.$options.data)
            //                 } else if (typeof rootVueVM.$options.data === 'function') {
            //                     Object.assign(pageData, rootVueVM.$options.data())
            //                 }
            //             }
            global.Page({
                // 页面的初始数据
                data: {
                    $root: {}
                },

                handleProxy: function handleProxy(e) {
                    return rootVueVM.$handleProxyWithVue(e)
                },

                // mp lifecycle for vue
                // 生命周期函数--监听页面加载
                onLoad: function onLoad(query) {
                    mp.page = this
                    mp.query = query
                    mp.status = "load"
                    getGlobalData(app, rootVueVM)
                    callHook$1(rootVueVM, "onLoad", query)
										
										//fixed by fxy060608
										// 只有页面需要 setData
										rootVueVM.$nextTick(function() {
												rootVueVM._initDataToMP()
										})
                },

                // 生命周期函数--监听页面显示
                onShow: function onShow() {
                    mp.page = this
                    mp.status = "show"
										
                    callHook$1(rootVueVM, "onShow")
                },

                // 生命周期函数--监听页面初次渲染完成
                onReady: function onReady() {
                    mp.status = "ready"

                    callHook$1(rootVueVM, "onReady")
                    next()
                },

                // 生命周期函数--监听页面隐藏
                onHide: function onHide() {
                    mp.status = "hide"
                    callHook$1(rootVueVM, "onHide")
										//fixed by xxxxxx
                    //mp.page = null
                },

                // 生命周期函数--监听页面卸载
                onUnload: function onUnload() {
                    mp.status = "unload"
                    callHook$1(rootVueVM, "onUnload")
                    mp.page = null
                    //fixed by xxxxxx
                    setTimeout(function() {
                        if (rootVueVM.$options && typeof rootVueVM.$options.data === "function") {
                            Object.assign(rootVueVM.$data, rootVueVM.$options.data())
                        }
                    }, 0)
                },

                // 页面相关事件处理函数--监听用户下拉动作
                onPullDownRefresh: function onPullDownRefresh() {
                    callHook$1(rootVueVM, "onPullDownRefresh")
                },

                // 页面上拉触底事件的处理函数
                onReachBottom: function onReachBottom() {
                    callHook$1(rootVueVM, "onReachBottom")
                },

                // 用户点击右上角分享
                onShareAppMessage: rootVueVM.$options.onShareAppMessage
                    ? function(options) {
                          return callHook$1(rootVueVM, "onShareAppMessage", options)
                      }
                    : null,

                // Do something when page scroll
                onPageScroll: function onPageScroll(options) {
                    callHook$1(rootVueVM, "onPageScroll", options)
                },

                // 当前是 tab 页时，点击 tab 时触发
                onTabItemTap: function onTabItemTap(options) {
                    callHook$1(rootVueVM, "onTabItemTap", options)
                },
                //fixed by xxxxxx
                onNavigationBarButtonTap: function onNavigationBarButtonTap(options) {
                    callHook$1(rootVueVM, "onNavigationBarButtonTap", options)
                }
            })
        }
    }

    // 节流方法，性能优化
    // 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。
    // $c === $child
    // $k === $comKey

    // 新型的被拍平的数据结构
    // {
    //   $root: {
    //     '1-1'{
    //       // ... data
    //     },
    //     '1.2-1': {
    //       // ... data1
    //     },
    //     '1.2-2': {
    //       // ... data2
    //     }
    //   }
    // }

    function getVmData(vm) {
        // 确保当前 vm 所有数据被同步
        var dataKeys = [].concat(
            Object.keys(vm._data || {}),
            Object.keys(vm._props || {}),
            Object.keys(vm._mpProps || {}),
            Object.keys(vm._computedWatchers || {})
        )
        return dataKeys.reduce(function(res, key) {
            res[key] = vm[key]
            return res
        }, {})
    }

    function getParentComKey(vm, res) {
        if (res === void 0) res = []

        var ref = vm || {}
        var $parent = ref.$parent
        if (!$parent) {
            return res
        }
        res.unshift(getComKey($parent))
        if ($parent.$parent) {
            return getParentComKey($parent, res)
        }
        return res
    }

    function formatVmData(vm) {
        var $p = getParentComKey(vm).join(",")
        var $k = $p + ($p ? "," : "") + getComKey(vm)

        // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据
        // 改动 vue.runtime 所获的的核心能力
        var data = Object.assign(getVmData(vm), {
            $k: $k,
            $kk: $k + ",",
            $p: $p
        })
        var key = "$root." + $k
        var res = {}
        res[key] = data
        return res
    }

    function collectVmData(vm, res) {
        if (res === void 0) res = {}

        var vms = vm.$children
        if (vms && vms.length) {
            vms.forEach(function(v) {
                return collectVmData(v, res)
            })
        }
        return Object.assign(res, formatVmData(vm))
    }

    /**
     * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
     * 自动合并 data
     *
     * @param  {function}   func      传入函数
     * @param  {number}     wait      表示时间窗口的间隔
     * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
     *                                如果想忽略结尾边界上的调用，传入{trailing: false}
     * @return {function}             返回客户调用函数
     */
    function throttle(func, wait, options) {
        var context, args, result
        var timeout = null
        // 上次执行时间点
        var previous = 0
        if (!options) {
            options = {}
        }
        // 延迟执行函数
        function later() {
            // 若设定了开始边界不执行选项，上次执行时间始终为0
            previous = options.leading === false ? 0 : Date.now()
            timeout = null
            result = func.apply(context, args)
            if (!timeout) {
                context = args = null
            }
        }
        return function(handle, data) {
            var now = Date.now()
            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
            if (!previous && options.leading === false) {
                previous = now
            }
            // 延迟执行时间间隔
            var remaining = wait - (now - previous)
            context = this
            args = args ? [handle, Object.assign(args[1], data)] : [handle, data]
            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
            // remaining大于时间窗口wait，表示客户端系统时间被调整过
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout)
                timeout = null
                previous = now
                result = func.apply(context, args)
                if (!timeout) {
                    context = args = null
                }
                // 如果延迟执行不存在，且没有设定结尾边界不执行选项
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining)
            }
            return result
        }
    }

    // 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
    var throttleSetData = throttle(function(handle, data) {
        handle(data)
    }, 50)

    function getPage(vm) {
        var rootVueVM = vm.$root
        var ref = rootVueVM.$mp || {}
        var mpType = ref.mpType
        if (mpType === void 0) mpType = ""
        var page = ref.page

        // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
        if (mpType === "app" || !page || typeof page.setData !== "function") {
            return
        }
        return page
    }

    // 优化每次 setData 都传递大量新数据
    function updateDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = formatVmData(this)
        throttleSetData(page.setData.bind(page), diff(data, page.data))
    }

    function initDataToMP() {
        var page = getPage(this)
        if (!page) {
            return
        }

        var data = collectVmData(this.$root)
        page.setData(data)
    }

    function getVM(vm, comkeys) {
        if (comkeys === void 0) comkeys = []

        var keys = comkeys.slice(1)
        if (!keys.length) {
            return vm
        }

        return keys.reduce(function(res, key) {
            var len = res.$children.length
            for (var i = 0; i < len; i++) {
                var v = res.$children[i]
                var k = getComKey(v)
                if (k === key) {
                    res = v
                    return res
                }
            }
            return res
        }, vm)
    }

    function getHandle(vnode, eventid, eventTypes) {
        if (eventTypes === void 0) eventTypes = []

        var res = []
        if (!vnode || !vnode.tag) {
            return res
        }

        var ref = vnode || {}
        var data = ref.data
        if (data === void 0) data = {}
        var children = ref.children
        if (children === void 0) children = []
        var componentInstance = ref.componentInstance
        if (componentInstance) {
            // 增加 slot 情况的处理
            // Object.values 会多增加几行编译后的代码
            Object.keys(componentInstance.$slots).forEach(function(slotKey) {
                var slot = componentInstance.$slots[slotKey]
                var slots = Array.isArray(slot) ? slot : [slot]
                slots.forEach(function(node) {
                    res = res.concat(getHandle(node, eventid, eventTypes))
                })
            })
        } else {
            // 避免遍历超出当前组件的 vm
            children.forEach(function(node) {
                res = res.concat(getHandle(node, eventid, eventTypes))
            })
        }

        var attrs = data.attrs
        var on = data.on
        if (attrs && on && attrs["eventid"] === eventid) {
            eventTypes.forEach(function(et) {
                var h = on[et]
                if (typeof h === "function") {
                    res.push(h)
                } else if (Array.isArray(h)) {
                    res = res.concat(h)
                }
            })
            return res
        }

        return res
    }

    function getWebEventByMP(e) {
        var type = e.type
        var timeStamp = e.timeStamp
        var touches = e.touches
        var detail = e.detail
        if (detail === void 0) detail = {}
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        if (currentTarget === void 0) currentTarget = {}
        var x = detail.x
        var y = detail.y
        var event = {
            mp: e,
            type: type,
            timeStamp: timeStamp,
            x: x,
            y: y,
            target: Object.assign({}, target, detail),
            detail: detail, //fixed by xxxxxx
            currentTarget: currentTarget,
            stopPropagation: noop,
            preventDefault: noop
        }

        if (touches && touches.length) {
            Object.assign(event, touches[0])
            event.touches = touches
        }
        return event
    }

    function handleProxyWithVue(e) {
        var rootVueVM = this.$root
        var type = e.type
        var target = e.target
        if (target === void 0) target = {}
        var currentTarget = e.currentTarget
        var ref = currentTarget || target
        var dataset = ref.dataset
        if (dataset === void 0) dataset = {}
        var comkey = dataset.comkey
        if (comkey === void 0) comkey = ""
        var eventid = dataset.eventid
        var vm = getVM(rootVueVM, comkey.split(","))

        if (!vm) {
            return
        }

        var webEventTypes = eventTypeMap[type] || [type]
        var handles = getHandle(vm._vnode, eventid, webEventTypes)

        // TODO, enevt 还需要处理更多
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Event
        if (handles.length) {
            var event = getWebEventByMP(e)
            if (handles.length === 1) {
                var result = handles[0](event)
                return result
            }
            handles.forEach(function(h) {
                return h(event)
            })
        }
    }

    // for platforms
    // import config from 'core/config'
    // install platform specific utils
    Vue$3.config.mustUseProp = mustUseProp
    Vue$3.config.isReservedTag = isReservedTag
    Vue$3.config.isReservedAttr = isReservedAttr
    Vue$3.config.getTagNamespace = getTagNamespace
    Vue$3.config.isUnknownElement = isUnknownElement

    // install platform patch function
    Vue$3.prototype.__patch__ = patch

    // public mount method
    Vue$3.prototype.$mount = function(el, hydrating) {
        var this$1 = this

        // el = el && inBrowser ? query(el) : undefined
        // return mountComponent(this, el, hydrating)

        // 初始化小程序生命周期相关
        var options = this.$options

        if (options && (options.render || options.mpType)) {
            var mpType = options.mpType
            if (mpType === void 0) mpType = "page"
            return this._initMP(mpType, function() {
                return mountComponent(this$1, undefined, undefined)
            })
        } else {
            return mountComponent(this, undefined, undefined)
        }
    }

    // for mp
    Vue$3.prototype._initMP = initMP

    Vue$3.prototype.$updateDataToMP = updateDataToMP
    Vue$3.prototype._initDataToMP = initDataToMP

    Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue

    /*  */

    return Vue$3
})

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(10), __webpack_require__(11));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(10), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var MD5 = C_algo.MD5;

		/**
                         * This key derivation function is meant to conform with EVP_BytesToKey.
                         * www.openssl.org/docs/crypto/EVP_BytesToKey.html
                         */
		var EvpKDF = C_algo.EvpKDF = Base.extend({
			/**
                                              * Configuration options.
                                              *
                                              * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                                              * @property {Hasher} hasher The hash algorithm to use. Default: MD5
                                              * @property {number} iterations The number of iterations to perform. Default: 1
                                              */
			cfg: Base.extend({
				keySize: 128 / 32,
				hasher: MD5,
				iterations: 1 }),


			/**
                       * Initializes a newly created key derivation function.
                       *
                       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                       *
                       * @example
                       *
                       *     var kdf = CryptoJS.algo.EvpKDF.create();
                       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
                       *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
                       */
			init: function init(cfg) {
				this.cfg = this.cfg.extend(cfg);
			},

			/**
       * Derives a key from a password.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
			compute: function compute(password, salt) {
				// Shortcut
				var cfg = this.cfg;

				// Init hasher
				var hasher = cfg.hasher.create();

				// Initial values
				var derivedKey = WordArray.create();

				// Shortcuts
				var derivedKeyWords = derivedKey.words;
				var keySize = cfg.keySize;
				var iterations = cfg.iterations;

				// Generate key
				while (derivedKeyWords.length < keySize) {
					if (block) {
						hasher.update(block);
					}
					var block = hasher.update(password).finalize(salt);
					hasher.reset();

					// Iterations
					for (var i = 1; i < iterations; i++) {
						block = hasher.finalize(block);
						hasher.reset();
					}

					derivedKey.concat(block);
				}
				derivedKey.sigBytes = keySize * 4;

				return derivedKey;
			} });


		/**
          * Derives a key from a password.
          *
          * @param {WordArray|string} password The password.
          * @param {WordArray|string} salt A salt.
          * @param {Object} cfg (Optional) The configuration options to use for this computation.
          *
          * @return {WordArray} The derived key.
          *
          * @static
          *
          * @example
          *
          *     var key = CryptoJS.EvpKDF(password, salt);
          *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
          *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
          */
		C.EvpKDF = function (password, salt, cfg) {
			return EvpKDF.create(cfg).compute(password, salt);
		};
	})();


	return CryptoJS.EvpKDF;

});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _cryptoJs = __webpack_require__(44);var _cryptoJs2 = _interopRequireDefault(_cryptoJs);
var _md = __webpack_require__(39);var _md2 = _interopRequireDefault(_md);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;var url_d = "https://lmjl.ttkgou.com/lmjl_core/app/";var key = _cryptoJs2.default.enc.Utf8.parse("7de8d8a807e217ce"); //十六位十六进制数作为密钥

function ajax(url, canshu, call) {
	var urlsd = url_d + url;
	if (url != "a_get_key") {
		if (uni.getStorageSync('get_key')) {
			var get_key_e = JSON.parse(uni.getStorageSync('get_key'));
			var sd_jhsd = jiami_d(canshu, get_key_e.md5_key, get_key_e.aes_key);
			canshu = {};
			canshu.token = uni.getStorageSync('token') || '123';
			canshu.data = sd_jhsd;

		} else {
			setTimeout(function () {
				uni.navigateTo({
					url: '/pages/star/index' });

			}, 100);
			return;
		}
	}
	uni.showLoading({
		title: '加载中',
		mask: true });


	uni.request({
		url: urlsd,
		method: "POST",
		header: {
			"content-type": "application/x-www-form-urlencoded" },

		data: canshu,
		success: function success(res) {
			uni.hideLoading();
			call(res.data);
		} });



}

function jiami_d(date, md5_key, aes_key) {

	delete date.sign;
	var md5_dd = Object.keys(date).sort();
	var ss_dff_a = {};
	md5_dd.map(function (a) {
		ss_dff_a[a] = date[a];
	});


	var stringA = parseParam(ss_dff_a);

	var stringSignTemp = stringA + "&key=" + md5_key;
	console.log(stringSignTemp);
	var sign = (0, _md2.default)(stringSignTemp),
	aes_s = '',
	sd_cftyy = date;
	sd_cftyy.sign = sign;

	var ler_eer = Object.keys(date).sort();
	var ss_dff = {};
	ler_eer.map(function (a) {
		ss_dff[a] = date[a];
	});


	aes_s = JSON.stringify(ss_dff);


	return Encrypt(aes_s, aes_key);
}

// 对象转地址
function parseParam(data) {
	var _result = [];
	for (var key in data) {
		var value = data[key];
		if (value.constructor == Array) {
			value.forEach(function (_value) {
				_result.push(key + '="' + value + '"');
			});
		} else {
			_result.push(key + '=' + value + '');
		}
	}
	return _result.join('&');
};



var iv = _cryptoJs2.default.enc.Utf8.parse(''); //十六位十六进制数作为密钥偏移量

//解密方法
function Decrypt(word) {

	var encryptedHexStr = _cryptoJs2.default.enc.Hex.parse(word);
	var srcs = _cryptoJs2.default.enc.Base64.stringify(encryptedHexStr);

	var decrypt = _cryptoJs2.default.AES.decrypt(srcs, key, {
		iv: iv,
		mode: _cryptoJs2.default.mode.ECB,
		padding: _cryptoJs2.default.pad.Pkcs7 });

	var decryptedStr = decrypt.toString(_cryptoJs2.default.enc.Utf8);


	return decryptedStr.toString();
}

//加密方法
function Encrypt(word, key_e) {
	var srcs = _cryptoJs2.default.enc.Utf8.parse(word);
	if (!key_e) {
		key_e = key;
	} else {
		key_e = _cryptoJs2.default.enc.Utf8.parse(key_e);
	}
	var encrypted = _cryptoJs2.default.AES.encrypt(srcs, key_e, {
		iv: iv,
		mode: _cryptoJs2.default.mode.ECB,
		padding: _cryptoJs2.default.pad.Pkcs7 });

	return encrypted.ciphertext.toString().toUpperCase();
}

function time_er(val) {
	var crtTime = new Date(val);
	return dateFtt("yyyy-MM-dd hh:mm:ss", crtTime);
}


function dateFtt(fmt, date) {//author: meizz   
	var o = {
		"M+": date.getMonth() + 1, //月份   
		"d+": date.getDate(), //日   
		"h+": date.getHours(), //小时   
		"m+": date.getMinutes(), //分   
		"s+": date.getSeconds(), //秒   
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度   
		"S": date.getMilliseconds() //毫秒   
	};
	if (/(y+)/.test(fmt))
	fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt))
		fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));}
	return fmt;
}exports.default =
{
	Decrypt: Decrypt,
	Encrypt: Encrypt,
	ajax: ajax,
	parseParam: parseParam,
	time_er: time_er };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_enc = C.enc;

		/**
                      * Base64 encoding strategy.
                      */
		var Base64 = C_enc.Base64 = {
			/**
                                 * Converts a word array to a Base64 string.
                                 *
                                 * @param {WordArray} wordArray The word array.
                                 *
                                 * @return {string} The Base64 string.
                                 *
                                 * @static
                                 *
                                 * @example
                                 *
                                 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
                                 */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;
				var map = this._map;

				// Clamp excess bits
				wordArray.clamp();

				// Convert
				var base64Chars = [];
				for (var i = 0; i < sigBytes; i += 3) {
					var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
					var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
					var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;

					var triplet = byte1 << 16 | byte2 << 8 | byte3;

					for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
						base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
					}
				}

				// Add padding
				var paddingChar = map.charAt(64);
				if (paddingChar) {
					while (base64Chars.length % 4) {
						base64Chars.push(paddingChar);
					}
				}

				return base64Chars.join('');
			},

			/**
       * Converts a Base64 string to a word array.
       *
       * @param {string} base64Str The Base64 string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
       */
			parse: function parse(base64Str) {
				// Shortcuts
				var base64StrLength = base64Str.length;
				var map = this._map;
				var reverseMap = this._reverseMap;

				if (!reverseMap) {
					reverseMap = this._reverseMap = [];
					for (var j = 0; j < map.length; j++) {
						reverseMap[map.charCodeAt(j)] = j;
					}
				}

				// Ignore padding
				var paddingChar = map.charAt(64);
				if (paddingChar) {
					var paddingIndex = base64Str.indexOf(paddingChar);
					if (paddingIndex !== -1) {
						base64StrLength = paddingIndex;
					}
				}

				// Convert
				return parseLoop(base64Str, base64StrLength, reverseMap);

			},

			_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' };


		function parseLoop(base64Str, base64StrLength, reverseMap) {
			var words = [];
			var nBytes = 0;
			for (var i = 0; i < base64StrLength; i++) {
				if (i % 4) {
					var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
					var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
					words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
					nBytes++;
				}
			}
			return WordArray.create(words, nBytes);
		}
	})();


	return CryptoJS.enc.Base64;

});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Constants table
		var T = [];

		// Compute constants
		(function () {
			for (var i = 0; i < 64; i++) {
				T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
			}
		})();

		/**
         * MD5 hash algorithm.
         */
		var MD5 = C_algo.MD5 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = new WordArray.init([
				0x67452301, 0xefcdab89,
				0x98badcfe, 0x10325476]);

			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Swap endian
				for (var i = 0; i < 16; i++) {
					// Shortcuts
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];

					M[offset_i] =
					(M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff |
					(M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;

				}

				// Shortcuts
				var H = this._hash.words;

				var M_offset_0 = M[offset + 0];
				var M_offset_1 = M[offset + 1];
				var M_offset_2 = M[offset + 2];
				var M_offset_3 = M[offset + 3];
				var M_offset_4 = M[offset + 4];
				var M_offset_5 = M[offset + 5];
				var M_offset_6 = M[offset + 6];
				var M_offset_7 = M[offset + 7];
				var M_offset_8 = M[offset + 8];
				var M_offset_9 = M[offset + 9];
				var M_offset_10 = M[offset + 10];
				var M_offset_11 = M[offset + 11];
				var M_offset_12 = M[offset + 12];
				var M_offset_13 = M[offset + 13];
				var M_offset_14 = M[offset + 14];
				var M_offset_15 = M[offset + 15];

				// Working varialbes
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];

				// Computation
				a = FF(a, b, c, d, M_offset_0, 7, T[0]);
				d = FF(d, a, b, c, M_offset_1, 12, T[1]);
				c = FF(c, d, a, b, M_offset_2, 17, T[2]);
				b = FF(b, c, d, a, M_offset_3, 22, T[3]);
				a = FF(a, b, c, d, M_offset_4, 7, T[4]);
				d = FF(d, a, b, c, M_offset_5, 12, T[5]);
				c = FF(c, d, a, b, M_offset_6, 17, T[6]);
				b = FF(b, c, d, a, M_offset_7, 22, T[7]);
				a = FF(a, b, c, d, M_offset_8, 7, T[8]);
				d = FF(d, a, b, c, M_offset_9, 12, T[9]);
				c = FF(c, d, a, b, M_offset_10, 17, T[10]);
				b = FF(b, c, d, a, M_offset_11, 22, T[11]);
				a = FF(a, b, c, d, M_offset_12, 7, T[12]);
				d = FF(d, a, b, c, M_offset_13, 12, T[13]);
				c = FF(c, d, a, b, M_offset_14, 17, T[14]);
				b = FF(b, c, d, a, M_offset_15, 22, T[15]);

				a = GG(a, b, c, d, M_offset_1, 5, T[16]);
				d = GG(d, a, b, c, M_offset_6, 9, T[17]);
				c = GG(c, d, a, b, M_offset_11, 14, T[18]);
				b = GG(b, c, d, a, M_offset_0, 20, T[19]);
				a = GG(a, b, c, d, M_offset_5, 5, T[20]);
				d = GG(d, a, b, c, M_offset_10, 9, T[21]);
				c = GG(c, d, a, b, M_offset_15, 14, T[22]);
				b = GG(b, c, d, a, M_offset_4, 20, T[23]);
				a = GG(a, b, c, d, M_offset_9, 5, T[24]);
				d = GG(d, a, b, c, M_offset_14, 9, T[25]);
				c = GG(c, d, a, b, M_offset_3, 14, T[26]);
				b = GG(b, c, d, a, M_offset_8, 20, T[27]);
				a = GG(a, b, c, d, M_offset_13, 5, T[28]);
				d = GG(d, a, b, c, M_offset_2, 9, T[29]);
				c = GG(c, d, a, b, M_offset_7, 14, T[30]);
				b = GG(b, c, d, a, M_offset_12, 20, T[31]);

				a = HH(a, b, c, d, M_offset_5, 4, T[32]);
				d = HH(d, a, b, c, M_offset_8, 11, T[33]);
				c = HH(c, d, a, b, M_offset_11, 16, T[34]);
				b = HH(b, c, d, a, M_offset_14, 23, T[35]);
				a = HH(a, b, c, d, M_offset_1, 4, T[36]);
				d = HH(d, a, b, c, M_offset_4, 11, T[37]);
				c = HH(c, d, a, b, M_offset_7, 16, T[38]);
				b = HH(b, c, d, a, M_offset_10, 23, T[39]);
				a = HH(a, b, c, d, M_offset_13, 4, T[40]);
				d = HH(d, a, b, c, M_offset_0, 11, T[41]);
				c = HH(c, d, a, b, M_offset_3, 16, T[42]);
				b = HH(b, c, d, a, M_offset_6, 23, T[43]);
				a = HH(a, b, c, d, M_offset_9, 4, T[44]);
				d = HH(d, a, b, c, M_offset_12, 11, T[45]);
				c = HH(c, d, a, b, M_offset_15, 16, T[46]);
				b = HH(b, c, d, a, M_offset_2, 23, T[47]);

				a = II(a, b, c, d, M_offset_0, 6, T[48]);
				d = II(d, a, b, c, M_offset_7, 10, T[49]);
				c = II(c, d, a, b, M_offset_14, 15, T[50]);
				b = II(b, c, d, a, M_offset_5, 21, T[51]);
				a = II(a, b, c, d, M_offset_12, 6, T[52]);
				d = II(d, a, b, c, M_offset_3, 10, T[53]);
				c = II(c, d, a, b, M_offset_10, 15, T[54]);
				b = II(b, c, d, a, M_offset_1, 21, T[55]);
				a = II(a, b, c, d, M_offset_8, 6, T[56]);
				d = II(d, a, b, c, M_offset_15, 10, T[57]);
				c = II(c, d, a, b, M_offset_6, 15, T[58]);
				b = II(b, c, d, a, M_offset_13, 21, T[59]);
				a = II(a, b, c, d, M_offset_4, 6, T[60]);
				d = II(d, a, b, c, M_offset_11, 10, T[61]);
				c = II(c, d, a, b, M_offset_2, 15, T[62]);
				b = II(b, c, d, a, M_offset_9, 21, T[63]);

				// Intermediate hash value
				H[0] = H[0] + a | 0;
				H[1] = H[1] + b | 0;
				H[2] = H[2] + c | 0;
				H[3] = H[3] + d | 0;
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;

				var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
				var nBitsTotalL = nBitsTotal;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] =
				(nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff |
				(nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;

				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] =
				(nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff |
				(nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;


				data.sigBytes = (dataWords.length + 1) * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var hash = this._hash;
				var H = hash.words;

				// Swap endian
				for (var i = 0; i < 4; i++) {
					// Shortcut
					var H_i = H[i];

					H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff |
					(H_i << 24 | H_i >>> 8) & 0xff00ff00;
				}

				// Return final computed hash
				return hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			} });


		function FF(a, b, c, d, x, s, t) {
			var n = a + (b & c | ~b & d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function GG(a, b, c, d, x, s, t) {
			var n = a + (b & d | c & ~d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function HH(a, b, c, d, x, s, t) {
			var n = a + (b ^ c ^ d) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		function II(a, b, c, d, x, s, t) {
			var n = a + (c ^ (b | ~d)) + x + t;
			return (n << s | n >>> 32 - s) + b;
		}

		/**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.MD5('message');
     *     var hash = CryptoJS.MD5(wordArray);
     */
		C.MD5 = Hasher._createHelper(MD5);

		/**
                                      * Shortcut function to the HMAC's object interface.
                                      *
                                      * @param {WordArray|string} message The message to hash.
                                      * @param {WordArray|string} key The secret key.
                                      *
                                      * @return {WordArray} The HMAC.
                                      *
                                      * @static
                                      *
                                      * @example
                                      *
                                      *     var hmac = CryptoJS.HmacMD5(message, key);
                                      */
		C.HmacMD5 = Hasher._createHmacHelper(MD5);
	})(Math);


	return CryptoJS.MD5;

});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var X32WordArray = C_lib.WordArray;

		/**
                                       * x64 namespace.
                                       */
		var C_x64 = C.x64 = {};

		/**
                           * A 64-bit word.
                           */
		var X64Word = C_x64.Word = Base.extend({
			/**
                                            * Initializes a newly created 64-bit word.
                                            *
                                            * @param {number} high The high 32 bits.
                                            * @param {number} low The low 32 bits.
                                            *
                                            * @example
                                            *
                                            *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
                                            */
			init: function init(high, low) {
				this.high = high;
				this.low = low;
			}

			/**
      * Bitwise NOTs this word.
      *
      * @return {X64Word} A new x64-Word object after negating.
      *
      * @example
      *
      *     var negated = x64Word.not();
      */
			// not: function () {
			// var high = ~this.high;
			// var low = ~this.low;

			// return X64Word.create(high, low);
			// },

			/**
    * Bitwise ANDs this word with the passed word.
    *
    * @param {X64Word} word The x64-Word to AND with this word.
    *
    * @return {X64Word} A new x64-Word object after ANDing.
    *
    * @example
    *
    *     var anded = x64Word.and(anotherX64Word);
    */
			// and: function (word) {
			// var high = this.high & word.high;
			// var low = this.low & word.low;

			// return X64Word.create(high, low);
			// },

			/**
    * Bitwise ORs this word with the passed word.
    *
    * @param {X64Word} word The x64-Word to OR with this word.
    *
    * @return {X64Word} A new x64-Word object after ORing.
    *
    * @example
    *
    *     var ored = x64Word.or(anotherX64Word);
    */
			// or: function (word) {
			// var high = this.high | word.high;
			// var low = this.low | word.low;

			// return X64Word.create(high, low);
			// },

			/**
    * Bitwise XORs this word with the passed word.
    *
    * @param {X64Word} word The x64-Word to XOR with this word.
    *
    * @return {X64Word} A new x64-Word object after XORing.
    *
    * @example
    *
    *     var xored = x64Word.xor(anotherX64Word);
    */
			// xor: function (word) {
			// var high = this.high ^ word.high;
			// var low = this.low ^ word.low;

			// return X64Word.create(high, low);
			// },

			/**
    * Shifts this word n bits to the left.
    *
    * @param {number} n The number of bits to shift.
    *
    * @return {X64Word} A new x64-Word object after shifting.
    *
    * @example
    *
    *     var shifted = x64Word.shiftL(25);
    */
			// shiftL: function (n) {
			// if (n < 32) {
			// var high = (this.high << n) | (this.low >>> (32 - n));
			// var low = this.low << n;
			// } else {
			// var high = this.low << (n - 32);
			// var low = 0;
			// }

			// return X64Word.create(high, low);
			// },

			/**
    * Shifts this word n bits to the right.
    *
    * @param {number} n The number of bits to shift.
    *
    * @return {X64Word} A new x64-Word object after shifting.
    *
    * @example
    *
    *     var shifted = x64Word.shiftR(7);
    */
			// shiftR: function (n) {
			// if (n < 32) {
			// var low = (this.low >>> n) | (this.high << (32 - n));
			// var high = this.high >>> n;
			// } else {
			// var low = this.high >>> (n - 32);
			// var high = 0;
			// }

			// return X64Word.create(high, low);
			// },

			/**
    * Rotates this word n bits to the left.
    *
    * @param {number} n The number of bits to rotate.
    *
    * @return {X64Word} A new x64-Word object after rotating.
    *
    * @example
    *
    *     var rotated = x64Word.rotL(25);
    */
			// rotL: function (n) {
			// return this.shiftL(n).or(this.shiftR(64 - n));
			// },

			/**
    * Rotates this word n bits to the right.
    *
    * @param {number} n The number of bits to rotate.
    *
    * @return {X64Word} A new x64-Word object after rotating.
    *
    * @example
    *
    *     var rotated = x64Word.rotR(7);
    */
			// rotR: function (n) {
			// return this.shiftR(n).or(this.shiftL(64 - n));
			// },

			/**
    * Adds this word with the passed word.
    *
    * @param {X64Word} word The x64-Word to add with this word.
    *
    * @return {X64Word} A new x64-Word object after adding.
    *
    * @example
    *
    *     var added = x64Word.add(anotherX64Word);
    */
			// add: function (word) {
			// var low = (this.low + word.low) | 0;
			// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
			// var high = (this.high + word.high + carry) | 0;

			// return X64Word.create(high, low);
			// }
		});

		/**
       * An array of 64-bit words.
       *
       * @property {Array} words The array of CryptoJS.x64.Word objects.
       * @property {number} sigBytes The number of significant bytes in this word array.
       */
		var X64WordArray = C_x64.WordArray = Base.extend({
			/**
                                                      * Initializes a newly created word array.
                                                      *
                                                      * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
                                                      * @param {number} sigBytes (Optional) The number of significant bytes in the words.
                                                      *
                                                      * @example
                                                      *
                                                      *     var wordArray = CryptoJS.x64.WordArray.create();
                                                      *
                                                      *     var wordArray = CryptoJS.x64.WordArray.create([
                                                      *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                                                      *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                                                      *     ]);
                                                      *
                                                      *     var wordArray = CryptoJS.x64.WordArray.create([
                                                      *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
                                                      *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
                                                      *     ], 10);
                                                      */
			init: function init(words, sigBytes) {
				words = this.words = words || [];

				if (sigBytes != undefined) {
					this.sigBytes = sigBytes;
				} else {
					this.sigBytes = words.length * 8;
				}
			},

			/**
       * Converts this 64-bit word array to a 32-bit word array.
       *
       * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
       *
       * @example
       *
       *     var x32WordArray = x64WordArray.toX32();
       */
			toX32: function toX32() {
				// Shortcuts
				var x64Words = this.words;
				var x64WordsLength = x64Words.length;

				// Convert
				var x32Words = [];
				for (var i = 0; i < x64WordsLength; i++) {
					var x64Word = x64Words[i];
					x32Words.push(x64Word.high);
					x32Words.push(x64Word.low);
				}

				return X32WordArray.create(x32Words, this.sigBytes);
			},

			/**
       * Creates a copy of this word array.
       *
       * @return {X64WordArray} The clone.
       *
       * @example
       *
       *     var clone = x64WordArray.clone();
       */
			clone: function clone() {
				var clone = Base.clone.call(this);

				// Clone "words" array
				var words = clone.words = this.words.slice(0);

				// Clone each X64Word object
				var wordsLength = words.length;
				for (var i = 0; i < wordsLength; i++) {
					words[i] = words[i].clone();
				}

				return clone;
			} });

	})();


	return CryptoJS;

});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Reusable object
		var W = [];

		/**
               * SHA-1 hash algorithm.
               */
		var SHA1 = C_algo.SHA1 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = new WordArray.init([
				0x67452301, 0xefcdab89,
				0x98badcfe, 0x10325476,
				0xc3d2e1f0]);

			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcut
				var H = this._hash.words;

				// Working variables
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];
				var e = H[4];

				// Computation
				for (var i = 0; i < 80; i++) {
					if (i < 16) {
						W[i] = M[offset + i] | 0;
					} else {
						var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
						W[i] = n << 1 | n >>> 31;
					}

					var t = (a << 5 | a >>> 27) + e + W[i];
					if (i < 20) {
						t += (b & c | ~b & d) + 0x5a827999;
					} else if (i < 40) {
						t += (b ^ c ^ d) + 0x6ed9eba1;
					} else if (i < 60) {
						t += (b & c | b & d | c & d) - 0x70e44324;
					} else /* if (i < 80) */{
							t += (b ^ c ^ d) - 0x359d3e2a;
						}

					e = d;
					d = c;
					c = b << 30 | b >>> 2;
					b = a;
					a = t;
				}

				// Intermediate hash value
				H[0] = H[0] + a | 0;
				H[1] = H[1] + b | 0;
				H[2] = H[2] + c | 0;
				H[3] = H[3] + d | 0;
				H[4] = H[4] + e | 0;
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Return final computed hash
				return this._hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			} });


		/**
          * Shortcut function to the hasher's object interface.
          *
          * @param {WordArray|string} message The message to hash.
          *
          * @return {WordArray} The hash.
          *
          * @static
          *
          * @example
          *
          *     var hash = CryptoJS.SHA1('message');
          *     var hash = CryptoJS.SHA1(wordArray);
          */
		C.SHA1 = Hasher._createHelper(SHA1);

		/**
                                        * Shortcut function to the HMAC's object interface.
                                        *
                                        * @param {WordArray|string} message The message to hash.
                                        * @param {WordArray|string} key The secret key.
                                        *
                                        * @return {WordArray} The HMAC.
                                        *
                                        * @static
                                        *
                                        * @example
                                        *
                                        *     var hmac = CryptoJS.HmacSHA1(message, key);
                                        */
		C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	})();


	return CryptoJS.SHA1;

});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var C_enc = C.enc;
		var Utf8 = C_enc.Utf8;
		var C_algo = C.algo;

		/**
                        * HMAC algorithm.
                        */
		var HMAC = C_algo.HMAC = Base.extend({
			/**
                                          * Initializes a newly created HMAC.
                                          *
                                          * @param {Hasher} hasher The hash algorithm to use.
                                          * @param {WordArray|string} key The secret key.
                                          *
                                          * @example
                                          *
                                          *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                                          */
			init: function init(hasher, key) {
				// Init hasher
				hasher = this._hasher = new hasher.init();

				// Convert string to WordArray, else assume WordArray already
				if (typeof key == 'string') {
					key = Utf8.parse(key);
				}

				// Shortcuts
				var hasherBlockSize = hasher.blockSize;
				var hasherBlockSizeBytes = hasherBlockSize * 4;

				// Allow arbitrary length keys
				if (key.sigBytes > hasherBlockSizeBytes) {
					key = hasher.finalize(key);
				}

				// Clamp excess bits
				key.clamp();

				// Clone key for inner and outer pads
				var oKey = this._oKey = key.clone();
				var iKey = this._iKey = key.clone();

				// Shortcuts
				var oKeyWords = oKey.words;
				var iKeyWords = iKey.words;

				// XOR keys with pad constants
				for (var i = 0; i < hasherBlockSize; i++) {
					oKeyWords[i] ^= 0x5c5c5c5c;
					iKeyWords[i] ^= 0x36363636;
				}
				oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

				// Set initial values
				this.reset();
			},

			/**
       * Resets this HMAC to its initial state.
       *
       * @example
       *
       *     hmacHasher.reset();
       */
			reset: function reset() {
				// Shortcut
				var hasher = this._hasher;

				// Reset
				hasher.reset();
				hasher.update(this._iKey);
			},

			/**
       * Updates this HMAC with a message.
       *
       * @param {WordArray|string} messageUpdate The message to append.
       *
       * @return {HMAC} This HMAC instance.
       *
       * @example
       *
       *     hmacHasher.update('message');
       *     hmacHasher.update(wordArray);
       */
			update: function update(messageUpdate) {
				this._hasher.update(messageUpdate);

				// Chainable
				return this;
			},

			/**
       * Finalizes the HMAC computation.
       * Note that the finalize operation is effectively a destructive, read-once operation.
       *
       * @param {WordArray|string} messageUpdate (Optional) A final message update.
       *
       * @return {WordArray} The HMAC.
       *
       * @example
       *
       *     var hmac = hmacHasher.finalize();
       *     var hmac = hmacHasher.finalize('message');
       *     var hmac = hmacHasher.finalize(wordArray);
       */
			finalize: function finalize(messageUpdate) {
				// Shortcut
				var hasher = this._hasher;

				// Compute HMAC
				var innerHash = hasher.finalize(messageUpdate);
				hasher.reset();
				var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

				return hmac;
			} });

	})();


});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_kongbai_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_kongbai_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_kongbai_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3663e0a8_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_kongbai_vue__ = __webpack_require__(54);
function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3663e0a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_kongbai_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3663e0a8_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_kongbai_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Initialization and round constants tables
		var H = [];
		var K = [];

		// Compute constants
		(function () {
			function isPrime(n) {
				var sqrtN = Math.sqrt(n);
				for (var factor = 2; factor <= sqrtN; factor++) {
					if (!(n % factor)) {
						return false;
					}
				}

				return true;
			}

			function getFractionalBits(n) {
				return (n - (n | 0)) * 0x100000000 | 0;
			}

			var n = 2;
			var nPrime = 0;
			while (nPrime < 64) {
				if (isPrime(n)) {
					if (nPrime < 8) {
						H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
					}
					K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

					nPrime++;
				}

				n++;
			}
		})();

		// Reusable object
		var W = [];

		/**
               * SHA-256 hash algorithm.
               */
		var SHA256 = C_algo.SHA256 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = new WordArray.init(H.slice(0));
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcut
				var H = this._hash.words;

				// Working variables
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];
				var e = H[4];
				var f = H[5];
				var g = H[6];
				var h = H[7];

				// Computation
				for (var i = 0; i < 64; i++) {
					if (i < 16) {
						W[i] = M[offset + i] | 0;
					} else {
						var gamma0x = W[i - 15];
						var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (
						gamma0x << 14 | gamma0x >>> 18) ^
						gamma0x >>> 3;

						var gamma1x = W[i - 2];
						var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (
						gamma1x << 13 | gamma1x >>> 19) ^
						gamma1x >>> 10;

						W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
					}

					var ch = e & f ^ ~e & g;
					var maj = a & b ^ a & c ^ b & c;

					var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
					var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);

					var t1 = h + sigma1 + ch + K[i] + W[i];
					var t2 = sigma0 + maj;

					h = g;
					g = f;
					f = e;
					e = d + t1 | 0;
					d = c;
					c = b;
					b = a;
					a = t1 + t2 | 0;
				}

				// Intermediate hash value
				H[0] = H[0] + a | 0;
				H[1] = H[1] + b | 0;
				H[2] = H[2] + c | 0;
				H[3] = H[3] + d | 0;
				H[4] = H[4] + e | 0;
				H[5] = H[5] + f | 0;
				H[6] = H[6] + g | 0;
				H[7] = H[7] + h | 0;
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Return final computed hash
				return this._hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			} });


		/**
          * Shortcut function to the hasher's object interface.
          *
          * @param {WordArray|string} message The message to hash.
          *
          * @return {WordArray} The hash.
          *
          * @static
          *
          * @example
          *
          *     var hash = CryptoJS.SHA256('message');
          *     var hash = CryptoJS.SHA256(wordArray);
          */
		C.SHA256 = Hasher._createHelper(SHA256);

		/**
                                            * Shortcut function to the HMAC's object interface.
                                            *
                                            * @param {WordArray|string} message The message to hash.
                                            * @param {WordArray|string} key The secret key.
                                            *
                                            * @return {WordArray} The HMAC.
                                            *
                                            * @static
                                            *
                                            * @example
                                            *
                                            *     var hmac = CryptoJS.HmacSHA256(message, key);
                                            */
		C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	})(Math);


	return CryptoJS.SHA256;

});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(9));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Hasher = C_lib.Hasher;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var X64WordArray = C_x64.WordArray;
		var C_algo = C.algo;

		function X64Word_create() {
			return X64Word.create.apply(X64Word, arguments);
		}

		// Constants
		var K = [
		X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
		X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
		X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
		X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
		X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
		X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
		X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
		X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
		X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
		X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
		X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
		X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
		X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
		X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
		X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
		X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
		X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
		X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
		X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
		X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
		X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
		X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
		X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
		X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
		X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
		X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
		X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
		X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
		X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
		X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
		X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
		X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
		X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
		X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
		X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
		X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
		X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
		X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
		X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
		X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];


		// Reusable objects
		var W = [];
		(function () {
			for (var i = 0; i < 80; i++) {
				W[i] = X64Word_create();
			}
		})();

		/**
         * SHA-512 hash algorithm.
         */
		var SHA512 = C_algo.SHA512 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = new X64WordArray.init([
				new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
				new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
				new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
				new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);

			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcuts
				var H = this._hash.words;

				var H0 = H[0];
				var H1 = H[1];
				var H2 = H[2];
				var H3 = H[3];
				var H4 = H[4];
				var H5 = H[5];
				var H6 = H[6];
				var H7 = H[7];

				var H0h = H0.high;
				var H0l = H0.low;
				var H1h = H1.high;
				var H1l = H1.low;
				var H2h = H2.high;
				var H2l = H2.low;
				var H3h = H3.high;
				var H3l = H3.low;
				var H4h = H4.high;
				var H4l = H4.low;
				var H5h = H5.high;
				var H5l = H5.low;
				var H6h = H6.high;
				var H6l = H6.low;
				var H7h = H7.high;
				var H7l = H7.low;

				// Working variables
				var ah = H0h;
				var al = H0l;
				var bh = H1h;
				var bl = H1l;
				var ch = H2h;
				var cl = H2l;
				var dh = H3h;
				var dl = H3l;
				var eh = H4h;
				var el = H4l;
				var fh = H5h;
				var fl = H5l;
				var gh = H6h;
				var gl = H6l;
				var hh = H7h;
				var hl = H7l;

				// Rounds
				for (var i = 0; i < 80; i++) {
					// Shortcut
					var Wi = W[i];

					// Extend message
					if (i < 16) {
						var Wih = Wi.high = M[offset + i * 2] | 0;
						var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
					} else {
						// Gamma0
						var gamma0x = W[i - 15];
						var gamma0xh = gamma0x.high;
						var gamma0xl = gamma0x.low;
						var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
						var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);

						// Gamma1
						var gamma1x = W[i - 2];
						var gamma1xh = gamma1x.high;
						var gamma1xl = gamma1x.low;
						var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
						var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);

						// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
						var Wi7 = W[i - 7];
						var Wi7h = Wi7.high;
						var Wi7l = Wi7.low;

						var Wi16 = W[i - 16];
						var Wi16h = Wi16.high;
						var Wi16l = Wi16.low;

						var Wil = gamma0l + Wi7l;
						var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
						var Wil = Wil + gamma1l;
						var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
						var Wil = Wil + Wi16l;
						var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);

						Wi.high = Wih;
						Wi.low = Wil;
					}

					var chh = eh & fh ^ ~eh & gh;
					var chl = el & fl ^ ~el & gl;
					var majh = ah & bh ^ ah & ch ^ bh & ch;
					var majl = al & bl ^ al & cl ^ bl & cl;

					var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
					var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
					var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
					var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);

					// t1 = h + sigma1 + ch + K[i] + W[i]
					var Ki = K[i];
					var Kih = Ki.high;
					var Kil = Ki.low;

					var t1l = hl + sigma1l;
					var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
					var t1l = t1l + chl;
					var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
					var t1l = t1l + Kil;
					var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
					var t1l = t1l + Wil;
					var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);

					// t2 = sigma0 + maj
					var t2l = sigma0l + majl;
					var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);

					// Update working variables
					hh = gh;
					hl = gl;
					gh = fh;
					gl = fl;
					fh = eh;
					fl = el;
					el = dl + t1l | 0;
					eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
					dh = ch;
					dl = cl;
					ch = bh;
					cl = bl;
					bh = ah;
					bl = al;
					al = t1l + t2l | 0;
					ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
				}

				// Intermediate hash value
				H0l = H0.low = H0l + al;
				H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
				H1l = H1.low = H1l + bl;
				H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
				H2l = H2.low = H2l + cl;
				H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
				H3l = H3.low = H3l + dl;
				H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
				H4l = H4.low = H4l + el;
				H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
				H5l = H5.low = H5l + fl;
				H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
				H6l = H6.low = H6l + gl;
				H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
				H7l = H7.low = H7l + hl;
				H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
				dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Convert hash to 32-bit word array before returning
				var hash = this._hash.toX32();

				// Return final computed hash
				return hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			},

			blockSize: 1024 / 32 });


		/**
                             * Shortcut function to the hasher's object interface.
                             *
                             * @param {WordArray|string} message The message to hash.
                             *
                             * @return {WordArray} The hash.
                             *
                             * @static
                             *
                             * @example
                             *
                             *     var hash = CryptoJS.SHA512('message');
                             *     var hash = CryptoJS.SHA512(wordArray);
                             */
		C.SHA512 = Hasher._createHelper(SHA512);

		/**
                                            * Shortcut function to the HMAC's object interface.
                                            *
                                            * @param {WordArray|string} message The message to hash.
                                            * @param {WordArray|string} key The secret key.
                                            *
                                            * @return {WordArray} The HMAC.
                                            *
                                            * @static
                                            *
                                            * @example
                                            *
                                            *     var hmac = CryptoJS.HmacSHA512(message, key);
                                            */
		C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	})();


	return CryptoJS.SHA512;

});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Check if typed arrays are supported
		if (typeof ArrayBuffer != 'function') {
			return;
		}

		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;

		// Reference original init
		var superInit = WordArray.init;

		// Augment WordArray.init to handle typed arrays
		var subInit = WordArray.init = function (typedArray) {
			// Convert buffers to uint8
			if (typedArray instanceof ArrayBuffer) {
				typedArray = new Uint8Array(typedArray);
			}

			// Convert other array views to uint8
			if (
			typedArray instanceof Int8Array ||
			typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray ||
			typedArray instanceof Int16Array ||
			typedArray instanceof Uint16Array ||
			typedArray instanceof Int32Array ||
			typedArray instanceof Uint32Array ||
			typedArray instanceof Float32Array ||
			typedArray instanceof Float64Array)
			{
				typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
			}

			// Handle Uint8Array
			if (typedArray instanceof Uint8Array) {
				// Shortcut
				var typedArrayByteLength = typedArray.byteLength;

				// Extract bytes
				var words = [];
				for (var i = 0; i < typedArrayByteLength; i++) {
					words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
				}

				// Initialize this word array
				superInit.call(this, words, typedArrayByteLength);
			} else {
				// Else call normal init
				superInit.apply(this, arguments);
			}
		};

		subInit.prototype = WordArray;
	})();


	return CryptoJS.lib.WordArray;

});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_enc = C.enc;

		/**
                      * UTF-16 BE encoding strategy.
                      */
		var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
			/**
                                                 * Converts a word array to a UTF-16 BE string.
                                                 *
                                                 * @param {WordArray} wordArray The word array.
                                                 *
                                                 * @return {string} The UTF-16 BE string.
                                                 *
                                                 * @static
                                                 *
                                                 * @example
                                                 *
                                                 *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
                                                 */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var utf16Chars = [];
				for (var i = 0; i < sigBytes; i += 2) {
					var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
					utf16Chars.push(String.fromCharCode(codePoint));
				}

				return utf16Chars.join('');
			},

			/**
       * Converts a UTF-16 BE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 BE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
       */
			parse: function parse(utf16Str) {
				// Shortcut
				var utf16StrLength = utf16Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < utf16StrLength; i++) {
					words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
				}

				return WordArray.create(words, utf16StrLength * 2);
			} };


		/**
         * UTF-16 LE encoding strategy.
         */
		C_enc.Utf16LE = {
			/**
                     * Converts a word array to a UTF-16 LE string.
                     *
                     * @param {WordArray} wordArray The word array.
                     *
                     * @return {string} The UTF-16 LE string.
                     *
                     * @static
                     *
                     * @example
                     *
                     *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
                     */
			stringify: function stringify(wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var utf16Chars = [];
				for (var i = 0; i < sigBytes; i += 2) {
					var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
					utf16Chars.push(String.fromCharCode(codePoint));
				}

				return utf16Chars.join('');
			},

			/**
       * Converts a UTF-16 LE string to a word array.
       *
       * @param {string} utf16Str The UTF-16 LE string.
       *
       * @return {WordArray} The word array.
       *
       * @static
       *
       * @example
       *
       *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
       */
			parse: function parse(utf16Str) {
				// Shortcut
				var utf16StrLength = utf16Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < utf16StrLength; i++) {
					words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
				}

				return WordArray.create(words, utf16StrLength * 2);
			} };


		function swapEndian(word) {
			return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
		}
	})();


	return CryptoJS.enc.Utf16;

});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(13));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var SHA256 = C_algo.SHA256;

		/**
                               * SHA-224 hash algorithm.
                               */
		var SHA224 = C_algo.SHA224 = SHA256.extend({
			_doReset: function _doReset() {
				this._hash = new WordArray.init([
				0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
				0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);

			},

			_doFinalize: function _doFinalize() {
				var hash = SHA256._doFinalize.call(this);

				hash.sigBytes -= 4;

				return hash;
			} });


		/**
          * Shortcut function to the hasher's object interface.
          *
          * @param {WordArray|string} message The message to hash.
          *
          * @return {WordArray} The hash.
          *
          * @static
          *
          * @example
          *
          *     var hash = CryptoJS.SHA224('message');
          *     var hash = CryptoJS.SHA224(wordArray);
          */
		C.SHA224 = SHA256._createHelper(SHA224);

		/**
                                            * Shortcut function to the HMAC's object interface.
                                            *
                                            * @param {WordArray|string} message The message to hash.
                                            * @param {WordArray|string} key The secret key.
                                            *
                                            * @return {WordArray} The HMAC.
                                            *
                                            * @static
                                            *
                                            * @example
                                            *
                                            *     var hmac = CryptoJS.HmacSHA224(message, key);
                                            */
		C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	})();


	return CryptoJS.SHA224;

});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(9), __webpack_require__(14));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(9), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var X64WordArray = C_x64.WordArray;
		var C_algo = C.algo;
		var SHA512 = C_algo.SHA512;

		/**
                               * SHA-384 hash algorithm.
                               */
		var SHA384 = C_algo.SHA384 = SHA512.extend({
			_doReset: function _doReset() {
				this._hash = new X64WordArray.init([
				new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
				new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
				new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
				new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);

			},

			_doFinalize: function _doFinalize() {
				var hash = SHA512._doFinalize.call(this);

				hash.sigBytes -= 16;

				return hash;
			} });


		/**
          * Shortcut function to the hasher's object interface.
          *
          * @param {WordArray|string} message The message to hash.
          *
          * @return {WordArray} The hash.
          *
          * @static
          *
          * @example
          *
          *     var hash = CryptoJS.SHA384('message');
          *     var hash = CryptoJS.SHA384(wordArray);
          */
		C.SHA384 = SHA512._createHelper(SHA384);

		/**
                                            * Shortcut function to the HMAC's object interface.
                                            *
                                            * @param {WordArray|string} message The message to hash.
                                            * @param {WordArray|string} key The secret key.
                                            *
                                            * @return {WordArray} The HMAC.
                                            *
                                            * @static
                                            *
                                            * @example
                                            *
                                            *     var hmac = CryptoJS.HmacSHA384(message, key);
                                            */
		C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	})();


	return CryptoJS.SHA384;

});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(9));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var C_algo = C.algo;

		// Constants tables
		var RHO_OFFSETS = [];
		var PI_INDEXES = [];
		var ROUND_CONSTANTS = [];

		// Compute Constants
		(function () {
			// Compute rho offset constants
			var x = 1,y = 0;
			for (var t = 0; t < 24; t++) {
				RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;

				var newX = y % 5;
				var newY = (2 * x + 3 * y) % 5;
				x = newX;
				y = newY;
			}

			// Compute pi index constants
			for (var x = 0; x < 5; x++) {
				for (var y = 0; y < 5; y++) {
					PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
				}
			}

			// Compute round constants
			var LFSR = 0x01;
			for (var i = 0; i < 24; i++) {
				var roundConstantMsw = 0;
				var roundConstantLsw = 0;

				for (var j = 0; j < 7; j++) {
					if (LFSR & 0x01) {
						var bitPosition = (1 << j) - 1;
						if (bitPosition < 32) {
							roundConstantLsw ^= 1 << bitPosition;
						} else /* if (bitPosition >= 32) */{
								roundConstantMsw ^= 1 << bitPosition - 32;
							}
					}

					// Compute next LFSR
					if (LFSR & 0x80) {
						// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
						LFSR = LFSR << 1 ^ 0x71;
					} else {
						LFSR <<= 1;
					}
				}

				ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
			}
		})();

		// Reusable objects for temporary values
		var T = [];
		(function () {
			for (var i = 0; i < 25; i++) {
				T[i] = X64Word.create();
			}
		})();

		/**
         * SHA-3 hash algorithm.
         */
		var SHA3 = C_algo.SHA3 = Hasher.extend({
			/**
                                            * Configuration options.
                                            *
                                            * @property {number} outputLength
                                            *   The desired number of bits in the output hash.
                                            *   Only values permitted are: 224, 256, 384, 512.
                                            *   Default: 512
                                            */
			cfg: Hasher.cfg.extend({
				outputLength: 512 }),


			_doReset: function _doReset() {
				var state = this._state = [];
				for (var i = 0; i < 25; i++) {
					state[i] = new X64Word.init();
				}

				this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcuts
				var state = this._state;
				var nBlockSizeLanes = this.blockSize / 2;

				// Absorb
				for (var i = 0; i < nBlockSizeLanes; i++) {
					// Shortcuts
					var M2i = M[offset + 2 * i];
					var M2i1 = M[offset + 2 * i + 1];

					// Swap endian
					M2i =
					(M2i << 8 | M2i >>> 24) & 0x00ff00ff |
					(M2i << 24 | M2i >>> 8) & 0xff00ff00;

					M2i1 =
					(M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff |
					(M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;


					// Absorb message into state
					var lane = state[i];
					lane.high ^= M2i1;
					lane.low ^= M2i;
				}

				// Rounds
				for (var round = 0; round < 24; round++) {
					// Theta
					for (var x = 0; x < 5; x++) {
						// Mix column lanes
						var tMsw = 0,tLsw = 0;
						for (var y = 0; y < 5; y++) {
							var lane = state[x + 5 * y];
							tMsw ^= lane.high;
							tLsw ^= lane.low;
						}

						// Temporary values
						var Tx = T[x];
						Tx.high = tMsw;
						Tx.low = tLsw;
					}
					for (var x = 0; x < 5; x++) {
						// Shortcuts
						var Tx4 = T[(x + 4) % 5];
						var Tx1 = T[(x + 1) % 5];
						var Tx1Msw = Tx1.high;
						var Tx1Lsw = Tx1.low;

						// Mix surrounding columns
						var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
						var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
						for (var y = 0; y < 5; y++) {
							var lane = state[x + 5 * y];
							lane.high ^= tMsw;
							lane.low ^= tLsw;
						}
					}

					// Rho Pi
					for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
						// Shortcuts
						var lane = state[laneIndex];
						var laneMsw = lane.high;
						var laneLsw = lane.low;
						var rhoOffset = RHO_OFFSETS[laneIndex];

						// Rotate lanes
						if (rhoOffset < 32) {
							var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
							var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
						} else /* if (rhoOffset >= 32) */{
								var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
								var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
							}

						// Transpose lanes
						var TPiLane = T[PI_INDEXES[laneIndex]];
						TPiLane.high = tMsw;
						TPiLane.low = tLsw;
					}

					// Rho pi at x = y = 0
					var T0 = T[0];
					var state0 = state[0];
					T0.high = state0.high;
					T0.low = state0.low;

					// Chi
					for (var x = 0; x < 5; x++) {
						for (var y = 0; y < 5; y++) {
							// Shortcuts
							var laneIndex = x + 5 * y;
							var lane = state[laneIndex];
							var TLane = T[laneIndex];
							var Tx1Lane = T[(x + 1) % 5 + 5 * y];
							var Tx2Lane = T[(x + 2) % 5 + 5 * y];

							// Mix rows
							lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
							lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
						}
					}

					// Iota
					var lane = state[0];
					var roundConstant = ROUND_CONSTANTS[round];
					lane.high ^= roundConstant.high;
					lane.low ^= roundConstant.low;;
				}
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;
				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;
				var blockSizeBits = this.blockSize * 32;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
				dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var state = this._state;
				var outputLengthBytes = this.cfg.outputLength / 8;
				var outputLengthLanes = outputLengthBytes / 8;

				// Squeeze
				var hashWords = [];
				for (var i = 0; i < outputLengthLanes; i++) {
					// Shortcuts
					var lane = state[i];
					var laneMsw = lane.high;
					var laneLsw = lane.low;

					// Swap endian
					laneMsw =
					(laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff |
					(laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;

					laneLsw =
					(laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff |
					(laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;


					// Squeeze state to retrieve hash
					hashWords.push(laneLsw);
					hashWords.push(laneMsw);
				}

				// Return final computed hash
				return new WordArray.init(hashWords, outputLengthBytes);
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);

				var state = clone._state = this._state.slice(0);
				for (var i = 0; i < 25; i++) {
					state[i] = state[i].clone();
				}

				return clone;
			} });


		/**
          * Shortcut function to the hasher's object interface.
          *
          * @param {WordArray|string} message The message to hash.
          *
          * @return {WordArray} The hash.
          *
          * @static
          *
          * @example
          *
          *     var hash = CryptoJS.SHA3('message');
          *     var hash = CryptoJS.SHA3(wordArray);
          */
		C.SHA3 = Hasher._createHelper(SHA3);

		/**
                                        * Shortcut function to the HMAC's object interface.
                                        *
                                        * @param {WordArray|string} message The message to hash.
                                        * @param {WordArray|string} key The secret key.
                                        *
                                        * @return {WordArray} The HMAC.
                                        *
                                        * @static
                                        *
                                        * @example
                                        *
                                        *     var hmac = CryptoJS.HmacSHA3(message, key);
                                        */
		C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	})(Math);


	return CryptoJS.SHA3;

});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/** @preserve
                                   (c) 2012 by Cédric Mesnil. All rights reserved.
                                   	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                   	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                       - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                   	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                   */




	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Constants table
		var _zl = WordArray.create([
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
		7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
		3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
		1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
		4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
		var _zr = WordArray.create([
		5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
		6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
		15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
		8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
		12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
		var _sl = WordArray.create([
		11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
		7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
		11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
		11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
		9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
		var _sr = WordArray.create([
		8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
		9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
		9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
		15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
		8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

		var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
		var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

		/**
                                                                                             * RIPEMD160 hash algorithm.
                                                                                             */
		var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
			_doReset: function _doReset() {
				this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {

				// Swap endian
				for (var i = 0; i < 16; i++) {
					// Shortcuts
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];

					// Swap
					M[offset_i] =
					(M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff |
					(M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;

				}
				// Shortcut
				var H = this._hash.words;
				var hl = _hl.words;
				var hr = _hr.words;
				var zl = _zl.words;
				var zr = _zr.words;
				var sl = _sl.words;
				var sr = _sr.words;

				// Working variables
				var al, bl, cl, dl, el;
				var ar, br, cr, dr, er;

				ar = al = H[0];
				br = bl = H[1];
				cr = cl = H[2];
				dr = dl = H[3];
				er = el = H[4];
				// Computation
				var t;
				for (var i = 0; i < 80; i += 1) {
					t = al + M[offset + zl[i]] | 0;
					if (i < 16) {
						t += f1(bl, cl, dl) + hl[0];
					} else if (i < 32) {
						t += f2(bl, cl, dl) + hl[1];
					} else if (i < 48) {
						t += f3(bl, cl, dl) + hl[2];
					} else if (i < 64) {
						t += f4(bl, cl, dl) + hl[3];
					} else {// if (i<80) {
						t += f5(bl, cl, dl) + hl[4];
					}
					t = t | 0;
					t = rotl(t, sl[i]);
					t = t + el | 0;
					al = el;
					el = dl;
					dl = rotl(cl, 10);
					cl = bl;
					bl = t;

					t = ar + M[offset + zr[i]] | 0;
					if (i < 16) {
						t += f5(br, cr, dr) + hr[0];
					} else if (i < 32) {
						t += f4(br, cr, dr) + hr[1];
					} else if (i < 48) {
						t += f3(br, cr, dr) + hr[2];
					} else if (i < 64) {
						t += f2(br, cr, dr) + hr[3];
					} else {// if (i<80) {
						t += f1(br, cr, dr) + hr[4];
					}
					t = t | 0;
					t = rotl(t, sr[i]);
					t = t + er | 0;
					ar = er;
					er = dr;
					dr = rotl(cr, 10);
					cr = br;
					br = t;
				}
				// Intermediate hash value
				t = H[1] + cl + dr | 0;
				H[1] = H[2] + dl + er | 0;
				H[2] = H[3] + el + ar | 0;
				H[3] = H[4] + al + br | 0;
				H[4] = H[0] + bl + cr | 0;
				H[0] = t;
			},

			_doFinalize: function _doFinalize() {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
				dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] =
				(nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff |
				(nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;

				data.sigBytes = (dataWords.length + 1) * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var hash = this._hash;
				var H = hash.words;

				// Swap endian
				for (var i = 0; i < 5; i++) {
					// Shortcut
					var H_i = H[i];

					// Swap
					H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff |
					(H_i << 24 | H_i >>> 8) & 0xff00ff00;
				}

				// Return final computed hash
				return hash;
			},

			clone: function clone() {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			} });



		function f1(x, y, z) {
			return x ^ y ^ z;

		}

		function f2(x, y, z) {
			return x & y | ~x & z;
		}

		function f3(x, y, z) {
			return (x | ~y) ^ z;
		}

		function f4(x, y, z) {
			return x & z | y & ~z;
		}

		function f5(x, y, z) {
			return x ^ (y | ~z);

		}

		function rotl(x, n) {
			return x << n | x >>> 32 - n;
		}


		/**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.RIPEMD160('message');
     *     var hash = CryptoJS.RIPEMD160(wordArray);
     */
		C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

		/**
                                                  * Shortcut function to the HMAC's object interface.
                                                  *
                                                  * @param {WordArray|string} message The message to hash.
                                                  * @param {WordArray|string} key The secret key.
                                                  *
                                                  * @return {WordArray} The HMAC.
                                                  *
                                                  * @static
                                                  *
                                                  * @example
                                                  *
                                                  *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
                                                  */
		C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	})(Math);


	return CryptoJS.RIPEMD160;

});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(10), __webpack_require__(11));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(10), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var SHA1 = C_algo.SHA1;
		var HMAC = C_algo.HMAC;

		/**
                           * Password-Based Key Derivation Function 2 algorithm.
                           */
		var PBKDF2 = C_algo.PBKDF2 = Base.extend({
			/**
                                              * Configuration options.
                                              *
                                              * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
                                              * @property {Hasher} hasher The hasher to use. Default: SHA1
                                              * @property {number} iterations The number of iterations to perform. Default: 1
                                              */
			cfg: Base.extend({
				keySize: 128 / 32,
				hasher: SHA1,
				iterations: 1 }),


			/**
                       * Initializes a newly created key derivation function.
                       *
                       * @param {Object} cfg (Optional) The configuration options to use for the derivation.
                       *
                       * @example
                       *
                       *     var kdf = CryptoJS.algo.PBKDF2.create();
                       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
                       *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
                       */
			init: function init(cfg) {
				this.cfg = this.cfg.extend(cfg);
			},

			/**
       * Computes the Password-Based Key Derivation Function 2.
       *
       * @param {WordArray|string} password The password.
       * @param {WordArray|string} salt A salt.
       *
       * @return {WordArray} The derived key.
       *
       * @example
       *
       *     var key = kdf.compute(password, salt);
       */
			compute: function compute(password, salt) {
				// Shortcut
				var cfg = this.cfg;

				// Init HMAC
				var hmac = HMAC.create(cfg.hasher, password);

				// Initial values
				var derivedKey = WordArray.create();
				var blockIndex = WordArray.create([0x00000001]);

				// Shortcuts
				var derivedKeyWords = derivedKey.words;
				var blockIndexWords = blockIndex.words;
				var keySize = cfg.keySize;
				var iterations = cfg.iterations;

				// Generate key
				while (derivedKeyWords.length < keySize) {
					var block = hmac.update(salt).finalize(blockIndex);
					hmac.reset();

					// Shortcuts
					var blockWords = block.words;
					var blockWordsLength = blockWords.length;

					// Iterations
					var intermediate = block;
					for (var i = 1; i < iterations; i++) {
						intermediate = hmac.finalize(intermediate);
						hmac.reset();

						// Shortcut
						var intermediateWords = intermediate.words;

						// XOR intermediate with block
						for (var j = 0; j < blockWordsLength; j++) {
							blockWords[j] ^= intermediateWords[j];
						}
					}

					derivedKey.concat(block);
					blockIndexWords[0]++;
				}
				derivedKey.sigBytes = keySize * 4;

				return derivedKey;
			} });


		/**
          * Computes the Password-Based Key Derivation Function 2.
          *
          * @param {WordArray|string} password The password.
          * @param {WordArray|string} salt A salt.
          * @param {Object} cfg (Optional) The configuration options to use for this computation.
          *
          * @return {WordArray} The derived key.
          *
          * @static
          *
          * @example
          *
          *     var key = CryptoJS.PBKDF2(password, salt);
          *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
          *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
          */
		C.PBKDF2 = function (password, salt, cfg) {
			return PBKDF2.create(cfg).compute(password, salt);
		};
	})();


	return CryptoJS.PBKDF2;

});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Cipher Feedback block mode.
                                    */
	CryptoJS.mode.CFB = function () {
		var CFB = CryptoJS.lib.BlockCipherMode.extend();

		CFB.Encryptor = CFB.extend({
			processBlock: function processBlock(words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;

				generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

				// Remember this block to use with next block
				this._prevBlock = words.slice(offset, offset + blockSize);
			} });


		CFB.Decryptor = CFB.extend({
			processBlock: function processBlock(words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;

				// Remember this block to use with next block
				var thisBlock = words.slice(offset, offset + blockSize);

				generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

				// This block becomes the previous block
				this._prevBlock = thisBlock;
			} });


		function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
			// Shortcut
			var iv = this._iv;

			// Generate keystream
			if (iv) {
				var keystream = iv.slice(0);

				// Remove IV for subsequent blocks
				this._iv = undefined;
			} else {
				var keystream = this._prevBlock;
			}
			cipher.encryptBlock(keystream, 0);

			// Encrypt
			for (var i = 0; i < blockSize; i++) {
				words[offset + i] ^= keystream[i];
			}
		}

		return CFB;
	}();


	return CryptoJS.mode.CFB;

});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Counter block mode.
                                    */
	CryptoJS.mode.CTR = function () {
		var CTR = CryptoJS.lib.BlockCipherMode.extend();

		var Encryptor = CTR.Encryptor = CTR.extend({
			processBlock: function processBlock(words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var counter = this._counter;

				// Generate keystream
				if (iv) {
					counter = this._counter = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}
				var keystream = counter.slice(0);
				cipher.encryptBlock(keystream, 0);

				// Increment counter
				counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			} });


		CTR.Decryptor = Encryptor;

		return CTR;
	}();


	return CryptoJS.mode.CTR;

});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/** @preserve
                                    * Counter block mode compatible with  Dr Brian Gladman fileenc.c
                                    * derived from CryptoJS.mode.CTR
                                    * Jan Hruby jhruby.web@gmail.com
                                    */
	CryptoJS.mode.CTRGladman = function () {
		var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if ((word >> 24 & 0xff) === 0xff) {//overflow
				var b1 = word >> 16 & 0xff;
				var b2 = word >> 8 & 0xff;
				var b3 = word & 0xff;

				if (b1 === 0xff) // overflow b1
					{
						b1 = 0;
						if (b2 === 0xff)
						{
							b2 = 0;
							if (b3 === 0xff)
							{
								b3 = 0;
							} else

							{
								++b3;
							}
						} else

						{
							++b2;
						}
					} else

				{
					++b1;
				}

				word = 0;
				word += b1 << 16;
				word += b2 << 8;
				word += b3;
			} else

			{
				word += 0x01 << 24;
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

		var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
			processBlock: function processBlock(words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var counter = this._counter;

				// Generate keystream
				if (iv) {
					counter = this._counter = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}

				incCounter(counter);

				var keystream = counter.slice(0);
				cipher.encryptBlock(keystream, 0);

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			} });


		CTRGladman.Decryptor = Encryptor;

		return CTRGladman;
	}();




	return CryptoJS.mode.CTRGladman;

});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Output Feedback block mode.
                                    */
	CryptoJS.mode.OFB = function () {
		var OFB = CryptoJS.lib.BlockCipherMode.extend();

		var Encryptor = OFB.Encryptor = OFB.extend({
			processBlock: function processBlock(words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var keystream = this._keystream;

				// Generate keystream
				if (iv) {
					keystream = this._keystream = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}
				cipher.encryptBlock(keystream, 0);

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			} });


		OFB.Decryptor = Encryptor;

		return OFB;
	}();


	return CryptoJS.mode.OFB;

});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Electronic Codebook block mode.
                                    */
	CryptoJS.mode.ECB = function () {
		var ECB = CryptoJS.lib.BlockCipherMode.extend();

		ECB.Encryptor = ECB.extend({
			processBlock: function processBlock(words, offset) {
				this._cipher.encryptBlock(words, offset);
			} });


		ECB.Decryptor = ECB.extend({
			processBlock: function processBlock(words, offset) {
				this._cipher.decryptBlock(words, offset);
			} });


		return ECB;
	}();


	return CryptoJS.mode.ECB;

});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * ANSI X.923 padding strategy.
                                    */
	CryptoJS.pad.AnsiX923 = {
		pad: function pad(data, blockSize) {
			// Shortcuts
			var dataSigBytes = data.sigBytes;
			var blockSizeBytes = blockSize * 4;

			// Count padding bytes
			var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

			// Compute last byte position
			var lastBytePos = dataSigBytes + nPaddingBytes - 1;

			// Pad
			data.clamp();
			data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
			data.sigBytes += nPaddingBytes;
		},

		unpad: function unpad(data) {
			// Get number of padding bytes from last byte
			var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

			// Remove padding
			data.sigBytes -= nPaddingBytes;
		} };



	return CryptoJS.pad.Ansix923;

});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * ISO 10126 padding strategy.
                                    */
	CryptoJS.pad.Iso10126 = {
		pad: function pad(data, blockSize) {
			// Shortcut
			var blockSizeBytes = blockSize * 4;

			// Count padding bytes
			var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

			// Pad
			data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
			concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
		},

		unpad: function unpad(data) {
			// Get number of padding bytes from last byte
			var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;

			// Remove padding
			data.sigBytes -= nPaddingBytes;
		} };



	return CryptoJS.pad.Iso10126;

});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * ISO/IEC 9797-1 Padding Method 2.
                                    */
	CryptoJS.pad.Iso97971 = {
		pad: function pad(data, blockSize) {
			// Add 0x80 byte
			data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

			// Zero pad the rest
			CryptoJS.pad.ZeroPadding.pad(data, blockSize);
		},

		unpad: function unpad(data) {
			// Remove zero padding
			CryptoJS.pad.ZeroPadding.unpad(data);

			// Remove one more byte -- the 0x80 byte
			data.sigBytes--;
		} };



	return CryptoJS.pad.Iso97971;

});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * Zero padding strategy.
                                    */
	CryptoJS.pad.ZeroPadding = {
		pad: function pad(data, blockSize) {
			// Shortcut
			var blockSizeBytes = blockSize * 4;

			// Pad
			data.clamp();
			data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
		},

		unpad: function unpad(data) {
			// Shortcut
			var dataWords = data.words;

			// Unpad
			var i = data.sigBytes - 1;
			while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {
				i--;
			}
			data.sigBytes = i + 1;
		} };



	return CryptoJS.pad.ZeroPadding;

});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	/**
                                    * A noop padding strategy.
                                    */
	CryptoJS.pad.NoPadding = {
		pad: function pad() {
		},

		unpad: function unpad() {
		} };



	return CryptoJS.pad.NoPadding;

});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var CipherParams = C_lib.CipherParams;
		var C_enc = C.enc;
		var Hex = C_enc.Hex;
		var C_format = C.format;

		var HexFormatter = C_format.Hex = {
			/**
                                       * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
                                       *
                                       * @param {CipherParams} cipherParams The cipher params object.
                                       *
                                       * @return {string} The hexadecimally encoded string.
                                       *
                                       * @static
                                       *
                                       * @example
                                       *
                                       *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
                                       */
			stringify: function stringify(cipherParams) {
				return cipherParams.ciphertext.toString(Hex);
			},

			/**
       * Converts a hexadecimally encoded ciphertext string to a cipher params object.
       *
       * @param {string} input The hexadecimally encoded string.
       *
       * @return {CipherParams} The cipher params object.
       *
       * @static
       *
       * @example
       *
       *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
       */
			parse: function parse(input) {
				var ciphertext = Hex.parse(input);
				return CipherParams.create({ ciphertext: ciphertext });
			} };

	})();


	return CryptoJS.format.Hex;

});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var BlockCipher = C_lib.BlockCipher;
		var C_algo = C.algo;

		// Lookup tables
		var SBOX = [];
		var INV_SBOX = [];
		var SUB_MIX_0 = [];
		var SUB_MIX_1 = [];
		var SUB_MIX_2 = [];
		var SUB_MIX_3 = [];
		var INV_SUB_MIX_0 = [];
		var INV_SUB_MIX_1 = [];
		var INV_SUB_MIX_2 = [];
		var INV_SUB_MIX_3 = [];

		// Compute lookup tables
		(function () {
			// Compute double table
			var d = [];
			for (var i = 0; i < 256; i++) {
				if (i < 128) {
					d[i] = i << 1;
				} else {
					d[i] = i << 1 ^ 0x11b;
				}
			}

			// Walk GF(2^8)
			var x = 0;
			var xi = 0;
			for (var i = 0; i < 256; i++) {
				// Compute sbox
				var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
				sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
				SBOX[x] = sx;
				INV_SBOX[sx] = x;

				// Compute multiplication
				var x2 = d[x];
				var x4 = d[x2];
				var x8 = d[x4];

				// Compute sub bytes, mix columns tables
				var t = d[sx] * 0x101 ^ sx * 0x1010100;
				SUB_MIX_0[x] = t << 24 | t >>> 8;
				SUB_MIX_1[x] = t << 16 | t >>> 16;
				SUB_MIX_2[x] = t << 8 | t >>> 24;
				SUB_MIX_3[x] = t;

				// Compute inv sub bytes, inv mix columns tables
				var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
				INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
				INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
				INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
				INV_SUB_MIX_3[sx] = t;

				// Compute next counter
				if (!x) {
					x = xi = 1;
				} else {
					x = x2 ^ d[d[d[x8 ^ x2]]];
					xi ^= d[d[xi]];
				}
			}
		})();

		// Precomputed Rcon lookup
		var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

		/**
                                                                                  * AES block cipher algorithm.
                                                                                  */
		var AES = C_algo.AES = BlockCipher.extend({
			_doReset: function _doReset() {
				// Skip reset of nRounds has been set before and key did not change
				if (this._nRounds && this._keyPriorReset === this._key) {
					return;
				}

				// Shortcuts
				var key = this._keyPriorReset = this._key;
				var keyWords = key.words;
				var keySize = key.sigBytes / 4;

				// Compute number of rounds
				var nRounds = this._nRounds = keySize + 6;

				// Compute number of key schedule rows
				var ksRows = (nRounds + 1) * 4;

				// Compute key schedule
				var keySchedule = this._keySchedule = [];
				for (var ksRow = 0; ksRow < ksRows; ksRow++) {
					if (ksRow < keySize) {
						keySchedule[ksRow] = keyWords[ksRow];
					} else {
						var t = keySchedule[ksRow - 1];

						if (!(ksRow % keySize)) {
							// Rot word
							t = t << 8 | t >>> 24;

							// Sub word
							t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];

							// Mix Rcon
							t ^= RCON[ksRow / keySize | 0] << 24;
						} else if (keySize > 6 && ksRow % keySize == 4) {
							// Sub word
							t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
						}

						keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
					}
				}

				// Compute inv key schedule
				var invKeySchedule = this._invKeySchedule = [];
				for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
					var ksRow = ksRows - invKsRow;

					if (invKsRow % 4) {
						var t = keySchedule[ksRow];
					} else {
						var t = keySchedule[ksRow - 4];
					}

					if (invKsRow < 4 || ksRow <= 4) {
						invKeySchedule[invKsRow] = t;
					} else {
						invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^
						INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
					}
				}
			},

			encryptBlock: function encryptBlock(M, offset) {
				this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
			},

			decryptBlock: function decryptBlock(M, offset) {
				// Swap 2nd and 4th rows
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;

				this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

				// Inv swap 2nd and 4th rows
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;
			},

			_doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
				// Shortcut
				var nRounds = this._nRounds;

				// Get input, add round key
				var s0 = M[offset] ^ keySchedule[0];
				var s1 = M[offset + 1] ^ keySchedule[1];
				var s2 = M[offset + 2] ^ keySchedule[2];
				var s3 = M[offset + 3] ^ keySchedule[3];

				// Key schedule row counter
				var ksRow = 4;

				// Rounds
				for (var round = 1; round < nRounds; round++) {
					// Shift rows, sub bytes, mix columns, add round key
					var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
					var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
					var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
					var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

					// Update state
					s0 = t0;
					s1 = t1;
					s2 = t2;
					s3 = t3;
				}

				// Shift rows, sub bytes, add round key
				var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
				var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
				var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
				var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

				// Set output
				M[offset] = t0;
				M[offset + 1] = t1;
				M[offset + 2] = t2;
				M[offset + 3] = t3;
			},

			keySize: 256 / 32 });


		/**
                          * Shortcut functions to the cipher's object interface.
                          *
                          * @example
                          *
                          *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
                          *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
                          */
		C.AES = BlockCipher._createHelper(AES);
	})();


	return CryptoJS.AES;

});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var BlockCipher = C_lib.BlockCipher;
		var C_algo = C.algo;

		// Permuted Choice 1 constants
		var PC1 = [
		57, 49, 41, 33, 25, 17, 9, 1,
		58, 50, 42, 34, 26, 18, 10, 2,
		59, 51, 43, 35, 27, 19, 11, 3,
		60, 52, 44, 36, 63, 55, 47, 39,
		31, 23, 15, 7, 62, 54, 46, 38,
		30, 22, 14, 6, 61, 53, 45, 37,
		29, 21, 13, 5, 28, 20, 12, 4];


		// Permuted Choice 2 constants
		var PC2 = [
		14, 17, 11, 24, 1, 5,
		3, 28, 15, 6, 21, 10,
		23, 19, 12, 4, 26, 8,
		16, 7, 27, 20, 13, 2,
		41, 52, 31, 37, 47, 55,
		30, 40, 51, 45, 33, 48,
		44, 49, 39, 56, 34, 53,
		46, 42, 50, 36, 29, 32];


		// Cumulative bit shift constants
		var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

		// SBOXes and round permutation constants
		var SBOX_P = [
		{
			0x0: 0x808200,
			0x10000000: 0x8000,
			0x20000000: 0x808002,
			0x30000000: 0x2,
			0x40000000: 0x200,
			0x50000000: 0x808202,
			0x60000000: 0x800202,
			0x70000000: 0x800000,
			0x80000000: 0x202,
			0x90000000: 0x800200,
			0xa0000000: 0x8200,
			0xb0000000: 0x808000,
			0xc0000000: 0x8002,
			0xd0000000: 0x800002,
			0xe0000000: 0x0,
			0xf0000000: 0x8202,
			0x8000000: 0x0,
			0x18000000: 0x808202,
			0x28000000: 0x8202,
			0x38000000: 0x8000,
			0x48000000: 0x808200,
			0x58000000: 0x200,
			0x68000000: 0x808002,
			0x78000000: 0x2,
			0x88000000: 0x800200,
			0x98000000: 0x8200,
			0xa8000000: 0x808000,
			0xb8000000: 0x800202,
			0xc8000000: 0x800002,
			0xd8000000: 0x8002,
			0xe8000000: 0x202,
			0xf8000000: 0x800000,
			0x1: 0x8000,
			0x10000001: 0x2,
			0x20000001: 0x808200,
			0x30000001: 0x800000,
			0x40000001: 0x808002,
			0x50000001: 0x8200,
			0x60000001: 0x200,
			0x70000001: 0x800202,
			0x80000001: 0x808202,
			0x90000001: 0x808000,
			0xa0000001: 0x800002,
			0xb0000001: 0x8202,
			0xc0000001: 0x202,
			0xd0000001: 0x800200,
			0xe0000001: 0x8002,
			0xf0000001: 0x0,
			0x8000001: 0x808202,
			0x18000001: 0x808000,
			0x28000001: 0x800000,
			0x38000001: 0x200,
			0x48000001: 0x8000,
			0x58000001: 0x800002,
			0x68000001: 0x2,
			0x78000001: 0x8202,
			0x88000001: 0x8002,
			0x98000001: 0x800202,
			0xa8000001: 0x202,
			0xb8000001: 0x808200,
			0xc8000001: 0x800200,
			0xd8000001: 0x0,
			0xe8000001: 0x8200,
			0xf8000001: 0x808002 },

		{
			0x0: 0x40084010,
			0x1000000: 0x4000,
			0x2000000: 0x80000,
			0x3000000: 0x40080010,
			0x4000000: 0x40000010,
			0x5000000: 0x40084000,
			0x6000000: 0x40004000,
			0x7000000: 0x10,
			0x8000000: 0x84000,
			0x9000000: 0x40004010,
			0xa000000: 0x40000000,
			0xb000000: 0x84010,
			0xc000000: 0x80010,
			0xd000000: 0x0,
			0xe000000: 0x4010,
			0xf000000: 0x40080000,
			0x800000: 0x40004000,
			0x1800000: 0x84010,
			0x2800000: 0x10,
			0x3800000: 0x40004010,
			0x4800000: 0x40084010,
			0x5800000: 0x40000000,
			0x6800000: 0x80000,
			0x7800000: 0x40080010,
			0x8800000: 0x80010,
			0x9800000: 0x0,
			0xa800000: 0x4000,
			0xb800000: 0x40080000,
			0xc800000: 0x40000010,
			0xd800000: 0x84000,
			0xe800000: 0x40084000,
			0xf800000: 0x4010,
			0x10000000: 0x0,
			0x11000000: 0x40080010,
			0x12000000: 0x40004010,
			0x13000000: 0x40084000,
			0x14000000: 0x40080000,
			0x15000000: 0x10,
			0x16000000: 0x84010,
			0x17000000: 0x4000,
			0x18000000: 0x4010,
			0x19000000: 0x80000,
			0x1a000000: 0x80010,
			0x1b000000: 0x40000010,
			0x1c000000: 0x84000,
			0x1d000000: 0x40004000,
			0x1e000000: 0x40000000,
			0x1f000000: 0x40084010,
			0x10800000: 0x84010,
			0x11800000: 0x80000,
			0x12800000: 0x40080000,
			0x13800000: 0x4000,
			0x14800000: 0x40004000,
			0x15800000: 0x40084010,
			0x16800000: 0x10,
			0x17800000: 0x40000000,
			0x18800000: 0x40084000,
			0x19800000: 0x40000010,
			0x1a800000: 0x40004010,
			0x1b800000: 0x80010,
			0x1c800000: 0x0,
			0x1d800000: 0x4010,
			0x1e800000: 0x40080010,
			0x1f800000: 0x84000 },

		{
			0x0: 0x104,
			0x100000: 0x0,
			0x200000: 0x4000100,
			0x300000: 0x10104,
			0x400000: 0x10004,
			0x500000: 0x4000004,
			0x600000: 0x4010104,
			0x700000: 0x4010000,
			0x800000: 0x4000000,
			0x900000: 0x4010100,
			0xa00000: 0x10100,
			0xb00000: 0x4010004,
			0xc00000: 0x4000104,
			0xd00000: 0x10000,
			0xe00000: 0x4,
			0xf00000: 0x100,
			0x80000: 0x4010100,
			0x180000: 0x4010004,
			0x280000: 0x0,
			0x380000: 0x4000100,
			0x480000: 0x4000004,
			0x580000: 0x10000,
			0x680000: 0x10004,
			0x780000: 0x104,
			0x880000: 0x4,
			0x980000: 0x100,
			0xa80000: 0x4010000,
			0xb80000: 0x10104,
			0xc80000: 0x10100,
			0xd80000: 0x4000104,
			0xe80000: 0x4010104,
			0xf80000: 0x4000000,
			0x1000000: 0x4010100,
			0x1100000: 0x10004,
			0x1200000: 0x10000,
			0x1300000: 0x4000100,
			0x1400000: 0x100,
			0x1500000: 0x4010104,
			0x1600000: 0x4000004,
			0x1700000: 0x0,
			0x1800000: 0x4000104,
			0x1900000: 0x4000000,
			0x1a00000: 0x4,
			0x1b00000: 0x10100,
			0x1c00000: 0x4010000,
			0x1d00000: 0x104,
			0x1e00000: 0x10104,
			0x1f00000: 0x4010004,
			0x1080000: 0x4000000,
			0x1180000: 0x104,
			0x1280000: 0x4010100,
			0x1380000: 0x0,
			0x1480000: 0x10004,
			0x1580000: 0x4000100,
			0x1680000: 0x100,
			0x1780000: 0x4010004,
			0x1880000: 0x10000,
			0x1980000: 0x4010104,
			0x1a80000: 0x10104,
			0x1b80000: 0x4000004,
			0x1c80000: 0x4000104,
			0x1d80000: 0x4010000,
			0x1e80000: 0x4,
			0x1f80000: 0x10100 },

		{
			0x0: 0x80401000,
			0x10000: 0x80001040,
			0x20000: 0x401040,
			0x30000: 0x80400000,
			0x40000: 0x0,
			0x50000: 0x401000,
			0x60000: 0x80000040,
			0x70000: 0x400040,
			0x80000: 0x80000000,
			0x90000: 0x400000,
			0xa0000: 0x40,
			0xb0000: 0x80001000,
			0xc0000: 0x80400040,
			0xd0000: 0x1040,
			0xe0000: 0x1000,
			0xf0000: 0x80401040,
			0x8000: 0x80001040,
			0x18000: 0x40,
			0x28000: 0x80400040,
			0x38000: 0x80001000,
			0x48000: 0x401000,
			0x58000: 0x80401040,
			0x68000: 0x0,
			0x78000: 0x80400000,
			0x88000: 0x1000,
			0x98000: 0x80401000,
			0xa8000: 0x400000,
			0xb8000: 0x1040,
			0xc8000: 0x80000000,
			0xd8000: 0x400040,
			0xe8000: 0x401040,
			0xf8000: 0x80000040,
			0x100000: 0x400040,
			0x110000: 0x401000,
			0x120000: 0x80000040,
			0x130000: 0x0,
			0x140000: 0x1040,
			0x150000: 0x80400040,
			0x160000: 0x80401000,
			0x170000: 0x80001040,
			0x180000: 0x80401040,
			0x190000: 0x80000000,
			0x1a0000: 0x80400000,
			0x1b0000: 0x401040,
			0x1c0000: 0x80001000,
			0x1d0000: 0x400000,
			0x1e0000: 0x40,
			0x1f0000: 0x1000,
			0x108000: 0x80400000,
			0x118000: 0x80401040,
			0x128000: 0x0,
			0x138000: 0x401000,
			0x148000: 0x400040,
			0x158000: 0x80000000,
			0x168000: 0x80001040,
			0x178000: 0x40,
			0x188000: 0x80000040,
			0x198000: 0x1000,
			0x1a8000: 0x80001000,
			0x1b8000: 0x80400040,
			0x1c8000: 0x1040,
			0x1d8000: 0x80401000,
			0x1e8000: 0x400000,
			0x1f8000: 0x401040 },

		{
			0x0: 0x80,
			0x1000: 0x1040000,
			0x2000: 0x40000,
			0x3000: 0x20000000,
			0x4000: 0x20040080,
			0x5000: 0x1000080,
			0x6000: 0x21000080,
			0x7000: 0x40080,
			0x8000: 0x1000000,
			0x9000: 0x20040000,
			0xa000: 0x20000080,
			0xb000: 0x21040080,
			0xc000: 0x21040000,
			0xd000: 0x0,
			0xe000: 0x1040080,
			0xf000: 0x21000000,
			0x800: 0x1040080,
			0x1800: 0x21000080,
			0x2800: 0x80,
			0x3800: 0x1040000,
			0x4800: 0x40000,
			0x5800: 0x20040080,
			0x6800: 0x21040000,
			0x7800: 0x20000000,
			0x8800: 0x20040000,
			0x9800: 0x0,
			0xa800: 0x21040080,
			0xb800: 0x1000080,
			0xc800: 0x20000080,
			0xd800: 0x21000000,
			0xe800: 0x1000000,
			0xf800: 0x40080,
			0x10000: 0x40000,
			0x11000: 0x80,
			0x12000: 0x20000000,
			0x13000: 0x21000080,
			0x14000: 0x1000080,
			0x15000: 0x21040000,
			0x16000: 0x20040080,
			0x17000: 0x1000000,
			0x18000: 0x21040080,
			0x19000: 0x21000000,
			0x1a000: 0x1040000,
			0x1b000: 0x20040000,
			0x1c000: 0x40080,
			0x1d000: 0x20000080,
			0x1e000: 0x0,
			0x1f000: 0x1040080,
			0x10800: 0x21000080,
			0x11800: 0x1000000,
			0x12800: 0x1040000,
			0x13800: 0x20040080,
			0x14800: 0x20000000,
			0x15800: 0x1040080,
			0x16800: 0x80,
			0x17800: 0x21040000,
			0x18800: 0x40080,
			0x19800: 0x21040080,
			0x1a800: 0x0,
			0x1b800: 0x21000000,
			0x1c800: 0x1000080,
			0x1d800: 0x40000,
			0x1e800: 0x20040000,
			0x1f800: 0x20000080 },

		{
			0x0: 0x10000008,
			0x100: 0x2000,
			0x200: 0x10200000,
			0x300: 0x10202008,
			0x400: 0x10002000,
			0x500: 0x200000,
			0x600: 0x200008,
			0x700: 0x10000000,
			0x800: 0x0,
			0x900: 0x10002008,
			0xa00: 0x202000,
			0xb00: 0x8,
			0xc00: 0x10200008,
			0xd00: 0x202008,
			0xe00: 0x2008,
			0xf00: 0x10202000,
			0x80: 0x10200000,
			0x180: 0x10202008,
			0x280: 0x8,
			0x380: 0x200000,
			0x480: 0x202008,
			0x580: 0x10000008,
			0x680: 0x10002000,
			0x780: 0x2008,
			0x880: 0x200008,
			0x980: 0x2000,
			0xa80: 0x10002008,
			0xb80: 0x10200008,
			0xc80: 0x0,
			0xd80: 0x10202000,
			0xe80: 0x202000,
			0xf80: 0x10000000,
			0x1000: 0x10002000,
			0x1100: 0x10200008,
			0x1200: 0x10202008,
			0x1300: 0x2008,
			0x1400: 0x200000,
			0x1500: 0x10000000,
			0x1600: 0x10000008,
			0x1700: 0x202000,
			0x1800: 0x202008,
			0x1900: 0x0,
			0x1a00: 0x8,
			0x1b00: 0x10200000,
			0x1c00: 0x2000,
			0x1d00: 0x10002008,
			0x1e00: 0x10202000,
			0x1f00: 0x200008,
			0x1080: 0x8,
			0x1180: 0x202000,
			0x1280: 0x200000,
			0x1380: 0x10000008,
			0x1480: 0x10002000,
			0x1580: 0x2008,
			0x1680: 0x10202008,
			0x1780: 0x10200000,
			0x1880: 0x10202000,
			0x1980: 0x10200008,
			0x1a80: 0x2000,
			0x1b80: 0x202008,
			0x1c80: 0x200008,
			0x1d80: 0x0,
			0x1e80: 0x10000000,
			0x1f80: 0x10002008 },

		{
			0x0: 0x100000,
			0x10: 0x2000401,
			0x20: 0x400,
			0x30: 0x100401,
			0x40: 0x2100401,
			0x50: 0x0,
			0x60: 0x1,
			0x70: 0x2100001,
			0x80: 0x2000400,
			0x90: 0x100001,
			0xa0: 0x2000001,
			0xb0: 0x2100400,
			0xc0: 0x2100000,
			0xd0: 0x401,
			0xe0: 0x100400,
			0xf0: 0x2000000,
			0x8: 0x2100001,
			0x18: 0x0,
			0x28: 0x2000401,
			0x38: 0x2100400,
			0x48: 0x100000,
			0x58: 0x2000001,
			0x68: 0x2000000,
			0x78: 0x401,
			0x88: 0x100401,
			0x98: 0x2000400,
			0xa8: 0x2100000,
			0xb8: 0x100001,
			0xc8: 0x400,
			0xd8: 0x2100401,
			0xe8: 0x1,
			0xf8: 0x100400,
			0x100: 0x2000000,
			0x110: 0x100000,
			0x120: 0x2000401,
			0x130: 0x2100001,
			0x140: 0x100001,
			0x150: 0x2000400,
			0x160: 0x2100400,
			0x170: 0x100401,
			0x180: 0x401,
			0x190: 0x2100401,
			0x1a0: 0x100400,
			0x1b0: 0x1,
			0x1c0: 0x0,
			0x1d0: 0x2100000,
			0x1e0: 0x2000001,
			0x1f0: 0x400,
			0x108: 0x100400,
			0x118: 0x2000401,
			0x128: 0x2100001,
			0x138: 0x1,
			0x148: 0x2000000,
			0x158: 0x100000,
			0x168: 0x401,
			0x178: 0x2100400,
			0x188: 0x2000001,
			0x198: 0x2100000,
			0x1a8: 0x0,
			0x1b8: 0x2100401,
			0x1c8: 0x100401,
			0x1d8: 0x400,
			0x1e8: 0x2000400,
			0x1f8: 0x100001 },

		{
			0x0: 0x8000820,
			0x1: 0x20000,
			0x2: 0x8000000,
			0x3: 0x20,
			0x4: 0x20020,
			0x5: 0x8020820,
			0x6: 0x8020800,
			0x7: 0x800,
			0x8: 0x8020000,
			0x9: 0x8000800,
			0xa: 0x20800,
			0xb: 0x8020020,
			0xc: 0x820,
			0xd: 0x0,
			0xe: 0x8000020,
			0xf: 0x20820,
			0x80000000: 0x800,
			0x80000001: 0x8020820,
			0x80000002: 0x8000820,
			0x80000003: 0x8000000,
			0x80000004: 0x8020000,
			0x80000005: 0x20800,
			0x80000006: 0x20820,
			0x80000007: 0x20,
			0x80000008: 0x8000020,
			0x80000009: 0x820,
			0x8000000a: 0x20020,
			0x8000000b: 0x8020800,
			0x8000000c: 0x0,
			0x8000000d: 0x8020020,
			0x8000000e: 0x8000800,
			0x8000000f: 0x20000,
			0x10: 0x20820,
			0x11: 0x8020800,
			0x12: 0x20,
			0x13: 0x800,
			0x14: 0x8000800,
			0x15: 0x8000020,
			0x16: 0x8020020,
			0x17: 0x20000,
			0x18: 0x0,
			0x19: 0x20020,
			0x1a: 0x8020000,
			0x1b: 0x8000820,
			0x1c: 0x8020820,
			0x1d: 0x20800,
			0x1e: 0x820,
			0x1f: 0x8000000,
			0x80000010: 0x20000,
			0x80000011: 0x800,
			0x80000012: 0x8020020,
			0x80000013: 0x20820,
			0x80000014: 0x20,
			0x80000015: 0x8020000,
			0x80000016: 0x8000000,
			0x80000017: 0x8000820,
			0x80000018: 0x8020820,
			0x80000019: 0x8000020,
			0x8000001a: 0x8000800,
			0x8000001b: 0x0,
			0x8000001c: 0x20800,
			0x8000001d: 0x820,
			0x8000001e: 0x20020,
			0x8000001f: 0x8020800 }];



		// Masks that select the SBOX input
		var SBOX_MASK = [
		0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
		0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];


		/**
                                                    * DES block cipher algorithm.
                                                    */
		var DES = C_algo.DES = BlockCipher.extend({
			_doReset: function _doReset() {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;

				// Select 56 bits according to PC1
				var keyBits = [];
				for (var i = 0; i < 56; i++) {
					var keyBitPos = PC1[i] - 1;
					keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
				}

				// Assemble 16 subkeys
				var subKeys = this._subKeys = [];
				for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
					// Create subkey
					var subKey = subKeys[nSubKey] = [];

					// Shortcut
					var bitShift = BIT_SHIFTS[nSubKey];

					// Select 48 bits according to PC2
					for (var i = 0; i < 24; i++) {
						// Select from the left 28 key bits
						subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;

						// Select from the right 28 key bits
						subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
					}

					// Since each subkey is applied to an expanded 32-bit input,
					// the subkey can be broken into 8 values scaled to 32-bits,
					// which allows the key to be used without expansion
					subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
					for (var i = 1; i < 7; i++) {
						subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
					}
					subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
				}

				// Compute inverse subkeys
				var invSubKeys = this._invSubKeys = [];
				for (var i = 0; i < 16; i++) {
					invSubKeys[i] = subKeys[15 - i];
				}
			},

			encryptBlock: function encryptBlock(M, offset) {
				this._doCryptBlock(M, offset, this._subKeys);
			},

			decryptBlock: function decryptBlock(M, offset) {
				this._doCryptBlock(M, offset, this._invSubKeys);
			},

			_doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
				// Get input
				this._lBlock = M[offset];
				this._rBlock = M[offset + 1];

				// Initial permutation
				exchangeLR.call(this, 4, 0x0f0f0f0f);
				exchangeLR.call(this, 16, 0x0000ffff);
				exchangeRL.call(this, 2, 0x33333333);
				exchangeRL.call(this, 8, 0x00ff00ff);
				exchangeLR.call(this, 1, 0x55555555);

				// Rounds
				for (var round = 0; round < 16; round++) {
					// Shortcuts
					var subKey = subKeys[round];
					var lBlock = this._lBlock;
					var rBlock = this._rBlock;

					// Feistel function
					var f = 0;
					for (var i = 0; i < 8; i++) {
						f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
					}
					this._lBlock = rBlock;
					this._rBlock = lBlock ^ f;
				}

				// Undo swap from last round
				var t = this._lBlock;
				this._lBlock = this._rBlock;
				this._rBlock = t;

				// Final permutation
				exchangeLR.call(this, 1, 0x55555555);
				exchangeRL.call(this, 8, 0x00ff00ff);
				exchangeRL.call(this, 2, 0x33333333);
				exchangeLR.call(this, 16, 0x0000ffff);
				exchangeLR.call(this, 4, 0x0f0f0f0f);

				// Set output
				M[offset] = this._lBlock;
				M[offset + 1] = this._rBlock;
			},

			keySize: 64 / 32,

			ivSize: 64 / 32,

			blockSize: 64 / 32 });


		// Swap bits across the left and right words
		function exchangeLR(offset, mask) {
			var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
			this._rBlock ^= t;
			this._lBlock ^= t << offset;
		}

		function exchangeRL(offset, mask) {
			var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
			this._lBlock ^= t;
			this._rBlock ^= t << offset;
		}

		/**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
     */
		C.DES = BlockCipher._createHelper(DES);

		/**
                                           * Triple-DES block cipher algorithm.
                                           */
		var TripleDES = C_algo.TripleDES = BlockCipher.extend({
			_doReset: function _doReset() {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;

				// Create DES instances
				this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
				this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
				this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
			},

			encryptBlock: function encryptBlock(M, offset) {
				this._des1.encryptBlock(M, offset);
				this._des2.decryptBlock(M, offset);
				this._des3.encryptBlock(M, offset);
			},

			decryptBlock: function decryptBlock(M, offset) {
				this._des3.decryptBlock(M, offset);
				this._des2.encryptBlock(M, offset);
				this._des1.decryptBlock(M, offset);
			},

			keySize: 192 / 32,

			ivSize: 64 / 32,

			blockSize: 64 / 32 });


		/**
                           * Shortcut functions to the cipher's object interface.
                           *
                           * @example
                           *
                           *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
                           *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
                           */
		C.TripleDES = BlockCipher._createHelper(TripleDES);
	})();


	return CryptoJS.TripleDES;

});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		/**
                        * RC4 stream cipher algorithm.
                        */
		var RC4 = C_algo.RC4 = StreamCipher.extend({
			_doReset: function _doReset() {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;
				var keySigBytes = key.sigBytes;

				// Init sbox
				var S = this._S = [];
				for (var i = 0; i < 256; i++) {
					S[i] = i;
				}

				// Key setup
				for (var i = 0, j = 0; i < 256; i++) {
					var keyByteIndex = i % keySigBytes;
					var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;

					j = (j + S[i] + keyByte) % 256;

					// Swap
					var t = S[i];
					S[i] = S[j];
					S[j] = t;
				}

				// Counters
				this._i = this._j = 0;
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				M[offset] ^= generateKeystreamWord.call(this);
			},

			keySize: 256 / 32,

			ivSize: 0 });


		function generateKeystreamWord() {
			// Shortcuts
			var S = this._S;
			var i = this._i;
			var j = this._j;

			// Generate keystream word
			var keystreamWord = 0;
			for (var n = 0; n < 4; n++) {
				i = (i + 1) % 256;
				j = (j + S[i]) % 256;

				// Swap
				var t = S[i];
				S[i] = S[j];
				S[j] = t;

				keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
			}

			// Update counters
			this._i = i;
			this._j = j;

			return keystreamWord;
		}

		/**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
     */
		C.RC4 = StreamCipher._createHelper(RC4);

		/**
                                            * Modified RC4 stream cipher algorithm.
                                            */
		var RC4Drop = C_algo.RC4Drop = RC4.extend({
			/**
                                               * Configuration options.
                                               *
                                               * @property {number} drop The number of keystream words to drop. Default 192
                                               */
			cfg: RC4.cfg.extend({
				drop: 192 }),


			_doReset: function _doReset() {
				RC4._doReset.call(this);

				// Drop
				for (var i = this.cfg.drop; i > 0; i--) {
					generateKeystreamWord.call(this);
				}
			} });


		/**
          * Shortcut functions to the cipher's object interface.
          *
          * @example
          *
          *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
          *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
          */
		C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	})();


	return CryptoJS.RC4;

});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		// Reusable objects
		var S = [];
		var C_ = [];
		var G = [];

		/**
               * Rabbit stream cipher algorithm
               */
		var Rabbit = C_algo.Rabbit = StreamCipher.extend({
			_doReset: function _doReset() {
				// Shortcuts
				var K = this._key.words;
				var iv = this.cfg.iv;

				// Swap endian
				for (var i = 0; i < 4; i++) {
					K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff |
					(K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
				}

				// Generate initial state values
				var X = this._X = [
				K[0], K[3] << 16 | K[2] >>> 16,
				K[1], K[0] << 16 | K[3] >>> 16,
				K[2], K[1] << 16 | K[0] >>> 16,
				K[3], K[2] << 16 | K[1] >>> 16];


				// Generate initial counter values
				var C = this._C = [
				K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff,
				K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff,
				K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff,
				K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];


				// Carry bit
				this._b = 0;

				// Iterate the system four times
				for (var i = 0; i < 4; i++) {
					nextState.call(this);
				}

				// Modify the counters
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[i + 4 & 7];
				}

				// IV setup
				if (iv) {
					// Shortcuts
					var IV = iv.words;
					var IV_0 = IV[0];
					var IV_1 = IV[1];

					// Generate four subvectors
					var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
					var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
					var i1 = i0 >>> 16 | i2 & 0xffff0000;
					var i3 = i2 << 16 | i0 & 0x0000ffff;

					// Modify counter values
					C[0] ^= i0;
					C[1] ^= i1;
					C[2] ^= i2;
					C[3] ^= i3;
					C[4] ^= i0;
					C[5] ^= i1;
					C[6] ^= i2;
					C[7] ^= i3;

					// Iterate the system four times
					for (var i = 0; i < 4; i++) {
						nextState.call(this);
					}
				}
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcut
				var X = this._X;

				// Iterate the system
				nextState.call(this);

				// Generate four keystream words
				S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
				S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
				S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
				S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

				for (var i = 0; i < 4; i++) {
					// Swap endian
					S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff |
					(S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

					// Encrypt
					M[offset + i] ^= S[i];
				}
			},

			blockSize: 128 / 32,

			ivSize: 64 / 32 });


		function nextState() {
			// Shortcuts
			var X = this._X;
			var C = this._C;

			// Save old counter values
			for (var i = 0; i < 8; i++) {
				C_[i] = C[i];
			}

			// Calculate new counter values
			C[0] = C[0] + 0x4d34d34d + this._b | 0;
			C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
			C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
			C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
			C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
			C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
			C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
			C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
			this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

			// Calculate the g-values
			for (var i = 0; i < 8; i++) {
				var gx = X[i] + C[i];

				// Construct high and low argument for squaring
				var ga = gx & 0xffff;
				var gb = gx >>> 16;

				// Calculate high and low result of squaring
				var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
				var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

				// High XOR low
				G[i] = gh ^ gl;
			}

			// Calculate new state values
			X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
			X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
			X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
			X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
			X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
			X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
			X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
			X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
		}

		/**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
     */
		C.Rabbit = StreamCipher._createHelper(Rabbit);
	})();


	return CryptoJS.Rabbit;

});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		// Reusable objects
		var S = [];
		var C_ = [];
		var G = [];

		/**
               * Rabbit stream cipher algorithm.
               *
               * This is a legacy version that neglected to convert the key to little-endian.
               * This error doesn't affect the cipher's security,
               * but it does affect its compatibility with other implementations.
               */
		var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
			_doReset: function _doReset() {
				// Shortcuts
				var K = this._key.words;
				var iv = this.cfg.iv;

				// Generate initial state values
				var X = this._X = [
				K[0], K[3] << 16 | K[2] >>> 16,
				K[1], K[0] << 16 | K[3] >>> 16,
				K[2], K[1] << 16 | K[0] >>> 16,
				K[3], K[2] << 16 | K[1] >>> 16];


				// Generate initial counter values
				var C = this._C = [
				K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff,
				K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff,
				K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff,
				K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];


				// Carry bit
				this._b = 0;

				// Iterate the system four times
				for (var i = 0; i < 4; i++) {
					nextState.call(this);
				}

				// Modify the counters
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[i + 4 & 7];
				}

				// IV setup
				if (iv) {
					// Shortcuts
					var IV = iv.words;
					var IV_0 = IV[0];
					var IV_1 = IV[1];

					// Generate four subvectors
					var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
					var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
					var i1 = i0 >>> 16 | i2 & 0xffff0000;
					var i3 = i2 << 16 | i0 & 0x0000ffff;

					// Modify counter values
					C[0] ^= i0;
					C[1] ^= i1;
					C[2] ^= i2;
					C[3] ^= i3;
					C[4] ^= i0;
					C[5] ^= i1;
					C[6] ^= i2;
					C[7] ^= i3;

					// Iterate the system four times
					for (var i = 0; i < 4; i++) {
						nextState.call(this);
					}
				}
			},

			_doProcessBlock: function _doProcessBlock(M, offset) {
				// Shortcut
				var X = this._X;

				// Iterate the system
				nextState.call(this);

				// Generate four keystream words
				S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
				S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
				S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
				S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

				for (var i = 0; i < 4; i++) {
					// Swap endian
					S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff |
					(S[i] << 24 | S[i] >>> 8) & 0xff00ff00;

					// Encrypt
					M[offset + i] ^= S[i];
				}
			},

			blockSize: 128 / 32,

			ivSize: 64 / 32 });


		function nextState() {
			// Shortcuts
			var X = this._X;
			var C = this._C;

			// Save old counter values
			for (var i = 0; i < 8; i++) {
				C_[i] = C[i];
			}

			// Calculate new counter values
			C[0] = C[0] + 0x4d34d34d + this._b | 0;
			C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
			C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
			C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
			C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
			C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
			C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
			C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
			this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;

			// Calculate the g-values
			for (var i = 0; i < 8; i++) {
				var gx = X[i] + C[i];

				// Construct high and low argument for squaring
				var ga = gx & 0xffff;
				var gb = gx >>> 16;

				// Calculate high and low result of squaring
				var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
				var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);

				// High XOR low
				G[i] = gh ^ gl;
			}

			// Calculate new state values
			X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
			X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
			X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
			X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
			X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
			X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
			X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
			X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
		}

		/**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
     */
		C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	})();


	return CryptoJS.RabbitLegacy;

});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default; /**
                                                                                                                                                                                                                                                                                                                        * [js-md5]{@link https://github.com/emn178/js-md5}
                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                        * @namespace md5
                                                                                                                                                                                                                                                                                                                        * @version 0.7.3
                                                                                                                                                                                                                                                                                                                        * @author Chen, Yi-Cyuan [emn178@gmail.com]
                                                                                                                                                                                                                                                                                                                        * @copyright Chen, Yi-Cyuan 2014-2017
                                                                                                                                                                                                                                                                                                                        * @license MIT
                                                                                                                                                                                                                                                                                                                        */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? 'undefined' : _typeof(module)) === 'object' && module.exports;
  var AMD = "function" === 'function' && __webpack_require__(47);
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [],buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
     * @method hex
     * @memberof md5
     * @description Output hash as hex string
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} Hex string
     * @example
     * md5.hex('The quick brown fox jumps over the lazy dog');
     * // equal to
     * md5('The quick brown fox jumps over the lazy dog');
     */
  /**
         * @method digest
         * @memberof md5
         * @description Output hash as bytes array
         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
         * @returns {Array} Bytes array
         * @example
         * md5.digest('The quick brown fox jumps over the lazy dog');
         */
  /**
             * @method array
             * @memberof md5
             * @description Output hash as bytes array
             * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
             * @returns {Array} Bytes array
             * @example
             * md5.array('The quick brown fox jumps over the lazy dog');
             */
  /**
                 * @method arrayBuffer
                 * @memberof md5
                 * @description Output hash as ArrayBuffer
                 * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                 * @returns {ArrayBuffer} ArrayBuffer
                 * @example
                 * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
                 */
  /**
                     * @method buffer
                     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
                     * @memberof md5
                     * @description Output hash as ArrayBuffer
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @example
                     * md5.buffer('The quick brown fox jumps over the lazy dog');
                     */
  /**
                         * @method base64
                         * @memberof md5
                         * @description Output hash as base64 string
                         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                         * @returns {String} base64 string
                         * @example
                         * md5.base64('The quick brown fox jumps over the lazy dog');
                         */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
      * @method create
      * @memberof md5
      * @description Create Md5 object
      * @returns {Md5} Md5 object.
      * @example
      * var hash = md5.create();
      */
  /**
          * @method update
          * @memberof md5
          * @description Create and update Md5 object
          * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
          * @returns {Md5} Md5 object.
          * @example
          * var hash = md5.update('The quick brown fox jumps over the lazy dog');
          * // equal to
          * var hash = md5.create();
          * hash.update('The quick brown fox jumps over the lazy dog');
          */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
      message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
      * Md5 class
      * @class Md5
      * @description This is internal class.
      * @see {@link md5.create}
      */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
     * @method update
     * @memberof Md5
     * @instance
     * @description Update hash
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {Md5} Md5 object.
     * @see {@link md5.update}
     */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,type = typeof message === 'undefined' ? 'undefined' : _typeof(message);
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code,index = 0,i,length = message.length,blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,b,c,d,bc,da,blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
      * @method hex
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.hex();
      */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;

    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] +
    HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] +
    HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] +
    HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] +
    HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] +
    HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] +
    HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] +
    HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] +
    HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] +
    HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] +
    HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] +
    HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] +
    HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] +
    HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] +
    HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] +
    HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
      * @method toString
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.toString();
      */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
                                               * @method digest
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as bytes array
                                               * @returns {Array} Bytes array
                                               * @see {@link md5.digest}
                                               * @example
                                               * hash.digest();
                                               */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;
    return [
    h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF,
    h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF,
    h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF,
    h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];

  };

  /**
      * @method array
      * @memberof Md5
      * @instance
      * @description Output hash as bytes array
      * @returns {Array} Bytes array
      * @see {@link md5.array}
      * @example
      * hash.array();
      */
  Md5.prototype.array = Md5.prototype.digest;

  /**
                                               * @method arrayBuffer
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as ArrayBuffer
                                               * @returns {ArrayBuffer} ArrayBuffer
                                               * @see {@link md5.arrayBuffer}
                                               * @example
                                               * hash.arrayBuffer();
                                               */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
      * @method buffer
      * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
      * @memberof Md5
      * @instance
      * @description Output hash as ArrayBuffer
      * @returns {ArrayBuffer} ArrayBuffer
      * @see {@link md5.buffer}
      * @example
      * hash.buffer();
      */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
                                                     * @method base64
                                                     * @memberof Md5
                                                     * @instance
                                                     * @description Output hash as base64 string
                                                     * @returns {String} base64 string
                                                     * @see {@link md5.base64}
                                                     * @example
                                                     * hash.base64();
                                                     */
  Md5.prototype.base64 = function () {
    var v1,v2,v3,base64Str = '',bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
      BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
      BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
      BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
    BASE64_ENCODE_CHAR[v1 << 4 & 63] +
    '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
           * @method md5
           * @description Md5 hash function, export to global in browsers.
           * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
           * @returns {String} md5 hashes
           * @example
           * md5(''); // d41d8cd98f00b204e9800998ecf8427e
           * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
           * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
           *
           * // It also supports UTF-8 encoding
           * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
           *
           * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
           * md5([]); // d41d8cd98f00b204e9800998ecf8427e
           * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
           */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45), __webpack_require__(15), __webpack_require__(46)(module)))

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var uni = __webpack_require__(0).default;;(function (root, factory, undef) {
	if (( false ? "undefined" : _typeof(exports)) === "object") {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(1), __webpack_require__(9), __webpack_require__(16), __webpack_require__(17), __webpack_require__(7), __webpack_require__(8), __webpack_require__(10), __webpack_require__(13), __webpack_require__(18), __webpack_require__(14), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(11), __webpack_require__(22), __webpack_require__(5), __webpack_require__(2), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38));
	} else
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(9), __webpack_require__(16), __webpack_require__(17), __webpack_require__(7), __webpack_require__(8), __webpack_require__(10), __webpack_require__(13), __webpack_require__(18), __webpack_require__(14), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(11), __webpack_require__(22), __webpack_require__(5), __webpack_require__(2), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else
	{
		// Global (browser)
		root.CryptoJS = factory(root.CryptoJS);
	}
})(undefined, function (CryptoJS) {

	return CryptoJS;

});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =














{
	data: function data() {
		return {};
	},
	components: {},
	methods: {},
	mounted: function mounted() {} };

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "kongshuzhu"
  }, [_c('view', {
    staticClass: "kh_sedert"
  }, [_c('icon', {
    attrs: {
      "type": "search",
      "size": "40",
      "color": "#fff"
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "cen fz30 mt20 z9"
  }, [_vm._v("\n\t\t\t抱歉！暂无相关数据\n\t\t")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _App = __webpack_require__(41);var _App2 = _interopRequireDefault(_App);
var _liaomatou = __webpack_require__(48);var _liaomatou2 = _interopRequireDefault(_liaomatou);
var _kongbai = __webpack_require__(12);var _kongbai2 = _interopRequireDefault(_kongbai);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
_vue2.default.component('liaomatou', _liaomatou2.default);
_vue2.default.component('kongbai', _kongbai2.default);
_vue2.default.config.productionTip = false;

_App2.default.mpType = 'app';

var app = new _vue2.default(_extends({},
_App2.default));

app.$mount();

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	onLaunch: function onLaunch() {
		console.log(uni.getStorageSync('get_key'));
		if (!uni.getStorageSync('get_key')) {
			_base2.default.ajax("a_get_key", '', function (data) {
				var jiemi = data.data;
				console.log(jiemi);
				uni.setStorageSync('get_key', _base2.default.Decrypt(jiemi));
			});
		} else {


		}


	},
	onShow: function onShow() {

	},
	onHide: function onHide() {

	},
	mounted: function mounted() {


	} };

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_liaomatou_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_liaomatou_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_liaomatou_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_138833d6_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_liaomatou_vue__ = __webpack_require__(51);
function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-138833d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_liaomatou_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_138833d6_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_liaomatou_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =






{

	data: function data() {
		return {};
	},
	components: {},
	methods: {},
	mounted: function mounted() {} };

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "cen df_jh_drt"
  }, [_c('image', {
    staticClass: "logo_dert",
    attrs: {
      "src": "../../static/img/logo.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "fz26 z9"
  }, [_vm._v("资源扫码工具")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[40]);
});
require('app.js');


__wxRoute = 'pages/star/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/star/index.js';

define('pages/star/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(56);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7b804cc4_hasScoped_false_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(59);
function injectStyle (ssrContext) {
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7b804cc4_hasScoped_false_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });











var _md = __webpack_require__(39);var _md2 = _interopRequireDefault(_md);
var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			sd_ddfg: "",
			sd_ddfg_b: "" };

	},
	components: {},
	onLoad: function onLoad() {
		if (uni.getStorageSync('token')) {
			uni.switchTab({
				url: '/pages/index/index' });

		}
	},
	methods: {
		denglu: function denglu() {
			var th = this;
			uni.login({
				provider: 'weixin',
				success: function success(loginRes) {
					th.sd_ddfg = JSON.stringify(loginRes);
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function success(infoRes) {
							th.sd_ddfg_b = JSON.stringify(infoRes);
							var user_info = {},
							userInfo = infoRes.userInfo;
							user_info.union_id = userInfo.unionId;
							user_info.nick_name = userInfo.nickName;
							user_info.sex = userInfo.gender;
							user_info.country = userInfo.country;
							user_info.province = userInfo.province;
							user_info.city = userInfo.city;
							user_info.head_img = userInfo.avatarUrl;
							_base2.default.ajax("a_login", user_info, function (data) {
								var sd_drrt = data.data;
								console.log(JSON.stringify(sd_drrt));
								uni.setStorageSync('is_hide', sd_drrt.is_hide);
								uni.setStorageSync('x_login', JSON.stringify(sd_drrt.userInfo));
								uni.setStorageSync('img_url', sd_drrt.img_url);
								uni.setStorageSync('img_url_qr', sd_drrt.img_url_qr);
								uni.setStorageSync('token', sd_drrt.userInfo.a_token);
								uni.switchTab({
									url: '/pages/index/index' });

							});
						} });


				} });

		} },

	mounted: function mounted() {

		//console.log(base.Encrypt("515235416@qq.com"))
		//console.log(base.Decrypt("d6af6a3376cda2bd1a6b50d0329c8cbfc49c4100f4f5322370ba3bf45ce22e2511d78090219e5efe6303a2c0ae3045c608d79005b01770bae7696410f676bc8f"))

	} };

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "content"
  }, [_c('navigator', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.denglu
    }
  }, [_c('image', {
    staticClass: "dsfdfrtrty",
    attrs: {
      "src": "../../static/img/qidongtu.jpg"
    }
  })])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[55]);
});
require('pages/star/index.js');
__wxRoute = 'pages/xieyi/xieyi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xieyi/xieyi.js';

define('pages/xieyi/xieyi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _xieyi = __webpack_require__(61);var _xieyi2 = _interopRequireDefault(_xieyi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_xieyi2.default);
app.$mount();

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xieyi_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xieyi_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xieyi_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_8711f200_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xieyi_vue__ = __webpack_require__(64);
function injectStyle (ssrContext) {
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8711f200"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xieyi_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_8711f200_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xieyi_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =











































































{
	data: function data() {
		return {};
	},
	components: {},
	methods: {},
	mounted: function mounted() {

	} };

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('p', {
    staticClass: "cen fz32 z3 pt20"
  }, [_vm._v("用户使用协议")]), _vm._v(" "), _c('section', {
    staticClass: "pd dsf_derttx"
  }, [_c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("前言")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("本《用户使用协议》（以下简称“本协议”）是由您（以下称为“用户”）与深圳市小鸣科技有限公司（以下简称“本公司”）关于其提供的【料码】微信小程序（以下简称【料码】）上提供的服务所订立的协议。为正常、合理使用【料码】，请用户务必审慎阅读、充分理解并遵守本协议，特别是免除或者限制责任的条款。除非用户已阅读并接受本协议所有条款，否则用户无权使用【料码】及其提供的相关服务。用户的登陆、注册、使用等行为即视为用户已阅读并同意本协议各项条款的约束。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("1.服务内容")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1.1【料码】是一款资源变现小程序码生成工具，为用户提供资源变现服务。【料码】根据用户分享的内容自动生成小程序码，其他用户可据此找到和使用第三方网页上的各种文档、资料等内容。【料码】不对分享者分享的内容进行任何改动、编辑。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1.2用户通过微信账户授权方式进行登陆。\n\t\t\t")]), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1.3【料码】仅提供内容交易渠道，现阶段不收取任何费用，但【料码】保留后续因业务发展收取手续费的权利。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b mt10"
  }, [_vm._v("2.用户行为规范")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2.1用户同意按照包括本协议在内的、【料码】不时发布或变更的各类规则规范自己的行为，从而接受并使用【料码】提供的服务。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2.2用户在使用【料码】时，应当遵循以下原则：")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1) 遵守中国有关的法律和法规")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2) 不得为任何非法目的而使用【料码】；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("3) 不得使用【料码】进行信用卡套现等破坏金融秩序的行为；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("4) 不得利用【料码】进行任何可能对互联网的正常运转造成不利影响的行为；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5) 不得利用【料码】进行任何不利于其他用户的行为；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("6) 不得擅自（包括但不限于以非法方式复制、传播、展示、镜像、上传、下载）使用或通过非常规方式（包括但不限于恶意干预【料码】数据）影响【料码】的正常服务；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("7) 不得擅自以软件程序获得【料码】数据。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("2.3用户自行承担所分享的信息内容的责任，用户分享的内容不得包含以下部分：")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1) 反对中华人民共和国宪法所确定的基本原则的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2) 危害国家统一、主权和领土完整的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("3) 泄露国家秘密，危害国家安全或者损害国家荣誉和利益的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("4) 煽动民族仇恨、民族歧视，破坏民族团结或者侵害民族风俗、习惯的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5) 破坏国家宗教政策，宣扬邪教、迷信的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("7) 散布淫秽、赌博、暴力或者教唆犯罪的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("8) 侮辱或者诽谤他人，侵害他人合法权益的；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("9) 违反公序良俗的。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("3.信息披露与保护")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("3.1保护用户（特别是未成年人用户）的隐私是【料码】的基本原则。【料码】保证未经用户同意不对外公开或向第三方提供用户的账户信息及交易记录等个人资料，但下列情况除外：")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1) 事先获得用户的明确授权；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2) 根据有关的法律法规要求；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("3) 按照相关政府主管部门的要求；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("4) 为维护社会公众的利益；")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5) 为维护【料码】的合法权益。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("4.知识产权")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("本公司是【料码】的知识产权权利人。【料码】的一切关于小程序的著作权、商标权、专利权、商业秘密等知识产权均受中华人民共和国法律法规和相应的国际条约保护，本公司享有上述知识产权，除非事先经本公司的合法授权，任何人皆不得擅自以任何形式使用，否则本公司可立即终止向该用户提供产品和服务，并依法追究其法律责任，赔偿本公司的一切损失。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("5.有限保证与免责申明")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5.1用户通过【料码】产生的任何内容（包括但不限制于文字、声音、图片、视频等），【料码】对其合法性概不负责，亦不承担任何法律责任。如使用【料码】产生的内容（包括但不限制于文字、声音、图片、视频等）有违反法律法规及其他规范性文件之处，在收到用户反馈或经有关部门查实后，【料码】将在30个工作日内审核其是否属实，如属实将立即撤下相关内容。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5.2用户应该对使用【料码】产生的内容及分享结果自行承担风险。【料码】不作任何形式的保证（包括但不局限于不保证分享结果满足用户的要求、不保证工具服务过程中不中断），因网络状况、通信线路、第三方网站等任何原因而导致用户不能正常使用【料码】的，【料码】不承担任何法律责任。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("6.权利通知")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("6.1任何单位或个人（以下简称：权利人）认为通过【料码】分享的内容侵犯其合法权益，应及时以书面的方式向【料码】提交权利通知，【料码】在收到权利通知并经核实无误后，将会依法尽快删除相关侵权内容，并在经有关部门法律授权之下向其提供内容分享者的资料。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("注意：如果权利通知的陈述失实，提交者应承担因此造成的全部法律责任（包括但不限于经济损失、诉讼费用、行政罚金、经济处罚的损失及为处理纠纷所支出的费用等）。如果权利人不确定该内容是否侵犯其合法权益，【料码】建议权利人先行咨询专业人士。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("6.2为了提高【料码】的处理效率，请按照以下内容及格式书写权利通知，并以电子邮件形式发送至liaoma@ttkgou.com。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("1) 权利人信息，包括姓名、身份证或护照复印件（对自然人）、单位名称、登记证明复印件（对单位）、联系方式及地址。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("2) 权利人对涉嫌侵权内容拥有商标权、著作权和/或其他知识产权利的权属证明。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("3) 对侵犯了权利人合法权益的内容的准确描述。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("4) 涉嫌侵权内容在信息网络上的具体位置（如涉嫌侵权内容的出处，即：指网页地址或网页内的位置）以便【料码】与涉嫌侵权内容的所有权人/管理人联系。\n\t\t\t\t")]), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v("5) 权利人声明：   a.我本人为所投诉内容的合法权利人或已经合法授权；   b.在我举报的第三方网页上登载的内容侵犯了本人的合法权益。\n\t\t\t\t\tc.本人确认：本通知中所述信息合法、真实、准确，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。\n\t\t\t\t")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 6) 于落款处签字捺印（对个人）或加盖单位公章（对单位）。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("7.争议解决")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 7.1本协议的订立、效力、解释、履行及争议解决适用中华人民共和国法律。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 7.2因本协议引起的任何争议，双方应友好协商解决，协商不成的，任何一方有权向协议签订地人民法院提起诉讼。")]), _vm._v(" "), _c('p', {
    staticClass: "z6 fz30 mt10 b"
  }, [_vm._v("8.其它")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 8.1本协议的任何条款部分无效的，不影响其它条款的效力。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 8.2本协议于用户首次使用【料码】之日起签订并生效。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 8.3本协议签订地为深圳市南山区。")]), _vm._v(" "), _c('p', {
    staticClass: "fz26 s_dsdrrty mt10"
  }, [_vm._v(" 本协议的最终解释权归【料码】所有。")])], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[60]);
});
require('pages/xieyi/xieyi.js');
__wxRoute = 'pages/user_center/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user_center/index.js';

define('pages/user_center/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(66);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_320dcf53_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(69);
function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-320dcf53"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_320dcf53_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });





































































































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			sd: "",
			user_info: "",
			is_hide: true };

	},
	onLoad: function onLoad(options) {
		var login_wer = JSON.parse(uni.getStorageSync('x_login')),
		is_hide = uni.getStorageSync('is_hide');
		this.user_info = login_wer;
		if (is_hide == 1) {
			this.is_hide = false;

		}
	},
	onShow: function onShow() {
		var th = this;
		_base2.default.ajax("a_get_account", {}, function (data) {

			th.sd = data.data;

		});
	},
	components: {},
	methods: {
		tuichu: function tuichu() {
			uni.removeStorageSync('is_hide');
			uni.removeStorageSync('x_login');
			uni.removeStorageSync('img_url');
			uni.removeStorageSync('img_url_qr');
			uni.removeStorageSync('token');
			//uni.removeStorageSync('get_key'); 

			uni.navigateTo({
				url: '/pages/star/index' });

		} },


	mounted: function mounted() {} };

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [(_vm.is_hide) ? _c('view', {
    staticClass: "pd pt20 pm20 dfs_hg_deert"
  }, [_c('view', {
    staticClass: "cf fz26"
  }, [_vm._v("今日收益")]), _vm._v(" "), _c('view', {
    staticClass: "df_jh_deet cf cen mt20"
  }, [_vm._v("\n\t\t\t\t￥" + _vm._s(_vm.sd.day_amount) + "\n\n\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [_c('view', {
    staticClass: "scfd_Jhg_der"
  }, [_c('view', {
    staticClass: "fz32 cf cen"
  }, [_vm._v(_vm._s(_vm.sd.balance))]), _vm._v(" "), _c('view', {
    staticClass: "fz26 cf cen"
  }, [_vm._v("余额")])]), _vm._v(" "), _c('view', {
    staticClass: "scfd_Jhg_der"
  }, [_c('view', {
    staticClass: "fz32 cf cen"
  }, [_vm._v(_vm._s(_vm.sd.all_amount))]), _vm._v(" "), _c('view', {
    staticClass: "fz26 cf cen"
  }, [_vm._v("收益总额")])]), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })])]) : _vm._e(), _vm._v(" "), (!_vm.is_hide) ? _c('view', {
    staticClass: "pd pt20 pm20 dfs_hg_deert"
  }, [_c('view', {
    staticClass: "df_jh_deet cf cen mt20"
  }, [_c('image', {
    staticClass: "user_icon_e yj",
    attrs: {
      "src": _vm.user_info.head_img
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "mt20 fz30"
  }, [_vm._v(_vm._s(_vm.user_info.nick_name))])])]) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "cen mui-row"
  }, [_c('navigator', {
    staticClass: "df_dsdft cen fz32  pt20 pm20 ls",
    attrs: {
      "url": "/pages/guanzhu/index"
    }
  }, [_vm._v("\n\t\t\t\t关注 "), _c('text', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.sd.attention_num))])]), _vm._v(" "), _c('navigator', {
    staticClass: "df_dsdft cen pt20 pm20 fz32 ls blm",
    attrs: {
      "url": "/pages/fensoi/index"
    }
  }, [_vm._v("\n\t\t\t\t粉丝 "), _c('text', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.sd.follower_num))])]), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })], 1), _vm._v(" "), (_vm.is_hide) ? _c('view', [_c('navigator', {
    staticClass: "pd sd_dff_dreer bbm pr btm",
    attrs: {
      "url": "/pages/zhanghu/index"
    }
  }, [_vm._v("\n\t\t\t\t收入明细\n\t\t\t\t"), _c('image', {
    staticClass: "right_icone",
    attrs: {
      "src": "../../static//img/right.png"
    }
  })]), _vm._v(" "), _c('navigator', {
    staticClass: "pd sd_dff_dreer bbm pr",
    attrs: {
      "url": "/pages/mingxi/index"
    }
  }, [_vm._v("\n\t\t\t\t提现明细\n\t\t\t\t"), _c('image', {
    staticClass: "right_icone",
    attrs: {
      "src": "../../static//img/right.png"
    }
  })])], 1) : _vm._e(), _vm._v(" "), (!_vm.is_hide) ? _c('button', {
    staticClass: "pd sd_dff_dreer bbm pr de_cdfretry btm",
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("\n\t\t\t联系客服\n\t\t\t"), _c('image', {
    staticClass: "right_icone",
    attrs: {
      "src": "../../static/img/right.png"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.is_hide) ? _c('view', {
    staticClass: "pd sd_dff_dreer  pr"
  }, [_vm._v("\n\t\t\t提现说明\n\t\t\t"), _c('view', {
    staticClass: "fz26 red df_jh_deer mt20"
  }, [_vm._v("\n\n\t\t\t\t为了您的资金安全，请在【料码精灵】公众号【我的钱包】进行提现，谢谢！\n\n\t\t\t")])]) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "pd pm40"
  }, [_c('view', {
    staticClass: "shengcsd_sewr",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.tuichu
    }
  }, [_vm._v("\n\t\t\t\t退出登录\n\t\t\t")])]), _vm._v(" "), _c('navigator', {
    staticClass: "cen fz26 mt40 red sd_j_rrrt",
    attrs: {
      "url": "/pages/xieyi/xieyi"
    }
  }, [_vm._v("\n\t用户使用协议\n")])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[65]);
});
require('pages/user_center/index.js');
__wxRoute = 'pages/wodeliao/wodeliao';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/wodeliao/wodeliao.js';

define('pages/wodeliao/wodeliao.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _wodeliao = __webpack_require__(71);var _wodeliao2 = _interopRequireDefault(_wodeliao);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_wodeliao2.default);
app.$mount();

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_wodeliao_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_wodeliao_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_wodeliao_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_93a5a614_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_wodeliao_vue__ = __webpack_require__(74);
function injectStyle (ssrContext) {
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-93a5a614"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_wodeliao_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_93a5a614_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_wodeliao_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



































































































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			is_mm: 0,
			pageNo: 1,
			pageNo_er: 1,
			isgeng_d: false, //没有更多数据了
			isgeng_d_er: false,
			resource_list: [],
			x_get_order_list_d: [],
			resource_list_leg: 0,
			x_get_order_list_d_leg: 0,
			is_msd: [{
				name: "我卖的料",
				cls: "act" },
			{
				name: "我买的料",
				cls: "" }] };


	},
	components: {},
	methods: {
		sd_dff: function sd_dff(sd, idx) {
			this.is_msd.map(function (a) {
				a.cls = "";
			});
			sd.cls = "act";

			this.is_mm = idx;

			this.resource_list = [];
			this.x_get_order_list_d = [];
			this.pageNo = 1;
			this.isgeng_d_er = 1;
			this.isgeng_d = false;
			this.isgeng_d_er = false;
			if (idx == 0) {
				this.get_resource();
			} else if (idx == 1) {
				this.get_maier();
			}
		},
		get_resource: function get_resource() {
			var th = this;
			_base2.default.ajax("a_get_resource_list", {
				pageNo: this.pageNo.toString() },
			function (data) {
				if (data.data < 10) {
					th.isgeng_d = true;
				}
				data.data.map(function (a) {
					if (a.is_expire == 2) {
						a.zhuangts = "已过期";
					}
					if (a.is_refund == 1) {
						a.zhuangts = "有退款";
					}
					if (a.is_refund == 2) {
						a.zhuangts = "已退款";
					}

					if (0 == a.sale || '2' == a.is_refund || '2' == a.is_expire && '0' == a.is_refund || a.valid_time > 6) {
						a.dele_d = true;
					}


					a.timedf = _base2.default.time_er(a.create_time);
					th.resource_list.push(a);

				});
				th.resource_list_leg = th.resource_list.length;

			});

		},

		get_maier: function get_maier() {
			var x_get_order_list = {},
			th = this;
			x_get_order_list.pageNo = this.pageNo_er.toString();
			_base2.default.ajax("a_get_order_list", x_get_order_list, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					th.x_get_order_list_d.push(a);
				});
				th.x_get_order_list_d_leg = th.x_get_order_list_d.length;
				if (data.data.length < 10) {
					th.isgeng_d_er = true;
				}
			});

		},
		delect_er: function delect_er(sd, idx) {//我买的料删除
			var ssd_ceet = {},
			th = this;
			ssd_ceet.id = sd.id.toString(),
			uni.showModal({
				title: '提示',
				content: '确定是否删除这条记录？',
				success: function success(res) {
					if (res.confirm) {
						_base2.default.ajax("x_remove_order", ssd_ceet, function (data) {
							th.x_get_order_list_d.splice(idx, 1);
						});
					}
				} });


		},

		delect: function delect(sd, idx) {
			var ssd_ceet = {},
			th = this;
			ssd_ceet.id = sd.id.toString();

			uni.showModal({
				title: '提示',
				content: '确定是否删除这条记录？',
				success: function success(res) {
					if (res.confirm) {
						_base2.default.ajax("a_remove_resource", ssd_ceet, function (data) {
							th.resource_list.splice(idx, 1);
						});
					}
				} });

		} },


	mounted: function mounted() {

	},
	onShow: function onShow() {

		this.resource_list = [];
		this.x_get_order_list_d = [];
		this.pageNo = 1;
		this.isgeng_d_er = 1;
		this.isgeng_d = false;
		this.isgeng_d_er = false;
		this.get_resource();
	},

	/**
     * 页面上拉触底事件的处理函数
     */
	onReachBottom: function onReachBottom() {
		if (this.is_mm == 0) {
			if (!this.isgeng_d) {
				++this.pageNo;
				this.get_resource();
			}
		} else if (this.is_mm == 1) {
			if (!this.isgeng_d_er) {
				++this.pageNo_er;
				this.get_maier();
			}
		}
	} };

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('liaomatou', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "bbm"
  }, [_vm._l((_vm.is_msd), function(item, idx) {
    return _c('view', {
      staticClass: "sd_jh_deert ",
      class: item.cls,
      attrs: {
        "eventid": '0-' + idx
      },
      on: {
        "click": function($event) {
          _vm.sd_dff(item, idx)
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(item.name) + "\n\t\t")])
  }), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })], 2), _vm._v(" "), (_vm.is_mm == 0) ? _c('view', [_vm._l((_vm.resource_list), function(sd, idx) {
    return _c('navigator', {
      staticClass: "sd_drrttys pd bbm pt20 pm20",
      attrs: {
        "url": '/pages/list_de/list_de?code_r=' + sd.id
      }
    }, [_c('view', {
      staticClass: "dian dsf_jh_deert"
    }, [_c('view', {
      staticClass: "fz26 z9"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(sd.timedf) + "\n\t\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fz26 z3 mt20"
    }, [(sd.zhuangts) ? _c('text', {
      staticClass: "red"
    }, [_vm._v("【" + _vm._s(sd.zhuangts) + "】")]) : _vm._e(), _vm._v(_vm._s(sd.title) + "\n\t\t\t\t")])]), _vm._v(" "), _c('view', {
      staticClass: "ov tr fz26 z9"
    }, [_vm._v("\n\t\t\t\t已售\n\t\t\t\t"), _c('text', {
      staticClass: "red"
    }, [_vm._v(_vm._s(sd.sale))]), _vm._v("份\n\n\t\t\t\t"), (sd.dele_d) ? _c('view', {
      staticClass: "DSf_dsf_drrt mt10",
      attrs: {
        "eventid": '1-' + idx
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.delect(sd, idx)
        }
      }
    }, [_c('image', {
      staticClass: "lajixiang",
      attrs: {
        "src": "../../static/img/lajixiang.png"
      }
    })]) : _vm._e()]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (_vm.isgeng_d && _vm.resource_list_leg >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t\t没有更多数据了...\n\t\t")]) : _vm._e(), _vm._v(" "), (!_vm.isgeng_d && _vm.resource_list_leg >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t\t加载中...\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.isgeng_d && _vm.resource_list_leg < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '1'
    }
  }) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.is_mm == 1) ? _c('view', [_vm._l((_vm.x_get_order_list_d), function(item, idx) {
    return _c('navigator', {
      staticClass: "sd_drrttys pd bbm pt20 pm20",
      attrs: {
        "url": '/pages/xiangqing/xiangqing?id_r=' + item.resource_id
      }
    }, [_c('view', {
      staticClass: "dian dsf_jh_deert"
    }, [_c('view', {
      staticClass: "fz26 z9"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(item.timedf) + "\n\t\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fz26 z3 mt20"
    }, [(item.zhuangts) ? _c('text', {
      staticClass: "red"
    }, [_vm._v("【" + _vm._s(item.zhuangts) + "】")]) : _vm._e(), _vm._v(" " + _vm._s(item.title) + "\n\t\t\t\t")])]), _vm._v(" "), _c('view', {
      staticClass: "ov tr fz26 z9"
    }, [_c('text', {
      staticClass: "red"
    }, [_vm._v(_vm._s(item.price) + "元")]), _vm._v(" "), _c('view', {
      staticClass: "DSf_dsf_drrt mt10",
      attrs: {
        "eventid": '2-' + idx
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.delect_er(item, idx)
        }
      }
    }, [_c('image', {
      staticClass: "lajixiang",
      attrs: {
        "src": "../../static/img/lajixiang.png"
      }
    })])]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (_vm.isgeng_d_er && _vm.x_get_order_list_d_leg >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t\t没有更多数据了...\n\t\t")]) : _vm._e(), _vm._v(" "), (!_vm.isgeng_d_er && _vm.x_get_order_list_d_leg >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t\t加载中...\n\t\t")]) : _vm._e(), _vm._v(" "), (!_vm.isgeng_d_er && _vm.x_get_order_list_d_leg.length < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '2'
    }
  }) : _vm._e()], 2) : _vm._e()], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[70]);
});
require('pages/wodeliao/wodeliao.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(76);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1422dcdc_hasScoped_false_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(79);
function injectStyle (ssrContext) {
  __webpack_require__(77)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1422dcdc_hasScoped_false_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


















































































































































































































































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: {
		title: 'Hello',
		jiner: '',
		date: "",
		time_sd: "",
		is_sdf_a: false,
		is_sdf_b: false,
		is_sdf_c: false,
		liao_sd_a: false,
		liao_sd_b: false,
		moban_ds: 9,
		form: {
			title: "", //标题
			introduce: "", //简介
			content: "", //内容
			img: "", //内容图片，和内容至少填一个
			price: 0, //价格（元）
			color_s: "", // 二维码上半色
			color_x: "", //二维码下半色
			is_refund: 0, //是否退款0不退款1有退款
			expire_time_str: "" //过期时间（非必填）
		},

		dingjia: [{
			name: "免费",
			num: 0,
			cls: "act" },
		{
			name: "1元",
			num: 1,
			cls: "" },
		{
			name: "5元",
			num: 5,
			cls: "" },
		{
			name: "18元",
			num: 18,
			cls: "" },
		{
			name: "38元",
			num: 38,
			cls: "" },
		{
			name: "68元",
			num: 68,
			cls: "" },
		{
			name: "88元",
			num: 88,
			cls: "" },
		{
			name: "188元",
			num: 188,
			cls: "" }],

		s_kj_der: [],
		img: [] },


	components: {},
	onShow: function onShow(e) {
		if (uni.getStorageSync('id_s')) {
			var yanse = uni.getStorageSync('yanse');
			yanse = yanse.split(",");
			this.moban_ds = uni.getStorageSync('id_s');
			this.form.color_s = yanse[0];
			this.form.color_x = yanse[1];
		}

	},
	methods: {
		xzmb_erert: function xzmb_erert() {
			var th = this;
			wx.navigateTo({
				url: '/pages/xzmb/xzmb?id_s=' + th.moban_ds });

		},
		sclm_ddrt: function sclm_ddrt() {//生成料码
			if (!this.form.title) {
				uni.showToast({
					title: '请输入标题',
					icon: "none",
					duration: 2000 });

				return;
			}

			if (!this.form.content && this.img.length <= 0) {
				uni.showToast({
					title: '请输入文字或上传图片',
					icon: 'none',
					duration: 2000 });

				return;
			}

			this.form.img = this.img.join(",");
			this.form.expire_time_str = this.date + " " + this.time_sd;
			_base2.default.ajax("a_add_resource", this.form, function (data) {
				uni.redirectTo({
					url: '/pages/list_de/list_de?type_e=1&code_r=' + data.data });

			});



		},
		checkboxChange: function checkboxChange(e) {

		},
		sd_dsf: function sd_dsf(sd) {
			this.dingjia.map(function (a) {
				a.cls = "";
			});
			sd.cls = "act";
			this.jiner = sd.num;
			this.form.price = sd.num;
			console.log(sd.num);
		},
		bindDateChange: function bindDateChange(evt) {
			this.date = evt.detail.value;
		},
		bindDateChange_er: function bindDateChange_er(evt) {
			this.time_sd = evt.detail.value;
		},
		qingdf: function qingdf() {
			this.date = "";
			this.time_sd = "";
		},
		shg_deert: function shg_deert() {//上传图片
			var th = this;
			uni.chooseImage({
				success: function success(res) {
					var login_wer = uni.getStorageSync('token');
					res.tempFilePaths.map(function (a) {
						th.s_kj_der.push(a);
						uni.uploadFile({
							url: 'https://lmjl.ttkgou.com/lmjl_core/app/a_img_upload_one', //仅为示例，非真实的接口地址
							filePath: a,
							name: 'file',
							formData: {
								'token': login_wer },

							success: function success(res) {
								var sf_ddr = JSON.parse(res.data);
								th.img.push(sf_ddr.data);
								console.log(th.img);
							} });

					});
				} });


		},
		dsf_derty: function dsf_derty(idx) {//删除图片
			this.img.splice(idx, 1);
			this.s_kj_der.splice(idx, 1);
		},

		lltu: function lltu(url) {
			var th = this;
			uni.previewImage({
				current: url,
				urls: th.s_kj_der });

		} },

	mounted: function mounted() {} };

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "content"
  }, [_c('liaomatou', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "mt20 pd"
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.title),
      expression: "form.title"
    }],
    staticClass: "sd_deert",
    attrs: {
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.introduce),
      expression: "form.introduce"
    }],
    staticClass: "sd_deert ab",
    attrs: {
      "maxlength": "46",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.introduce)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.introduce = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [(_vm.liao_sd_a) ? _c('view', {
    staticClass: "pr sd_jh_eeer"
  }, [_c('icon', {
    staticClass: "clse_dseert",
    attrs: {
      "type": "clear",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.liao_sd_a = false
      }
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.content),
      expression: "form.content "
    }],
    staticClass: "br",
    attrs: {
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.content = $event.target.value
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.s_kj_der.length > 0) ? _c('view', {
    staticClass: "pr"
  }, [_vm._l((_vm.s_kj_der), function(sd, idx) {
    return _c('view', {
      staticClass: "add_sertx pr cz"
    }, [_c('icon', {
      staticClass: "clse_dseert",
      attrs: {
        "type": "clear",
        "eventid": '4-' + idx
      },
      on: {
        "click": function($event) {
          _vm.dsf_derty(idx)
        }
      }
    }), _vm._v(" "), _c('image', {
      attrs: {
        "src": sd,
        "eventid": '5-' + idx
      },
      on: {
        "click": function($event) {
          _vm.lltu(sd)
        }
      }
    })], 1)
  }), _vm._v(" "), _c('view', {
    staticClass: "add_sertx ab cz",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.shg_deert
    }
  }, [_c('image', {
    staticClass: "cz",
    attrs: {
      "src": "../../static/img/add_icon.png"
    }
  })])], 2) : _vm._e(), _vm._v(" "), (!_vm.liao_sd_a) ? _c('view', {
    staticClass: "sd_h_deeret",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.liao_sd_a = true
      }
    }
  }, [_vm._m(3), _vm._v(" "), _c('view', {
    staticClass: "z9 fz26 mt10"
  }, [_vm._v("文字")])]) : _vm._e(), _vm._v(" "), (_vm.s_kj_der.length <= 0) ? _c('view', {
    staticClass: "sd_h_deeret",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.shg_deert
    }
  }, [_vm._m(4), _vm._v(" "), _c('view', {
    staticClass: "z9 fz26 mt10"
  }, [_vm._v("图片")])]) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })])]), _vm._v(" "), _c('view', {
    staticClass: "pl20"
  }, [_vm._m(5), _vm._v(" "), _vm._l((_vm.dingjia), function(sd, index) {
    return _c('view', {
      staticClass: "d_jh_deeert pr20",
      attrs: {
        "eventid": '9-' + index
      },
      on: {
        "click": function($event) {
          _vm.sd_dsf(sd)
        }
      }
    }, [_c('view', {
      staticClass: "br  ",
      class: sd.cls
    }, [_vm._v(_vm._s(sd.name))])])
  }), _vm._v(" "), _c('view', {
    staticClass: "qc"
  }), _vm._v(" "), _c('view', {
    staticClass: "mt20 pr20"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.price),
      expression: "form.price"
    }],
    staticClass: "sd_deert",
    attrs: {
      "placeholder": "自定义金额",
      "eventid": '10'
    },
    domProps: {
      "value": (_vm.form.price)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.price = $event.target.value
      }
    }
  })])], 2), _vm._v(" "), _c('view', {
    staticClass: "pd dsf_jh_deert mt20"
  }, [_vm._m(6), _vm._v(" "), _c('view', {
    staticClass: "pd"
  }, [_c('view', {
    staticClass: "dsfdsf_deet fz30 pr bbm"
  }, [_c('view', {
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        _vm.is_sdf_a ? _vm.is_sdf_a = false : _vm.is_sdf_a = true
      }
    }
  }, [_vm._v("\n\t\t\t\t\t过期时间\n\t\t\t\t\t"), _c('image', {
    staticClass: "down_deert",
    attrs: {
      "src": "../../static/img/down.png"
    }
  })]), _vm._v(" "), (_vm.is_sdf_a) ? _c('view', {
    staticClass: "mt20"
  }, [_c('view', {
    staticClass: "red fz26 pm20"
  }, [_vm._v("所选时间为稿件下架时间，此时段以后将不能被购买\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "sd_jh_dert fl"
  }, [_c('picker', {
    staticClass: "br dsf_dert fz26",
    attrs: {
      "mode": "date",
      "start": "2018-01-01",
      "end": "2019-01-01",
      "eventid": '12'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.date || '请选日期') + "\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('picker', {
    staticClass: "br dsf_dert fz26 ab",
    attrs: {
      "mode": "time",
      "eventid": '13'
    },
    on: {
      "change": _vm.bindDateChange_er
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.time_sd || '请选择时间') + "\n\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "ov"
  }, [_c('text', {
    staticClass: "qingkong_de",
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": _vm.qingdf
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })]) : _vm._e()]), _vm._v(" "), _c('view', {
    staticClass: "dsfdsf_deet fz30 pr bbm"
  }, [_c('view', {
    attrs: {
      "eventid": '15'
    },
    on: {
      "click": function($event) {
        _vm.is_sdf_b ? _vm.is_sdf_b = false : _vm.is_sdf_b = true
      }
    }
  }, [_vm._v("\n\t\t\t\t\t是否退款\n\t\t\t\t\t"), _c('image', {
    staticClass: "down_deert",
    attrs: {
      "src": "../../static/img/down.png"
    }
  })]), _vm._v(" "), (_vm.is_sdf_b) ? _c('view', {
    staticClass: "mt20"
  }, [_c('view', {
    staticClass: "red fz26 pm20"
  }, [_vm._v("选中退款将会有一键退款的功能 ")]), _vm._v(" "), _c('view', {
    attrs: {
      "bindtap": "gu_seert"
    }
  }, [_c('view', {
    staticClass: "df_erttyxc cz",
    attrs: {
      "eventid": '16'
    },
    on: {
      "click": function($event) {
        _vm.form.is_refund == 0 ? _vm.form.is_refund = 1 : _vm.form.is_refund = 0
      }
    }
  }, [(_vm.form.is_refund == 0) ? _c('text', {
    staticClass: "ssd_drrrtt cz"
  }) : _c('icon', {
    staticClass: "cz",
    attrs: {
      "type": "success",
      "size": "22"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "cz"
  }, [_vm._v("是否退款")])], 1)])]) : _vm._e()]), _vm._v(" "), _c('view', {
    staticClass: "dsfdsf_deet fz30 pr bbm"
  }, [_c('view', {
    attrs: {
      "eventid": '17'
    },
    on: {
      "click": function($event) {
        _vm.is_sdf_c ? _vm.is_sdf_c = false : _vm.is_sdf_c = true
      }
    }
  }, [_vm._v("\n\t\t\t\t\t选择模板\n\t\t\t\t\t"), _c('image', {
    staticClass: "down_deert",
    attrs: {
      "src": "../../static/img/down.png"
    }
  })]), _vm._v(" "), (_vm.is_sdf_c) ? _c('view', {
    staticClass: "pt20"
  }, [_c('view', {
    staticClass: "red fz26 pm20 "
  }, [_vm._v("点击图片选择料码模版 ")]), _vm._v(" "), _c('view', [_c('image', {
    staticClass: "usdd_dseert",
    attrs: {
      "src": '../../static/img/' + _vm.moban_ds + '.png',
      "eventid": '18'
    },
    on: {
      "click": _vm.xzmb_erert
    }
  })])]) : _vm._e()])])]), _vm._v(" "), _c('view', {
    staticClass: "qc"
  }), _vm._v(" "), _c('view', {
    staticClass: "pd pm40"
  }, [_c('view', {
    staticClass: "shengcsd_sewr ",
    attrs: {
      "eventid": '19'
    },
    on: {
      "click": _vm.sclm_ddrt
    }
  }, [_vm._v("\n\t\t\t生成料码\n\t\t")])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('text', {
    staticClass: "bgzhu dsf_jh_s yj"
  }), _vm._v(" "), _c('text', {
    staticClass: "fz30 ml10"
  }, [_vm._v("标题")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "mt30"
  }, [_c('text', {
    staticClass: "fz30 "
  }, [_vm._v("简介")]), _vm._v(" "), _c('text', {
    staticClass: "fz26 red"
  }, [_vm._v("(可不填)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "mt30"
  }, [_c('text', {
    staticClass: "bgzhu dsf_jh_s yj"
  }), _vm._v(" "), _c('text', {
    staticClass: "fz30 ml10"
  }, [_vm._v("料")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "yj4 br df_jh_deert"
  }, [_c('image', {
    staticClass: "qianbieer cz",
    attrs: {
      "src": "../../static/img/qianbi.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "yj4 br df_jh_deert"
  }, [_c('image', {
    staticClass: "qianbieer cz",
    attrs: {
      "src": "../../static/img/tupian.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "mt30"
  }, [_c('text', {
    staticClass: "bgzhu dsf_jh_s yj"
  }), _vm._v(" "), _c('text', {
    staticClass: "fz30 ml10"
  }, [_vm._v("定价(元)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: " pt20 pm20 bbm"
  }, [_c('text', {
    staticClass: "fz30 "
  }, [_vm._v("其他功能")]), _vm._v(" "), _c('text', {
    staticClass: "fz26 red"
  }, [_vm._v("(非必填)")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[75]);
});
require('pages/index/index.js');
__wxRoute = 'pages/xzmb/xzmb';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xzmb/xzmb.js';

define('pages/xzmb/xzmb.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _xzmb = __webpack_require__(81);var _xzmb2 = _interopRequireDefault(_xzmb);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_xzmb2.default);
app.$mount();

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xzmb_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xzmb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xzmb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1dc9d554_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xzmb_vue__ = __webpack_require__(84);
function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dc9d554"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xzmb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1dc9d554_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xzmb_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =









{
	data: function data() {
		return {
			xz_dsf: [{
				id: 1,
				cls: "act",
				yanse: '#FE761E,#EC3004' },
			{
				id: 2,
				cls: "",
				yanse: "#F13C06,#FFB669" },
			{
				id: 3,
				cls: "",
				yanse: "#AB3482,#FCD8B7" },
			{
				id: 4,
				cls: "",
				yanse: "#8763DA,#CFD5DF" },
			{
				id: 5,
				cls: "",
				yanse: "#E14AAD,#30B0FE" },
			{
				id: 6,
				cls: "",
				yanse: "#2D2F3C,#FF8041" },
			{
				id: 7,
				cls: "",
				yanse: "#46B7B5,#D55326" },
			{
				id: 8,
				cls: "",
				yanse: "#3DC7DA,#B2D501" },
			{
				id: 9,
				cls: "",
				yanse: "#DE3319,#FD4626" },
			{
				id: 10,
				cls: "",
				yanse: "#FE0000,#FB8B03" }] };


	},
	components: {},
	methods: {
		sd_ddfgs: function sd_ddfgs(sd) {
			var idx = sd.id;
			this.xz_dsf.map(function (a) {
				a.cls = "";
			});
			this.xz_dsf[idx - 1].cls = "act";

			uni.setStorageSync('id_s', idx);
			uni.setStorageSync('yanse', this.xz_dsf[idx - 1].yanse);
			uni.switchTab({
				url: '/pages/index/index?id_s=' + idx });

		} },



	mounted: function mounted() {} };

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "pl20"
  }, _vm._l((_vm.xz_dsf), function(sd, index) {
    return _c('view', {
      staticClass: "dsf_jh_deert pr20 mt10 pr",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.sd_ddfgs(sd)
        }
      }
    }, [(sd.cls) ? _c('icon', {
      staticClass: "sd_jh_deertt",
      attrs: {
        "type": "success"
      }
    }) : _vm._e(), _vm._v(" "), _c('image', {
      staticClass: "w_derrrtyx",
      attrs: {
        "src": '../../static/img/' + sd.id + '.png'
      }
    })], 1)
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[80]);
});
require('pages/xzmb/xzmb.js');
__wxRoute = 'pages/zuijia/zuijia';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/zuijia/zuijia.js';

define('pages/zuijia/zuijia.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _zuijia = __webpack_require__(86);var _zuijia2 = _interopRequireDefault(_zuijia);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_zuijia2.default);
app.$mount();

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_zuijia_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_zuijia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_zuijia_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7d467d36_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_zuijia_vue__ = __webpack_require__(89);
function injectStyle (ssrContext) {
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d467d36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_zuijia_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7d467d36_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_zuijia_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });











































































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			liao_sd_a: false,
			liao_sd_b: false,


			s_kj_der: [],
			img: [], //图片
			content: "", //内容
			title: "",
			id_r: 0 };



	},
	onLoad: function onLoad(options) {

		this.title = options.title;
		this.id_r = options.liao_id;


	},

	components: {},
	methods: {
		qzuijia: function qzuijia() {//确认追加按钮触发
			var th = this;

			if (!this.content && this.img.length <= 0) {
				wx.showToast({
					title: '请输入文字或上传图片',
					icon: 'none',
					duration: 2000 });

				return;
			}
			var x_add_content = {};
			x_add_content.id = this.id_r;
			x_add_content.content = this.content;
			x_add_content.img = this.img.join(",");
			_base2.default.ajax("a_add_content", x_add_content, function (data) {
				wx.showToast({
					title: '追加成功',
					icon: 'none',
					duration: 2000,
					success: function success() {
						wx.redirectTo({
							url: '/pages/xiangqing/xiangqing?id_r=' + th.id_r });

					} });

			});



		},
		shg_deert: function shg_deert() {//上传图片
			var th = this;
			uni.chooseImage({
				success: function success(res) {
					var login_wer = uni.getStorageSync('token');
					res.tempFilePaths.map(function (a) {
						th.s_kj_der.push(a);
						uni.uploadFile({
							url: 'https://lmjl.ttkgou.com/lmjl_core/app/a_img_upload_one', //仅为示例，非真实的接口地址
							filePath: a,
							name: 'file',
							formData: {
								'token': login_wer },

							success: function success(res) {
								var sf_ddr = JSON.parse(res.data);
								th.img.push(sf_ddr.data);

							} });

					});
				} });


		},
		dsf_derty: function dsf_derty(idx) {//删除图片
			this.img.splice(idx, 1);
			this.s_kj_der.splice(idx, 1);
		},

		lltu: function lltu(url) {
			var th = this;
			uni.previewImage({
				current: url,
				urls: th.s_kj_der });

		} },



	mounted: function mounted() {} };

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('liaomatou', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "mt20 pd"
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "sd_deert",
    attrs: {
      "disabled": "true",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "mt20"
  }, [(_vm.liao_sd_a) ? _c('view', {
    staticClass: "pr sd_jh_eeer"
  }, [_c('icon', {
    staticClass: "clse_dseert",
    attrs: {
      "type": "clear",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.liao_sd_a = false
      }
    }
  }), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.content),
      expression: "form.content "
    }],
    staticClass: "br",
    attrs: {
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.content = $event.target.value
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.s_kj_der.length > 0) ? _c('view', {
    staticClass: "pr"
  }, [_vm._l((_vm.s_kj_der), function(sd, idx) {
    return _c('view', {
      staticClass: "add_sertx pr cz"
    }, [_c('icon', {
      staticClass: "clse_dseert",
      attrs: {
        "type": "clear",
        "eventid": '3-' + idx
      },
      on: {
        "click": function($event) {
          _vm.dsf_derty(idx)
        }
      }
    }), _vm._v(" "), _c('image', {
      attrs: {
        "src": sd,
        "eventid": '4-' + idx
      },
      on: {
        "click": function($event) {
          _vm.lltu(sd)
        }
      }
    })], 1)
  }), _vm._v(" "), _c('view', {
    staticClass: "add_sertx ab cz",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.shg_deert
    }
  }, [_c('image', {
    staticClass: "cz",
    attrs: {
      "src": "../../static/img/add_icon.png"
    }
  })])], 2) : _vm._e(), _vm._v(" "), (!_vm.liao_sd_a) ? _c('view', {
    staticClass: "sd_h_deeret",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.liao_sd_a = true
      }
    }
  }, [_vm._m(2), _vm._v(" "), _c('view', {
    staticClass: "z9 fz26 mt10"
  }, [_vm._v("文字")])]) : _vm._e(), _vm._v(" "), (_vm.s_kj_der.length <= 0) ? _c('view', {
    staticClass: "sd_h_deeret",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.shg_deert
    }
  }, [_vm._m(3), _vm._v(" "), _c('view', {
    staticClass: "z9 fz26 mt10"
  }, [_vm._v("图片")])]) : _vm._e(), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })])]), _vm._v(" "), _c('view', {
    staticClass: "btm mt40 pd"
  }, [_c('view', {
    staticClass: "shengcsd_sewr",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.qzuijia
    }
  }, [_vm._v("\n\t\t\t确认追加\n\t\t")])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('text', {
    staticClass: "bgzhu dsf_jh_s yj"
  }), _vm._v(" "), _c('text', {
    staticClass: "fz30 ml10"
  }, [_vm._v("标题")]), _vm._v(" "), _c('text', {
    staticClass: "red fz24 ml5"
  }, [_vm._v("(不可改)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "mt30"
  }, [_c('text', {
    staticClass: "bgzhu dsf_jh_s yj"
  }), _vm._v(" "), _c('text', {
    staticClass: "fz30 ml10"
  }, [_vm._v("料")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "yj4 br df_jh_deert"
  }, [_c('image', {
    staticClass: "qianbieer cz",
    attrs: {
      "src": "../../static/img/qianbi.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "yj4 br df_jh_deert"
  }, [_c('image', {
    staticClass: "qianbieer cz",
    attrs: {
      "src": "../../static/img/tupian.png"
    }
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[85]);
});
require('pages/zuijia/zuijia.js');
__wxRoute = 'pages/xiangqing/xiangqing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xiangqing/xiangqing.js';

define('pages/xiangqing/xiangqing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _xiangqing = __webpack_require__(91);var _xiangqing2 = _interopRequireDefault(_xiangqing);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_xiangqing2.default);
app.$mount();

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xiangqing_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xiangqing_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xiangqing_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_ecc75428_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xiangqing_vue__ = __webpack_require__(94);
function injectStyle (ssrContext) {
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ecc75428"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_xiangqing_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_ecc75428_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_xiangqing_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });











































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			sd: "",
			content_l: [] };

	},
	onLoad: function onLoad(options) {

		var x_get_resource_detail = {},
		th = this,
		content_l = this.content_l;
		x_get_resource_detail.id = options.id_r;
		_base2.default.ajax("a_get_resource_detail", x_get_resource_detail, function (data) {

			data.data.content_l.map(function (a) {
				a.timedf = _base2.default.time_er(a.create_time);
				a.imgder = [];
				try {
					a.img.split(",").map(function (b) {
						if (b) {
							var sd_deret = uni.getStorageSync('img_url');
							sd_deret += b;

							a.imgder.push(sd_deret);
						}
					});
				} catch (e) {

				}
				String.prototype.my_eer = function (f, e) {
					var reg = new RegExp(f, 'g');
					return this.replace(reg, e);
				};
				a.content = a.content.my_eer('&nbsp;', "");
				a.content = a.content.my_eer('<br/>', "\n");
				content_l.push(a);
			});

			th.sd = data.data.resource;
			th.content_l = content_l;

		});
	},

	components: {},
	methods: {},
	mounted: function mounted() {} };

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('liaomatou', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "fz32 z3 cen mt40  "
  }, [_vm._v("\n\t\t\t  " + _vm._s(_vm.sd.title) + "\n\t\t")]), _vm._v(" "), _vm._l((_vm.content_l), function(item, idx) {
    return _c('view', {
      staticClass: "pd pt20 pm20 dfdsf_jh_drt"
    }, [_c('view', {
      staticClass: "btm pt20 pm20"
    }, [_c('view', {
      staticClass: "fz26 z9"
    }, [_vm._v("\n\t\t\t\t     " + _vm._s(item.timedf) + "\n\t\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fz30 z6 mt20"
    }, [_c('text', {
      staticClass: "dsf_jh_deerty",
      attrs: {
        "selectable": "true"
      }
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _vm._l((item.imgder), function(sf_e, idxe) {
      return _c('image', {
        staticClass: "topi_sd mt20",
        attrs: {
          "src": sf_e,
          "mode": "widthFix"
        }
      })
    })], 2)])])
  }), _vm._v(" "), _vm._m(0)], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "fz32 z6 cen mt40 pm40 btm pt20"
  }, [_vm._v("\n\t\t\t料码\n\t\t\t"), _c('view', {
    staticClass: " fz26"
  }, [_vm._v("资源扫码工具，帮你提高效率")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[90]);
});
require('pages/xiangqing/xiangqing.js');
__wxRoute = 'pages/list_de/list_de';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list_de/list_de.js';

define('pages/list_de/list_de.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _list_de = __webpack_require__(96);var _list_de2 = _interopRequireDefault(_list_de);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_list_de2.default);
app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list_de_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list_de_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list_de_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_59bcce7c_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_list_de_vue__ = __webpack_require__(99);
function injectStyle (ssrContext) {
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59bcce7c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list_de_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_59bcce7c_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_list_de_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });














































































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			sd: "",
			srr_df: 0,
			ma_sdfg: "",
			type_e: "",
			liao_id: 0,
			pageNo: 1,
			is_dsrt: false,
			code_d: "",
			femsd_sd: [] };

	},
	components: {},
	methods: {
		liaoinfo: function liaoinfo() {
			var x_get_resource_info = {},
			th = this,
			code_d = this.code_d;
			x_get_resource_info.id = code_d;
			_base2.default.ajax("a_get_resource_info", x_get_resource_info, function (data) {
				th.sd = data.data;
			});
		},
		get_liao: function get_liao() {
			var x_get_resource_order = {},
			th = this;
			x_get_resource_order.id = this.srr_df;
			x_get_resource_order.pageNo = this.pageNo.toString();
			_base2.default.ajax("a_get_resource_order", x_get_resource_order, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					th.femsd_sd.push(a);
				});
				if (data.data.length < 10) {
					th.is_dsrt = true;
				}

			});
		},

		yijian: function yijian() {
			var liao_id = this.liao_id,
			x_one_notice = {};
			x_one_notice.id = liao_id;
			uni.showModal({
				title: '提示',
				content: '关注公众号才能收到通知',
				success: function success(res) {
					if (res.confirm) {
						_base2.default.ajax("a_one_notice", x_one_notice, function (data) {
							uni.showToast({
								title: data.msg,
								icon: 'none',
								duration: 2000 });

						});
					}
				} });

		},
		suy_deertty: function suy_deertty() {//关闭按钮触发
			uni.switchTab({
				url: '/pages/index/index' });

		},

		yitkus: function yitkus() {
			var liao_id = this.liao_id,
			th = this,
			x_one_notice = {};
			x_one_notice.id = liao_id;
			uni.showModal({
				title: '提示',
				content: '确定要发起一键退款？',
				success: function success(res) {
					if (res.confirm) {
						_base2.default.ajax("a_one_refund", x_one_notice, function (data) {
							uni.showModal({
								title: '提示',
								showCancel: false,
								content: data.msg,
								success: function success(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: '/pages/list_de/list_de?code_r=' + liao_id });

									}
								} });

						});
					}
				} });

		},
		baocun: function baocun(e) {
			var url_e = "",
			ma_sdfg = this.ma_sdfg,
			sd = this.sd;
			url_e = ma_sdfg + sd.img_url;
			uni.showLoading({
				title: '处理中...',
				mask: true });



			uni.getImageInfo({
				src: url_e,
				success: function success(sres) {
					uni.saveImageToPhotosAlbum({
						filePath: sres.path,
						success: function success(res) {
							uni.hideLoading();
							uni.showToast({
								title: '保存成功',
								icon: 'none',
								duration: 2000 });

						} });

				} });

		} },



	onLoad: function onLoad(options) {
		var code_d = options.code_r;
		this.ma_sdfg = uni.getStorageSync('img_url_qr');
		this.srr_df = code_d;
		this.type_e = options.type_e || "";
		this.liao_id = code_d;
		this.code_d = code_d;

		this.get_liao();

		this.liaoinfo();

	},
	onReachBottom: function onReachBottom() {
		if (!this.is_dsrt) {
			++this.pageNo;
			this.get_liao();
		}

	},
	mounted: function mounted() {

	} };

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "pd pt20"
  }, [_c('image', {
    staticClass: "w100 topi_sd",
    attrs: {
      "src": _vm.ma_sdfg + _vm.sd.img_url
    }
  }), _vm._v(" "), _c('navigator', {
    staticClass: "caha_ddfr yj4 br mt60",
    attrs: {
      "url": '/pages/xiangqing/xiangqing?id_r=' + _vm.srr_df
    }
  }, [_vm._v("\n\t\t\t查看详情\n\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "caha_ddfr yj4 br mt30",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.baocun()
      }
    }
  }, [_vm._v("\n\t\t\t保存到相册\n\t\t")]), _vm._v(" "), (_vm.sd.price > 0 && _vm.sd.is_refund < 2 && _vm.sd.is_expire < 2) ? _c('view', {
    staticClass: "caha_ddfr yj4 br mt30",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.yijian
    }
  }, [_vm._v("\n\t\t\t一键通知\n\t\t\t"), _c('text', {
    staticClass: "fz26 red"
  }, [_vm._v("(关注您的粉丝收到消息推送)")])]) : _vm._e(), _vm._v(" "), (_vm.sd.is_refund < 2 && _vm.sd.is_expire < 2 && _vm.type_e != 1) ? _c('navigator', {
    staticClass: "caha_ddfr yj4 br mt30",
    attrs: {
      "url": '/pages/zuijia/zuijia?liao_id=' + _vm.sd.id + '&title=' + _vm.sd.title
    }
  }, [_vm._v("\n\t\t\t追加内容\n\t\t\t"), _c('text', {
    staticClass: "fz26 red"
  }, [_vm._v("(购买过的用户收到消息推送)")])]) : _vm._e(), _vm._v(" "), (_vm.sd.is_refund == 1 && _vm.type_e != 1) ? _c('view', {
    staticClass: "caha_ddfr yj4 br mt30 df_Jh_df_det",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.yitkus
    }
  }, [_vm._v("\n\t\t\t一键退款\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.type_e == 1) ? _c('view', {
    staticClass: "caha_ddfr yj4 br mt30 df_Jh_df_det",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.suy_deertty
    }
  }, [_vm._v("\n\t\t\t关闭\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.type_e != 1) ? _c('view', {
    staticClass: "mt60"
  }, [_c('view', {
    staticClass: "pt20 pm20 fz26"
  }, [_vm._v("\n\n\t\t\t\t收益总额\n\t\t\t\t"), _c('text', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.sd.all_amount))]), _vm._v("元\n\n\t\t\t\t"), _c('view', {
    staticClass: "fr"
  }, [_vm._v("\n\t\t\t\t\t已售\n\t\t\t\t\t"), _c('text', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.sd.sale))]), _vm._v("份\n\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "qc"
  })])]) : _vm._e()], 1), _vm._v(" "), _vm._l((_vm.femsd_sd), function(item, index) {
    return (_vm.type_e != 1) ? _c('view', {
      staticClass: "btm pd pt20 pm20 fz30 pr"
    }, [_c('image', {
      staticClass: "yj topi_sd_deer cz",
      attrs: {
        "src": item.head_img
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "ml10"
    }, [_vm._v(_vm._s(item.nick_name) + "   " + _vm._s(item.status))]), _vm._v(" "), (item.status == 3) ? _c('image', {
      staticClass: "yituikuan_der",
      attrs: {
        "src": "../../static/img/yituikuan.png"
      }
    }) : _vm._e(), _vm._v(" "), _c('view', {
      staticClass: "fr fz26 z9"
    }, [_vm._v(_vm._s(item.timedf))])]) : _vm._e()
  }), _vm._v(" "), (_vm.is_dsrt && _vm.femsd_sd >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t没有更多数据了...\n\t")]) : _vm._e(), _vm._v(" "), (!_vm.is_dsrt && _vm.femsd_sd >= 10) ? _c('view', {
    staticClass: "pt20 pm20 btm cen fz26"
  }, [_vm._v("\n\t\t加载中...\n\t")]) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[95]);
});
require('pages/list_de/list_de.js');
__wxRoute = 'pages/mingxi/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mingxi/index.js';

define('pages/mingxi/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(101);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_20294c12_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
function injectStyle (ssrContext) {
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20294c12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_20294c12_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








































var _kongbai = __webpack_require__(12);var _kongbai2 = _interopRequireDefault(_kongbai);
var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			pageNo: 1,
			sd_kis: [],
			is_dsrt: false };

	},
	/**
     * 生命周期函数--监听页面加载
     */
	onLoad: function onLoad(options) {
		this.get_mx();
	},
	onReachBottom: function onReachBottom() {
		if (!this.is_dsrt) {
			++this.pageNo;
			this.get_mx();
		}
	},
	components: {
		kongbai: _kongbai2.default },

	methods: {
		get_mx: function get_mx() {
			var x_get_transfer_list = {},
			th = this;
			x_get_transfer_list.pageNo = this.pageNo.toString();
			_base2.default.ajax("a_get_transfer_list", x_get_transfer_list, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					th.sd_kis.push(a);
				});
				if (data.data.length < 10) {
					th.is_dsrt = true;
				}
			});
		} },

	mounted: function mounted() {} };

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_vm._l((_vm.sd_kis), function(item, index) {
    return _c('navigator', {
      staticClass: "sd_drrttys pd bbm pt20 pm20",
      attrs: {
        "url": '/pages/list_de/list_de?code_r=' + item.id
      }
    }, [_c('view', {
      staticClass: "dian dsf_jh_deert"
    }, [_c('view', {
      staticClass: "fz26 z9"
    }, [_vm._v("\n\t\t\t\t" + _vm._s(item.timedf) + "\n\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fz26 z3 mt10"
    }, [_c('text', {
      staticClass: "red"
    }, [_vm._v(_vm._s(item.amount))]), _vm._v(" 元\n\t\t\t")])]), _vm._v(" "), _c('view', {
      staticClass: "ov tr fz26 z9"
    }, [_c('view', {
      staticClass: "mt50"
    }, [_c('text', {
      staticClass: "red"
    }, [_vm._v(" -" + _vm._s(item.fee))]), _vm._v(" 元\n\t\t\t")])]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (!_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t\t\t加载中...\n\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t\t\t已加载全部数据\n\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.sd_kis.length < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[100]);
});
require('pages/mingxi/index.js');
__wxRoute = 'pages/zhanghu/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/zhanghu/index.js';

define('pages/zhanghu/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(106);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_10904583_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
function injectStyle (ssrContext) {
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10904583"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_10904583_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








































var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);
var _kongbai = __webpack_require__(12);var _kongbai2 = _interopRequireDefault(_kongbai);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			pageNo: 1,
			sd_kis: [],
			is_dsrt: false };

	},
	onLoad: function onLoad(options) {
		this.get_mx();
	},
	/**
     * 页面上拉触底事件的处理函数
     */
	onReachBottom: function onReachBottom() {
		if (!this.is_dsrt) {
			++this.pageNo;
			this.get_mx();
		}
	},

	components: {
		kongbai: _kongbai2.default },

	methods: {
		get_mx: function get_mx() {
			var x_get_transfer_list = {},
			th = this;
			x_get_transfer_list.pageNo = this.pageNo.toString();
			_base2.default.ajax("a_get_account_list", x_get_transfer_list, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					if (a.type == '1') {
						a.amount = "+" + a.amount;
					}
					if (a.type == '2') {
						a.amount = "(消费)-" + a.amount;
					}
					if (a.type == '3') {
						a.amount = "(退款)+" + a.amount;
					}
					if (a.type == '4') {
						a.amount = "(退款)-" + a.amount;
					}
					th.sd_kis.push(a);
				});
				if (data.data.length < 10) {
					th.is_dsrt = true;

				}
			});
		} },


	mounted: function mounted() {} };

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_vm._l((_vm.sd_kis), function(item, index) {
    return _c('view', {
      staticClass: "pd pt20 pm20 bbm"
    }, [_c('view', {
      staticClass: "fl fg_jh_df dian fz26 z9 "
    }, [_vm._v("\n\t\t\t" + _vm._s(item.timedf) + "\n\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fl fg_jh_df dian fz26 z9 tr "
    }, [_c('image', {
      staticClass: "dsf_kh_det yj cz",
      attrs: {
        "src": item.head_img
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "fz26 z3 ml10"
    }, [_vm._v(_vm._s(item.nick_name))])]), _vm._v(" "), _c('view', {
      staticClass: "qc pt10"
    }), _vm._v(" "), _c('view', {
      staticClass: "fl fg_jh_df dian fz26 z6 "
    }, [_vm._v("\n\t\t\t" + _vm._s(item.title) + "\n\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "fl fg_jh_df dian fz26 z6  tr"
    }, [_c('text', {
      staticClass: "red"
    }, [_vm._v(_vm._s(item.amount))]), _vm._v("元\n\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (!_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t\t加载中...\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t\t已加载全部数据\n\t\t")]) : _vm._e(), _vm._v(" "), (_vm.sd_kis.length < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[105]);
});
require('pages/zhanghu/index.js');
__wxRoute = 'pages/fensoi/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fensoi/index.js';

define('pages/fensoi/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(111);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_76a40faa_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
function injectStyle (ssrContext) {
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76a40faa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_76a40faa_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



































var _kongbai = __webpack_require__(12);var _kongbai2 = _interopRequireDefault(_kongbai);
var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =
{
	data: function data() {
		return {
			pageNo: 1,
			sd_kis: [],
			is_dsrt: false };

	},
	components: {
		kongbai: _kongbai2.default },


	onLoad: function onLoad(options) {
		this.get_mx();
	},
	onReachBottom: function onReachBottom() {
		if (!this.is_dsrt) {
			++this.pageNo;
			this.get_mx();
		}
	},
	methods: {
		get_mx: function get_mx() {
			var x_get_transfer_list = {},
			th = this;

			x_get_transfer_list.pageNo = this.pageNo.toString();
			_base2.default.ajax("a_get_attention_list", x_get_transfer_list, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					th.sd_kis.push(a);
				});
				if (data.data.length < 10) {
					th.is_dsrt = true;
				}

			});
		},
		delect_er: function delect_er(sd, idx) {
			var id_r = sd.id,
			th = this;
			wx.showModal({
				title: '提示',
				content: '确定取消关注',
				success: function success(res) {
					if (res.confirm) {
						var x_remove_attention = {};
						x_remove_attention.id = id_r;
						_base2.default.ajax("a_get_follower_list", x_remove_attention, function (data) {
							th.sd_kis.splice(idx, 1);

						});
					}
				} });

		} } };

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_vm._l((_vm.sd_kis), function(item, index) {
    return _c('view', {
      staticClass: "pd pt20 pm20 bbm"
    }, [_c('view', {
      staticClass: "dsf_jh_deert dian"
    }, [_c('image', {
      staticClass: "yj dfg_jh_dert cz",
      attrs: {
        "src": item.dp_head_img
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "fz32 z3 ml10"
    }, [_vm._v(_vm._s(item.dp_nick_name))])]), _vm._v(" "), _c('view', {
      staticClass: "ov fz26 z9 df_jh_deert dian tr"
    }, [_vm._v("\n\t\t\t" + _vm._s(item.timedf) + "\n\n\n\n\n\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (!_vm.is_dsrt && _vm.sd_kis.length >= 15) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t加载中...\n\t")]) : _vm._e(), _vm._v(" "), (_vm.is_dsrt && _vm.sd_kis.length >= 15) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t已加载全部数据\n\t")]) : _vm._e(), _vm._v(" "), (_vm.sd_kis.length < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[110]);
});
require('pages/fensoi/index.js');
__wxRoute = 'pages/guanzhu/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/guanzhu/index.js';

define('pages/guanzhu/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);
var _index = __webpack_require__(116);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3c168b56_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
function injectStyle (ssrContext) {
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c168b56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__E_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_E_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_E_HBuilderX_plugins_uniapp_node_modules_babel_runtime_E_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_E_HBuilderX_plugins_uniapp_lib_uni_loader_js_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3c168b56_hasScoped_true_E_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_E_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });






































var _kongbai = __webpack_require__(12);var _kongbai2 = _interopRequireDefault(_kongbai);
var _base = __webpack_require__(6);var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			pageNo: 1,
			sd_kis: [],
			is_dsrt: false };

	},
	components: {
		kongbai: _kongbai2.default },


	onLoad: function onLoad(options) {
		this.get_mx();
	},
	onReachBottom: function onReachBottom() {
		if (!this.is_dsrt) {
			++this.pageNo;
			this.get_mx();
		}
	},
	methods: {
		get_mx: function get_mx() {
			var x_get_transfer_list = {},
			th = this;

			x_get_transfer_list.pageNo = this.pageNo.toString();
			_base2.default.ajax("a_get_attention_list", x_get_transfer_list, function (data) {
				data.data.map(function (a) {
					a.timedf = _base2.default.time_er(a.create_time);
					th.sd_kis.push(a);
				});
				if (data.data.length < 10) {
					th.is_dsrt = true;
				}

			});
		},
		delect_er: function delect_er(sd, idx) {
			var id_r = sd.id,
			th = this;
			wx.showModal({
				title: '提示',
				content: '确定取消关注',
				success: function success(res) {
					if (res.confirm) {
						var x_remove_attention = {};
						x_remove_attention.id = id_r;
						_base2.default.ajax("a_remove_attention", x_remove_attention, function (data) {
							th.sd_kis.splice(idx, 1);

						});
					}
				} });

		} } };

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_vm._l((_vm.sd_kis), function(item, idx) {
    return _c('view', {
      staticClass: "pd pt20 pm20 bbm"
    }, [_c('view', {
      staticClass: "dsf_jh_deert dian"
    }, [_c('image', {
      staticClass: "yj dfg_jh_dert cz",
      attrs: {
        "src": item.head_img
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "fz32 z3 ml10"
    }, [_vm._v(_vm._s(item.nick_name))])]), _vm._v(" "), _c('view', {
      staticClass: "ov fz26 z9 df_jh_deert dian tr"
    }, [_vm._v("\n\t\t\t" + _vm._s(item.timedf) + "\n\n\t\t\t"), _c('view', {
      staticClass: " tr",
      attrs: {
        "eventid": '0-' + idx
      },
      on: {
        "click": function($event) {
          _vm.delect_er(item, idx)
        }
      }
    }, [_c('image', {
      staticClass: "lajixiang",
      attrs: {
        "src": "../../static/img/lajixiang.png"
      }
    })])]), _vm._v(" "), _c('view', {
      staticClass: "qc"
    })])
  }), _vm._v(" "), (!_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t加载中...\n\t")]) : _vm._e(), _vm._v(" "), (_vm.is_dsrt && _vm.sd_kis.length >= 10) ? _c('view', {
    staticClass: "btm pt20 fz26 pm20 z9 cen"
  }, [_vm._v("\n\t\t已加载全部数据\n\t")]) : _vm._e(), _vm._v(" "), (_vm.sd_kis.length < 10) ? _c('kongbai', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e()], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[115]);
});
require('pages/guanzhu/index.js');

