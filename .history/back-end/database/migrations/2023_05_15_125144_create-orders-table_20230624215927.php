<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->integer('product_quantity');
            $table->string('full_name');
            $table->string('location');
            $table->enum('payment_method', ['cash on delivery', 'credit card']);
            $table->enum('delivery_offer', ['normal', 'fast', 'faster']);
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('product_id')->nullable()->constrained('products')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });

        $authenticatedUserId = auth()->id();
        if ($authenticatedUserId) {
            DB::table('orders')->update(['user_id' => $authenticatedUserId]);
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
}
