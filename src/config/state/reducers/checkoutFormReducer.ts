import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitState {
  isModalOpen: boolean;
  stepOfCheckout: number;
  isSubmitAllow: boolean;
}

const initState: IInitState = {
  isModalOpen: false,
  stepOfCheckout: 1,
  isSubmitAllow: false,
};

export const checkoutFormReducer = createSlice({
  name: 'checkoutFormReducer',
  initialState: initState,
  reducers: {
    openCheckoutModal: (state) => {
      state.isModalOpen = true;
    },
    closeCheckoutModal: (state) => {
      state.isModalOpen = false;
    },
    nextStep: (state, action: PayloadAction<number>) => {
      if (state.stepOfCheckout === 4) {
        state.stepOfCheckout = action.payload;
      } else {
        state.stepOfCheckout += 1;
      }
    },
    backStep: (state) => {
      if (state.stepOfCheckout === 1) {
        state.stepOfCheckout = 1;
      } else {
        state.stepOfCheckout -= 1;
      }
    },
    resetCheckoutModal: (state) => {
      state.isModalOpen = false;
      state.stepOfCheckout = 1;
    },
  },
});

export const {
  openCheckoutModal,
  closeCheckoutModal,
  nextStep,
  backStep,
  resetCheckoutModal,
} = checkoutFormReducer.actions;
