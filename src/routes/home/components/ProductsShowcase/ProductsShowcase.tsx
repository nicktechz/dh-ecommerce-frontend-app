import { IProduct, ProductCardColor } from '../../../../config/types/types';
import ProductCard from './Components/ProductCard/ProductCard';
import style from './ProductShowcase.module.css';

interface IProductShowcaseProps {
  products: IProduct[] | undefined;
  color: ProductCardColor;
}

function ProductsShowcase({ products = [], color }: IProductShowcaseProps) {
  return (
    <section className={style.product_showcase}>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          imgSrc={product.image}
          shortDescription={product.descriptions.shortDescription}
          key={product.name}
          color={color}
        />
      ))}
    </section>
  );
}

export default ProductsShowcase;
