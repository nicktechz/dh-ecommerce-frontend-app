import style from './CartPopup.module.css';
function CartPopup() {
  return (
    <div className={style.cart_box}>
      <h2>Resumen del carrito</h2>
      <div className={style.cart_box_item_card}>
        <div className={style.cart_box_item_card_info}>
          <img
            src="https://res.cloudinary.com/dyjzwx82w/image/upload/c_scale,w_500/f_webp,q_auto:low/cfj60erxx0pdgggjyh0n.jpg"
            alt="Viena de leche"
            className={style.card_box_item_card_img}
          />
          <div className={style.cart_box_item_card_info_text}>
            <h3>Viena de leche</h3>
            <span>$19.900 (Unidad)</span>
          </div>
        </div>
        <div>x1</div>
      </div>
      <div className={style.cart_box_item_card}>
        <div className={style.cart_box_item_card_info}>
          <img
            src="https://res.cloudinary.com/dyjzwx82w/image/upload/c_scale,w_500/f_auto,q_auto:low/t3yiamlsfpqwjfaskkkp.jpg"
            alt=""
            className={style.card_box_item_card_img}
          />
          <div className={style.cart_box_item_card_info_text}>
            <h3>Pan de banano</h3>
            <span>$26.500 (Unidad)</span>
          </div>
        </div>
        <div>x3</div>
      </div>
      <div className={style.cart_box_footer}>
        <div className={style.cart_box_footer_delivery}>
          <span>Envio:</span>
          <span>$6.500(COP)</span>
        </div>
        <div>
          <span className={style.cart_box_footer_total}>Total:</span>
          <span>$105.900(COP)</span>
        </div>
      </div>
      <a href="" className={style.cart_box_button}>
        Ir al carrito
      </a>
    </div>
  );
}

export default CartPopup;
