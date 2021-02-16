import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
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


  const kategori = props.kategori;
  //menyiapkan judul kolom tabel
   const columns = [
    "No", "Nama Kategori",
     { name:"aksi", label: "Aksi", 
       options: { filter: false, sort: false } },
  ];

  //menyiapkan data untuk ditampilkan pada tabel
  let data = [];
  kategori.map( (kat, index) => {
    data.push([ index+1, kat.nama_kategori,
      <>
      {/* membuat tombol aksi */}
        <IconButton 
          component={InertiaLink} 
          href={route('kategori.edit', kat.id)} 
          color="primary"
        >
          <EditIcon/>
        </IconButton>
        <IconButton 
          onClick={()=>handleDialogOpen(route('kategori.destroy', kat.id))} 
          color="secondary" 
          method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      </>
    ]);
  });

  const options = {
    //menambahkan ikon tambah data pada toolbar tabel
    customToolbar: () => {
      return (
        <IconButton 
          component={InertiaLink} 
          href={route('kategori.create')} 
          color="primary"
        >
          <AddCircleIcon/>
        </IconButton>
      );
    },
    //mengatur tindakan ketika tombol hapus pada toolbar diklik
    customToolbarSelect: (selected) => {
      let deletedId = [];
      selected.data.map( (data) =>{
        if(kategori.length > 0) 
          deletedId.push(kategori[data.index].id);
      });

      return (
        <IconButton 
          onClick={()=>handleDialogOpen(route('kategori.delete', 
            JSON.stringify(deletedId)))} 
          color="secondary" 
          method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      );
    }
  };

  return (
    <Layout>
      <Helmet title="Kategori" />
        <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <span> Kategori </span>
        </Breadcrumbs>

        {/*menampilkan data dengan MUI Datatables */}
        <MUIDataTable
          title={"Data Kategori"}
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
