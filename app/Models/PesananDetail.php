<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PesananDetail extends Model
{

   protected $table = 'pesanan_detail';
   
   //balasan relationship one to many dengan tabel pesanan
   public function pesanan(){
   	  return $this->belongsTo('App\Models\Pesanan', 'id_pesanan', 'id');
   }
}
