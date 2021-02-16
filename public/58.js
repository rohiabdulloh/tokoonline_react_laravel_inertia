(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./resources/js/Pages/Dashboard/Index.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Category */ "./node_modules/@material-ui/icons/Category.js");
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ "./node_modules/@material-ui/icons/LocalMall.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../Shared/Layout */ "./resources/js/Shared/Layout.js");














var InfoDashboard = function InfoDashboard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bgcolor: props.bg,
    padding: 2,
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 4
  }, props.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.text))));
};

var Dashboard = function Dashboard(props) {
  console.log(props.datapenjualan);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    sm: 3,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoDashboard, {
    bg: "info.main",
    value: props.jmlkategori,
    text: "Jumlah Kategori",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_7___default.a, {
      style: {
        fontSize: 60
      }
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    sm: 3,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoDashboard, {
    bg: "success.main",
    value: props.jmlproduk,
    text: "Jumlah Produk",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        fontSize: 60
      }
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    sm: 3,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoDashboard, {
    bg: "warning.main",
    value: props.jmluser,
    text: "Jumlah User",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        fontSize: 60
      }
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    sm: 3,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoDashboard, {
    bg: "error.main",
    value: props.jmlpesanan,
    text: "Jumlah Pesanan",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default.a, {
      style: {
        fontSize: 60
      }
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: {
      marginTop: 20
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Grafik Penjualan"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["ResponsiveContainer"], {
    width: "100%",
    height: 300
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
    data: props.datapenjualan,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["CartesianGrid"], {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
    dataKey: "tanggal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
    dataKey: "jumlah",
    stroke: "#8884d8"
  }))))))))));
};

Dashboard.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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