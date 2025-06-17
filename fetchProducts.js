import { SupabaseService } from './src/lib/supabaseService';

export async function fetchProducts() {
  try {
    return await SupabaseService.fetchProducts();
  } catch (error) {
    console.error('Supabase fetch error:', error);
    return [];
  }
}