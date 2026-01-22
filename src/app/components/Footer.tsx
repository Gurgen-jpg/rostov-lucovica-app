import { Instagram, Facebook, Phone } from 'lucide-react';
// import logoL from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <img src={logoL} alt="L" className={styles.logoIcon} /> */}
          <span className={styles.logoText}>LUCOVICA</span>
        </div>

        <div className={styles.socials}>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <Instagram className={styles.socialIcon} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Facebook"
          >
            <Facebook className={styles.socialIcon} />
          </a>
          <a 
            href="tel:+78612345678"
            className={styles.socialLink}
            aria-label="Позвонить"
          >
            <Phone className={styles.socialIcon} />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Политика конфиденциальности
          </a>
          <a href="#" className={styles.link}>
            Согласие на обработку ПДн
          </a>
        </div>

        <div className={styles.copyright}>
          © 2026 LUCOVICA. Все права защищены
        </div>
      </div>
    </footer>
  );
}
