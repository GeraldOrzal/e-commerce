<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();
        $user = Auth::user();
        switch ($user->roleid) {
            case User::ISSUPERADMIN:
                
                break;
            case User::ISADMIN:
                break;
            default:
                if($user->usertypeid==User::ISSELLER){
                    return redirect()->intended(RouteServiceProvider::HOMESELLER); 
                }else{
                    return redirect()->intended(RouteServiceProvider::HOMECUSTOMER); 
                }
                
        }
        
    }

    public function update(Request $request){

        // $user = User::find(Auth::user()->userid);

        // $all = $request->all();

        // foreach ($all as $key => $value) {
        //     $user->$key = $value;
        // }
        
        // $user->save();
        
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect("/login");
    }
}
