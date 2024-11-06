import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  MailQuestion,
  MapPin,
  PhoneCall,
} from 'lucide-react';
import styles from './Footer.module.css';
import IsoTipo from '../../../assets/img/Isotipo Footer.svg';
function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_info_section}>
        <div className={styles.footer_info_section_brand}>
          <img src={IsoTipo} alt="" />
          <h3>Cuidamos Tu Mente Cuerpo Y Alma</h3>
          <div className={styles.footer_info_section_brand_socials}>
            <a
              className={styles.footer_info_section_brand_socials_icon}
              href="https://facebook.com/massamare.col"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook fillOpacity={0} />
            </a>
            <a
              className={styles.footer_info_section_brand_socials_icon}
              href="https://instagram.com/massamare.co"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram fillOpacity={0} />
            </a>
            <a
              className={styles.footer_info_section_brand_socials_icon}
              href="https://linkedin.com/company/massamareco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin fillOpacity={0} />
            </a>
          </div>
        </div>
        <div className={styles.footer_info_section_brand_language}>
          <select name="" id="">
            <option value="">Español</option>
            <option value="">Inglés</option>
            <option value="">Francés</option>
            <option value="">Portugés</option>
          </select>
          <div>
            <ChevronDown fillOpacity={0} />
          </div>
        </div>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Productos</h4>
        <ul>
          <li>
            <a href="">Panes de masa madre</a>
          </li>
          <li>
            <a href="">Panes de banano</a>
          </li>
          <li>
            <a href="">Pankas</a>
          </li>
          <li>
            <a href="">Vienas</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Envios</h4>
        <ul>
          <li>
            <a href="">Política de envios</a>
          </li>
          <li>
            <a href="">Tiempos de entrega</a>
          </li>
          <li>
            <a href="">Envios nacionales</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Compañia</h4>
        <ul>
          <li>
            <a href="">Conoce nuestra historia</a>
          </li>
          <li>
            <a href="">Vacantes de trabajo</a>
          </li>
          <li>
            <a href="">Programa para médicos</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Soporte</h4>
        <ul>
          <li>
            <a href="">Centro de ayuda</a>
          </li>
          <li>
            <a href="">Tiempo de envíos</a>
          </li>
          <li>
            <a href="">Radicar PQRS</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Legal</h4>
        <ul>
          <li>
            <a href="">Política de privacidad</a>
          </li>
          <li>
            <a href="">Mapa del sitio</a>
          </li>
        </ul>
      </section>
      <section className={styles.footer_link_section}>
        <h4>Información</h4>
        <ul className={styles.footer_link_section_information_group}>
          <li>
            <div>
              <MapPin fillOpacity={0} />
            </div>
            <a
              href="https://maps.app.goo.gl/EZvrFifpHehfpjre6"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cll 159 #54-69, Cantalejo, Bogotá DC.
            </a>
          </li>
          <li>
            <div>
              <MailQuestion fillOpacity={0} />
            </div>
            <a href="mailto:contacto@massamare.co">contacto@massamare.co</a>
          </li>
          <li>
            <div>
              <PhoneCall fillOpacity={0} />
            </div>
            <a
              href="https://wa.link/znfzr6"
              target="_blank"
              rel="noreferrer noopener"
            >
              +57 (317) 710 1455
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
