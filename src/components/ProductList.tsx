import React, { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useCart } from "./CartContext"
import { Link } from "react-router-dom"
import { supabase } from '../supabaseClient'

function ProductCard({ product, addToCart }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images && Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image_url];
  // Limit description to 80 chars
  const desc = (product.short_desc || product.description || '').slice(0, 80) + ((product.short_desc || product.description || '').length > 80 ? '...' : '');

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden max-w-xs mx-auto flex flex-col cursor-pointer transition-transform duration-200 hover:scale-105">
      <Link to={`/product/${product.id}`} className="block group no-underline flex-1 h-full">
        <div className="relative group">
          {/* Popular badge */}
          {product.popular && (
            <span className="absolute top-3 left-3 bg-taara-golden text-taara-charcoal text-xs font-medium px-3 py-1 rounded-full z-10">
              Popular
            </span>
          )}
          {/* Main image */}
          <img
            src={images[activeImage]}
            alt={product.name}
            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-95"
          />
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 backdrop-blur-sm flex gap-2 justify-center">
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
        <div className="p-5 flex flex-col flex-1">
          <div className="text-taara-brown font-medium mb-1">{product.category}</div>
          <div className="font-display font-bold text-2xl mb-1">{product.name}</div>
          <div className="text-taara-dark-brown/80 mb-4">{desc}</div>
          <div className="flex items-center justify-between mt-auto">
            <div className="text-xl font-bold text-taara-brown">৳{product.price}</div>
            <Button
              className="bg-taara-brown hover:bg-taara-dark-brown text-white px-6 py-2"
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
      <div className="flex items-center justify-center min-h-[200px]">
        <span>Loading products...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <p className="text-red-500">Error loading products</p>
          <p className="text-sm text-gray-500">{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 px-2 md:px-4 lg:px-8 xl:px-16">
      <div className="flex gap-4 justify-center my-8 flex-wrap">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:-mx-6 xl:-mx-12">
          {filteredProducts.map((product) => {
            return (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No products available.</p>
        </div>
      )}
    </div>
  )
}