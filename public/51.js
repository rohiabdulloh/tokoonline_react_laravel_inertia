(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/@material-ui/icons/AddCircle.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddCircle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
}), 'AddCircle');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.default = _default;

/***/ }),

/***/ "./resources/js/Pages/Produk/Index.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/Produk/Index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _Shared_Dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../Shared/Dialog */ "./resources/js/Shared/Dialog.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  //state untuk dialog
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    open: false,
    route: null
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dialog = _React$useState2[0],
      setDialog = _React$useState2[1]; //buka dialog


  var handleDialogOpen = function handleDialogOpen(route) {
    setDialog({
      open: true,
      route: route
    });
  }; //tutup dialog


  var handleDialogClose = function handleDialogClose() {
    setDialog({
      open: false,
      route: null
    });
  };

  var produk = props.produk; //menyiapkan judul kolom tabel

  var columns = ["No", "Foto", "Kode Produk", "Nama Produk", "Kategori", "Harga", "Berat", "Stok", {
    name: "aksi",
    label: "Aksi",
    options: {
      filter: false,
      sort: false
    }
  }]; //menyiapkan data untuk ditampilkan pada tabel

  var data = [];
  produk.map(function (pro, index) {
    data.push([index + 1, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: 'images/' + pro.foto,
      width: "100"
    }), pro.kode_produk, pro.nama_produk, pro.nama_kategori,
    /*#__PURE__*/
    //menampilkan angka dalam format uang
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: pro.harga,
      displayType: 'text',
      thousandSeparator: true,
      prefix: 'Rp. '
    }), pro.berat, pro.stok, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"],
      href: route('produk.edit', pro.id_produk),
      color: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        return handleDialogOpen(route('produk.destroy', pro.id_produk));
      },
      color: "secondary",
      method: "delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)))]);
  });
  var options = {
    //menambahkan ikon tambah data pada toolbar tabel
    customToolbar: function customToolbar() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"],
        href: route('produk.create'),
        color: "primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_6___default.a, null));
    },
    //mengatur tindakan ketika tombol hapus pada toolbar diklik
    customToolbarSelect: function customToolbarSelect(selected) {
      var deletedId = [];
      selected.data.map(function (data) {
        if (produk.length > 0) deletedId.push(produk[data.index].id_produk);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: function onClick() {
          return handleDialogOpen(route('produk.delete', JSON.stringify(deletedId)));
        },
        color: "secondary",
        method: "delete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Produk"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "breadcrumb",
    style: {
      padding: "10px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"],
    href: "/"
  }, " Home "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Produk ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mui_datatables__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: "Data Produk",
    data: data,
    columns: columns,
    options: options
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Dialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
    openDialog: dialog.open,
    closeDialog: handleDialogClose,
    route: dialog.route
  }));
});

/***/ }),

/***/ "./resources/js/Shared/Dialog.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Dialog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var openDialog = _ref.openDialog,
      closeDialog = _ref.closeDialog,
      route = _ref.route;

  //menangani ketika klik OK
  var handleOk = function handleOk() {
    //Arahkan ke route sesuai props route dg method delete
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"]["delete"](route).then(function () {
      closeDialog();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: openDialog,
    onClose: closeDialog,
    "aria-labelledby": "dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "dialog-title"
  }, "Konfirmasi Hapus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Yakin akan menghapus data?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: closeDialog,
    color: "secondary"
  }, "Batal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleOk,
    color: "primary"
  }, "OK"))));
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