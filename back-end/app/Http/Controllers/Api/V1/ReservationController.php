<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReservationCreateRequest;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(ReservationCreateRequest $request)
    { 
        $reservation = new Reservation();
        $reservation->full_name = $request->input('full_name');
        $reservation->cin = $request->input('cin');
        $reservation->email = $request->input('email');
        $reservation->contact_number = $request->input('contact_number');

        $datetime = $request->input('date'); 

        $reservation->date = date('Y-m-d H:i:s', strtotime($datetime));
        $reservation->service_type = $request->input('service_type');
        $reservation->ticket_code = $request->input('ticket_code');
        $reservation->save();  
    return response()->json('reservation added with success');
    }
}
