<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bank;
use Inertia\Inertia;

use Redirect;

class BankController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $bank = Bank::orderBy('id', 'desc')->get();

        return Inertia::render('Bank/Index', [
        	'bank'=> $bank
        ]);
    }

    //Tampilkan halaman tambah data
    public function create()
    {
        return Inertia::render('Bank/Create');
    }

    //Menyimpan tambah data
    public function store(Request $rq){
        $this->validate($rq,[
            'nama_bank' => 'required',
            'no_rekening' => 'required',
            'nama_pemilik' => 'required',
        ]);

    	$bank = new Bank;
    	$bank->nama_bank = $rq->nama_bank;
    	$bank->no_rekening = $rq->no_rekening;
    	$bank->nama_pemilik = $rq->nama_pemilik;
    	$bank->save();

    	return Redirect::route('bank.index')
          ->with(['message'=>'Data berhasil ditambahkan']);
    }

    //tampilkan halaman edit data
    public function edit($id){
    	return Inertia::render('Bank/Edit', [
    		'bank'=> Bank::find($id)
    	]);
    }

    //simpan edit data
    public function update(Request $rq, $id){
        $this->validate($rq,[
            'nama_bank' => 'required',
            'no_rekening' => 'required',
            'nama_pemilik' => 'required',
        ]);
        
    	$bank = Bank::find($id);
    	$bank->nama_bank = $rq->nama_bank;
    	$bank->no_rekening = $rq->no_rekening;
    	$bank->nama_pemilik = $rq->nama_pemilik;
    	$bank->update();

    	return Redirect::route('bank.index')
           ->with(['message'=>'Data berhasil diedit']);
    }

    //Hapus 1 data
    public function destroy($id){
    	$bank = Bank::find($id);
    	$bank->delete();

    	return Redirect::route('bank.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

    //Hapus data yang dipilih
    public function delete($ids){
        $ids = json_decode($ids, true);
        foreach ($ids as $id) {
            $bank = Bank::find($id);
            $bank->delete();
        }
        
        return Redirect::route('bank.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }

}
