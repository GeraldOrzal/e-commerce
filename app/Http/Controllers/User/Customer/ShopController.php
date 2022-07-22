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
        $allProducts = Product::where('rating',[5,4,3])->take(20)->get();
        if($request->getRequestUri()==RouteServiceProvider::HOME){
            
            return Inertia::render('Welcome', [
               'featured'=>$allProducts,
               'categories'=>$categories
            ]);
        }
        
        return Inertia::render('User/Customer/Shop', [
               
        ]);
    }
}
