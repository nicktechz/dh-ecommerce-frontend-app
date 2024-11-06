import styles from './LogoBox.module.css';
import LogoTipo from '../../../../../assets/img/Logotipo Primario.svg';

function LogoBox() {
  return (
    <section className={styles.navbar_logo_box}>
      <img
        src={LogoTipo}
        alt="Logo de Massa Mare"
        className={styles.navbar_logo}
      />
    </section>
  );
}

export default LogoBox;
