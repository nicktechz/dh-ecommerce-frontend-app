import { IProduct, IProductApiCall } from '../../types/types';

export function getAllProductsVariations(data: IProductApiCall[]) {
  const response: IProduct[] = data.flatMap((product) => product.variations);
  return response;
}
