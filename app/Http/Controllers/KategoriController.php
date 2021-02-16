<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use Inertia\Inertia;

use Redirect;

class KategoriController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $kategori = Kategori::orderBy('id', 'desc')->get();

        return Inertia::render('Kategori/Index', [
        	'kategori'=> $kategori
        ]);
    }

    //Tampilkan halaman tambah data
    public function create()
    {
        return Inertia::render('Kategori/Create');
    }

    //Menyimpan tambah data
    public function store(Request $rq){
        $this->validate($rq,[
            'nama_kategori' => 'required',
        ]);

    	$kategori = new Kategori;
    	$kategori->nama_kategori = $rq->nama_kategori;
    	$kategori->save();

    	return Redirect::route('kategori.index')
          ->with(['message'=>'Data berhasil ditambahkan']);
    }

    //tampilkan halaman edit data
    public function edit($id){
    	return Inertia::render('Kategori/Edit', [
    		'kategori'=> Kategori::find($id)
    	]);
    }

    //simpan edit data
    public function update(Request $rq, $id){
        $this->validate($rq,[
            'nama_kategori' => 'required',
        ]);
        
    	$kategori = Kategori::find($id);
    	$kategori->nama_kategori = $rq->nama_kategori;
    	$kategori->update();

    	return Redirect::route('kategori.index')
           ->with(['message'=>'Data berhasil diedit']);
    }

    //Hapus 1 data
    public function destroy($id){
    	$kategori = Kategori::find($id);
    	$kategori->delete();

    	return Redirect::route('kategori.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

    //Hapus data yang dipilih
    public function delete($ids){
        $ids = json_decode($ids, true);
        foreach ($ids as $id) {
            $kategori = Kategori::find($id);
            $kategori->delete();
        }
        
        return Redirect::route('kategori.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

}
