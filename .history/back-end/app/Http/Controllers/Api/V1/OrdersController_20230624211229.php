<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrdersCreateRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    public function store(OrdersCreateRequest $request)
    { 
        $order = new Order();
        $order->product_name = $request->input('product_name');
        $order->product_quantity = $request->input('product_quantity');
        $order->full_name = $request->input('full_name');
        $order->location = $request->input('location');
        $order->payment_method = Auth::user()->email;
    
        $order->user_id = Auth::id(); // Set the authenticated user ID
      
        $order->save();
        
        return response()->json('order added with success');
    }
}