<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelPesananDetail extends Migration
{
    public function up()
    {
        Schema::create('pesanan_detail', function (Blueprint $table) {
            $table->id();               
            $table->integer('id_pesanan')->index();
            $table->integer('id_produk')->index();              
            $table->integer('jumlah');          
            $table->integer('harga');             
            $table->integer('total_harga');   
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('pesanan_detail');
    }
}
