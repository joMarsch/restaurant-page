/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/spencer-davis-ckotRXopwRM-unsplash.jpg */ \"./src/images/spencer-davis-ckotRXopwRM-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --content-container-max-width: 800px;\n    --content-max-width: min(600px, 100%);\n    --header-footer-color: rgb(153, 77, 28);\n    --header-foot-font-color: rgb(245, 204, 160);\n    --content-color: rgba(228, 143, 69, 0.95);\n    --font-color: rgb(107, 36, 12);\n    --footer-height: 32px\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    min-height: 100vh;\n    color: var(--font-color);\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-position: center;\n}\n\n.container {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--header-foot-font-color);\n    background-color: var(--header-footer-color);\n    padding: 8px;\n}\n\nnav>ul {\n    display: flex;\n    gap: 32px;\n    list-style-type: none;\n    font-size: 1.2em;\n    color: var(--header-foot-font-color);\n    font-style: italic;\n}\n\na:link {\n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n    color: var(--header-foot-font-color);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\na:active {\n    text-decoration: underline;\n}\n\n.content {\n    margin: 0px auto;\n    padding: 32px;\n    width: min(75%, var(--content-container-max-width));\n    background-color: var(--content-color);\n    flex-grow: 1;\n    margin-bottom: var(--footer-height);\n}\n\n.content>div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n}\n\n#welcome-logo {\n    display: flex;\n    flex-direction: column;\n    font-size: min(64px, 8vw);\n    align-items: center;\n}\n\n#home img,\n#home p {\n    width: var(--content-max-width);\n}\n\n.item-container div>div:first-child {\n    font-weight: bold;\n    font-size: 1.3em;\n}\n\n.item-container div>div:nth-child(3) {\n    font-style: italic;\n}\n\n.item-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 16px;\n}\n\n#contact>h3 {\n    margin-bottom: -8px;\n}\n\n.contact-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-auto-rows: max-content;\n    column-gap: 6px;\n}\n\n.contact-container img {\n    height: 1.4em;\n    width: auto;\n}\n\n.footer {\n    height: var(--footer-height);\n    background-color: var(--header-footer-color);\n    color: var(--header-foot-font-color);\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _images_phone_classic_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/phone-classic.svg */ \"./src/images/phone-classic.svg\");\n/* harmony import */ var _images_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/email.svg */ \"./src/images/email.svg\");\n\n\n\nclass ContactInformation {\n    constructor(phoneNumber, email, hours, adress) {\n        this._phoneNumber = phoneNumber;\n        this._email = email;\n        this._hours = hours;\n        this._adress = adress;\n    }\n\n    get phoneNumber() {\n        return this._phoneNumber;\n    }\n\n    get email() {\n        return this._email;\n    }\n\n    get hours() {\n        return this._hours;\n    }\n\n    get adress() {\n        return this._adress;\n    }\n}\n\nconst contact = (function () {\n    const container = document.createElement(\"div\");\n    container.id = \"contact\";\n\n    const contactInformation = new ContactInformation(\n        \"(030) 123456789\",\n        \"contact@burgerpalace.de\",\n        [\n            \"Monday: 11:00 - 20:00\",\n            \"Tuesday: 11:00 - 20:00\",\n            \"Wednesday: 11:00 - 20:00\",\n            \"Thursday: 11:00 - 20:00\",\n            \"Friday: 11:00 - 20:00\",\n            \"Saturday: 11:00 - 22:00\",\n            \"Sunday: closed\"\n        ],\n        [\n            \"Burgerpalace\",\n            \"Falsche Straße 13\",\n            \"10113 Berlin\"\n        ]\n    );\n\n    (function buildTitle() {\n        var title = document.createElement(\"h2\");\n        title.innerHTML = \"Contact\";\n        container.appendChild(title);\n    })();\n\n    (function buildContactContainer() {\n        var contactContainer = document.createElement(\"div\");\n        contactContainer.classList.add(\"contact-container\");\n        var information = [\n            [_images_email_svg__WEBPACK_IMPORTED_MODULE_1__, contactInformation.email], \n            [_images_phone_classic_svg__WEBPACK_IMPORTED_MODULE_0__, contactInformation.phoneNumber]\n        ];\n        information.forEach(element => {\n            const image = new Image();\n            image.src = element[0];\n            contactContainer.appendChild(document.createElement(\"div\")).appendChild(image);\n\n            const div = document.createElement(\"div\");\n            div.innerHTML = element[1];\n            contactContainer.appendChild(div);\n        })\n\n        container.appendChild(contactContainer);\n    })();\n\n    (function buildAdressTitle() {\n        var title = document.createElement(\"h3\");\n        title.innerHTML = \"Adress\";\n        container.appendChild(title);\n    })();\n\n    (function buildAdressContainer() {\n        var div = document.createElement(\"div\");\n        div.innerHTML = contactInformation.adress.join(\"<br>\")\n        container.appendChild(div);\n    })();\n\n    (function buildHoursTitle() {\n        var title = document.createElement(\"h3\");\n        title.innerHTML = \"Hours\";\n        container.appendChild(title);\n    })();\n\n    (function buildHoursContainer() {\n        var div = document.createElement(\"div\");\n        div.innerHTML = contactInformation.hours.join(\"<br>\")\n        container.appendChild(div);\n    })();\n\n\n\n    return { container }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_burger_stock_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burger_stock.jpg */ \"./src/images/burger_stock.jpg\");\n\n\nconst home = (function () {\n    const container = document.createElement(\"div\");\n    container.id = \"home\";\n\n    (function buildWelcomeLogo() {\n        const words = [\n            \"Welcome\",\n            \"To\",\n            \"Burgerpalace\"\n        ];\n\n        const welcomeLogo = document.createElement(\"div\");\n        welcomeLogo.id = \"welcome-logo\";\n\n        words.forEach(word => {\n            const wordContainer = document.createElement(\"div\");\n            wordContainer.innerHTML = word;\n            welcomeLogo.appendChild(wordContainer);\n        })\n\n        container.appendChild(welcomeLogo);\n    })();\n\n    (function buildImage() {\n        const image = new Image();\n        image.src = _images_burger_stock_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        container.appendChild(image);\n    })();\n\n    (function buildText() {\n        const paragraph = document.createElement(\"p\");\n\n        paragraph.innerHTML = `This might be the best place to get a burger. But who knows?\n        Maybe there are better places but do you really want to find out? \n        I would, because this restaurant does not exist and you might stay hungry if you try\n        to get a burger from us.`;\n\n        container.appendChild(paragraph);\n    })();\n\n    return { container }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n// Container of the complete website\nconst container = document.querySelector(\".container\");\n\n// Module for the menubar, returns the container\nconst menubar = (function () {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"header\");\n\n    const createMenubarItem = (text, content) => {\n        var li = document.createElement(\"li\");\n        var a = document.createElement(\"a\");\n        li.appendChild(a);\n\n        a.textContent = text;\n        a.setAttribute(\"href\", \"#\")\n        a.addEventListener(\"click\", () => {\n            const contentContainer = document.querySelector(\".content\");\n            contentContainer.replaceChildren();\n            contentContainer.appendChild(content.container);\n        });\n\n        return li;\n    };\n\n    // Instant function to build the title\n    (function buildTitle() {\n        var title = document.createElement(\"h1\");\n        title.innerHTML = \"Burgerpalace\";\n        container.appendChild(title);\n    })();\n\n    // Instant function to build the menubar \n    (function buildMenubar() {\n        const navigationBar = document.createElement(\"nav\")\n        navigationBar.id = \"navigation-bar\";\n        navigationBar.appendChild(document.createElement(\"ul\"))\n        container.appendChild(navigationBar);\n\n        const anchors = [\n            createMenubarItem(\"Home\", _home__WEBPACK_IMPORTED_MODULE_1__.home),\n            createMenubarItem(\"Menu\", _menu__WEBPACK_IMPORTED_MODULE_2__.menu),\n            createMenubarItem(\"Contact\", _contact__WEBPACK_IMPORTED_MODULE_3__.contact)\n        ];\n\n        anchors.forEach(anchor => navigationBar.firstChild.appendChild(anchor));\n    })();\n\n    return { container };\n\n})();\n\n\n// Module for the content container, return the container\nconst content = (function () {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"content\")\n\n    return { container };\n})();\n\nconst footer = (function () {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"footer\")\n\n    const anchor = document.createElement(\"a\");\n    anchor.innerHTML = \"Spencer Davis\";\n    anchor.href = \"https://unsplash.com/de/@spencerdavis\";\n\n    container.innerHTML = \"Background image by \";\n    container.appendChild(anchor);\n\n    return { container };\n})();\n\ncontainer.appendChild(menubar.container);\ncontainer.appendChild(content.container);\ndocument.querySelector(\".content\").appendChild(_home__WEBPACK_IMPORTED_MODULE_1__.home.container)\ncontainer.appendChild(footer.container);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nclass Item {\n    constructor(name, price, ingredients) {\n        this._name = name;\n        this._price = price;\n        this._ingredients = ingredients;\n    }\n\n    get name() {\n        return this._name;\n    }\n\n    get price() {\n        return this._price + \"€\";\n    }\n\n    get ingredients() {\n        return this._ingredients.join(\", \");\n    }\n\n};\n\nconst menuItems = (function () {\n    const basicIngredients = [\n        \"Burger Bun\",\n        \"Tomatoes\",\n        \"Salad\",\n        \"Pickles\"\n    ];\n\n    const list = [\n        new Item(\"Hamburger\", \"6,99\", [\"Beef Patty\"].concat(basicIngredients)),\n        new Item(\"Cheeseburger\", \"7,99\", [\"Beef Patty\", \"Cheddar\"].concat(basicIngredients)),\n        new Item(\"Chicken Burger\", \"7,99\", [\"Chicken Breast\", \"Gouda\"].concat(basicIngredients)),\n    ];\n\n    return { list }\n})();\n\nconst menu = (function () {\n    const container = document.createElement(\"div\");\n    container.id = \"menu\";\n\n    (function buildTitle() {\n        var title = document.createElement(\"h2\");\n        title.innerHTML = \"Menu\";\n        container.appendChild(title);\n    })();\n\n    (function buildItemContainer() {\n        var itemContainer = document.createElement(\"div\");\n        itemContainer.classList.add(\"item-container\");\n\n        menuItems.list.forEach(item => {\n            const menuItem = document.createElement(\"div\");\n            [item.name, item.price, item.ingredients].forEach(property => {\n                const div = document.createElement(\"div\");\n                div.innerHTML = property;\n                menuItem.appendChild(div);\n            })\n            itemContainer.appendChild(menuItem);\n        });\n\n        container.appendChild(itemContainer);\n    })();\n\n\n    return { container }\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/burger_stock.jpg":
/*!*************************************!*\
  !*** ./src/images/burger_stock.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7088dc25a1a31369dc8a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burger_stock.jpg?");

/***/ }),

/***/ "./src/images/email.svg":
/*!******************************!*\
  !*** ./src/images/email.svg ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzZCMjQwQyIgZD0iTTIwLDhMMTIsMTNMNCw4VjZMMTIsMTFMMjAsNk0yMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjZDMjIsNC44OSAyMS4xLDQgMjAsNFoiIC8+PC9zdmc+\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/email.svg?");

/***/ }),

/***/ "./src/images/phone-classic.svg":
/*!**************************************!*\
  !*** ./src/images/phone-classic.svg ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzZCMjQwQyIgZD0iTTEyLDNDNy40NiwzIDMuMzQsNC43OCAwLjI5LDcuNjdDMC4xMSw3Ljg1IDAsOC4xIDAsOC4zOEMwLDguNjYgMC4xMSw4LjkxIDAuMjksOS4wOUwyLjc3LDExLjU3QzIuOTUsMTEuNzUgMy4yLDExLjg2IDMuNSwxMS44NkMzLjc1LDExLjg2IDQsMTEuNzUgNC4xOCwxMS41OEM0Ljk3LDEwLjg0IDUuODcsMTAuMjIgNi44NCw5LjczQzcuMTcsOS41NyA3LjQsOS4yMyA3LjQsOC44M1Y1LjczQzguODUsNS4yNSAxMC4zOSw1IDEyLDVDMTMuNTksNSAxNS4xNCw1LjI1IDE2LjU5LDUuNzJWOC44MkMxNi41OSw5LjIxIDE2LjgyLDkuNTYgMTcuMTUsOS43MkMxOC4xMywxMC4yMSAxOSwxMC44NCAxOS44MiwxMS41N0MyMCwxMS43NSAyMC4yNSwxMS44NSAyMC41LDExLjg1QzIwLjgsMTEuODUgMjEuMDUsMTEuNzQgMjEuMjMsMTEuNTZMMjMuNzEsOS4wOEMyMy44OSw4LjkgMjQsOC42NSAyNCw4LjM3QzI0LDguMDkgMjMuODgsNy44NSAyMy43LDcuNjdDMjAuNjUsNC43OCAxNi41MywzIDEyLDNNOSw3VjEwQzksMTAgMywxNSAzLDE4VjIySDIxVjE4QzIxLDE1IDE1LDEwIDE1LDEwVjdIMTNWOUgxMVY3SDlNMTIsMTJBNCw0IDAgMCwxIDE2LDE2QTQsNCAwIDAsMSAxMiwyMEE0LDQgMCAwLDEgOCwxNkE0LDQgMCAwLDEgMTIsMTJNMTIsMTMuNUEyLjUsMi41IDAgMCwwIDkuNSwxNkEyLjUsMi41IDAgMCwwIDEyLDE4LjVBMi41LDIuNSAwIDAsMCAxNC41LDE2QTIuNSwyLjUgMCAwLDAgMTIsMTMuNVoiIC8+PC9zdmc+\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/phone-classic.svg?");

/***/ }),

/***/ "./src/images/spencer-davis-ckotRXopwRM-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/images/spencer-davis-ckotRXopwRM-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb4c3f021c65f3ea023e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/spencer-davis-ckotRXopwRM-unsplash.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;