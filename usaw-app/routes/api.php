<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsawController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/usaw')->name('usaw.')->group(function() {

    Route::post('/', [UsawController::class, 'store']);

});
