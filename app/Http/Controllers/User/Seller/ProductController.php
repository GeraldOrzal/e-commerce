<?php

namespace App\Http\Controllers\User\Seller;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function create(Request $request){
        
        return Inertia::render('User/Seller/AddProducts');
    }

    
    public function store(Request $request){

        $files = $request->file('uploadfile');
        $allCategory = Category::all();

        
        foreach ($files as $key => $value) {
            $res = fopen($value,'r');
            // $file = file_get_contents($value);
            while(!feof($res)){
                $text[] = fgetcsv($res,0,",");
            }
            
            for ($i=1; $i < count($text); $i++) { 
                $product = new Product();
                for ($y=0; $y < count($text[$i]); $y++) { 
                    $row = $text[0][$y];
                    
                    $row = str_replace(" ","",$row);
                    $row = strtolower($row);
                    
                    switch ($row) {
                        case 'images':
                            $product->imagesname = json_encode(array("MenPants.jpg"));
                        case 'brand':
                            $product->brandid = null;
                            break;
                        case 'category':
                            
                            foreach ($allCategory as $key => $value) {
                                if($value->description==$text[$i][$y]){
                                    $product->categoryid = $value->categoryid;
                                }
                            }
                            break;
                        default:
                            $product->$row = $text[$i][$y];
                            break;
                    }
                    

                }
                $product->save();
            }

            // Storage::disk('local')->put(microtime().$value->getClientOriginalName(),$value);
                
        }
        

        return back()->with('message',["uploadfile","success"]);
    }
}
