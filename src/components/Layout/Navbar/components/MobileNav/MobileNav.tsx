import styles from './MobileNav.module.css';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../../../config/state/stores/store';
import {
  CLOSE_MOBILE_MENU,
  ILink,
  OPEN_MOBILE_MENU,
} from '../../../../../config/types/types';
import NavigationLinksMobile from './Components/NavigationLinksMobile/NavigationLinksMobile';
function MobileNav() {
  const isMenuOpen = useSelector(
    (state: IRootState) => state.navigationReducer.isMenuOpen
  );

  const dispatch = useDispatch();
  function toggleIsMenuOpen() {
    if (!isMenuOpen) {
      return dispatch({ type: OPEN_MOBILE_MENU });
    } else {
      return dispatch({ type: CLOSE_MOBILE_MENU });
    }
  }
  const links: ILink[] = [
    { type: 'Internal', name: 'Vienas', link: '/vienas' },
    { type: 'Internal', name: 'Pankas', link: '/pankas' },
    { type: 'Internal', name: 'Pan de banano', link: '/pan-banano' },
    { type: 'Internal', name: 'Tradicionales', link: '/tradicionales' },
  ];
  return (
    <nav
      className={styles.navbar_product_menu_box_mobile}
      aria-expanded={isMenuOpen ? 'true' : 'false'}
    >
      {!isMenuOpen ? (
        <div>
          <Menu
            onClick={toggleIsMenuOpen}
            className={styles.navbar_product_menu_box_mobile_icon}
          />
        </div>
      ) : (
        <div>
          <X
            onClick={toggleIsMenuOpen}
            className={styles.navbar_product_menu_box_mobile_icon}
          />
        </div>
      )}
      {isMenuOpen ? (
        <div className={styles.navbar_product_menu_box_mobile_dropdown}>
          <ul>
            <NavigationLinksMobile links={links} />
          </ul>
          <div
            className={styles.navbar_product_menu_box_mobile_dropdown_footer}
          >
            <a href="">Sobre nosotros</a>
            <a href="">Contacto</a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default MobileNav;
