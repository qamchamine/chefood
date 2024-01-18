<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory; 
    protected $fillable = [
        'product_name',
        'product',
        'img',
        'rating',
        'category'
    ];

     public function user(){
        return $this->belongsTo(User::class);
     }
}

