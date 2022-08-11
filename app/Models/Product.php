<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected  $primaryKey = 'productid';
    protected $fillable = [
        'productname',
        'price',
        'quantity',
        'rating',
        'productdetails',
        'imagesname',
        
    ];
    public function category(){
        return $this->hasMany(Category::class);
    }
}
