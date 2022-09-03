<?php

use App\Events\Message;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Customer\ShopController;
use App\Http\Controllers\User\Seller\ProductController;
use App\Models\Product;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', [ShopController::class,'create'])->name("index");

Route::get('/viewproduct/{id}', [ShopController::class,'viewProduct'])->name('viewproduct');

Route::get('/aboutus', fn()=>Inertia::render('AboutUs'))->name("aboutus");

Route::group([
    'prefix'=>'user',
    'middleware'=>['auth','isUser']
],
function(){
   
    Route::get('/shop', [ShopController::class,'create'])->name('shop');
    
    Route::delete('/cart',[ShopController::class,'destroy'])->name('removecart');

    Route::patch('/cart',[ShopController::class,'update'])->name('movetowishlist');
    
    Route::post('/cart',[ShopController::class,'store'])->name('addcart');

    Route::get('/cart', [ShopController::class,'viewMyCart'])->name('cart');

    Route::get('/checkout', fn()=>Inertia::render('User/Customer/Checkout'))->name('checkout');

    Route::get('/thankyou', fn()=>Inertia::render('User/Customer/Thankyou'))->name('thankyou');

    Route::prefix('seller')->group(
        function(){
            Route::get('/dashboard', function () {
                return Inertia::render('User/Seller/DashboardSeller');
            })->name('dashboardseller');    
        
            Route::get('/product', fn()=>Inertia::render('User/Seller/Product'))->name('product');
        
            Route::get('/addproduct', [ProductController::class,'create'])->name('addproduct');
        
            Route::put('/addproduct', [ProductController::class,'store'])->name('csvupload');
            
            Route::get('/shipment', fn()=>Inertia::render('User/Seller/Shipment'))->name('shipment');
        
            Route::get('/orders', fn()=>Inertia::render('User/Seller/Order'))->name('orders');
        
            Route::get('/sale', fn()=>Inertia::render('User/Seller/Sale'))->name('sale');
        
            Route::get('/review', fn()=>Inertia::render('User/Seller/Review'))->name('review');
        
            Route::get('/inbox', fn()=>Inertia::render('User/Seller/Inbox'))->name('inbox');
        }

    );
    
    

    Route::prefix('account')->group(function(){
        Route::get('/delivery',  fn()=>Inertia::render('User/Customer/Account/AccountDelivery'))->name('delivery');
        
        Route::get('/manage',  fn()=>Inertia::render('User/Customer/Account/AccountManage'))->name('manage');
        
        Route::patch('/manage',  [AuthenticatedSessionController::class,'update'])->name('updateuser');
        
        Route::get('/passwordchange', fn()=>Inertia::render('User/Customer/Account/AccountPasswordChange'))->name('passwordchange');
    
        Route::get('/payment', fn()=>Inertia::render('User/Customer/Account/AccountPayment'))->name('payment');
    
        Route::get('/purchases', fn()=>Inertia::render('User/Customer/Account/AccountPurchases'))->name('purchases');
    
        Route::get('/wishlist', [ShopController::class,'viewMyWishlist'])->name('wishlist');
    
    });

}
);



Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardadmin');



Route::get('/superadmin/dashboard', function () {
    return Inertia::render('SuperAdmin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardsuperadmin');

require __DIR__.'/auth.php';
