import styles from './Navbar.module.css';
import LogoTipo from '../../../assets/img/Logotipo Primario.svg';
import { Divide, LogIn, Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import CartPopup from './components/CartPopup/CartPopup';
import AccountPopup from './components/AccountPopup/AccountPopup';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <>
      <header className={styles.navbar}>
        <nav className={styles.navbar_product_menu_box}>
          <nav
            className={styles.navbar_product_menu_box_mobile}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            {!isMenuOpen ? (
              <Menu
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.navbar_product_menu_box_mobile_icon}
              />
            ) : (
              <X
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.navbar_product_menu_box_mobile_icon}
              />
            )}

            {isMenuOpen ? (
              <div className={styles.navbar_product_menu_box_mobile_dropdown}>
                <ul>
                  <li>
                    <a href="#" className="navbar_link">
                      Vienas
                    </a>
                  </li>
                  <li>
                    <a href="#">Pankas</a>
                  </li>
                  <li>
                    <a href="#">Pan de banano</a>
                  </li>
                  <li>
                    <a href="#">Tradicionales</a>
                  </li>
                </ul>
                <div
                  className={
                    styles.navbar_product_menu_box_mobile_dropdown_footer
                  }
                >
                  <a href="">Sobre nosotros</a>
                  <a href="">Contacto</a>
                </div>
              </div>
            ) : null}
          </nav>
          <ul className={styles.navbar_product_menu_box_links_large}>
            <li>
              <a href="#">Vienas</a>
            </li>
            <li>
              <a href="#">Pankas</a>
            </li>
            <li>
              <a href="#">Pan de banano</a>
            </li>
            <li>
              <a href="#">Tradicionales</a>
            </li>
          </ul>
        </nav>
        <section className={styles.navbar_logo_box}>
          <img
            src={LogoTipo}
            alt="Logo de Massa Mare"
            className={styles.navbar_logo}
          />
        </section>
        <section className={styles.navbar_information_box}>
          <nav className={styles.navbar_information_box_menu}>
            <ul>
              <li>
                <a href="">Sobre nosotros</a>
              </li>
              <li>
                <a href="">Contacto</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.navbar_information_box_account}>
            {isUserLoggedIn ? (
              <div style={{ position: 'relative' }}>
                <div
                  className={styles.navbar_information_box_account_avatar}
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                >
                  NR
                </div>
                {isAccountOpen ? <AccountPopup /> : null}
              </div>
            ) : (
              <>
                <a
                  href=""
                  className={styles.navbar_information_box_account_not_logged}
                >
                  <div>
                    <LogIn fillOpacity={0} />
                  </div>
                  <span>Iniciar sesión</span>
                </a>
              </>
            )}

            <div
              className={styles.navbar_information_box_account_cart}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart
                fillOpacity="0"
                className={styles.navbar_information_box_account_cart_icon}
                size="24px"
              />
              <div className={styles.navbar_information_box_account_cart_count}>
                2
              </div>
            </div>
            {isCartOpen ? <CartPopup /> : null}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;
