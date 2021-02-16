<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use App\Models\Kategori;
use Inertia\Inertia;

use Redirect;

class ProdukController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $produk = Produk::leftJoin('kategori', 'kategori.id', '=', 'produk.id_kategori')
            ->orderBy('produk.id', 'desc')
            //ada 2 kolom id yaitu dari tabel kategori dan produk, salah satu dibuat alias
            ->select('produk.id as id_produk','produk.*','kategori.*')
            ->get();

        return Inertia::render('Produk/Index', [
        	'produk'=> $produk
        ]);
    }

    //Tampilkan halaman tambah data
    public function create()
    {   
        $kategori = Kategori::all();
        return Inertia::render('Produk/Create', [
            'kategori'=> $kategori
        ]);
    }

    //Menyimpan tambah data
    public function store(Request $rq){
        $this->validate($rq,[
            'kode_produk' => 'required|unique:produk',
            'nama_produk' => 'required',
            'id_kategori' => 'required',
            'harga' => 'required',
            'stok' => 'required',
            'berat' => 'required',
            'foto' => 'required',
        ]);

    	$produk = new Produk;
    	$produk->kode_produk        = $rq->kode_produk;
    	$produk->nama_produk        = $rq->nama_produk;
        $produk->deskripsi_produk   = addslashes($rq->deskripsi_produk); //Tambahkan \ jika ada karakter petik yang bisa menimbulkan masalah
        $produk->id_kategori        = $rq->id_kategori;
        $produk->harga              = $rq->harga;
        $produk->berat              = $rq->berat;
        $produk->stok               = $rq->stok;

        //ubah nama foto dengan ditambah data waktu
        $image_name = "produk-".time().'.'.$rq->foto->extension(); 
        //upload foto
        $rq->foto->move(public_path('images'), $image_name);

        $produk->foto               = $image_name;
    	$produk->save();

    	return Redirect::route('produk.index')
            ->with(['message'=>'Data berhasil ditambahkan']);
    }

    //tampilkan halaman edit data
    public function edit($id){
        $kategori = Kategori::all();
    	return Inertia::render('Produk/Edit', [
    		'produk'=> Produk::find($id),
            'kategori'=> $kategori
    	]);
    }

    //simpan edit data
    public function update(Request $rq, $id){
        $this->validate($rq,[
            'nama_produk' => 'required',
            'id_kategori' => 'required',
            'harga' => 'required',
            'berat' => 'required',
            'stok' => 'required',
        ]);
        
    	$produk = Produk::find($id);
        $produk->kode_produk        = $rq->kode_produk;
        $produk->nama_produk        = $rq->nama_produk;
        $produk->deskripsi_produk   = addslashes($rq->deskripsi_produk);
        $produk->id_kategori        = $rq->id_kategori;
        $produk->harga               = $rq->harga;
        $produk->berat               = $rq->berat;
        $produk->stok               = $rq->stok;

        if($rq->hasFile('foto')){ //upload foto hanya jika ada perubahan foto
            //hapus file foto sebelumnya
            if(file_exists(public_path('images/'.$produk->foto))){
                unlink(public_path('images/'.$produk->foto));
            }
            $image_name = "produk-".time().'.'.$rq->foto->extension();  
            $rq->foto->move(public_path('images'), $image_name);

            $produk->foto               = $image_name;
        }
    	$produk->update();

    	return Redirect::route('produk.index')
            ->with(['message'=>'Data berhasil diedit']);
    }

    //Hapus 1 data
    public function destroy($id){
        $produk = Produk::find($id);
        //hapus file foto
        if(file_exists(public_path('images/'.$produk->foto))){
            unlink(public_path('images/'.$produk->foto));
        }
    	$produk->delete();

    	return Redirect::route('produk.index')
            ->with(['message'=>'Data berhasil dihapus']);
    }

    //Hapus data yang dipilih
    public function delete($ids){
        $ids = json_decode($ids, true);
        foreach ($ids as $id) {
            $produk = Produk::find($id);
            //Hapus file foto
            if(file_exists(public_path('images/'.$produk->foto))){
                unlink(public_path('images/'.$produk->foto));
            }
            $produk->delete();
        }
        
        return Redirect::route('produk.index')
            ->with(['message'=>'Data berhasil dihapus']);
    }

}
