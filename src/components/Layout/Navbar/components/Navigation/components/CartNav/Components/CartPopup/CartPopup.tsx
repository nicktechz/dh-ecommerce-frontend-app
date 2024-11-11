import { PanelRightClose } from 'lucide-react';
import style from './CartPopup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_CART } from '../../../../../../../../../config/types/types';
import { IRootState } from '../../../../../../../../../config/state/stores/store';
import CartItem from './Components/CartItem';
import { Link } from 'react-router-dom';
function CartPopup() {
  const products = useSelector(
    (state: IRootState) => state.cartReducer.products
  );
  const dispatch = useDispatch();
  const isCartOpen = useSelector(
    (state: IRootState) => state.navigationReducer.isCartOpen
  );
  function closeCart() {
    dispatch({ type: CLOSE_CART });
  }
  return (
    <div
      className={`${style.cart_box} ${
        !isCartOpen ? style.cart_box_animation_exit : null
      }`}
    >
      <div className={style.cart_box_header}>
        <h2>Resumen del carrito</h2>
        <div onClick={closeCart}>
          <PanelRightClose
            fillOpacity={0}
            className={style.cart_box_header_close_cart}
          />
        </div>
      </div>
      {products.map((product) => (
        <CartItem key={product['product-identifier']} product={product} />
      ))}
      <div className={style.cart_box_footer}>
        <div className={style.cart_box_footer_delivery}>
          <span>Envio:</span>
          <span>Por calcular</span>
        </div>
        <div>
          <span className={style.cart_box_footer_total}>Total:</span>
          <span>
            {products.length === 0
              ? '$0 (COP)'
              : '$' +
                products
                  .map(
                    (product) =>
                      parseFloat(product.price.replace(/\./g, '')) *
                      product.cartQty
                  )
                  .reduce((accumulator, current) => accumulator + current)
                  .toLocaleString('es-ES') +
                ' (COP)'}
          </span>
        </div>
      </div>
      <Link to={'/carrito'} className={style.cart_box_button}>
        Ir al carrito
      </Link>
    </div>
  );
}

export default CartPopup;
