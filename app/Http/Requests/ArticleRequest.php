<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

use Illuminate\Http\Exceptions\HttpResponseException;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'article.title' => "required",
            //'article.img' => 'image',
            'article.info' => 'required',
            'article.body' => 'required'
        ];
    }

       public function messages(){
        return [
            "article.title.required" => "عنوان المقال مطلوب"  ,
          //  "article.img.image" => "مخصص للصور فقط",
            "article.info.required"  => "هذا الحقل مطلوب",
            "article.body.required"  => "هذا الحقل مطلوب"
        ];
    }


    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response($validator->errors()->first()));
    }
}
