import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from '../reducers/navBarReducer';
import userCredentialsReducer from '../reducers/userCredentialsReducer';

const store = configureStore({
  reducer: {
    navigationReducer: navBarReducer,
    userCredentials: userCredentialsReducer,
  },
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
