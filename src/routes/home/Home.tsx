import { Candy, Crown, Heart } from 'lucide-react';
import Hero from './components/Hero/Hero';
import TickerText from './components/TickerText/TickerText';
import style from './Home.module.css';
import {
  useGetBestSellingProductsQuery,
  useGetProductsByCategoryQuery,
} from '../../config/state/reducers/productsApiReducer';
import ProductsShowcase from './components/ProductsShowcase/ProductsShowcase';

function Home() {
  const { data: bestSellingProducts } = useGetBestSellingProductsQuery();
  const { data: pankasProducts } = useGetProductsByCategoryQuery('Panka');
  const { data: traditionalProducts } =
    useGetProductsByCategoryQuery('Tradicional');

  return (
    <>
      <Hero />
      <section
        className={`${style.products_container} ${style.products_dark_bg}`}
        style={{ padding: 0 }}
      >
        <TickerText color="Light" text="FAVORITOS DEL MES" icon={<Heart />} />
        <div className={style.products_inner_container}>
          <ProductsShowcase products={bestSellingProducts} color="Light" />
        </div>
      </section>
      <section
        className={`${style.products_container} ${style.products_light_bg}`}
      >
        <TickerText color="Dark" text="ANTOJO DULCE" icon={<Candy />} />
        <div className={style.products_inner_container}>
          <ProductsShowcase products={pankasProducts} color="Dark" />
        </div>
      </section>
      <section
        className={`${style.products_container} ${style.products_dark_bg}`}
      >
        <TickerText
          color="Light"
          text="CLÁSICOS PERO PODEROSOS"
          icon={<Crown />}
        />
        <div className={style.products_inner_container}>
          <ProductsShowcase products={traditionalProducts} color="Light" />
        </div>
      </section>
    </>
  );
}

export default Home;
