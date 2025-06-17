import { supabase } from './supabase'
import type { Database } from './supabase'

type Product = Database['public']['Tables']['products']['Row']
type ProductInsert = Database['public']['Tables']['products']['Insert']
type ProductUpdate = Database['public']['Tables']['products']['Update']

export class SupabaseService {
  // Fetch all products
  static async fetchProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching products:', error)
      throw new Error(`Failed to fetch products: ${error.message}`)
    }

    return data || []
  }

  // Fetch a single product by ID
  static async fetchProductById(id: number): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching product:', error)
      throw new Error(`Failed to fetch product: ${error.message}`)
    }

    return data
  }

  // Create a new product
  static async createProduct(product: ProductInsert): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    if (error) {
      console.error('Error creating product:', error)
      throw new Error(`Failed to create product: ${error.message}`)
    }

    return data
  }

  // Update an existing product
  static async updateProduct(id: number, updates: ProductUpdate): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating product:', error)
      throw new Error(`Failed to update product: ${error.message}`)
    }

    return data
  }

  // Delete a product
  static async deleteProduct(id: number): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting product:', error)
      throw new Error(`Failed to delete product: ${error.message}`)
    }
  }

  // Search products by name
  static async searchProducts(query: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .ilike('name', `%${query}%`)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error searching products:', error)
      throw new Error(`Failed to search products: ${error.message}`)
    }

    return data || []
  }

  // Upload image to Supabase Storage
  static async uploadImage(file: File, path: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(path, file)

    if (error) {
      console.error('Error uploading image:', error)
      throw new Error(`Failed to upload image: ${error.message}`)
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(data.path)

    return urlData.publicUrl
  }
} 