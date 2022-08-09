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

        $categories = DB::table('categories')->select('categories.description')->get();
        
        if($request->getRequestUri()==RouteServiceProvider::HOME){
            $allFeaturedProducts = Product::where('rating',[5,4,3])->take(20)->get();
            return Inertia::render('Welcome', [
               'featured'=>$allFeaturedProducts,
               'categories'=>$categories
            ]);
        }
        $count = DB::table('products')->count();
        $allProducts = DB::table('products')->select('*')->limit(10)->get();
        return Inertia::render('User/Customer/Shop', [
               'count' => $count,
               'allProducts'=>$allProducts
        ]);
    }

    public function viewProduct($productid){
        $product = Product::find($productid);
        return Inertia::render('User/Customer/ViewProduct',[
            'product'=>$product
        ]);
    }

    
}
