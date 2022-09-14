import { TProduct } from "../types";

export const getOnlyAvailableProduct = (products: TProduct[]) =>
  products.filter((product) => product.hasAvailable);

