<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pesanan extends Model
{
   use softDeletes; //menerapkan soft delete
   protected $table = 'pesanan';
   
   //relationship one to many dengan tabel detail
   public function detail(){
   	  return $this->belongsTo('App\Models\PesananDetail', 'id_pesanan', 'id');
   }
}
