import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CurrencyFormat from 'react-currency-format';

import Layout from './../../Shared/FrontLayout';

const Detail = (props) => {
  const produk = props.produk;
  return (
    <Layout>
      <Helmet>
        {produk != null ? 
        (<title>{produk.nama_produk}</title>) :
        (<title>Detail Produk</title>)}
      </Helmet>

        {/*menampilkan pesan ketika produk tidak ditemukan */}
        {produk == null && (
            <Typography variant="h4">
                Produk tidak ditemukan
            </Typography>
        )}

        {produk != null && (
          <Grid container spacing={4}>
            <Grid item sm={4} xs={12}>
                <img 
                  src={"/images/"+produk.foto} 
                  title={produk.nama_produk}
                  width="100%" />
            </Grid>
            <Grid item sm={8} xs={12}>
                <h4>
                    {produk.nama_produk}
                </h4>

                <p>
                    {produk.deskripsi_produk}
                </p>

                Berat {produk.berat} Kg<br/>
                Stok {produk.stok} <br/>
                
                <h4>
              {/*menampilkan harga dengan format uang */}
                  <CurrencyFormat 
                    value={produk.harga} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'Rp. '}
                  />
                </h4>
  
        {/*menampilkan tombol beli/habis sesuai jumlah stok */}
              {produk.stok>0 ? (
                <Button 
                    component={InertiaLink} 
                    href={route('keranjang.add', produk.id)} 
                    variant="contained" 
                    color="primary" 
                    startIcon={<ShoppingCartIcon/>}>
                    Tambah ke keranjang
                </Button>
              ) : (
                <Button 
                    variant="contained" 
                    color="secondary" >
                    Stok habis
                </Button>
              )}
            </Grid>
          </Grid>
        )}
                                                  
    </Layout>
  );
}

export default Detail;
