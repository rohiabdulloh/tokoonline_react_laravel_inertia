<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Kategori;
use App\Models\Produk;
use App\Models\User;
use Inertia\Inertia;

use Response;

class HomeController extends Controller
{
   protected $jml_load = 4;

    public function index()
    {
       return Inertia::render('Front/Index', [
           'produk' => Produk::limit($this->jml_load)->get()
       ]);
    }

    public function search(Request $rq)
    {
       return Inertia::render('Front/Search', [
           'search' => $rq->search,
           'produk' => Produk::where('nama_produk','LIKE','%'.$rq->search.'%')
                ->limit($this->jml_load)
                ->get(),
       ]);
    }

    public function kategori($nama_kategori)
    {
       $kategori = Kategori::where('nama_kategori','=',$nama_kategori)->first();
       $produk = Produk::leftJoin('kategori','kategori.id','=','produk.id_kategori')
            ->where('kategori.nama_kategori','=',$nama_kategori)
            ->select('produk.id as idproduk', 'produk.*')
            ->limit($this->jml_load)
            ->get();

       return Inertia::render('Front/Kategori', [
           'nama_kategori' => $nama_kategori,
           'kategori' => $kategori,
           'produk' => $produk,
       ]);
    }

    public function detail($id)
    {
       return Inertia::render('Front/Detail', [
           'produk' => Produk::where('kode_produk','=',$id)->first()
       ]);
    }

    public function load($start, $kat, $search)
    {
       $produk = Produk::leftJoin('kategori','kategori.id','=','produk.id_kategori');
       
       if($kat!='none')$produk = $produk->where('kategori.nama_kategori','=',$kat);
       if($search!='none') $produk = $produk->where('nama_produk','LIKE','%'.$search.'%');
        
       $produk = $produk->select('produk.id as idproduk', 'produk.*')
                ->offset($start)
                ->limit($this->jml_load);

       return Response::json([
          'data' => $produk->get(),
          'count' => $produk->count(),
       ]);
    }

}
