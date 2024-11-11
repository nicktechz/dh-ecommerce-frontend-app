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

// ---- REDUX -> CART REDUCER ----
export const ADD_PRODUCT_TO_CART = '[CART] ADD PRODUCT TO CART';
export const REMOVE_PRODUCT_FOM_CART = '[CART] REMOVE_PRODUCT_FROM_CART';

// ---- COMPONENTES -> LINKS NAVBAR & FOOTER ----

type LinkType = 'Internal' | 'External';

export interface ILink {
  type: LinkType;
  name: string;
  link: string;
}

// ---- COMPONENTES -> CARD PRODUCT ----
export type ProductCardColor = 'Light' | 'Dark';

// SERVICES -> API CALL

export interface IProductApiCall {
  'product-identifier': string;
  name: string;
  category: IProductCategory;
  price: string;
  image: string;
  descriptions: {
    shortDescription: string;
    largeDescription: string;
  };
}

export type IProductCategory =
  | 'Tradicional'
  | 'Panka'
  | 'Viena'
  | 'Pan de banano';
