import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../../config/state/stores/store';
import styles from './CheckoutTotal.module.css';
import { Tickets, Truck } from 'lucide-react';
import TransactionForm from '../TransactionForm/TransactionForm';
import { openCheckoutModal } from '../../../../../../config/state/reducers/checkoutFormReducer';

function CheckoutTotal() {
  const checkoutInformation = useSelector(
    (state: IRootState) => state.cartReducer
  );
  const dispatch = useDispatch();
  const modalState = useSelector(
    (state: IRootState) => state.checkoutFormReducer.isModalOpen
  );
  return (
    <aside className={styles.checkout_container}>
      {modalState && checkoutInformation.products.length >= 1 ? (
        <TransactionForm />
      ) : null}
      <div className={styles.checkout_container_header}>
        <h2>${checkoutInformation.total.toLocaleString('es-ES')} (COP)</h2>
        <h3>Total a pagar + ${checkoutInformation.deliveryPrice} de envio.</h3>
      </div>
      <div className={styles.checkout_container_body}>
        <h3>Resumen del pedido</h3>
        <div className={styles.checkout_container_body_price_data}>
          <span>
            {checkoutInformation.products.length === 0
              ? '0'
              : checkoutInformation.products
                  .map((product) => product.cartQty)
                  .reduce((accumulator, current) => accumulator + current)}{' '}
            Producto(s)
          </span>
          <span className={styles.checkout_container_body_price_data_right}>
            ${checkoutInformation.total.toLocaleString('es-ES')} (COP)
          </span>
        </div>

        <div className={styles.checkout_container_body_price_data}>
          <div className={styles.checkout_container_body_price_data_group_info}>
            <div>
              <Truck fillOpacity={0} size={18} />
            </div>
            <span>Tiempo de entrega</span>
          </div>
          <span className={styles.checkout_container_body_price_data_right}>
            3 días hábiles
          </span>
        </div>
      </div>
      <div className={styles.checkout_container_footer}>
        <a href="" className={styles.checkout_container_footer_code}>
          <span>
            <Tickets fillOpacity={0} size={18} />
          </span>
          Usar código promocional
        </a>
        <a
          className={styles.checkout_container_footer_buy}
          onClick={() =>
            checkoutInformation.products.length >= 1 &&
            dispatch(openCheckoutModal())
          }
        >
          Finalizar compra
        </a>
      </div>
    </aside>
  );
}

export default CheckoutTotal;
