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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Layout from './../../Shared/Layout';

export default (props) => {
  //state untuk nilai input form
  const [values, setValues] = useState({
    nama_kategori: "",
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

  function handleSubmit(e){
    e.preventDefault()
    Inertia.post(route('kategori.store'), values)
  }

  return (
    <Layout>
      <Helmet title="Tambah Kategori" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <Link component={InertiaLink} href="/kategori"> Kategori </Link>
          <span> Tambah </span>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Tambah Kategori" />
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Kategori"
                name="nama_kategori" 
                value={values.nama_kategori} 
                onChange={handleChange}                
                error={'nama_kategori' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}                 
                helperText={props.errors.nama_kategori /*Tampilkan pesan error jika ada error*/}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary"> 
                  Simpan 
              </Button> 
              <Button variant="contained" color="secondary" 
                style={{margin: "0 10px"}}                
                component={InertiaLink}
                href="/kategori"> 
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
