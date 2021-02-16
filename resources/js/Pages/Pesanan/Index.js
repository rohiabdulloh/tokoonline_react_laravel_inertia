import React from 'react';
import Helmet from 'react-helmet';
import { InertiaLink } from '@inertiajs/inertia-react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

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

  const pesanan = props.pesanan;
  //menyiapkan judul kolom tabel
  const columns = [
    "No", "Tanggal", "Nama User", "HP", "Jml. Produk", "Total Bayar", "Status",
     { name:"aksi", label: "Aksi", options: { filter: false, sort: false } },
  ];

  //menyiapkan data untuk ditampilkan pada tabel
  let status = ["Baru", "Lunas", "Selesai"];
  let data = [];
  pesanan.map( (pes, index) => {
    let statusText, secondAction;

    //Mengatur text status dan tombol aksi kedua sesuai status pesananmm
    if(pes.deleted_at==null){ 
      statusText = status[pes.status];
      secondAction = (
        <IconButton 
          onClick={()=>handleDialogOpen(route('pesanan.destroy', pes.idpesanan))} 
          color="secondary" 
          method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      );
    }else{
      statusText = (<span style={{color: 'red'}}>Batal</span>);
      secondAction = (
        <IconButton 
          component={InertiaLink}
          href={route('pesanan.restore', pes.idpesanan)} 
          color="secondary" 
        >
          <RestoreIcon/>
        </IconButton>
      );
    } 
    
    data.push([ index+1, 
        pes.tanggal, 
        pes.name, 
        pes.hp, 
        pes.jumlah_produk, 
        //menampilkan angka dalam format uang
        <CurrencyFormat 
          value={pes.total_bayar} 
          displayType={'text'} 
          thousandSeparator={true} 
          prefix={'Rp. '}
        />
      ,
      statusText,
      <>
      {/* membuat tombol aksi */}
        <IconButton 
          component={InertiaLink} 
          href={route('pesanan.edit', pes.idpesanan)} 
          color="primary"
        >
          <EditIcon/>
        </IconButton>
        {secondAction}
      </>
    ]);
  });

  const options = {
    //menambahkan ikon tambah data pada toolbar tabel
    customToolbarSelect: (selected) => {
      let deletedId = [];
      selected.data.map( (data) =>{
        if(pesanan.length > 0) 
          deletedId.push(pesanan[data.index].idpesanan);
      });

      return (
        <IconButton 
          onClick={()=>handleDialogOpen(
            route('pesanan.delete', JSON.stringify(deletedId))
          )} color="secondary" method="delete"
        >
          <DeleteIcon/>
        </IconButton>
      );
    }
  };

  return (
    <Layout>
      <Helmet title="Pesanan" />
        <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <span> Pesanan </span>
        </Breadcrumbs>

        {/*menampilkan data dengan MUI Datatables */}
        <MUIDataTable
          title={"Data Pesanan"}
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
