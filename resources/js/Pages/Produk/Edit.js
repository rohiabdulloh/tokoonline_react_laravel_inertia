import React, {useState} from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Layout from './../../Shared/Layout';

export default (props) => {
  const data = props.produk;
  
  //masukan deskripsi produk ke react-draft-wysiwyg
  const deskripsi = EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(data.deskripsi_produk)
      )
    );

  //state untuk react-draft-wysiwyg
  const [editor, setEditor] = useState(deskripsi);
  
   //state untuk nilai input form
  const [values, setValues] = useState({
    kode_produk: data.kode_produk || "",
    nama_produk: data.nama_produk || "",
    deskripsi_produk: data.deskripsi_produk ||  "",
    id_kategori: data.id_kategori || "",
    harga: data.harga || "",
    foto: "",
    url_foto: "/images/"+data.foto|| "",
    berat: data.berat || "",
    stok: data.stok || 0,
  });

  //menangani perubahan nilai input pada form
  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  //menangani perubahan harga
  function changeHarga(e, val){
    setValues(values => ({
      ...values,
      harga: val,
    }))
  }

  //menangani perubahan deskripsi produk
  function handleStateChange(editorState){
    setEditor(editorState);
    const value = editorState.getCurrentContent().getPlainText();

    setValues(values => ({
      ...values,
      deskripsi_produk: value,
    }))
  }

  //menangani upload file
  function handleUpload(e){
    let file = e.target.files[0];
    let imgsrc = URL.createObjectURL(e.target.files[0]);

    setValues(values => ({
      ...values,
      foto: file,
      url_foto: imgsrc, //ubah foto yang ditampilkan dg yg akan diupload
    }))
  }

  //menangani submit form disertai upload foto
  function handleSubmit(e){ 
    e.preventDefault()

    let formdata = new FormData;
    for (let key in values){
      formdata.append(key, values[key]);
    }
    formdata.append('_method', 'put');   
    Inertia.post(route('produk.update', data.id), formdata)

  }

   return (
    <Layout>
      <Helmet title="Edit Produk" />
      <Breadcrumbs aria-label="breadcrumb" style={{padding: "10px 0"}}>
          <Link component={InertiaLink} href="/"> Home </Link>
          <Link component={InertiaLink} href="/produk"> Produk </Link>
          <span> Edit </span>
      </Breadcrumbs>

      <Card>
        <CardHeader title="Edit Produk" />
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Kode Produk" 
                name="kode_produk" 
                value={values.kode_produk} 
                onChange={handleChange}
                error={'kode_produk' in props.errors /*Ubah tampilan input jadi merah jika ada error*/}                 
                helperText={props.errors.kode_produk /*Tampilkan pesan error jika ada error*/}
              />
            </Grid>
            <Grid item>
              <TextField fullWidth
                variant="outlined" 
                label="Nama Produk" 
                name="nama_produk" 
                value={values.nama_produk} 
                onChange={handleChange}
                error={'nama_produk' in props.errors}                 
                helperText={props.errors.nama_produk}
              />
            </Grid>
            <Grid item>
              <TextField select fullWidth
                variant="outlined" 
                label="Kategori" 
                name="id_kategori" 
                value={values.id_kategori} 
                onChange={handleChange}
                onBlur={handleChange}
                error={'id_kategori' in props.errors}             
                helperText={props.errors.id_kategori} >
                {props.kategori.map((kat)=>(
                    <MenuItem 
                      key={kat.id} 
                      value={kat.id}>
                        {kat.nama_kategori}
                    </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              {/*text field dengan format uang */}
            <CurrencyTextField  fullWidth
                variant="outlined" 
                label="Harga" 
                name="harga" 
                value={values.harga} 
                onChange={(e, val)=> changeHarga(e,val)} 
                error={'harga' in props.errors}             
                helperText={props.errors.harga} 
                currencySymbol="Rp. "
                digitGroupSeparator=","
                decimalPlacesShownOnBlur={0}
                decimalPlacesShownOnFocus={0}
              />
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField fullWidth
                    type="number"
                    variant="outlined" 
                    label="Berat (Kg)" 
                    name="berat" 
                    value={values.berat} 
                    onChange={handleChange}
                    error={'berat' in props.errors}                 
                    helperText={props.errors.berat}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField fullWidth
                    type="number"
                    variant="outlined" 
                    label="Stok" 
                    name="stok" 
                    value={values.stok} 
                    onChange={handleChange}
                    error={'stok' in props.errors}                 
                    helperText={props.errors.stok}
                  />
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <Paper variant="outlined">
                {/*editor dengan react-draft-wysiwyg */}
              <Editor
                editorState={editor}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={handleStateChange}
                value={values.deskripsi_produk} 
              />
              </Paper>
            </Grid>

            <Grid item>
              <Paper variant="outlined" style={{padding: 15}}>
                <input hidden
                  accept="image/*" 
                  id="input-file" 
                  type="file" 
                  onChange={handleUpload}
                />
                <label htmlFor="input-file">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      component="div">
                        Upload Foto
                    </Button>
                </label>
                {(values.url_foto!="") && (
                  <div style={{marginTop: 15}}> 
                    <img src={values.url_foto} width="200" />
                  </div>
                )}
              </Paper>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary"> 
                  Simpan 
              </Button> 
              <Button variant="contained" color="secondary" 
                style={{margin: "0 10px"}}
                component={InertiaLink}
                href="/produk"> 
                  Batal
              </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </Layout>
  )
};
