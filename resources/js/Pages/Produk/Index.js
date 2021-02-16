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
import CurrencyFormat from 'react-currency-format';

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

  const produk = props.produk;
  //menyiapkan judul kolom tabel
  const columns = [
    "No", "Foto", "Kode Produk", "Nama Produk", "Kategori", "Harga", "Berat", "Stok",
     { name:"aksi", label: "Aksi", options: { filter: false, sort: false } },
  ];

  //menyiapkan data untuk ditampilkan pada tabel
  let data = [];
  produk.map( (pro, index) => {
    data.push([ index+1, 
      <img src={'images/'+pro.foto} width="100"/>,
      pro.kode_produk, 
      pro.nama_produk, 
      pro.nama_kategori, 
      //menampilkan angka dalam format uang
      <CurrencyFormat 
        value={pro.harga} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'Rp. '}
      />
      , 
      pro.berat,
      pro.stok,
      <>
      {/* membuat tombol aksi */}
        <IconButton 
          component={InertiaLink} 
          href={route('produk.edit', pro.id_produk)} 
          color="primary"
        >
          <EditIcon/>
        </IconButton>
        <IconButton 
          onClick={()=>handleDialogOpen(route('produk.destroy', pro.id_produk))} 
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
          href={route('produk.create')} 
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
        if(produk.length > 0) 
          deletedId.push(produk[data.index].id_produk);
      });

      return (
        <IconButton 
          onClick={()=>handleDialogOpen(
            route('produk.delete', JSON.stringify(deletedId))
          )} color="secondary" method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      );
    }
  };

  return (
    <Layout>
      <Helmet title="Produk" />
        <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <span> Produk </span>
        </Breadcrumbs>

        {/*menampilkan data dengan MUI Datatables */}
        <MUIDataTable
          title={"Data Produk"}
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
