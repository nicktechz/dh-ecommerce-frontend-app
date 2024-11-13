import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductApiCall } from '../../types/types';

export interface IProductCart extends IProductApiCall {
  cartQty: number;
}

interface IInitState {
  products: IProductCart[];
  total: number;
  deliveryPrice: number;
}

function loadInitState(): IInitState {
  const cart = localStorage.getItem('cart');
  if (cart === null) {
    const initState = { products: [], total: 0, deliveryPrice: 0 };
    localStorage.setItem('cart', JSON.stringify(initState));
    return initState;
  } else {
    const state: IInitState = JSON.parse(cart) as IInitState;
    return state;
  }
}

const cartInfo = loadInitState();

const initState: IInitState = {
  products: cartInfo.products,
  total: cartInfo.total,
  deliveryPrice: cartInfo.deliveryPrice,
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
        state.products.map((product) => {
          if (product['product-identifier'] === id) {
            product.cartQty += 1;
          } else {
            return product;
          }
        });
      } else {
        state.products = [...state.products, { ...action.payload, cartQty: 1 }];
      }
      if (state.products.length > 0) {
        state.total =
          state.products
            .map(
              (product) =>
                Number(product.price.replace(/\./g, '')) * product.cartQty
            )
            .reduce((accumulator, current) => accumulator + current) +
          state.deliveryPrice;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeProductFromCart: (state, action: PayloadAction<IProductCart>) => {
      const id = action.payload['product-identifier'];
      if (action.payload.cartQty === 1) {
        state.products = state.products.filter(
          (item) => item['product-identifier'] !== id
        );
        state.total = 0;
      } else {
        state.products.map((product) => {
          if (product['product-identifier'] === id) {
            product.cartQty -= 1;
          } else {
            return product;
          }
        });
      }
      if (state.products.length > 0) {
        state.total =
          state.products
            .map(
              (product) =>
                Number(product.price.replace(/\./g, '')) * product.cartQty
            )
            .reduce((accumulator, current) => accumulator + current) +
          state.deliveryPrice;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlicer.actions;
