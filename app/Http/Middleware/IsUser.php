<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class IsUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if($user->roleid!=User::ISUSER){
            throw abort(404,'USER NOT ALLOWED');
        }
        
        if(str_contains($request->getRequestUri(),"seller")&&$user->usertypeid==User::ISCUSTOMER){
            throw abort(404,'USER NOT ALLOWED');
        }
        return $next($request);
    }
}
