import { MinusCircle, PlusCircle, XCircle } from 'lucide-react';
import style from './CartItem.module.css';
import {
  addProductToCart,
  IProductCart,
  removeProductFromCart,
} from '../../../../../../../../../../config/state/reducers/cartReducer';
import { useDispatch } from 'react-redux';

interface ICartItemProps {
  product: IProductCart;
}

function CartItem({ product }: ICartItemProps) {
  const dispatch = useDispatch();
  function incrementQty() {
    dispatch(addProductToCart(product));
  }
  function decrementQty() {
    dispatch(removeProductFromCart(product));
  }
  return (
    <>
      <div className={style.cart_box_item_card}>
        <div className={style.cart_box_item_card_info}>
          <img
            src={product.image}
            alt={product.name}
            className={style.cart_box_item_card_img}
          />
          <div className={style.cart_box_item_card_info_text}>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
        </div>
        <div className={style.cart_box_item_card_qty_container}>
          <div>
            <PlusCircle fillOpacity={0} onClick={incrementQty} />
          </div>
          <span>{product.cartQty}</span>
          <div>
            {product.cartQty === 1 ? (
              <XCircle fillOpacity={0} onClick={decrementQty} />
            ) : (
              <MinusCircle fillOpacity={0} onClick={decrementQty} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
