import { ILink } from '../../../../../config/types/types';
import MobileNav from '../MobileNav/MobileNav';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';

function Navigation() {
  const links: ILink[] = [
    { type: 'Internal', name: 'Vienas', link: '/vienas' },
    { type: 'Internal', name: 'Pankas', link: '/pankas' },
    { type: 'Internal', name: 'Pan de banano', link: '/panes-banano' },
    { type: 'Internal', name: 'Tradicionales', link: '/tradicionales' },
  ];
  return (
    <nav>
      <MobileNav />
      <NavigationLinks links={links} />
    </nav>
  );
}

export default Navigation;
