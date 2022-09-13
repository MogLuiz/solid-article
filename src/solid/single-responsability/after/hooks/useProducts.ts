import { useState, useEffect } from "react";

import { TProduct } from '../types'

export const useProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("/products/johndoe");
      const data = await response.json();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return { products }
};
