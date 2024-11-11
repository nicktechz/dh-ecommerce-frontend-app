import { useDispatch } from 'react-redux';
import {
  IProductApiCall,
  OPEN_CART,
  ProductCardColor,
} from '../../../../../../config/types/types';
import style from './ProductCard.module.css';
import { addProductToCart } from '../../../../../../config/state/reducers/cartReducer';

interface IProductCardProps {
  product: IProductApiCall;
  color: ProductCardColor;
}

function ProductCard({ product, color }: IProductCardProps) {
  const dispatch = useDispatch();
  function addProductCart() {
    dispatch(addProductToCart(product));
    dispatch({ type: OPEN_CART });
  }
  return (
    <div
      className={`${style.product_card} ${
        color === 'Light' ? style.card_light : style.card_dark
      }`}
    >
      <div className={style.product_card_header}>
        <img src={product.image} alt="" />
      </div>
      <div className={style.product_card_body_wrapper}>
        <div className={style.product_card_body_header}>
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
        </div>
        <div className={style.product_card_body_description}>
          <p>{product.descriptions.shortDescription}</p>
        </div>
      </div>
      <div className={style.product_card_body_footer}>
        <a onClick={addProductCart}>Comprar</a>
      </div>
    </div>
  );
}

export default ProductCard;
