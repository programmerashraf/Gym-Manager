<?php

namespace App\Traits;
trait ApiResponse{
    public function ApiResponse($code,$message,$data){
        return response()->json([
            "code"    => $code,
            "message" => $message,
            "data"    => $data
        ]);
    }
}
