import { Action } from '@reduxjs/toolkit';
import {
  CLOSE_ACCOUNT,
  CLOSE_ALL_MODALS,
  CLOSE_CART,
  CLOSE_MOBILE_MENU,
  OPEN_ACCOUNT,
  OPEN_CART,
  OPEN_MOBILE_MENU,
} from '../../types/types';

interface IInitState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  isAccountOpen: boolean;
}

const initState: IInitState = {
  isMenuOpen: false,
  isCartOpen: false,
  isAccountOpen: false,
};

export default function navBarReducer(state = initState, action: Action) {
  switch (action.type) {
    case OPEN_MOBILE_MENU:
      return {
        ...state,
        isMenuOpen: true,
        isCartOpen: false,
        isAccountOpen: false,
      };
    case CLOSE_MOBILE_MENU:
      return { ...state, isMenuOpen: false };
    case OPEN_CART:
      return {
        ...state,
        isCartOpen: true,
        isAccountOpen: false,
      };
    case CLOSE_CART:
      return { ...state, isCartOpen: false };
    case OPEN_ACCOUNT:
      return { ...state, isAccountOpen: true, isCartOpen: false };
    case CLOSE_ACCOUNT:
      return { ...state, isAccountOpen: false };
    case CLOSE_ALL_MODALS:
      return {
        ...state,
        isAccountOpen: false,
        isCartOpen: false,
        isMenuOpen: false,
      };
    default:
      return state;
  }
}
