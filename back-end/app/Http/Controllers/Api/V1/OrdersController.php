<?php
namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrdersCreateRequest;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{

    public function index(){
        $orders = Order::all();
        return response()->json([
            'status' => 'success', 
            'orders' => $orders
        ]);
    }
    public function destroy($id){
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json([
            'status' => 'success', 
            'message' => 'deleted with success'
        ]);
    }
    public function store(OrdersCreateRequest $request )
    { 

        $order = new Order();
        $order->product_name = $request->input('product_name');
        $order->product_quantity = $request->input('product_quantity');
        $order->full_name =  $request->input('full_name');
        $order->location = $request->input('location');
        $order->payment_method = $request->input('payment_method');
        $order->user_id = $request->input('user_id');
        $order->product_id = $request->input('product_id');
    
      
      
        $order->save();
        
        return response()->json('order added with success');
    }
}
