import styles from './CartNav.module.css';
import { ShoppingCart } from 'lucide-react';
import CartPopup from './Components/CartPopup/CartPopup';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../config/state/stores/store';
import { CLOSE_CART, OPEN_CART } from '../../../../../../../config/types/types';

function CartNav() {
  const isCartOpen = useSelector(
    (state: IRootState) => state.navigationReducer.isCartOpen
  );
  const dispatch = useDispatch();
  function toggleIsCartOpen() {
    if (!isCartOpen) {
      dispatch({ type: OPEN_CART });
    } else {
      dispatch({ type: CLOSE_CART });
    }
  }
  return (
    <>
      <div
        className={styles.navbar_information_box_account_cart}
        onClick={toggleIsCartOpen}
      >
        <ShoppingCart
          fillOpacity="0"
          className={styles.navbar_information_box_account_cart_icon}
          size="24px"
        />
        <div className={styles.navbar_information_box_account_cart_count}>
          2
        </div>
      </div>
      {isCartOpen ? <CartPopup /> : null}
    </>
  );
}

export default CartNav;
