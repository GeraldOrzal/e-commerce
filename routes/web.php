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


Route::get('/shop', [ShopController::class,'create'])->name('shop');

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
