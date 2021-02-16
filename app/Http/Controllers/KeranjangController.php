<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\Produk;
use App\Models\Pesanan;
use App\Models\PesananDetail;
use App\Models\Kota;
use App\Models\Bank;
use Inertia\Inertia;
use Carbon\Carbon;
use Auth;

use Redirect;

class KeranjangController extends Controller
{
    public function index(Request $rq)
    {//mengambil cookie keranjang
      $cart = json_decode($rq->cookie('keranjang'), true);
      

      return Inertia::render('Front/Keranjang',[
        'keranjang' => $cart
      ]);
    }

    public function store(Request $rq){
        $id = $rq->id;
        $produk = Produk::find($id);

        //mengambil cookie keranjang
        $cart = json_decode($rq->cookie('keranjang'), true);

        $cart[$id] = [
          'id' => $produk->id,
          'kode' => $produk->kode_produk,
          'nama' => $produk->nama_produk,
          'harga' => $produk->harga,
          'stok' => $produk->stok,
          'foto' => $produk->foto,
          'jumlah' => $rq->jumlah
        ];
        
        return Redirect::route('keranjang.index')
          ->with(['message'=>'Produk ditambahkan ke keranjang'])
          ->cookie('keranjang', json_encode($cart), 120);
    }

    public function update(Request $rq, $id){
        $cart = json_decode($rq->cookie('keranjang'), true);
      
        $cart[$id]['jumlah'] = $rq['jml_'.$id];

      return Redirect::route('keranjang.index')
         ->cookie('keranjang', json_encode($cart), 120);
    }

    public function destroy(Request $rq, $id){
    	$cart = json_decode($rq->cookie('keranjang'), true);
      
        unset($cart[$id]);

    	return Redirect::route('keranjang.index')
           ->with(['message'=>'Produk berhasil dihapus'])
           ->cookie('keranjang', json_encode($cart), 120);
    }

    public function add(Request $rq, $id)
    {
      $produk = Produk::find($id);

      //mengambil cookie keranjang
      $cart = json_decode($rq->cookie('keranjang'), true);
      if($cart==null) $cart=[];
      
      if(!array_key_exists($id, $cart)){
        $cart[$id] = [
          'id' => $produk->id,
          'kode' => $produk->kode_produk,
          'nama' => $produk->nama_produk,
          'harga' => $produk->harga,
          'stok' => $produk->stok,
          'foto' => $produk->foto,
          'jumlah' => 1
        ];
      }
      
      return Redirect::route('keranjang.index')
          ->with(['message'=>'Produk ditambahkan ke keranjang'])
          ->cookie('keranjang', json_encode($cart), 120);
    }

    public function save(Request $rq)
    {
        //mengambil cookie keranjang
        $cart = json_decode($rq->cookie('keranjang'), true);

        $kota = Kota::find(Auth::user()->id_kota);

        $total = $rq->total;
        if($kota!==null) $total += $kota->ongkir;

        $pesanan = new Pesanan;
        $pesanan->tanggal = Carbon::now();
        $pesanan->id_user = Auth::user()->id;
        $pesanan->jumlah_produk = $rq->jumlah;
        $pesanan->total_bayar = $total;
        $pesanan->status = 0;
        $pesanan->save();

        if($pesanan->id){
          foreach($cart as $c){
            $detail = new PesananDetail;
            $detail->id_pesanan = $pesanan->id;
            $detail->id_produk = $c['id'];
            $detail->harga = $c['harga'];
            $detail->jumlah = $c['jumlah'];
            $detail->total_harga = $c['jumlah']*$c['harga'];
            $detail->save();

            $produk = Produk::find($c['id']);
            $produk->stok -= $c['jumlah'];
            $produk->update();
          }

          $cart = [];
          return Redirect::route('keranjang.konfirmasi')
            ->cookie('keranjang', json_encode($cart), 120);
        }

      return Redirect::back();
    }

    public function konfirmasi(){
      $pesanan = Pesanan::where([
        ['id_user','=',Auth::user()->id],
        ['status','<',1],
      ])->orderBy('id','desc')->first();
      
      if($pesanan !== null){
        $detail = PesananDetail::where('id_pesanan','=',$pesanan->id)
          ->leftJoin('produk', 'produk.id','=','pesanan_detail.id_produk')
          ->get();
      }else{
        $detail = [];
      }

      return Inertia::render('Front/Konfirmasi',[
        'pesanan' => $pesanan,
        'user' => Auth::user(),
        'kota'=>Auth::user()->kota,
        'detail' => $detail,
        'bank' => Bank::all()
      ]);
    }

    public function bayar($id){
      $pesanan = Pesanan::find($id);
      $pesanan->status = 1;
      $pesanan->update();

      return Inertia::render('Front/Bayar');
    }
}
