<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'price',
        'img',
        'rating',
        'category'
    ];

    public function orders(){
        return $this->hasMany(Order::class);
     }

    
}
