<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Customer\ShopController;
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
    

    Route::prefix('account')->group(function(){
        Route::get('/delivery',  fn()=>Inertia::render('User/Customer/Account/AccountDelivery'))->name('delivery');
        
        Route::get('/manage',  fn()=>Inertia::render('User/Customer/Account/AccountManage'))->name('manage');
        
        Route::get('/passwordchange', fn()=>Inertia::render('User/Customer/Account/AccountPasswordChange'))->name('passwordchange');
    
        Route::get('/payment', fn()=>Inertia::render('User/Customer/Account/AccountPayment'))->name('payment');
    
        Route::get('/purchases', fn()=>Inertia::render('User/Customer/Account/AccountPurchases'))->name('purchases');
    
        Route::get('/wishlist', fn()=>Inertia::render('User/Customer/Account/AccountWishList'))->name('wishlist');
    
    });
}
);

Route::group([
    'prefix'=>'seller',
    'middleware'=>['auth','isUser','verified']
],
function(){
    Route::get('/dashboard', function () {
        return Inertia::render('User/Seller/DashboardSeller');
    })->name('dashboardseller');    

    Route::get('/product', fn()=>Inertia::render('User/Seller/Product'))->name('product');

    Route::get('/addproduct', fn()=>Inertia::render('User/Seller/AddProducts'))->name('addproduct');
    
    Route::get('/shipment', fn()=>Inertia::render('User/Seller/Shipment'))->name('shipment');

    Route::get('/orders', fn()=>Inertia::render('User/Seller/Order'))->name('orders');

    Route::get('/sale', fn()=>Inertia::render('User/Seller/Sale'))->name('sale');

    Route::get('/review', fn()=>Inertia::render('User/Seller/Review'))->name('review');

    Route::get('/inbox', fn()=>Inertia::render('User/Seller/Inbox'))->name('inbox');
}
);

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardadmin');



Route::get('/superadmin/dashboard', function () {
    return Inertia::render('SuperAdmin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardsuperadmin');

require __DIR__.'/auth.php';
