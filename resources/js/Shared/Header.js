import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default ({openDrawer, onOpenDrawer}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUser = Boolean(anchorEl);

  //buka menu user
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //tutup menu user
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/*tombol untuk buka menu drawer*/}
          {!openDrawer &&
          <IconButton edge="start"  color="inherit" onClick={onOpenDrawer}>
            <MenuIcon />
          </IconButton>
          }

          <Typography variant="h6" noWrap style={{flexGrow: 1}}>  Admin Toko  </Typography>

           {/*ikon menu user*/}
          <div style={{display: "flex"}}>
            <IconButton edge="end" color="inherit" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>

             {/*dropdown menu user*/}
            <Menu anchorEl={anchorEl} keepMounted
              anchorOrigin={{ 
                vertical: 'bottom', 
                horizontal: 'right'
              }} 
              getContentAnchorEl={null} 
              open={openUser} 
              onClose={handleClose}>
                <MenuItem component={InertiaLink} href="/user/profil">Profil</MenuItem>
                <MenuItem component={InertiaLink} href="/logout" method="post" as="button">Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar> 
      </AppBar>

    </div>
  );
}