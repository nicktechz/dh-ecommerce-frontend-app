import styles from './CartNav.module.css';
import { ShoppingCart } from 'lucide-react';
import CartPopup from './Components/CartPopup/CartPopup';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../config/state/stores/store';
import { OPEN_CART } from '../../../../../../../config/types/types';

function CartNav() {
  const isCartOpen = useSelector(
    (state: IRootState) => state.navigationReducer.isCartOpen
  );
  const productsCart = useSelector(
    (state: IRootState) => state.cartReducer.products
  );
  const dispatch = useDispatch();
  function openCart() {
    dispatch({ type: OPEN_CART });
  }
  return (
    <>
      <div
        className={styles.navbar_information_box_account_cart}
        onClick={openCart}
      >
        <ShoppingCart
          fillOpacity="0"
          className={styles.navbar_information_box_account_cart_icon}
          size="24px"
        />
        <div className={styles.navbar_information_box_account_cart_count}>
          {productsCart.length === 0
            ? 0
            : productsCart
                .map((product) => product.cartQty)
                .reduce((accumulator, current) => accumulator + current)}
        </div>
      </div>
      {isCartOpen ? <CartPopup /> : null}
    </>
  );
}

export default CartNav;
