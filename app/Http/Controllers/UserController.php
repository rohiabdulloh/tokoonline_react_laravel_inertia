<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Kota;
use Inertia\Inertia;

use Redirect;

class UserController extends Controller
{
    //tampilkan halaman manajemen data
    public function index()
    {
        $user = User::leftJoin('kota','kota.id','=','users.id_kota')
            ->where('users.level', '=', 0) //jangan tampilkan user admin (level 1)
            ->orderBy('users.id', 'desc')
            //buatkan alias untuk id user
            ->select('users.*', 'kota.*', 'users.id as iduser')
            ->get();

        return Inertia::render('User/Index', [
        	'user'=> $user
        ]);
    }

    //tampilkan halaman profil user
    public function profil(){
        //Arahkan user ke halaman yang sesuai levelnya
        $view = Auth::user()->level==1 ? 'User/Profil' : 'Front/Profil';
    	return Inertia::render($view, [
            'user'=> Auth::user(),
            'kota'=> Kota::all(),
    	]);
    }

    public function update(Request $rq, $id){
        $this->validate($rq,[
            'name' => 'required',
            'address' => 'required',
            'email' => 'required',
            'hp' => 'required',
            'kota' => 'required',
            'password1' => 'same:password2',
            'password2' => 'same:password1',
        ]);
        
    	$user = User::find($id);
        $user->name        = $rq->name;
        $user->address     = $rq->address;
        $user->email       = $rq->email;
        $user->id_kota     = $rq->kota;
        $user->hp          = $rq->hp;
        //Ubah password hanya jika ada perubahan (input password tidak kosong)
        if(!empty($rq->password1 or !empty($rq->password2))){
           $user->password = Hash::make($rq->password1); //Enkripsi password dg Hash agar aman
        }
     	$user->update();

    	return Redirect::route('user.profil')
            ->with(['message'=>'Data berhasil diperbarui']);
    }

    //Hapus 1 data
    public function destroy($id){
        $user = User::find($id);
    	$user->delete();

    	return Redirect::route('user.index')
            ->with(['message'=>'Data berhasil dihapus']);
    }

    //Hapus data yang dipilih
    public function delete($ids){
        $ids = json_decode($ids, true);
        foreach ($ids as $id) {
            $user = User::find($id);
            $user->delete();
        }
        
        return Redirect::route('user.index')
           ->with(['message'=>'Data berhasil dihapus']);
    }
}
