import styles from './Hero.module.css';
function Hero() {
  return (
    <section className={styles.hero_container}>
      <h1 className={styles.hero_container_title}>
        Panadería Artesanal de Masa Madre
      </h1>
      <h2>
        Horneamos productos 100% artesanales y elaborados con la más alta
        calidad.
      </h2>
    </section>
  );
}

export default Hero;
