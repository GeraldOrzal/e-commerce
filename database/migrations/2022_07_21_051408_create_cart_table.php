<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart', function (Blueprint $table) {
            $table->id('cartid');
            $table->unsignedBigInteger('productid');
            $table->timestamps();
            $table->unsignedBigInteger('userid');
            $table->unsignedSmallInteger('cartstatusid')->nullable();
            $table->unsignedSmallInteger('paymentid')->nullable();
            $table->boolean('iswishlist');
            $table->foreign('productid')->references('productid')->on('products');
            $table->foreign('userid')->references('id')->on('users');
            $table->foreign('paymentid')->references('paymentid')->on('payment');
            $table->foreign('cartstatusid')->references('cartstatusid')->on('cart_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart');
    }
};
