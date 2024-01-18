<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrdersCreateRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'product_name' => '', 
            'full_name' => 'required',
            'location' => ['required'],
            'payment_method' => ['required'],
            'delivery_offer' => ['required']/* ,
            'user_id' => 'exists:users' */

        ];
    }
}
