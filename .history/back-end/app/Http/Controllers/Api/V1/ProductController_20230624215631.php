<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\ProductResource;
use App\Models\Product;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return ProductResource::collection(Product::all());
    }
    public function store(Request $request){
        $request->validate([
            'product_name' => 'required|string',
            'price' => 'required|numeric',
            'img' => 'required|numeric',
            'category' => 'required|string', 
        ]);
        $product = new Product();
        $product->product_name = $request->input('product_name');
        $product->price = $request->input('price');
        $product->img = $request->input('img');
        $product->category = $request->input('category');
        $product->save();
        return response()->json('product added !');
    }
    public function destroy($id){
        $product = Product::findOrFail($id);
        $product->delete(); 
/*         return redirect()->back();
 */    }
}
