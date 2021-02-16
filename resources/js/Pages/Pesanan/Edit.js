import React, {useState} from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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

import Layout from './../../Shared/Layout';

export default (props) => {
  const pesananDetail = props.pesanan_detail;
  const pesanan = props.pesanan;

   //state untuk nilai input form
  const [values, setValues] = useState({
    status: pesanan.status || "",
  });

  //menyiapkan judul kolom tabel
  const columns = [
    "No", "Kode Produk", "Nama Produk", "Harga", "Jumlah", "Sub Total",
  ];
  const arrayStatus = ["Baru", "Lunas", "Selesai" ];
  
  //menyiapkan data untuk ditampilkan pada tabel
  let data = [];
  let total = 0;
  pesananDetail.map( (detail, index) => {
    let subtotal = detail.harga * detail.jumlah;
    total += subtotal;

    data.push([ index+1, 
        detail.kode_produk, 
        detail.nama_produk, 
        <CurrencyFormat 
          value={detail.harga} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />,
        detail.jumlah,
        <CurrencyFormat 
          value={subtotal} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />
    ]);
  });

  //menambahkan baris total pada tabel
  data.push(["","","","","Total", 
    <CurrencyFormat 
      value={total} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'Rp. '}
    />
  ]);

  //menangani perubahan nilai input form
  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  //menangani submit form
  function handleSubmit(e){
    e.preventDefault()
    Inertia.put(route('pesanan.update', pesanan.id), values)
  }

  return (
    <Layout>
      <Helmet title="Edit Pesanan" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
        <Link component={InertiaLink} href="/"> Home </Link>
        <Link component={InertiaLink} href="/pesanan"> Pesanan </Link>
        <span> Edit </span>
      </Breadcrumbs>
      
      <Card>
        
     {/*tampilkan form hanya jika pesanan belum dihapus*/}
      {pesanan.deleted_at == null && (
        <>
        <CardHeader title="Edit Pesanan" />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField select fullWidth
                  variant="outlined" 
                  label="Status Pesanan" 
                  name="status" 
                  value={values.status} 
                  onChange={handleChange}
                  onBlur={handleChange}
                  error={'status' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}             
                  helperText={props.errors.status /*Tampilkan pesan error jika ada error*/} 
                >
                  {arrayStatus.map((stt, index)=>(
                      <MenuItem 
                        key={index} 
                        value={index}>
                          {stt}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained" color="primary"> 
                    Simpan 
                </Button> 
                <Button variant="contained" color="secondary" 
                  style={{margin: "0 10px"}}
                  component={InertiaLink}
                  href="/pesanan"> 
                    Batal
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        </>
      )}

        <CardHeader 
          title="Daftar Produk" 
          action={ pesanan.deleted_at != null &&
            (<Button variant="contained" color="primary" 
                  style={{margin: "0 10px"}}
                  component={InertiaLink}
                  href="/pesanan"> 
                    Kembali
            </Button>)
          }
        />
        <CardContent>
          <TableContainer>
              <Table>
                <TableHead>
              <TableRow>      
                {/*menampilkan judul tabel */}
                {columns.map((col, index) => (
                  <TableCell>{col}</TableCell>
                ))}
              </TableRow>
            </TableHead>
                <TableBody>
                  
                {/*menampilkan data pada tabel*/}
                  {data.map((row, index) => (
                    <TableRow hover key={index}>
                        <TableCell>{row[0]}</TableCell>
                        <TableCell>{row[1]}</TableCell>
                        <TableCell>{row[2]}</TableCell>
                        <TableCell>{row[3]}</TableCell>
                        <TableCell>{row[4]}</TableCell>
                        <TableCell>{row[5]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>

        </CardContent>
      </Card>
    </Layout>
  )
};
