<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationCreateRequest extends FormRequest
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
            'full_name' => 'required',
            'cin' => 'required|min:5,max:7',
            'email' => 'required|email',
            'contact_number' => ['required'],
            'date' => 'required',
            'service_type' => 'required',
            'ticket_code' => 'required'
        ];
    }
}
