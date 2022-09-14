import ProductItem from "./components/ProductItem";

import { useAvailableProducts } from "./hooks/useAvailableProducts";

const AvailableProducts = () => {
  const { availableProducts } = useAvailableProducts();

  return (
    <ul>
      {availableProducts.map((filteredProduct) => (
        <ProductItem key={filteredProduct.id} {...filteredProduct} />
      ))}
    </ul>
  );
};

export default AvailableProducts;
