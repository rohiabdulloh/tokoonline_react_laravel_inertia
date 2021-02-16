<?php
namespace App\Http\Controllers;
use App\Models\Kategori;
use App\Models\Produk;
use App\Models\User;
use App\Models\Pesanan;
use Inertia\Inertia;
use DB;
use Carbon\Carbon;
class DashboardController extends Controller
{
    public function index()
    {
       $datapenjualan = [];
       
       $akhirbulan = Carbon::now()->endOfMonth();
       for($i=1; $i<= $akhirbulan->format('d'); $i++){
          $tanggal = date('Y').'-'.date('m').'-'.substr("0".$i, -2);
          $jmlpesanan = Pesanan::where('status','>=',1)
            ->whereDate('tanggal', $tanggal)
            ->sum('jumlah_produk');

         $datapenjualan[] = ['tanggal'=>$i, 'jumlah'=>$jmlpesanan];  
       }

        return Inertia::render('Dashboard/Index', [
           'jmlkategori' => Kategori::count(),
           'jmlproduk' => Produk::count(),
           'jmluser' => User::count(),
           'jmlpesanan' => Pesanan::count(),
           'datapenjualan' => $datapenjualan,
       ]);
    }
}
