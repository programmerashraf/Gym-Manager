<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\ApiRegisterRequest;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ApiResponse;
use App\Http\Requests\ApiLoginRequest;
use App\Http\Resources\UserResource;


class AuthController extends Controller
{
    use ApiResponse;

    public function register(ApiRegisterRequest $request){
        $user = User::create($request->only("name","email","password"));
        return $this->ApiResponse(200, "تم الستجيل بنجاح", new UserResource($user));
    }

    public function login(ApiLoginRequest $request){
        if (!auth()->attempt($request->only('email','password'))){
            return $this->ApiResponse("404", "يرجي التحقق من بيانات الدخول", null);
        }
        return $this->ApiResponse("200", "تم تسجيل الدخول بنجاح", new UserResource(auth()->user()));
    }
}
