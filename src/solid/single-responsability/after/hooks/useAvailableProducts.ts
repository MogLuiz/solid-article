import { useMemo } from "react";

import { getOnlyAvailableProduct } from "../utils/getOnlyAvailableProduct";

import { useProducts } from "./useProducts";

export const useAvailableProducts = () => {
  const { products } = useProducts();

  const availableProducts = useMemo(() => {
    return getOnlyAvailableProduct(products);
  }, [products]);

  return { availableProducts };
};
