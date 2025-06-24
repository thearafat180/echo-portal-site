import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        setError(error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return { products, loading, error };
} 


export function useProduct(productIds: number[]) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchProduct() {
      if(productIds.length === 0 && product) return;
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('id', productIds); // productIds should be an array of ids
      if (error) {
        setError(error);
      } else {
        setProduct(data);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [productIds]);

  return { product, loading, error };
} 