<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /* Run the migrations. */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('cin');
            $table->string('email');
            $table->string('contact_number');
            $table->datetime('date');
            $table->enum('service_type',['table','room','hall']);
            $table->string('ticket_code');
            $table->timestamps();
        });
    } 
    /* Reverse the migrations. */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
