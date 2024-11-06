import styles from './Navbar.module.css';
import Navigation from './components/Navigation/Navigation';
import LogoBox from './components/LogoBox/LogoBox';
import NavigationRight from './components/Navigation/NavigationRight';

function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <Navigation />
        <LogoBox />
        <NavigationRight />
      </header>
    </>
  );
}

export default Navbar;
