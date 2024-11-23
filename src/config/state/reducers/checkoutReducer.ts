import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type IBasicInformationKeys = keyof IInitState['basicInformation'];
export type IDeliveryInformationKeys = keyof IInitState['deliveryInformation'];
export type IPaymentMethodKeys = keyof IInitState['paymentMethod'];
interface IInitState {
  basicInformation: {
    firstName: string;
    lastName: string;
    email: string;
    mobilePhone: string;
  };
  deliveryInformation: {
    mainAddress: string;
    complementAddress: string;
    department: string;
    city: string;
    suburb: string;
    postalCode: string;
    deliveryDate: string;
  };
  paymentMethod: {
    cardHolderName: string;
    number: string;
    expirationYear: string;
    expirationMonth: string;
    securityCode: string;
  };
}
interface IActionBasicInformation {
  key: IBasicInformationKeys;
  value: string;
}
interface IActionDeliveryInformation {
  key: IDeliveryInformationKeys;
  value: string;
}
interface IActionPaymentInformation {
  key: IPaymentMethodKeys;
  value: string;
}

const initState: IInitState = {
  basicInformation: {
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
  },
  deliveryInformation: {
    mainAddress: '',
    complementAddress: '',
    department: '',
    city: '',
    suburb: '',
    postalCode: '',
    deliveryDate: '',
  },

  paymentMethod: {
    cardHolderName: '',
    number: '',
    expirationYear: '',
    expirationMonth: '',
    securityCode: '',
  },
};

export const checkoutReducer = createSlice({
  name: 'checkoutReducer',
  initialState: initState,
  reducers: {
    updateCheckoutBasicInfo: (
      state,
      action: PayloadAction<IActionBasicInformation>
    ) => {
      const { key, value } = action.payload;
      if (key in state.basicInformation) {
        state.basicInformation[key] = value;
      }
    },
    updateDeliveryInformation: (
      state,
      action: PayloadAction<IActionDeliveryInformation>
    ) => {
      const { key, value } = action.payload;
      if (key in state.deliveryInformation) {
        state.deliveryInformation[key] = value;
      }
    },
    updatePaymentInformation: (
      state,
      action: PayloadAction<IActionPaymentInformation>
    ) => {
      const { key, value } = action.payload;
      if (key in state.paymentMethod) {
        state.paymentMethod[key] = value;
      }
    },
    resetCheckoutInformation: (state) => {
      state.basicInformation = initState.basicInformation;
      state.deliveryInformation = initState.deliveryInformation;
      state.paymentMethod = initState.paymentMethod;
    },
  },
});

export const {
  updateCheckoutBasicInfo,
  updateDeliveryInformation,
  updatePaymentInformation,
  resetCheckoutInformation,
} = checkoutReducer.actions;
