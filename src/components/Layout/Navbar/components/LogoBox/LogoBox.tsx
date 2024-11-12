import styles from './LogoBox.module.css';
import LogoTipo from '../../../../../assets/img/Logotipo Primario.svg';
import { Link } from 'react-router-dom';

function LogoBox() {
  return (
    <section className={styles.navbar_logo_box}>
      <Link to="/">
        <img
          src={LogoTipo}
          alt="Logo de Massa Mare"
          className={styles.navbar_logo}
        />
      </Link>
    </section>
  );
}

export default LogoBox;
