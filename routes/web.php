<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\KeranjangController;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KotaController;
use App\Http\Controllers\UserController;

use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\BankController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

// Auth     
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login'])->name('login.attemp');
Route::post('logout', [LoginController::class, 'logout']);
Route::get('register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('register', [RegisterController::class, 'register'])->name('register.attemp');

//User    - hanya dapat diakses oleh user yang login
Route::group(['middleware' => ['auth','ceklevel:[0,1]']], function(){
	Route::get('/user/profil', [UserController::class, 'profil'])->name('user.profil');
	Route::put('/user/{id}', [UserController::class, 'update'])->name('profil.update');
	
	Route::post('/keranjang/save', [KeranjangController::class,'save'])->name('keranjang.save');
	Route::get('/keranjang/konfirmasi', [KeranjangController::class,'konfirmasi'])->name('keranjang.konfirmasi');
	Route::get('/pesananku', [KeranjangController::class,'konfirmasi'])->name('pesananku');
	Route::get('/bayar/{id}', [KeranjangController::class,'bayar'])->name('bayar');
});

//Admin     - hanya apat diakses oleh user level 1 (admin)
Route::group(['middleware' => ['auth','ceklevel:1']], function(){
	Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
	
	Route::delete('/kategori/delete/{ids}', [KategoriController::class, 'delete'])->name('kategori.delete');
	Route::resource('/kategori', KategoriController::class);

	Route::delete('/produk/delete/{ids}', [ProdukController::class, 'delete'])->name('produk.delete');
	Route::resource('/produk', ProdukController::class);
	
	Route::delete('/kota/delete/{ids}', [KotaController::class, 'delete'])->name('kota.delete');
	Route::resource('/kota', KotaController::class);

	Route::delete('/user/delete/{ids}', [UserController::class, 'delete'])->name('user.delete');
	Route::resource('/user', UserController::class);

	Route::get('/pesanan/restore/{id}', [PesananController::class, 'restore'])->name('pesanan.restore');
	Route::resource('/pesanan', PesananController::class);
	
	Route::delete('/bank/delete/{ids}', [BankController::class, 'delete'])->name('bank.delete');
	Route::resource('/bank', BankController::class);
});

//Guess    - dapat diakses oleh semua pengunjung
Route::get('/', [HomeController::class, 'index']);
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/kategoriproduk/{nama}', [HomeController::class, 'kategori'])->name('home.kategori');
Route::get('/search', [HomeController::class, 'search'])->name('home.search');
Route::get('/detail/{kode}', [HomeController::class, 'detail'])->name('home.detail');
Route::get('/load/{start}/{kategori}/{search}', [HomeController::class, 'load'])->name('home.load');

Route::get('/keranjang/add/{id}', [KeranjangController::class,'add'])->name('keranjang.add');
Route::resource('/keranjang', KeranjangController::class);
