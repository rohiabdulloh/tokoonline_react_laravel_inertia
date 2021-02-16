import React from 'react';
import Helmet from 'react-helmet';
import { usePage } from '@inertiajs/inertia-react';

import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MenuDrawer from './Menu';
import Header from './Header';
import Alert from './Alert';

//ubah tema material ui
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

export default function Layout({ children }) {
  const {flash} = usePage().props; //dapatkan flash message
  const [alert, setAlert] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  
  
  //padding kiri berubah saat menu dibuka hanya ketika di layar besar
  const leftPadding = useMediaQuery(theme.breakpoints.up('sm')) ? 180 : 0;

  let style={
    wrapper:{
      width: '100%',
      paddingLeft: (open ? leftPadding : 0), //ubah padding saat menu dibuka
      transition: '200ms'
    },
    container: {
      minHeight: 600, 
      paddingTop: 20, 
      paddingBottom: 20
    }
  }

  //tutup alert
  const handleAlertClose = () => {
    setAlert(false);
  };

  //buka menu drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //tutup menu drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="%s | Tokoku" />

      {/*tampilkan menu drawer*/}
      <MenuDrawer 
         openDrawer={open} 
         onCloseDrawer={handleDrawerClose}
      />

    <div style={style.wrapper}>
      {/*tampilkan header*/}
      <Header 
        openDrawer={open}
        onOpenDrawer={handleDrawerOpen}
      /> 

      <Container maxWidth="lg">
       	<Grid container spacing={3}> 
			    <Grid item xs={12}> 
            {children} {/*tempat menampilkan konten*/}
      		</Grid>
      	</Grid>
      </Container>
    </div>

       {/*tampilkan alert saat ada flash message*/}
      {flash.message && (
        <Alert 
          openAlert={alert} 
          closeAlert={handleAlertClose} 
          severity="success" 
          message={flash.message} />
      )}
    </ThemeProvider>
   );
}
