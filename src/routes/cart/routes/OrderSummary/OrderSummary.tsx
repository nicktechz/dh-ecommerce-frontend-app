import { useSelector } from 'react-redux';
import PageTitle from '../../../../components/UI/Titles/PageTitle/PageTitle';
import CheckoutProducts from './components/CheckoutTable/CheckoutProducts';
import CheckoutTotal from './components/CheckoutTotal/CheckoutTotal';
import style from './OrderSummary.module.css';
import { IRootState } from '../../../../config/state/stores/store';

function OrderSummary() {
  const cartInfo = useSelector((state: IRootState) => state.cartReducer);
  return (
    <>
      <div className={style.cart_container_products}>
        <div className={style.cart_container_products_header}>
          <PageTitle title="Carrito de compras" />
          <p>
            Los artículos en tu carrito no están reservados. Termina el proceso
            de compra ahora para hacerte con ellos.
          </p>
        </div>
        <CheckoutProducts products={cartInfo.products} />
      </div>
      <CheckoutTotal />
    </>
  );
}

export default OrderSummary;
