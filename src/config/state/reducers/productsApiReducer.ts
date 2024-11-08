import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductApiCall, IProductCategory } from '../../types/types';
import { getAllProductsVariations } from '../helpers/getAllProductsVariations';

export const productsApiReducer = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => 'products',
      transformResponse: (response: IProductApiCall[]) => {
        const data = getAllProductsVariations(response);
        return data;
      },
    }),
    getBestSellingProducts: builder.query<IProduct[], void>({
      query: () => 'best-sellings',
    }),
    getProductsByCategory: builder.query<IProduct[], IProductCategory>({
      query: () => 'products',
      transformResponse: (
        response: IProductApiCall[],
        _meta,
        category: IProductCategory
      ) => {
        const filterProducts = response.filter(
          (product) => product.category === category
        );
        const data = getAllProductsVariations(filterProducts);
        return data;
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetBestSellingProductsQuery,
  useGetProductsByCategoryQuery,
} = productsApiReducer;
