import styles from './NavigationRight.module.css';
import { ILink } from '../../../../../config/types/types';
import AccountNav from './components/AccountNav/AccountNav';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import CartNav from './components/CartNav/CartNav';

function NavigationRight() {
  const links: ILink[] = [
    { type: 'Internal', name: 'Sobre nosotros', link: '/nosotros' },
    { type: 'Internal', name: 'Contacto', link: '/contacto' },
  ];

  return (
    <section className={styles.navbar_information_box}>
      <nav className={styles.navbar_information_box_menu}>
        <NavigationLinks links={links} />
      </nav>
      <nav className={styles.navbar_information_box_account}>
        <AccountNav />
        <CartNav />
      </nav>
    </section>
  );
}

export default NavigationRight;
