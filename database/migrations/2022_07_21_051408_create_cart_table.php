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
            $table->integer('productid',false,true);
            $table->timestamps();
            $table->integer('userid',false,true);
            $table->integer('cartstatusid',false,true);
            $table->integer('paymentid',false,true);
            $table->boolean('iswishlist');
            $table->foreign('productid')->references('productid')->on('products');
            $table->foreign('userid')->references('id')->on('users');
            $table->foreign('paymentid')->references('paymentid')->on('payment');
            $table->foreign('cartstatusid')->references('cartstatusid')->on('cartstatus');
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
