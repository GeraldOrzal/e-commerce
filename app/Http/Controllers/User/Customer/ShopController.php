<?php

namespace App\Http\Controllers\User\Customer;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
class ShopController extends Controller
{
    //

    public function create(Request $request){

        $categories = DB::table('categories')->select('*')->get();
        
        if($request->getRequestUri()==RouteServiceProvider::HOME){
            $allFeaturedProducts = Product::where('rating',[5,4,3])->take(20)->get();
            return Inertia::render('Welcome', [
               'featured'=>$allFeaturedProducts,
               'categories'=>$categories
            ]);
        }
        
        if(!empty($request->get('categories'))){
            if(str_contains($request->get('categories'),"&")){
                $tempCat = explode("&",$request->get('categories'));
            }else{
                $tempCat = $request->get('categories');
            }
        }
        if(!empty($request->get('sortby'))){
            if(str_contains($request->get('sortby'),"&")){
                $tempSort = explode("&",$request->get('sortby'));
            }else{
                $tempSort = $request->get('sortby');
            }
            
        }
        $myString = "";
        if(isset($tempCat)){
            if(gettype($tempCat)=="string"){
                $myString = "WHERE categories.description = '$tempCat'";
            }else{
                $myString = "WHERE categories.description = '$tempCat[0]'";
                foreach(array_slice($tempCat,1) as $value){
                    $myString = "$myString OR categories.description = '$value'";
                }
            }
        }
        if(isset($tempSort)){
            if(gettype($tempSort)=="string"){
                switch ($tempSort) {
                    case 'ascending':
                        $myString = "$myString ORDER BY price ASC";    
                        break;
                    case 'descending':
                        $myString = "$myString ORDER BY price DESC";
                        break;
                    case 'popularity':
                        $myString = "$myString ORDER BY rating DESC";
                        break;
                    default:
                        $myString = "$myString ORDER BY created_at DESC";
                        break;
                }
                
            }
            
        }
        $count = DB::table('products')->count();
        if(empty($myString)){
            $allProducts = DB::table('products')->join('categories','products.categoryid','=','categories.categoryid')->select('products.*','categories.description')->get();
        }else{
            $allProducts = DB::select(DB::raw("SELECT * FROM products INNER JOIN categories on products.categoryid = categories.categoryid $myString"));
            
        }
        return Inertia::render('User/Customer/Shop', [
               'count' => $count,
               'allProducts'=>$allProducts,
               'categories'=>$categories
        ]);
    }

    public function viewProduct($productid){
        $product = Product::find($productid);
        return Inertia::render('User/Customer/ViewProduct',[
            'product'=>$product
        ]);
    }
    
    
}
