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
    'middleware'=>'auth'
],
function(){
    
    Route::get('/shop', [ShopController::class,'create'])->name('shop');
    
    Route::post('/cart',[ShopController::class,'destroy'])->name('removecart');

    Route::get('/cart', fn()=>Inertia::render('User/Customer/Cart'))->name('cart');

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



Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardadmin');

Route::get('/seller/dashboard', function () {
    return Inertia::render('User/Seller/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardseller');

Route::get('/superadmin/dashboard', function () {
    return Inertia::render('SuperAdmin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboardsuperadmin');

require __DIR__.'/auth.php';
