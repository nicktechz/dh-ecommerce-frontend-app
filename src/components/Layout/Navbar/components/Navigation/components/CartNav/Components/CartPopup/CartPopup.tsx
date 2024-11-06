import style from './CartPopup.module.css';
import VienaLecheImg from '../../../../../../../../../assets/img/breads/viena-leche.jpg';
import PanDeBananoImg from '../../../../../../../../../assets/img/breads/pan-banano.jpg';
function CartPopup() {
  return (
    <div className={style.cart_box}>
      <h2>Resumen del carrito</h2>
      <div className={style.cart_box_item_card}>
        <div className={style.cart_box_item_card_info}>
          <img
            src={VienaLecheImg}
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
            src={PanDeBananoImg}
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
