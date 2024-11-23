import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../../../../config/state/stores/store';
import styles from './OrderConfirmation.module.css';
import ConfirmationProduct from './Components/ConfirmationProduct/ConfirmationProduct';
import ConfirmationDelivery from './Components/ConfirmationDelivery/ConfirmationDelivery';

function OrderConfirmation() {
  const checkoutProducts = useSelector(
    (state: IRootState) => state.cartReducer.products
  );
  return (
    <>
      <h2 className={styles.order_confirmation_title}>Productos:</h2>
      <section className={styles.order_confirmation_products_group}>
        <ConfirmationProduct products={checkoutProducts} />
      </section>
      <h2 className={styles.order_confirmation_title}>
        Información de entrega:
      </h2>
      <section>
        <ConfirmationDelivery />
      </section>
    </>
  );
}

export default OrderConfirmation;
