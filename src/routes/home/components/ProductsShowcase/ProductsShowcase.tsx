import {
  IProductApiCall,
  ProductCardColor,
} from '../../../../config/types/types';
import ProductCard from './Components/ProductCard/ProductCard';
import style from './ProductShowcase.module.css';

interface IProductShowcaseProps {
  products: IProductApiCall[] | undefined;
  color: ProductCardColor;
}

function ProductsShowcase({ products = [], color }: IProductShowcaseProps) {
  return (
    <section className={style.product_showcase}>
      {products.map((product) => (
        <ProductCard
          key={product['product-identifier']}
          product={product}
          color={color}
        />
      ))}
    </section>
  );
}

export default ProductsShowcase;
