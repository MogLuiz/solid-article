import { useState, useEffect } from "react";

type TProduct = {
  id: string;
  productImage: string
  name: string;
  price: string;
  hasAvailable: boolean;
};

const AvailableProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("/products/johndoe");
      const data = await response.json();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const hasAvailableProduct = (product: TProduct) => product.hasAvailable;

  return (
    <ul>
      {products
        .filter((product) => hasAvailableProduct(product))
        .map(({ id, name, price, productImage }) => (
          <li key={id}>
            <img src={productImage}  />
            <h3>{name}</h3>
            <span>{price}</span>
          </li>
        ))}
    </ul>
  );
};

export default AvailableProducts;
