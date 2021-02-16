<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelBank extends Migration
{
    public function up()
    {
        Schema::create('bank', function (Blueprint $table) {
            $table->id();               
            $table->string('nama_bank', 50);         
            $table->string('no_rekening', 50);         
            $table->string('nama_pemilik', 100);      
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bank');
    }
}
