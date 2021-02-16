import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default ({openAlert, closeAlert, severity, message}) => {
//membungkus alert dengan snackbar agar dapat diposisikan di pojok dan dapat disembunyikan otomatis
  return (
      <Snackbar 
      	anchorOrigin={{ 
      		vertical: 'top', 
      		horizontal: 'right', 
      	}} 
      	open={openAlert} 
      	autoHideDuration={6000} 
      	onClose={closeAlert}
      >
        
        <Alert onClose={closeAlert} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
  );
}
