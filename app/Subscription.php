<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Subscription extends Model
{
    protected $fillable = ['start','end','type','user_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
