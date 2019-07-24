<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$router->pattern('id', '[0-9]+');

Route::group(["namespace"=>"Api"], function (){

    Route::group(['namespace'=>'Auth'], function (){

        Route::post("register","AuthController@register");
        Route::post("login","AuthController@login")->name("login");

    });

    Route::group(["middleware"=>"auth:api"], function (){
		Route::get("users","UserController@all");
		Route::get("user","UserController@get");
		Route::post('subscriptions/update', "SubscriptionsController@update");
		Route::get('subscription', "SubscriptionsController@show");
			
    });

});

