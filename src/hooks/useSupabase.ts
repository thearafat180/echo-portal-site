import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { SupabaseService } from '../lib/supabaseService'
import type { Database } from '../lib/supabase'

type Product = Database['public']['Tables']['products']['Row']
type ProductInsert = Database['public']['Tables']['products']['Insert']
type ProductUpdate = Database['public']['Tables']['products']['Update']

// Query keys for React Query
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: string) => [...productKeys.lists(), { filters }] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
}

// Hook to fetch all products
export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: () => SupabaseService.fetchProducts(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  })
}

// Hook to fetch a single product
export function useProduct(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => SupabaseService.fetchProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

// Hook to search products
export function useProductSearch(query: string) {
  return useQuery({
    queryKey: productKeys.list(query),
    queryFn: () => SupabaseService.searchProducts(query),
    enabled: query.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000,
  })
}

// Hook to create a product
export function useCreateProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (product: ProductInsert) => SupabaseService.createProduct(product),
    onSuccess: () => {
      // Invalidate and refetch products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })
    },
    onError: (error) => {
      console.error('Failed to create product:', error)
    },
  })
}

// Hook to update a product
export function useUpdateProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: ProductUpdate }) =>
      SupabaseService.updateProduct(id, updates),
    onSuccess: (updatedProduct) => {
      // Update the specific product in cache
      queryClient.setQueryData(productKeys.detail(updatedProduct.id), updatedProduct)
      // Invalidate products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })
    },
    onError: (error) => {
      console.error('Failed to update product:', error)
    },
  })
}

// Hook to delete a product
export function useDeleteProduct() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => SupabaseService.deleteProduct(id),
    onSuccess: (_, deletedId) => {
      // Remove the product from cache
      queryClient.removeQueries({ queryKey: productKeys.detail(deletedId) })
      // Invalidate products list
      queryClient.invalidateQueries({ queryKey: productKeys.lists() })
    },
    onError: (error) => {
      console.error('Failed to delete product:', error)
    },
  })
}

// Hook to upload an image
export function useUploadImage() {
  return useMutation({
    mutationFn: ({ file, path }: { file: File; path: string }) =>
      SupabaseService.uploadImage(file, path),
    onError: (error) => {
      console.error('Failed to upload image:', error)
    },
  })
} 