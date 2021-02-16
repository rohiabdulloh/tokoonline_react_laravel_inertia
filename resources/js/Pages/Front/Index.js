import React, {useState} from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Hidden from '@material-ui/core/Hidden';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';
import CurrencyFormat from 'react-currency-format';

import Layout from './../../Shared/FrontLayout';

const Home = (props) => {
  //state untuk menyimpan kondisi data setiap load data lagi setelah scroll
  const [page, setPage] = useState({
    jmlItem: props.produk.length,
    hasMore: true
  });

  //state untuk menyimpan data produk
  const [produk, setProduk] = useState(props.produk);
  const jmlLoad = 4; //jml data setiap kali load

  //menangani load data setiap kali scroll
  function loadMore(){
    axios.get(route('home.load', [page.jmlItem, 'none', 'none'])).then((res) =>{
      //ubah jml item yang telah di-load
      let jmlItem = page.jmlItem + jmlLoad;
      setPage({
        jmlItem: jmlItem,
        hasMore: hasMore
      });

      //tambahkan data yang di-load ke state produk
      setProduk(produk.concat(res.data.data));
      
      //hasMore manjadi false jika semua produk telah di-load
      let hasMore = page.jmlItem< res.data.count ? true : false;
    });
  }

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      {/* menerapkan plugin infinitescroll untuk load data baru ketika melakukan scroll */}
        <InfiniteScroll
            pageStart={page.jmlItem}
            loadMore={loadMore}
            hasMore={page.hasMore}
            loader={<div key={0} style={{textAlign: 'center', marginTop: 20}}><CircularProgress /></div>}
        >
          <Grid container spacing={2}>
        
        {/*menampilkan semua item produk pada state produk*/}
        {produk.map((data, index) => (
          
          <Grid item sm={3} xs={6} key={index}>
            <Card>
              <CardMedia 
                image={"/images/"+data.foto} 
                title={data.nama_produk} 
                style={{height: 0, paddingTop: '120%'}}/>

              <CardContent>
                  <p>{data.nama_produk} </p>
                  
              {/*menampilkan harga dalam format uang */}
                   <CurrencyFormat 
                      value={data.harga} 
                      displayType={'text'} 
                      thousandSeparator={true} 
                      prefix={'Rp. '}
                      style={{textAlign: 'right'}}
                    />
              </CardContent>

              <CardActions style={{display: "flex"}} >
                  <Button 
                    component={InertiaLink} 
                    href={route('home.detail', data.kode_produk)} 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<AddCircleIcon/>}
                    style={{flex: "50%"}}>
                      <Hidden smDown>Detail</Hidden>
                  </Button>

          {/*menampilkan tombol beli/habis sesuai jml stok*/}
                {data.stok>0 ? (
                  <Button 
                    component={InertiaLink} 
                    href={route('keranjang.add', data.id)} 
                    variant="contained" 
                    color="primary" 
                    startIcon={<ShoppingCartIcon/>}
                    style={{flex: "50%"}}>
                      <Hidden smDown>Beli</Hidden>
                  </Button>
                ) : (
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{flex: "50%"}}>
                      Habis
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>

        ))}
        </Grid>
        </InfiniteScroll>
                                                    
    </Layout>
  );
}
export default Home;
