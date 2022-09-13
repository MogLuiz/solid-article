import { TProduct } from "../types";

const ProductItem = ({ name, price, productImage }: TProduct) => (
  <li>
    <img src={productImage} />
    <h3>{name}</h3>
    <span>{price}</span>
  </li>
);

export default ProductItem;
