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
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Layout from './../../Shared/Layout';

export default (props) => {
  const data = props.user;

   //state untuk nilai input form
  const [values, setValues] = useState({
    name: data.name || "",
    address: data.address || "",
    email: data.email || "",
    hp: data.hp || "",
    id_kota: data.id_kota || "",
    password1: "",
    password2: "",
  });

console.log(values.kota);

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
    Inertia.put(route('user.update',data.id), values)
  }

  return (
    <Layout>
      <Helmet title="Profil User" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <span> Profil User </span>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Profil User" />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField fullWidth
                  variant="outlined" 
                  label="Nama User"
                  name="name" 
                  value={values.name} 
                  onChange={handleChange}                
                  error={'name' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}                 
                  helperText={props.errors.name /*Tampilkan pesan error jika ada error*/}
                />
              </Grid>
              <Grid item>
                <TextField fullWidth multiline
                  variant="outlined" 
                  label="Alamat"
                  name="address" 
                  value={values.address} 
                  onChange={handleChange}                
                  error={'address' in props.errors}                 
                  helperText={props.errors.address}
                />
              </Grid>
              <Grid item>
                <TextField fullWidth
                  variant="outlined" 
                  label="Email"
                  name="email" 
                  value={values.email} 
                  onChange={handleChange}                
                  error={'email' in props.errors}                 
                  helperText={props.errors.email}
                />
              </Grid>
              <Grid item>
                <TextField fullWidth
                  variant="outlined" 
                  label="No. HP"
                  name="hp" 
                  value={values.hp} 
                  onChange={handleChange}                
                  error={'hp' in props.errors}                 
                  helperText={props.errors.hp}
                />
              </Grid>
              <Grid item>
                <TextField select fullWidth
                  variant="outlined" 
                  label="Kota" 
                  name="kota" 
                  value={values.id_kota} 
                  onChange={handleChange}
                  error={'id_kota' in props.errors}             
                  helperText={props.errors.id_kota} >
                  {props.kota.map((kt)=>(
                      <MenuItem 
                        key={kt.id} 
                        value={kt.id}>
                          {kt.nama_kota}
                      </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item>
                <TextField fullWidth
                  variant="outlined" 
                  label="Ubah Password"
                  type="password"
                  name="password1" 
                  value={values.password1} 
                  onChange={handleChange}                
                  error={'password1' in props.errors}                 
                  helperText={props.errors.password1}
                />
              </Grid>
              <Grid item>
                <TextField fullWidth
                  variant="outlined" 
                  label="Konfirmasi Password"
                  type="password2"
                  name="password2" 
                  value={values.password2} 
                  onChange={handleChange}                
                  error={'password2' in props.errors}                 
                  helperText={props.errors.password2}
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary"> 
                    Simpan 
                </Button> 
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Layout>
  )
};
