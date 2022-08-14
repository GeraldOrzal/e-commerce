<?php

namespace App\Http\Controllers\User\Customer;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Cart;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class ShopController extends Controller
{
    //

    public function create(Request $request){

        $categories = DB::table('categories')->select('*')->get();
        
        if($request->getRequestUri()==RouteServiceProvider::HOMECUSTOMER){
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
        
        if(empty($myString)){
            $allProducts = DB::table('products')->join('categories','products.categoryid','=','categories.categoryid')->select('products.*','categories.description')->paginate(20);
            
        }else{
            $currentPage = $request->get('page');
            $rowSkip = 20 * $currentPage;
            if(isset($tempSort)){
                $results = DB::select(DB::raw("SELECT * FROM products INNER JOIN categories on products.categoryid = categories.categoryid $myString ,products.productid asc limit 20 offset $rowSkip"));
            }else{

                $results = DB::select(DB::raw("SELECT * FROM products INNER JOIN categories on products.categoryid = categories.categoryid $myString ORDER BY products.productid asc limit 20 offset $rowSkip"));
            }
            
            $allProducts = new Paginator($results,20,$currentPage);
            
        }
        
        return Inertia::render('User/Customer/Shop', [
               
               'allProducts'=>$allProducts,
               'categories'=>$categories
        ]);
    }

   

    public function store(Request $request){
      
        $found = Cart::where('productid','=',$request->productid)->get();
        if(count($found)!=0){
            return back()->with('message','Item already in cart');    
        }
        $cart = new Cart();
        $cart->productid = $request->productid;
        $cart->userid = $request->userid;
        $cart->iswishlist = $request->iswishlist;
        $cart->save();

        return back()->with('message','Successful');
    }
    
    public function destroy(Request $request){
        
        $allIds = $request->cartids;
        foreach ($allIds as $key => $value) {
            
            $cartItem = Cart::find($value);
            $cartItem->delete();
        }
        
        return back()->with('message','Successful');
    }
    public function update(Request $request){
        
        $allIds = $request->cartids;
        foreach ($allIds as $key => $value) {   
            $cartItem = Cart::find($value);
            $cartItem->iswishlist = true;
            
            $cartItem->save();
        }
        return back()->with('message','Successful');
    }
    public function checkoutitem(Request $request){

    }
    public function viewMyCart(){
        
        $myCart = DB::table('cart')->join('products','products.productid','=','cart.productid')->select('*')->where('userid','=',Auth::user()->id)->Where('iswishlist','=',false)->get();
        $total = 0;
        foreach ($myCart as $key => $value) {
            $total += $value->price;
        }
        return Inertia::render('User/Customer/Cart',[
            'cart'=>$myCart,
            'maxPrice'=>$total
        ]);
    }
    public function viewProduct($productid){
        $product = Product::find($productid);
        return Inertia::render('User/Customer/ViewProduct',[
            'product'=>$product
        ]);
    }
}
