<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pesanan;
use App\Models\PesananDetail;
use App\Models\Produk;
use Inertia\Inertia;

use Redirect;

class PesananController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $pesanan = Pesanan::leftJoin('users', 'users.id', '=', 'pesanan.id_user')
            ->orderBy('pesanan.id', 'desc')
            //ada 2 tabel shg ada 2 kolom id, salah satu dibuatkan alias
            ->select('pesanan.id as idpesanan','pesanan.*','users.*') 
            ->withTrashed() //tampilkan juga data yang sudah dihapus
            ->get();

        return Inertia::render('Pesanan/Index', [
        	'pesanan'=> $pesanan
        ]);
    }

    //tampilkan halaman edit data
    public function edit($id){
        $pesanan = Pesanan::withTrashed()->find($id);
        $pesanan_detail = PesananDetail::leftJoin('produk','pesanan_detail.id_produk','=','produk.id')
            ->where('pesanan_detail.id_pesanan', '=', $id)->get();

        return Inertia::render('Pesanan/Edit', [
            'pesanan'=> $pesanan,
        	'pesanan_detail'=> $pesanan_detail,
        ]);
    }

    //simpan edit data
    public function update(Request $rq, $id){
        $this->validate($rq,[
            'status' => 'required',
        ]);
        
    	$pesanan = Pesanan::find($id);
        $pesanan->status        = $rq->status;
    	$pesanan->update();

    	return Redirect::route('pesanan.index')
            ->with(['message'=>'Data berhasil diedit']);
    }

    //Hapus 1 data
    public function destroy($id)
    {
        $pesanan = Pesanan::find($id);
        $pesanan->delete();

        $detail = PesananDetail::where('id_pesanan','=',$id)->get();
        foreach($detail as $d){
            $produk = Produk::find($d->id_produk);
            $produk->stok += $d->jumlah; //Batalkan pengurangan stok jika pesanan dihapus/dibatalkan
            $produk->update();
        }
        
        return Redirect::route('pesanan.index')
            ->with(['message'=>'Pesanan berhasil dibatalkan']);
    }

    public function restore($id)
    {
        $pesanan = Pesanan::withTrashed()->find($id);
        $pesanan->restore();

        $detail = PesananDetail::where('id_pesanan','=',$id)->get();
        foreach($detail as $d){
            $produk = Produk::find($d->id_produk);
            $produk->stok -= $d->jumlah; //kurangi stok lagi jika pesanan tidak jadi dihapus
            $produk->update();
        }

        return Redirect::route('pesanan.index')
            ->with(['message'=>'Pesanan berhasil direstore']);
    }
}
