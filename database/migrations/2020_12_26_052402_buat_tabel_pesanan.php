<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelPesanan extends Migration
{
    
    public function up()
    {
        Schema::create('pesanan', function (Blueprint $table) {
            $table->id();             
            $table->integer('id_user')->index(); 
            $table->dateTime('tanggal');                
            $table->integer('jumlah_produk');             
            $table->integer('total_bayar');              
            $table->integer('status');   
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pesanan');
    }
}
