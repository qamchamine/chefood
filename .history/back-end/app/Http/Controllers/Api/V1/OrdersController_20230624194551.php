<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrdersCreateRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    public function store(OrdersCreateRequest $request)
    { 
        $order = new Orders();
        $order->product_name = $request->input('product_name');
        $order->product_quantity = $request->input('product_quantity');
        $order->full_name = $request->input('full_name');
        $order->location = $request->input('location');
        $order->payment_method = $request->input('payment_method');
        $order->delivery_offer = $request->input('delivery_offer'); 
        if (auth()->check()) {
            $order->user_id = auth()->user()->id;
        }
        
        $order->save();
    return response()->json('order added with success');
    }
}
