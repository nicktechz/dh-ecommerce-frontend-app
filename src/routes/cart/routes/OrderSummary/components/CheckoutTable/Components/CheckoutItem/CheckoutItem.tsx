import { Minus, Plus, X } from 'lucide-react';
import {
  addProductToCart,
  IProductCart,
  removeAllUnitsFromCart,
  removeProductFromCart,
} from '../../../../../../../../config/state/reducers/cartReducer';
import styles from './CheckoutItem.module.css';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

interface ICheckoutItemProps {
  product: IProductCart;
}

function CheckoutItem({ product }: ICheckoutItemProps) {
  const dispatch = useDispatch();
  function decreaseQty(cartQty: number) {
    if (cartQty === 1) {
      return null;
    }

    return dispatch(removeProductFromCart(product));
  }
  function increaseQty() {
    return dispatch(addProductToCart(product));
  }
  function deleteProduct() {
    toast.success('Acción exitosa', {
      description: 'Se ha eliminado el producto del carrito.',
    });
    return dispatch(removeAllUnitsFromCart(product));
  }
  return (
    <aside className={styles.product_card_container}>
      <div
        className={styles.product_card_left_image}
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className={styles.product_card_info_container}>
        <div className={styles.product_card_info_container_basic_information}>
          <h3>{product.name}</h3>
          <p>{product.descriptions.shortDescription}</p>
        </div>
        <div className={styles.product_card_info_container_close_icon}>
          <div>
            <X fillOpacity={0} onClick={deleteProduct} />
          </div>
        </div>
        <div className={styles.product_card_info_container_qty}>
          <div>
            <Minus
              fillOpacity={0}
              onClick={() => decreaseQty(product.cartQty)}
            />
          </div>
          <span>{product.cartQty}</span>
          <div>
            <Plus fillOpacity={0} onClick={increaseQty} />
          </div>
        </div>
        <div className={styles.product_card_info_container_price}>
          <h4>
            $
            {(
              product.cartQty * Number(product.price.replace(/\./g, ''))
            ).toLocaleString('es-ES')}
          </h4>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutItem;
