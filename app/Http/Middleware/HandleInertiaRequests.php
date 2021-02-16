<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\Pesanan;
use Inertia\Middleware;
use Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        //ambil data keranjang dari cookie
        if($request->cookie('keranjang') !== null){
            $cart = json_decode($request->cookie('keranjang'), true);
            $keranjang = count($cart);
        }else{
            $keranjang = 0;
        }

        //mengambil data pesanan sesuai status login untuk notifikasi pada menu
        if(Auth::check()){
          $pesanan = Pesanan::where([
            ['id_user','=',Auth::user()->id],
            ['status','<',1],
          ])->count();
        }else{
          $pesanan = 0;
        }

        return array_merge(parent::share($request), [
            'flash' => [ //pesan jika aksi berhasil
                'message' => $request->session()->get('message'),
            ],
            'data' => [ //data untuk ditampilkan di semua halaman
                'kategori' =>  Kategori::all(),
                'keranjang' =>  $keranjang,
                'pesanan' =>  $pesanan
            ],
            'auth' => [ //status login agar terdeteksi di semua halaman
                'loggedIn' =>  Auth::check(),
                'user' =>  Auth::user()
            ],
        ]);
    }
}
