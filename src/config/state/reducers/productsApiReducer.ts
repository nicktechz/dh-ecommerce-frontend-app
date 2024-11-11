import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IProductApiCall, IProductCategory } from '../../types/types';

export const productsApiReducer = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProductApiCall[], void>({
      query: () => 'products',
    }),
    getBestSellingProducts: builder.query<IProductApiCall[], void>({
      query: () => 'best-sellings',
    }),
    getProductsByCategory: builder.query<IProductApiCall[], IProductCategory>({
      query: () => 'products',
      transformResponse: (
        response: IProductApiCall[],
        _meta,
        category: IProductCategory
      ) => {
        const data = response.filter(
          (product) => product.category === category
        );
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
