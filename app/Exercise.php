<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
     protected $fillable = [
        'day', 'exercise', 'user_id'
    ];
}
