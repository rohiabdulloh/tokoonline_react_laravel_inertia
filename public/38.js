(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./resources/js/Pages/Front/Konfirmasi.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Front/Konfirmasi.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Shared_FrontLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../Shared/FrontLayout */ "./resources/js/Shared/FrontLayout.js");















/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var pesanan = props.pesanan;
  var kota = props.kota;
  var user = props.user; //menyiapkan judul kolom tabel

  var columns = ["No", "Foto", "Kode Produk", "Nama Produk", "Harga", "Jumlah", "Sub Total"]; //menyiapkan data untuk ditampilkan pada tabel

  var data = [];
  var total = 0;
  var berat = 0;
  var no = 0;
  props.detail.map(function (produk) {
    var subtotal = produk.harga * produk.jumlah;
    total += subtotal;
    berat += parseFloat(produk.berat);
    no++;
    data.push([no, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/images/" + produk.foto,
      width: "100"
    }), produk.kode_produk, produk.nama_produk, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: produk.harga,
      displayType: 'text',
      thousandSeparator: true,
      prefix: 'Rp. '
    }), produk.jumlah, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: subtotal,
      displayType: 'text',
      thousandSeparator: true,
      prefix: 'Rp. '
    })]);
  }); //menambahkan baris total

  data.push(["", "", "", "", "", "Total", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: total,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. '
  })]); //menambahkan baris ongkos kirim

  var ongkir = berat <= 1 ? kota.ongkir : kota.ongkir * Math.round(berat);
  data.push(["", "", "", "", "", "Ongkos Kirim", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: ongkir,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. '
  })]); //menambahkan baris total bayar

  var bayar = total + ongkir;
  data.push(["", "", "", "", "", "Total Bayar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: bayar,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'Rp. '
  })]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FrontLayout__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Konfirmasi Pemesanan"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], null, pesanan == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Tidak ada pesanan yang perlu dikonfirmasi saat ini."
  }), pesanan != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Data Pesanan"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    width: "30%"
  }, "Tanggal Pemesanan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", pesanan.tanggal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Nama Pemesan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Alamat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", user.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Telp./HP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", user.hp))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Rincian Pemesanan"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], null, columns.map(function (col, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index
    }, col);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], null, data.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
      hover: true,
      key: index
    }, row.map(function (col, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: index
      }, col);
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kirimkan pembayaran ke nomor rekening berikut:"), props.bank.map(function (bk) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      width: "100%",
      key: bk.id,
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      width: "30%"
    }, "Nama Bank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", bk.nama_bank)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "No. Rekening"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", bk.no_rekening)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pemilik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ": ", bk.nama_pemilik))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Setelah melakukan pembayaran, silakan klik tombol berikut untuk untuk melakukan konfirmasi pembayaran, agar pesanan langsung diproses."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    component: _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"],
    color: "primary",
    href: route('bayar', props.pesanan.id),
    style: {
      marginTop: 10,
      marginLeft: 10
    }
  }, "Konfirmasi Pembayaran")))));
});

/***/ })

}]);