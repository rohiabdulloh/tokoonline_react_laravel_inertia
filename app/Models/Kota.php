<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kota extends Model
{

   protected $table = 'kota';
  
   //Relationship one to many dengan tabel users
   public function user(){
   	  return $this->hasMany('App\Models\User', 'id_kota', 'id');
   }
}
