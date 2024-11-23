import { IProductCart } from '../../../../../../../../../../config/state/reducers/cartReducer';
import styles from './ConfirmationProduct.module.css';
interface IConfirmationProductProps {
  products: IProductCart[];
}
function ConfirmationProduct({ products }: IConfirmationProductProps) {
  return (
    <>
      {products.map((product) => (
        <div
          key={product['product-identifier']}
          className={styles.product_confirmation_wrapper}
        >
          <div>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.product_confirmation_info}>
            <h2>{product.name}</h2>
            <span>Cantidad: {product.cartQty}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ConfirmationProduct;
