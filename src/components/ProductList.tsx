import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Button } from './ui/button'
import { useCart } from "./CartContext"

import { Link } from "react-router-dom"
// import { supabase } from '../supabaseClient'

function ProductCard({ product, addToCart }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images && Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image_url];
  // Limit description to 80 chars
  const desc = (product.short_desc || product.description || '').slice(0, 80) + ((product.short_desc || product.description || '').length > 80 ? '...' : '');

  return (
    <div className="flex flex-col bg-white shadow-md mx-auto rounded-3xl max-w-xs overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
      <Link to={`/product/${product.id}`} className="group block flex-1 h-full no-underline">
        <div className="group relative">
          {/* Popular badge */}
          {product.popular && (
            <span className="top-3 left-3 z-10 absolute bg-taara-golden px-3 py-1 rounded-full font-medium text-taara-charcoal text-xs">
              Popular
            </span>
          )}
          {/* Main image */}
          <img
            src={images[activeImage]}
            alt={product.name}
            className="w-full object-cover aspect-square group-hover:scale-95 transition-transform duration-300"
          />
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="right-0 bottom-0 left-0 absolute flex justify-center gap-2 bg-black/40 backdrop-blur-sm p-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={e => { e.stopPropagation(); setActiveImage(idx); }}
                  className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === idx
                      ? 'border-taara-yellow scale-110'
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Info section */}
        <div className="flex flex-col flex-1 p-5">
          <div className="mb-1 font-medium text-taara-brown">{product.category}</div>
          <div className="mb-1 font-display font-bold text-2xl">{product.name}</div>
          <div className="mb-4 text-taara-dark-brown/80">{desc}</div>
          <div className="flex justify-between items-center mt-auto">
            <div className="font-bold text-taara-brown text-xl">৳{product.price}</div>
            <Button
              className="bg-taara-brown hover:bg-taara-dark-brown px-6 py-2 text-white"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image_url
                });
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

const categories = [
  "All Products",
  "Jewellery Items",
  "Furniture Items",
  "Wall Clocks",
  "Craftings",
  "Others"
];

export function ProductList({ search = "" }) {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Filter by category and search
  const filteredProducts = (selectedCategory === "All Products"
    ? products
    : products.filter(p => p.category === selectedCategory)
  ).filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase()) ||
    p.description?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span>Loading products...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-center">
          <p className="text-red-500">Error loading products</p>
          <p className="text-gray-500 text-sm">{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-2 md:px-4 lg:px-8 xl:px-16">
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-8 py-4 rounded-full font-semibold shadow transition-all duration-300 transform hover:scale-105 hover:bg-taara-dark-brown hover:text-white ${selectedCategory === cat ? "bg-taara-brown text-white" : "bg-white text-taara-brown"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Products Grid */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mx-6 xl:-mx-12">
          {filteredProducts.map((product) => {
            return (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            )
          })}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-gray-500">No products available.</p>
        </div>
      )}
    </div>
  )
}