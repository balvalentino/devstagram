<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImagenController extends Controller
{
    public function store(Request $request){

        $folder = "imagenes";

        $imagen = $request->file('file');

        $imagenServidor = Image::make($imagen);
        $imagenServidor->fit(1000, 1000);

        $imagenPath = Storage::disk('s3')->put($folder, $request->file('file'), 'public');

        return response()->json(['imagen' => $imagenPath]);
    }
}
