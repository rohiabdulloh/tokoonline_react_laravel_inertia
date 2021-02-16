<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kota;
use Inertia\Inertia;

use Redirect;

class KotaController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $kota = Kota::orderBy('id', 'desc')->get();

        return Inertia::render('Kota/Index', [
        	'kota'=> $kota
        ]);
    }

    //Tampilkan halaman tambah data
    public function create()
    {
        return Inertia::render('Kota/Create');
    }

    public function store(Request $rq){
        $this->validate($rq,[
            'nama_kota' => 'required',
            'ongkir' => 'required',
        ]);

    	$kota = new Kota;
    	$kota->nama_kota = $rq->nama_kota;
    	$kota->ongkir = $rq->ongkir;
    	$kota->save();

    	return Redirect::route('kota.index')
          ->with(['message'=>'Data berhasil ditambahkan']);
    }

    //tampilkan halaman edit data
    public function edit($id){
    	return Inertia::render('Kota/Edit', [
    		'kota'=> Kota::find($id)
    	]);
    }

    //simpan edit data
    public function update(Request $rq, $id){
        $this->validate($rq,[
            'nama_kota' => 'required',
            'ongkir' => 'required',
        ]);
        
    	$kota = Kota::find($id);
    	$kota->nama_kota = $rq->nama_kota;
    	$kota->ongkir = $rq->ongkir;
    	$kota->update();

    	return Redirect::route('kota.index')
           ->with(['message'=>'Data berhasil diedit']);
    }

    //Hapus 1 data
    public function destroy($id){
    	$kota = Kota::find($id);
    	$kota->delete();

    	return Redirect::route('kota.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

    //Hapus data yang dipilih
    public function delete($ids){
        $ids = json_decode($ids, true);
        foreach ($ids as $id) {
            $kota = Kota::find($id);
            $kota->delete();
        }
        
        return Redirect::route('kota.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

}
