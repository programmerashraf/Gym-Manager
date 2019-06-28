<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiRegisterRequest;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ApiResponse;
use App\Http\Requests\ApiLoginRequest;
use App\Http\Resources\UserResource;


class UserController extends Controller
{
    use ApiResponse;

    public function all(){
        return $this->ApiResponse(200,"success", UserResource::collection(User::all()));
    }

    public function get(Request $request){
        $user = User::find($request->id);
        if ($user) {
            return $this->ApiResponse(200,"success",new UserResource($user));
        }
        return $this->ApiResponse(404,"not found");
    }

}
