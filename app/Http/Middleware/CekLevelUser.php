<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth as Auth;
class CekLevelUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$level)
    {
        $user = Auth::user();
        if($user && in_array($user->level, $level)){
            return $next($request);
        }
        else  return redirect()->route('home');
    }
}
