import React from 'react';
import { Inertia} from '@inertiajs/inertia';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({openDialog, closeDialog, route}) => {
  //menangani ketika klik OK
  const handleOk = () => {
    //Arahkan ke route sesuai props route dg method delete
    Inertia.delete(route).then(()=>{
      closeDialog();
    });
  };

  return (
    <div>
      <Dialog 
        open={openDialog} 
        onClose={closeDialog} 
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">Konfirmasi Hapus</DialogTitle>
        
        <DialogContent>
          <DialogContentText>
            Yakin akan menghapus data?
          </DialogContentText>  
        </DialogContent>

        <DialogActions>
          <Button onClick={closeDialog} color="secondary">
            Batal
          </Button>
          <Button onClick={handleOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}