import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import MUIDataTable from "mui-datatables";

import Layout from './../../Shared/Layout';
import Dialog from './../../Shared/Dialog';

export default (props) => {
  //state untuk dialog
  const [dialog, setDialog] = React.useState({
    open: false,
    route: null
  });

  //buka dialog
  const handleDialogOpen = (route) => {
    setDialog({open: true, route: route});
  };

  //tutup dialog
  const handleDialogClose = () => {
    setDialog({open: false, route: null});
  };

  const user = props.user;
  //menyiapkan kolom tabel
  const columns = [
    "No", "Nama User", "Email", "HP", "Kota",
     { name:"aksi", label: "Aksi", options: { filter: false, sort: false } },
  ];

  //menyiapkan data untuk ditampilkan pada tabel
  let data = [];
  user.map( (us, index) => {
    data.push([ index+1, 
        us.name, 
        us.email, 
        us.hp, 
        us.nama_kota,
      <>
        {/* membuat tombol aksi */}
        <IconButton 
          onClick={()=>handleDialogOpen(route('user.destroy', us.iduser))} 
          color="secondary" 
          method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      </>
    ]);
  });

  const options = {
    //mengatur tindakan ketika tombol hapus pada toolbar diklik
    customToolbarSelect: (selected) => {
      let deletedId = [];
      selected.data.map( (data) =>{
        if(user.length > 0) 
          deletedId.push(user[data.index].id);
      });

      return (
        <IconButton 
          onClick={()=>handleDialogOpen(
            route('user.delete', JSON.stringify(deletedId))
          )} color="secondary" method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      );
    }
  };

  return (
    <Layout>
      <Helmet title="User" />
        <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <span> User </span>
        </Breadcrumbs>

        {/*menampilkan data dengan MUI Datatables */}
        <MUIDataTable
          title={"Data User"}
          data={data}
          columns={columns}
          options={options}
        />

        <Dialog
          openDialog={dialog.open}
          closeDialog={handleDialogClose}
          route={dialog.route}
        />

    </Layout>
  )
};
