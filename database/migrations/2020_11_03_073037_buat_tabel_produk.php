<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BuatTabelProduk extends Migration
{
    public function up()
    {
        Schema::create('produk', function (Blueprint $table) {
            $table->id();        
            $table->integer('id_kategori')->index();  
            $table->string('kode_produk')->unique();
            $table->string('nama_produk');           
            $table->text('deskripsi_produk')->nullable();          
            $table->integer('harga');           
            $table->decimal('berat',3,2);          
            $table->integer('stok');           
            $table->string('foto');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('produk');
    }
}
