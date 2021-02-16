import React from 'react';
import Helmet from 'react-helmet';
import { usePage } from '@inertiajs/inertia-react';

import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MenuDrawer from './FrontMenu';
import Header from './FrontHeader';
import Footer from './FrontFooter';
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
  const [open, setOpen] = React.useState(false); //untuk drawer
  
  //padding kiri berubah saat menu dibuka hanya ketika di layar besar
  const leftPadding = useMediaQuery(theme.breakpoints.up('sm')) ? 220 : 0;

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

  //menutup alert
  const handleAlertClose = () => {
    setAlert(false);
  };
    
  //menagani buka menu drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //menangani tutup menu drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet titleTemplate="%s | Tokoku" />
      
       {/*Tampilkan menu drawer*/}
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
      
      <Container 
        maxWidth="lg" 
        style={style.container}
      >
        {children}  {/*tempat menampilkan konten*/}
      </Container>
      <Footer /> 
      
      </div>

       {/*Tampilkan alert jika ada flash message*/}
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
