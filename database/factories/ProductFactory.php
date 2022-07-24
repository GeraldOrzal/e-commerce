<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'productname' => fake()->text(20),
            'price'=>rand(10,5000),
            'quantity'=>rand(10,5000),
            'categoryid'=>rand(1,5),
            'rating'=>rand(0,5),
            'storeid'=>rand(1,50),
            'productdetails'=>json_encode(array(fake()->text(5)=>fake()->paragraph(2),fake()->text(5)=>fake()->paragraph(2))),
            'imagesname'=>fake()->image('public/storage/images',640,480,null,false),
        ];
    }
}
