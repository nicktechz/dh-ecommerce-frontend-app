import { ILink } from '../../../../../../../config/types/types';
import styles from './NavigationLinks.module.css';

interface ILInksGroupProps {
  links: ILink[];
}

function NavigationLinks({ links }: ILInksGroupProps) {
  return (
    <ul className={styles.navbar_product_menu_box_links_large}>
      {links.map((link: ILink) => {
        if (link.type === 'Internal') {
          return (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          );
        } else {
          return (
            <li key={link.name}>
              <a href={link.link} rel="noopener noreferrer" target="_blank">
                {link.name}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default NavigationLinks;
