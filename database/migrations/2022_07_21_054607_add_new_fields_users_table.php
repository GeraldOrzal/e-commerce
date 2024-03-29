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
        //
        Schema::table('users', function($table) {
            $table->unsignedSmallInteger('roleid')->default('3');
            $table->unsignedSmallInteger('usertypeid')->default('1');
            $table->foreign('roleid')->references('roleid')->on('user_roles');
            $table->foreign('usertypeid')->references('usertypeid')->on('user_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
