import style from './Cart.module.css';
import { Outlet } from 'react-router-dom';

function Cart() {
  return (
    <>
      <section className={style.cart_container}>
        <Outlet />
      </section>
    </>
  );
}

export default Cart;
