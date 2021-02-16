<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori extends Model
{

   protected $table = 'kategori';
  
   //relationship one to many dengan tabel produk
   public function produk(){
   	  return $this->hasMany('App\Models\Produk', 'id_kategori', 'id');
   }
}
