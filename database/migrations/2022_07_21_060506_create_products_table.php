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
            $table->string('brandid');//f
            $table->unsignedInteger('price');
            $table->unsignedInteger('quantity');
            $table->unsignedInteger('categoryid');//f
            $table->unsignedInteger('rating');
            $table->json('imagesname');
            $table->unsignedInteger('storeid');//f
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
