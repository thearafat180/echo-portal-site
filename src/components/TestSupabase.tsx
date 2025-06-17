import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function TestSupabase() {
  const [status, setStatus] = useState<string>('Loading...')
  const [error, setError] = useState<string | null>(null)
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    testSupabaseConnection()
  }, [])

  const testSupabaseConnection = async () => {
    try {
      setStatus('Testing Supabase connection...')
      
      // Check if environment variables are set
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
      
      if (!supabaseUrl || !supabaseKey) {
        setError('Missing environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY')
        setStatus('Error')
        return
      }

      setStatus('Environment variables found, testing connection...')

      // Test basic connection
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(1)

      if (error) {
        setError(`Supabase error: ${error.message}`)
        setStatus('Error')
        return
      }

      setProducts(data || [])
      setStatus(`Success! Found ${data?.length || 0} products`)
      
    } catch (err) {
      setError(`Unexpected error: ${err}`)
      setStatus('Error')
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Supabase Test</h2>
      
      <div className="mb-4">
        <strong>Status:</strong> {status}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {products.length > 0 && (
        <div className="mb-4">
          <strong>Products found:</strong>
          <ul className="list-disc list-inside">
            {products.map((product, index) => (
              <li key={index}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-sm text-gray-600">
        <p><strong>Environment Variables:</strong></p>
        <p>VITE_SUPABASE_URL: {import.meta.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
        <p>VITE_SUPABASE_ANON_KEY: {import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
      </div>
    </div>
  )
} 