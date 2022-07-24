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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id('reviewid');
            $table->unsignedBigInteger('productid');
            $table->unsignedInteger('rating');
            $table->json('imagesname');
            $table->unsignedBigInteger('userid');
            $table->timestamps();
            $table->foreign('productid')->references('productid')->on('products');
            $table->foreign('userid')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
