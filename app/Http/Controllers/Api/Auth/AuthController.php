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
        $token = $user->createToken('token')->accessToken;
        return $this->ApiResponse(200, "تم الستجيل بنجاح", [
            "user" => new UserResource($user),
            "token" => $token
        ]);
    }

    public function login(ApiLoginRequest $request){
        if (!auth()->attempt($request->only('email','password'))){
            return $this->ApiResponse(404, "يرجي التحقق من بيانات الدخول");
        }
        $token = auth()->user()->createToken('token')->accessToken;
        return $this->ApiResponse(200, "تم تسجيل الدخول بنجاح", [
            "user" => new UserResource(auth()->user()),
            "token" => $token
        ]);
    }

    public function logout(){
        if (auth()->check()){
            auth()->logout();
            return $this->ApiResponse(200, "تم تسجيل الخروج بنجاح");
        }
        return $this->ApiResponse(404, "خطأ");
    }

    public function all(){
        return response(User::all());
    }

}
