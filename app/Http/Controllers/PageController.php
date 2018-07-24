<?php

namespace App\Http\Controllers;

use App\Page;

class PageController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index()
  {

    $items = Page::all();

    return response()->json($items);
  }
}
