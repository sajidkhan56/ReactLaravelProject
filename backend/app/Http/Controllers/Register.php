<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\save;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Register extends Controller
{
    public function signUp(Request $request)
    {   
        $data = new save;
        $data->name = $request->input('name');
        $data->email = $request->input('email');
        $data->password = Hash::make($request->input('password'));
        $data->save();
        return $data;
    }

    public function login(Request $request)
    {   $data = DB::table('registers')->where('email', $request->input('email'))->first();
    
        if(!$data || !Hash::check($request->input('password'), $data->password)) {
             return  ["error" => "Email or Password is incorrect"];
         } 

        return $data;   
    }

    public function aboutUs(Request $request)
    {   
        $data = ["description" => $request->input('description')];
        DB::table('aboutus')->delete();
        DB::table('aboutus')->insert($data);
        return ["success" => "Data submited successfully"];
    }

    public function investor(Request $request)
    {  
        //  $data = [""]
        return $request;
    }
}
