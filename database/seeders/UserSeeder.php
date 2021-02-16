<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
        	'name' => "Admin",
        	'email' => "admin@gmail.com",
        	'password' =>Hash::make("12345"),
            'address' => "Slawi, Tegal",
            'hp' => "085812341111",
            'id_kota' => 1,
        	'level' => 1,
        ]);
    }
}
