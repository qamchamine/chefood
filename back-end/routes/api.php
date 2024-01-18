<?php

use App\Http\Controllers\Api\V1\OrdersController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\ReservationController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'product'], function () {
    Route::apiResource('/', ProductController::class);
    Route::apiResource('/delete', ProductController::class);
});
Route::apiResource('order', OrdersController::class);
Route::apiResource('reservation', ReservationController::class);
Route::group(['prefix' => 'users'], function () {
    Route::get('orders', [AuthController::class, 'getUserOrders']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'store']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});
