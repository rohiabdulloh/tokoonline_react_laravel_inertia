import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
   palette: {
     primary: {
       main: '#558c2f',
       linght: '#85bc5c',
       dark: '#255e00'
     },
     secondary: {
       main: '#ff6f00',
       linght: '#ffa040',
       dark: '#c43e00'
     }
   }
 });

export default (props) => {
   //state untuk nilai input form
  const [values, setValues] = useState({
    name: "",
    address: "",
    hp: "",
    kota: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  //menangani perubahan input pada form
  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  //menangani ketika form di-submit
  function handleSubmit(e){
    e.preventDefault()
    Inertia.post(route('register.attemp'), values)
  }


  return (
   <ThemeProvider theme={theme}>
    <Grid container alignItems="center"  justify="center" style={{minHeight: "100vh"}}>
       <Grid item sm={6}>
         
         <Paper variant="elevation" elevation={2} style={{padding: 20}}>
            <form onSubmit={handleSubmit}>

               <Grid container direction="column" spacing={2}>
                  <Grid item>
                     <Typography variant="h4" style={{textAlign: "center"}}>Buat Akun</Typography>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth autoFocus
                       type="name" 
                       placeholder="Nama Lengkap" 
                       name="name" 
                       variant="outlined" 
                       value={values.name} 
                       onChange={handleChange} 
                       error={'name' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}
                       helperText={props.errors.name /*Tampilkan pesan error jika ada error*/}
                    />
                  </Grid>
                  <Grid item>
                    <TextField fullWidth 
                       type="address" 
                       placeholder="Alamat" 
                       name="address" 
                       variant="outlined" 
                       value={values.address} 
                       onChange={handleChange} 
                       error={'address' in props.errors}
                       helperText={props.errors.address}
                       multiline
                    />
                  </Grid>
                  <Grid item>
                    <TextField fullWidth 
                       placeholder="No. HP" 
                       name="hp" 
                       variant="outlined" 
                       value={values.hp} 
                       onChange={handleChange} 
                       error={'hp' in props.errors}
                       helperText={props.errors.hp}
                    />
                  </Grid>
                  <Grid item>
                    <TextField fullWidth 
                       type="email" 
                       placeholder="Email" 
                       name="email" 
                       variant="outlined" 
                       value={values.email} 
                       onChange={handleChange} 
                       error={'email' in props.errors}
                       helperText={props.errors.email}
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
                        {/*Tampilkan data kota pada select box*/} 
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
                       type="password" 
                       placeholder="Password" 
                       name="password" 
                       variant="outlined" 
                       value={values.password}
                       onChange={handleChange}
                       error={'password' in props.errors}
                       helperText={props.errors.password}
                  	 />
                  </Grid>
                  <Grid item>
                     <TextField fullWidth 
                       type="password" 
                       placeholder="Konfirmasi Password" 
                       name="password_confirmation" 
                       variant="outlined" 
                       value={values.password_confirmation}
                       onChange={handleChange}
                       error={'password_confirmation' in props.errors}
                       helperText={props.errors.password_confirmation}
                  	 />
                  </Grid>
                  <Grid item>
                     <Button variant="contained" color="primary"  type="submit" fullWidth>
                        Buat Akun
                     </Button>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}}>
                     <InertiaLink href="/login">Login</InertiaLink>
                  </Grid>
               </Grid>
            </form>
         </Paper>

      </Grid>
   </Grid>
   </ThemeProvider>
  )
};
