import { ProductCardColor } from '../../../../../config/types/types';
import style from './ProductCard.module.css';

interface IProductCardProps {
  name: string;
  price: string;
  shortDescription: string;
  imgSrc: string;
  color: ProductCardColor;
}

function ProductCard({
  name,
  price,
  shortDescription = 'Prueba un producto delicioso recién horneado',
  imgSrc,
  color,
}: IProductCardProps) {
  return (
    <div
      className={`${style.product_card} ${
        color === 'Light' ? style.card_light : style.card_dark
      }`}
    >
      <div className={style.product_card_header}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={style.product_card_body_wrapper}>
        <div className={style.product_card_body_header}>
          <h2>{name}</h2>
          <h3>${price}</h3>
        </div>
        <div className={style.product_card_body_description}>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className={style.product_card_body_footer}>
        <a href="">Comprar</a>
      </div>
    </div>
  );
}

export default ProductCard;
