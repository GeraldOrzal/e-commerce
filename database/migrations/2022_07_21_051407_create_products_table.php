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
        Schema::create('products', function (Blueprint $table) {
            $table->id('productid');
            $table->string('productname');
            $table->unsignedSmallInteger('brandid');//f
            $table->unsignedInteger('price');
            $table->unsignedInteger('quantity');
            $table->unsignedSmallInteger('categoryid');//f
            $table->unsignedInteger('rating');
            $table->timestamps();
            $table->json('imagesname');
            $table->unsignedBigInteger('storeid');//f
            $table->foreign('brandid')->references('brandid')->on('brands');
            $table->foreign('categoryid')->references('categoryid')->on('categories');
            $table->foreign('storeid')->references('storeid')->on('stores');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
