import React, {useState} from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

export default ({openDrawer, onCloseDrawer}) => {
  const {data} = usePage().props; //mendapatkan data kategori
  const [opensub, setOpensub] = useState(false);

  //membuka/menutup dropdown kategori
  const handleOpen = () =>{
    setOpensub(!opensub);
  }

  return (  
    <div>
      <Drawer variant="persistent" anchor="left" open={openDrawer} onClose={onCloseDrawer}>
        
        <div role="presentation" >
          <Box bgcolor="primary.main" display="flex" justifyContent="flex-end">
            <Typography variant="h6" style={{color: '#fff', padding: 16}}>  Menu  </Typography>
            <IconButton onClick={onCloseDrawer} style={{color: '#fff'}}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <List>
              <ListItem button component={InertiaLink} href="/">
              	<ListItemIcon> <HomeIcon/></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={InertiaLink} href="/">
              	<ListItemIcon> <ShoppingCartIcon/></ListItemIcon>
                <ListItemText primary="Keranjang Belanja" />
              </ListItem>
              <ListItem button onClick={handleOpen}>
              	<ListItemIcon> <CategoryIcon/></ListItemIcon>
                <ListItemText primary="Kategori" />
                {/*atur ikon saat sub kategori dibuka/ditutup*/}
                {opensub ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

                <Collapse in={opensub} timeout="auto" unmountOnExit>
                  <List>

                 {/*Tampilkan sub menu kategori*/}
                {data.kategori.map((kat)=> (
                  <ListItem key={kat.id} button 
                    component={InertiaLink} 
                    href={"/kategoriproduk/"+kat.nama_kategori}
                    style={{paddingLeft: 20}}>
                    <ListItemIcon> <ChevronRightIcon/></ListItemIcon>
                    <ListItemText primary={kat.nama_kategori} />
                  </ListItem>
                ))}
                
                  </List>
                </Collapse>
          </List>
        </div>

      </Drawer>
    </div>
  );
}