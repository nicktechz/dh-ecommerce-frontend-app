import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductApiCall } from '../../types/types';

export interface IProductCart extends IProductApiCall {
  cartQty: number;
}

interface IInitState {
  products: IProductCart[];
}

const initState: IInitState = {
  products: [],
};

export const cartSlicer = createSlice({
  name: 'cartSlice',
  initialState: initState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProductApiCall>) => {
      const id = action.payload['product-identifier'];
      const existingItem = state.products.find(
        (product) =>
          product['product-identifier'] === action.payload['product-identifier']
      );
      if (existingItem) {
        return {
          ...state,
          products: state.products.map((product) =>
            product['product-identifier'] === id
              ? { ...product, cartQty: product.cartQty + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, cartQty: 1 }],
      };
    },
    removeProductFromCart: (state, action: PayloadAction<IProductCart>) => {
      const id = action.payload['product-identifier'];
      if (action.payload.cartQty === 1) {
        return {
          ...state,
          products: state.products.filter(
            (item) => item['product-identifier'] !== id
          ),
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) =>
            product['product-identifier'] === id
              ? { ...product, cartQty: product.cartQty - 1 }
              : product
          ),
        };
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlicer.actions;
