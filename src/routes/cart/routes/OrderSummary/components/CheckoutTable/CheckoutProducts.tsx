import { IProductCart } from '../../../../../../config/state/reducers/cartReducer';
import styles from './CheckoutProducts.module.css';
import CheckoutItem from './Components/CheckoutItem/CheckoutItem';
import NoProductPlaceHolder from './Components/NoProductPlaceHolder/NoProductPlaceHolder';

interface ICheckoutProductsProps {
  products: IProductCart[];
}

function CheckoutProducts({ products }: ICheckoutProductsProps) {
  return (
    <div className={styles.checkout_products_container}>
      {products.length === 0 ? (
        <NoProductPlaceHolder />
      ) : (
        products.map((product) => (
          <CheckoutItem key={product['product-identifier']} product={product} />
        ))
      )}
    </div>
  );
}

export default CheckoutProducts;
