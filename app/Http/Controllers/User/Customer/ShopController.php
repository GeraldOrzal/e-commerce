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
        
        
        // if(isset($tempSort)){
        //     if(gettype($tempSort)=="string"){
        
                
        //     }
            
        // }
        
        if(empty($tempCat)&&empty($tempSort)){
            $allProducts = DB::table('products')->join('categories','products.categoryid','=','categories.categoryid')->select('products.*','categories.description')->paginate(20);
            
        }else{
            
            if(isset($tempSort)){
                if(empty($tempCat)){
                    switch ($tempSort) {
                        case 'ascending':
                            $allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->orderBy('price','asc')->paginate(20);        
                            break;
                        case 'descending':
                            $allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->orderBy('price','desc')->paginate(20);        
                            break;
                        case 'popularity':
                            $allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->orderBy('rating','desc')->paginate(20);        
                            break;
                        default:
                            
                            break;
                    }
                    
                }else{
                    switch ($tempSort) {
                        case 'ascending':
                            gettype($tempCat)=="string"?$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->where('categories.description','=',$tempCat)->orderBy('price','asc')->paginate(20):$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->whereIn('categories.description',$tempCat)->orderBy('price','asc')->paginate(20);           
                            break;
                        case 'descending':
                            gettype($tempCat)=="string"?$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->where('categories.description','=',$tempCat)->orderBy('price','desc')->paginate(20):$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->whereIn('categories.description',$tempCat)->orderBy('price','desc')->paginate(20);  
                            break;
                        case 'popularity':
                            gettype($tempCat)=="string"?$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->where('categories.description','=',$tempCat)->orderBy('rating','desc')->paginate(20):$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->whereIn('categories.description',$tempCat)->orderBy('rating','desc')->paginate(20);  
                            break;
                        default:
                            gettype($tempCat)=="string"?$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->where('categories.description','=',$tempCat)->paginate(20):$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->whereIn('categories.description',$tempCat)->orderBy('')->paginate(20);  
                            break;
                    }
                }
               
            }else{

               gettype($tempCat)=="string"?$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->where('categories.description','=',$tempCat)->paginate(20):$allProducts =  Db::table('products')->join('categories', 'products.categoryid','=', 'categories.categoryid')->select('*')->whereIn('categories.description',$tempCat)->paginate(20);
                
            }
            
            
            
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
        $cart->userid = Auth::user()->id;
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
        
        $myCart = DB::table('cart')->join('products','products.productid','=','cart.productid')->join('stores','stores.storeid','=','products.storeid')->select('*')->where('cart.userid','=',Auth::user()->id)->Where('iswishlist','=',false)->get();
        $total = 0;

        
        $temp=array();

        foreach ($myCart as $key => $value) {
            if(isset($temp[$value->storename])){
                array_push($temp[$value->storename],$value);
            }else{
                $temp[$value->storename] = array($value);        
            }
            $total += $value->price;
        }
        
        return Inertia::render('User/Customer/Cart',[
            'cart'=>$temp,
            'itemCount'=>count($myCart),
            'maxPrice'=>$total
        ]);
    }

    public function viewMyWishlist(){
        $myWishlist = DB::table('cart')->join('products','products.productid','=','cart.productid')->join('stores','stores.storeid','=','products.storeid')->select('*')->where('cart.userid','=',Auth::user()->id)->Where('iswishlist','=',true)->get();
        
        $temp=array();

        foreach ($myWishlist as $key => $value) {
            if(isset($temp[$value->storename])){
                array_push($temp[$value->storename],$value);
            }else{
                $temp[$value->storename] = array($value);        
            }
            
        }
        return Inertia::render('User/Customer/Account/AccountWishList',[
                'cart'=>$temp,
        ]);

    }
    public function viewProduct($productid){
        $product = Product::find($productid);
        return Inertia::render('User/Customer/ViewProduct',[
            'product'=>$product
        ]);
    }
}
