import React, {useState} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    email: "",
    password: "",
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
    Inertia.post(route('login.attemp'), values)
  }


  return (
   <ThemeProvider theme={theme}>
    <Grid container alignItems="center"  justify="center" style={{minHeight: "100vh"}}>
       <Grid item sm={6}>
         
         <Paper variant="elevation" elevation={2} style={{padding: 20}}>
            <form onSubmit={handleSubmit}>

               <Grid container direction="column" spacing={2}>
                  <Grid item>
                     <Typography variant="h4" style={{textAlign: "center"}}>Login</Typography>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth autoFocus
                       type="email" 
                       placeholder="Email" 
                       name="email" 
                       variant="outlined" 
                       value={values.email} 
                       onChange={handleChange} 
                       error={'email' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}
                       helperText={props.errors.email /*Tampilkan pesan error jika ada error*/} 
                    />
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
                     <Button variant="contained" color="primary"  type="submit" fullWidth>
                        Login 
                     </Button>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}}>
                     <InertiaLink href="/register">Buat akun baru</InertiaLink>
                  </Grid>
               </Grid>
            </form>
         </Paper>

      </Grid>
   </Grid>
   </ThemeProvider>
  )
};
