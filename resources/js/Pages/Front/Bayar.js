import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Layout from './../../Shared/FrontLayout';

export default (props) => {
    
  return (
    <Layout>
      <Helmet title="Konfirmasi Pembayaran" />
      
      <Card>        
        <CardContent>
          <p>Terimakasih sudah berbelanja di toko online kami. 
          Terus pantau toko online kami untuk mendapatkan informasi produk-produk baru yang berkualitas dengan
          harga terbaik.</p>
          <Button 
            component={InertiaLink} 
            href='/home' 
            variant="contained" 
            color="primary"
          >
            Belanja Lagi
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
};
