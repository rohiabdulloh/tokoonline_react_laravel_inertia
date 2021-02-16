
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

import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Layout from './../../Shared/Layout';

export default (props) => {
  //state untuk nilai input form
  const [values, setValues] = useState({
    nama_kota: "",
    ongkir: "",
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
  //menangani perubahan ongkir
  function changeOngkir(e, val){
    setValues(values => ({
      ...values,
      ongkir: val,
    }))
  }

  //menangani submit form
  function handleSubmit(e){
    e.preventDefault()
    Inertia.post(route('kota.store'), values)
  }

  return (
    <Layout>
      <Helmet title="Tambah Kota" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <Link component={InertiaLink} href="/kota"> Kota </Link>
          <span> Tambah </span>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Tambah Kota" />
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Kota"
                name="nama_kota" 
                value={values.nama_kota} 
                onChange={handleChange}                
                error={'nama_kota' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}                 
                helperText={props.errors.nama_kota /*Tampilkan pesan error jika ada error*/}
              />
            </Grid>
            <Grid item>
              {/*textfield dg format uang */}
              <CurrencyTextField
                variant="outlined" 
                label="Ongkos Kirim" 
                name="ongkir" 
                value={values.ongkir} 
                onChange={(e, val)=> changeOngkir(e,val)} 
                error={'ongkir' in props.errors}             
                helperText={props.errors.ongkir} 
                currencySymbol="Rp. "
                digitGroupSeparator=","
                decimalPlacesShownOnBlur={0}
                decimalPlacesShownOnFocus={0}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary"> 
                  Simpan 
              </Button> 
              <Button variant="contained" color="secondary" 
                style={{margin: "0 10px"}}
                component={InertiaLink}
                href="/bank"> 
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
