<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrdersCreateRequest;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    public function store(OrdersCreateRequest $request)
    { 
        Orders::create([$request])
        $order->user_id = auth()->user()->id;
        $order->save();
    return response()->json('order added with success');
    }
}
