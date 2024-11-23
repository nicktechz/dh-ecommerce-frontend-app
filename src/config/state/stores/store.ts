import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../reducers/navBarReducer';
import userCredentialsReducer from '../reducers/userCredentialsReducer';
import { productsApiReducer } from '../reducers/productsApiReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlicer } from '../reducers/cartReducer';
import { checkoutFormReducer } from '../reducers/checkoutFormReducer';
import { checkoutReducer } from '../reducers/checkoutReducer';

const store = configureStore({
  reducer: {
    navigationReducer: navBarReducer,
    cartReducer: cartSlicer.reducer,
    userCredentials: userCredentialsReducer,
    checkoutFormReducer: checkoutFormReducer.reducer,
    checkoutReducer: checkoutReducer.reducer,
    [productsApiReducer.reducerPath]: productsApiReducer.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(productsApiReducer.middleware),
});

setupListeners(store.dispatch);

export default store;
export type IRootState = ReturnType<typeof store.getState>;
