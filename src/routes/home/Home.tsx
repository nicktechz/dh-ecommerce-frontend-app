import { Candy, Heart } from 'lucide-react';
import { IProducts } from '../../config/types/types';
import Hero from './components/Hero/Hero';
import ProductsShowcase from './components/ProductsShowcase/ProductsShowcase';
import TickerText from './components/TickerText/TickerText';
import style from './Home.module.css';

function Home() {
  const productsFavourites: IProducts[] = [
    {
      key: 1,
      name: 'Pan de banano',
      price: '26.500',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730922234/t3yiamlsfpqwjfaskkkp.jpg',
      shortDescription:
        'Suave y dulce, con auténtico sabor a banano en cada bocado.',
    },
    {
      key: 2,
      name: 'Pan de chocobanano',
      price: '22.500',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730922240/fg1qmcvi3jzqhbiqv68o.jpg',
      shortDescription:
        'Pan de banano con un toque de chocolate para un sabor irresistible.',
    },
    {
      key: 3,
      name: 'Viena de leche',
      price: '22.000',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730919054/cfj60erxx0pdgggjyh0n.jpg',
      shortDescription:
        'Delicado pan viena enriquecido con un toque de leche, ideal para acompañar.',
    },
    {
      key: 4,
      name: 'Viena de chocolate',
      price: '23.000',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730922226/ewet85xtj9jvnweeo7to.jpg',
      shortDescription:
        'Pan viena con el sabor intenso del chocolate, perfecto para tus antojos.',
    },
  ];
  const sweetProducts: IProducts[] = [
    {
      key: 1,
      name: 'Panka triplechocolate',
      price: '21.000',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730930682/nnhytvinmktbsn9xk5fk.jpg',
      shortDescription:
        'Pan dulce con tres capas de chocolate: suave y esponjoso, relleno y cubierto con chispas, ideal para los amantes del chocolate.',
    },
    {
      key: 2,
      name: 'Panka chocofresa',
      price: '21.000',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730930880/gh4ap9jb8xaxxdctynft.jpg',
      shortDescription:
        'Pan dulce con sabor a chocolate y un toque de fresa. Esponjoso, suave y con el equilibrio perfecto entre lo dulce y lo frutal.',
    },
    {
      key: 3,
      name: 'Panka de canela',
      price: '21.000',
      imgUrl:
        'https://res.cloudinary.com/dyjzwx82w/image/upload/v1730931049/eyboh50598u0hmqkf53h.jpg',
      shortDescription:
        'Pan dulce con aroma y sabor a canela, suave y esponjoso, perfecto para disfrutar en cualquier momento.',
    },
  ];
  return (
    <>
      <Hero />
      <section className={style.products_month_box}>
        <TickerText color="Light" text="FAVORITOS DEL MES" icon={<Heart />} />
        <div className={style.products_inner_container}>
          <ProductsShowcase products={productsFavourites} color="Light" />
        </div>
      </section>
      <section className={style.products_pankas}>
        <TickerText color="Dark" text="ANTOJO DULCE" icon={<Candy />} />
        <div className={style.products_inner_container}>
          <ProductsShowcase products={sweetProducts} color="Dark" />
        </div>
      </section>
    </>
  );
}

export default Home;
