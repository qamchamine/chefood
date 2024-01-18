<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory; 
    protected $fillable = [
        'product_name',
        'product_quantity',
        'full_name',
        'location',
        'payment_method',
        'delivery_offer'
/*         ,
        'user_id' */
    ];
protected $table = 'orders';
     public function user(){
        return $this->belongsTo(User::class);
     }
     public function product(){
        return $this->belongsTo(Product::class);
     }
}

