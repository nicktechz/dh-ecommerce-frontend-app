import { IProducts, ProductCardColor } from '../../../../config/types/types';
import ProductCard from './Components/ProductCard';
import style from './ProductShowcase.module.css';

interface IProductShowcaseProps {
  products: IProducts[];
  color: ProductCardColor;
}

function ProductsShowcase({ products = [], color }: IProductShowcaseProps) {
  return (
    <section className={style.product_showcase}>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          imgSrc={product.imgUrl}
          shortDescription={product.shortDescription}
          key={product.key}
          color={color}
        />
      ))}
    </section>
  );
}

export default ProductsShowcase;
