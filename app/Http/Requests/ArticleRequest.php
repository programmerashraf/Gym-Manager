<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => "required",
            'img' => 'image',
            'info' => 'required',
            'body' => 'required'
        ];
    }

       public function messages(){
        return [
            "title.required" => "عنوان المقال مطلوب"  ,
            "img.image" => "مخصص للصور فقط",
            "info.required"  => "هذا الحقل مطلوب",
            "body.required"  => "هذا الحقل مطلوب"
        ];
    }


    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response($validator->errors()->first()));
    }
}
