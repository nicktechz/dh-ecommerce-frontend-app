import { ChevronRight } from 'lucide-react';
import { ILink } from '../../../../../../../config/types/types';
import style from './NavigationLinksMobile.module.css';

interface INavigationLinksMobileProps {
  links: ILink[];
}

function NavigationLinksMobile({ links }: INavigationLinksMobileProps) {
  return links.map((link: ILink) => {
    if (link.type === 'Internal') {
      return (
        <a key={link.name} href={link.link} className={style.nav_link_mobile}>
          {link.name}
          <div>
            <ChevronRight fillOpacity={0} />
          </div>
        </a>
      );
    } else {
      return (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noreferrer noopener"
          className={style.nav_link_mobile}
        >
          {link.name}
          <div>
            <ChevronRight fillOpacity={0} />
          </div>
        </a>
      );
    }
  });
}

export default NavigationLinksMobile;
