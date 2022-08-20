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
        Schema::create('stores', function (Blueprint $table) {
            $table->id('storeid');
            $table->string('storename');
            $table->string('storeavatarname');
            $table->unsignedSmallInteger('businesscategoryid');
            $table->string('description');
            $table->foreign('businesscategoryid')->references('businesscategoryid')->on('business_categories');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
};
