import style from './NoProductPlaceHolder.module.css';
import OvenImg from '../../../../../../../../assets/img/icons8-oven-64.png';
function NoProductPlaceHolder() {
  return (
    <aside className={style.no_product_placeholder_container}>
      <div className={style.no_product_placeholder_container_box}>
        <div className={style.no_product_placeholder_container_image}>
          <img src={OvenImg} alt="" />
        </div>
        <h2>No tienes panes en tu carrito</h2>
        <p>
          Agrega cualquiera de los productos de nuestro catalogo y únete a la
          familia de #MassaMare
        </p>
      </div>
    </aside>
  );
}

export default NoProductPlaceHolder;
