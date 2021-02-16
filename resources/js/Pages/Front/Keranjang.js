import React, {useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
  const keranjang = (props.keranjang!=null) ? props.keranjang : {};
  
  //membuat objek untuk dimasukkan ke state value
  let objValue = {id:0, jumlah:0, total:0};  
  let subtotal;
  Object.keys(keranjang).forEach( (key) => {
    let produk = keranjang[key];
    subtotal = produk['harga'] * produk['jumlah'];
    objValue.total += subtotal;
    objValue.jumlah += 1;

    //tambahkan jumlah dipesan tiap produk ke objek state value
    objValue = {...objValue, ['jml_'+produk['id']]: produk['jumlah']};
  });

  //state untuk menyimpan data yang akan dikirim ketika submit
  const [values, setValues] = useState(objValue);

  //menyiapkan judul kolom tabel
  const columns = [
    "No", "Foto", "Kode Produk", "Nama Produk", "Harga", "Jumlah", "Sub Total", "Hapus"
  ];
  
  //menyiapkan data untuk ditampilkan pada tabel
  let dataKeranjang = [];
  let no = 0;
  Object.keys(keranjang).forEach( (key, index) => {
    let produk = keranjang[key];
    subtotal = produk['harga'] * produk['jumlah'];
    
    no++;
    dataKeranjang.push([ no,
        <img src={"/images/"+produk.foto} width="100" />,
        produk['kode'], 
        produk['nama'], 
        //menampilkan anga dalam format uang  
        <CurrencyFormat 
          value={produk['harga']} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />,
        //input jumlah dipesan tiap produk pada tabel
        <TextField 
          type="number"
          min={1}
          max={produk['stok']}
          name={'jml_'+produk['id'] /*nama input mencantumkan id produk karena akan di-loop*/} 
          value={values['jml_'+produk['id']]} 
          onChange={(e) => handleChange(e, produk['id'])} 
          style={{width: 50 }}
        />,
        //menampilkan angka dalam format uang
        <CurrencyFormat 
          value={subtotal} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />,
        <IconButton 
          onClick={()=>handleDelete(produk['id'], index)} 
          color="secondary" 
          method="delete"
        >
          <DeleteIcon/>
        </IconButton>
    ]);
  });
  
  //state untuk menentukan status disable tombol lanjut pemesanan (checkout) sesuai jumlah data pada keranjang
  const [disabled, setDisabled] = useState(dataKeranjang.length==0);
  
  //menambahkan baris total
  let dataTable =  [ ...dataKeranjang,
    ["","","","","","Total", 
    <CurrencyFormat 
      value={objValue.total} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'Rp. '}
    />,
    ""]
  ];
   
  //menangani perubahan jumlah pesanan tiap produk pada tabel keranjang
  function handleChange(e, id){
    const name = e.target.name;
    const value = e.target.value;
   
    setDisabled(true); //disable tombol sementara sambil nunggu perhitungan total harga
    setValues(values => ({
      ...values,
      id: id,
      [name]: value,
    }))
  }

  //menangani event ketika item produk dihapus
  function handleDelete(id, index) {
    Inertia.delete(route('keranjang.destroy', id))
    .then(()=>{
      dataKeranjang.shift(index, 1);
      if(dataKeranjang.length==0) setDisabled(true);
    });
  }

  //menangani event ketika tombol lanjutkan belanja diklik untuk menyimpan data pesanan ke database
  function handleSave() {
    Inertia.post(route('keranjang.save'), values)
  }

  //submit form setiap jumlah pesanan diubah untuk update total harga
  useEffect(()=>{
    if(values.id != 0) Inertia.put(route('keranjang.update', values.id), values)
       .then(()=>{
          setDisabled(false); //enable kembali tombol setelah perhitungan total harga selesai
       });
  }, [values])

  //mencegah submit form otomatis ketika jumlah pesanan diubah agar submit terjadi setelah state value berubah
  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <Layout>
      <Helmet title="Keranjang Belanja" />
      
      <Card>        
        <CardHeader title="Keranjan Belanja" />
        <CardContent>
          <form onSubmit={handleSubmit}>
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
                  {dataTable.map((row, index) => (
                    <TableRow hover key={index}>
                      {row.map((col, index) => (
                        <TableCell key={index}>{col}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
          </form>

          <Button 
            variant="contained"
            color="primary" 
            component={InertiaLink}
            href="/home"
            style={{marginTop:10}}
          >Kembali Belanja</Button>
      
          <Button 
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{marginTop:10, marginLeft: 10}}
            disabled={disabled}
          >Lanjutkan Pembayaran</Button>
        </CardContent>
      </Card>
    </Layout>
  )
};
