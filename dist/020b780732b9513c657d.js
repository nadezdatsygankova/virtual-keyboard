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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/index.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  max-width: 1280px;\\n  margin: auto;\\n}\\n\\n.main {\\n  background-color: beige;\\n}\\n\\n.div_textArea_wrapper {\\n  width: 100%;\\n  border: 1px solid #555;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.text_area {\\n  width: 100%;\\n  height: 150px;\\n  border: 1px solid green;\\n  margin-bottom: 30px;\\n  border: none;\\n  outline: none;\\n  font-size: 26px;\\n  background-color: #f7f7f7;\\n  padding-left: 10px;\\n  transition: 0.2s;\\n}\\n\\n.div_wrapper_buttons {\\n  width: 100%;\\n  height: 300px;\\n  background-color: lightskyblue;\\n  text-align: center;\\n}\\n\\n.button {\\n  height: 45px;\\n  width: 6%;\\n  max-width: 90px;\\n  margin: 3px;\\n  border-radius: 4px;\\n  background: rgba(255, 255, 255, 0.2);\\n  color: black;\\n  font-size: 1.05rem;\\n  outline: none;\\n  cursor: pointer;\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  vertical-align: top;\\n  padding: 0;\\n  -webkit-tap-highlight-color: transparent;\\n  position: relative;\\n}\\n\\n.button:active {\\n  background: rgba(255, 255, 255, 0.1);\\n}\\n\\n.button__wide {\\n  width: 15%;\\n}\\n\\n.button__wide_extra {\\n  width: 24%;\\n  max-width: 500px;\\n}\\n\\n.active {\\n  background-color: #333;\\n  color: #fff;\\n}\\n\\n.remove {\\n  animation: keys_animation 0.5s forwards;\\n}\\n\\n@keyframes keys_animation {\\n  0% {\\n    background-color: #333;\\n    color: #fff;\\n  }\\n  100% {\\n    background-color: #fff;\\n    color: #000;\\n  }\\n}\\n.div_information {\\n  width: 100%;\\n  height: 50px;\\n  background-color: lightskyblue;\\n  text-align: center;\\n}\\n\\n.information {\\n  margin: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/styles/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/styles/index.css":
/*!*********************************!*\
  !*** ./assets/styles/index.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/styles/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/scripts/view.js\");\n/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/styles/index.css */ \"./assets/styles/index.css\");\n\n\n// import backgroundImg from '../assets/img/background.jpg';\n\nconst {\n  createDiv, createButton, createTextArea, createParagraph,\n} = _view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst keyLayoutEnglish = [\n  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',\n  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\',\n  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'enter',\n  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',\n  'fn', 'cont', 'opt', 'com', 'space', 'com', 'opt', '◄', '▼', '►'];\nconst keyLayoutRussian = [\n  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',\n  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\',\n  'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',\n  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',\n  'fn', 'cont', 'opt', 'com', 'space', 'com', 'opt', '◄', '▼', '►'];\n\nconst bodyElem = document.querySelector('body');\nconst textAreaArray = [];\n\nconst divContForTextArea = createDiv(bodyElem, 'div_textArea_wrapper');\n\nconst textArea = createTextArea(divContForTextArea, 'text_area');\ntextAreaArray.push(textArea.value);\nconst divContForButtons = createDiv(bodyElem, 'div_wrapper_buttons');\nconst divContInformation = createDiv(bodyElem, 'div_information');\nconst par = createParagraph(divContInformation, 'information');\npar.innerHTML = 'Operation system Mac.<br> Switching a language -> Click mouse button <strong>fn</strong>';\nlet language = 'eng';\nlet isCapsLock = false;\nlet isShift = false;\nconst butClass = ['button'];\n\nfunction render(keyLayout) {\n  divContForButtons.innerHTML = '';\n  if (keyLayout === keyLayoutEnglish) {\n    language = 'eng';\n  } else {\n    language = 'rus';\n  }\n  for (let i = 0; i < keyLayout.length; i += 1) {\n    const buttonCr = (createButton(keyLayout[i], divContForButtons, butClass, 'button'));\n    if (keyLayout[i].toLowerCase() === 'tab' || keyLayout[i].toLowerCase() === 'shift' || keyLayout[i].toLowerCase() === 'com' || keyLayout[i].toLowerCase() === 'caps') {\n      buttonCr.classList.add('button__wide');\n      const classListName = keyLayout[i].toLowerCase();\n      buttonCr.classList.add(classListName);\n      buttonCr.innerText = keyLayout[i].toLowerCase();\n    } else if (keyLayout[i].toLowerCase() === 'cont' || keyLayout[i].toLowerCase() === 'opt') {\n      buttonCr.innerText = keyLayout[i].toLowerCase();\n      buttonCr.classList.add(keyLayout[i].toLowerCase());\n    } else if (keyLayout[i].toLowerCase() === 'space') {\n      buttonCr.classList.add('button__wide_extra', 'space');\n      buttonCr.innerText = '';\n    } else if (keyLayout[i].toLowerCase() === 'fn') {\n      buttonCr.classList.add('fn');\n      buttonCr.innerText = 'fn';\n      const shiftRightY = (buttonCr.previousElementSibling);\n      const brEl = document.createElement('br');\n      shiftRightY.after(brEl);\n    }\n\n    switch (keyLayout[i].toLowerCase()) {\n      case 'delete':\n        buttonCr.classList.add('button__wide', 'delete');\n        buttonCr.innerText = 'delete';\n        divContForButtons.appendChild(document.createElement('br'));\n        break;\n      case '\\\\':\n        divContForButtons.appendChild(document.createElement('br'));\n        break;\n      case 'enter':\n        buttonCr.classList.add('button__wide', 'enter');\n        buttonCr.innerText = 'enter';\n        divContForButtons.appendChild(document.createElement('br'));\n        break;\n      case 'caps':\n        buttonCr.classList.add('button__wide', 'caps');\n        buttonCr.innerText = 'caps';\n        break;\n      case '▲':\n        buttonCr.classList.add('arrowUp');\n        break;\n      case '◄':\n        buttonCr.classList.add('arrowLeft');\n        break;\n      case '▼':\n        buttonCr.classList.add('arrowDown');\n        break;\n      case '►':\n        buttonCr.classList.add('arrowRight');\n        break;\n      default:\n        break;\n    }\n  }\n}\n\n// render first layout\nrender(keyLayoutEnglish);\n\nconst keys = document.querySelectorAll('.button');\nconst spaceKey = document.querySelector('.space');\nconst deleteButton = document.querySelector('.delete');\nconst tabButton = document.querySelector('.tab');\nconst capsButton = document.querySelector('.caps');\n\nconst shift = document.querySelectorAll('.shift');\nconst shiftLeft = shift[0];\nconst shiftRight = shift[1];\nconst controlButton = document.querySelector('.cont');\nconst opt = document.querySelectorAll('.opt');\nconst optLeft = opt[0];\nconst optRight = opt[1];\nconst com = document.querySelectorAll('.com');\nconst comLeft = com[0];\nconst comRight = com[1];\nconst arrowUp = document.querySelector('.arrowUp');\nconst arrowLeft = document.querySelector('.arrowLeft');\nconst arrowDown = document.querySelector('.arrowDown');\nconst arrowRight = document.querySelector('.arrowRight');\n\nfor (let i = 0; i < keys.length; i += 1) {\n  keys[i].setAttribute('keyname', keys[i].innerText);\n  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());\n}\n\nwindow.addEventListener('keydown', (e) => {\n  if (e.key === 'CapsLock') {\n    isCapsLock = !isCapsLock;\n    if (language === 'eng') {\n      if (isCapsLock) {\n        const arrayUpper = [];\n        keyLayoutEnglish.forEach((element) => {\n          arrayUpper.push(element.toUpperCase());\n        });\n        render(arrayUpper);\n        language = 'eng';\n      } else {\n        render(keyLayoutEnglish);\n      }\n    } else if (language === 'rus') {\n      if (isCapsLock) {\n        const arrayUpper = [];\n        keyLayoutRussian.forEach((element) => {\n          arrayUpper.push(element.toUpperCase());\n        });\n        render(arrayUpper);\n        language = 'rus';\n      } else {\n        render(keyLayoutRussian);\n      }\n    }\n  }\n  for (let i = 0; i < keys.length; i += 1) {\n    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {\n      keys[i].classList.add('active');\n    }\n    if (e.code === 'Space') {\n      spaceKey.classList.add('active');\n    } else if (e.code === 'ShiftLeft') {\n      shiftRight.classList.remove('active');\n    } else if (e.code === 'ShiftRight') {\n      shiftLeft.classList.remove('active');\n    } else if (e.code === 'AltLeft') {\n      optLeft.classList.add('active');\n    } else if (e.code === 'AltRight') {\n      optRight.classList.add('active');\n    } else if (e.code === 'MetaLeft') {\n      comLeft.classList.add('active');\n    } else if (e.code === 'MetaRight') {\n      comRight.classList.add('active');\n    } else if (e.code === 'ArrowUp') {\n      arrowUp.classList.add('active');\n    } else if (e.code === 'ArrowDown') {\n      arrowDown.classList.add('active');\n    } else if (e.code === 'ArrowLeft') {\n      arrowLeft.classList.add('active');\n    } else if (e.code === 'ArrowRight') {\n      arrowRight.classList.add('active');\n    } else if (e.code === 'Backspace') {\n      deleteButton.classList.add('active');\n    }\n\n    if (e.code === 'CapsLock') {\n      capsButton.classList.add('active');\n    }\n    if (e.code === 'ControlLeft') {\n      controlButton.classList.add('active');\n    }\n    if (e.code === 'Tab') {\n      tabButton.classList.add('active');\n    }\n    setTimeout(() => {\n      capsButton.classList.remove('active');\n    }, 1000);\n  }\n});\n\nwindow.addEventListener('keyup', (e) => {\n  if (e.key === 'Backspace') {\n    textAreaArray.pop();\n  } else if (e.key === 'Enter') {\n    textAreaArray.push('\\r\\n');\n  } else if (e.key === 'Shift' || e.key === 'Meta') {\n    textAreaArray.push('');\n  } else if (e.key === 'Alt' || e.key === 'ArrowUp' || e.key === 'Control') {\n    textAreaArray.push('');\n  } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {\n    textAreaArray.push('');\n  } else if (e.key === 'Tab') {\n    for (let i = 0; i < 4; i += 1) {\n      textAreaArray.push(' ');\n    }\n  } else if (e.key === 'CapsLock') {\n    textAreaArray.push('');\n  } else {\n    textAreaArray.push(e.key);\n  }\n\n  let elements = '';\n  textAreaArray.forEach((element) => {\n    elements += element;\n  });\n  textArea.value = elements;\n  for (let i = 0; i < keys.length; i += 1) {\n    if (e.key.toLowerCase() === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {\n      keys[i].classList.remove('active');\n      keys[i].classList.add('remove');\n    }\n    if (e.code === 'Space') {\n      spaceKey.classList.remove('active');\n      spaceKey.classList.add('remove');\n    } else if (e.code === 'ShiftLeft') {\n      shiftRight.classList.remove('active');\n      shiftRight.classList.remove('remove');\n    } else if (e.code === 'ShiftRight') {\n      shiftLeft.classList.remove('active');\n      shiftLeft.classList.remove('remove');\n    } else if (e.code === 'AltLeft') {\n      optLeft.classList.remove('active');\n      optLeft.classList.remove('remove');\n    } else if (e.code === 'AltRight') {\n      optRight.classList.remove('active');\n      optRight.classList.remove('remove');\n    } else if (e.code === 'MetaLeft') {\n      comLeft.classList.remove('active');\n      comLeft.classList.remove('remove');\n    } else if (e.code === 'MetaRight') {\n      comRight.classList.remove('active');\n      comRight.classList.remove('remove');\n    } else if (e.code === 'Backspace') {\n      deleteButton.classList.remove('active');\n      deleteButton.classList.add('remove');\n    } else if (e.code === 'ControlLeft') {\n      controlButton.classList.remove('active');\n      controlButton.classList.add('remove');\n    } else if (e.code === 'ArrowUp') {\n      arrowUp.classList.remove('active');\n      arrowUp.classList.add('remove');\n    } else if (e.code === 'ArrowDown') {\n      arrowDown.classList.remove('active');\n      arrowDown.classList.add('remove');\n    } else if (e.code === 'ArrowLeft') {\n      arrowLeft.classList.remove('active');\n      arrowLeft.classList.add('remove');\n    } else if (e.code === 'ArrowRight') {\n      arrowRight.classList.remove('active');\n      arrowRight.classList.add('remove');\n    } else if (e.code === 'Tab') {\n      tabButton.classList.remove('active');\n      tabButton.classList.add('remove');\n      textArea.focus();\n    }\n    // } else {\n    //   textAreaArray.push(e.key);\n    // }\n    setTimeout(() => {\n      keys[i].classList.remove('remove');\n    }, 200);\n  }\n});\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.type === 'button') {\n    if (e.target.innerText.toLowerCase() === 'delete') {\n      textAreaArray.pop();\n      deleteButton.classList.add('active');\n      setTimeout(() => {\n        deleteButton.classList.remove('active');\n      }, 300);\n    } else if (e.target.innerText.toLowerCase() === 'caps') {\n      isCapsLock = !isCapsLock;\n      if (language === 'eng') {\n        if (isCapsLock) {\n          const arrayUpper = [];\n          keyLayoutEnglish.forEach((element) => {\n            arrayUpper.push(element.toUpperCase());\n          });\n          render(arrayUpper);\n          language = 'eng';\n        } else {\n          render(keyLayoutEnglish);\n        }\n      } else if (language === 'rus') {\n        if (isCapsLock) {\n          const arrayUpper = [];\n          keyLayoutRussian.forEach((element) => {\n            arrayUpper.push(element.toUpperCase());\n          });\n          render(arrayUpper);\n          language = 'rus';\n        } else {\n          render(keyLayoutRussian);\n        }\n      }\n    } else if (e.target.innerText.toLowerCase() === 'shift') {\n      isShift = !isShift;\n      if (language === 'eng') {\n        if (isShift) {\n          const arrayUpper = [];\n          keyLayoutEnglish.forEach((element) => {\n            arrayUpper.push(element.toUpperCase());\n          });\n          render(arrayUpper);\n          language = 'eng';\n          isShift = true;\n        } else {\n          render(keyLayoutEnglish);\n          isShift = false;\n        }\n      } else if (language === 'rus') {\n        if (isShift) {\n          const arrayUpper = [];\n          keyLayoutRussian.forEach((element) => {\n            arrayUpper.push(element.toUpperCase());\n          });\n          render(arrayUpper);\n          language = 'rus';\n          isShift = !isShift;\n        } else {\n          render(keyLayoutRussian);\n          isShift = !isShift;\n        }\n      }\n      shift[0].classList.add('active');\n    } else if (e.target.innerText.toLowerCase() === 'fn') {\n      if (language === 'eng') {\n        render(keyLayoutRussian);\n        language = 'rus';\n      } else {\n        render(keyLayoutEnglish);\n      }\n    } else if (e.target.innerText.toLowerCase() === 'tab') {\n      for (let i = 0; i < 4; i += 1) {\n        textAreaArray.push(' ');\n      }\n    } else if (e.target.innerText.toLowerCase() === '') {\n      textAreaArray.push(' ');\n    } else if (e.target.innerText.toLowerCase() === 'enter') {\n      textAreaArray.push('\\r\\n');\n    } else if (e.target.innerText.toLowerCase() === 'cont' || e.target.innerText.toLowerCase() === 'com' || e.target.innerText.toLowerCase() === 'opt') {\n      textAreaArray.push('');\n    } else {\n      textAreaArray.push(e.target.innerText);\n    }\n    let elements = '';\n    textAreaArray.forEach((element) => {\n      elements += element;\n    });\n    textArea.value = elements;\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDiv(container, className) {\n  const div = document.createElement('div');\n  div.classList.add(className);\n  container.append(div);\n  return div;\n}\n\nfunction createButton(letter, container, className, typeButton) {\n  const button = document.createElement('button');\n  for (let i = 0; i < className.length; i += 1) {\n    button.classList.add(className[i]);\n  }\n  button.textContent = letter;\n  button.type = typeButton;\n  container.append(button);\n  return button;\n}\n\nfunction createTextArea(container, className) {\n  const textarea = document.createElement('textarea');\n  textarea.classList = className;\n  container.append(textarea);\n  return textarea;\n}\nfunction createParagraph(container, className) {\n  const par = document.createElement('p');\n  par.classList = className;\n  container.append(par);\n  return par;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createDiv,\n  createButton,\n  createTextArea,\n  createParagraph,\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/view.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;