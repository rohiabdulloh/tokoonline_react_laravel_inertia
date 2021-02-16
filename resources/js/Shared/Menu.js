import React, {useEffect} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default ({openDrawer, onCloseDrawer}) => {
 //buat array data menu
 const menu = [
    {icon: <HomeIcon />, title: "Dashboard", link: "/dashboard"},
    {icon: <CategoryIcon />, title: "Kategori",  link: "/kategori"},
    {icon: <LocalMallIcon />, title: "Produk", link: "/produk"},
    {icon: <ShoppingCartIcon />, title: "Pesanan", link: "/pesanan"},
    {icon: <PinDropIcon />, title: "Kota", link: "/kota"},
    {icon: <AccountBalanceIcon />, title: "Bank", link: "/bank"},
    {icon: <AccountCircleIcon />, title: "User", link: "/user"},
  ];

  return (  
    <div>
      <Drawer variant="persistent" anchor="left" open={openDrawer} onClose={onCloseDrawer}>
        
        <div role="presentation" onClick={onCloseDrawer} onKeyDown={onCloseDrawer} >
          <Box bgcolor="primary.main" display="flex" justifyContent="flex-end">
            <Typography variant="h6" style={{color: '#fff', padding: 16}}>  Menu Admin  </Typography>
            <IconButton onClick={onCloseDrawer} style={{color: '#fff'}}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <List>
             {/*Tampilkan menu dari array menu*/}
            { menu.map((item) => (
              <ListItem button component={InertiaLink} href={item.link} key={item.title}>
              		<ListItemIcon> { item.icon }</ListItemIcon>
                	<ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>

      </Drawer>
    </div>
  );
}