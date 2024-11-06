// ---- REDUX -> NAVBAR REDUCER ACTIONS ----
export const OPEN_MOBILE_MENU = '[MENU] Open Menu';
export const CLOSE_MOBILE_MENU = '[MENU] Close Menu';
export const OPEN_CART = '[CART] Open Cart';
export const CLOSE_CART = '[CART] Close Cart';
export const OPEN_ACCOUNT = '[ACCOUNT] Open Account';
export const CLOSE_ACCOUNT = '[ACCOUNT] Close Account';

// ---- REDUX -> USER CREDENTIALS REDUCER ACTIONS ----
export const LOGGED_IN_USER = '[ACCOUNT] LOGGED IN USER';
export const LOGGED_OUT_USER = '[ACCOUNT] LOGGED OUT USER';

// ---- COMPONENTES -> LINKS NAVBAR & FOOTER ----

type LinkType = 'Internal' | 'External';

export interface ILink {
  type: LinkType;
  name: string;
  link: string;
}

// ---- COMPONENTES -> PRODUCTOS INTERFACE ----
export interface IProducts {
  key: number;
  name: string;
  price: string;
  imgUrl: string;
  shortDescription: string;
}

// ---- COMPONENTES -> CARD PRODUCT ----
export type ProductCardColor = 'Light' | 'Dark';
