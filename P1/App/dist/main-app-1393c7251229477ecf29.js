/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main-app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + {"0":"f3ad5d2bb6f09edb477f","1":"9d27edf99b22846327b5"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main-app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
class CSSResult {
  constructor(cssText, safeToken) {
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  get styleSheet() {
    if (this._styleSheet === undefined) {
      // Note, if `supportsAdoptingStyleSheets` is true then we assume
      // CSSStyleSheet is constructable.
      if (supportsAdoptingStyleSheets) {
        this._styleSheet = new CSSStyleSheet();

        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }

    return this._styleSheet;
  }

  toString() {
    return this.cssText;
  }

}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

const unsafeCSS = value => {
  return new CSSResult(String(value), constructionToken);
};

const textFromCSSResult = value => {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


const css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, internalProperty, query, queryAsync, queryAll, eventOptions, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return internalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return queryAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return queryAssignedNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

const standardCustomElement = (tagName, descriptor) => {
  const {
    kind,
    elements
  } = descriptor;
  return {
    kind,
    elements,

    // This callback is called once the class is otherwise fully defined
    finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }

  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */


const customElement = tagName => classOrDescriptor => typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);

const standardProperty = (options, element) => {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign(Object.assign({}, element), {
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},

      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },

      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    };
  }
};

const legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return (protoOrDescriptor, name) => name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */

function internalProperty(options) {
  return property({
    attribute: false,
    hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged
  });
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function query(selector, cache) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelector(selector);
      },

      enumerable: true,
      configurable: true
    };

    if (cache) {
      const key = typeof name === 'symbol' ? Symbol() : `__${name}`;

      descriptor.get = function () {
        if (this[key] === undefined) {
          this[key] = this.renderRoot.querySelector(selector);
        }

        return this[key];
      };
    }

    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
} // Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.

/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */

function queryAsync(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      async get() {
        await this.updateComplete;
        return this.renderRoot.querySelector(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAll(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelectorAll(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

const legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};

const standardQuery = (descriptor, element) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor
});

const standardEventOptions = (options, element) => {
  return Object.assign(Object.assign({}, element), {
    finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }

  });
};

const legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */


function eventOptions(options) {
  // Return value typed as any to prevent TypeScript from complaining that
  // standard decorator function signature does not match TypeScript decorator
  // signature
  // TODO(kschaaf): unclear why it was only failing on this decorator and not
  // the others
  return (protoOrDescriptor, name) => name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
} // x-browser support for matches
// tslint:disable-next-line:no-any

const ElementProto = Element.prototype;
const legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */

function queryAssignedNodes(slotName = '', flatten = false, selector = '') {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        const slotSelector = `slot${slotName ? `[name=${slotName}]` : ':not([name])'}`;
        const slot = this.renderRoot.querySelector(slotSelector);
        let nodes = slot && slot.assignedNodes({
          flatten
        });

        if (nodes && selector) {
          nodes = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE && node.matches ? node.matches(selector) : legacyMatches.call(node, selector));
        }

        return nodes;
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = (prop, _obj) => prop;

const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },

  fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }

};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

const notEqual = (value, old) => {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

class UpdatingElement extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  static get observedAttributes() {
    // note: piggy backing on this to ensure we're finalized.
    this.finalize();
    const attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays

    this._classProperties.forEach((v, p) => {
      const attr = this._attributeNameForProperty(p, v);

      if (attr !== undefined) {
        this._attributeToPropertyMap.set(attr, p);

        attributes.push(attr);
      }
    });

    return attributes;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */

  /** @nocollapse */


  static _ensureClassProperties() {
    // ensure private storage for property declarations.
    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
      this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

      const superProperties = Object.getPrototypeOf(this)._classProperties;

      if (superProperties !== undefined) {
        superProperties.forEach((v, k) => this._classProperties.set(k, v));
      }
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */


  static createProperty(name, options = defaultPropertyDeclaration) {
    // Note, since this can be called by the `@property` decorator which
    // is called before `finalize`, we ensure storage exists for property
    // metadata.
    this._ensureClassProperties();

    this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
    // it would be lost otherwise and that would never be the user's intention;
    // Instead, we expect users to call `requestUpdate` themselves from
    // user-defined accessors. Note that if the super has an accessor we will
    // still overwrite it


    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
      return;
    }

    const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
    const descriptor = this.getPropertyDescriptor(name, key, options);

    if (descriptor !== undefined) {
      Object.defineProperty(this.prototype, name, descriptor);
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */


  static getPropertyDescriptor(name, key, options) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[key];
      },

      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdateInternal(name, oldValue, options);
      },

      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */


  static getPropertyOptions(name) {
    return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */


  static finalize() {
    // finalize any superclasses
    const superCtor = Object.getPrototypeOf(this);

    if (!superCtor.hasOwnProperty(finalized)) {
      superCtor.finalize();
    }

    this[finalized] = true;

    this._ensureClassProperties(); // initialize Map populated in observedAttributes


    this._attributeToPropertyMap = new Map(); // make any properties
    // Note, only process "own" properties since this element will inherit
    // any properties defined on the superClass, and finalization ensures
    // the entire prototype chain is finalized.

    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      const props = this.properties; // support symbols in properties (IE11 does not support this)

      const propKeys = [...Object.getOwnPropertyNames(props), ...(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])]; // This for/of is ok because propKeys is an array

      for (const p of propKeys) {
        // note, use of `any` is due to TypeSript lack of support for symbol in
        // index types
        // tslint:disable-next-line:no-any no symbol in index
        this.createProperty(p, props[p]);
      }
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */


  static _attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */


  static _valueHasChanged(value, old, hasChanged = notEqual) {
    return hasChanged(value, old);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */


  static _propertyValueFromAttribute(value, options) {
    const type = options.type;
    const converter = options.converter || defaultConverter;
    const fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
    return fromAttribute ? fromAttribute(value, type) : value;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */


  static _propertyValueToAttribute(value, options) {
    if (options.reflect === undefined) {
      return;
    }

    const type = options.type;
    const converter = options.converter;
    const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
    return toAttribute(value, type);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */


  initialize() {
    this._updateState = 0;
    this._updatePromise = new Promise(res => this._enableUpdatingResolver = res);
    this._changedProperties = new Map();

    this._saveInstanceProperties(); // ensures first update will be caught by an early access of
    // `updateComplete`


    this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */


  _saveInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    this.constructor._classProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        const value = this[p];
        delete this[p];

        if (!this._instanceProperties) {
          this._instanceProperties = new Map();
        }

        this._instanceProperties.set(p, value);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */


  _applyInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    // tslint:disable-next-line:no-any
    this._instanceProperties.forEach((v, p) => this[p] = v);

    this._instanceProperties = undefined;
  }

  connectedCallback() {
    // Ensure first connection completes an update. Updates cannot complete
    // before connection.
    this.enableUpdating();
  }

  enableUpdating() {
    if (this._enableUpdatingResolver !== undefined) {
      this._enableUpdatingResolver();

      this._enableUpdatingResolver = undefined;
    }
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */


  disconnectedCallback() {}
  /**
   * Synchronizes property values when attributes change.
   */


  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      this._attributeToProperty(name, value);
    }
  }

  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    const ctor = this.constructor;

    const attr = ctor._attributeNameForProperty(name, options);

    if (attr !== undefined) {
      const attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


      if (attrValue === undefined) {
        return;
      } // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting


      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      } // mark state not reflecting


      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
    }
  }

  _attributeToProperty(name, value) {
    // Use tracking info to avoid deserializing attribute value if it was
    // just set from a property setter.
    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
      return;
    }

    const ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
    // the type; it has issues with tracking types through statics
    // tslint:disable-next-line:no-unnecessary-type-assertion

    const propName = ctor._attributeToPropertyMap.get(name);

    if (propName !== undefined) {
      const options = ctor.getPropertyOptions(propName); // mark state reflecting

      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
      this[propName] = // tslint:disable-next-line:no-any
      ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */


  requestUpdateInternal(name, oldValue, options) {
    let shouldRequestUpdate = true; // If we have a property key, perform property update steps.

    if (name !== undefined) {
      const ctor = this.constructor;
      options = options || ctor.getPropertyOptions(name);

      if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
        if (!this._changedProperties.has(name)) {
          this._changedProperties.set(name, oldValue);
        } // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `_reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.


        if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
          if (this._reflectingProperties === undefined) {
            this._reflectingProperties = new Map();
          }

          this._reflectingProperties.set(name, options);
        }
      } else {
        // Abort the request if the property should not be considered changed.
        shouldRequestUpdate = false;
      }
    }

    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
      this._updatePromise = this._enqueueUpdate();
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */


  requestUpdate(name, oldValue) {
    this.requestUpdateInternal(name, oldValue);
    return this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */


  async _enqueueUpdate() {
    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;

    try {
      // Ensure any previous update has resolved before updating.
      // This `await` also ensures that property changes are batched.
      await this._updatePromise;
    } catch (e) {// Ignore any previous errors. We only care that the previous cycle is
      // done. Any error should have been handled in the previous update.
    }

    const result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
    // enable coordinating updates with a scheduler. Note, the result is
    // checked to avoid delaying an additional microtask unless we need to.

    if (result != null) {
      await result;
    }

    return !this._hasRequestedUpdate;
  }

  get _hasRequestedUpdate() {
    return this._updateState & STATE_UPDATE_REQUESTED;
  }

  get hasUpdated() {
    return this._updateState & STATE_HAS_UPDATED;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */


  performUpdate() {
    // Abort any update if one is not pending when this is called.
    // This can happen if `performUpdate` is called early to "flush"
    // the update.
    if (!this._hasRequestedUpdate) {
      return;
    } // Mixin instance properties once, if they exist.


    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }

    let shouldUpdate = false;
    const changedProperties = this._changedProperties;

    try {
      shouldUpdate = this.shouldUpdate(changedProperties);

      if (shouldUpdate) {
        this.update(changedProperties);
      } else {
        this._markUpdated();
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false; // Ensure element can accept additional updates after an exception.

      this._markUpdated();

      throw e;
    }

    if (shouldUpdate) {
      if (!(this._updateState & STATE_HAS_UPDATED)) {
        this._updateState = this._updateState | STATE_HAS_UPDATED;
        this.firstUpdated(changedProperties);
      }

      this.updated(changedProperties);
    }
  }

  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */


  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */


  _getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  update(_changedProperties) {
    if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
      // Use forEach so this works even if for/of loops are compiled to for
      // loops expecting arrays
      this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));

      this._reflectingProperties = undefined;
    }

    this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */


  firstUpdated(_changedProperties) {}

}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, internalProperty, query, queryAsync, queryAll, eventOptions, queryAssignedNodes, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "internalProperty", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["internalProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_2__["queryAssignedNodes"]; });

/* harmony import */ var lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */






 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.4.0');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */


  static _getUniqueStyles() {
    // Only gather styles once per class
    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
      return;
    } // Take care not to call `this.getStyles()` multiple times since this
    // generates new CSSResults each time.
    // TODO(sorvell): Since we do not cache CSSResults by input, any
    // shared styles will generate new stylesheet objects, which is wasteful.
    // This should be addressed when a browser ships constructable
    // stylesheets.


    const userStyles = this.getStyles();

    if (Array.isArray(userStyles)) {
      // De-duplicate styles preserving the _last_ instance in the set.
      // This is a performance optimization to avoid duplicated styles that can
      // occur especially when composing via subclassing.
      // The last item is kept to try to preserve the cascade order with the
      // assumption that it's most important that last added styles override
      // previous styles.
      const addStyles = (styles, set) => styles.reduceRight((set, s) => // Note: On IE set.add() does not return the set
      Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set); // Array.from does not work on Set in IE, otherwise return
      // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


      const set = addStyles(userStyles, new Set());
      const styles = [];
      set.forEach(v => styles.unshift(v));
      this._styles = styles;
    } else {
      this._styles = userStyles === undefined ? [] : [userStyles];
    } // Ensure that there are no invalid CSSStyleSheet instances here. They are
    // invalid in two conditions.
    // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
    //     this is impossible to check except via .replaceSync or use
    // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
    //     false)


    this._styles = this._styles.map(s => {
      if (s instanceof CSSStyleSheet && !_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
        // Flatten the cssText from the passed constructible stylesheet (or
        // undetectable non-constructible stylesheet). The user might have
        // expected to update their stylesheets over time, but the alternative
        // is a crash.
        const cssText = Array.prototype.slice.call(s.cssRules).reduce((css, rule) => css + rule.cssText, '');
        return Object(_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"])(cssText);
      }

      return s;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */


  initialize() {
    super.initialize();

    this.constructor._getUniqueStyles();

    this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
    // element's getRootNode(). While this could be done, we're choosing not to
    // support this now since it would require different logic around de-duping.

    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */


  createRenderRoot() {
    return this.attachShadow({
      mode: 'open'
    });
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */


  adoptStyles() {
    const styles = this.constructor._styles;

    if (styles.length === 0) {
      return;
    } // There are three separate cases here based on Shadow DOM support.
    // (1) shadowRoot polyfilled: use ShadyCSS
    // (2) shadowRoot.adoptedStyleSheets available: use it
    // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
    // rendering


    if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s => s.cssText), this.localName);
    } else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
      this.renderRoot.adoptedStyleSheets = styles.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
      // This must be done after rendering so the actual style insertion is done
      // in `update`.
      this._needsShimAdoptedStyleSheets = true;
    }
  }

  connectedCallback() {
    super.connectedCallback(); // Note, first update/render handles styleElement so we only call this if
    // connected after first update.

    if (this.hasUpdated && window.ShadyCSS !== undefined) {
      window.ShadyCSS.styleElement(this);
    }
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */


  update(changedProperties) {
    // Setting properties in `render` should not trigger an update. Since
    // updates are allowed after super.update, it's important to call `render`
    // before that.
    const templateResult = this.render();
    super.update(changedProperties); // If render is not implemented by the component, don't call lit-html render

    if (templateResult !== renderNotImplemented) {
      this.constructor.render(templateResult, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      });
    } // When native Shadow DOM is used but adoptedStyles are not supported,
    // insert styling after rendering to ensure adoptedStyles have highest
    // priority.


    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;

      this.constructor._styles.forEach(s => {
        const style = document.createElement('style');
        style.textContent = s.cssText;
        this.renderRoot.appendChild(style);
      });
    }
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */


  render() {
    return renderNotImplemented;
  }

}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */

LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_0__["render"];

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
      return committer.parts;
    }

    if (prefix === '@') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
    }

    const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
    return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
  }

}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};
const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  const {
    element: {
      content
    },
    parts
  } = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let part = parts[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    const node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(n => n.parentNode.removeChild(n));
}

const countNodes = node => {
  let count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts.length; i++) {
    const part = parts[i];

    if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node, refNode = null) {
  const {
    element: {
      content
    },
    parts
  } = template; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let insertCount = 0;
  let walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    const walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

const nothing = {};

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};
const isIterable = value => {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts = this.parts; // If we're assigning an attribute via syntax like:
    //    attr="${foo}"  or  attr=${foo}
    // but not
    //    attr="${foo} ${bar}" or attr="${foo} baz"
    // then we don't want to coerce the attribute value into one long
    // string. Instead we want to just return the value itself directly,
    // so that sanitizeDOMValue can get the actual value rather than
    // String(value)
    // The exception is if v is an array, in which case we do want to smash
    // it together into a string without calling String() on the array.
    //
    // This also allows trusted values (when using TrustedTypes) being
    // assigned to DOM sinks without being stringified in the process.

    if (l === 1 && strings[0] === '' && strings[1] === '') {
      const v = parts[0].value;

      if (typeof v === 'symbol') {
        return String(v);
      }

      if (typeof v === 'string' || !isIterable(v)) {
        return v;
      }
    }

    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === 'string' ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
/**
 * A Part that controls all or part of an attribute value.
 */

class AttributePart {
  constructor(committer) {
    this.value = undefined;
    this.committer = committer;
  }

  setValue(value) {
    if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
      const directive = this.value;
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    this.committer.commit();
  }

}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

class NodePart {
  constructor(options) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }

    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    const value = this.__pendingValue;

    if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
      this.clear();
    } else {
      // Fallback, will render the string representation
      this.__commitText(value);
    }
  }

  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  __commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this.__insert(value);

    this.value = value;
  }

  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
    // it can't be implicitly converted - i.e. it's a symbol.

    const valueAsString = typeof value === 'string' ? value : String(value);

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }

    this.value = value;
  }

  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this.__commitNode(fragment);

      this.value = instance;
    }
  }

  __commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const value = !!this.__pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }

      this.value = value;
    }

    this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.element[this.name] = this._getValue();
    }
  }

}
class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

let eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this.__pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }

    this.value = newListener;
    this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, shadyTemplateFactory, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadyTemplateFactory", function() { return shadyTemplateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_6__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */






 // Get a key to lookup in `templateCaches`.

const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;

let compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn(`Incompatible ShadyCSS version detected. ` + `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` + `@webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


const shadyTemplateFactory = scopeName => result => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);
  let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  }

  const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_5__["marker"]);
  template = templateCache.keyString.get(key);

  if (template === undefined) {
    const element = result.getTemplateElement();

    if (compatibleShadyCSSVersion) {
      window.ShadyCSS.prepareTemplateDom(element, scopeName);
    }

    template = new _template_js__WEBPACK_IMPORTED_MODULE_5__["Template"](result, element);
    templateCache.keyString.set(key, template);
  }

  templateCache.stringsArray.set(result.strings, template);
  return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

const removeStylesFromLitTemplates = scopeName => {
  TEMPLATE_TYPES.forEach(type => {
    const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(template => {
        const {
          element: {
            content
          }
        } = template; // IE 11 doesn't support the iterable param Set constructor

        const styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(s => {
          styles.add(s);
        });
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
      });
    }
  });
};

const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  const templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  const styles = renderedDOM.querySelectorAll('style');
  const {
    length
  } = styles; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  const condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (let i = 0; i < length; i++) {
    const style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  const content = templateElement.content;

  if (!!template) {
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  const style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    const removes = new Set();
    removes.add(condensedStyle);
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


const render = (result, container, options) => {
  if (!options || typeof options !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  const scopeName = options.scopeName;
  const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
  const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    const template = part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"] ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this.__parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // There are a number of steps in the lifecycle of a template instance's
    // DOM fragment:
    //  1. Clone - create the instance fragment
    //  2. Adopt - adopt into the main document
    //  3. Process - find part markers and create parts
    //  4. Upgrade - upgrade custom elements
    //  5. Update - set node, attribute, property, etc., values
    //  6. Connect - connect to the document. Optional and outside of this
    //     method.
    //
    // We have a few constraints on the ordering of these steps:
    //  * We need to upgrade before updating, so that property values will pass
    //    through any property setters.
    //  * We would like to process before upgrading so that we're sure that the
    //    cloned fragment is inert and not disturbed by self-modifying DOM.
    //  * We want custom elements to upgrade even in disconnected fragments.
    //
    // Given these constraints, with full custom elements support we would
    // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
    //
    // But Safari does not implement CustomElementRegistry#upgrade, so we
    // can not implement that order and still have upgrade-before-update and
    // upgrade disconnected fragments. So we instead sacrifice the
    // process-before-upgrade constraint, since in Custom Elements v1 elements
    // must not modify their light DOM in the constructor. We still have issues
    // when co-existing with CEv0 elements like Polymer 1, and with polyfills
    // that don't strictly adhere to the no-modification rule because shadow
    // DOM, which may be created in the constructor, is emulated by being placed
    // in the light DOM.
    //
    // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
    // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
    // in one step.
    //
    // The Custom Elements v1 polyfill supports upgrade(), so the order when
    // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
    // Connect.
    const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(fragment, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode(); // Loop through all the nodes and parts of a template

    while (partIndex < parts.length) {
      part = parts[partIndex];

      if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
        this.__parts.push(undefined);

        partIndex++;
        continue;
      } // Progress the tree walker until we find our next part's node.
      // Note that multiple parts may share the same node (attribute parts
      // on a single element), so this loop may not run at all.


      while (nodeIndex < part.index) {
        nodeIndex++;

        if (node.nodeName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }

        if ((node = walker.nextNode()) === null) {
          // We've exhausted the content inside a nested template element.
          // Because we still have parts (the outer for-loop), we know:
          // - There is a template in the stack
          // - The walker will find a nextNode outside the template
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      } // We've arrived at our part's node.


      if (part.type === 'node') {
        const part = this.processor.handleTextExpression(this.options);
        part.insertAfterNode(node.previousSibling);

        this.__parts.push(part);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }

      partIndex++;
    }

    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

const policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: s => s
});
const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const l = this.strings.length - 1;
    let html = '';
    let isCommentBinding = false;

    for (let i = 0; i < l; i++) {
      const s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
      // into the template source before it's parsed by the browser's HTML
      // parser. The marker type is based on whether the expression is in an
      // attribute, text, or comment position.
      //   * For node-position bindings we insert a comment with the marker
      //     sentinel as its text content, like <!--{{lit-guid}}-->.
      //   * For attribute bindings we insert just the marker sentinel for the
      //     first binding, so that we support unquoted attribute bindings.
      //     Subsequent bindings can use a comment marker because multi-binding
      //     attributes must be quoted.
      //   * For comment bindings we insert just the marker sentinel so we don't
      //     close the comment.
      //
      // The following code scans the template source, but is *not* an HTML
      // parser. We don't need to track the tree structure of the HTML, only
      // whether a binding is inside a comment, and if not, if it appears to be
      // the first binding in an attribute.

      const commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
      // comment close. Because <-- can appear in an attribute value there can
      // be false positives.

      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
      // expression. This can match "name=value" like structures in text,
      // comments, and attribute values, so there can be false-positives.

      const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

      if (attributeMatch === null) {
        // We're only in this branch if we don't have a attribute-like
        // preceding sequence. For comments, this guards against unusual
        // attribute values like <div foo="<!--${'bar'}">. Cases like
        // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
        // below.
        html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
      } else {
        // For attributes we use just a marker sentinel, and also append a
        // $lit$ suffix to the name to opt-out of attribute-specific parsing
        // that IE and Edge do for style and certain SVG attributes.
        html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
      }
    }

    html += this.strings[l];
    return html;
  }

  getTemplateElement() {
    const template = document.createElement('template');
    let value = this.getHTML();

    if (policy !== undefined) {
      // this is secure because `this.strings` is a TemplateStringsArray.
      // TODO: validate this when
      // https://github.com/tc39/proposal-array-is-template-object is
      // implemented.
      value = policy.createHTML(value);
    }

    template.innerHTML = value;
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
    return template;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    const walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {
      strings,
      values: {
        length
      }
    } = result;

    while (partIndex < length) {
      const node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {
              length
            } = attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            let count = 0;

            for (let i = 0; i < length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              const stringForPart = strings[partIndex]; // Find the attribute name

              const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index,
                name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          const data = node.data;

          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings = data.split(markerRegex);
            const lastIndex = strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s = strings[i];

              if (s === '') {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            let i = -1;

            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}

const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);

/***/ }),

/***/ "./src/base-element.ts":
/*!*****************************!*\
  !*** ./src/base-element.ts ***!
  \*****************************/
/*! exports provided: html, css, customElement, property, BaseLit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLit", function() { return BaseLit; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]; });



class BaseLit extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor() {
    super();
    this.$ = {};
  }

  _(name) {
    return this.shadowRoot.getElementById(name);
  }

  $$(name) {
    return this.shadowRoot.querySelector(name);
  }

  $$$(name) {
    return this.shadowRoot.querySelectorAll(name);
  }

  mapIDs() {
    let nodeList = this.shadowRoot.querySelectorAll('[id]');

    for (let i = 0; i < nodeList.length; i++) {
      this.$[nodeList[i].id] = nodeList[i];
    }
  }

  fire(name, value = null, bubbles = false) {
    if (!bubbles) this.dispatchEvent(new CustomEvent(name, {
      detail: value
    }));else this.dispatchEvent(new CustomEvent(name, {
      detail: value,
      bubbles: true,
      composed: true
    }));
  }

  isObject(val) {
    if (val === null) {
      return false;
    }

    return typeof val === 'function' || typeof val === 'object';
  }

  isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }

  isObjectEmpty(val) {
    return this.isObject(val) && Object.keys(val).length === 0;
  }

  scrollTo() {//this.scrollToY();
  }
  /**
   *
   * @param scrollTargetY pixels to scroll. Ej:
      const ticketsBlockPositionY = this.$.contact.getBoundingClientRect().top + Element.scrollTop;
   * @param time Time to scroll
   * @param easing
   * @param target scrollTarget Element
   */
  //'easeOutSine' | 'easeOutSine' | 'easeInOutQuint'


  scrollToY(scrollTargetY = 0, time = 1000, easing = 'easeOutSine', target) {
    let currentTime = 0;
    const animationTime = time / 1000; // easing equations from https://github.com/danro/easing-js/blob/master/easing.js

    const easingEquations = {
      'easeOutSine': pos => Math.sin(pos * (Math.PI / 2)),
      'easeInOutSine': pos => -0.5 * (Math.cos(Math.PI * pos) - 1),
      'easeInOutQuint': pos => {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }

        return 0.5 * (Math.pow(pos - 2, 5) + 2);
      },
      'bouncePast': pos => {
        if (pos < 1 / 2.75) {
          return 7.5625 * pos * pos;
        } else if (pos < 2 / 2.75) {
          return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
        } else if (pos < 2.5 / 2.75) {
          return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
        } else {
          return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
        }
      }
    }; // add animation loop

    function tick() {
      currentTime += 1 / 60;
      const p = currentTime / animationTime;
      const t = easingEquations[easing](p);
      const scrollTop = target.pageYOffset || target.scrollTop || 0;
      const newPosition = scrollTop + (scrollTargetY - scrollTop) * t;

      if (p < 1) {
        window.requestAnimationFrame(tick);
        target.scrollTop = newPosition;
      }
    }

    tick();
  }
  /**
   *
   * @param {*} element : The HTMLElement to add,remove or toggle the classes to
   * @param {*} classesList : Either a String or an Array
   * @param {*} option : The option to select the operation 0 to toggle, 1 to add, 2 to remove
   */


  toggleAddRemoveClasses(element, classesList, option = 0) {
    let selector = element;
    let classes = classesList || '';

    if ((typeof classes == 'string' || Array.isArray(classes)) && classes.length) {
      let classList = selector.classList;

      if (!Array.isArray(classes)) {
        classes = classes.replace(/(,\s*|\s+)/g, ' ').split(' ');
      }

      for (let className of classes) {
        switch (option) {
          case 0:
            classList.toggle(className);
            break;

          case 1:
            classList.add(className);
            break;

          case 2:
            classList.remove(className);
            break;
        }
      }

      return true;
    }

    return false;
  }

}

/***/ }),

/***/ "./src/custom-components/layout/app-drawer.ts":
/*!****************************************************!*\
  !*** ./src/custom-components/layout/app-drawer.ts ***!
  \****************************************************/
/*! exports provided: AppDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDrawer", function() { return AppDrawer; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppDrawer = class AppDrawer extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super(...arguments);
    /**
      * The opened state of the drawer.
      */

    this.opened = false;
    this.swipeOpen = false;
    /**
     * The drawer does not have a scrim and cannot be swiped close.
     */

    this.persistent = false;
    /**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */

    this.position = 'left';
    /**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */

    this.noFocusTrap = false;
    /**
     * Disables swiping on the drawer.
     */

    this.disableSwipe = false;
    this.props = {
      _translateOffset: 0,
      _trackDetails: undefined,
      _drawerState: 0,
      _boundEscKeydownHandler: undefined,
      _firstTabStop: undefined,
      _lastTabStop: undefined
    };
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <div id="scrim" class="${this.opened ? 'visible' : ''}" @click="${this.close}"></div>
        <div id="content" ?opened="${this.opened}" ?persistent="${this.persistent}" ?swipe-open="${this.swipeOpen}">
        <slot></slot>
        </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.props['_boundEscKeydownHandler'] = this._escKeydownHandler.bind(this);
    this.props['_tabKeydownHandler'] = this._tabKeydownHandler.bind(this);
    this.addEventListener('keydown', this.props._tabKeydownHandler);
    this.addEventListener('keydown', this.props._boundExcKeydownHandler);
    this.fire('app-reset-layout');
  }

  _tabKeydownHandler(event) {
    if (this.noFocusTrap) {
      return;
    }

    var TAB_KEYCODE = 9;

    if (this.props._drawerState === this.props['_DRAWER_STATE.OPENED'] && event.keyCode === TAB_KEYCODE) {
      if (event.shiftKey) {
        if (this.props._firstTabStop && event.target === this.props._firstTabStop) {
          event.preventDefault();

          this.props._lastTabStop.focus();
        }
      } else {
        if (this.props._lastTabStop && event.target === this.props._lastTabStop) {
          event.preventDefault();

          this.props._firstTabStop.focus();
        }
      }
    }
  }

  _escKeydownHandler(event) {
    var ESC_KEYCODE = 27;

    if (event.keyCode === ESC_KEYCODE) {
      // Prevent any side effects if app-drawer closes.
      event.preventDefault();
      this.close();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.props._boundEscKeydownHandler);
    this.removeEventListener('keydown', this.props._tabKeydownHandler);
  }
  /**
   * Opens the drawer.
   */


  open() {
    this.opened = true;
    this.fire('drawer-opened-changed', true);
  }
  /**
   * Closes the drawer.
   */


  close() {
    this.opened = false;
    this.fire('drawer-opened-changed', false);
  }

  toggleClassMenu() {
    if (!this.$.content.classList.contains("menu--visible")) {
      this.$.content.classList.add("menu--visible");
    } else {
      this.$.content.classList.remove('menu--visible');
    }
  }

};
AppDrawer.styles = [_base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
     :host {
        position: fixed;
        z-index: 1;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: opacity 250ms linear, visibility 0s linear 250ms;
      }
      :host([opened]) {
        visibility: visible;
        opacity: 1;
        transition: opacity 250ms linear,visibility 250s linear;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }
      :host([persistent][position=left]) {
        right: auto;
      }
      :host([persistent][position=right]) {
        left: auto;
      }
      #content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);
        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        transition: transform 300ms ease-out;
        background-color: #FFF;
      }
      #content[persistent] {
        width: 100%;
      }
      #content[position=right] {
        right: 0;
        left: auto;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      #content[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;
        visibility: visible;
        width: 20px;
        content: '';
      }

      #content[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #content[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);
        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }
      :host([no-transition]) #content {
        transition-property: none;
      }
    `];

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], AppDrawer.prototype, "opened", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], AppDrawer.prototype, "swipeOpen", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], AppDrawer.prototype, "persistent", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String,
  reflect: true
})], AppDrawer.prototype, "position", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], AppDrawer.prototype, "noFocusTrap", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], AppDrawer.prototype, "disableSwipe", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Object
})], AppDrawer.prototype, "props", void 0);

AppDrawer = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('app-drawer')], AppDrawer);


/***/ }),

/***/ "./src/custom-components/layout/app-header.ts":
/*!****************************************************!*\
  !*** ./src/custom-components/layout/app-header.ts ***!
  \****************************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppHeader = class AppHeader extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super(...arguments);
    this.last_known_scroll_position = 0;
    this.ticking = false;
    this.title = "";
    this.top = true;
    this.show = true;
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="prefix">
      <slot name="prefix">
      </slot>
    </div>
    <div class="title">
      <slot name="title">
      <h6 class="headline-6">${this.title}</h6>
      </slot>
    </div>
    <div class="suffix">
      <slot name="suffix">
      </slot>
    </div>
    `;
  }

  setScrollElement(scroll) {
    if (!scroll) return;
    this.scrollElement = scroll;
    /* set listener */

    this.scrollElement.addEventListener('scroll', this.scrollAction.bind(this));
  }

  scrollAction() {
    let difference = this.scrollElement.scrollTop - this.last_known_scroll_position;
    this.last_known_scroll_position = this.scrollElement.scrollTop;
    let self = this;

    if (!this.ticking) {
      window.requestAnimationFrame(function () {
        self.showHeader(difference, self.last_known_scroll_position);
        self.ticking = false;
      });
    }

    this.ticking = true;
  }

  showHeader(direction, current) {
    if (current <= 0 && current >= 0) {
      this.top = true;
      this.style.opacity = '';
    } else {
      this.top = false;

      if (current >= 64 && direction > 0) {
        this.style.opacity = '0';
        this.show = false;
      } else {
        this.style.opacity = current > 64 ? '1' : current / 64 + '';
        this.show = true;
      }
    }
  }

};
AppHeader.styles = [_styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__["TypographyStyle"], _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`

      :host([top]){
        background: var(--app-header-bg-color, blue);;
        transform: translateY(-100%);
      }

      :host([show]){
        transform: translateY(0);
        opacity: 1;
      }

      :host {
        background: var(--app-header-bg-color, blue);
        width: 100%;
        display: flex;
        height: var(--app-header-height, 64px);
        transition: opacity 300ms linear, transform 100ms ease;
        opacity: 1;
        transform: translateY(-100%);
      }

      .prefix, .suffix{
        flex: 1 0 7.5%;
        height: var(--app-header-height, 64px);
        align-items: center;
        display: inline-flex;
        margin-left: 2.5%;
        box-sizing: border-box;
      }

      .suffix {
        flex: 1 0 10%;
      }

      .title {
        flex: 1 0 80%;
        text-align: center;
        color: var(--primary-text-color, black)
      }
    `];

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])()], AppHeader.prototype, "title", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], AppHeader.prototype, "top", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], AppHeader.prototype, "show", void 0);

AppHeader = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('app-header')], AppHeader);


/***/ }),

/***/ "./src/custom-components/modal/custom-modal.ts":
/*!*****************************************************!*\
  !*** ./src/custom-components/modal/custom-modal.ts ***!
  \*****************************************************/
/*! exports provided: CustomModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModal", function() { return CustomModal; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CustomModal = class CustomModal extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super(...arguments);
    this.acceptMsn = "Ok";
    this.rejectMsn = "Cancel";
    this.body = "";
    this.title = "";
    this.show = false;
    this.confirm = false;
  }

  static get styles() {
    return [_styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__["TypographyStyle"], _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
            * { box-sizing: border-box; }

            :host(.large) .md-content {
                display: grid;
                grid-template-rows: minmax(0,1fr) minmax(0,3fr) minmax(0,0.75fr);
                height: 70vh;
                height: calc(var(--vh, 1vh) * 70);
            }

            :host(.medium) .md-content {
                display: grid;
                grid-template-rows: minmax(0,1.25fr) minmax(0,3fr) minmax(0,0.75fr);
                height: 60vh;
                height: calc(var(--vh, 1vh) * 60);
            }

            .md-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                width: 50vw;
                max-width: 50vw;
                min-width: 40vw;
                height: auto;
                z-index: 170;
                visibility: hidden;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-transform: translateX(-50%) translateY(-50%);
                -moz-transform: translateX(-50%) translateY(-50%);
                -ms-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
                /*box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.14), 0 1px 5px 0 rgba(255, 255, 255, 0.12), 0 3px 1px -2px rgba(255, 255, 255, 0.2);*/
                background: transparent;
                border: none;
                border-radius: 5px;
            }

            .md-show {
                visibility: visible;
            }

            .md-overlay {
                position: fixed;
                width: 100vw;
                height: 100vh;
                height: calc(var(--vh, 1vh) * 100);
                visibility: hidden;
                top: 0;
                left: 0;
                z-index: 160;
                opacity: 0;
                background: rgba(0,0,0,0.6);
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            .md-show ~ .md-overlay {
                opacity: 1;
                visibility: visible;
            }

            /* Content styles */
            .md-content {
                display: grid;
                grid-template-rows: minmax(0,1.25fr) minmax(0,3fr) minmax(0,1fr);
                color: var(--dark-primary-color);
                background: white;
                position: relative;
                margin: 0 auto;
                height: 55vh;
                height: calc(var(--vh, 1vh) * 55);
                width: 50vw;
                max-width: 50vw;
                border-radius: 5px;
            }

            .md-content h3 {
                margin: 0;
                color: var(--dark-primary-color);
            }

            .md-content > div {
                padding: 4px;
                margin: 0;
                font-weight: 300;
                background: #fff;
            }

            .md-effect-1 .md-content {
                -webkit-transform: scale(0.7);
                -moz-transform: scale(0.7);
                -ms-transform: scale(0.7);
                transform: scale(0.7);
                opacity: 0;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                transition: all 0.3s;
            }

            .md-show.md-effect-1 .md-content {
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
                opacity: 1;
            }

            .body {
                position: relative;
                border: 1px solid var(--divider-color);
                border-width: 1px 0;
                max-width: 50vw;
            }

            .md-content > div.title {
                max-width: 50vw;
                padding: 4px;
                background: #FFF;
                border-radius: 5px 5px 0 0;
            }

            .md-content > div.footer{
                max-width: 50vw;
                text-align: right;
                border-radius: 0 0 5px 5px;
                white-space: nowrap;
                display: flex;
                padding: 1px;
                background-color: transparent;
                justify-content: flex-end;
            }

            ripple-container {
                width: 25%;
                display: inline-flex;
                height: 100%;
                border-radius: 0 0 5px 0;
                --ripple-background-image: none;
                --ripple-background-color: #FFF;
                --ripple-color: var(--dark-primary-color);
            }

            ripple-container:hover {
                box-shadow: none;
            }

            .headline-3 {
                text-align: center;
                text-transform: uppercase;
            }

            button {
                width: 100%;
                background: transparent;
                border: 0;
                outline: none;
                font-weight: bolder;
                border-radius: 0 0 5px 0;
                cursor: pointer;
            }

            
            ripple-container:first-child{
                border-radius: 0 0 0 5px;
            }

            ripple-container.full, ripple-container.full button {
                width: 30%;
                border: none;
                border-radius: 0 0 5px 0;
                cursor: pointer;
                right: 0;
            }

            pre {
                margin: 0;
                padding: 0 16px;
                white-space: pre-wrap;
                font-size: 40px;
                color: var(--dark-primary-color);
            }

            @media (max-width: 440px){
                .md-content{
                    max-width: 350px;
                }
            }
        `];
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="md-modal md-effect-1" id="modal">
        <slot name="full">
            <div class="md-content" >
                <div class="title">
                    <h3 class="headline-3">${this.title}</h3>
                </div>
                <div class="body">
                    <slot name="body">
                        <pre class="body-1">${this.body}</pre>
                    </slot>
                </div>
                <div class="footer">
                    ${!this.confirm ? _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <ripple-container>
                        <button class="button" @click="${this._reject}">
                            ${this.rejectMsn}
                        </button>
                    </ripple-container>` : _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div></div>`}
                    <ripple-container class="${this.confirm ? 'full' : ''}">
                        <button class="button" @click="${this._accept}">
                            ${this.acceptMsn}
                        </button>
                    </ripple-container>
                </div>
            </div>
        </slot>
    </div>
    <div class="md-overlay"></div>`;
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === "show") {
      if (oldval === null && newval === "") {
        this._openModal();
      } else if (oldval === "" && newval === null) {
        this._closeModal();
      }
    }

    super.attributeChangedCallback(name, oldval, newval);
  }

  showDialog(title) {
    this.title = title;
    this.requestUpdate();

    this._openModal();

    return new Promise((resolve, reject) => {
      this.onResolve = resolve;
      this.onReject = reject;
    });
  }

  createDialog(title, message) {
    this.title = title;
    this.body = message;
    this.requestUpdate();

    this._openModal();

    return new Promise((resolve, reject) => {
      this.onResolve = resolve;
      this.onReject = reject;
    });
  }

  async _openModal() {
    await this.updateComplete;

    const modal = this._('modal');

    modal.classList.add('md-show');
  }

  _closeModal() {
    const modal = this._('modal');

    modal.classList.remove('md-show');
  }

  _reject() {
    this.onResolve(false);

    this._closeModal();
  }

  _accept() {
    this.onResolve(true);

    this._closeModal();
  }

};

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], CustomModal.prototype, "acceptMsn", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], CustomModal.prototype, "rejectMsn", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], CustomModal.prototype, "body", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], CustomModal.prototype, "title", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], CustomModal.prototype, "show", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], CustomModal.prototype, "confirm", void 0);

CustomModal = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('custom-modal')], CustomModal);


/***/ }),

/***/ "./src/custom-components/preloaders/custom-loader.ts":
/*!***********************************************************!*\
  !*** ./src/custom-components/preloaders/custom-loader.ts ***!
  \***********************************************************/
/*! exports provided: CustomLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLoader", function() { return CustomLoader; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CustomLoader = class CustomLoader extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  static get styles() {
    return [_styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__["TypographyStyle"], _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`*, *:before, *:after {
                    box-sizing: border-box;
                    outline: none;
                }
                
                :host {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 75px;
                    height: 100px;
                }

                .loader {
                    position: relative;
                    display: grid;
                    grid-template-columns: 33% 33% 33%;
                    grid-gap: 1px;
                    width: 100%;
                    height: 75%;
                }

                .loader > div {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: var(--loader-bg-color,var(--accent-color));
                    transform: scale(0);
                    transform-origin: center center;
                    animation: loader 2s infinite linear;
                }

                .loader > div:nth-of-type(1), .loader > div:nth-of-type(5), .loader > div:nth-of-type(9) {
                    animation-delay: 0.4s;
                }

                .loader > div:nth-of-type(4), .loader > div:nth-of-type(8) {
                    animation-delay: 0.2s;
                }

                .loader > div:nth-of-type(2), .loader > div:nth-of-type(6) {
                    animation-delay: 0.6s;
                }

                .loader > div:nth-of-type(3) {
                    animation-delay: 0.8s;
                }

                @keyframes loader {
                    0% {
                        transform: scale(0);
                    }
                    40% {
                        transform: scale(1);
                    }
                    80% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(0);
                    }
                }`];
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <p class="body-1">Cargando...</p>`;
  }

};
CustomLoader = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('custom-loader')], CustomLoader);


/***/ }),

/***/ "./src/custom-components/radio-group/custom-radio-group.ts":
/*!*****************************************************************!*\
  !*** ./src/custom-components/radio-group/custom-radio-group.ts ***!
  \*****************************************************************/
/*! exports provided: CustomRadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRadioGroup", function() { return CustomRadioGroup; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CustomRadioGroup = class CustomRadioGroup extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super();
    this.selected = 0;
    this.value = '';
    this.options = [];
    this.inline = false;
    this.required = true;
    this.invalid = false;
    this.tabindex = 0;
    this._shiftTabPressed = false;
    this.addEventListener("keydown", e => {
      if (e.shiftKey && e.key === 'Tab') this._onShiftTabDown();
    });
    this.addEventListener("focus", () => {
      this.$$("div label").focus();
      this.tabindex = -1;
      setTimeout(() => {
        this.tabindex = 0;
      }, 100);
    });
  }

  static get styles() {
    return [_styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__["TypographyStyle"], _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
            * { box-sizing: border-box; }

            :host(:focus), *:focus{
                outline: none;
            }

            :host(.borderin) {
                border: 2px solid var(--secondary-text-color);
            }

            :host([inline]) > .container{
                flex-wrap: nowrap;
                flex-direction: row;
            }

            :host {
                padding: 0.5rem;
                border-radius: 5px;
                display: block;
            }

            .container{
                display: flex;
                flex-direction: column;
            }

            .md-radio {
                margin: 4px -3px;
                height: 30px;
            }

            .md-radio input[type="radio"] {
                display: none;
            }
            .md-radio input[type="radio"]:checked + label:before {
                border-color: var(--accent-color);
                animation: ripple 0.25s linear;
            }

            .md-radio input[type="radio"]:checked + label{
                color: var(--accent-color);
            }

            .md-radio input[type="radio"]:checked:disabled + label:before, .md-radio input[type="radio"]:checked:disabled + label {
                border-color: var(--accent-color);
            }

            .md-radio input[type="radio"]:checked:disabled + label:after {
                background-color: var(--accent-color);
            }

            .md-radio input[type="radio"]:checked + label:after {
                transform: scale(1);
                background-color: var(--accent-color);
            }

            .md-radio label {
                color: var(--secondary-text-color);
                display: inline-block;
                height: 30px;
                position: relative;
                padding: 0 36px;
                margin-bottom: 0;
                cursor: pointer;
                vertical-align: bottom;
            }
            .md-radio label:before, .md-radio label:after {
                position: absolute;
                content: '';
                border-radius: 50%;
                transition: all 0.3s ease;
                transition-property: transform, border-color;
            }
            .md-radio label:before {
                left: 8px;
                top: 4px;
                width: 14px;
                height: 14px;
                border: 2px solid var(--secondary-text-color);
            }
            .md-radio label:after {
                top: 8px;
                left: 12px;
                width: 10px;
                height: 10px;
                transform: scale(0);
                background: var(--secondary-text-color);
            }

            .title{
                padding : 0 6px;
                font-size : 0.875rem;
                color : var(--accent-color);
                transform: translateX(-0.625em);
                display: block;
            }

            :host([invalid]) {
                border-radius: 5px;
                border: 2px solid var(--error-color);
            }

            :host([invalid]) .title, :host([invalid]) label {
                color : var(--error-color);
            }
       
            `];
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <label class="title">${this.title}</label>
            <div class="container">
            ${this.options.map((key, index) => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="md-radio">
                    <input  type="radio" 
                            value="${key}" 
                            name="option" 
                            id="${key}" 
                            .checked="${this.selected == index}">
                    <label  @keydown="${this._onEnterPress}" 
                            for="${key}" 
                            @click="${this._check}" 
                            value="${index}" 
                            tabindex="0"
                            class="body-2">${key}</label>
                </div>`)}
            </div>`;
  }

  _check(event) {
    event.preventDefault();
    let val = Number(event.currentTarget.getAttribute("value"));
    this.value = val == this.selected ? "" : event.currentTarget.innerText;
    this.selected = val == this.selected ? -1 : val;
    this.fire('value-changed', this.value);
  }

  uncheck() {
    this.selected = -1;
  }

  _onEnterPress(e) {
    if (e.key == 'Enter') this._check(e);
  }

  update(changedProperties) {
    if (changedProperties.has("value") && !changedProperties.get("value")) {
      this.invalid = false;
    }

    super.update(changedProperties);
  }

  validate() {
    if (this.required && !this.value) {
      this.invalid = true;
      return false;
    }

    return true;
  }

  _onShiftTabDown() {
    var oldTabIndex = this.tabindex;
    this._shiftTabPressed = true;
    this.tabindex = -1;
    setTimeout(() => {
      this.tabindex = oldTabIndex;
      this._shiftTabPressed = false;
    }, 1);
  }

};

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Number
})], CustomRadioGroup.prototype, "selected", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], CustomRadioGroup.prototype, "value", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Array
})], CustomRadioGroup.prototype, "options", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], CustomRadioGroup.prototype, "inline", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], CustomRadioGroup.prototype, "required", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean,
  reflect: true
})], CustomRadioGroup.prototype, "invalid", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Number,
  reflect: true
})], CustomRadioGroup.prototype, "tabindex", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], CustomRadioGroup.prototype, "_shiftTabPressed", void 0);

CustomRadioGroup = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('custom-radio-group')], CustomRadioGroup);


/***/ }),

/***/ "./src/data/helper-functions.ts":
/*!**************************************!*\
  !*** ./src/data/helper-functions.ts ***!
  \**************************************/
/*! exports provided: fireEvent, changeLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireEvent", function() { return fireEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLocation", function() { return changeLocation; });
const fireEvent = (event, detail) => {
  window.dispatchEvent(new CustomEvent(event, {
    detail: detail
  }));
};
const changeLocation = (state, title, path) => {
  window.history.pushState(state, title, path);
  const popStateEvent = new PopStateEvent('popstate', {
    state: state
  });
  dispatchEvent(popStateEvent);
};

/***/ }),

/***/ "./src/main-app.ts":
/*!*************************!*\
  !*** ./src/main-app.ts ***!
  \*************************/
/*! exports provided: MainApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainApp", function() { return MainApp; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./src/base-element.ts");
/* harmony import */ var _custom_components_layout_app_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-components/layout/app-drawer */ "./src/custom-components/layout/app-drawer.ts");
/* harmony import */ var _custom_components_layout_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-components/layout/app-header */ "./src/custom-components/layout/app-header.ts");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/helpers */ "./src/utilities/helpers.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_modal_custom_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-components/modal/custom-modal */ "./src/custom-components/modal/custom-modal.ts");
/* harmony import */ var _custom_components_preloaders_custom_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-components/preloaders/custom-loader */ "./src/custom-components/preloaders/custom-loader.ts");
/* harmony import */ var _snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snack-bar */ "./src/snack-bar.ts");
/* harmony import */ var _data_helper_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/helper-functions */ "./src/data/helper-functions.ts");
/* harmony import */ var _custom_components_radio_group_custom_radio_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-components/radio-group/custom-radio-group */ "./src/custom-components/radio-group/custom-radio-group.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/*
  background: linear-gradient(to right, #4776e6, #8e54e9);
*/

let MainApp = class MainApp extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super();
    this.overflow = true;
    this.showsnackbar = false;
    this.snackbarMessage = '';
    this.user = {};
    this.appTitle = "Proyecto 1 Sopes 1";
    this.loading = true;
    this.page = "home";
    this.lastPage = "";
    this._drawerOpened = false;
    this._authenticated = false;
    this._install = true;
    this.show = true;
    this.url = '';
    this._modalMsn = '';
    window.history.replaceState(null, 'Home', '/');
    this.url =  true ? `http://localhost:4000/` : undefined;
    window.url = this.url; // we create a link to api socket

    /*this.apiSocket = new Socket((isConnected: boolean)=>alert(isConnected), (message:string)=>alert(message));
    this.apiSocket.connect();
    window.apiSocket = this.apiSocket;
    */
    //we create a link to queSocket to use it in orders
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
     <style>
      #main-content {
        overflow: ${this.overflow ? 'auto' : 'hidden'};
      }
     </style>
     <app-header ?show=${this.show} title="Proyecto 1 Sopes 1"></app-header>

     <main id="main-content" class="body-1">
      <login-view 
        .url=${this.url}
        class="page" 
        ?active=${this.page == "login"}
        id="login"></login-view>
      <home-view 
        .url=${this.url}
        class="page" 
        ?active=${this.page == "home"}
        .user = ${this.user}
        id="home"></home-view>
      <custom-loader class="vertical-align" ?show=${this.loading}></custom-loader>
      <snack-bar ?active=${this.showsnackbar} class="subtitle">${this.snackbarMessage}</snack-bar>
     </main>
     <custom-modal id="modal-message" acceptMsn='OK' ?confirm=${true} class="medium">
       <div slot="body" class="body-1">
        <pre>
          ${this._modalMsn}
        </pre>
       </div>
     </custom-modal>
    `;
  }

  async firstUpdated() {
    window.showModal = this._createNewModal.bind(this);
    Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_3__["installRouter"])(location => this._locationChanged(location));
    window.addEventListener('change-overflow', e => {
      this.overflow = e.detail;
    });
    window.addEventListener('snack-bar-message', e => {
      this.showsnackbar = true;
      this.snackbarMessage = e.detail;
      setTimeout(() => this.showsnackbar = false, 2000);
    });
    window.addEventListener('modal-message', e => {
      this._modalMsn = e.detail.message;

      this._('modal-message').showDialog(e.detail.title);
    });
    this.$$('app-header').setScrollElement(this._('main-content'));
    window.scrollTarget = this._('main-content');
  }

  _locationChanged(location) {
    const path = window.decodeURIComponent(location.pathname);
    const page = path === '/' ? 'home' : path.split('/').filter(el => el != "")[0];

    this._loadPage(page);

    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  _loadPage(page) {
    this.show = true;
    this.loading = true;
    Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pages/home-view */ "./src/pages/home-view.ts")).then(() => this.loading = false);

    this._animatePage(this.lastPage, this.page);

    this.lastPage = page;
  }

  _animatePage(lastPage, page) {
    if (lastPage != '') {
      this._(lastPage).classList.add('fade-out');

      setTimeout(() => {
        this._(lastPage).style.display = 'none';

        this._(lastPage).classList.remove('fade-out');
      }, 500);
      setTimeout(() => {
        this._(page).style.display = 'block';

        this._(page).classList.add('fade-in');
      }, 505);
      setTimeout(() => {
        this._(page).classList.remove('fade-in');
      }, 1000);
    } else {
      setTimeout(() => {
        this._(page).style.display = 'block';

        this._(page).classList.add('fade-in');
      }, 505);
      setTimeout(() => {
        this._(page).classList.remove('fade-in');
      }, 1000);
    }
  }

  _checkAuth(page) {
    if (page !== 'home' && page !== 'login' && !this._authenticated) {
      setTimeout(() => {
        Object(_data_helper_functions__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])('snack-bar-message', "Debe autenticarse para seguir...");
      }, 750);
      this.lastPage = page;
    }

    return this._authenticated;
  }

  _createNewModal(title, message, confirm) {
    let modal = document.createElement('custom-modal');
    this.shadowRoot.appendChild(modal);
    modal.confirm = confirm;
    return modal.createDialog(title, message);
  }

};
MainApp.styles = [_styles_main_shared_style__WEBPACK_IMPORTED_MODULE_4__["TypographyStyle"], _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_4__["IconStyle"], _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_4__["ScrollBarStyle"], _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_4__["AlignAbsoluteStyle"], _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`

    :host {
      width: 100vw;
      height: 100vh; /* Fallback for browsers that do not support Custom Properties */
      height: calc(var(--vh, 1vh) * 100);
      --dark-primary-color : #683111;
      --default-primary-color :  #f6f7ff;
      --light-primary-color : #eaeaff9d;
      --secondary-background-color: #fefffc;
      --accent-color : #fcff2f;
      --primary-text-color : #90921b;
      --secondary-text-color : #3f5161;
      --divider-color : #adb8bdcf;
      --error-color: #C4302B;
      --shadow-transition: transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      --shadow-elevation-1dp: 0 1px 2px rgba(0,0,0,0.2);
      --shadow-elevation-2dp: 0 2px 2px 0 rgba(0,0,0, 0.14),
                  0 1px 5px 0 rgba(0,0,0, 0.12),
                  0 3px 1px -2px rgba(0,0,0, 0.2);
      --shadow-elevation-3dp: 0 3px 4px 0 rgba(0,0,0, 0.14),
                  0 1px 8px 0 rgba(0,0,0, 0.12),
                  0 3px 3px -2px rgba(0,0,0, 0.4);
      --shadow-elevation-4dp: 0 4px 5px 0 rgba(0,0,0, 0.14),
                  0 1px 10px 0 rgba(0,0,0, 0.12),
                  0 2px 4px -1px rgba(0,0,0, 0.4);
      --shadow-elevation-6dp: 0 6px 10px 0 rgba(0,0,0, 0.14),
                  0 1px 18px 0 rgba(0,0,0, 0.12),
                  0 3px 5px -1px rgba(0,0,0, 0.4);
      --shadow-elevation-8dp: 0 8px 10px 1px rgba(0,0,0, 0.14),
                  0 3px 14px 2px rgba(0,0,0, 0.12),
                  0 5px 5px -3px rgba(0,0,0, 0.4);
      --shadow-elevation-16dp:0 16px 24px 2px rgba(0, 0, 0, 0.14),
                  0  6px 30px 5px rgba(0, 0, 0, 0.12),
                  0  8px 10px -5px rgba(0, 0, 0, 0.4);
      font-size: 16px;
    }

    app-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;
      width: 100%;
      align-items: center;
      color: white;
      --app-header-bg-color: transparent;
    }

    app-drawer{
      z-index: 150;
    }

    main {
      padding-top: 64px;
      height: calc(100vh - 64px);
      height: calc(calc(var(--vh, 1vh) * 100) - 64px);
      min-height: calc(100vh - 64px);
      min-height: calc(calc(var(--vh, 1vh) * 100) - 64px);
      max-height: calc(100vh - 64px);
      max-height: calc(calc(var(--vh, 1vh) * 100) - 64px);
      max-width: 100vw;
      overflow: auto;
      display: block;
      /*
      font-family: var(--app-font-family);
      */
      -webkit-overflow-scrolling: touch;
      background: url(/imgs/bg.gif) no-repeat center;
      background-size: cover;
    }

    .page, custom-loader {
      display: none;
    }

    .page.fade-out, custom-loader[show] {
      display: block;
    }

    p {
      text-align: justify;
      margin: 0;
    }

    .icon {
      pointer-events: initial;
    }

    .drawer-list > a{
      width: 100%;
      display: block;
      box-sizing: border-box;
      padding: 8px 16px;
      color: white;
      text-decoration: none;
      outline: none;
      color: grey;
    }

    a[selected], a:hover{
      border-left: 4px solid var(--secondary-background-color);
      background: var(--primary-text-color);
      color: var(--light-primary-color);
    }

    div.underline {
      margin: 12.5px auto;
    }
    custom-modal .body-1 {
      color: var(--secondary-text-color);
      margin: 0;
      padding: 0 10%;
    }


    @media print {

      app-header {
        display: none;
      }

      #main-content {
        overflow: hidden;
      }
    }
    `];

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "overflow", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "showsnackbar", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "snackbarMessage", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Object
})], MainApp.prototype, "user", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "appTitle", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "loading", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "page", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "lastPage", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "_drawerOpened", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "_authenticated", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "_install", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], MainApp.prototype, "show", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "url", void 0);

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: String
})], MainApp.prototype, "_modalMsn", void 0);

MainApp = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('main-app')], MainApp);


Date.prototype.toISOTZString = function () {
  const tzo = -this.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
    const norm = Math.floor(Math.abs(num));
    return (norm < 10 ? '0' : '') + norm;
  };

  return this.getFullYear() + '-' + pad(this.getMonth() + 1) + '-' + pad(this.getDate()) + 'T' + pad(this.getHours()) + ':' + pad(this.getMinutes()) + ':' + pad(this.getSeconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
};

Date.prototype.toISOTZSubString = function () {
  return this.toISOTZString().substring(0, 16).split("T").join(" ");
};

/***/ }),

/***/ "./src/snack-bar.ts":
/*!**************************!*\
  !*** ./src/snack-bar.ts ***!
  \**************************/
/*! exports provided: SnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBar", function() { return SnackBar; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./src/base-element.ts");
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SnackBar = class SnackBar extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
  constructor() {
    super(...arguments);
    this.active = false;
  }

  static get styles() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        padding: 12px;
        background-color: black;
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
        border-radius: 5px 5px 0 0;
        z-index: 100;
      }
      
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, -100%, 0);
      }
      @media (min-width: 460px) {
        :host {
          width: 320px;
          margin: auto;
        }
      }
    `;
  }

  render() {
    return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <slot></slot>
    `;
  }

};

__decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
  type: Boolean
})], SnackBar.prototype, "active", void 0);

SnackBar = __decorate([Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('snack-bar')], SnackBar);


/***/ }),

/***/ "./src/styles/main-shared-style.ts":
/*!*****************************************!*\
  !*** ./src/styles/main-shared-style.ts ***!
  \*****************************************/
/*! exports provided: AlignAbsoluteStyle, CenterAlign, FormCSS, ScrollBarStyle, IconStyle, TypographyStyle, ButtonStyles, SubPageViewStyle, RefractionCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignAbsoluteStyle", function() { return AlignAbsoluteStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterAlign", function() { return CenterAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCSS", function() { return FormCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBarStyle", function() { return ScrollBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconStyle", function() { return IconStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyStyle", function() { return TypographyStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyles", function() { return ButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubPageViewStyle", function() { return SubPageViewStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefractionCSS", function() { return RefractionCSS; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");

const AlignAbsoluteStyle = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    .vertical-align {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`;
const CenterAlign = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    .center-align {
        margin-left: 50%;
        transform: translateX(-50%);
    }`;
const FormCSS = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    :host{
        background: var(--secondary-background-color);
        box-shadow: var(--shadow-elevation-2dp);
        display: block;
        width: 95%;
        margin: auto;
        padding: 16px;
        border-radius: 5px;
    }

    .filters {
        position: relative;
        flex: 0 1 90%;
        border-radius: 5px;
        border: 2px solid var(--accent-color);
        background: #FFFFFF19;
        height: 4rem;
        margin-top: 1rem;
        display: flex;
    }

    .filters label {
        background: var(--accent-color);
        top: -1.25rem;
        left: 1rem;
        position: absolute;
        padding: 8px;
        border-radius: 5px;
        color: var(--dark-primary-color);
    }
    
    form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 80%;
        margin: auto;
    }

    form > * {
        flex: 0 1 40%;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    ripple-container {
        flex: 0 1 50%;
        width: 50%;
        margin: auto;
    }

    .form-style {
        z-index: 10;
        position: relative;
    }
`;
const ScrollBarStyle = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    #main-content::-webkit-scrollbar, .scrollable::-webkit-scrollbar {
        height: 2px;
        width: 2px;
        background-color: var(--light-primary-color);
    }

    .scrollable.transparent::-webkit-scrollbar {
        background-color: transparent;
    }

    #main-content::-webkit-scrollbar-thumb, .scrollable::-webkit-scrollbar-thumb {
        background-color: #d0ff00;
    }

    .scrollable.transparent::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: transparent;
        background-image: -webkit-linear-gradient(270deg,var(--dark-primary-color) 0%, var(--dark-primary-color) 75%, transparent 75%);
    }

    .scrollable.transparent::-webkit-scrollbar-track{
        background-color: transparent;
        -webkit-box-shadow: none;
    }

    #main-content::-webkit-scrollbar-track, .scrollable::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.3);
        background-color: var(--light-primary-color);
    }
`;
const IconStyle = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    .icon {
        display: block;
        width: 24px;
        height: 24px;
        fill: var(--icon-fill-color, var(--primary-text-color, black));
        cursor: pointer;
        pointer-events: none;
    }`;
const TypographyStyle = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`

    .underline {
        background: var(--divider-color);
        height: 1px;
        margin: 0 auto;
        width: 60%;
    }

    .underline.full{
        width: 100%;
    }

    .underline.margin {
        margin: 12.5px auto;
    }

    .underline.margin-bottom {
        margin: 0 auto 12.5px;
    }

    .underline.left{
        margin-left: 0;
    }

    .underline.tiny{
        width: 30%;
    }

    .headline-1, .headline-2, .headline-3, .headline-4, .headline-5, .headline-6,
    .subtitle-1, .subtitle-2, .button {
        font-family: 'Raleway', sans-serif;
        margin: 0 auto;
        font-weight: lighter;
    }

    .headline-1 { font-size: 96px; color: var(--accent-color); font-weight: lighter; letter-spacing:-1.5px; padding: 0 16px; }
    .headline-2 { font-size: 60px; font-weight: normal; letter-spacing: 0.25px;}
    .headline-3 { font-size: 48px; letter-spacing:0; }
    .headline-4 { font-size: 34px; letter-spacing:0; }
    .headline-5 { font-size: 24px; }
    .headline-6 { font-size: 20px; font-weight: medium; letter-spacing:0.15px;}

    p { margin: 0; text-align: justify; }

    .body-1, .body-2, .overline, .caption, .button { font-family: 'Montserrat', sans-serif; }

    .subtitle-1, .body-1 { font-size: 16px; color: var(--primary-text-color); letter-spacing: 0.5px; }
    .subtitle-2, .body-2 { font-size: 14px; letter-spacing:0.25px; }
    .button  { font-size: 14px; font-weight: medium; letter-spacing: 1.25px; }
    .overline{ font-size: 12px; }
    .caption { font-size: 10px; }
    .button, .caption, .overline {text-transform: uppercase; }
`;
const ButtonStyles = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`

    .linked-btn{
        outline: none;
        padding: 8px;
        display: block;
        min-width: 150px;
        width: 100%;
        text-align: center;
        text-decoration: none;
        border: none;
        cursor: pointer;
        height: 50px;
        color: var(--dark-primary-color);
    }

    .wide-btn {
        padding: 16px;
    }

    .rounded {
        border-radius: 100%;
    }`;
const SubPageViewStyle = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    .slider {
        flex: 1 0 100%;
        margin: auto;
        position: relative;
        height: 100vh;
        max-height: 100vh;
        min-height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        max-height: calc(var(--vh, 1vh) * 100);
        min-height: calc(var(--vh, 1vh) * 100);
        width: 100vw;
        z-index: 0;
        padding-top: 2.5vh;
        padding-top: calc(var(--vh, 1vh) * 2.5);
    }
    
    .slider.nopadding{
        padding-top: 0;
    }`;
const RefractionCSS = _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
    *, :host { box-sizing: border-box; }

    :host {
        background: var(--secondary-background-color);
        width: 95%;
        margin: auto;
        border-radius: 5px;
        display: block;
        padding: 1px 8px 1px 16px;
        border-radius: 5px;
        position: relative;
    }

    .horizontal-flex{
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 16px;
        border-radius: 5px;
        height: 50%;
        height: 50%;
    }

    .horizontal-flex.dp {
        padding: 0; 
    }

    .horizontal-flex > * {
        flex: 0 0 22.5%;
    }

    .hack{
        padding: 0 1.5rem;
    }

    .indicator {
        display:none;
        color: var( --secondary-text-color);
        width:100%;
    }

    :host([edit-form]) .horizontal-cont, :host([edit-form]) .horizontal-cont + div, :host([edit-form]) .container-flex{
        box-shadow: none;
    }

    .horizontal-cont, .horizontal-cont + div{
        margin-top: 25px;
        background: var(--dark-primary-color);
        padding: 16px;
        border-radius: 5px;
    }

    .container-flex{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        border-radius: 10px 10px 5px 5px;
        background: var(--dark-primary-color);
    }

    .container-flex > div:first-child{
        width: 15%;
        background: var(--accent-color);
        border-radius: 5px 0 0 5px;
    }

    .container-flex > div:nth-child(2){
        width: 85%;
    }

    .vertical-text{
        line-height: 5.25;
        height: 100%;
        border-radius: 5px 0 0 5px;
        width: auto;
        font-size: 34px;
        display: block;
        text-align: center;
        color: var(--light-primary-color);
        background: var(--accent-color);
        font-family: 'Raleway', sans-serif;
    }

    .extra-block{
        width:100%; 
        margin-top: 10px;
        height:auto; 
        min-height:0;
    }

    ripple-container {
        width: 44.5%;
    }


    .form-style > .container-flex, .form-style > .horizontal-cont, 
    .form-style > .horizontal-flex {
        box-shadow: var(--shadow-elevation-2dp);
    }

    @media (max-width:840px){
        
        custom-input{
            padding: 0;
            max-width: 90%;
            width: 90%;
        }

        .container-flex > div:first-child{
            border-radius: 5px 5px 0 0;
        }

        .container-flex > div {
            width: 100% !important;
        }

        custom-input:nth-child(n+1) {
            margin-left: 0;
            margin: auto;
        }
        
        :host{
            width:100%;
        }

        .vertical-text{
            line-height: 2;
            font-size: 3rem;
            width: 100%;
        }

        .horizontal-flex{
            flex-direction: column;
            padding: 10px;
            background: var(--dark-primary-color);
        }     

        .container-flex {
            flex-direction: column;
        }
        
        .indicator{
            display:block;
        }

        .horizontal-flex.hack{
            flex-direction: row;
        }   

        .horizontal-flex.hack custom-dropdown, 
        .horizontal-flex.hack custom-input{
            width: 35%;
            margin-left: 2.5%;
            margin-right: 0;
        }

        .horizontal-flex.dp custom-input{
            padding: 0;
            width: 80%;
            display: block;
            transform: none;
            margin-left: 8.5%;
        }
    }

    .form-style {
        margin-bottom: 2%;
    }`;

/***/ }),

/***/ "./src/utilities/helpers.ts":
/*!**********************************!*\
  !*** ./src/utilities/helpers.ts ***!
  \**********************************/
/*! exports provided: installMediaQueryWatcher, setMetaTag, updateMetadata, installOfflineWatcher, installRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-query */ "./src/utilities/media-query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installMediaQueryWatcher", function() { return _media_query__WEBPACK_IMPORTED_MODULE_0__["installMediaQueryWatcher"]; });

/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata */ "./src/utilities/metadata.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMetaTag", function() { return _metadata__WEBPACK_IMPORTED_MODULE_1__["setMetaTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateMetadata", function() { return _metadata__WEBPACK_IMPORTED_MODULE_1__["updateMetadata"]; });

/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network */ "./src/utilities/network.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installOfflineWatcher", function() { return _network__WEBPACK_IMPORTED_MODULE_2__["installOfflineWatcher"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/utilities/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_3__["installRouter"]; });






/***/ }),

/***/ "./src/utilities/media-query.ts":
/*!**************************************!*\
  !*** ./src/utilities/media-query.ts ***!
  \**************************************/
/*! exports provided: installMediaQueryWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installMediaQueryWatcher", function() { return installMediaQueryWatcher; });
const installMediaQueryWatcher = (mediaQuery, layoutChangedCallback) => {
  let mql = window.matchMedia(mediaQuery);
  mql.addListener(e => layoutChangedCallback(e.matches));
  layoutChangedCallback(mql.matches);
};

/***/ }),

/***/ "./src/utilities/metadata.ts":
/*!***********************************!*\
  !*** ./src/utilities/metadata.ts ***!
  \***********************************/
/*! exports provided: updateMetadata, setMetaTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMetadata", function() { return updateMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMetaTag", function() { return setMetaTag; });
const updateMetadata = ({
  title,
  description,
  url,
  image,
  imageAlt
}) => {
  if (title) {
    document.title = title;
    setMetaTag('property', 'og:title', title);
  }

  if (description) {
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:description', description);
  }

  if (image) {
    setMetaTag('property', 'og:image', image);
  }

  if (imageAlt) {
    setMetaTag('property', 'og:image:alt', imageAlt);
  }

  url = url || window.location.href;
  setMetaTag('property', 'og:url', url);
};
/**
  Utility method to create or update the content of a meta tag based on an
  attribute name/value pair.

  Example (in your top level element or document, or in the router callback):

      import { setMetaTag } from 'pwa-helpers/metadata.js';

      setMetaTag('name', 'twitter:card', 'summary');
      
  This would create the following meta tag in the head of the document (or
  update the content attribute if a meta tag with name="twitter:card" exists):

      <meta name="twitter:card" content="summary">

*/

function setMetaTag(attrName, attrValue, content) {
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content || '');
}

/***/ }),

/***/ "./src/utilities/network.ts":
/*!**********************************!*\
  !*** ./src/utilities/network.ts ***!
  \**********************************/
/*! exports provided: installOfflineWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installOfflineWatcher", function() { return installOfflineWatcher; });
const installOfflineWatcher = offlineUpdatedCallback => {
  window.addEventListener('online', () => offlineUpdatedCallback(false));
  window.addEventListener('offline', () => offlineUpdatedCallback(true));
  offlineUpdatedCallback(navigator.onLine === false);
};

/***/ }),

/***/ "./src/utilities/router.ts":
/*!*********************************!*\
  !*** ./src/utilities/router.ts ***!
  \*********************************/
/*! exports provided: installRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installRouter", function() { return installRouter; });
const installRouter = locationUpdatedCallback => {
  document.body.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const anchor = e.composedPath().filter(n => n.tagName === 'A')[0];
    if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;
    const href = anchor.href;
    if (!href || href.indexOf('mailto:') !== -1) return;
    const location = window.location;
    const origin = location.origin || location.protocol + '//' + location.host;
    if (href.indexOf(origin) !== 0) return;
    e.preventDefault();

    if (href !== location.href) {
      window.history.pushState({}, '', href);
      locationUpdatedCallback(location, e);
    }
  });
  window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e)); //hasn't been tested

  window.addEventListener('hashchange', e => locationUpdatedCallback(window.location, e));
  locationUpdatedCallback(window.location, null
  /* event */
  );
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvY3NzLXRhZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3VwZGF0aW5nLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZG9tLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL21vZGlmeS10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9zaGFkeS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9sYXlvdXQvYXBwLWRyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvbGF5b3V0L2FwcC1oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL21vZGFsL2N1c3RvbS1tb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvcHJlbG9hZGVycy9jdXN0b20tbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9yYWRpby1ncm91cC9jdXN0b20tcmFkaW8tZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGVscGVyLWZ1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi1hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWNrLWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL21lZGlhLXF1ZXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvbWV0YWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9uZXR3b3JrLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0Esd0NBQXdDLHNEQUFzRDtRQUM5Rjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztR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U0FBZixDQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxJQUFqQztBQUNBLDZCQUF1QixDQUFDLFFBQUQsRUFBVyxDQUFYLENBQXZCO0FBQ0g7QUFDSixHQXJCRDtBQXVCQSxRQUFNLENBQUMsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxRQUFSLEVBQWtCLENBQWxCLENBQWhFLEVBeEIwSSxDQXlCMUk7O0FBQ0EsUUFBTSxDQUFDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsUUFBUixFQUFrQixDQUFsQixDQUFsRTtBQUNBLHlCQUF1QixDQUFDLE1BQU0sQ0FBQyxRQUFSLEVBQWtCO0FBQUs7QUFBdkIsR0FBdkI7QUFDSCxDQTVCTSxDIiwiZmlsZSI6Im1haW4tYXBwLTEzOTNjNzI1MTIyOTQ3N2VjZjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluLWFwcFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyB7XCIwXCI6XCJmM2FkNWQyYmI2ZjA5ZWRiNDc3ZlwiLFwiMVwiOlwiOWQyN2VkZjk5YjIyODQ2MzI3YjVcIn1bY2h1bmtJZF0gKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi1hcHAudHNcIik7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTkgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSAod2luZG93LlNoYWRvd1Jvb3QpICYmXG4gICAgKHdpbmRvdy5TaGFkeUNTUyA9PT0gdW5kZWZpbmVkIHx8IHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXG4gICAgKCdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSkgJiZcbiAgICAoJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlKTtcblxuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcblxuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gIF9zdHlsZVNoZWV0PzogQ1NTU3R5bGVTaGVldHxudWxsO1xuXG4gIHJlYWRvbmx5IGNzc1RleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjc3NUZXh0OiBzdHJpbmcsIHNhZmVUb2tlbjogc3ltYm9sKSB7XG4gICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICB9XG5cbiAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgLy8gc3R5bGVzaGVldHMgYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gIGdldCBzdHlsZVNoZWV0KCk6IENTU1N0eWxlU2hlZXR8bnVsbCB7XG4gICAgaWYgKHRoaXMuX3N0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm90ZSwgaWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZVxuICAgICAgLy8gQ1NTU3R5bGVTaGVldCBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICB9XG59XG5cbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEgW1tgY3NzYF1dIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWU6IHVua25vd24pID0+IHtcbiAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcblxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWU6IENTU1Jlc3VsdHxudW1iZXIpID0+IHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ1NTUmVzdWx0KSB7XG4gICAgcmV0dXJuIHZhbHVlLmNzc1RleHQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogJHtcbiAgICAgICAgICAgIHZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZW1wbGF0ZSB0YWcgd2hpY2ggd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3MgW1tMaXRFbGVtZW50LnN0eWxlcyB8XG4gKiBgc3R5bGVzYF1dIHByb3BlcnR5IHRvIHNldCBlbGVtZW50IHN0eWxlcy4gRm9yIHNlY3VyaXR5IHJlYXNvbnMsIG9ubHkgbGl0ZXJhbFxuICogc3RyaW5nIHZhbHVlcyBtYXkgYmUgdXNlZC4gVG8gaW5jb3Jwb3JhdGUgbm9uLWxpdGVyYWwgdmFsdWVzIFtbYHVuc2FmZUNTU2BdXVxuICogbWF5IGJlIHVzZWQgaW5zaWRlIGEgdGVtcGxhdGUgc3RyaW5nIHBhcnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPVxuICAgIChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiAoQ1NTUmVzdWx0fG51bWJlcilbXSkgPT4ge1xuICAgICAgY29uc3QgY3NzVGV4dCA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sXG4gICAgICAgICAgc3RyaW5nc1swXSk7XG4gICAgICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHtMaXRFbGVtZW50fSBmcm9tICcuLi9saXQtZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7UHJvcGVydHlEZWNsYXJhdGlvbiwgVXBkYXRpbmdFbGVtZW50fSBmcm9tICcuL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVFxufTtcblxuLy8gRnJvbSB0aGUgVEMzOSBEZWNvcmF0b3JzIHByb3Bvc2FsXG5pbnRlcmZhY2UgQ2xhc3NEZXNjcmlwdG9yIHtcbiAga2luZDogJ2NsYXNzJztcbiAgZWxlbWVudHM6IENsYXNzRWxlbWVudFtdO1xuICBmaW5pc2hlcj86IDxUPihjbGF6ejogQ29uc3RydWN0b3I8VD4pID0+IHVuZGVmaW5lZCB8IENvbnN0cnVjdG9yPFQ+O1xufVxuXG4vLyBGcm9tIHRoZSBUQzM5IERlY29yYXRvcnMgcHJvcG9zYWxcbmludGVyZmFjZSBDbGFzc0VsZW1lbnQge1xuICBraW5kOiAnZmllbGQnfCdtZXRob2QnO1xuICBrZXk6IFByb3BlcnR5S2V5O1xuICBwbGFjZW1lbnQ6ICdzdGF0aWMnfCdwcm90b3R5cGUnfCdvd24nO1xuICBpbml0aWFsaXplcj86IEZ1bmN0aW9uO1xuICBleHRyYXM/OiBDbGFzc0VsZW1lbnRbXTtcbiAgZmluaXNoZXI/OiA8VD4oY2xheno6IENvbnN0cnVjdG9yPFQ+KSA9PiB1bmRlZmluZWQgfCBDb25zdHJ1Y3RvcjxUPjtcbiAgZGVzY3JpcHRvcj86IFByb3BlcnR5RGVzY3JpcHRvcjtcbn1cblxuY29uc3QgbGVnYWN5Q3VzdG9tRWxlbWVudCA9XG4gICAgKHRhZ05hbWU6IHN0cmluZywgY2xheno6IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PikgPT4ge1xuICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgICAvLyBzdWJ0eXBlIG9mIHRoZSBkZWNvcmF0ZWQgY2xhc3Mgd2hlbiBjbGF6eiBpcyB0eXBlZCBhc1xuICAgICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgZm9yIHNvbWUgcmVhc29uLlxuICAgICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgICAgLy8gYXBwbGllZCB0byBlbGVtZW50cyBob3dldmVyLlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgcmV0dXJuIGNsYXp6IGFzIGFueTtcbiAgICB9O1xuXG5jb25zdCBzdGFuZGFyZEN1c3RvbUVsZW1lbnQgPVxuICAgICh0YWdOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IENsYXNzRGVzY3JpcHRvcikgPT4ge1xuICAgICAgY29uc3Qge2tpbmQsIGVsZW1lbnRzfSA9IGRlc2NyaXB0b3I7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kLFxuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgb25jZSB0aGUgY2xhc3MgaXMgb3RoZXJ3aXNlIGZ1bGx5IGRlZmluZWRcbiAgICAgICAgZmluaXNoZXIoY2xheno6IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50Pikge1xuICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbi8qKlxuICogQ2xhc3MgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBkZWZpbmVzIHRoZSBkZWNvcmF0ZWQgY2xhc3MgYXMgYSBjdXN0b20gZWxlbWVudC5cbiAqXG4gKiBgYGBcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBwYXJhbSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50ID0gKHRhZ05hbWU6IHN0cmluZykgPT5cbiAgICAoY2xhc3NPckRlc2NyaXB0b3I6IENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PnxDbGFzc0Rlc2NyaXB0b3IpID0+XG4gICAgICAgICh0eXBlb2YgY2xhc3NPckRlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpID9cbiAgICBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKSA6XG4gICAgc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcblxuY29uc3Qgc3RhbmRhcmRQcm9wZXJ0eSA9XG4gICAgKG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24sIGVsZW1lbnQ6IENsYXNzRWxlbWVudCkgPT4ge1xuICAgICAgLy8gV2hlbiBkZWNvcmF0aW5nIGFuIGFjY2Vzc29yLCBwYXNzIGl0IHRocm91Z2ggYW5kIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAgIC8vIE5vdGUsIHRoZSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGluIGBjcmVhdGVQcm9wZXJ0eWAgZW5zdXJlcyB3ZSBkb24ndFxuICAgICAgLy8gc3RvbXAgb3ZlciB0aGUgdXNlcidzIGFjY2Vzc29yLlxuICAgICAgaWYgKGVsZW1lbnQua2luZCA9PT0gJ21ldGhvZCcgJiYgZWxlbWVudC5kZXNjcmlwdG9yICYmXG4gICAgICAgICAgISgndmFsdWUnIGluIGVsZW1lbnQuZGVzY3JpcHRvcikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5lbGVtZW50LFxuICAgICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY3JlYXRlUHJvcGVydHkoKSB0YWtlcyBjYXJlIG9mIGRlZmluaW5nIHRoZSBwcm9wZXJ0eSwgYnV0IHdlIHN0aWxsXG4gICAgICAgIC8vIG11c3QgcmV0dXJuIHNvbWUga2luZCBvZiBkZXNjcmlwdG9yLCBzbyByZXR1cm4gYSBkZXNjcmlwdG9yIGZvciBhblxuICAgICAgICAvLyB1bnVzZWQgcHJvdG90eXBlIGZpZWxkLiBUaGUgZmluaXNoZXIgY2FsbHMgY3JlYXRlUHJvcGVydHkoKS5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnZmllbGQnLFxuICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICBkZXNjcmlwdG9yOiB7fSxcbiAgICAgICAgICAvLyBXaGVuIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycyBpbXBsZW1lbnRzIGluaXRpYWxpemVycyxcbiAgICAgICAgICAvLyBkbyB0aGlzIGluc3RlYWQgb2YgdGhlIGluaXRpYWxpemVyIGJlbG93LiBTZWU6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy85MjYwIGV4dHJhczogW1xuICAgICAgICAgIC8vICAge1xuICAgICAgICAgIC8vICAgICBraW5kOiAnaW5pdGlhbGl6ZXInLFxuICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgIC8vICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyBdLFxuICAgICAgICAgIGluaXRpYWxpemVyKHRoaXM6IHtba2V5OiBzdHJpbmddOiB1bmtub3dufSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXNbZWxlbWVudC5rZXkgYXMgc3RyaW5nXSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID1cbiAgICAob3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiwgcHJvdG86IE9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIChwcm90by5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAgIC5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICB9O1xuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSBMaXRFbGVtZW50IHByb3BlcnR5IHdoaWNoIHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBBIFtbYFByb3BlcnR5RGVjbGFyYXRpb25gXV0gbWF5IG9wdGlvbmFsbHkgYmVcbiAqIHN1cHBsaWVkIHRvIGNvbmZpZ3VyZSBwcm9wZXJ0eSBmZWF0dXJlcy5cbiAqXG4gKiBUaGlzIGRlY29yYXRvciBzaG91bGQgb25seSBiZSB1c2VkIGZvciBwdWJsaWMgZmllbGRzLiBQcml2YXRlIG9yIHByb3RlY3RlZFxuICogZmllbGRzIHNob3VsZCB1c2UgdGhlIFtbYGludGVybmFsUHJvcGVydHlgXV0gZGVjb3JhdG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICogICBjbGlja2VkID0gZmFsc2U7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogT2JqZWN0fENsYXNzRWxlbWVudCwgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+XG4gICAgICAgICAgICAgKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgbGVnYWN5UHJvcGVydHkob3B0aW9ucyEsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgc3RhbmRhcmRQcm9wZXJ0eShvcHRpb25zISwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbFByb3BlcnR5RGVjbGFyYXRpb248VHlwZSA9IHVua25vd24+IHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBpbmRpY2F0ZXMgaWYgYSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCBjaGFuZ2VkIHdoZW5cbiAgICogaXQgaXMgc2V0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIHRha2UgdGhlIGBuZXdWYWx1ZWAgYW5kIGBvbGRWYWx1ZWAgYW5kXG4gICAqIHJldHVybiBgdHJ1ZWAgaWYgYW4gdXBkYXRlIHNob3VsZCBiZSByZXF1ZXN0ZWQuXG4gICAqL1xuICBoYXNDaGFuZ2VkPyh2YWx1ZTogVHlwZSwgb2xkVmFsdWU6IFR5cGUpOiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGEgcHJpdmF0ZSBvciBwcm90ZWN0ZWQgcHJvcGVydHkgdGhhdCBzdGlsbCB0cmlnZ2VycyB1cGRhdGVzIHRvIHRoZVxuICogZWxlbWVudCB3aGVuIGl0IGNoYW5nZXMuXG4gKlxuICogUHJvcGVydGllcyBkZWNsYXJlZCB0aGlzIHdheSBtdXN0IG5vdCBiZSB1c2VkIGZyb20gSFRNTCBvciBIVE1MIHRlbXBsYXRpbmdcbiAqIHN5c3RlbXMsIHRoZXkncmUgc29sZWx5IGZvciBwcm9wZXJ0aWVzIGludGVybmFsIHRvIHRoZSBlbGVtZW50LiBUaGVzZVxuICogcHJvcGVydGllcyBtYXkgYmUgcmVuYW1lZCBieSBvcHRpbWl6YXRpb24gdG9vbHMgbGlrZSBjbG9zdXJlIGNvbXBpbGVyLlxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJuYWxQcm9wZXJ0eShvcHRpb25zPzogSW50ZXJuYWxQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gIHJldHVybiBwcm9wZXJ0eSh7YXR0cmlidXRlOiBmYWxzZSwgaGFzQ2hhbmdlZDogb3B0aW9ucz8uaGFzQ2hhbmdlZH0pO1xufVxuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvciBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICogQHBhcmFtIGNhY2hlIEFuIG9wdGlvbmFsIGJvb2xlYW4gd2hpY2ggd2hlbiB0cnVlIHBlcmZvcm1zIHRoZSBET00gcXVlcnkgb25seVxuICogb25jZSBhbmQgY2FjaGVzIHRoZSByZXN1bHQuXG4gKlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvclxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeSgnI2ZpcnN0JylcbiAqICAgZmlyc3Q7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yOiBzdHJpbmcsIGNhY2hlPzogYm9vbGVhbikge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbih0aGlzOiBMaXRFbGVtZW50KSB7XG4gICAgICAgIGlmICgodGhpcyBhcyB1bmtub3duIGFzXG4gICAgICAgICAgICAge1trZXk6IHN0cmluZ106IEVsZW1lbnQgfCBudWxsfSlba2V5IGFzIHN0cmluZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICgodGhpcyBhcyB1bmtub3duIGFzIHtba2V5OiBzdHJpbmddOiBFbGVtZW50IHwgbnVsbH0pW2tleSBhcyBzdHJpbmddID1cbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMgYXMgdW5rbm93biBhcyB7W2tleTogc3RyaW5nXTogRWxlbWVudCB8IG51bGx9KVtrZXkgYXMgc3RyaW5nXTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgIGxlZ2FjeVF1ZXJ5KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgICBzdGFuZGFyZFF1ZXJ5KGRlc2NyaXB0b3IsIHByb3RvT3JEZXNjcmlwdG9yIGFzIENsYXNzRWxlbWVudCk7XG4gIH07XG59XG5cbi8vIE5vdGUsIGluIHRoZSBmdXR1cmUsIHdlIG1heSBleHRlbmQgdGhpcyBkZWNvcmF0b3IgdG8gc3VwcG9ydCB0aGUgdXNlIGNhc2Vcbi8vIHdoZXJlIHRoZSBxdWVyaWVkIGVsZW1lbnQgbWF5IG5lZWQgdG8gZG8gd29yayB0byBiZWNvbWUgcmVhZHkgdG8gaW50ZXJhY3Rcbi8vIHdpdGggKGUuZy4gbG9hZCBzb21lIGltcGxlbWVudGF0aW9uIGNvZGUpLiBJZiBzbywgd2UgbWlnaHQgZWxlY3QgdG9cbi8vIGFkZCBhIHNlY29uZCBhcmd1bWVudCBkZWZpbmluZyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHJ1biB0byBtYWtlIHRoZVxuLy8gcXVlcmllZCBlbGVtZW50IGxvYWRlZC91cGRhdGVkL3JlYWR5LlxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXN1bHQgb2YgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZVxuICogZWxlbWVudCdzIHJlbmRlclJvb3QgZG9uZSBhZnRlciB0aGUgZWxlbWVudCdzIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZVxuICogcmVzb2x2ZXMuIFdoZW4gdGhlIHF1ZXJpZWQgcHJvcGVydHkgbWF5IGNoYW5nZSB3aXRoIGVsZW1lbnQgc3RhdGUsIHRoaXNcbiAqIGRlY29yYXRvciBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHJlcXVpcmluZyB1c2VycyB0byBhd2FpdCB0aGVcbiAqIGB1cGRhdGVDb21wbGV0ZWAgYmVmb3JlIGFjY2Vzc2luZyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzeW5jKCcjZmlyc3QnKVxuICogICBmaXJzdDtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBleHRlcm5hbCB1c2FnZVxuICogYXN5bmMgZG9Tb21ldGhpbmdXaXRoRmlyc3QoKSB7XG4gKiAgKGF3YWl0IGFNeUVsZW1lbnQuZmlyc3QpLmRvU29tZXRoaW5nKCk7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXN5bmMoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgYXN5bmMgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlclxuICogdGhhdCBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3JBbGwgb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcXVlcnlTZWxlY3RvckFsbFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QWxsKCdkaXYnKVxuICogICBkaXZzO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IE9iamVjdHxDbGFzc0VsZW1lbnQsXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICBuYW1lPzogUHJvcGVydHlLZXkpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICBnZXQodGhpczogTGl0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICBsZWdhY3lRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBPYmplY3QsIG5hbWUpIDpcbiAgICAgICAgc3RhbmRhcmRRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBDbGFzc0VsZW1lbnQpO1xuICB9O1xufVxuXG5jb25zdCBsZWdhY3lRdWVyeSA9XG4gICAgKGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgcHJvdG86IE9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfTtcblxuY29uc3Qgc3RhbmRhcmRRdWVyeSA9IChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIGVsZW1lbnQ6IENsYXNzRWxlbWVudCkgPT5cbiAgICAoe1xuICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgICAga2V5OiBlbGVtZW50LmtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgfSk7XG5cbmNvbnN0IHN0YW5kYXJkRXZlbnRPcHRpb25zID1cbiAgICAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsIGVsZW1lbnQ6IENsYXNzRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgZmluaXNoZXIoY2xheno6IHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBjbGF6ei5wcm90b3R5cGVbZWxlbWVudC5rZXkgYXMga2V5b2YgVXBkYXRpbmdFbGVtZW50XSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuY29uc3QgbGVnYWN5RXZlbnRPcHRpb25zID1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGxlZ2FjeSBkZWNvcmF0b3JcbiAgICAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsIHByb3RvOiBhbnksIG5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKHByb3RvW25hbWVdLCBvcHRpb25zKTtcbiAgICB9O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5fb25DbGlja31gPlxuICogICAgICAgICA8YnV0dG9uPjwvYnV0dG9uPlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICpcbiAqICAgQGV2ZW50T3B0aW9ucyh7Y2FwdHVyZTogdHJ1ZX0pXG4gKiAgIF9vbkNsaWNrKGUpIHtcbiAqICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zOiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucykge1xuICAvLyBSZXR1cm4gdmFsdWUgdHlwZWQgYXMgYW55IHRvIHByZXZlbnQgVHlwZVNjcmlwdCBmcm9tIGNvbXBsYWluaW5nIHRoYXRcbiAgLy8gc3RhbmRhcmQgZGVjb3JhdG9yIGZ1bmN0aW9uIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCBUeXBlU2NyaXB0IGRlY29yYXRvclxuICAvLyBzaWduYXR1cmVcbiAgLy8gVE9ETyhrc2NoYWFmKTogdW5jbGVhciB3aHkgaXQgd2FzIG9ubHkgZmFpbGluZyBvbiB0aGlzIGRlY29yYXRvciBhbmQgbm90XG4gIC8vIHRoZSBvdGhlcnNcbiAgcmV0dXJuICgocHJvdG9PckRlc2NyaXB0b3I6IE9iamVjdHxDbGFzc0VsZW1lbnQsIG5hbWU/OiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgbGVnYWN5RXZlbnRPcHRpb25zKG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgICAgICAgICBzdGFuZGFyZEV2ZW50T3B0aW9ucyhcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yIGFzIENsYXNzRWxlbWVudCkpIGFzXG4gICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICAgICBhbnk7XG59XG5cbi8vIHgtYnJvd3NlciBzdXBwb3J0IGZvciBtYXRjaGVzXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5jb25zdCBFbGVtZW50UHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZSBhcyBhbnk7XG5jb25zdCBsZWdhY3lNYXRjaGVzID1cbiAgICBFbGVtZW50UHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIHRoZSBgYXNzaWduZWROb2Rlc2Agb2YgdGhlIGdpdmVuIG5hbWVkIGBzbG90YC4gTm90ZSwgdGhlIHR5cGUgb2ZcbiAqIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5gLlxuICpcbiAqIEBwYXJhbSBzbG90TmFtZSBBIHN0cmluZyBuYW1lIG9mIHRoZSBzbG90LlxuICogQHBhcmFtIGZsYXR0ZW4gQSBib29sZWFuIHdoaWNoIHdoZW4gdHJ1ZSBmbGF0dGVucyB0aGUgYXNzaWduZWQgbm9kZXMsXG4gKiBtZWFuaW5nIGFueSBhc3NpZ25lZCBub2RlcyB0aGF0IGFyZSBzbG90IGVsZW1lbnRzIGFyZSByZXBsYWNlZCB3aXRoIHRoZWlyXG4gKiBhc3NpZ25lZCBub2Rlcy5cbiAqIEBwYXJhbSBzZWxlY3RvciBBIHN0cmluZyB3aGljaCBmaWx0ZXJzIHRoZSByZXN1bHRzIHRvIGVsZW1lbnRzIHRoYXQgbWF0Y2hcbiAqIHRoZSBnaXZlbiBjc3Mgc2VsZWN0b3IuXG4gKlxuICogKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzc2lnbmVkTm9kZXMoJ2xpc3QnLCB0cnVlLCAnLml0ZW0nKVxuICogICBsaXN0SXRlbXM7XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8c2xvdCBuYW1lPVwibGlzdFwiPjwvc2xvdD5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWROb2RlcyhcbiAgICBzbG90TmFtZSA9ICcnLCBmbGF0dGVuID0gZmFsc2UsIHNlbGVjdG9yID0gJycpIHtcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogT2JqZWN0fENsYXNzRWxlbWVudCxcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICAgICAgICAgIG5hbWU/OiBQcm9wZXJ0eUtleSk6IGFueSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgIGdldCh0aGlzOiBMaXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9XG4gICAgICAgICAgICBgc2xvdCR7c2xvdE5hbWUgPyBgW25hbWU9JHtzbG90TmFtZX1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICBsZXQgbm9kZXMgPSBzbG90ICYmIChzbG90IGFzIEhUTUxTbG90RWxlbWVudCkuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbn0pO1xuICAgICAgICBpZiAobm9kZXMgJiYgc2VsZWN0b3IpIHtcbiAgICAgICAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihcbiAgICAgICAgICAgICAgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkubWF0Y2hlcyA/XG4gICAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5tYXRjaGVzKHNlbGVjdG9yKSA6XG4gICAgICAgICAgICAgICAgICBsZWdhY3lNYXRjaGVzLmNhbGwobm9kZSBhcyBFbGVtZW50LCBzZWxlY3RvcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiBbW1VwZGF0aW5nRWxlbWVudF1dLlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPVxuICAgIDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KHByb3A6IFAsIF9vYmo6IHVua25vd24pOiBQID0+IHByb3A7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHk6IDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KFxuICAgICAgcHJvcDogUCwgX29iajogdW5rbm93bikgPT4gUDtcblxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5OiB0eXBlb2YgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIHByb3BlcnR5IHZhbHVlcyB0byBhbmQgZnJvbSBhdHRyaWJ1dGUgdmFsdWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGNvbnZlcnQgYW4gYXR0cmlidXRlIHZhbHVlIHRvIGEgcHJvcGVydHlcbiAgICogdmFsdWUuXG4gICAqL1xuICBmcm9tQXR0cmlidXRlPyh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU/OiBUeXBlSGludCk6IFR5cGU7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB0byBjb252ZXJ0IGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBJdCByZXR1cm5zIHVua25vd24gaW5zdGVhZCBvZiBzdHJpbmcsIHRvIGJlIGNvbXBhdGlibGUgd2l0aFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy90cnVzdGVkLXR5cGVzIChhbmQgc2ltaWxhciBlZmZvcnRzKS5cbiAgICovXG4gIHRvQXR0cmlidXRlPyh2YWx1ZTogVHlwZSwgdHlwZT86IFR5cGVIaW50KTogdW5rbm93bjtcbn1cblxudHlwZSBBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4gPVxuICAgIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZT58XG4gICAgKCh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU/OiBUeXBlSGludCkgPT4gVHlwZSk7XG5cbi8qKlxuICogRGVmaW5lcyBvcHRpb25zIGZvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RGVjbGFyYXRpb248VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGhvdyBhbmQgd2hldGhlciB0aGUgcHJvcGVydHkgYmVjb21lcyBhbiBvYnNlcnZlZCBhdHRyaWJ1dGUuXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBgZmFsc2VgLCB0aGUgcHJvcGVydHkgaXMgbm90IGFkZGVkIHRvIGBvYnNlcnZlZEF0dHJpYnV0ZXNgLlxuICAgKiBJZiB0cnVlIG9yIGFic2VudCwgdGhlIGxvd2VyY2FzZWQgcHJvcGVydHkgbmFtZSBpcyBvYnNlcnZlZCAoZS5nLiBgZm9vQmFyYFxuICAgKiBiZWNvbWVzIGBmb29iYXJgKS4gSWYgYSBzdHJpbmcsIHRoZSBzdHJpbmcgdmFsdWUgaXMgb2JzZXJ2ZWQgKGUuZ1xuICAgKiBgYXR0cmlidXRlOiAnZm9vLWJhcidgKS5cbiAgICovXG4gIHJlYWRvbmx5IGF0dHJpYnV0ZT86IGJvb2xlYW58c3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgdGhlIHByb3BlcnR5LiBUaGlzIGlzIHVzZWQgb25seSBhcyBhIGhpbnQgZm9yIHRoZVxuICAgKiBgY29udmVydGVyYCB0byBkZXRlcm1pbmUgaG93IHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZVxuICAgKiB0by9mcm9tIGEgcHJvcGVydHkuXG4gICAqL1xuICByZWFkb25seSB0eXBlPzogVHlwZUhpbnQ7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBob3cgdG8gY29udmVydCB0aGUgYXR0cmlidXRlIHRvL2Zyb20gYSBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZVxuICAgKiBpcyBhIGZ1bmN0aW9uLCBpdCBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBhIHRoZSBwcm9wZXJ0eVxuICAgKiB2YWx1ZS4gSWYgaXQncyBhbiBvYmplY3QsIGl0IGNhbiBoYXZlIGtleXMgZm9yIGBmcm9tQXR0cmlidXRlYCBhbmRcbiAgICogYHRvQXR0cmlidXRlYC4gSWYgbm8gYHRvQXR0cmlidXRlYCBmdW5jdGlvbiBpcyBwcm92aWRlZCBhbmRcbiAgICogYHJlZmxlY3RgIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBzZXQgZGlyZWN0bHkgdG8gdGhlXG4gICAqIGF0dHJpYnV0ZS4gQSBkZWZhdWx0IGBjb252ZXJ0ZXJgIGlzIHVzZWQgaWYgbm9uZSBpcyBwcm92aWRlZDsgaXQgc3VwcG9ydHNcbiAgICogYEJvb2xlYW5gLCBgU3RyaW5nYCwgYE51bWJlcmAsIGBPYmplY3RgLCBhbmQgYEFycmF5YC4gTm90ZSxcbiAgICogd2hlbiBhIHByb3BlcnR5IGNoYW5nZXMgYW5kIHRoZSBjb252ZXJ0ZXIgaXMgdXNlZCB0byB1cGRhdGUgdGhlIGF0dHJpYnV0ZSxcbiAgICogdGhlIHByb3BlcnR5IGlzIG5ldmVyIHVwZGF0ZWQgYWdhaW4gYXMgYSByZXN1bHQgb2YgdGhlIGF0dHJpYnV0ZSBjaGFuZ2luZyxcbiAgICogYW5kIHZpY2UgdmVyc2EuXG4gICAqL1xuICByZWFkb25seSBjb252ZXJ0ZXI/OiBBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSwgVHlwZUhpbnQ+O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHByb3BlcnR5IHNob3VsZCByZWZsZWN0IHRvIGFuIGF0dHJpYnV0ZS5cbiAgICogSWYgYHRydWVgLCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQsIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IHVzaW5nIHRoZVxuICAgKiBhdHRyaWJ1dGUgbmFtZSBkZXRlcm1pbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgZm9yIHRoZSBgYXR0cmlidXRlYFxuICAgKiBwcm9wZXJ0eSBvcHRpb24gYW5kIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgY29udmVydGVkIHVzaW5nIHRoZSBydWxlc1xuICAgKiBmcm9tIHRoZSBgY29udmVydGVyYCBwcm9wZXJ0eSBvcHRpb24uXG4gICAqL1xuICByZWFkb25seSByZWZsZWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGluZGljYXRlcyBpZiBhIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkIGNoYW5nZWQgd2hlblxuICAgKiBpdCBpcyBzZXQuIFRoZSBmdW5jdGlvbiBzaG91bGQgdGFrZSB0aGUgYG5ld1ZhbHVlYCBhbmQgYG9sZFZhbHVlYCBhbmRcbiAgICogcmV0dXJuIGB0cnVlYCBpZiBhbiB1cGRhdGUgc2hvdWxkIGJlIHJlcXVlc3RlZC5cbiAgICovXG4gIGhhc0NoYW5nZWQ/KHZhbHVlOiBUeXBlLCBvbGRWYWx1ZTogVHlwZSk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGFuIGFjY2Vzc29yIHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhpcyBwcm9wZXJ0eS4gQnlcbiAgICogZGVmYXVsdCwgYW4gYWNjZXNzb3Igd2lsbCBiZSBnZW5lcmF0ZWQgZm9yIHRoaXMgcHJvcGVydHkgdGhhdCByZXF1ZXN0cyBhblxuICAgKiB1cGRhdGUgd2hlbiBzZXQuIElmIHRoaXMgZmxhZyBpcyBgdHJ1ZWAsIG5vIGFjY2Vzc29yIHdpbGwgYmUgY3JlYXRlZCwgYW5kXG4gICAqIGl0IHdpbGwgYmUgdGhlIHVzZXIncyByZXNwb25zaWJpbGl0eSB0byBjYWxsXG4gICAqIGB0aGlzLnJlcXVlc3RVcGRhdGUocHJvcGVydHlOYW1lLCBvbGRWYWx1ZSlgIHRvIHJlcXVlc3QgYW4gdXBkYXRlIHdoZW5cbiAgICogdGhlIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqL1xuICByZWFkb25seSBub0FjY2Vzc29yPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBNYXAgb2YgcHJvcGVydGllcyB0byBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuIEZvciBlYWNoIHByb3BlcnR5IGFuXG4gKiBhY2Nlc3NvciBpcyBtYWRlLCBhbmQgdGhlIHByb3BlcnR5IGlzIHByb2Nlc3NlZCBhY2NvcmRpbmcgdG8gdGhlXG4gKiBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICByZWFkb25seSBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURlY2xhcmF0aW9uO1xufVxuXG50eXBlIFByb3BlcnR5RGVjbGFyYXRpb25NYXAgPSBNYXA8UHJvcGVydHlLZXksIFByb3BlcnR5RGVjbGFyYXRpb24+O1xuXG50eXBlIEF0dHJpYnV0ZU1hcCA9IE1hcDxzdHJpbmcsIFByb3BlcnR5S2V5PjtcblxuLyoqXG4gKiBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlcy4gVGFrZXMgYW4gb3B0aW9uYWwgZ2VuZXJpY1xuICogaW50ZXJmYWNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGRlY2xhcmVkIGVsZW1lbnQgcHJvcGVydGllcy5cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgUHJvcGVydHlWYWx1ZXM8VCA9IGFueT4gPVxuICAgIGtleW9mIFQgZXh0ZW5kcyBQcm9wZXJ0eUtleSA/IE1hcDxrZXlvZiBULCB1bmtub3duPjogbmV2ZXI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyOiBDb21wbGV4QXR0cmlidXRlQ29udmVydGVyID0ge1xuXG4gIHRvQXR0cmlidXRlKHZhbHVlOiB1bmtub3duLCB0eXBlPzogdW5rbm93bik6IHVua25vd24ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICByZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG4gICAgICBjYXNlIE9iamVjdDpcbiAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgZnJvbUF0dHJpYnV0ZSh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU/OiB1bmtub3duKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUhKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFzQ2hhbmdlZCB7XG4gICh2YWx1ZTogdW5rbm93biwgb2xkOiB1bmtub3duKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsOiBIYXNDaGFuZ2VkID0gKHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24pOiBib29sZWFuID0+IHtcbiAgLy8gVGhpcyBlbnN1cmVzIChvbGQ9PU5hTiwgdmFsdWU9PU5hTikgYWx3YXlzIHJldHVybnMgZmFsc2VcbiAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjogUHJvcGVydHlEZWNsYXJhdGlvbiA9IHtcbiAgYXR0cmlidXRlOiB0cnVlLFxuICB0eXBlOiBTdHJpbmcsXG4gIGNvbnZlcnRlcjogZGVmYXVsdENvbnZlcnRlcixcbiAgcmVmbGVjdDogZmFsc2UsXG4gIGhhc0NoYW5nZWQ6IG5vdEVxdWFsXG59O1xuXG5jb25zdCBTVEFURV9IQVNfVVBEQVRFRCA9IDE7XG5jb25zdCBTVEFURV9VUERBVEVfUkVRVUVTVEVEID0gMSA8PCAyO1xuY29uc3QgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUgPSAxIDw8IDM7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZID0gMSA8PCA0O1xudHlwZSBVcGRhdGVTdGF0ZSA9IHR5cGVvZiBTVEFURV9IQVNfVVBEQVRFRHx0eXBlb2YgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRHxcbiAgICB0eXBlb2YgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEV8XG4gICAgdHlwZW9mIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFk7XG5cbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuXG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVcGRhdGluZ0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIC8qXG4gICAqIER1ZSB0byBjbG9zdXJlIGNvbXBpbGVyIEVTNiBjb21waWxhdGlvbiBidWdzLCBAbm9jb2xsYXBzZSBpcyByZXF1aXJlZCBvblxuICAgKiBhbGwgc3RhdGljIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgd2l0aCBpbml0aWFsaXplcnMuICBSZWZlcmVuY2U6XG4gICAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8xNzc2XG4gICAqL1xuXG4gIC8qKlxuICAgKiBNYXBzIGF0dHJpYnV0ZSBuYW1lcyB0byBwcm9wZXJ0aWVzOyBmb3IgZXhhbXBsZSBgZm9vYmFyYCBhdHRyaWJ1dGUgdG9cbiAgICogYGZvb0JhcmAgcHJvcGVydHkuIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlXG4gICAqIGNsYXNzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXA6IEF0dHJpYnV0ZU1hcDtcblxuICAvKipcbiAgICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljW2ZpbmFsaXplZF0gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBjbGFzcyBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAgICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfY2xhc3NQcm9wZXJ0aWVzPzogUHJvcGVydHlEZWNsYXJhdGlvbk1hcDtcblxuICAvKipcbiAgICogVXNlci1zdXBwbGllZCBvYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIGBQcm9wZXJ0eURlY2xhcmF0aW9uYFxuICAgKiBvYmplY3RzIGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIHByb3BlcnR5LlxuICAgKi9cbiAgc3RhdGljIHByb3BlcnRpZXM6IFByb3BlcnR5RGVjbGFyYXRpb25zO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMhLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgdik7XG4gICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGUgcHJpdmF0ZSBgX2NsYXNzUHJvcGVydGllc2AgcHJvcGVydHkgbWV0YWRhdGEgaXMgY3JlYXRlZC5cbiAgICogSW4gYWRkaXRpb24gdG8gYGZpbmFsaXplYCB0aGlzIGlzIGFsc28gY2FsbGVkIGluIGBjcmVhdGVQcm9wZXJ0eWAgdG9cbiAgICogZW5zdXJlIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgY2FuIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICovXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwcml2YXRlIHN0YXRpYyBfZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCkge1xuICAgIC8vIGVuc3VyZSBwcml2YXRlIHN0b3JhZ2UgZm9yIHByb3BlcnR5IGRlY2xhcmF0aW9ucy5cbiAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoXG4gICAgICAgICAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfY2xhc3NQcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAvLyBOT1RFOiBXb3JrYXJvdW5kIElFMTEgbm90IHN1cHBvcnRpbmcgTWFwIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICAgICAgY29uc3Qgc3VwZXJQcm9wZXJ0aWVzOiBQcm9wZXJ0eURlY2xhcmF0aW9uTWFwID1cbiAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2NsYXNzUHJvcGVydGllcztcbiAgICAgIGlmIChzdXBlclByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlclByb3BlcnRpZXMuZm9yRWFjaChcbiAgICAgICAgICAgICh2OiBQcm9wZXJ0eURlY2xhcmF0aW9uLCBrOiBQcm9wZXJ0eUtleSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMhLnNldChrLCB2KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAqIGFuZCBzdG9yZXMgYSBQcm9wZXJ0eURlY2xhcmF0aW9uIGZvciB0aGUgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICogVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgcHJvcGVydHkgb3B0aW9uXG4gICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICogYW4gdXBkYXRlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICogd2hlbiBkb2luZyBzbywgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgc3VwZXIuY3JlYXRlUHJvcGVydHlgIHRvIGVuc3VyZVxuICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICogVG8gY3VzdG9taXplIHdoYXQgcHJvcGVydGllcyBkbyB3aGVuIHRoZXkgYXJlIGdldCBvciBzZXQsIG92ZXJyaWRlXG4gICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICpcbiAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICogfVxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIHN0b3JhZ2UgZXhpc3RzIGZvciBwcm9wZXJ0eVxuICAgIC8vIG1ldGFkYXRhLlxuICAgIHRoaXMuX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpO1xuICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcyEuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgIGlmIChvcHRpb25zLm5vQWNjZXNzb3IgfHwgdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICogSWYgbm8gZGVzY3JpcHRvciBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgbm90IGJlY29tZSBhbiBhY2Nlc3Nvci5cbiAgICogRm9yIGV4YW1wbGUsXG4gICAqXG4gICAqICAgY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAqICAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgKiAgICAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRvciA9XG4gICAqICAgICAgICAgICBzdXBlci5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICogICAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgKiAgICAgICByZXR1cm4ge1xuICAgKiAgICAgICAgIGdldDogZGVmYXVsdERlc2NyaXB0b3IuZ2V0LFxuICAgKiAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgKiAgICAgICAgICAgc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgKiAgICAgICAgICAgLy8gY3VzdG9tIGFjdGlvbi5cbiAgICogICAgICAgICB9LFxuICAgKiAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICogICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICogICB9XG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIG5hbWU6IFByb3BlcnR5S2V5LCBrZXk6IHN0cmluZ3xzeW1ib2wsIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgIGdldCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gKHRoaXMgYXMge1trZXk6IHN0cmluZ106IHVua25vd259KVtrZXkgYXMgc3RyaW5nXTtcbiAgICAgIH0sXG4gICAgICBzZXQodGhpczogVXBkYXRpbmdFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9XG4gICAgICAgICAgICAodGhpcyBhcyB7fSBhcyB7W2tleTogc3RyaW5nXTogdW5rbm93bn0pW25hbWUgYXMgc3RyaW5nXTtcbiAgICAgICAgKHRoaXMgYXMge30gYXMge1trZXk6IHN0cmluZ106IHVua25vd259KVtrZXkgYXMgc3RyaW5nXSA9IHZhbHVlO1xuICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFVwZGF0aW5nRWxlbWVudClcbiAgICAgICAgICAgIC5yZXF1ZXN0VXBkYXRlSW50ZXJuYWwobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICogVGhlc2Ugb3B0aW9ucyBhcmUgZGVmaW5lZCB3aXRoIGEgUHJvcGVydHlEZWNsYXJhdGlvbiB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICogYGNyZWF0ZVByb3BlcnR5KC4uLilgLlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgKiBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gcHJvcGVydHksIG92ZXJyaWRlIGBjcmVhdGVQcm9wZXJ0eWAuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZTogUHJvcGVydHlLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NQcm9wZXJ0aWVzICYmIHRoaXMuX2NsYXNzUHJvcGVydGllcy5nZXQobmFtZSkgfHxcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcyBhbmQgZW5zdXJlc1xuICAgKiBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICBpZiAoIXN1cGVyQ3Rvci5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICB9XG4gICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICB0aGlzLl9lbnN1cmVDbGFzc1Byb3BlcnRpZXMoKTtcbiAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgdGhpcy5fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgLi4uKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSA6XG4gICAgICAgICAgICBbXVxuICAgICAgXTtcbiAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIChwcm9wcyBhcyBhbnkpW3BdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGdpdmVuIGF0dHJpYnV0ZSBgbmFtZWAuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZSA/XG4gICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgYXR0cmlidXRlIDpcbiAgICAgICAgICAgICAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogdW5kZWZpbmVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgcHJvcGVydHkgc2hvdWxkIHJlcXVlc3QgYW4gdXBkYXRlLlxuICAgKiBDYWxsZWQgd2hlbiBhIHByb3BlcnR5IHZhbHVlIGlzIHNldCBhbmQgdXNlcyB0aGUgYGhhc0NoYW5nZWRgXG4gICAqIG9wdGlvbiBmb3IgdGhlIHByb3BlcnR5IGlmIHByZXNlbnQgb3IgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2suXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfdmFsdWVIYXNDaGFuZ2VkKFxuICAgICAgdmFsdWU6IHVua25vd24sIG9sZDogdW5rbm93biwgaGFzQ2hhbmdlZDogSGFzQ2hhbmdlZCA9IG5vdEVxdWFsKSB7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQodmFsdWUsIG9sZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgdmFsdWUuXG4gICAqIENhbGxlZCB2aWEgdGhlIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIGFuZCB1c2VzIHRoZSBwcm9wZXJ0eSdzXG4gICAqIGBjb252ZXJ0ZXJgIG9yIGBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9uLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5VmFsdWVGcm9tQXR0cmlidXRlKFxuICAgICAgdmFsdWU6IHN0cmluZ3xudWxsLCBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlciB8fCBkZWZhdWx0Q29udmVydGVyO1xuICAgIGNvbnN0IGZyb21BdHRyaWJ1dGUgPVxuICAgICAgICAodHlwZW9mIGNvbnZlcnRlciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnZlcnRlciA6IGNvbnZlcnRlci5mcm9tQXR0cmlidXRlKTtcbiAgICByZXR1cm4gZnJvbUF0dHJpYnV0ZSA/IGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUuIElmIHRoaXNcbiAgICogcmV0dXJucyB1bmRlZmluZWQsIHRoZSBwcm9wZXJ0eSB3aWxsICpub3QqIGJlIHJlZmxlY3RlZCB0byBhbiBhdHRyaWJ1dGUuXG4gICAqIElmIHRoaXMgcmV0dXJucyBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCwgb3RoZXJ3aXNlIHRoZVxuICAgKiBhdHRyaWJ1dGUgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlLlxuICAgKiBUaGlzIHVzZXMgdGhlIHByb3BlcnR5J3MgYHJlZmxlY3RgIGFuZCBgdHlwZS50b0F0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9ucy5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eVZhbHVlVG9BdHRyaWJ1dGUoXG4gICAgICB2YWx1ZTogdW5rbm93biwgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgIGNvbnN0IHRvQXR0cmlidXRlID1cbiAgICAgICAgY29udmVydGVyICYmIChjb252ZXJ0ZXIgYXMgQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlcikudG9BdHRyaWJ1dGUgfHxcbiAgICAgICAgZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZTtcbiAgICByZXR1cm4gdG9BdHRyaWJ1dGUhKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlITogVXBkYXRlU3RhdGU7XG4gIHByaXZhdGUgX2luc3RhbmNlUHJvcGVydGllcz86IFByb3BlcnR5VmFsdWVzO1xuICAvLyBJbml0aWFsaXplIHRvIGFuIHVucmVzb2x2ZWQgUHJvbWlzZSBzbyB3ZSBjYW4gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGhhc1xuICAvLyBjb25uZWN0ZWQgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgcHJpdmF0ZSBfdXBkYXRlUHJvbWlzZSE6IFByb21pc2U8dW5rbm93bj47XG4gIHByaXZhdGUgX2VuYWJsZVVwZGF0aW5nUmVzb2x2ZXI6ICgoKSA9PiB2b2lkKXx1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgZm9yIGFueSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAqIHVwZGF0ZSBjeWNsZSB3aXRoIHByZXZpb3VzIHZhbHVlcy5cbiAgICovXG4gIHByaXZhdGUgX2NoYW5nZWRQcm9wZXJ0aWVzITogUHJvcGVydHlWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgd2hlbiB1cGRhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmbGVjdGluZ1Byb3BlcnRpZXM/OiBNYXA8UHJvcGVydHlLZXksIFByb3BlcnR5RGVjbGFyYXRpb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQnkgZGVmYXVsdCBjYXB0dXJlcyBhbnkgcHJlLXNldCB2YWx1ZXMgZm9yXG4gICAqIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gMDtcbiAgICB0aGlzLl91cGRhdGVQcm9taXNlID1cbiAgICAgICAgbmV3IFByb21pc2UoKHJlcykgPT4gdGhpcy5fZW5hYmxlVXBkYXRpbmdSZXNvbHZlciA9IHJlcyk7XG4gICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGVJbnRlcm5hbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAqL1xuICBwcml2YXRlIF9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAuX2NsYXNzUHJvcGVydGllcyEuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW3AgYXMga2V5b2YgdGhpc107XG4gICAgICAgICAgICBkZWxldGUgdGhpc1twIGFzIGtleW9mIHRoaXNdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHByZXZpb3VzbHkgc2F2ZWQgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICovXG4gIHByaXZhdGUgX2FwcGx5SW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzIS5mb3JFYWNoKCh2LCBwKSA9PiAodGhpcyBhcyBhbnkpW3BdID0gdik7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gRW5zdXJlIGZpcnN0IGNvbm5lY3Rpb24gY29tcGxldGVzIGFuIHVwZGF0ZS4gVXBkYXRlcyBjYW5ub3QgY29tcGxldGVcbiAgICAvLyBiZWZvcmUgY29ubmVjdGlvbi5cbiAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW5hYmxlVXBkYXRpbmcoKSB7XG4gICAgaWYgKHRoaXMuX2VuYWJsZVVwZGF0aW5nUmVzb2x2ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZW5hYmxlVXBkYXRpbmdSZXNvbHZlcigpO1xuICAgICAgdGhpcy5fZW5hYmxlVXBkYXRpbmdSZXNvbHZlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIGZvciBgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgaW4gZXh0ZW5zaW9ucyB3aGlsZVxuICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZDogc3RyaW5nfG51bGwsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9wZXJ0eVRvQXR0cmlidXRlKFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksIHZhbHVlOiB1bmtub3duLFxuICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IGF0dHIgPSBjdG9yLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gY3Rvci5fcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIC8vIGFuIHVuZGVmaW5lZCB2YWx1ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlIGF0dHJpYnV0ZS5cbiAgICAgIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlIGlmIGl0IHdhc1xuICAgIC8vIGp1c3Qgc2V0IGZyb20gYSBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIC8vIE5vdGUsIGhpbnQgdGhpcyBhcyBhbiBgQXR0cmlidXRlTWFwYCBzbyBjbG9zdXJlIGNsZWFybHkgdW5kZXJzdGFuZHNcbiAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgIGNvbnN0IHByb3BOYW1lID0gKGN0b3IuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgYXMgQXR0cmlidXRlTWFwKS5nZXQobmFtZSk7XG4gICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZO1xuICAgICAgdGhpc1twcm9wTmFtZSBhcyBrZXlvZiB0aGlzXSA9XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgIGN0b3IuX3Byb3BlcnR5VmFsdWVGcm9tQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKSBhcyBhbnk7XG4gICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlICYgflNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvdGVjdGVkIHZlcnNpb24gb2YgYHJlcXVlc3RVcGRhdGVgIGRvZXMgbm90IGFjY2VzcyBvciByZXR1cm4gdGhlXG4gICAqIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS4gVGhpcyBwcm9taXNlIGNhbiBiZSBvdmVycmlkZGVuIGFuZCBpcyB0aGVyZWZvcmVcbiAgICogbm90IGZyZWUgdG8gYWNjZXNzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlcXVlc3RVcGRhdGVJbnRlcm5hbChcbiAgICAgIG5hbWU/OiBQcm9wZXJ0eUtleSwgb2xkVmFsdWU/OiB1bmtub3duLCBvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50O1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICBpZiAoY3Rvci5fdmFsdWVIYXNDaGFuZ2VkKFxuICAgICAgICAgICAgICB0aGlzW25hbWUgYXMga2V5b2YgdGhpc10sIG9sZFZhbHVlLCBvcHRpb25zLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZSAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLl91cGRhdGVQcm9taXNlID0gdGhpcy5fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZFxuICAgKiBiZSBjYWxsZWQgd2hlbiBhbiBlbGVtZW50IHNob3VsZCB1cGRhdGUgYmFzZWQgb24gc29tZSBzdGF0ZSBub3QgdHJpZ2dlcmVkXG4gICAqIGJ5IHNldHRpbmcgYSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAqIHByb3BlcnR5IGBuYW1lYCBhbmQgYG9sZFZhbHVlYCB0byBlbnN1cmUgdGhhdCBhbnkgY29uZmlndXJlZCBwcm9wZXJ0eVxuICAgKiBvcHRpb25zIGFyZSBob25vcmVkLiBSZXR1cm5zIHRoZSBgdXBkYXRlQ29tcGxldGVgIFByb21pc2Ugd2hpY2ggaXMgcmVzb2x2ZWRcbiAgICogd2hlbiB0aGUgdXBkYXRlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUge1Byb3BlcnR5S2V5fSAob3B0aW9uYWwpIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gb2xkVmFsdWUge2FueX0gKG9wdGlvbmFsKSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBQcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgdXBkYXRlIGNvbXBsZXRlcy5cbiAgICovXG4gIHJlcXVlc3RVcGRhdGUobmFtZT86IFByb3BlcnR5S2V5LCBvbGRWYWx1ZT86IHVua25vd24pIHtcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGVJbnRlcm5hbChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSB1cGRhdGUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9lbnF1ZXVlVXBkYXRlKCkge1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9VUERBVEVfUkVRVUVTVEVEO1xuICAgIHRyeSB7XG4gICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICBhd2FpdCB0aGlzLl91cGRhdGVQcm9taXNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElnbm9yZSBhbnkgcHJldmlvdXMgZXJyb3JzLiBXZSBvbmx5IGNhcmUgdGhhdCB0aGUgcHJldmlvdXMgY3ljbGUgaXNcbiAgICAgIC8vIGRvbmUuIEFueSBlcnJvciBzaG91bGQgaGF2ZSBiZWVuIGhhbmRsZWQgaW4gdGhlIHByZXZpb3VzIHVwZGF0ZS5cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgLy8gSWYgYHBlcmZvcm1VcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAvLyBjaGVja2VkIHRvIGF2b2lkIGRlbGF5aW5nIGFuIGFkZGl0aW9uYWwgbWljcm90YXNrIHVubGVzcyB3ZSBuZWVkIHRvLlxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9oYXNSZXF1ZXN0ZWRVcGRhdGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX1VQREFURV9SRVFVRVNURUQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBoYXNVcGRhdGVkKCkge1xuICAgIHJldHVybiAodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9IQVNfVVBEQVRFRCk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgKlxuICAgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgdGltaW5nIG9mIHVwZGF0ZXMuIElmIHRoaXNcbiAgICogbWV0aG9kIGlzIG92ZXJyaWRkZW4sIGBzdXBlci5wZXJmb3JtVXBkYXRlKClgIG11c3QgYmUgY2FsbGVkLlxuICAgKlxuICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBwcm90ZWN0ZWQgYXN5bmMgcGVyZm9ybVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICogICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSkpO1xuICAgKiAgIHN1cGVyLnBlcmZvcm1VcGRhdGUoKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHByb3RlY3RlZCBwZXJmb3JtVXBkYXRlKCk6IHZvaWR8UHJvbWlzZTx1bmtub3duPiB7XG4gICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAvLyB0aGUgdXBkYXRlLlxuICAgIGlmICghdGhpcy5faGFzUmVxdWVzdGVkVXBkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICBpZiAodGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICB0aGlzLl9hcHBseUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgIH1cbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcztcbiAgICB0cnkge1xuICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYXJrVXBkYXRlZCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICB0aGlzLl9tYXJrVXBkYXRlZCgpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgaWYgKCEodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9IQVNfVVBEQVRFRCkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0hBU19VUERBVEVEO1xuICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtVcGRhdGVkKCkge1xuICAgIHRoaXMuX2NoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfVVBEQVRFX1JFUVVFU1RFRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGNvbXBsZXRlZCB1cGRhdGluZy5cbiAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICogYSBwcm9wZXJ0eSB3YXMgc2V0IGluc2lkZSBgdXBkYXRlZCgpYC4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGFuXG4gICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgKlxuICAgKiBUbyBhd2FpdCBhZGRpdGlvbmFsIGFzeW5jaHJvbm91cyB3b3JrLCBvdmVycmlkZSB0aGUgYF9nZXRVcGRhdGVDb21wbGV0ZWBcbiAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICogYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgKiBgc3VwZXIuX2dldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlXG4gICAqIHVwZGF0ZSByZXNvbHZlZCB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAqL1xuICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAqXG4gICAqIEl0IGlzIG5vdCBzYWZlIHRvIG92ZXJyaWRlIHRoZSBgdXBkYXRlQ29tcGxldGVgIGdldHRlciBkaXJlY3RseSBkdWUgdG8gYVxuICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAqIGxhbmd1YWdlIGlzIEVTNSAoaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zMzgpLlxuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogICBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICogICAgIGFzeW5jIF9nZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICogICAgICAgYXdhaXQgc3VwZXIuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAqICAgICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICogYW5vdGhlciB1cGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIGlmICh0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNpemUgPiAwKSB7XG4gICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3JcbiAgICAgIC8vIGxvb3BzIGV4cGVjdGluZyBhcnJheXNcbiAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goXG4gICAgICAgICAgKHYsIGspID0+IHRoaXMuX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trIGFzIGtleW9mIHRoaXNdLCB2KSk7XG4gICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fbWFya1VwZGF0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICpcbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICpcbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUgW1tgTGl0RWxlbWVudGBdXSBiYXNlIGNsYXNzIGFuZFxuICogcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQgW1tgTGl0RWxlbWVudGBdXSBhbmQgW1tgaHRtbGBdXSBmcm9tIHRoaXMgbW9kdWxlIHRvIGNyZWF0ZSBhXG4gKiBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIFtbYFVwZGF0aW5nRWxlbWVudGBdXSBhbmQgYWRkcyBsaXQtaHRtbCB0ZW1wbGF0aW5nLlxuICogVGhlIGBVcGRhdGluZ0VsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG8gYnVpbGRcbiAqIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7cmVuZGVyLCBTaGFkeVJlbmRlck9wdGlvbnN9IGZyb20gJ2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXIuanMnO1xuXG5pbXBvcnQge1Byb3BlcnR5VmFsdWVzLCBVcGRhdGluZ0VsZW1lbnR9IGZyb20gJy4vbGliL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlY29yYXRvcnMuanMnO1xuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0LCBTVkdUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuaW1wb3J0IHtzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsIENTU1Jlc3VsdCwgdW5zYWZlQ1NTfSBmcm9tICcuL2xpYi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2Nzcy10YWcuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxpdEVsZW1lbnRWZXJzaW9uczogc3RyaW5nW107XG4gIH1cbn1cblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbih3aW5kb3dbJ2xpdEVsZW1lbnRWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEVsZW1lbnRWZXJzaW9ucyddID0gW10pKVxuICAgIC5wdXNoKCcyLjQuMCcpO1xuXG5leHBvcnQgdHlwZSBDU1NSZXN1bHRPck5hdGl2ZSA9IENTU1Jlc3VsdHxDU1NTdHlsZVNoZWV0O1xuXG5leHBvcnQgaW50ZXJmYWNlIENTU1Jlc3VsdEFycmF5IGV4dGVuZHNcbiAgICBBcnJheTxDU1NSZXN1bHRPck5hdGl2ZXxDU1NSZXN1bHRBcnJheT4ge31cblxuLyoqXG4gKiBTZW50aW5hbCB2YWx1ZSB1c2VkIHRvIGF2b2lkIGNhbGxpbmcgbGl0LWh0bWwncyByZW5kZXIgZnVuY3Rpb24gd2hlblxuICogc3ViY2xhc3NlcyBkbyBub3QgaW1wbGVtZW50IGByZW5kZXJgXG4gKi9cbmNvbnN0IHJlbmRlck5vdEltcGxlbWVudGVkID0ge307XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIFtbYHByb3BlcnRpZXNgXV0gcHJvcGVydHkgb3IgdGhlIFtbYHByb3BlcnR5YF1dIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICAvKipcbiAgICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICAgKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICAgKlxuICAgKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAgICogb3B0aW1pemF0aW9ucy4gU2VlIHVwZGF0aW5nLWVsZW1lbnQudHMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljWydmaW5hbGl6ZWQnXSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBsaWJyYXJ5IG1ldGhvZCB1c2VkIHRvIHJlbmRlciB0aGUgZWxlbWVudCdzXG4gICAqIERPTS4gQnkgZGVmYXVsdCwgcG9pbnRzIHRvIHRoZSBgcmVuZGVyYCBtZXRob2QgZnJvbSBsaXQtaHRtbCdzIHNoYWR5LXJlbmRlclxuICAgKiBtb2R1bGUuXG4gICAqXG4gICAqICoqTW9zdCB1c2VycyB3aWxsIG5ldmVyIG5lZWQgdG8gdG91Y2ggdGhpcyBwcm9wZXJ0eS4qKlxuICAgKlxuICAgKiBUaGlzICBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbmZ1c2VkIHdpdGggdGhlIGByZW5kZXJgIGluc3RhbmNlIG1ldGhvZCxcbiAgICogd2hpY2ggc2hvdWxkIGJlIG92ZXJyaWRkZW4gdG8gZGVmaW5lIGEgdGVtcGxhdGUgZm9yIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBBZHZhbmNlZCB1c2VycyBjcmVhdGluZyBhIG5ldyBiYXNlIGNsYXNzIGJhc2VkIG9uIExpdEVsZW1lbnQgY2FuIG92ZXJyaWRlXG4gICAqIHRoaXMgcHJvcGVydHkgdG8gcG9pbnQgdG8gYSBjdXN0b20gcmVuZGVyIG1ldGhvZCB3aXRoIGEgc2lnbmF0dXJlIHRoYXRcbiAgICogbWF0Y2hlcyBbc2hhZHktcmVuZGVyJ3MgYHJlbmRlcmBcbiAgICogbWV0aG9kXShodHRwczovL2xpdC1odG1sLnBvbHltZXItcHJvamVjdC5vcmcvYXBpL21vZHVsZXMvc2hhZHlfcmVuZGVyLmh0bWwjcmVuZGVyKS5cbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyByZW5kZXI6XG4gICAgICAocmVzdWx0OiB1bmtub3duLCBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICBvcHRpb25zOiBTaGFkeVJlbmRlck9wdGlvbnMpID0+IHZvaWQgPSByZW5kZXI7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC4gVGhlIHN0eWxlcyBzaG91bGQgYmUgZGVmaW5lZFxuICAgKiB1c2luZyB0aGUgW1tgY3NzYF1dIHRhZyBmdW5jdGlvbiBvciB2aWEgY29uc3RydWN0aWJsZSBzdHlsZXNoZWV0cy5cbiAgICovXG4gIHN0YXRpYyBzdHlsZXM/OiBDU1NSZXN1bHRPck5hdGl2ZXxDU1NSZXN1bHRBcnJheTtcblxuICBwcml2YXRlIHN0YXRpYyBfc3R5bGVzOiBBcnJheTxDU1NSZXN1bHRPck5hdGl2ZXxDU1NSZXN1bHQ+fHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGludGVncmF0ZSBpbnRvIGEgc3R5bGUgbWFuYWdlbWVudCBzeXN0ZW0uXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgZ2V0U3R5bGVzKCk6IENTU1Jlc3VsdE9yTmF0aXZlfENTU1Jlc3VsdEFycmF5fHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVzO1xuICB9XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHByaXZhdGUgc3RhdGljIF9nZXRVbmlxdWVTdHlsZXMoKSB7XG4gICAgLy8gT25seSBnYXRoZXIgc3R5bGVzIG9uY2UgcGVyIGNsYXNzXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX3N0eWxlcycsIHRoaXMpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUYWtlIGNhcmUgbm90IHRvIGNhbGwgYHRoaXMuZ2V0U3R5bGVzKClgIG11bHRpcGxlIHRpbWVzIHNpbmNlIHRoaXNcbiAgICAvLyBnZW5lcmF0ZXMgbmV3IENTU1Jlc3VsdHMgZWFjaCB0aW1lLlxuICAgIC8vIFRPRE8oc29ydmVsbCk6IFNpbmNlIHdlIGRvIG5vdCBjYWNoZSBDU1NSZXN1bHRzIGJ5IGlucHV0LCBhbnlcbiAgICAvLyBzaGFyZWQgc3R5bGVzIHdpbGwgZ2VuZXJhdGUgbmV3IHN0eWxlc2hlZXQgb2JqZWN0cywgd2hpY2ggaXMgd2FzdGVmdWwuXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgYWRkcmVzc2VkIHdoZW4gYSBicm93c2VyIHNoaXBzIGNvbnN0cnVjdGFibGVcbiAgICAvLyBzdHlsZXNoZWV0cy5cbiAgICBjb25zdCB1c2VyU3R5bGVzID0gdGhpcy5nZXRTdHlsZXMoKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJTdHlsZXMpKSB7XG4gICAgICAvLyBEZS1kdXBsaWNhdGUgc3R5bGVzIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgc2V0LlxuICAgICAgLy8gVGhpcyBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxlcyB0aGF0IGNhblxuICAgICAgLy8gb2NjdXIgZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuXG4gICAgICAvLyBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG8gdHJ5IHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlXG4gICAgICAvLyBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudCB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlXG4gICAgICAvLyBwcmV2aW91cyBzdHlsZXMuXG4gICAgICBjb25zdCBhZGRTdHlsZXMgPSAoc3R5bGVzOiBDU1NSZXN1bHRBcnJheSwgc2V0OiBTZXQ8Q1NTUmVzdWx0T3JOYXRpdmU+KTpcbiAgICAgICAgICBTZXQ8Q1NTUmVzdWx0T3JOYXRpdmU+ID0+IHN0eWxlcy5yZWR1Y2VSaWdodChcbiAgICAgICAgICAgICAgKHNldDogU2V0PENTU1Jlc3VsdE9yTmF0aXZlPiwgcykgPT5cbiAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IE9uIElFIHNldC5hZGQoKSBkb2VzIG5vdCByZXR1cm4gdGhlIHNldFxuICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHMpID8gYWRkU3R5bGVzKHMsIHNldCkgOiAoc2V0LmFkZChzKSwgc2V0KSxcbiAgICAgICAgICAgICAgc2V0KTtcbiAgICAgIC8vIEFycmF5LmZyb20gZG9lcyBub3Qgd29yayBvbiBTZXQgaW4gSUUsIG90aGVyd2lzZSByZXR1cm5cbiAgICAgIC8vIEFycmF5LmZyb20oYWRkU3R5bGVzKHVzZXJTdHlsZXMsIG5ldyBTZXQ8Q1NTUmVzdWx0PigpKSkucmV2ZXJzZSgpXG4gICAgICBjb25zdCBzZXQgPSBhZGRTdHlsZXModXNlclN0eWxlcywgbmV3IFNldDxDU1NSZXN1bHRPck5hdGl2ZT4oKSk7XG4gICAgICBjb25zdCBzdHlsZXM6IENTU1Jlc3VsdE9yTmF0aXZlW10gPSBbXTtcbiAgICAgIHNldC5mb3JFYWNoKCh2KSA9PiBzdHlsZXMudW5zaGlmdCh2KSk7XG4gICAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0eWxlcyA9IHVzZXJTdHlsZXMgPT09IHVuZGVmaW5lZCA/IFtdIDogW3VzZXJTdHlsZXNdO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGF0IHRoZXJlIGFyZSBubyBpbnZhbGlkIENTU1N0eWxlU2hlZXQgaW5zdGFuY2VzIGhlcmUuIFRoZXkgYXJlXG4gICAgLy8gaW52YWxpZCBpbiB0d28gY29uZGl0aW9ucy5cbiAgICAvLyAoMSkgdGhlIHNoZWV0IGlzIG5vbi1jb25zdHJ1Y3RpYmxlIChgc2hlZXRgIG9mIGEgSFRNTFN0eWxlRWxlbWVudCksIGJ1dFxuICAgIC8vICAgICB0aGlzIGlzIGltcG9zc2libGUgdG8gY2hlY2sgZXhjZXB0IHZpYSAucmVwbGFjZVN5bmMgb3IgdXNlXG4gICAgLy8gKDIpIHRoZSBTaGFkeUNTUyBwb2x5ZmlsbCBpcyBlbmFibGVkICg6LiBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgaXNcbiAgICAvLyAgICAgZmFsc2UpXG4gICAgdGhpcy5fc3R5bGVzID0gdGhpcy5fc3R5bGVzLm1hcCgocykgPT4ge1xuICAgICAgaWYgKHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ICYmICFzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgLy8gRmxhdHRlbiB0aGUgY3NzVGV4dCBmcm9tIHRoZSBwYXNzZWQgY29uc3RydWN0aWJsZSBzdHlsZXNoZWV0IChvclxuICAgICAgICAvLyB1bmRldGVjdGFibGUgbm9uLWNvbnN0cnVjdGlibGUgc3R5bGVzaGVldCkuIFRoZSB1c2VyIG1pZ2h0IGhhdmVcbiAgICAgICAgLy8gZXhwZWN0ZWQgdG8gdXBkYXRlIHRoZWlyIHN0eWxlc2hlZXRzIG92ZXIgdGltZSwgYnV0IHRoZSBhbHRlcm5hdGl2ZVxuICAgICAgICAvLyBpcyBhIGNyYXNoLlxuICAgICAgICBjb25zdCBjc3NUZXh0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocy5jc3NSdWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChjc3MsIHJ1bGUpID0+IGNzcyArIHJ1bGUuY3NzVGV4dCwgJycpO1xuICAgICAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBOb2RlIG9yIFNoYWRvd1Jvb3QgaW50byB3aGljaCBlbGVtZW50IERPTSBzaG91bGQgYmUgcmVuZGVyZWQuIERlZmF1bHRzXG4gICAqIHRvIGFuIG9wZW4gc2hhZG93Um9vdC5cbiAgICovXG4gIHJlYWRvbmx5IHJlbmRlclJvb3QhOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQ7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGVsZW1lbnQgaW5pdGlhbGl6YXRpb24uIEJ5IGRlZmF1bHQgdGhpcyBjYWxsc1xuICAgKiBbW2BjcmVhdGVSZW5kZXJSb290YF1dIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBbW2ByZW5kZXJSb290YF1dIG5vZGUgYW5kXG4gICAqIGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBMaXRFbGVtZW50KS5fZ2V0VW5pcXVlU3R5bGVzKCk7XG4gICAgKHRoaXMgYXMge1xuICAgICAgcmVuZGVyUm9vdDogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50O1xuICAgIH0pLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAvLyBOb3RlLCBpZiByZW5kZXJSb290IGlzIG5vdCBhIHNoYWRvd1Jvb3QsIHN0eWxlcyB3b3VsZC9jb3VsZCBhcHBseSB0byB0aGVcbiAgICAvLyBlbGVtZW50J3MgZ2V0Um9vdE5vZGUoKS4gV2hpbGUgdGhpcyBjb3VsZCBiZSBkb25lLCB3ZSdyZSBjaG9vc2luZyBub3QgdG9cbiAgICAvLyBzdXBwb3J0IHRoaXMgbm93IHNpbmNlIGl0IHdvdWxkIHJlcXVpcmUgZGlmZmVyZW50IGxvZ2ljIGFyb3VuZCBkZS1kdXBpbmcuXG4gICAgaWYgKHdpbmRvdy5TaGFkb3dSb290ICYmIHRoaXMucmVuZGVyUm9vdCBpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KSB7XG4gICAgICB0aGlzLmFkb3B0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCk6IEVsZW1lbnR8U2hhZG93Um9vdCB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHN0eWxpbmcgdG8gdGhlIGVsZW1lbnQgc2hhZG93Um9vdCB1c2luZyB0aGUgW1tgc3R5bGVzYF1dXG4gICAqIHByb3BlcnR5LiBTdHlsaW5nIHdpbGwgYXBwbHkgdXNpbmcgYHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzYCB3aGVyZVxuICAgKiBhdmFpbGFibGUgYW5kIHdpbGwgZmFsbGJhY2sgb3RoZXJ3aXNlLiBXaGVuIFNoYWRvdyBET00gaXMgcG9seWZpbGxlZCxcbiAgICogU2hhZHlDU1Mgc2NvcGVzIHN0eWxlcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBkb2N1bWVudC4gV2hlbiBTaGFkb3cgRE9NXG4gICAqIGlzIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICAgKiBlbmQgb2YgdGhlIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlY1xuICAgKiBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAgICovXG4gIHByb3RlY3RlZCBhZG9wdFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl0RWxlbWVudCkuX3N0eWxlcyE7XG4gICAgaWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhlcmUgYXJlIHRocmVlIHNlcGFyYXRlIGNhc2VzIGhlcmUgYmFzZWQgb24gU2hhZG93IERPTSBzdXBwb3J0LlxuICAgIC8vICgxKSBzaGFkb3dSb290IHBvbHlmaWxsZWQ6IHVzZSBTaGFkeUNTU1xuICAgIC8vICgyKSBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyBhdmFpbGFibGU6IHVzZSBpdFxuICAgIC8vICgzKSBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyBwb2x5ZmlsbGVkOiBhcHBlbmQgc3R5bGVzIGFmdGVyXG4gICAgLy8gcmVuZGVyaW5nXG4gICAgaWYgKHdpbmRvdy5TaGFkeUNTUyAhPT0gdW5kZWZpbmVkICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSB7XG4gICAgICB3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0hLnByZXBhcmVBZG9wdGVkQ3NzVGV4dChcbiAgICAgICAgICBzdHlsZXMubWFwKChzKSA9PiBzLmNzc1RleHQpLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICh0aGlzLnJlbmRlclJvb3QgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzID1cbiAgICAgICAgICBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBtdXN0IGJlIGRvbmUgYWZ0ZXIgcmVuZGVyaW5nIHNvIHRoZSBhY3R1YWwgc3R5bGUgaW5zZXJ0aW9uIGlzIGRvbmVcbiAgICAgIC8vIGluIGB1cGRhdGVgLlxuICAgICAgdGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIE5vdGUsIGZpcnN0IHVwZGF0ZS9yZW5kZXIgaGFuZGxlcyBzdHlsZUVsZW1lbnQgc28gd2Ugb25seSBjYWxsIHRoaXMgaWZcbiAgICAvLyBjb25uZWN0ZWQgYWZ0ZXIgZmlyc3QgdXBkYXRlLlxuICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQgJiYgd2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgLy8gdXBkYXRlcyBhcmUgYWxsb3dlZCBhZnRlciBzdXBlci51cGRhdGUsIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHJlbmRlcmBcbiAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICBjb25zdCB0ZW1wbGF0ZVJlc3VsdCA9IHRoaXMucmVuZGVyKCk7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAvLyBJZiByZW5kZXIgaXMgbm90IGltcGxlbWVudGVkIGJ5IHRoZSBjb21wb25lbnQsIGRvbid0IGNhbGwgbGl0LWh0bWwgcmVuZGVyXG4gICAgaWYgKHRlbXBsYXRlUmVzdWx0ICE9PSByZW5kZXJOb3RJbXBsZW1lbnRlZCkge1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpXG4gICAgICAgICAgLnJlbmRlcihcbiAgICAgICAgICAgICAgdGVtcGxhdGVSZXN1bHQsXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCxcbiAgICAgICAgICAgICAge3Njb3BlTmFtZTogdGhpcy5sb2NhbE5hbWUsIGV2ZW50Q29udGV4dDogdGhpc30pO1xuICAgIH1cbiAgICAvLyBXaGVuIG5hdGl2ZSBTaGFkb3cgRE9NIGlzIHVzZWQgYnV0IGFkb3B0ZWRTdHlsZXMgYXJlIG5vdCBzdXBwb3J0ZWQsXG4gICAgLy8gaW5zZXJ0IHN0eWxpbmcgYWZ0ZXIgcmVuZGVyaW5nIHRvIGVuc3VyZSBhZG9wdGVkU3R5bGVzIGhhdmUgaGlnaGVzdFxuICAgIC8vIHByaW9yaXR5LlxuICAgIGlmICh0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IGZhbHNlO1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpLl9zdHlsZXMhLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgdGhpcy5yZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYE5vZGVQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAqIGBUZW1wbGF0ZVJlc3VsdGAuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAqIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCByZW5kZXIoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHJlbmRlck5vdEltcGxlbWVudGVkO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXJ9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgaW1wbGVtZW50cyBUZW1wbGF0ZVByb2Nlc3NvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAqL1xuICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10sXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKTogUmVhZG9ubHlBcnJheTxQYXJ0PiB7XG4gICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgIH1cbiAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBwYXJ0cyBmb3IgYSB0ZXh0LXBvc2l0aW9uIGJpbmRpbmcuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICovXG4gIGhhbmRsZVRleHRFeHByZXNzaW9uKG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IE5vZGVQYXJ0KG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgPSBuZXcgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcblxuY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBXZWFrTWFwPG9iamVjdCwgdHJ1ZT4oKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmludGVyZmFjZSBNYXliZVBvbHlmaWxsZWRDZSBleHRlbmRzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG4gIHJlYWRvbmx5IHBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzICE9IG51bGwgJiZcbiAgICAod2luZG93LmN1c3RvbUVsZW1lbnRzIGFzIE1heWJlUG9seWZpbGxlZENlKS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PVxuICAgICAgICB1bmRlZmluZWQ7XG5cbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksXG4gKiBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmUgYGJlZm9yZWAuIElmXG4gKiBgYmVmb3JlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGUgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSxcbiAgICAgc3RhcnQ6IE5vZGV8bnVsbCxcbiAgICAgZW5kOiBOb2RlfG51bGwgPSBudWxsLFxuICAgICBiZWZvcmU6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydCEubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc3RhcnQhLCBiZWZvcmUpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgICB9XG4gICAgfTtcblxuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksIGZyb21cbiAqIGBjb250YWluZXJgLlxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsIHN0YXJ0OiBOb2RlfG51bGwsIGVuZDogTm9kZXxudWxsID0gbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0IS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXJ0ISk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgIH1cbiAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSwgVGVtcGxhdGVQYXJ0fSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuY29uc3Qgd2Fsa2VyTm9kZUZpbHRlciA9IDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLztcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsaXN0IG9mIG5vZGVzIGZyb20gYSBUZW1wbGF0ZSBzYWZlbHkuIEluIGFkZGl0aW9uIHRvIHJlbW92aW5nXG4gKiBub2RlcyBmcm9tIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaFxuICogdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICpcbiAqIEFzIHRoZSB0ZW1wbGF0ZSBpcyB3YWxrZWQgdGhlIHJlbW92YWwgc3RhdGUgaXMgdHJhY2tlZCBhbmRcbiAqIHBhcnQgaW5kaWNlcyBhcmUgYWRqdXN0ZWQgYXMgbmVlZGVkLlxuICpcbiAqIGRpdlxuICogICBkaXYjMSAocmVtb3ZlKSA8LS0gc3RhcnQgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgZGl2IzEpXG4gKiAgICAgZGl2XG4gKiAgICAgICBkaXYjMiAocmVtb3ZlKSAgPC0tIGNvbnRpbnVlIHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIHN0aWxsIGRpdiMxKVxuICogICAgICAgICBkaXZcbiAqIGRpdiA8LS0gc3RvcCByZW1vdmluZyBzaW5jZSBwcmV2aW91cyBzaWJsaW5nIGlzIHRoZSByZW1vdmluZyBub2RlIChkaXYjMSxcbiAqIHJlbW92ZWQgNCBub2RlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZXNUb1JlbW92ZTogU2V0PE5vZGU+KSB7XG4gIGNvbnN0IHtlbGVtZW50OiB7Y29udGVudH0sIHBhcnRzfSA9IHRlbXBsYXRlO1xuICBjb25zdCB3YWxrZXIgPVxuICAgICAgZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gIGxldCBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMpO1xuICBsZXQgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gIGxldCBub2RlSW5kZXggPSAtMTtcbiAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgY29uc3Qgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUgPSBbXTtcbiAgbGV0IGN1cnJlbnRSZW1vdmluZ05vZGU6IE5vZGV8bnVsbCA9IG51bGw7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIG5vZGVJbmRleCsrO1xuICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICAvLyBFbmQgcmVtb3ZhbCBpZiBzdGVwcGVkIHBhc3QgdGhlIHJlbW92aW5nIG5vZGVcbiAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGN1cnJlbnRSZW1vdmluZ05vZGUpIHtcbiAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgIH1cbiAgICAvLyBBIG5vZGUgdG8gcmVtb3ZlIHdhcyBmb3VuZCBpbiB0aGUgdGVtcGxhdGVcbiAgICBpZiAobm9kZXNUb1JlbW92ZS5oYXMobm9kZSkpIHtcbiAgICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLnB1c2gobm9kZSk7XG4gICAgICAvLyBUcmFjayBub2RlIHdlJ3JlIHJlbW92aW5nXG4gICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2hlbiByZW1vdmluZywgaW5jcmVtZW50IGNvdW50IGJ5IHdoaWNoIHRvIGFkanVzdCBzdWJzZXF1ZW50IHBhcnQgaW5kaWNlc1xuICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsKSB7XG4gICAgICByZW1vdmVDb3VudCsrO1xuICAgIH1cbiAgICB3aGlsZSAocGFydCAhPT0gdW5kZWZpbmVkICYmIHBhcnQuaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgLy8gSWYgcGFydCBpcyBpbiBhIHJlbW92ZWQgbm9kZSBkZWFjdGl2YXRlIGl0IGJ5IHNldHRpbmcgaW5kZXggdG8gLTEgb3JcbiAgICAgIC8vIGFkanVzdCB0aGUgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgcGFydC5pbmRleCA9IGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwgPyAtMSA6IHBhcnQuaW5kZXggLSByZW1vdmVDb3VudDtcbiAgICAgIC8vIGdvIHRvIHRoZSBuZXh0IGFjdGl2ZSBwYXJ0LlxuICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgfVxuICB9XG4gIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLmZvckVhY2goKG4pID0+IG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobikpO1xufVxuXG5jb25zdCBjb3VudE5vZGVzID0gKG5vZGU6IE5vZGUpID0+IHtcbiAgbGV0IGNvdW50ID0gKG5vZGUubm9kZVR5cGUgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAqLykgPyAwIDogMTtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzID1cbiAgICAocGFydHM6IFRlbXBsYXRlUGFydFtdLCBzdGFydEluZGV4ID0gLTEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZTogTm9kZSwgcmVmTm9kZTogTm9kZXxudWxsID0gbnVsbCkge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHdhbGtlciA9XG4gICAgICBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gIGxldCBpbnNlcnRDb3VudCA9IDA7XG4gIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICB3YWxrZXJJbmRleCsrO1xuICAgIGNvbnN0IHdhbGtlck5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgcmVmTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgfVxuICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xICYmIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggPT09IHdhbGtlckluZGV4KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBpbnNlcnRlZCB0aGUgbm9kZSwgc2ltcGx5IGFkanVzdCBhbGwgc3Vic2VxdWVudCBwYXJ0c1xuICAgICAgaWYgKGluc2VydENvdW50ID4gMCkge1xuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggKz0gaW5zZXJ0Q291bnQ7XG4gICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgcmVhZG9ubHkgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzaW5nIGl0IHRvIGFjdHVhbGx5IGJlIHdyaXR0ZW4gdG8gdGhlXG4gICAqIERPTS5cbiAgICpcbiAgICogRGlyZWN0aXZlcyBhcmUgcnVuIGF0IHRoZSBzdGFydCBvZiBgY29tbWl0YCwgc28gdGhhdCBpZiB0aGV5IGNhbGxcbiAgICogYHBhcnQuc2V0VmFsdWUoLi4uKWAgc3luY2hyb25vdXNseSB0aGF0IHZhbHVlIHdpbGwgYmUgdXNlZCBpbiB0aGUgY3VycmVudFxuICAgKiBjb21taXQsIGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gY2FsbCBgcGFydC5jb21taXQoKWAgd2l0aGluIHRoZSBkaXJlY3RpdmUuXG4gICAqIElmIGRpcmVjdGl2ZXMgc2V0IGEgcGFydCB2YWx1ZSBhc3luY2hyb25vdXNseSwgdGhlbiB0aGV5IG11c3QgY2FsbFxuICAgKiBgcGFydC5jb21taXQoKWAgbWFudWFsbHkuXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtpc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHtjcmVhdGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlb2Ytb3BlcmF0b3JcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IG51bGx8dW5kZWZpbmVkfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xzeW1ib2x8YmlnaW50O1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUHJpbWl0aXZlID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBJdGVyYWJsZTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICEhKHZhbHVlICYmICh2YWx1ZSBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pO1xufTtcblxuLyoqXG4gKiBXcml0ZXMgYXR0cmlidXRlIHZhbHVlcyB0byB0aGUgRE9NIGZvciBhIGdyb3VwIG9mIEF0dHJpYnV0ZVBhcnRzIGJvdW5kIHRvIGFcbiAqIHNpbmdsZSBhdHRyaWJ1dGUuIFRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzXG4gKiBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHJlYWRvbmx5IHBhcnRzOiBSZWFkb25seUFycmF5PEF0dHJpYnV0ZVBhcnQ+O1xuICBkaXJ0eSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgKHRoaXMucGFydHMgYXMgQXR0cmlidXRlUGFydFtdKVtpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICovXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBBdHRyaWJ1dGVQYXJ0IHtcbiAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCk6IHVua25vd24ge1xuICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG5cbiAgICAvLyBJZiB3ZSdyZSBhc3NpZ25pbmcgYW4gYXR0cmlidXRlIHZpYSBzeW50YXggbGlrZTpcbiAgICAvLyAgICBhdHRyPVwiJHtmb299XCIgIG9yICBhdHRyPSR7Zm9vfVxuICAgIC8vIGJ1dCBub3RcbiAgICAvLyAgICBhdHRyPVwiJHtmb299ICR7YmFyfVwiIG9yIGF0dHI9XCIke2Zvb30gYmF6XCJcbiAgICAvLyB0aGVuIHdlIGRvbid0IHdhbnQgdG8gY29lcmNlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgaW50byBvbmUgbG9uZ1xuICAgIC8vIHN0cmluZy4gSW5zdGVhZCB3ZSB3YW50IHRvIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZSBpdHNlbGYgZGlyZWN0bHksXG4gICAgLy8gc28gdGhhdCBzYW5pdGl6ZURPTVZhbHVlIGNhbiBnZXQgdGhlIGFjdHVhbCB2YWx1ZSByYXRoZXIgdGhhblxuICAgIC8vIFN0cmluZyh2YWx1ZSlcbiAgICAvLyBUaGUgZXhjZXB0aW9uIGlzIGlmIHYgaXMgYW4gYXJyYXksIGluIHdoaWNoIGNhc2Ugd2UgZG8gd2FudCB0byBzbWFzaFxuICAgIC8vIGl0IHRvZ2V0aGVyIGludG8gYSBzdHJpbmcgd2l0aG91dCBjYWxsaW5nIFN0cmluZygpIG9uIHRoZSBhcnJheS5cbiAgICAvL1xuICAgIC8vIFRoaXMgYWxzbyBhbGxvd3MgdHJ1c3RlZCB2YWx1ZXMgKHdoZW4gdXNpbmcgVHJ1c3RlZFR5cGVzKSBiZWluZ1xuICAgIC8vIGFzc2lnbmVkIHRvIERPTSBzaW5rcyB3aXRob3V0IGJlaW5nIHN0cmluZ2lmaWVkIGluIHRoZSBwcm9jZXNzLlxuICAgIGlmIChsID09PSAxICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKSB7XG4gICAgICBjb25zdCB2ID0gcGFydHNbMF0udmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhbGwgb3IgcGFydCBvZiBhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICB9XG59XG5cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYSBsb2NhdGlvbiB3aXRoaW4gYSBOb2RlIHRyZWUuIExpa2UgYSBSYW5nZSwgTm9kZVBhcnRcbiAqIGhhcyBzdGFydCBhbmQgZW5kIGxvY2F0aW9ucyBhbmQgY2FuIHNldCBhbmQgdXBkYXRlIHRoZSBOb2RlcyBiZXR3ZWVuIHRob3NlXG4gKiBsb2NhdGlvbnMuXG4gKlxuICogTm9kZVBhcnRzIHN1cHBvcnQgc2V2ZXJhbCB2YWx1ZSB0eXBlczogcHJpbWl0aXZlcywgTm9kZXMsIFRlbXBsYXRlUmVzdWx0cyxcbiAqIGFzIHdlbGwgYXMgYXJyYXlzIGFuZCBpdGVyYWJsZXMgb2YgdGhvc2UgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICBzdGFydE5vZGUhOiBOb2RlO1xuICBlbmROb2RlITogTm9kZTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvKGNvbnRhaW5lcjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBub2RlIChiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHRcbiAgICogc2libGluZykuIEJvdGggYHJlZmAgYW5kIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXNcbiAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIHBhcnQuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIGlmICh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLl9fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX19pbnNlcnQobm9kZTogTm9kZSkge1xuICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXROb2RlKHZhbHVlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGV4dCh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZyE7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAvLyBJZiBgdmFsdWVgIGlzbid0IGFscmVhZHkgYSBzdHJpbmcsIHdlIGV4cGxpY2l0bHkgY29udmVydCBpdCBoZXJlIGluIGNhc2VcbiAgICAvLyBpdCBjYW4ndCBiZSBpbXBsaWNpdGx5IGNvbnZlcnRlZCAtIGkuZS4gaXQncyBhIHN5bWJvbC5cbiAgICBjb25zdCB2YWx1ZUFzU3RyaW5nOiBzdHJpbmcgPVxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlQXNTdHJpbmcpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdEl0ZXJhYmxlKHZhbHVlOiBJdGVyYWJsZTx1bmtub3duPik6IHZvaWQge1xuICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cblxuICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWUgYXMgTm9kZVBhcnRbXTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgaXRlbVBhcnQ6IE5vZGVQYXJ0fHVuZGVmaW5lZDtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG5cbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0LmVuZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKHN0YXJ0Tm9kZTogTm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgcmVtb3ZlTm9kZXMoXG4gICAgICAgIHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUhLCBzdGFydE5vZGUubmV4dFNpYmxpbmchLCB0aGlzLmVuZE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiByZWFkb25seSBzdHJpbmdbXSkge1xuICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICB9XG59XG5cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBQcm9wZXJ0eVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBJZiBhbiBleHByZXNzaW9uIGNvbnRyb2xzIHRoZSB3aG9sZSBwcm9wZXJ0eSB2YWx1ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiBhc3NpZ25lZCB0byB0aGUgcHJvcGVydHkgdW5kZXIgY29udHJvbC4gSWYgdGhlcmUgYXJlIHN0cmluZyBsaXRlcmFscyBvclxuICogbXVsdGlwbGUgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIHN0cmluZ3MgYXJlIGV4cHJlc3Npb25zIGFyZSBpbnRlcnBvbGF0ZWQgaW50b1xuICogYSBzdHJpbmcgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbW1pdHRlciBleHRlbmRzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIHJlYWRvbmx5IHNpbmdsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPikge1xuICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgIHRoaXMuc2luZ2xlID1cbiAgICAgICAgKHN0cmluZ3MubGVuZ3RoID09PSAyICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBQcm9wZXJ0eVBhcnQge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gIH1cblxuICBjb21taXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAodGhpcy5lbGVtZW50IGFzIGFueSlbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHt9XG5cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRoaXJkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5cbi8vIFdyYXAgaW50byBhbiBJSUZFIGJlY2F1c2UgTVMgRWRnZSA8PSB2NDEgZG9lcyBub3Qgc3VwcG9ydCBoYXZpbmcgdHJ5L2NhdGNoXG4vLyBibG9ja3MgcmlnaHQgaW50byB0aGUgYm9keSBvZiBhIG1vZHVsZVxuKCgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgZ2V0IGNhcHR1cmUoKSB7XG4gICAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoX2UpIHtcbiAgICAvLyBldmVudCBvcHRpb25zIG5vdCBzdXBwb3J0ZWRcbiAgfVxufSkoKTtcblxudHlwZSBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9XG4gICAgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCZQYXJ0aWFsPEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zPjtcbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgZXZlbnROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0O1xuICB2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9fb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xuICBwcml2YXRlIF9fcGVuZGluZ1ZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX19ib3VuZEhhbmRsZUV2ZW50OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQgPSAoZSkgPT4gdGhpcy5oYW5kbGVFdmVudChlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICBvbGRMaXN0ZW5lciAhPSBudWxsICYmXG4gICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PSBvbGRMaXN0ZW5lci5wYXNzaXZlKTtcbiAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9XG4gICAgICAgIG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuXG4gICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMudmFsdWUgYXMgRXZlbnRMaXN0ZW5lck9iamVjdCkuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvOiBBZGRFdmVudExpc3RlbmVyT3B0aW9uc3x1bmRlZmluZWQpID0+IG8gJiZcbiAgICAoZXZlbnRPcHRpb25zU3VwcG9ydGVkID9cbiAgICAgICAgIHtjYXB0dXJlOiBvLmNhcHR1cmUsIHBhc3NpdmU6IG8ucGFzc2l2ZSwgb25jZTogby5vbmNlfSA6XG4gICAgICAgICBvLmNhcHR1cmUgYXMgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge05vZGVQYXJ0fSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcblxuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXA8Tm9kZSwgTm9kZVBhcnQ+KCk7XG5cbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHJlc3VsdCBvciBvdGhlciB2YWx1ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgQW55IHZhbHVlIHJlbmRlcmFibGUgYnkgTm9kZVBhcnQgLSB0eXBpY2FsbHkgYSBUZW1wbGF0ZVJlc3VsdFxuICogICAgIGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IHVua25vd24sXG4gICAgIGNvbnRhaW5lcjogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50LFxuICAgICBvcHRpb25zPzogUGFydGlhbDxSZW5kZXJPcHRpb25zPikgPT4ge1xuICAgICAgbGV0IHBhcnQgPSBwYXJ0cy5nZXQoY29udGFpbmVyKTtcbiAgICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgICAgfVxuICAgICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgICAgcGFydC5jb21taXQoKTtcbiAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSB0byBhZGQgc2hhZHkgRE9NL3NoYWR5IENTUyBwb2x5ZmlsbCBzdXBwb3J0IHRvIGxpdC1odG1sIHRlbXBsYXRlXG4gKiByZW5kZXJpbmcuIFNlZSB0aGUgW1tyZW5kZXJdXSBtZXRob2QgZm9yIGRldGFpbHMuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtpbnNlcnROb2RlSW50b1RlbXBsYXRlLCByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZX0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7cGFydHMsIHJlbmRlciBhcyBsaXRSZW5kZXJ9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7dGVtcGxhdGVDYWNoZXN9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZTogc3RyaW5nLCBzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcblxubGV0IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSB0cnVlO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgICAgYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLiBgICtcbiAgICAgIGBQbGVhc2UgdXBkYXRlIHRvIGF0IGxlYXN0IEB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqc0AyLjAuMiBhbmQgYCArXG4gICAgICBgQHdlYmNvbXBvbmVudHMvc2hhZHljc3NAMS4zLjEuYCk7XG4gIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSBmYWN0b3J5IHdoaWNoIHNjb3BlcyB0ZW1wbGF0ZSBET00gdXNpbmcgU2hhZHlDU1MuXG4gKiBAcGFyYW0gc2NvcGVOYW1lIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlRG9tKGVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCBlbGVtZW50KTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfTtcblxuY29uc3QgVEVNUExBVEVfVFlQRVMgPSBbJ2h0bWwnLCAnc3ZnJ107XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmNvbnN0IHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMgPSAoc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgIGlmICh0ZW1wbGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGVtcGxhdGVzLmtleVN0cmluZy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9fSA9IHRlbXBsYXRlO1xuICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG4gICAgICAgIEFycmF5LmZyb20oY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgc3R5bGVzLmFkZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNoYWR5UmVuZGVyU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPVxuICAgIChzY29wZU5hbWU6IHN0cmluZywgcmVuZGVyZWRET006IERvY3VtZW50RnJhZ21lbnQsIHRlbXBsYXRlPzogVGVtcGxhdGUpID0+IHtcbiAgICAgIHNoYWR5UmVuZGVyU2V0LmFkZChzY29wZU5hbWUpO1xuICAgICAgLy8gSWYgYHJlbmRlcmVkRE9NYCBpcyBzdGFtcGVkIGZyb20gYSBUZW1wbGF0ZSwgdGhlbiB3ZSBuZWVkIHRvIGVkaXQgdGhhdFxuICAgICAgLy8gVGVtcGxhdGUncyB1bmRlcmx5aW5nIHRlbXBsYXRlIGVsZW1lbnQuIE90aGVyd2lzZSwgd2UgY3JlYXRlIG9uZSBoZXJlXG4gICAgICAvLyB0byBnaXZlIHRvIFNoYWR5Q1NTLCB3aGljaCBzdGlsbCByZXF1aXJlcyBvbmUgd2hpbGUgc2NvcGluZy5cbiAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9XG4gICAgICAgICAgISF0ZW1wbGF0ZSA/IHRlbXBsYXRlLmVsZW1lbnQgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgLy8gTW92ZSBzdHlsZXMgb3V0IG9mIHJlbmRlcmVkIERPTSBhbmQgc3RvcmUuXG4gICAgICBjb25zdCBzdHlsZXMgPSByZW5kZXJlZERPTS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpO1xuICAgICAgY29uc3Qge2xlbmd0aH0gPSBzdHlsZXM7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRW5zdXJlIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyBpcyBjYWxsZWQgdG8gc3VwcG9ydCBhZGRpbmdcbiAgICAgICAgLy8gc3R5bGVzIHZpYSBgcHJlcGFyZUFkb3B0ZWRDc3NUZXh0YCBzaW5jZSB0aGF0IHJlcXVpcmVzIHRoYXRcbiAgICAgICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgaXMgY2FsbGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBTaGFkeUNTUyB3aWxsIG9ubHkgdXBkYXRlIHN0eWxlcyBjb250YWluaW5nIEBhcHBseSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgLy8gZ2l2ZW4gdG8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AuIElmIG5vIGxpdCBUZW1wbGF0ZSB3YXMgZ2l2ZW4sXG4gICAgICAgIC8vIFNoYWR5Q1NTIHdpbGwgbm90IGJlIGFibGUgdG8gdXBkYXRlIHVzZXMgb2YgQGFwcGx5IGluIGFueSByZWxldmFudFxuICAgICAgICAvLyB0ZW1wbGF0ZS4gSG93ZXZlciwgdGhpcyBpcyBub3QgYSBwcm9ibGVtIGJlY2F1c2Ugd2Ugb25seSBjcmVhdGUgdGhlXG4gICAgICAgIC8vIHRlbXBsYXRlIGZvciB0aGUgcHVycG9zZSBvZiBzdXBwb3J0aW5nIGBwcmVwYXJlQWRvcHRlZENzc1RleHRgLFxuICAgICAgICAvLyB3aGljaCBkb2Vzbid0IHN1cHBvcnQgQGFwcGx5IGF0IGFsbC5cbiAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGVFbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb25kZW5zZWRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAvLyBDb2xsZWN0IHN0eWxlcyBpbnRvIGEgc2luZ2xlIHN0eWxlLiBUaGlzIGhlbHBzIHVzIG1ha2Ugc3VyZSBTaGFkeUNTU1xuICAgICAgLy8gbWFuaXB1bGF0aW9ucyB3aWxsIG5vdCBwcmV2ZW50IHVzIGZyb20gYmVpbmcgYWJsZSB0byBmaXggdXAgdGVtcGxhdGVcbiAgICAgIC8vIHBhcnQgaW5kaWNlcy5cbiAgICAgIC8vIE5PVEU6IGNvbGxlY3Rpbmcgc3R5bGVzIGlzIGluZWZmaWNpZW50IGZvciBicm93c2VycyBidXQgU2hhZHlDU1NcbiAgICAgIC8vIGN1cnJlbnRseSBkb2VzIHRoaXMgYW55d2F5LiBXaGVuIGl0IGRvZXMgbm90LCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VkLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgc3R5bGUucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICBjb25kZW5zZWRTdHlsZS50ZXh0Q29udGVudCEgKz0gc3R5bGUudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgc3R5bGVzIGZyb20gbmVzdGVkIHRlbXBsYXRlcyBpbiB0aGlzIHNjb3BlLlxuICAgICAgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyhzY29wZU5hbWUpO1xuICAgICAgLy8gQW5kIHRoZW4gcHV0IHRoZSBjb25kZW5zZWQgc3R5bGUgaW50byB0aGUgXCJyb290XCIgdGVtcGxhdGUgcGFzc2VkIGluIGFzXG4gICAgICAvLyBgdGVtcGxhdGVgLlxuICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlRWxlbWVudC5jb250ZW50O1xuICAgICAgaWYgKCEhdGVtcGxhdGUpIHtcbiAgICAgICAgaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSh0ZW1wbGF0ZSwgY29uZGVuc2VkU3R5bGUsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb25kZW5zZWRTdHlsZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgU2hhZHlDU1MgZ2V0cyB0aGUgdGVtcGxhdGUgdGhhdCBgbGl0LWh0bWxgXG4gICAgICAvLyB3aWxsIGFjdHVhbGx5IHJlbmRlciBzbyB0aGF0IGl0IGNhbiB1cGRhdGUgdGhlIHN0eWxlIGluc2lkZSB3aGVuXG4gICAgICAvLyBuZWVkZWQgKGUuZy4gQGFwcGx5IG5hdGl2ZSBTaGFkb3cgRE9NIGNhc2UpLlxuICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGVFbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgY29uc3Qgc3R5bGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgICBpZiAod2luZG93LlNoYWR5Q1NTIS5uYXRpdmVTaGFkb3cgJiYgc3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2hlbiBpbiBuYXRpdmUgU2hhZG93IERPTSwgZW5zdXJlIHRoZSBzdHlsZSBjcmVhdGVkIGJ5IFNoYWR5Q1NTIGlzXG4gICAgICAgIC8vIGluY2x1ZGVkIGluIGluaXRpYWxseSByZW5kZXJlZCBvdXRwdXQgKGByZW5kZXJlZERPTWApLlxuICAgICAgICByZW5kZXJlZERPTS5pbnNlcnRCZWZvcmUoc3R5bGUuY2xvbmVOb2RlKHRydWUpLCByZW5kZXJlZERPTS5maXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoISF0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBXaGVuIG5vIHN0eWxlIGlzIGxlZnQgaW4gdGhlIHRlbXBsYXRlLCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gVGhlcmUgY2FuIGJlIG5vIHN0eWxlIGluIHRoZSB0ZW1wbGF0ZSBpbiAyIGNhc2VzICgxKSB3aGVuIFNoYWR5IERPTVxuICAgICAgICAvLyBpcyBpbiB1c2UsIFNoYWR5Q1NTIHJlbW92ZXMgYWxsIHN0eWxlcywgKDIpIHdoZW4gbmF0aXZlIFNoYWRvdyBET01cbiAgICAgICAgLy8gaXMgaW4gdXNlIFNoYWR5Q1NTIHJlbW92ZXMgdGhlIHN0eWxlIGlmIGl0IGNvbnRhaW5zIG5vIGNvbnRlbnQuXG4gICAgICAgIC8vIE5PVEUsIFNoYWR5Q1NTIGNyZWF0ZXMgaXRzIG93biBzdHlsZSBzbyB3ZSBjYW4gc2FmZWx5IGFkZC9yZW1vdmVcbiAgICAgICAgLy8gYGNvbmRlbnNlZFN0eWxlYCBoZXJlLlxuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb25kZW5zZWRTdHlsZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQ8Tm9kZT4oKTtcbiAgICAgICAgcmVtb3Zlcy5hZGQoY29uZGVuc2VkU3R5bGUpO1xuICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgcmVtb3Zlcyk7XG4gICAgICB9XG4gICAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBTaGFkeVJlbmRlck9wdGlvbnMgZXh0ZW5kcyBQYXJ0aWFsPFJlbmRlck9wdGlvbnM+IHtcbiAgc2NvcGVOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdGFuZGFyZCBgcmVuZGVyYCBtZXRob2Qgd2hpY2ggc3VwcG9ydHMgcmVuZGVyaW5nXG4gKiB0byBTaGFkb3dSb290cyB3aGVuIHRoZSBTaGFkeURPTSAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHlkb20pXG4gKiBhbmQgU2hhZHlDU1MgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5Y3NzKSBwb2x5ZmlsbHMgYXJlIHVzZWRcbiAqIG9yIHdoZW4gdGhlIHdlYmNvbXBvbmVudHNqc1xuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcykgcG9seWZpbGwgaXMgdXNlZC5cbiAqXG4gKiBBZGRzIGEgYHNjb3BlTmFtZWAgb3B0aW9uIHdoaWNoIGlzIHVzZWQgdG8gc2NvcGUgZWxlbWVudCBET00gYW5kIHN0eWxlc2hlZXRzXG4gKiB3aGVuIG5hdGl2ZSBTaGFkb3dET00gaXMgdW5hdmFpbGFibGUuIFRoZSBgc2NvcGVOYW1lYCB3aWxsIGJlIGFkZGVkIHRvXG4gKiB0aGUgY2xhc3MgYXR0cmlidXRlIG9mIGFsbCByZW5kZXJlZCBET00uIEluIGFkZGl0aW9uLCBhbnkgc3R5bGUgZWxlbWVudHMgd2lsbFxuICogYmUgYXV0b21hdGljYWxseSByZS13cml0dGVuIHdpdGggdGhpcyBgc2NvcGVOYW1lYCBzZWxlY3RvciBhbmQgbW92ZWQgb3V0XG4gKiBvZiB0aGUgcmVuZGVyZWQgRE9NIGFuZCBpbnRvIHRoZSBkb2N1bWVudCBgPGhlYWQ+YC5cbiAqXG4gKiBJdCBpcyBjb21tb24gdG8gdXNlIHRoaXMgcmVuZGVyIG1ldGhvZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgY3VzdG9tIGVsZW1lbnRcbiAqIHdoaWNoIHJlbmRlcnMgYSBzaGFkb3dSb290LiBXaGVuIHRoaXMgaXMgZG9uZSwgdHlwaWNhbGx5IHRoZSBlbGVtZW50J3NcbiAqIGBsb2NhbE5hbWVgIHNob3VsZCBiZSB1c2VkIGFzIHRoZSBgc2NvcGVOYW1lYC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBET00gc2NvcGluZywgU2hhZHlDU1MgYWxzbyBzdXBwb3J0cyBhIGJhc2ljIHNoaW0gZm9yIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgKG5lZWRlZCBvbmx5IG9uIG9sZGVyIGJyb3dzZXJzIGxpa2UgSUUxMSkgYW5kIGEgc2hpbSBmb3JcbiAqIGEgZGVwcmVjYXRlZCBmZWF0dXJlIGNhbGxlZCBgQGFwcGx5YCB0aGF0IHN1cHBvcnRzIGFwcGx5aW5nIGEgc2V0IG9mIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9uczpcbiAqXG4gKiAqIFBhcnQgdmFsdWVzIGluIGA8c3R5bGU+YCBlbGVtZW50cyBhcmUgb25seSBhcHBsaWVkIHRoZSBmaXJzdCB0aW1lIGEgZ2l2ZW5cbiAqIGBzY29wZU5hbWVgIHJlbmRlcnMuIFN1YnNlcXVlbnQgY2hhbmdlcyB0byBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyB3aWxsIGhhdmVcbiAqIG5vIGVmZmVjdC4gQmVjYXVzZSBvZiB0aGlzLCBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyBzaG91bGQgb25seSBiZSB1c2VkIGZvclxuICogdmFsdWVzIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsIGZvciBleGFtcGxlIHBhcnRzIHRoYXQgc2V0IHNjb3BlLXdpZGUgdGhlbWVcbiAqIHZhbHVlcyBvciBwYXJ0cyB3aGljaCByZW5kZXIgc2hhcmVkIHN0eWxlIGVsZW1lbnRzLlxuICpcbiAqICogTm90ZSwgZHVlIHRvIGEgbGltaXRhdGlvbiBvZiB0aGUgU2hhZHlET00gcG9seWZpbGwsIHJlbmRlcmluZyBpbiBhXG4gKiBjdXN0b20gZWxlbWVudCdzIGBjb25zdHJ1Y3RvcmAgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCByZW5kZXJpbmcgc2hvdWxkXG4gKiBlaXRoZXIgZG9uZSBhc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUgYXQgbWljcm90YXNrIHRpbWluZyAoZm9yIGV4YW1wbGVcbiAqIGBQcm9taXNlLnJlc29sdmUoKWApLCBvciBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgZWxlbWVudCdzXG4gKiBgY29ubmVjdGVkQ2FsbGJhY2tgIHJ1bnMuXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnMgd2hlbiB1c2luZyBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIGBAYXBwbHlgOlxuICpcbiAqICogV2hlbmV2ZXIgYW55IGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSB3aGljaCBhZmZlY3RcbiAqIGNzcyBjdXN0b20gcHJvcGVydGllcywgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudChlbGVtZW50KWAgbXVzdCBiZSBjYWxsZWRcbiAqIHRvIHVwZGF0ZSB0aGUgZWxlbWVudC4gVGhlcmUgYXJlIHR3byBjYXNlcyB3aGVuIHRoaXMgaXMgbmVlZGVkOlxuICogKDEpIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byBhIG5ldyBwYXJlbnQsICgyKSBhIGNsYXNzIGlzIGFkZGVkIHRvIHRoZVxuICogZWxlbWVudCB0aGF0IGNhdXNlcyBpdCB0byBtYXRjaCBkaWZmZXJlbnQgY3VzdG9tIHByb3BlcnRpZXMuXG4gKiBUbyBhZGRyZXNzIHRoZSBmaXJzdCBjYXNlIHdoZW4gcmVuZGVyaW5nIGEgY3VzdG9tIGVsZW1lbnQsIGBzdHlsZUVsZW1lbnRgXG4gKiBzaG91bGQgYmUgY2FsbGVkIGluIHRoZSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYC5cbiAqXG4gKiAqIFNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgbWF5IG9ubHkgYmUgZGVmaW5lZCBlaXRoZXIgZm9yIGFuIGVudGlyZVxuICogc2hhZG93Um9vdCAoZm9yIGV4YW1wbGUsIGluIGEgYDpob3N0YCBydWxlKSBvciB2aWEgYSBydWxlIHRoYXQgZGlyZWN0bHlcbiAqIG1hdGNoZXMgYW4gZWxlbWVudCB3aXRoIGEgc2hhZG93Um9vdC4gSW4gb3RoZXIgd29yZHMsIGluc3RlYWQgb2YgZmxvd2luZyBmcm9tXG4gKiBwYXJlbnQgdG8gY2hpbGQgYXMgZG8gbmF0aXZlIGNzcyBjdXN0b20gcHJvcGVydGllcywgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllc1xuICogZmxvdyBvbmx5IGZyb20gc2hhZG93Um9vdHMgdG8gbmVzdGVkIHNoYWRvd1Jvb3RzLlxuICpcbiAqICogV2hlbiB1c2luZyBgQGFwcGx5YCBtaXhpbmcgY3NzIHNob3J0aGFuZCBwcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBub24tc2hvcnRoYW5kIG5hbWVzIChmb3IgZXhhbXBsZSBgYm9yZGVyYCBhbmQgYGJvcmRlci13aWR0aGApIGlzIG5vdFxuICogc3VwcG9ydGVkLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID1cbiAgICAocmVzdWx0OiB1bmtub3duLFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudHxTaGFkb3dSb290LFxuICAgICBvcHRpb25zOiBTaGFkeVJlbmRlck9wdGlvbnMpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgIW9wdGlvbnMuc2NvcGVOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBzY29wZU5hbWVgIG9wdGlvbiBpcyByZXF1aXJlZC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjb3BlTmFtZSA9IG9wdGlvbnMuc2NvcGVOYW1lO1xuICAgICAgY29uc3QgaGFzUmVuZGVyZWQgPSBwYXJ0cy5oYXMoY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IG5lZWRzU2NvcGluZyA9IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gJiZcbiAgICAgICAgICBjb250YWluZXIubm9kZVR5cGUgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAqLyAmJlxuICAgICAgICAgICEhKGNvbnRhaW5lciBhcyBTaGFkb3dSb290KS5ob3N0O1xuICAgICAgLy8gSGFuZGxlIGZpcnN0IHJlbmRlciB0byBhIHNjb3BlIHNwZWNpYWxseS4uLlxuICAgICAgY29uc3QgZmlyc3RTY29wZVJlbmRlciA9IG5lZWRzU2NvcGluZyAmJiAhc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSk7XG4gICAgICAvLyBPbiBmaXJzdCBzY29wZSByZW5kZXIsIHJlbmRlciBpbnRvIGEgZnJhZ21lbnQ7IHRoaXMgY2Fubm90IGJlIGEgc2luZ2xlXG4gICAgICAvLyBmcmFnbWVudCB0aGF0IGlzIHJldXNlZCBzaW5jZSBuZXN0ZWQgcmVuZGVycyBjYW4gb2NjdXIgc3luY2hyb25vdXNseS5cbiAgICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9XG4gICAgICAgICAgZmlyc3RTY29wZVJlbmRlciA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSA6IGNvbnRhaW5lcjtcbiAgICAgIGxpdFJlbmRlcihcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgcmVuZGVyQ29udGFpbmVyLFxuICAgICAgICAgIHt0ZW1wbGF0ZUZhY3Rvcnk6IHNoYWR5VGVtcGxhdGVGYWN0b3J5KHNjb3BlTmFtZSksIC4uLm9wdGlvbnN9IGFzXG4gICAgICAgICAgICAgIFJlbmRlck9wdGlvbnMpO1xuICAgICAgLy8gV2hlbiBwZXJmb3JtaW5nIGZpcnN0IHNjb3BlIHJlbmRlcixcbiAgICAgIC8vICgxKSBXZSd2ZSByZW5kZXJlZCBpbnRvIGEgZnJhZ21lbnQgc28gdGhhdCB0aGVyZSdzIGEgY2hhbmNlIHRvXG4gICAgICAvLyBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBiZWZvcmUgc3ViLWVsZW1lbnRzIGhpdCB0aGUgRE9NXG4gICAgICAvLyAod2hpY2ggbWlnaHQgY2F1c2UgdGhlbSB0byByZW5kZXIgYmFzZWQgb24gYSBjb21tb24gcGF0dGVybiBvZlxuICAgICAgLy8gcmVuZGVyaW5nIGluIGEgY3VzdG9tIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgKTtcbiAgICAgIC8vICgyKSBTY29wZSB0aGUgdGVtcGxhdGUgd2l0aCBTaGFkeUNTUyBvbmUgdGltZSBvbmx5IGZvciB0aGlzIHNjb3BlLlxuICAgICAgLy8gKDMpIFJlbmRlciB0aGUgZnJhZ21lbnQgaW50byB0aGUgY29udGFpbmVyIGFuZCBtYWtlIHN1cmUgdGhlXG4gICAgICAvLyBjb250YWluZXIga25vd3MgaXRzIGBwYXJ0YCBpcyB0aGUgb25lIHdlIGp1c3QgcmVuZGVyZWQuIFRoaXMgZW5zdXJlc1xuICAgICAgLy8gRE9NIHdpbGwgYmUgcmUtdXNlZCBvbiBzdWJzZXF1ZW50IHJlbmRlcnMuXG4gICAgICBpZiAoZmlyc3RTY29wZVJlbmRlcikge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHMuZ2V0KHJlbmRlckNvbnRhaW5lcikhO1xuICAgICAgICBwYXJ0cy5kZWxldGUocmVuZGVyQ29udGFpbmVyKTtcbiAgICAgICAgLy8gU2hhZHlDU1MgbWlnaHQgaGF2ZSBzdHlsZSBzaGVldHMgKGUuZy4gZnJvbSBgcHJlcGFyZUFkb3B0ZWRDc3NUZXh0YClcbiAgICAgICAgLy8gdGhhdCBzaG91bGQgYXBwbHkgdG8gYHJlbmRlckNvbnRhaW5lcmAgZXZlbiBpZiB0aGUgcmVuZGVyZWQgdmFsdWUgaXNcbiAgICAgICAgLy8gbm90IGEgVGVtcGxhdGVJbnN0YW5jZS4gSG93ZXZlciwgaXQgd2lsbCBvbmx5IGluc2VydCBzY29wZWQgc3R5bGVzXG4gICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50IGlmIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkXG4gICAgICAgIC8vIGZvciB0aGUgZ2l2ZW4gc2NvcGUgbmFtZS5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBwYXJ0LnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSA/XG4gICAgICAgICAgICBwYXJ0LnZhbHVlLnRlbXBsYXRlIDpcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgcHJlcGFyZVRlbXBsYXRlU3R5bGVzKFxuICAgICAgICAgICAgc2NvcGVOYW1lLCByZW5kZXJDb250YWluZXIgYXMgRG9jdW1lbnRGcmFnbWVudCwgdGVtcGxhdGUpO1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQpO1xuICAgICAgfVxuICAgICAgLy8gQWZ0ZXIgZWxlbWVudHMgaGF2ZSBoaXQgdGhlIERPTSwgdXBkYXRlIHN0eWxpbmcgaWYgdGhpcyBpcyB0aGVcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgd2hlbmV2ZXIgZHluYW1pYyBjaGFuZ2VzIGFyZSBtYWRlIHNvIGl0IHdvdWxkIGJlXG4gICAgICAvLyBzYWZlc3QgdG8gZG8gZXZlcnkgcmVuZGVyOyBob3dldmVyLCB0aGlzIHdvdWxkIHJlZ3Jlc3MgcGVyZm9ybWFuY2VcbiAgICAgIC8vIHNvIHdlIGxlYXZlIGl0IHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudGBcbiAgICAgIC8vIGZvciBkeW5hbWljIGNoYW5nZXMuXG4gICAgICBpZiAoIWhhc1JlbmRlcmVkICYmIG5lZWRzU2NvcGluZykge1xuICAgICAgICB3aW5kb3cuU2hhZHlDU1MhLnN0eWxlRWxlbWVudCgoY29udGFpbmVyIGFzIFNoYWRvd1Jvb3QpLmhvc3QpO1xuICAgICAgfVxuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7bWFya2VyLCBUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0eXBlIHRoYXQgY3JlYXRlcyBhIFRlbXBsYXRlIGZyb20gYSBUZW1wbGF0ZVJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIGEgaG9vayBpbnRvIHRoZSB0ZW1wbGF0ZS1jcmVhdGlvbiBwcm9jZXNzIGZvciByZW5kZXJpbmcgdGhhdFxuICogcmVxdWlyZXMgc29tZSBtb2RpZmljYXRpb24gb2YgdGVtcGxhdGVzIGJlZm9yZSB0aGV5J3JlIHVzZWQsIGxpa2UgU2hhZHlDU1MsXG4gKiB3aGljaCBtdXN0IGFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzIGFuZCByZW1vdmUgc3R5bGVzLlxuICpcbiAqIFRlbXBsYXRlcyBzaG91bGQgYmUgY2FjaGVkIGFzIGFnZ3Jlc3NpdmVseSBhcyBwb3NzaWJsZSwgc28gdGhhdCBtYW55XG4gKiBUZW1wbGF0ZVJlc3VsdHMgcHJvZHVjZWQgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIG9ubHkgZG8gdGhlIHdvcmsgb2ZcbiAqIGNyZWF0aW5nIHRoZSBUZW1wbGF0ZSB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBUZW1wbGF0ZXMgYXJlIHVzdWFsbHkgY2FjaGVkIGJ5IFRlbXBsYXRlUmVzdWx0LnN0cmluZ3MgYW5kXG4gKiBUZW1wbGF0ZVJlc3VsdC50eXBlLCBidXQgbWF5IGJlIGNhY2hlZCBieSBvdGhlciBrZXlzIGlmIHRoaXMgZnVuY3Rpb25cbiAqIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBOb3RlIHRoYXQgY3VycmVudGx5IFRlbXBsYXRlRmFjdG9yaWVzIG11c3Qgbm90IGFkZCwgcmVtb3ZlLCBvciByZW9yZGVyXG4gKiBleHByZXNzaW9ucywgYmVjYXVzZSB0aGVyZSBpcyBubyB3YXkgdG8gZGVzY3JpYmUgc3VjaCBhIG1vZGlmaWNhdGlvblxuICogdG8gcmVuZGVyKCkgc28gdGhhdCB2YWx1ZXMgYXJlIGludGVycG9sYXRlZCB0byB0aGUgY29ycmVjdCBwbGFjZSBpbiB0aGVcbiAqIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqL1xuZXhwb3J0IHR5cGUgVGVtcGxhdGVGYWN0b3J5ID0gKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpID0+IFRlbXBsYXRlO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkge1xuICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+KCksXG4gICAgICBrZXlTdHJpbmc6IG5ldyBNYXA8c3RyaW5nLCBUZW1wbGF0ZT4oKVxuICAgIH07XG4gICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgfVxuXG4gIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuXG4gIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKSk7XG4gICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIFRoZSBmaXJzdCBhcmd1bWVudCB0byBKUyB0ZW1wbGF0ZSB0YWdzIHJldGFpbiBpZGVudGl0eSBhY3Jvc3MgbXVsdGlwbGVcbiAqIGNhbGxzIHRvIGEgdGFnIGZvciB0aGUgc2FtZSBsaXRlcmFsLCBzbyB3ZSBjYW4gY2FjaGUgd29yayBkb25lIHBlciBsaXRlcmFsXG4gKiBpbiBhIE1hcC5cbiAqXG4gKiBTYWZhcmkgY3VycmVudGx5IGhhcyBhIGJ1ZyB3aGljaCBvY2Nhc2lvbmFsbHkgYnJlYWtzIHRoaXMgYmVoYXZpb3IsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDYWNoZSB7XG4gIHJlYWRvbmx5IHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+O1xuICByZWFkb25seSBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn1cblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlQ2FjaGU+KCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNDRVBvbHlmaWxsfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9fcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICByZWFkb25seSBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IsXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB1cGRhdGUodmFsdWVzOiByZWFkb25seSB1bmtub3duW10pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgLy8gRE9NIGZyYWdtZW50OlxuICAgIC8vICAxLiBDbG9uZSAtIGNyZWF0ZSB0aGUgaW5zdGFuY2UgZnJhZ21lbnRcbiAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgLy8gIDMuIFByb2Nlc3MgLSBmaW5kIHBhcnQgbWFya2VycyBhbmQgY3JlYXRlIHBhcnRzXG4gICAgLy8gIDQuIFVwZ3JhZGUgLSB1cGdyYWRlIGN1c3RvbSBlbGVtZW50c1xuICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgLy8gIDYuIENvbm5lY3QgLSBjb25uZWN0IHRvIHRoZSBkb2N1bWVudC4gT3B0aW9uYWwgYW5kIG91dHNpZGUgb2YgdGhpc1xuICAgIC8vICAgICBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBXZSBoYXZlIGEgZmV3IGNvbnN0cmFpbnRzIG9uIHRoZSBvcmRlcmluZyBvZiB0aGVzZSBzdGVwczpcbiAgICAvLyAgKiBXZSBuZWVkIHRvIHVwZ3JhZGUgYmVmb3JlIHVwZGF0aW5nLCBzbyB0aGF0IHByb3BlcnR5IHZhbHVlcyB3aWxsIHBhc3NcbiAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgIC8vICAqIFdlIHdvdWxkIGxpa2UgdG8gcHJvY2VzcyBiZWZvcmUgdXBncmFkaW5nIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0IHRoZVxuICAgIC8vICAgIGNsb25lZCBmcmFnbWVudCBpcyBpbmVydCBhbmQgbm90IGRpc3R1cmJlZCBieSBzZWxmLW1vZGlmeWluZyBET00uXG4gICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgLy9cbiAgICAvLyBHaXZlbiB0aGVzZSBjb25zdHJhaW50cywgd2l0aCBmdWxsIGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0IHdlIHdvdWxkXG4gICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAvL1xuICAgIC8vIEJ1dCBTYWZhcmkgZG9lcyBub3QgaW1wbGVtZW50IEN1c3RvbUVsZW1lbnRSZWdpc3RyeSN1cGdyYWRlLCBzbyB3ZVxuICAgIC8vIGNhbiBub3QgaW1wbGVtZW50IHRoYXQgb3JkZXIgYW5kIHN0aWxsIGhhdmUgdXBncmFkZS1iZWZvcmUtdXBkYXRlIGFuZFxuICAgIC8vIHVwZ3JhZGUgZGlzY29ubmVjdGVkIGZyYWdtZW50cy4gU28gd2UgaW5zdGVhZCBzYWNyaWZpY2UgdGhlXG4gICAgLy8gcHJvY2Vzcy1iZWZvcmUtdXBncmFkZSBjb25zdHJhaW50LCBzaW5jZSBpbiBDdXN0b20gRWxlbWVudHMgdjEgZWxlbWVudHNcbiAgICAvLyBtdXN0IG5vdCBtb2RpZnkgdGhlaXIgbGlnaHQgRE9NIGluIHRoZSBjb25zdHJ1Y3Rvci4gV2Ugc3RpbGwgaGF2ZSBpc3N1ZXNcbiAgICAvLyB3aGVuIGNvLWV4aXN0aW5nIHdpdGggQ0V2MCBlbGVtZW50cyBsaWtlIFBvbHltZXIgMSwgYW5kIHdpdGggcG9seWZpbGxzXG4gICAgLy8gdGhhdCBkb24ndCBzdHJpY3RseSBhZGhlcmUgdG8gdGhlIG5vLW1vZGlmaWNhdGlvbiBydWxlIGJlY2F1c2Ugc2hhZG93XG4gICAgLy8gRE9NLCB3aGljaCBtYXkgYmUgY3JlYXRlZCBpbiB0aGUgY29uc3RydWN0b3IsIGlzIGVtdWxhdGVkIGJ5IGJlaW5nIHBsYWNlZFxuICAgIC8vIGluIHRoZSBsaWdodCBET00uXG4gICAgLy9cbiAgICAvLyBUaGUgcmVzdWx0aW5nIG9yZGVyIGlzIG9uIG5hdGl2ZSBpczogQ2xvbmUsIEFkb3B0LCBVcGdyYWRlLCBQcm9jZXNzLFxuICAgIC8vIFVwZGF0ZSwgQ29ubmVjdC4gZG9jdW1lbnQuaW1wb3J0Tm9kZSgpIHBlcmZvcm1zIENsb25lLCBBZG9wdCwgYW5kIFVwZ3JhZGVcbiAgICAvLyBpbiBvbmUgc3RlcC5cbiAgICAvL1xuICAgIC8vIFRoZSBDdXN0b20gRWxlbWVudHMgdjEgcG9seWZpbGwgc3VwcG9ydHMgdXBncmFkZSgpLCBzbyB0aGUgb3JkZXIgd2hlblxuICAgIC8vIHBvbHlmaWxsZWQgaXMgdGhlIG1vcmUgaWRlYWw6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLFxuICAgIC8vIENvbm5lY3QuXG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudEZyYWdtZW50IDpcbiAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBzdGFjazogTm9kZVtdID0gW107XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgIGZyYWdtZW50LFxuICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlKTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICBsZXQgcGFydDogVGVtcGxhdGVQYXJ0O1xuICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoKSB7XG4gICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBQcm9ncmVzcyB0aGUgdHJlZSB3YWxrZXIgdW50aWwgd2UgZmluZCBvdXIgbmV4dCBwYXJ0J3Mgbm9kZS5cbiAgICAgIC8vIE5vdGUgdGhhdCBtdWx0aXBsZSBwYXJ0cyBtYXkgc2hhcmUgdGhlIHNhbWUgbm9kZSAoYXR0cmlidXRlIHBhcnRzXG4gICAgICAvLyBvbiBhIHNpbmdsZSBlbGVtZW50KSwgc28gdGhpcyBsb29wIG1heSBub3QgcnVuIGF0IGFsbC5cbiAgICAgIHdoaWxlIChub2RlSW5kZXggPCBwYXJ0LmluZGV4KSB7XG4gICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICBpZiAobm9kZSEubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUhKTtcbiAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSAobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpITtcbiAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2UndmUgYXJyaXZlZCBhdCBvdXIgcGFydCdzIG5vZGUuXG4gICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUhLnByZXZpb3VzU2libGluZyEpO1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICAgICAgbm9kZSBhcyBFbGVtZW50LCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICB9XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmRlY2xhcmUgY29uc3QgdHJ1c3RlZFR5cGVzOiB0eXBlb2Ygd2luZG93LnRydXN0ZWRUeXBlcztcbi8qKlxuICogT3VyIFRydXN0ZWRUeXBlUG9saWN5IGZvciBIVE1MIHdoaWNoIGlzIGRlY2xhcmVkIHVzaW5nIHRoZSBodG1sIHRlbXBsYXRlXG4gKiB0YWcgZnVuY3Rpb24uXG4gKlxuICogVGhhdCBIVE1MIGlzIGEgZGV2ZWxvcGVyLWF1dGhvcmVkIGNvbnN0YW50LCBhbmQgaXMgcGFyc2VkIHdpdGggaW5uZXJIVE1MXG4gKiBiZWZvcmUgYW55IHVudHJ1c3RlZCBleHByZXNzaW9ucyBoYXZlIGJlZW4gbWl4ZWQgaW4uIFRoZXJlZm9yIGl0IGlzXG4gKiBjb25zaWRlcmVkIHNhZmUgYnkgY29uc3RydWN0aW9uLlxuICovXG5jb25zdCBwb2xpY3kgPSB3aW5kb3cudHJ1c3RlZFR5cGVzICYmXG4gICAgdHJ1c3RlZFR5cGVzIS5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge2NyZWF0ZUhUTUw6IChzKSA9PiBzfSk7XG5cbmNvbnN0IGNvbW1lbnRNYXJrZXIgPSBgICR7bWFya2VyfSBgO1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICByZWFkb25seSBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgcmVhZG9ubHkgdmFsdWVzOiByZWFkb25seSB1bmtub3duW107XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCB2YWx1ZXM6IHJlYWRvbmx5IHVua25vd25bXSwgdHlwZTogc3RyaW5nLFxuICAgICAgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3Nvcikge1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICovXG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXNDb21tZW50QmluZGluZyA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAvLyBGb3IgZWFjaCBiaW5kaW5nIHdlIHdhbnQgdG8gZGV0ZXJtaW5lIHRoZSBraW5kIG9mIG1hcmtlciB0byBpbnNlcnRcbiAgICAgIC8vIGludG8gdGhlIHRlbXBsYXRlIHNvdXJjZSBiZWZvcmUgaXQncyBwYXJzZWQgYnkgdGhlIGJyb3dzZXIncyBIVE1MXG4gICAgICAvLyBwYXJzZXIuIFRoZSBtYXJrZXIgdHlwZSBpcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBleHByZXNzaW9uIGlzIGluIGFuXG4gICAgICAvLyBhdHRyaWJ1dGUsIHRleHQsIG9yIGNvbW1lbnQgcG9zaXRpb24uXG4gICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZGluZyB0aGVcbiAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UncmUgb25seSBpbiB0aGlzIGJyYW5jaCBpZiB3ZSBkb24ndCBoYXZlIGEgYXR0cmlidXRlLWxpa2VcbiAgICAgICAgLy8gcHJlY2VkaW5nIHNlcXVlbmNlLiBGb3IgY29tbWVudHMsIHRoaXMgZ3VhcmRzIGFnYWluc3QgdW51c3VhbFxuICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVzIGxpa2UgPGRpdiBmb289XCI8IS0tJHsnYmFyJ31cIj4uIENhc2VzIGxpa2VcbiAgICAgICAgLy8gPCEtLSBmb289JHsnYmFyJ30tLT4gYXJlIGhhbmRsZWQgY29ycmVjdGx5IGluIHRoZSBhdHRyaWJ1dGUgYnJhbmNoXG4gICAgICAgIC8vIGJlbG93LlxuICAgICAgICBodG1sICs9IHMgKyAoaXNDb21tZW50QmluZGluZyA/IGNvbW1lbnRNYXJrZXIgOiBub2RlTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBhdHRyaWJ1dGVzIHdlIHVzZSBqdXN0IGEgbWFya2VyIHNlbnRpbmVsLCBhbmQgYWxzbyBhcHBlbmQgYVxuICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAvLyB0aGF0IElFIGFuZCBFZGdlIGRvIGZvciBzdHlsZSBhbmQgY2VydGFpbiBTVkcgYXR0cmlidXRlcy5cbiAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBhdHRyaWJ1dGVNYXRjaC5pbmRleCkgKyBhdHRyaWJ1dGVNYXRjaFsxXSArXG4gICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgbWFya2VyO1xuICAgICAgfVxuICAgIH1cbiAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgaWYgKHBvbGljeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyB0aGlzIGlzIHNlY3VyZSBiZWNhdXNlIGB0aGlzLnN0cmluZ3NgIGlzIGEgVGVtcGxhdGVTdHJpbmdzQXJyYXkuXG4gICAgICAvLyBUT0RPOiB2YWxpZGF0ZSB0aGlzIHdoZW5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWlzLXRlbXBsYXRlLW9iamVjdCBpc1xuICAgICAgLy8gaW1wbGVtZW50ZWQuXG4gICAgICB2YWx1ZSA9IHBvbGljeS5jcmVhdGVIVE1MKHZhbHVlKSBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB9XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTUwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQhO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG5cbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG5cbi8qKlxuICogQW4gdXBkYXRhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICByZWFkb25seSBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBlbGVtZW50LmNvbnRlbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IHtzdHJpbmdzLCB2YWx1ZXM6IHtsZW5ndGh9fSA9IHJlc3VsdDtcbiAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0IHwgbnVsbDtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzfSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnNlcnQ6IE5vZGU7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHJlYWRvbmx5IHR5cGU6ICdub2RlJzsgaW5kZXg6IG51bWJlcjtcbn18e1xuICByZWFkb25seSB0eXBlOiAnYXR0cmlidXRlJztcbiAgaW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7ZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IHtEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtkaXJlY3RpdmUsIERpcmVjdGl2ZUZuLCBpc0RpcmVjdGl2ZX0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQge3JlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNJdGVyYWJsZSwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vbGliL3JlbmRlci1vcHRpb25zLmpzJztcbmV4cG9ydCB7cGFydHMsIHJlbmRlcn0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7dGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7Y3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGV9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsaXRIdG1sVmVyc2lvbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjMuMCcpO1xufVxuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuIiwiXG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IHsgaHRtbCwgY3NzLCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9O1xuXG5leHBvcnQgY2xhc3MgQmFzZUxpdCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgJDogYW55ID0ge31cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfKG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyAkJChuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyAkJCQobmFtZTogc3RyaW5nKTogTm9kZUxpc3RPZjxFbGVtZW50PiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yQWxsKG5hbWUpXG4gICAgfVxuXG4gICAgbWFwSURzKCkge1xuICAgICAgICBsZXQgbm9kZUxpc3QgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy4kW25vZGVMaXN0W2ldLmlkXSA9IG5vZGVMaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmaXJlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSA9IG51bGwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIWJ1YmJsZXMpXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiB2YWx1ZSB9KSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHZhbHVlLCBidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSB9KSk7XG5cbiAgICB9XG5cbiAgICBpc09iamVjdCh2YWw6IGFueSkge1xuICAgICAgICBpZiAodmFsID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gKCh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB8fCAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpKTtcbiAgICB9XG5cbiAgICBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjazogYW55KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH1cblxuICAgIGlzT2JqZWN0RW1wdHkodmFsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPYmplY3QodmFsKSAmJiBPYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzY3JvbGxUbygpOiB2b2lkIHtcbiAgICAgICAgLy90aGlzLnNjcm9sbFRvWSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjcm9sbFRhcmdldFkgcGl4ZWxzIHRvIHNjcm9sbC4gRWo6XG4gICAgICAgIGNvbnN0IHRpY2tldHNCbG9ja1Bvc2l0aW9uWSA9IHRoaXMuJC5jb250YWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAqIEBwYXJhbSB0aW1lIFRpbWUgdG8gc2Nyb2xsXG4gICAgICogQHBhcmFtIGVhc2luZ1xuICAgICAqIEBwYXJhbSB0YXJnZXQgc2Nyb2xsVGFyZ2V0IEVsZW1lbnRcbiAgICAgKi9cbiAgICAvLydlYXNlT3V0U2luZScgfCAnZWFzZU91dFNpbmUnIHwgJ2Vhc2VJbk91dFF1aW50J1xuICAgIHByb3RlY3RlZCBzY3JvbGxUb1koc2Nyb2xsVGFyZ2V0WTpudW1iZXIgPSAwLCB0aW1lOm51bWJlciA9IDEwMDAsIGVhc2luZzogc3RyaW5nID0gJ2Vhc2VPdXRTaW5lJywgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IFdpbmRvdyk6IHZvaWQge1xuXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSB0aW1lIC8gMTAwMDtcblxuXG4gICAgICAgIC8vIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGFucm8vZWFzaW5nLWpzL2Jsb2IvbWFzdGVyL2Vhc2luZy5qc1xuICAgICAgICBjb25zdCBlYXNpbmdFcXVhdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgICdlYXNlT3V0U2luZSc6IChwb3M6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLnNpbihwb3MgKiAoTWF0aC5QSSAvIDIpKSxcbiAgICAgICAgICAgICdlYXNlSW5PdXRTaW5lJzogKHBvczogbnVtYmVyKTogbnVtYmVyID0+ICgtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiBwb3MpIC0gMSkpLFxuICAgICAgICAgICAgJ2Vhc2VJbk91dFF1aW50JzogKHBvczogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLCA1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdygocG9zIC0gMiksIDUpICsgMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdW5jZVBhc3QnOiAocG9zOm51bWJlcikgOiBudW1iZXIgPT57XG4gICAgICAgICAgICAgICAgaWYgKHBvcyA8ICgxLzIuNzUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoNy41NjI1KnBvcypwb3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIvMi43NSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIgLSAoNy41NjI1Kihwb3MtPSgxLjUvMi43NSkpKnBvcyArIDAuNzUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIuNS8yLjc1KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMiAtICg3LjU2MjUqKHBvcy09KDIuMjUvMi43NSkpKnBvcyArIDAuOTM3NSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIgLSAoNy41NjI1Kihwb3MtPSgyLjYyNS8yLjc1KSkqcG9zICsgMC45ODQzNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhZGQgYW5pbWF0aW9uIGxvb3BcbiAgICAgICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lICs9IDEgLyA2MDtcblxuICAgICAgICAgICAgY29uc3QgcCA9IGN1cnJlbnRUaW1lIC8gYW5pbWF0aW9uVGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmdFcXVhdGlvbnNbZWFzaW5nXShwKTtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gKHRhcmdldCBhcyBXaW5kb3cpLnBhZ2VZT2Zmc2V0IHx8ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcCB8fCAwO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IChzY3JvbGxUb3AgKyAoKHNjcm9sbFRhcmdldFkgLSBzY3JvbGxUb3ApICogdCkpO1xuXG4gICAgICAgICAgICBpZiAocCA8IDEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICAgICAgICAgICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbFRvcCA9IG5ld1Bvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbWVudCA6IFRoZSBIVE1MRWxlbWVudCB0byBhZGQscmVtb3ZlIG9yIHRvZ2dsZSB0aGUgY2xhc3NlcyB0b1xuICAgICAqIEBwYXJhbSB7Kn0gY2xhc3Nlc0xpc3QgOiBFaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXlcbiAgICAgKiBAcGFyYW0geyp9IG9wdGlvbiA6IFRoZSBvcHRpb24gdG8gc2VsZWN0IHRoZSBvcGVyYXRpb24gMCB0byB0b2dnbGUsIDEgdG8gYWRkLCAyIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVBZGRSZW1vdmVDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzTGlzdDogc3RyaW5nIHwgW3N0cmluZ10sIG9wdGlvbiA9IDApOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudDtcbiAgICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IGNsYXNzZXNMaXN0IHx8ICcnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAodHlwZW9mIGNsYXNzZXMgPT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShjbGFzc2VzKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICBjbGFzc2VzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0xpc3QgPSBzZWxlY3Rvci5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0gKGNsYXNzZXMgYXMgc3RyaW5nKS5yZXBsYWNlKC8oLFxccyp8XFxzKykvZywgJyAnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3Nlcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2FwcC1kcmF3ZXInKVxuZXhwb3J0IGNsYXNzIEFwcERyYXdlciBleHRlbmRzIEJhc2VMaXQge1xuICBzdGF0aWMgc3R5bGVzID0gW2Nzc2BcbiAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogLTEyMHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAtMTIwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDI1MG1zO1xuICAgICAgfVxuICAgICAgOmhvc3QoW29wZW5lZF0pIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBsaW5lYXIsdmlzaWJpbGl0eSAyNTBzIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3BlcnNpc3RlbnRdKSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1hcHAtZHJhd2VyLXdpZHRoLCAyNTZweCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbcGVyc2lzdGVudF1bcG9zaXRpb249bGVmdF0pIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICA6aG9zdChbcGVyc2lzdGVudF1bcG9zaXRpb249cmlnaHRdKSB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgICAjY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1hcHAtZHJhd2VyLXdpZHRoLCAyNTZweCk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWFwcC1kcmF3ZXItY29udGVudC1wYWRkaW5nLCAxMjBweCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgIH1cbiAgICAgICNjb250ZW50W3BlcnNpc3RlbnRdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAjY29udGVudFtwb3NpdGlvbj1yaWdodF0ge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgfVxuICAgICAgI2NvbnRlbnRbc3dpcGUtb3Blbl06OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgfVxuXG4gICAgICAjY29udGVudFtzd2lwZS1vcGVuXVtwb3NpdGlvbj1yaWdodF06OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50W29wZW5lZF0ge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgICNzY3JpbSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAsMCwwLjMsMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVaKDApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZHJhd2VyLXNjcmltLWJhY2tncm91bmQsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgICB9XG5cbiAgICAgICNzY3JpbS52aXNpYmxlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtuby10cmFuc2l0aW9uXSkgI2NvbnRlbnQge1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAgICAgfVxuICAgIGBdO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBpZD1cInNjcmltXCIgY2xhc3M9XCIke3RoaXMub3BlbmVkID8gJ3Zpc2libGUnIDogJyd9XCIgQGNsaWNrPVwiJHt0aGlzLmNsb3NlfVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiID9vcGVuZWQ9XCIke3RoaXMub3BlbmVkfVwiID9wZXJzaXN0ZW50PVwiJHt0aGlzLnBlcnNpc3RlbnR9XCIgP3N3aXBlLW9wZW49XCIke3RoaXMuc3dpcGVPcGVufVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PmBcbiAgfVxuXG4gIC8qKlxuICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgZHJhd2VyLlxuICAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSlcbiAgb3BlbmVkID0gZmFsc2U7XG5cblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIHN3aXBlT3BlbiA9IGZhbHNlXG5cbiAgLyoqXG4gICAqIFRoZSBkcmF3ZXIgZG9lcyBub3QgaGF2ZSBhIHNjcmltIGFuZCBjYW5ub3QgYmUgc3dpcGVkIGNsb3NlLlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBwZXJzaXN0ZW50ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjb21wdXRlZCwgcmVhZC1vbmx5IHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXIgb24gdGhlIHNjcmVlbiAoJ2xlZnQnIG9yXG4gICAqICdyaWdodCcpLlxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nLCByZWZsZWN0OiB0cnVlIH0pXG4gIHBvc2l0aW9uID0gJ2xlZnQnO1xuXG5cbiAgLyoqXG4gICAqIFRyYXAga2V5Ym9hcmQgZm9jdXMgd2hlbiB0aGUgZHJhd2VyIGlzIG9wZW5lZCBhbmQgbm90IHBlcnNpc3RlbnQuXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIG5vRm9jdXNUcmFwID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHN3aXBpbmcgb24gdGhlIGRyYXdlci5cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZGlzYWJsZVN3aXBlID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHByb3BzOiB7IFtrOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICBfdHJhbnNsYXRlT2Zmc2V0OiAwLFxuICAgIF90cmFja0RldGFpbHM6IHVuZGVmaW5lZCxcbiAgICBfZHJhd2VyU3RhdGU6IDAsXG4gICAgX2JvdW5kRXNjS2V5ZG93bkhhbmRsZXI6IHVuZGVmaW5lZCxcbiAgICBfZmlyc3RUYWJTdG9wOiB1bmRlZmluZWQsXG4gICAgX2xhc3RUYWJTdG9wOiB1bmRlZmluZWQsXG5cbiAgfVxuXG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnByb3BzWydfYm91bmRFc2NLZXlkb3duSGFuZGxlciddID0gdGhpcy5fZXNjS2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb3BzWydfdGFiS2V5ZG93bkhhbmRsZXInXSA9IHRoaXMuX3RhYktleWRvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5wcm9wcy5fdGFiS2V5ZG93bkhhbmRsZXIpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMucHJvcHMuX2JvdW5kRXhjS2V5ZG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5maXJlKCdhcHAtcmVzZXQtbGF5b3V0Jyk7XG4gIH1cblxuICBwcml2YXRlIF90YWJLZXlkb3duSGFuZGxlcihldmVudDogeyBrZXlDb2RlOiBudW1iZXI7IHNoaWZ0S2V5OiBhbnk7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubm9Gb2N1c1RyYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgVEFCX0tFWUNPREUgPSA5O1xuICAgIGlmICh0aGlzLnByb3BzLl9kcmF3ZXJTdGF0ZSA9PT0gdGhpcy5wcm9wc1snX0RSQVdFUl9TVEFURS5PUEVORUQnXSAmJlxuICAgICAgZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWUNPREUpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5fZmlyc3RUYWJTdG9wICYmXG4gICAgICAgICAgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnRhcmdldCA9PT0gdGhpcy5wcm9wcy5fZmlyc3RUYWJTdG9wKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAodGhpcy5wcm9wcy5fbGFzdFRhYlN0b3AhIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5fbGFzdFRhYlN0b3AgJiYgKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnRhcmdldCA9PT0gKHRoaXMucHJvcHMuX2xhc3RUYWJTdG9wISBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICh0aGlzLnByb3BzLl9maXJzdFRhYlN0b3AhIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXNjS2V5ZG93bkhhbmRsZXIoZXZlbnQ6IHsga2V5Q29kZTogbnVtYmVyOyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSk6IHZvaWQge1xuICAgIHZhciBFU0NfS0VZQ09ERSA9IDI3O1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NfS0VZQ09ERSkge1xuICAgICAgLy8gUHJldmVudCBhbnkgc2lkZSBlZmZlY3RzIGlmIGFwcC1kcmF3ZXIgY2xvc2VzLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLl9ib3VuZEVzY0tleWRvd25IYW5kbGVyKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnByb3BzLl90YWJLZXlkb3duSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyYXdlci5cbiAgICovXG4gIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpcmUoJ2RyYXdlci1vcGVuZWQtY2hhbmdlZCcsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgZHJhd2VyLlxuICAgKi9cbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5maXJlKCdkcmF3ZXItb3BlbmVkLWNoYW5nZWQnLCBmYWxzZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzc01lbnUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLiQuY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LS12aXNpYmxlXCIpKSB7XG4gICAgICB0aGlzLiQuY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS0tdmlzaWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tdmlzaWJsZScpO1xuICAgIH1cbiAgfVxufVxuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2FwcC1kcmF3ZXInOiBBcHBEcmF3ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MsIGh0bWwgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FwcC1oZWFkZXInKVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlciBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHNjcm9sbEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBsYXN0X2tub3duX3Njcm9sbF9wb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgdGlja2luZzogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgIGNzc2BcblxuICAgICAgOmhvc3QoW3RvcF0pe1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtaGVhZGVyLWJnLWNvbG9yLCBibHVlKTs7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaG93XSl7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtaGVhZGVyLWJnLWNvbG9yLCBibHVlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQsIDY0cHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhciwgdHJhbnNmb3JtIDEwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIC5wcmVmaXgsIC5zdWZmaXh7XG4gICAgICAgIGZsZXg6IDEgMCA3LjUlO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWFwcC1oZWFkZXItaGVpZ2h0LCA2NHB4KTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAuc3VmZml4IHtcbiAgICAgICAgZmxleDogMSAwIDEwJTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZmxleDogMSAwIDgwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLCBibGFjaylcbiAgICAgIH1cbiAgICBgXTtcblxuICBAcHJvcGVydHkoKVxuICB0aXRsZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIHRvcCA9IHRydWU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBzaG93ID0gdHJ1ZTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cInByZWZpeFwiPlxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiPlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+XG4gICAgICA8aDYgY2xhc3M9XCJoZWFkbGluZS02XCI+JHt0aGlzLnRpdGxlfTwvaDY+XG4gICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInN1ZmZpeFwiPlxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiPlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwdWJsaWMgc2V0U2Nyb2xsRWxlbWVudChzY3JvbGw6IEhUTUxFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghc2Nyb2xsKSByZXR1cm47XG4gICAgdGhpcy5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsO1xuICAgIC8qIHNldCBsaXN0ZW5lciAqL1xuICAgIHRoaXMuc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEFjdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsQWN0aW9uKCkge1xuXG4gICAgbGV0IGRpZmZlcmVuY2UgPSB0aGlzLnNjcm9sbEVsZW1lbnQhLnNjcm9sbFRvcCAtIHRoaXMubGFzdF9rbm93bl9zY3JvbGxfcG9zaXRpb247XG4gICAgdGhpcy5sYXN0X2tub3duX3Njcm9sbF9wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsRWxlbWVudCEuc2Nyb2xsVG9wO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXRoaXMudGlja2luZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuc2hvd0hlYWRlcihkaWZmZXJlbmNlLCBzZWxmLmxhc3Rfa25vd25fc2Nyb2xsX3Bvc2l0aW9uKTtcbiAgICAgICAgc2VsZi50aWNraW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50aWNraW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0hlYWRlcihkaXJlY3Rpb246IG51bWJlciwgY3VycmVudDogbnVtYmVyKSB7XG5cbiAgICBpZiAoY3VycmVudCA8PSAwICYmIGN1cnJlbnQgPj0gMCkge1xuICAgICAgdGhpcy50b3AgPSB0cnVlO1xuICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9wID0gZmFsc2U7XG4gICAgICBpZiAoY3VycmVudCA+PSA2NCAmJiBkaXJlY3Rpb24gPiAwKSB7XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAoY3VycmVudCA+IDY0KSA/ICcxJyA6IChjdXJyZW50IC8gNjQpICsgJyc7XG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2FwcC1oZWFkZXInOiBBcHBIZWFkZXI7XG4gIH1cbn0iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5cbkBjdXN0b21FbGVtZW50KCdjdXN0b20tbW9kYWwnKVxuZXhwb3J0IGNsYXNzIEN1c3RvbU1vZGFsIGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlIDogU3RyaW5nIH0pXG4gICAgYWNjZXB0TXNuID0gXCJPa1wiXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlIDogU3RyaW5nIH0pXG4gICAgcmVqZWN0TXNuID0gXCJDYW5jZWxcIlxuXG4gICAgQHByb3BlcnR5KHsgdHlwZSA6IFN0cmluZyB9KVxuICAgIGJvZHkgPSBcIlwiXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgICB0aXRsZSA9IFwiXCJcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgICBzaG93ID0gZmFsc2VcbiAgICBcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gICAgY29uZmlybSA9IGZhbHNlXG5cbiAgICBvblJlc29sdmUgOiBhbnlcbiAgICBvblJlamVjdDogYW55XG5cbiAgICBzdGF0aWMgZ2V0IHN0eWxlcygpe1xuICAgICAgICByZXR1cm4gWyBcbiAgICAgICAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbiAgICAgICAgICAgIDpob3N0KC5sYXJnZSkgLm1kLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwxZnIpIG1pbm1heCgwLDNmcikgbWlubWF4KDAsMC43NWZyKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogNzApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdCgubWVkaXVtKSAubWQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgwLDEuMjVmcikgbWlubWF4KDAsM2ZyKSBtaW5tYXgoMCwwLjc1ZnIpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiA2MCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1tb2RhbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxNzA7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgIC8qYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1kLXNob3cge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTYwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBDb250ZW50IHN0eWxlcyAqL1xuICAgICAgICAgICAgLm1kLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMCwxLjI1ZnIpIG1pbm1heCgwLDNmcikgbWlubWF4KDAsMWZyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXZoO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDU1KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWQtY29udGVudCBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWQtY29udGVudCA+IGRpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1kLWNvbnRlbnQgPiBkaXYudGl0bGUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1kLWNvbnRlbnQgPiBkaXYuZm9vdGVye1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJpcHBsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgICAgICAgICAgICAgICAtLXJpcHBsZS1iYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgICAgIC0tcmlwcGxlLWJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJpcHBsZS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS0zIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmlwcGxlLWNvbnRhaW5lcjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJpcHBsZS1jb250YWluZXIuZnVsbCwgcmlwcGxlLWNvbnRhaW5lci5mdWxsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCl7XG4gICAgICAgICAgICAgICAgLm1kLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgXTtcbiAgICB9XG5cbnJlbmRlcigpe1xuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJtZC1tb2RhbCBtZC1lZmZlY3QtMVwiIGlkPVwibW9kYWxcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1jb250ZW50XCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJoZWFkbGluZS0zXCI+JHt0aGlzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJib2R5LTFcIj4ke3RoaXMuYm9keX08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maXJtP2h0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxyaXBwbGUtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cIiR7dGhpcy5fcmVqZWN0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZWplY3RNc259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9yaXBwbGUtY29udGFpbmVyPmA6aHRtbGA8ZGl2PjwvZGl2PmBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lciBjbGFzcz1cIiR7dGhpcy5jb25maXJtPydmdWxsJzonJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCIke3RoaXMuX2FjY2VwdH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWNjZXB0TXNufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1kLW92ZXJsYXlcIj48L2Rpdj5gO1xuICAgIH1cblxuXG4gICAgXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6YW55LCBvbGR2YWw6YW55LCBuZXd2YWw6YW55KSB7XG4gICAgICAgIFxuICAgICAgICBpZiggbmFtZSA9PT0gXCJzaG93XCIpe1xuICAgICAgICAgICAgaWYob2xkdmFsID09PSBudWxsICYmIG5ld3ZhbD09PSBcIlwiICl7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICB9ZWxzZSBpZihvbGR2YWwgPT09IFwiXCIgJiYgbmV3dmFsID09PSBudWxsICl7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkdmFsLCBuZXd2YWwpO1xuICAgIH1cblxuICAgIHNob3dEaWFsb2codGl0bGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9vcGVuTW9kYWwoKTsgICAgICAgIFxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLm9uUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLm9uUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaWFsb2codGl0bGU6c3RyaW5nLCBtZXNzYWdlOnN0cmluZyl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmJvZHkgPSBtZXNzYWdlXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9vcGVuTW9kYWwoKTsgICAgICAgIFxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLm9uUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLm9uUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBfb3Blbk1vZGFsKCl7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICAgIGNvbnN0IG1vZGFsOkhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuXygnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwhLmNsYXNzTGlzdC5hZGQoJ21kLXNob3cnKTtcbiAgICB9XG5cbiAgICBfY2xvc2VNb2RhbCgpe1xuICAgICAgICBjb25zdCBtb2RhbDpIVE1MRWxlbWVudCB8IG51bGwgPSB0aGlzLl8oJ21vZGFsJyk7XG4gICAgICAgIG1vZGFsIS5jbGFzc0xpc3QucmVtb3ZlKCdtZC1zaG93Jyk7XG4gICAgfVxuXG4gICAgX3JlamVjdCgpe1xuICAgICAgICB0aGlzLm9uUmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9XG5cbiAgICBfYWNjZXB0KCl7XG4gICAgICAgIHRoaXMub25SZXNvbHZlKHRydWUpO1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgICAnY3VzdG9tLW1vZGFsJzogQ3VzdG9tTW9kYWw7XG4gICAgfVxuICB9XG4gIFxuIiwiaW1wb3J0IHsgQmFzZUxpdCwgY3NzLCBodG1sLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50J1xuaW1wb3J0IHsgVHlwb2dyYXBoeVN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcblxuQGN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1sb2FkZXInKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUxvYWRlciBleHRlbmRzIEJhc2VMaXQge1xuXG4gICAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICAgICAgICBjc3NgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9hZGVyID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sb2FkZXItYmctY29sb3IsdmFyKC0tYWNjZW50LWNvbG9yKSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGVyIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9hZGVyID4gZGl2Om50aC1vZi10eXBlKDEpLCAubG9hZGVyID4gZGl2Om50aC1vZi10eXBlKDUpLCAubG9hZGVyID4gZGl2Om50aC1vZi10eXBlKDkpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2FkZXIgPiBkaXY6bnRoLW9mLXR5cGUoNCksIC5sb2FkZXIgPiBkaXY6bnRoLW9mLXR5cGUoOCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvYWRlciA+IGRpdjpudGgtb2YtdHlwZSgyKSwgLmxvYWRlciA+IGRpdjpudGgtb2YtdHlwZSg2KSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9hZGVyID4gZGl2Om50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImJvZHktMVwiPkNhcmdhbmRvLi4uPC9wPmA7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIEhUTUxUYWdOYW1lTWFwIHtcbiAgICAgICAgJ2N1c3RvbS1sb2FkZXInIDogQ3VzdG9tTG9hZGVyXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCwgY3NzLCBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi1zaGFyZWQtc3R5bGUnO1xuXG5AY3VzdG9tRWxlbWVudCgnY3VzdG9tLXJhZGlvLWdyb3VwJylcbmV4cG9ydCBjbGFzcyBDdXN0b21SYWRpb0dyb3VwIGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgICBzZWxlY3RlZCA9IDBcbiAgICBcbiAgICBAcHJvcGVydHkoeyB0eXBlIDogU3RyaW5nIH0pXG4gICAgdmFsdWUgPSAnJ1xuICAgIFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gICAgb3B0aW9uczogQXJyYXkgPHN0cmluZz4gPSBbXVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZSA6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSlcbiAgICBpbmxpbmUgPSBmYWxzZVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZSA6IEJvb2xlYW4gfSlcbiAgICByZXF1aXJlZCA9IHRydWUgXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlIDogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICAgIGludmFsaWQgPSBmYWxzZVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyLCByZWZsZWN0OiB0cnVlIH0pXG4gICAgdGFiaW5kZXg9IDA7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gICAgX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4gICAgICAgICAgICA6aG9zdCg6Zm9jdXMpLCAqOmZvY3Vze1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0KC5ib3JkZXJpbikge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QoW2lubGluZV0pID4gLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1yYWRpbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggLTNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHJpcHBsZSAwLjI1cyBsaW5lYXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQ6ZGlzYWJsZWQgKyBsYWJlbDpiZWZvcmUsIC5tZC1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDpkaXNhYmxlZCArIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZC1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDpkaXNhYmxlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWQtcmFkaW8gbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWQtcmFkaW8gbGFiZWw6YmVmb3JlLCAubWQtcmFkaW8gbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZC1yYWRpbyBsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1kLXJhZGlvIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAwIDZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvciA6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjYyNWVtKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QoW2ludmFsaWRdKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QoW2ludmFsaWRdKSAudGl0bGUsIDpob3N0KFtpbnZhbGlkXSkgbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yIDogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAgICAgYFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGU6S2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXkgPT09ICdUYWInKVxuICAgICAgICAgICAgICAgIHRoaXMuX29uU2hpZnRUYWJEb3duKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJCQoXCJkaXYgbGFiZWxcIikhLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmluZGV4ID0gMDtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9ucy5tYXAoKGtleSwgaW5kZXgpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke2tleX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3B0aW9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIke2tleX1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD1cIiR7dGhpcy5zZWxlY3RlZCA9PSBpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBAa2V5ZG93bj1cIiR7dGhpcy5fb25FbnRlclByZXNzfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cIiR7a2V5fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fY2hlY2t9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIke2luZGV4fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5LTJcIj4ke2tleX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PmApfVxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICB9XG5cbiAgICBfY2hlY2soZXZlbnQ6RXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbCA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCkhLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbCA9PSB0aGlzLnNlbGVjdGVkID8gXCJcIiA6ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KSEuaW5uZXJUZXh0O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsID09IHRoaXMuc2VsZWN0ZWQgPyAtMSA6IHZhbDtcbiAgICAgICAgdGhpcy5maXJlKCd2YWx1ZS1jaGFuZ2VkJywgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgdW5jaGVjaygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IC0xO1xuICAgIH1cblxuICAgIF9vbkVudGVyUHJlc3MoZTpLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKVxuICAgICAgICAgICAgdGhpcy5fY2hlY2soZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzOmFueSkge1xuXG4gICAgICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJ2YWx1ZVwiKSAmJiAhY2hhbmdlZFByb3BlcnRpZXMuZ2V0KFwidmFsdWVcIikpIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfb25TaGlmdFRhYkRvd24oKSB7XG4gICAgICAgIHZhciBvbGRUYWJJbmRleCA9IHRoaXMudGFiaW5kZXg7XG4gICAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhYmluZGV4ID0gb2xkVGFiSW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9zaGlmdFRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgICAgICdjdXN0b20tcmFkaW8tZ3JvdXAnIDogQ3VzdG9tUmFkaW9Hcm91cCBcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGZpcmVFdmVudCA9IChldmVudDpzdHJpbmcsIGRldGFpbDogYW55KT0+e1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGRldGFpbCB9KSk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IChzdGF0ZTphbnksIHRpdGxlOnN0cmluZywgcGF0aDpzdHJpbmcpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCBwYXRoKVxuICAgIGNvbnN0IHBvcFN0YXRlRXZlbnQgPSBuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnLCB7IHN0YXRlOiBzdGF0ZSB9KTtcbiAgICBkaXNwYXRjaEV2ZW50KHBvcFN0YXRlRXZlbnQpXG59IiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcywgaHRtbCB9IGZyb20gJy4vYmFzZS1lbGVtZW50JztcbmltcG9ydCAnLi9jdXN0b20tY29tcG9uZW50cy9sYXlvdXQvYXBwLWRyYXdlcic7XG5pbXBvcnQgJy4vY3VzdG9tLWNvbXBvbmVudHMvbGF5b3V0L2FwcC1oZWFkZXInO1xuaW1wb3J0IHsgaW5zdGFsbFJvdXRlciB9IGZyb20gJy4vdXRpbGl0aWVzL2hlbHBlcnMnO1xuaW1wb3J0IHsgSWNvblN0eWxlLCBTY3JvbGxCYXJTdHlsZSwgVHlwb2dyYXBoeVN0eWxlLCBBbGlnbkFic29sdXRlU3R5bGUgfSBmcm9tICcuL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgeyBBcHBIZWFkZXIgfSBmcm9tICcuL2N1c3RvbS1jb21wb25lbnRzL2xheW91dC9hcHAtaGVhZGVyJztcbmltcG9ydCAnLi9jdXN0b20tY29tcG9uZW50cy9tb2RhbC9jdXN0b20tbW9kYWwnO1xuaW1wb3J0ICcuL2N1c3RvbS1jb21wb25lbnRzL3ByZWxvYWRlcnMvY3VzdG9tLWxvYWRlcidcbmltcG9ydCAnLi9zbmFjay1iYXInO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBjaGFuZ2VMb2NhdGlvbiB9IGZyb20gJy4vZGF0YS9oZWxwZXItZnVuY3Rpb25zJztcbmltcG9ydCB7IEN1c3RvbU1vZGFsIH0gZnJvbSAnLi9jdXN0b20tY29tcG9uZW50cy9tb2RhbC9jdXN0b20tbW9kYWwnO1xuaW1wb3J0IHsgZmV0Y2hRdWVyeSB9IGZyb20gJy4vcmVxdWVzdHMvcmVxdWVzdCdcbmltcG9ydCAnLi9jdXN0b20tY29tcG9uZW50cy9yYWRpby1ncm91cC9jdXN0b20tcmFkaW8tZ3JvdXAnO1xuXG4vKlxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Nzc2ZTYsICM4ZTU0ZTkpO1xuKi9cblxuQGN1c3RvbUVsZW1lbnQoJ21haW4tYXBwJylcbmV4cG9ydCBjbGFzcyBNYWluQXBwIGV4dGVuZHMgQmFzZUxpdCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgIEljb25TdHlsZSxcbiAgICBTY3JvbGxCYXJTdHlsZSxcbiAgICBBbGlnbkFic29sdXRlU3R5bGUsXG4gICAgY3NzYFxuXG4gICAgOmhvc3Qge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgaGVpZ2h0OiAxMDB2aDsgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgQ3VzdG9tIFByb3BlcnRpZXMgKi9cbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gICAgICAtLWRhcmstcHJpbWFyeS1jb2xvciA6ICM2ODMxMTE7XG4gICAgICAtLWRlZmF1bHQtcHJpbWFyeS1jb2xvciA6ICAjZjZmN2ZmO1xuICAgICAgLS1saWdodC1wcmltYXJ5LWNvbG9yIDogI2VhZWFmZjlkO1xuICAgICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2ZlZmZmYztcbiAgICAgIC0tYWNjZW50LWNvbG9yIDogI2ZjZmYyZjtcbiAgICAgIC0tcHJpbWFyeS10ZXh0LWNvbG9yIDogIzkwOTIxYjtcbiAgICAgIC0tc2Vjb25kYXJ5LXRleHQtY29sb3IgOiAjM2Y1MTYxO1xuICAgICAgLS1kaXZpZGVyLWNvbG9yIDogI2FkYjhiZGNmO1xuICAgICAgLS1lcnJvci1jb2xvcjogI0M0MzAyQjtcbiAgICAgIC0tc2hhZG93LXRyYW5zaXRpb246IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIC0tc2hhZG93LWVsZXZhdGlvbi0xZHA6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAtLXNoYWRvdy1lbGV2YXRpb24tMmRwOiAwIDJweCAycHggMCByZ2JhKDAsMCwwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsIDAuMTIpLFxuICAgICAgICAgICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwgMC4yKTtcbiAgICAgIC0tc2hhZG93LWVsZXZhdGlvbi0zZHA6IDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgICAwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLCAwLjQpO1xuICAgICAgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDogMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLCAwLjQpO1xuICAgICAgLS1zaGFkb3ctZWxldmF0aW9uLTZkcDogMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsIDAuMTIpLFxuICAgICAgICAgICAgICAgICAgMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwgMC40KTtcbiAgICAgIC0tc2hhZG93LWVsZXZhdGlvbi04ZHA6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwgMC4xMiksXG4gICAgICAgICAgICAgICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLCAwLjQpO1xuICAgICAgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA6MCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwICA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAgICAgICAgIDAgIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIGFwcC1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE1MDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYXBwLWhlYWRlci1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgYXBwLWRyYXdlcntcbiAgICAgIHotaW5kZXg6IDE1MDtcbiAgICB9XG5cbiAgICBtYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICBoZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCkgLSA2NHB4KTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCkgLSA2NHB4KTtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCkgLSA2NHB4KTtcbiAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLypcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1hcHAtZm9udC1mYW1pbHkpO1xuICAgICAgKi9cbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1ncy9iZy5naWYpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cblxuICAgIC5wYWdlLCBjdXN0b20tbG9hZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBhZ2UuZmFkZS1vdXQsIGN1c3RvbS1sb2FkZXJbc2hvd10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5kcmF3ZXItbGlzdCA+IGF7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cblxuICAgIGFbc2VsZWN0ZWRdLCBhOmhvdmVye1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgIH1cblxuICAgIGRpdi51bmRlcmxpbmUge1xuICAgICAgbWFyZ2luOiAxMi41cHggYXV0bztcbiAgICB9XG4gICAgY3VzdG9tLW1vZGFsIC5ib2R5LTEge1xuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgIH1cblxuXG4gICAgQG1lZGlhIHByaW50IHtcblxuICAgICAgYXBwLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgICBgXG4gIF07XG5cbiAgQHByb3BlcnR5KHsgdHlwZSA6IEJvb2xlYW4gfSlcbiAgb3ZlcmZsb3cgPSB0cnVlXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzaG93c25hY2tiYXIgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgc25hY2tiYXJNZXNzYWdlID0gJyc7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHVzZXI6IGFueSA9IHt9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nfSlcbiAgYXBwVGl0bGUgPSBcIlAxIC0gU09QRVMgMlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBsb2FkaW5nID0gdHJ1ZVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBwYWdlID0gXCJob21lXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbGFzdFBhZ2UgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBfZHJhd2VyT3BlbmVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBfYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW59KVxuICBfaW5zdGFsbCA9IHRydWU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzaG93ID0gdHJ1ZVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB1cmwgPSAnJ1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBfbW9kYWxNc24gPSAnJ1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgPHN0eWxlPlxuICAgICAgI21haW4tY29udGVudCB7XG4gICAgICAgIG92ZXJmbG93OiAke3RoaXMub3ZlcmZsb3c/J2F1dG8nOidoaWRkZW4nfTtcbiAgICAgIH1cbiAgICAgPC9zdHlsZT5cbiAgICAgPGFwcC1oZWFkZXIgP3Nob3c9JHt0aGlzLnNob3d9IHRpdGxlPVwiUHJhY3RpY2EgMSAtIFNPUEVTMlwiPjwvYXBwLWhlYWRlcj5cblxuICAgICA8bWFpbiBpZD1cIm1haW4tY29udGVudFwiIGNsYXNzPVwiYm9keS0xXCI+XG4gICAgICA8bG9naW4tdmlldyBcbiAgICAgICAgLnVybD0ke3RoaXMudXJsfVxuICAgICAgICBjbGFzcz1cInBhZ2VcIiBcbiAgICAgICAgP2FjdGl2ZT0ke3RoaXMucGFnZT09XCJsb2dpblwifVxuICAgICAgICBpZD1cImxvZ2luXCI+PC9sb2dpbi12aWV3PlxuICAgICAgPGhvbWUtdmlldyBcbiAgICAgICAgLnVybD0ke3RoaXMudXJsfVxuICAgICAgICBjbGFzcz1cInBhZ2VcIiBcbiAgICAgICAgP2FjdGl2ZT0ke3RoaXMucGFnZT09XCJob21lXCJ9XG4gICAgICAgIC51c2VyID0gJHt0aGlzLnVzZXJ9XG4gICAgICAgIGlkPVwiaG9tZVwiPjwvaG9tZS12aWV3PlxuICAgICAgPGN1c3RvbS1sb2FkZXIgY2xhc3M9XCJ2ZXJ0aWNhbC1hbGlnblwiID9zaG93PSR7dGhpcy5sb2FkaW5nfT48L2N1c3RvbS1sb2FkZXI+XG4gICAgICA8c25hY2stYmFyID9hY3RpdmU9JHt0aGlzLnNob3dzbmFja2Jhcn0gY2xhc3M9XCJzdWJ0aXRsZVwiPiR7dGhpcy5zbmFja2Jhck1lc3NhZ2V9PC9zbmFjay1iYXI+XG4gICAgIDwvbWFpbj5cbiAgICAgPGN1c3RvbS1tb2RhbCBpZD1cIm1vZGFsLW1lc3NhZ2VcIiBhY2NlcHRNc249J09LJyA/Y29uZmlybT0ke3RydWV9IGNsYXNzPVwibWVkaXVtXCI+XG4gICAgICAgPGRpdiBzbG90PVwiYm9keVwiIGNsYXNzPVwiYm9keS0xXCI+XG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgJHt0aGlzLl9tb2RhbE1zbn1cbiAgICAgICAgPC9wcmU+XG4gICAgICAgPC9kaXY+XG4gICAgIDwvY3VzdG9tLW1vZGFsPlxuICAgIGA7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmlyc3RVcGRhdGVkKCkge1xuICAgIHdpbmRvdy5zaG93TW9kYWwgPSB0aGlzLl9jcmVhdGVOZXdNb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgaW5zdGFsbFJvdXRlcigobG9jYXRpb24pID0+IHRoaXMuX2xvY2F0aW9uQ2hhbmdlZChsb2NhdGlvbikpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS1vdmVyZmxvdycsIChlOkV2ZW50KT0+e1xuICAgICAgdGhpcy5vdmVyZmxvdyA9ICg8Q3VzdG9tRXZlbnQ+ZSkuZGV0YWlsO1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc25hY2stYmFyLW1lc3NhZ2UnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2hvd3NuYWNrYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuc25hY2tiYXJNZXNzYWdlID0gKDxDdXN0b21FdmVudD5lKS5kZXRhaWw7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2hvd3NuYWNrYmFyID0gZmFsc2UsIDIwMDApXG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWwtbWVzc2FnZScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW9kYWxNc24gPSAoPEN1c3RvbUV2ZW50PmUpLmRldGFpbC5tZXNzYWdlO1xuICAgICAgKDxDdXN0b21Nb2RhbD50aGlzLl8oJ21vZGFsLW1lc3NhZ2UnKSEpLnNob3dEaWFsb2coKDxDdXN0b21FdmVudD5lKS5kZXRhaWwudGl0bGUpXG4gICAgfSk7XG5cbiAgICAoPEFwcEhlYWRlcj50aGlzLiQkKCdhcHAtaGVhZGVyJykhKS5zZXRTY3JvbGxFbGVtZW50KHRoaXMuXygnbWFpbi1jb250ZW50JykpO1xuICAgIHdpbmRvdy5zY3JvbGxUYXJnZXQgPSB0aGlzLl8oJ21haW4tY29udGVudCcpITtcbiAgfVxuXG4gIF9sb2NhdGlvbkNoYW5nZWQobG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5kZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIGNvbnN0IHBhZ2UgPSBwYXRoID09PSAnLycgPyAnaG9tZScgOiBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKChlbDpzdHJpbmcpPT5lbCE9XCJcIilbMF07XG4gICAgdGhpcy5fbG9hZFBhZ2UocGFnZSk7XG4gICAgdGhpcy5fdXBkYXRlRHJhd2VyU3RhdGUoZmFsc2UpO1xuICB9XG5cbiAgX3VwZGF0ZURyYXdlclN0YXRlKG9wZW5lZDogYm9vbGVhbikge1xuICAgIGlmIChvcGVuZWQgIT09IHRoaXMuX2RyYXdlck9wZW5lZCkge1xuICAgICAgdGhpcy5fZHJhd2VyT3BlbmVkID0gb3BlbmVkO1xuICAgIH1cbiAgfVxuXG4gIF9sb2FkUGFnZShwYWdlOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIGltcG9ydCgnLi9wYWdlcy9ob21lLXZpZXcnKS50aGVuKCgpPT50aGlzLmxvYWRpbmcgPSBmYWxzZSk7XG4gICAgdGhpcy5fYW5pbWF0ZVBhZ2UodGhpcy5sYXN0UGFnZSwgdGhpcy5wYWdlKVxuICAgIHRoaXMubGFzdFBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5pbWF0ZVBhZ2UobGFzdFBhZ2U6c3RyaW5nLCBwYWdlOnN0cmluZyl7XG4gICAgaWYobGFzdFBhZ2UgIT0gJycpe1xuICAgICAgdGhpcy5fKGxhc3RQYWdlKSEuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgdGhpcy5fKGxhc3RQYWdlKSEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5fKGxhc3RQYWdlKSEuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgICAgIH0sNTAwKVxuICAgICAgc2V0VGltZW91dCgoKT0+eyBcbiAgICAgICAgdGhpcy5fKHBhZ2UpIS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5fKHBhZ2UpIS5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgICB9LDUwNSk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57IFxuICAgICAgICB0aGlzLl8ocGFnZSkhLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgIH0sMTAwMCk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57IFxuICAgICAgICB0aGlzLl8ocGFnZSkhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLl8ocGFnZSkhLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICAgIH0sNTA1KTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PnsgXG4gICAgICAgIHRoaXMuXyhwYWdlKSEuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICAgICAgfSwxMDAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0F1dGgocGFnZTpzdHJpbmcpOmJvb2xlYW4ge1xuICAgIGlmKHBhZ2UgIT09ICdob21lJyAmJiBwYWdlICE9PSAnbG9naW4nICYmICF0aGlzLl9hdXRoZW50aWNhdGVkKXtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgZmlyZUV2ZW50KCdzbmFjay1iYXItbWVzc2FnZScsXCJEZWJlIGF1dGVudGljYXJzZSBwYXJhIHNlZ3Vpci4uLlwiKTtcbiAgICAgIH0sNzUwKVxuICAgICAgdGhpcy5sYXN0UGFnZSA9IHBhZ2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCAnSG9tZScsICcvJylcbiAgICB0aGlzLnVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXYnID8gYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9gIDogJy8nO1xuICAgIHdpbmRvdy51cmwgPSB0aGlzLnVybDtcbiAgICAvLyB3ZSBjcmVhdGUgYSBsaW5rIHRvIGFwaSBzb2NrZXRcbiAgICAvKnRoaXMuYXBpU29ja2V0ID0gbmV3IFNvY2tldCgoaXNDb25uZWN0ZWQ6IGJvb2xlYW4pPT5hbGVydChpc0Nvbm5lY3RlZCksIChtZXNzYWdlOnN0cmluZyk9PmFsZXJ0KG1lc3NhZ2UpKTtcbiAgICB0aGlzLmFwaVNvY2tldC5jb25uZWN0KCk7XG4gICAgd2luZG93LmFwaVNvY2tldCA9IHRoaXMuYXBpU29ja2V0O1xuICAgICovXG4gICAgLy93ZSBjcmVhdGUgYSBsaW5rIHRvIHF1ZVNvY2tldCB0byB1c2UgaXQgaW4gb3JkZXJzXG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVOZXdNb2RhbCh0aXRsZTpzdHJpbmcsIG1lc3NhZ2U6c3RyaW5nLCBjb25maXJtOmJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2N1c3RvbS1tb2RhbCcpO1xuICAgIHRoaXMuc2hhZG93Um9vdCEuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIG1vZGFsLmNvbmZpcm0gPSBjb25maXJtO1xuICAgIHJldHVybiBtb2RhbC5jcmVhdGVEaWFsb2codGl0bGUsIG1lc3NhZ2UpO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbWFpbi1hcHAnOiBNYWluQXBwO1xuICB9XG59XG5cbkRhdGUucHJvdG90eXBlLnRvSVNPVFpTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc3QgdHpvID0gLXRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgZGlmID0gdHpvID49IDAgPyAnKycgOiAnLScsXG5cbiAgcGFkID0gZnVuY3Rpb24gKG51bTpudW1iZXIpIHtcbiAgICAgIGNvbnN0IG5vcm0gPSBNYXRoLmZsb29yKE1hdGguYWJzKG51bSkpO1xuICAgICAgcmV0dXJuIChub3JtIDwgMTAgPyAnMCcgOiAnJykgKyBub3JtO1xuICB9O1xuXG4gIHJldHVybiB0aGlzLmdldEZ1bGxZZWFyKCkgK1xuICAnLScgKyBwYWQodGhpcy5nZXRNb250aCgpICsgMSkgK1xuICAnLScgKyBwYWQodGhpcy5nZXREYXRlKCkpICtcbiAgJ1QnICsgcGFkKHRoaXMuZ2V0SG91cnMoKSkgK1xuICAnOicgKyBwYWQodGhpcy5nZXRNaW51dGVzKCkpICtcbiAgJzonICsgcGFkKHRoaXMuZ2V0U2Vjb25kcygpKSArXG4gIGRpZiArIHBhZCh0em8gLyA2MCkgK1xuICAnOicgKyBwYWQodHpvICUgNjApO1xufVxuXG5EYXRlLnByb3RvdHlwZS50b0lTT1RaU3ViU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50b0lTT1RaU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDE2KS5zcGxpdChcIlRcIikuam9pbihcIiBcIik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHsgXG4gIGludGVyZmFjZSBEYXRlIHsgXG4gICAgdG9JU09UWlN1YlN0cmluZygpOiBzdHJpbmc7XG4gICAgdG9JU09UWlN0cmluZygpOnN0cmluZztcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHNjcm9sbFRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgc2hvd01vZGFsOiAodGl0bGU6c3RyaW5nLCBtZXNzYWdlOnN0cmluZywgY29uZmlybTpib29sZWFuKSA9PiBQcm9taXNlPGFueT5cbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdzbmFjay1iYXInKVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyIGV4dGVuZHMgQmFzZUxpdCB7XG4gIFxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2aXNpYmlsaXR5LCB0cmFuc2Zvcm07XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgOmhvc3QoW2FjdGl2ZV0pIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnc25hY2stYmFyJzogU25hY2tCYXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCdcblxuZXhwb3J0IGNvbnN0IEFsaWduQWJzb2x1dGVTdHlsZSA9IGNzc2BcbiAgICAudmVydGljYWwtYWxpZ24ge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDZW50ZXJBbGlnbiA9IGNzc2BcbiAgICAuY2VudGVyLWFsaWduIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1gO1xuXG5leHBvcnQgY29uc3QgRm9ybUNTUyA9IGNzc2BcbiAgICA6aG9zdHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLTJkcCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuZmlsdGVycyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMCAxIDkwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMTk7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuZmlsdGVycyBsYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIHRvcDogLTEuMjVyZW07XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgIH1cbiAgICBcbiAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIGZvcm0gPiAqIHtcbiAgICAgICAgZmxleDogMCAxIDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIH1cblxuICAgIHJpcHBsZS1jb250YWluZXIge1xuICAgICAgICBmbGV4OiAwIDEgNTAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLmZvcm0tc3R5bGUge1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNjcm9sbEJhclN0eWxlID0gY3NzYFxuICAgICNtYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgfVxuXG4gICAgLnNjcm9sbGFibGUudHJhbnNwYXJlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgI21haW4tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC5zY3JvbGxhYmxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGZmMDA7XG4gICAgfVxuXG4gICAgLnNjcm9sbGFibGUudHJhbnNwYXJlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyNzBkZWcsdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKSAwJSwgdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKSA3NSUsIHRyYW5zcGFyZW50IDc1JSk7XG4gICAgfVxuXG4gICAgLnNjcm9sbGFibGUudHJhbnNwYXJlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgICNtYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAuc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA0cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBJY29uU3R5bGUgPSBjc3NgXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgZmlsbDogdmFyKC0taWNvbi1maWxsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IsIGJsYWNrKSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfWBcblxuZXhwb3J0IGNvbnN0IFR5cG9ncmFwaHlTdHlsZSA9IGNzc2BcblxuICAgIC51bmRlcmxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cblxuICAgIC51bmRlcmxpbmUuZnVsbHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVuZGVybGluZS5tYXJnaW4ge1xuICAgICAgICBtYXJnaW46IDEyLjVweCBhdXRvO1xuICAgIH1cblxuICAgIC51bmRlcmxpbmUubWFyZ2luLWJvdHRvbSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEyLjVweDtcbiAgICB9XG5cbiAgICAudW5kZXJsaW5lLmxlZnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC51bmRlcmxpbmUudGlueXtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG5cbiAgICAuaGVhZGxpbmUtMSwgLmhlYWRsaW5lLTIsIC5oZWFkbGluZS0zLCAuaGVhZGxpbmUtNCwgLmhlYWRsaW5lLTUsIC5oZWFkbGluZS02LFxuICAgIC5zdWJ0aXRsZS0xLCAuc3VidGl0bGUtMiwgLmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB9XG5cbiAgICAuaGVhZGxpbmUtMSB7IGZvbnQtc2l6ZTogOTZweDsgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7IGZvbnQtd2VpZ2h0OiBsaWdodGVyOyBsZXR0ZXItc3BhY2luZzotMS41cHg7IHBhZGRpbmc6IDAgMTZweDsgfVxuICAgIC5oZWFkbGluZS0yIHsgZm9udC1zaXplOiA2MHB4OyBmb250LXdlaWdodDogbm9ybWFsOyBsZXR0ZXItc3BhY2luZzogMC4yNXB4O31cbiAgICAuaGVhZGxpbmUtMyB7IGZvbnQtc2l6ZTogNDhweDsgbGV0dGVyLXNwYWNpbmc6MDsgfVxuICAgIC5oZWFkbGluZS00IHsgZm9udC1zaXplOiAzNHB4OyBsZXR0ZXItc3BhY2luZzowOyB9XG4gICAgLmhlYWRsaW5lLTUgeyBmb250LXNpemU6IDI0cHg7IH1cbiAgICAuaGVhZGxpbmUtNiB7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IG1lZGl1bTsgbGV0dGVyLXNwYWNpbmc6MC4xNXB4O31cblxuICAgIHAgeyBtYXJnaW46IDA7IHRleHQtYWxpZ246IGp1c3RpZnk7IH1cblxuICAgIC5ib2R5LTEsIC5ib2R5LTIsIC5vdmVybGluZSwgLmNhcHRpb24sIC5idXR0b24geyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyB9XG5cbiAgICAuc3VidGl0bGUtMSwgLmJvZHktMSB7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7IGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxuICAgIC5zdWJ0aXRsZS0yLCAuYm9keS0yIHsgZm9udC1zaXplOiAxNHB4OyBsZXR0ZXItc3BhY2luZzowLjI1cHg7IH1cbiAgICAuYnV0dG9uICB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IG1lZGl1bTsgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDsgfVxuICAgIC5vdmVybGluZXsgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgLmNhcHRpb24geyBmb250LXNpemU6IDEwcHg7IH1cbiAgICAuYnV0dG9uLCAuY2FwdGlvbiwgLm92ZXJsaW5lIHt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25TdHlsZXMgPSBjc3NgXG5cbiAgICAubGlua2VkLWJ0bntcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcbiAgICB9XG5cbiAgICAud2lkZS1idG4ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cblxuICAgIC5yb3VuZGVkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9YFxuXG5leHBvcnQgY29uc3QgU3ViUGFnZVZpZXdTdHlsZSA9IGNzc2BcbiAgICAuc2xpZGVyIHtcbiAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMi41dmg7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXZoLCAxdmgpICogMi41KTtcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlci5ub3BhZGRpbmd7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1gXG5cbmV4cG9ydCBjb25zdCBSZWZyYWN0aW9uQ1NTID0gY3NzYFxuICAgICosIDpob3N0IHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4gICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMXB4IDhweCAxcHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmhvcml6b250YWwtZmxleHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxuXG4gICAgLmhvcml6b250YWwtZmxleC5kcCB7XG4gICAgICAgIHBhZGRpbmc6IDA7IFxuICAgIH1cblxuICAgIC5ob3Jpem9udGFsLWZsZXggPiAqIHtcbiAgICAgICAgZmxleDogMCAwIDIyLjUlO1xuICAgIH1cblxuICAgIC5oYWNre1xuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICB9XG5cbiAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICBjb2xvcjogdmFyKCAtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICA6aG9zdChbZWRpdC1mb3JtXSkgLmhvcml6b250YWwtY29udCwgOmhvc3QoW2VkaXQtZm9ybV0pIC5ob3Jpem9udGFsLWNvbnQgKyBkaXYsIDpob3N0KFtlZGl0LWZvcm1dKSAuY29udGFpbmVyLWZsZXh7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvcml6b250YWwtY29udCwgLmhvcml6b250YWwtY29udCArIGRpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXItZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA1cHggNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgIH1cblxuICAgIC5jb250YWluZXItZmxleCA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1mbGV4ID4gZGl2Om50aC1jaGlsZCgyKXtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAudmVydGljYWwtdGV4dHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuMjU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuZXh0cmEtYmxvY2t7XG4gICAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6YXV0bzsgXG4gICAgICAgIG1pbi1oZWlnaHQ6MDtcbiAgICB9XG5cbiAgICByaXBwbGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDQ0LjUlO1xuICAgIH1cblxuXG4gICAgLmZvcm0tc3R5bGUgPiAuY29udGFpbmVyLWZsZXgsIC5mb3JtLXN0eWxlID4gLmhvcml6b250YWwtY29udCwgXG4gICAgLmZvcm0tc3R5bGUgPiAuaG9yaXpvbnRhbC1mbGV4IHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi0yZHApO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjg0MHB4KXtcbiAgICAgICAgXG4gICAgICAgIGN1c3RvbS1pbnB1dHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWZsZXggPiBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItZmxleCA+IGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tLWlucHV0Om50aC1jaGlsZChuKzEpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudmVydGljYWwtdGV4dHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yaXpvbnRhbC1mbGV4e1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9ICAgICBcblxuICAgICAgICAuY29udGFpbmVyLWZsZXgge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmluZGljYXRvcntcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yaXpvbnRhbC1mbGV4LmhhY2t7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9ICAgXG5cbiAgICAgICAgLmhvcml6b250YWwtZmxleC5oYWNrIGN1c3RvbS1kcm9wZG93biwgXG4gICAgICAgIC5ob3Jpem9udGFsLWZsZXguaGFjayBjdXN0b20taW5wdXR7XG4gICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yaXpvbnRhbC1mbGV4LmRwIGN1c3RvbS1pbnB1dHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOC41JTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLXN0eWxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgfWAiLCJleHBvcnQgeyBpbnN0YWxsTWVkaWFRdWVyeVdhdGNoZXIgfSBmcm9tICcuL21lZGlhLXF1ZXJ5JztcbmV4cG9ydCB7IHNldE1ldGFUYWcsIHVwZGF0ZU1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5leHBvcnQgeyBpbnN0YWxsT2ZmbGluZVdhdGNoZXIgfSBmcm9tICcuL25ldHdvcmsnO1xuZXhwb3J0IHsgaW5zdGFsbFJvdXRlciB9IGZyb20gJy4vcm91dGVyJzsiLCJleHBvcnQgY29uc3QgaW5zdGFsbE1lZGlhUXVlcnlXYXRjaGVyID0gKG1lZGlhUXVlcnk6IHN0cmluZywgbGF5b3V0Q2hhbmdlZENhbGxiYWNrOiAoYXJnMDogYm9vbGVhbikgPT4gdm9pZCkgPT4ge1xuICAgIGxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcbiAgICBtcWwuYWRkTGlzdGVuZXIoKGUpID0+IGxheW91dENoYW5nZWRDYWxsYmFjayhlLm1hdGNoZXMpKTtcbiAgICBsYXlvdXRDaGFuZ2VkQ2FsbGJhY2sobXFsLm1hdGNoZXMpO1xufTsiLCJleHBvcnQgY29uc3QgdXBkYXRlTWV0YWRhdGEgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVybCwgaW1hZ2UsIGltYWdlQWx0IH06IGFueSkgPT4ge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICBzZXRNZXRhVGFnKCdwcm9wZXJ0eScsICdvZzp0aXRsZScsIHRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHNldE1ldGFUYWcoJ25hbWUnLCAnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHNldE1ldGFUYWcoJ3Byb3BlcnR5JywgJ29nOmRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgc2V0TWV0YVRhZygncHJvcGVydHknLCAnb2c6aW1hZ2UnLCBpbWFnZSk7XG4gICAgfVxuICAgIGlmIChpbWFnZUFsdCkge1xuICAgICAgICBzZXRNZXRhVGFnKCdwcm9wZXJ0eScsICdvZzppbWFnZTphbHQnLCBpbWFnZUFsdCk7XG4gICAgfVxuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBzZXRNZXRhVGFnKCdwcm9wZXJ0eScsICdvZzp1cmwnLCB1cmwpO1xufTtcbi8qKlxuICBVdGlsaXR5IG1ldGhvZCB0byBjcmVhdGUgb3IgdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgbWV0YSB0YWcgYmFzZWQgb24gYW5cbiAgYXR0cmlidXRlIG5hbWUvdmFsdWUgcGFpci5cblxuICBFeGFtcGxlIChpbiB5b3VyIHRvcCBsZXZlbCBlbGVtZW50IG9yIGRvY3VtZW50LCBvciBpbiB0aGUgcm91dGVyIGNhbGxiYWNrKTpcblxuICAgICAgaW1wb3J0IHsgc2V0TWV0YVRhZyB9IGZyb20gJ3B3YS1oZWxwZXJzL21ldGFkYXRhLmpzJztcblxuICAgICAgc2V0TWV0YVRhZygnbmFtZScsICd0d2l0dGVyOmNhcmQnLCAnc3VtbWFyeScpO1xuICAgICAgXG4gIFRoaXMgd291bGQgY3JlYXRlIHRoZSBmb2xsb3dpbmcgbWV0YSB0YWcgaW4gdGhlIGhlYWQgb2YgdGhlIGRvY3VtZW50IChvclxuICB1cGRhdGUgdGhlIGNvbnRlbnQgYXR0cmlidXRlIGlmIGEgbWV0YSB0YWcgd2l0aCBuYW1lPVwidHdpdHRlcjpjYXJkXCIgZXhpc3RzKTpcblxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCI+XG5cbiovXG5leHBvcnQgZnVuY3Rpb24gc2V0TWV0YVRhZyhhdHRyTmFtZTogc3RyaW5nLCBhdHRyVmFsdWU6IHN0cmluZywgY29udGVudDogYW55KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYG1ldGFbJHthdHRyTmFtZX09XCIke2F0dHJWYWx1ZX1cIl1gKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50JywgY29udGVudCB8fCAnJyk7XG59IiwiZXhwb3J0IGNvbnN0IGluc3RhbGxPZmZsaW5lV2F0Y2hlciA9IChvZmZsaW5lVXBkYXRlZENhbGxiYWNrOiAoYXJnMDogYm9vbGVhbikgPT4gdm9pZCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCAoKSA9PiBvZmZsaW5lVXBkYXRlZENhbGxiYWNrKGZhbHNlKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCAoKSA9PiBvZmZsaW5lVXBkYXRlZENhbGxiYWNrKHRydWUpKTtcbiAgICBvZmZsaW5lVXBkYXRlZENhbGxiYWNrKG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKTtcbn07IiwiZXhwb3J0IGNvbnN0IGluc3RhbGxSb3V0ZXIgPSAobG9jYXRpb25VcGRhdGVkQ2FsbGJhY2s6IChhcmcwOiBMb2NhdGlvbiwgYXJnMTogTW91c2VFdmVudCB8IFBvcFN0YXRlRXZlbnQgfCBIYXNoQ2hhbmdlRXZlbnQgfCBudWxsKSA9PiB2b2lkKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkIHx8IGUuYnV0dG9uICE9PSAwIHx8XG4gICAgICAgICAgICBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGUuY29tcG9zZWRQYXRoKCkuZmlsdGVyKG4gPT4gKG4gYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdBJylbMF07XG4gICAgICAgIGlmICghYW5jaG9yIHx8IChhbmNob3IgYXMgdW5rbm93biBhcyBFdmVudCkudGFyZ2V0IHx8XG4gICAgICAgICAgICAoYW5jaG9yIGFzIEhUTUxFbGVtZW50KS5oYXNBdHRyaWJ1dGUoJ2Rvd25sb2FkJykgfHxcbiAgICAgICAgICAgIChhbmNob3IgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGhyZWYgPSAoYW5jaG9yIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmO1xuICAgICAgICBpZiAoIWhyZWYgfHwgaHJlZi5pbmRleE9mKCdtYWlsdG86JykgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gbG9jYXRpb24ub3JpZ2luIHx8IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgIGlmIChocmVmLmluZGV4T2Yob3JpZ2luKSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoaHJlZiAhPT0gbG9jYXRpb24uaHJlZikge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgaHJlZik7XG4gICAgICAgICAgICBsb2NhdGlvblVwZGF0ZWRDYWxsYmFjayhsb2NhdGlvbiwgZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGUgPT4gbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sod2luZG93LmxvY2F0aW9uLCBlKSk7XG4gICAgLy9oYXNuJ3QgYmVlbiB0ZXN0ZWRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGUgPT4gbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sod2luZG93LmxvY2F0aW9uLCBlKSk7XG4gICAgbG9jYXRpb25VcGRhdGVkQ2FsbGJhY2sod2luZG93LmxvY2F0aW9uLCBudWxsIC8qIGV2ZW50ICovKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==