<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelKota extends Migration
{
    public function up()
    {
        Schema::create('kota', function (Blueprint $table) {
            $table->id();               
            $table->string('nama_kota', 100);         
            $table->integer('ongkir');       
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('kota');
    }
}
