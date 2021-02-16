import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CurrencyFormat from 'react-currency-format';

import Layout from './../../Shared/FrontLayout';

export default (props) => {
  const pesanan = props.pesanan;
  const kota = props.kota;
  const user = props.user;

  //menyiapkan judul kolom tabel
  const columns = [
    "No", "Foto", "Kode Produk", "Nama Produk", "Harga", "Jumlah", "Sub Total"
  ];
  
  //menyiapkan data untuk ditampilkan pada tabel
  let data = [];
  let total = 0;
  let berat = 0;
  let no = 0;
  props.detail.map( (produk) => {
    let subtotal = produk.harga * produk.jumlah;
    
    total += subtotal;
    berat += parseFloat(produk.berat);
    
    no++;
    data.push([ no,
        <img src={"/images/"+produk.foto} width="100" />,
        produk.kode_produk, 
        produk.nama_produk, 
        <CurrencyFormat 
          value={produk.harga} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />,
        produk.jumlah,
        <CurrencyFormat 
          value={subtotal} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />
    ]);
  });

  //menambahkan baris total
  data.push(["","","","","","Total", 
    <CurrencyFormat 
      value={total} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'Rp. '}
    />
  ]);
  
  //menambahkan baris ongkos kirim
  let ongkir = (berat<=1) ? kota.ongkir : kota.ongkir * Math.round(berat);
  
  data.push(["","","","","","Ongkos Kirim", 
    <CurrencyFormat 
      value={ongkir} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'Rp. '}
    />
  ]);

  //menambahkan baris total bayar
  let bayar = total + ongkir;
  data.push(["","","","","","Total Bayar", 
    <CurrencyFormat 
      value={bayar} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'Rp. '}
    />
  ]);
  
  return (
    <Layout>
      <Helmet title="Konfirmasi Pemesanan" />
      
      <Card> 
        {/*menampilkan pesan jika tidak ada pesanan yang perlu dikonfirmasi */}
        {pesanan == null && (<CardHeader title="Tidak ada pesanan yang perlu dikonfirmasi saat ini." />)}  
        {pesanan != null && (
        <>   
        <CardHeader title="Data Pesanan" />    
        <CardContent>
          <table width="100%">
            <tbody>
            <tr><td width="30%">Tanggal Pemesanan</td><td>: {pesanan.tanggal}</td></tr>
            <tr><td>Nama Pemesan</td><td>: {user.name}</td></tr>
            <tr><td>Alamat</td><td>: {user.address}</td></tr>
            <tr><td>Telp./HP</td><td>: {user.hp}</td></tr>  
            </tbody>       
          </table>
        </CardContent>
        <CardHeader title="Rincian Pemesanan" />
        <CardContent>
          <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {/*menampilkan judul kolom tabel */}
                    {columns.map((col, index) => (
                      <TableCell key={index}>{col}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                   {/*menampilkan data pada tabel */}
                  {data.map((row, index) => (
                    <TableRow hover key={index}>
                      {row.map((col, index) => (
                        <TableCell key={index}>{col}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>

          <p>Kirimkan pembayaran ke nomor rekening berikut:</p>
          {/*menampilkan semua data rekening */}
          {props.bank.map((bk)=>(
            <table width="100%" key={bk.id} style={{marginBottom: 20}}>
              <tbody>
                 <tr><td width="30%">Nama Bank</td><td>: {bk.nama_bank}</td></tr>
                 <tr><td>No. Rekening</td><td>: {bk.no_rekening}</td></tr>
                 <tr><td>Pemilik</td><td>: {bk.nama_pemilik}</td></tr> 
              </tbody>       
            </table>
          ))}

          <p>
            Setelah melakukan pembayaran, silakan klik tombol berikut untuk
            untuk melakukan konfirmasi pembayaran, agar pesanan langsung diproses.
          </p>
          <Button 
            variant="contained"
            component={InertiaLink}
            color="primary"
            href={route('bayar', props.pesanan.id)}
            style={{marginTop:10, marginLeft: 10}}
          >Konfirmasi Pembayaran</Button>
        </CardContent>
        </>
        )}
      </Card>
    </Layout>
  )
};
