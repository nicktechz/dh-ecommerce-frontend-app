import { Action } from '@reduxjs/toolkit';
import { LOGGED_IN_USER, LOGGED_OUT_USER } from '../../types/types';

interface IInitState {
  isUserLoggedIn: boolean;
}

const initState: IInitState = {
  isUserLoggedIn: false,
};

export default function userCredentialsReducer(
  state = initState,
  action: Action
) {
  switch (action.type) {
    case LOGGED_IN_USER:
      return { ...state, isUserLoggedIn: true };
    case LOGGED_OUT_USER:
      return { ...state, isUserLoggedIn: false };
    default:
      return state;
  }
}
