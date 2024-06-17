<?php

namespace App\Http\Controllers;

use App\Models\Usaw;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UsawController extends Controller
{
    /**
     * @return Response
     */
    public function viewIndex() {
        return Inertia::render('USAW/Usaw');
    }

    /**
     * @return JsonResponse
     */
    public function index()
    {
        $usaw_data = Usaw::all();
        return response()->json($usaw_data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $usaw = new Usaw();
        $usaw->name = $request->usaw['name'];
        $usaw->color = $request->usaw['color'];
        $usaw->consent_statement = (bool)$request->usaw['consent_statement'];
        $usaw->save();

        return response()->json([
            'message' => 'Form Submitted!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * @param Usaw $usaw
     * @return JsonResponse
     */
    public function destroy(Usaw $usaw)
    {
        $usaw->delete();

        return response()->json([
            'message' => 'Data Deleted!'
        ]);
    }
}
