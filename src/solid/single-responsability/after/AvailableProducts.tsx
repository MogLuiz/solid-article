import { useProducts } from './hooks/useProducts'

import { TProduct } from './types'

const AvailableProducts = () => {
  const { products } = useProducts()

  const hasAvailableProduct = (product: TProduct) => product.hasAvailable;

  return (
    <ul>
      {products
        .filter((product) => hasAvailableProduct(product))
        .map(({ id, name, price, productImage }) => (
          <li key={id}>
            <img src={productImage} />
            <h3>{name}</h3>
            <span>{price}</span>
          </li>
        ))}
    </ul>
  );
};

export default AvailableProducts;
