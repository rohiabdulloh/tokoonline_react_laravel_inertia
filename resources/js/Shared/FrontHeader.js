import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default ({openDrawer, onOpenDrawer}) => {
  const {auth, data} = usePage().props;
  
  const [anchorEl, setAnchorEl] = React.useState(null); //untuk menu user
  const [values, setValues] = React.useState({
    search: "", //untuk nilai input pencarian
  });
  const openUser = Boolean(anchorEl);

  //menangani buka menu user
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //menangani tutup menu drawer
  const handleClose = () => {
    setAnchorEl(null);
  };

  //menangani perubahan input pencarian
  function handleChange(e){
    const value = e.target.value;

    setValues({ search: value});
  }

  //menangani input pencarian di-submit
  function handleSubmit(e){
    e.preventDefault()
    Inertia.get('/search', values)
  }

  //atur style input pencarian
  const style = {
    search: {
      position: 'relative',
      width: '100%',
      background: 'rgba(255, 255, 255, 0.15)', 
      marginLeft: 50,
      marginRight: 20,
      borderRadius: 3,
    },
    input:{
      width: '100%',
      paddingLeft: '40px',
      color: '#fff',
    },
    searchIcon:{
      position: 'absolute',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
    }
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/*Tombol untuk buka menu drawer*/}
          {!openDrawer &&
            <IconButton edge="start"  color="inherit" onClick={onOpenDrawer}>
              <MenuIcon />
            </IconButton>
          }

          <Typography variant="h6" noWrap style={{width: 200}}>  Tokoku  </Typography>

          {/*input pencarian*/}
          <div style={style.search}>
            <form onSubmit={handleSubmit}>
              <div style={style.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                name="search"
                placeholder="Search..." 
                style={style.input}                 
                value={values.search} 
                onChange={handleChange}/>
            </form>
          </div>

          {/*ikon keranjang disertai badge untuk menunjukan jml item pada keranjang*/}
          <div style={{display: "flex"}}>
            <IconButton edge="end" color="inherit" component={InertiaLink} href="/keranjang">
              <Badge 
                color="secondary" 
                badgeContent={data.keranjang}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

          {/*Tampilkan tombol ikon login jika belum login*/}
            {!auth.loggedIn &&
              <IconButton edge="end" color="inherit" component={InertiaLink} href="/login">
                <ExitToAppIcon />
              </IconButton>
            }

          {/*Tampilkan ikon user dengan dropdown menu jika sudah login*/}
            {auth.loggedIn &&
              <IconButton edge="end" color="inherit" onClick={handleMenu}>
                {/*Badge untuk menunjukkan adanya pesanan belum dibayar*/}
                <Badge 
                  color="secondary" 
                  variant="dot"
                  badgeContent={data.pesanan}>
                    <AccountCircle />
                </Badge>
              </IconButton>
            }

            {/*menu dropdown user*/}
            <Menu anchorEl={anchorEl} keepMounted
              anchorOrigin={{ 
                vertical: 'bottom', 
                horizontal: 'right'
              }} 
              getContentAnchorEl={null} 
              open={openUser} 
              onClose={handleClose}>
                <MenuItem component={InertiaLink} href="/user/profil">Profil</MenuItem>
                <MenuItem component={InertiaLink} href="/pesananku">
                   {/*Badge untuk menunjukkan adanya pesanan belum dibayar*/}
                  <Badge 
                    color="secondary" 
                    variant="dot"
                    badgeContent={data.pesanan}>
                      Pesananku
                  </Badge>
                </MenuItem>
                <MenuItem component={InertiaLink} href="/logout" method="post" as="button">Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar> 
      </AppBar>

    </div>
  );
}