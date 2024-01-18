<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerCreateRequest;
use App\Http\Resources\V1\CustomerResource;
use App\Models\Customers;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(){
        return CustomerResource::collection(Customers::paginate());
    }


    public function show(Customers $customer){
        return new CustomerResource($customer); 
    }


    public function store(CustomerCreateRequest $request){ 
        Customers::create($request->validated());
        return response()->json('customer created successfully ♥');
    }


    public function update(Request $request,Customers $customer){ 
        $a = $request->validate([
            'prenom' => 'required|min:3',
            'nom' => 'required',
            'email' => ['required','min:8','email','unique:customers,email,'.$customer->id]
        ]);
        $customer->update($a);
        return response()->json('customer updated  ♥');
    }

    
    public function destroy(Customers $customer){ 
        $customer->delete();
        return response()->json('customer deleted ');
    }
}
