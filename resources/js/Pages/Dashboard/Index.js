import React from 'react';
import Helmet from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CategoryIcon from '@material-ui/icons/Category';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {
  LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import Layout from './../../Shared/Layout';

const InfoDashboard = (props) => {
  return (
    <Box bgcolor={props.bg} padding={2} style={{color: '#fff'}}>
       <Grid container>
          <Grid item xs={4}>
            {props.icon}
          </Grid>
          <Grid item xs={8}>
            <h1>{props.value}</h1>
            <h5>{props.text}</h5>
          </Grid>
       </Grid>
    </Box>
  );
}

const Dashboard = (props) => {
  
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      
      <Grid container style={{marginTop: 20}} spacing={2}>  
        <Grid item sm={3} xs={12}>
          <InfoDashboard bg="info.main" 
            value={props.jmlkategori}
            text="Jumlah Kategori"
            icon={<CategoryIcon style={{fontSize:60}} />}
          />    
        </Grid>

        <Grid item sm={3} xs={12}>
          <InfoDashboard bg="success.main" 
            value={props.jmlproduk}
            text="Jumlah Produk"
            icon={<LocalMallIcon style={{fontSize:60}} />}
          />    
        </Grid>

        <Grid item sm={3} xs={12}>
          <InfoDashboard bg="warning.main" 
            value={props.jmluser}
            text="Jumlah User"
            icon={<AccountCircle style={{fontSize:60}} />}
          />    
        </Grid>
      
        <Grid item sm={3} xs={12}>
          <InfoDashboard bg="error.main" 
            value={props.jmlpesanan}
            text="Jumlah Pesanan"
            icon={<ShoppingCart style={{fontSize:60}} />}
          />    
        </Grid>
      </Grid>

      <Grid container style={{marginTop: 20}} spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Grafik Penjualan" />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={props.datapenjualan}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tanggal" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="jumlah" stroke="#8884d8" />
              </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>                                                                         
    </>
  );
}

Dashboard.layout = page => <Layout children={page} />

export default Dashboard;
