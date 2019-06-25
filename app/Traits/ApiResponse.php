<?php

namespace App\Traits;
trait ApiResponse{
    public function ApiResponse($code,$message,$data = null){
        return response()->json([
            "code"    => $code,
            "message" => $message,
            "data"    => $data
        ]);
    }
}
