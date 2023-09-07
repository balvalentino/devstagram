<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    public function store(User $user)
    {
//        Follower::create([
//            'user_id' => $user->id,
//            'follower_id' => $request->user()->id,
//        ]);

        //Otra forma de hacerlo
        //se usa attach cuando relaciono dos de la misma tabla (en este caso usuarios con usuarios)
        $user->followers()->attach(auth()->user()->id);

        return back();
    }

    public function destroy(User $user)
    {

        $user->followers()->detach(auth()->user()->id);

        return back();
    }
}
