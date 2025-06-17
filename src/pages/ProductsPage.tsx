import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductList } from '../components/ProductList'
import { AddProductForm } from '../components/AddProductForm'
import { Button } from '../components/ui/button'
import { Plus, X } from 'lucide-react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

export function ProductsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="container mx-auto px-4 py-8 pb-16">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-display font-bold text-taara-dark-brown mb-4">Products</h1>
          <p className="text-taara-wood text-xl">
            Manage your handcrafted products inventory
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <form className="relative w-full max-w-md" onSubmit={e => { e.preventDefault(); }} autoComplete="off">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-6 py-3 rounded-full border-none bg-white text-gray-700 text-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-400 pr-14 transition-all duration-200"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search products"
              style={{ height: '44px' }}
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-taara-brown hover:bg-taara-dark-brown text-white rounded-r-full w-12 h-10 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-taara-brown"
              aria-label="Search"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
          </form>
        </div>

        <ProductList search={search} />
        </div>
      <Footer />
    </QueryClientProvider>
  )
}
