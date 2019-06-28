<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Subscription;
use App\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Resources\SubscriptionResource;


class SubscriptionsController extends Controller
{
    use ApiResponse;
    
    public function show(Request $request)
    {
        $subscription = Subscription::where('user_id', $request->id)->first();
        if ($subscription) {
            return $this->ApiResponse(200,"success",new SubscriptionResource($subscription));
        }
        return $this->ApiResponse(404,"not found");
    }   

    
    public function update(Request $request)
    {
        $sub = Subscription::where("user_id", $request->id)->first();
        if ($sub) {
            $sub->start = Now();
            $sub->end   = Now()->addMonth();
            $sub->save();
            $result = Subscription::where("user_id", $request->id)->first();
            return $this->ApiResponse(200,"updated",new SubscriptionResource($result));
        }
        return $this->ApiResponse(404,"not found");
    }
}
