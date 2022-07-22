<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
             'storename' => fake()->text(10),
            'storeavatarname'=>fake()->image('public/storage/images',640,480,null,false),
            'businesscategoryid'=>rand(1,3),
            'description'=> fake()->paragraph(3),
            'userid'=>rand(1,50),

        ];
    }
}
