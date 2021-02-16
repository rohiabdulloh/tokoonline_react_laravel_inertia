(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./resources/js/Pages/Front/Keranjang.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Front/Keranjang.js ***!
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Shared_FrontLayout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../Shared/FrontLayout */ "./resources/js/Shared/FrontLayout.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var keranjang = props.keranjang != null ? props.keranjang : {}; //membuat objek untuk dimasukkan ke state value

  var objValue = {
    id: 0,
    jumlah: 0,
    total: 0
  };
  var subtotal;
  Object.keys(keranjang).forEach(function (key) {
    var produk = keranjang[key];
    subtotal = produk['harga'] * produk['jumlah'];
    objValue.total += subtotal;
    objValue.jumlah += 1; //tambahkan jumlah dipesan tiap produk ke objek state value

    objValue = _objectSpread(_objectSpread({}, objValue), {}, _defineProperty({}, 'jml_' + produk['id'], produk['jumlah']));
  }); //state untuk menyimpan data yang akan dikirim ketika submit

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(objValue),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1]; //menyiapkan judul kolom tabel


  var columns = ["No", "Foto", "Kode Produk", "Nama Produk", "Harga", "Jumlah", "Sub Total", "Hapus"]; //menyiapkan data untuk ditampilkan pada tabel

  var dataKeranjang = [];
  var no = 0;
  Object.keys(keranjang).forEach(function (key, index) {
    var produk = keranjang[key];
    subtotal = produk['harga'] * produk['jumlah'];
    no++;
    dataKeranjang.push([no, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/" + produk.foto,
      width: "100"
    }), produk['kode'], produk['nama'],
    /*#__PURE__*/
    //menampilkan anga dalam format uang  
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_17___default.a, {
      value: produk['harga'],
      displayType: 'text',
      thousandSeparator: true,
      prefix: 'Rp. '
    }),
    /*#__PURE__*/
    //input jumlah dipesan tiap produk pada tabel
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "number",
      min: 1,
      max: produk['stok'],
      name: 'jml_' + produk['id']
      /*nama input mencantumkan id produk karena akan di-loop*/
      ,
      value: values['jml_' + produk['id']],
      onChange: function onChange(e) {
        return handleChange(e, produk['id']);
      },
      style: {
        width: 50
      }
    }),
    /*#__PURE__*/
    //menampilkan angka dalam format uang
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_17___default.a, {
      value: subtotal,
      displayType: 'text',
      thousandSeparator: true,
      prefix: 'Rp. '
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: function onClick() {
        return handleDelete(produk['id'], index);
      },
      color: "secondary",
      method: "delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null))]);
  }); //state untuk menentukan status disable tombol lanjut pemesanan (checkout) sesuai jumlah data pada keranjang

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dataKeranjang.length == 0),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1]; //menambahkan baris total


  var dataTable = [].concat(dataKeranjang, [["", "", "", "", "", "Total", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_17___default.a, {
    value: objValue.total,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. '
  }), ""]]); //menangani perubahan jumlah pesanan tiap produk pada tabel keranjang

  function handleChange(e, id) {
    var name = e.target.name;
    var value = e.target.value;
    setDisabled(true); //disable tombol sementara sambil nunggu perhitungan total harga

    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({
        id: id
      }, name, value));
    });
  } //menangani event ketika item produk dihapus


  function handleDelete(id, index) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"]["delete"](route('keranjang.destroy', id)).then(function () {
      dataKeranjang.shift(index, 1);
      if (dataKeranjang.length == 0) setDisabled(true);
    });
  } //menangani event ketika tombol lanjutkan belanja diklik untuk menyimpan data pesanan ke database


  function handleSave() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post(route('keranjang.save'), values);
  } //submit form setiap jumlah pesanan diubah untuk update total harga


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (values.id != 0) _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].put(route('keranjang.update', values.id), values).then(function () {
      setDisabled(false); //enable kembali tombol setelah perhitungan total harga selesai
    });
  }, [values]); //mencegah submit form otomatis ketika jumlah pesanan diubah agar submit terjadi setelah state value berubah

  function handleSubmit(e) {
    e.preventDefault();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FrontLayout__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Keranjang Belanja"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Keranjan Belanja"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], null, columns.map(function (col, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: index
    }, col);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_12__["default"], null, dataTable.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
      hover: true,
      key: index
    }, row.map(function (col, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: index
      }, col);
    }));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["InertiaLink"],
    href: "/home",
    style: {
      marginTop: 10
    }
  }, "Kembali Belanja"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleSave,
    style: {
      marginTop: 10,
      marginLeft: 10
    },
    disabled: disabled
  }, "Lanjutkan Pembayaran"))));
});

/***/ })

}]);