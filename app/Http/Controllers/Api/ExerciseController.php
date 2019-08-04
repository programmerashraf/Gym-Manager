<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use App\Http\Resources\ArticleResource;
use App\Exercise;
	  
class ExerciseController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $exercises = Exercise::find($id)->all();
        return $this->ApiResponse(200, 'success',  $exercises);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       Exercise::create([
            'day' =>  $request->day,
            'exercise' => $request->lists,
            'user_id' => $request->id,
       ]); 

       return back();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
    
        Exercise::find($id)->update([
          	'day' =>  $request->day,
            'exercise' => $request->lists,
            'user_id' => $request->id,
       ]); 

       return back(); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Exercise::find($id)->delete();
        return back();
    }
}
 