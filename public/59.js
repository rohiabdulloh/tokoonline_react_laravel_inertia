(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./resources/js/Pages/Kategori/Create.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Kategori/Create.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../Shared/Layout */ "./resources/js/Shared/Layout.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  //state untuk nilai input form
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nama_kategori: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1]; //menangani perubahan nilai input pada form


  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('kategori.store'), values);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Tambah Kategori"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "breadcrumb",
    style: {
      padding: "10px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"],
    href: "/"
  }, " Home "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"],
    href: "/kategori"
  }, " Kategori "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Tambah ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Tambah Kategori"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    direction: "column",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fullWidth: true,
    variant: "outlined",
    label: "Kategori",
    name: "nama_kategori",
    value: values.nama_kategori,
    onChange: handleChange,
    error: 'nama_kategori' in props.errors
    /*Ubah tampilan input jadi merah jika ada error*/
    ,
    helperText: props.errors.nama_kategori
    /*Tampilkan pesan error jika ada error*/

  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary"
  }, "Simpan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "secondary",
    style: {
      margin: "0 10px"
    },
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"],
    href: "/kategori"
  }, "Batal")))))));
});

/***/ }),

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\xampp\\htdocs\\react_laravel\\resources\\js\\Shared\\Layout.js: Unterminated JSX contents (101:20)\n\n\u001b[0m \u001b[90m  99 | \u001b[39m          message\u001b[33m=\u001b[39m{flash\u001b[33m.\u001b[39mmessage} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 100 | \u001b[39m      )}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 101 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mThemeProvider\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 102 | \u001b[39m   )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 103 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 104 | \u001b[39m\u001b[0m\n    at Object._raise (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:799:17)\n    at Object.raiseWithData (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:792:17)\n    at Object.raise (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:786:17)\n    at Object.jsxReadToken (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4375:20)\n    at Object.getTokenFromCode (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4757:19)\n    at Object.nextToken (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:7882:12)\n    at Object.next (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:7807:10)\n    at Object.eat (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:7812:12)\n    at Object.expect (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9075:10)\n    at Object.jsxParseClosingElementAt (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4655:10)\n    at Object.jsxParseElementAt (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4674:37)\n    at Object.jsxParseElementAt (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4678:32)\n    at Object.jsxParseElement (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4736:17)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4743:19)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9976:23)\n    at Object.parseUpdate (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9956:21)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9945:17)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9815:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9752:21)\n    at D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9718:39\n    at Object.allowInAnd (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:11448:12)\n    at Object.parseMaybeAssignAllowIn (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9718:17)\n    at Object.parseParenAndDistinguishExpression (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:10607:28)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:10311:21)\n    at Object.parseExprAtom (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:4748:20)\n    at Object.parseExprSubscripts (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9976:23)\n    at Object.parseUpdate (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9956:21)\n    at Object.parseMaybeUnary (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9945:17)\n    at Object.parseExprOps (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9815:23)\n    at Object.parseMaybeConditional (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseMaybeAssign (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9752:21)\n    at Object.parseExpressionBase (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9696:23)\n    at D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9690:39\n    at Object.allowInAnd (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:11442:16)\n    at Object.parseExpression (D:\\xampp\\htdocs\\react_laravel\\node_modules\\@babel\\parser\\lib\\index.js:9690:17)");

/***/ })

}]);