import React, {useState} from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CurrencyFormat from 'react-currency-format';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Layout from './../../Shared/Layout';

export default (props) => {
  //state untuk nilai input form
  const [values, setValues] = useState({
    nama_bank: "",
    no_rekening: "",
    nama_pemilik: "",
  });
  
  //menangani perubahan nilai input pada form
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
    Inertia.post(route('bank.store'), values)
  }

  return (
    <Layout>
      <Helmet title="Tambah Bank" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <Link component={InertiaLink} href="/bank"> Bank </Link>
          <span> Tambah </span>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Tambah Bank" />
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Nama Bank"
                name="nama_bank" 
                value={values.nama_bank} 
                onChange={handleChange}                
                error={'nama_bank' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}                 
                helperText={props.errors.nama_bank /*Tampilkan pesan error jika ada error*/}
              />
            </Grid>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="No. Rekening"
                name="no_rekening" 
                value={values.no_rekening} 
                onChange={handleChange}                
                error={'no_rekening' in props.errors}                 
                helperText={props.errors.no_rekening}
              />
            </Grid>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Nama Pemilik"
                name="nama_pemilik" 
                value={values.nama_pemilik} 
                onChange={handleChange}                
                error={'nama_pemilik' in props.errors}                 
                helperText={props.errors.nama_pemilik}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary"> 
                  Simpan 
              </Button> 
              <Button variant="contained" color="secondary" 
                style={{margin: "0 10px"}}
                component={InertiaLink}
                href="/kota"> 
                  Batal
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>

    </Layout>
  )
};
