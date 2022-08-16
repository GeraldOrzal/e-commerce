<?php

namespace Tests\Unit;


use App\Providers\RouteServiceProvider;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_that_true_is_true()
    {
        $this->assertTrue(true);
    }

    public function test_uploadcsv_route(){

        $res = $this->post('/addproduct/csvupload');

        
        $res->assertStatus(200);


    }
}
