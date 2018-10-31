/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
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
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/bw_mountains_moon.jpg":
/*!**************************************!*\
  !*** ./assets/bw_mountains_moon.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"023849522f804494f0413ef3d3b94b06.jpg\";\n\n//# sourceURL=webpack:///./assets/bw_mountains_moon.jpg?");

/***/ }),

/***/ "./assets/cody.jpg":
/*!*************************!*\
  !*** ./assets/cody.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f06be1431771bee310da54ef4f2cd021.jpg\";\n\n//# sourceURL=webpack:///./assets/cody.jpg?");

/***/ }),

/***/ "./assets/methow_valley.jpg":
/*!**********************************!*\
  !*** ./assets/methow_valley.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0f29a6337a2f1c53ccbe60459829522e.jpg\";\n\n//# sourceURL=webpack:///./assets/methow_valley.jpg?");

/***/ }),

/***/ "./src/components/about_me.js":
/*!************************************!*\
  !*** ./src/components/about_me.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _picture_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture_carousel */ \"./src/components/picture_carousel.js\");\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    container: {\n      flexGrow: 1,\n      padding: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar AboutMe = function AboutMe(props) {\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    className: classes.container,\n    spacing: 8,\n    container: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    item: true,\n    xs: 8\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"I recently left my job as a program manager on the Microsoft Azure team. I loved my team and the company, but something was missing - I just wasn\\u2019t sure what. After taking time off and traveling around the Pacific North West, climbing and exploring with my girlfriend and new puppy, I settled on a career as a web developer. The future will be an exciting challenge as I explore the latest web technologies and languages. I'm looking forward to learning on a daily basis, to engaging in the design process, and to having the autonomy that lets me live the lifestyle I love.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    item: true,\n    xs: 4\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_picture_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"caption\"\n  }, \"A few pics from my time off (and practice with a slideshow)\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(AboutMe));\n\n//# sourceURL=webpack:///./src/components/about_me.js?");

/***/ }),

/***/ "./src/components/body_paper.js":
/*!**************************************!*\
  !*** ./src/components/body_paper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _about_me__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_me */ \"./src/components/about_me.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: _objectSpread({}, theme.mixins.gutters(), {\n      paddingTop: theme.spacing.unit * 2,\n      paddingBottom: theme.spacing.unit * 2,\n      flexGrow: 1\n    }),\n    tabRoot: {\n      backgroundColor: theme.palette.grey[100]\n    },\n    tabSelected: {\n      border: '1px solid',\n      borderColor: theme.palette.primary.main\n    }\n  };\n};\n\nvar BodyPaper =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BodyPaper, _React$Component);\n\n  function BodyPaper(props) {\n    var _this;\n\n    _classCallCheck(this, BodyPaper);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BodyPaper).call(this, props));\n    _this.state = {\n      value: 0\n    };\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(BodyPaper, [{\n    key: \"handleChange\",\n    value: function handleChange(e, value) {\n      this.setState({\n        value: value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      var value = this.state.value;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n        className: classes.root,\n        square: true,\n        elevation: 1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        container: true,\n        className: classes.root.grid\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 1,\n        lg: 2\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 10,\n        lg: 8\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n        value: this.state.value,\n        onChange: this.handleChange,\n        indicatorColor: \"primary\",\n        classes: {\n          indicator: classes.tabIndicator\n        },\n        centered: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n        label: \"About Me\",\n        classes: {\n          root: classes.tabRoot,\n          selected: classes.tabSelected\n        },\n        style: {\n          borderTopLeftRadius: \"6px\"\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n        label: \"Contact\",\n        classes: {\n          root: classes.tabRoot,\n          selected: classes.tabSelected\n        },\n        style: {\n          borderTopRightRadius: \"6px\"\n        }\n      })), value === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_me__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), value === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 1,\n        lg: 2\n      })));\n    }\n  }]);\n\n  return BodyPaper;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(BodyPaper));\n\n//# sourceURL=webpack:///./src/components/body_paper.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/source/index.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    container: {\n      flexGrow: 1,\n      padding: theme.spacing.unit * 2\n    },\n    item: {\n      margin: theme.spacing.unit\n    },\n    textField: {\n      margin: theme.spacing.unit,\n      width: '95%'\n    },\n    button: _defineProperty({\n      margin: theme.spacing.unit,\n      float: 'right',\n      border: theme.palette.primary.main\n    }, \"border\", '1px solid'),\n    contactContainer: {\n      marginTop: theme.spacing.unit\n    },\n    note: {\n      paddingLeft: theme.spacing.unit,\n      paddingRight: theme.spacing.unit\n    },\n    emailFail: {\n      color: '#F44336',\n      width: '60%',\n      float: 'right',\n      transition: 'all 250ms linear',\n      padding: theme.spacing.unit\n    },\n    emailSuccess: {\n      color: '#4CAF50',\n      float: 'right',\n      transition: 'all 250ms linear',\n      margin: '14px'\n    },\n    progress: {\n      margin: theme.spacing.unit,\n      float: 'right'\n    }\n  };\n};\n\nvar Contact =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Contact, _Component);\n\n  function Contact(props) {\n    var _this;\n\n    _classCallCheck(this, Contact);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));\n    _this.state = {\n      name: '',\n      email: '',\n      message: '',\n      errorMessage: '',\n      emailSending: false,\n      emailSuccess: ''\n    };\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      this.setState(_defineProperty({}, e.target.id, e.target.value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      this.setState({\n        emailSending: true,\n        emailSuccess: ''\n      }, function () {\n        _this2.sendEmail(_this2.state.name, _this2.state.email, _this2.state.message);\n      }); // this.setState({\n      //     name: '',\n      //     email: '',\n      //     message: '',\n      //     errorMessage: '',\n      // })\n    }\n  }, {\n    key: \"sendEmail\",\n    value: function sendEmail(name, email, message) {\n      var _this3 = this;\n\n      this.setState({\n        emailSending: true\n      });\n      var SERVICE_ID = \"bscaspar_gmail\";\n      var TEMPLATE_ID = \"template_G6LO5SQg\";\n      var USER_ID = \"user_ckhJga60nVGejK8C2ZFin\";\n      emailjs_com__WEBPACK_IMPORTED_MODULE_3__[\"send\"](SERVICE_ID, TEMPLATE_ID, {\n        name: name,\n        email: email,\n        message: message\n      }, USER_ID).then(function (response) {\n        _this3.setState({\n          name: '',\n          email: '',\n          message: '',\n          errorMessage: '',\n          emailSuccess: true,\n          emailSending: false\n        });\n\n        setTimeout(function () {\n          _this3.setState({\n            emailSuccess: ''\n          });\n        }, 3000);\n      }, function (error) {\n        _this3.setState({\n          emailSuccess: false,\n          emailSending: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        container: true,\n        className: classes.container,\n        spacing: 8\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n        id: \"name\",\n        label: \"Name\",\n        variant: \"outlined\",\n        required: true,\n        className: classes.textField,\n        value: this.state.name,\n        onChange: this.handleChange,\n        disabled: this.state.emailSending\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n        id: \"email\",\n        label: \"Email\",\n        type: \"email\",\n        variant: \"outlined\",\n        required: true,\n        className: classes.textField,\n        value: this.state.email,\n        onChange: this.handleChange,\n        disabled: this.state.emailSending\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n        id: \"message\",\n        label: \"Message\",\n        multiline: true,\n        rows: 2,\n        variant: \"outlined\",\n        required: true,\n        className: classes.textField,\n        value: this.state.message,\n        onChange: this.handleChange,\n        disabled: this.state.emailSending\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        className: classes.note,\n        variant: \"caption\"\n      }, \"(You can also just email me, bradyscaspar@outlook.com, the form does literally the same thing and is here for practice) \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        variant: \"outlined\",\n        className: classes.button,\n        color: \"primary\",\n        type: \"submit\",\n        disabled: this.state.emailSending\n      }, \"Submit\"), this.state.emailSending && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CircularProgress\"], {\n        className: classes.progress,\n        size: 34\n      }), this.state.emailSuccess === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        className: classes.emailSuccess,\n        variant: \"body2\"\n      }, \"Success!\"), this.state.emailSuccess === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        className: classes.emailFail,\n        variant: \"body2\"\n      }, \"The email didn't work :( try again or use the email listed above\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        md: 6\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.item\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.contactContainer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h5\"\n      }, \"LinkedIn\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"body1\",\n        noWrap: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        target: \"_blank\",\n        href: \"https://www.linkedin.com/in/bradyscaspar\"\n      }, \"https://www.linkedin.com/in/bradyscaspar\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.contactContainer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h5\",\n        noWrap: true\n      }, \"GitHub\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"body1\",\n        noWrap: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        target: \"_blank\",\n        href: \"https://github.com/bscaspar\"\n      }, \"https://github.com/bscaspar\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"caption\",\n        noWrap: false\n      }, \"The code for this site is hosted on my public GH account in the PersonalSite repository, feel free to take a look!\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classes.contactContainer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h5\",\n        noWrap: true\n      }, \"Instagram\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"body1\",\n        noWrap: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        target: \"_blank\",\n        href: \"https://instagram.com/friendly_g\"\n      }, \"https://instagram.com/friendly_g\"))))));\n    }\n  }]);\n\n  return Contact;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(Contact));\n\n//# sourceURL=webpack:///./src/components/contact.js?");

/***/ }),

/***/ "./src/components/header_paper.js":
/*!****************************************!*\
  !*** ./src/components/header_paper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    paper: {\n      padding: theme.spacing.unit * 2\n    },\n    title: {\n      gutterBottom: true\n    },\n    intro: {\n      maxWidth: 600\n    },\n    listContainer: {\n      textAlign: 'center',\n      width: '100%',\n      display: 'inline',\n      backgroundColor: theme.palette.background.paper\n    }\n  };\n};\n\nvar WelcomePaper = function WelcomePaper(props) {\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.paper,\n    elevation: 1,\n    square: true,\n    align: \"center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    className: classes.title,\n    variant: \"h3\",\n    color: \"textPrimary\",\n    gutterBottom: true\n  }, \"Hi, I'm Brady\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Welcome to my site!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    className: classes.intro,\n    variant: \"subtitle1\",\n    color: \"textSecondary\",\n    paragraph: true\n  }, \"I am a new web developer and use this site as a personal design project, and a testing ground for new ideas and frameworks (if you find anything broken, email me!). Things I'm working on right now:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    className: classes.listContainer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.material-ui.com/\"\n  }, \"Material UI\"), \",\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.reactjs.org\"\n  }, \"React\"), \",\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.redux.js.org\"\n  }, \"Redux\"), \",\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.webpack.js.org\"\n  }, \"Webpack\"), \",\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.nodejs.org\"\n  }, \"Node.js\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(WelcomePaper));\n\n//# sourceURL=webpack:///./src/components/header_paper.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/styles/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _simple_appbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple_appbar */ \"./src/components/simple_appbar.js\");\n/* harmony import */ var _header_paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header_paper */ \"./src/components/header_paper.js\");\n/* harmony import */ var _body_paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body_paper */ \"./src/components/body_paper.js\");\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1\n    }\n  };\n};\n\nvar HomeGrid = function HomeGrid(props) {\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_simple_appbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    item: true,\n    xs: 1\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    item: true,\n    xs: 10\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_paper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_body_paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    item: true,\n    xs: 1\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(HomeGrid));\n\n//# sourceURL=webpack:///./src/components/home.js?");

/***/ }),

/***/ "./src/components/picture_carousel.js":
/*!********************************************!*\
  !*** ./src/components/picture_carousel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flowRight */ \"./node_modules/lodash/flowRight.js\");\n/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views-utils */ \"./node_modules/react-swipeable-views-utils/lib/index.js\");\n/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_bw_mountains_moon_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/bw_mountains_moon.jpg */ \"./assets/bw_mountains_moon.jpg\");\n/* harmony import */ var _assets_bw_mountains_moon_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bw_mountains_moon_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_methow_valley_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/methow_valley.jpg */ \"./assets/methow_valley.jpg\");\n/* harmony import */ var _assets_methow_valley_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_methow_valley_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_cody_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/cody.jpg */ \"./assets/cody.jpg\");\n/* harmony import */ var _assets_cody_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_cody_jpg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar EnhancedSwipeableViews = lodash_flowRight__WEBPACK_IMPORTED_MODULE_1___default()(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__[\"autoPlay\"], react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_3__[\"virtualize\"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar IMAGES = [{\n  label: 'bw_mountains_moon',\n  src: _assets_bw_mountains_moon_jpg__WEBPACK_IMPORTED_MODULE_4___default.a\n}, {\n  label: 'methow',\n  src: _assets_methow_valley_jpg__WEBPACK_IMPORTED_MODULE_5___default.a\n}, {\n  label: 'cody',\n  src: _assets_cody_jpg__WEBPACK_IMPORTED_MODULE_6___default.a\n}];\nvar styles = {\n  maxWidth: '100%',\n  maxHeight: '100%'\n};\n\nvar slideRenderer = function slideRenderer() {\n  return IMAGES.map(function (step) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: step.label\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      style: styles,\n      src: step.src\n    }));\n  });\n};\n\nvar PictureCarousel = function PictureCarousel() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedSwipeableViews, {\n    slideRenderer: slideRenderer\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PictureCarousel);\n\n//# sourceURL=webpack:///./src/components/picture_carousel.js?");

/***/ }),

/***/ "./src/components/simple_appbar.js":
/*!*****************************************!*\
  !*** ./src/components/simple_appbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\n\nvar styles = {\n  root: {\n    flexGrow: 1\n  }\n};\n\nvar SimpleAppBar = function SimpleAppBar(props) {\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"static\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(styles)(SimpleAppBar));\n\n//# sourceURL=webpack:///./src/components/simple_appbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CssBaseline\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"MuiThemeProvider\"], {\n    theme: _theme_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.querySelector('.app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n\nvar customTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      light: '#f9683a',\n      main: '#bf360c',\n      dark: '#870000',\n      contrastText: '#ffffff'\n    },\n    secondary: {\n      light: '#c1d5e0',\n      main: '#90a4ae',\n      dark: '#62757f',\n      contrastText: '#000000'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (customTheme);\n\n//# sourceURL=webpack:///./src/theme/theme.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ })

/******/ });