<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Request\ArticleRequest;
use App\Traits\ApiResponse;
use App\Article;
use Illuminate\Support\Str;
class ArticleController extends Controller
{
     use ApiResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::all();
        return $this->ApiResponse(200, 'success', $articles);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {
    if($request->hasFile('img'))
        {
          $img = $request->file('img');
          $imgName = Str::random(50).'.'. $img->extension();
          $url = $img->move(public_path('uploads/articles'), $imgName); 
           $image = 'uploads/articles/'.$imgName ;
<<<<<<< HEAD
        }
        
=======
        }else{ $image = null;}
>>>>>>> 009b342d04fa4e223b6796b7c1e5355ea06d906f
       Article::create([
            'title' =>  $request->title,
            'shortDescription' => $request->info,
            'longDescription' => $request->body,
            'author' => auth()->user()->id,
            'image'=>$image,
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
        if($request->hasFile('img'))
        {
            $img = $request->file('img');
            $imgName = Str::random(50).'.'. $img->extension();
            $url = $img->move(public_path('uploads/articles'), $imgName); 
            $image = 'uploads/articles/'.$imgName ;
<<<<<<< HEAD
        }
=======
        }else{ $image = null;}
>>>>>>> 009b342d04fa4e223b6796b7c1e5355ea06d906f
        Article::find($id)->update([
           'title' =>  $request->title,
            'shortDescription' => $request->info,
            'longDescription' => $request->body,
            'author' => auth()->user()->id,
            'image'=> $image,
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
        Article::find($id)->delete();
        return back();
    }
}
