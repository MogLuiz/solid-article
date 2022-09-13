import ProductItem from "./components/ProductItem";
import { useProducts } from "./hooks/useProducts";

import { TProduct } from "./types";

const AvailableProducts = () => {
  const { products } = useProducts();

  const hasAvailableProduct = (product: TProduct) => product.hasAvailable;

  return (
    <ul>
      {products
        .filter((product) => hasAvailableProduct(product))
        .map((filteredProduct) => (
          <ProductItem key={filteredProduct.id} {...filteredProduct} />
        ))}
    </ul>
  );
};

export default AvailableProducts;
