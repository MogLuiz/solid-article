import { getOnlyAvailableProduct } from "./utils/getOnlyAvailableProduct";

import ProductItem from "./components/ProductItem";

import { useProducts } from "./hooks/useProducts";


const AvailableProducts = () => {
  const { products } = useProducts();

  return (
    <ul>
      {getOnlyAvailableProduct(products).map((filteredProduct) => (
        <ProductItem key={filteredProduct.id} {...filteredProduct} />
      ))}
    </ul>
  );
};

export default AvailableProducts;
