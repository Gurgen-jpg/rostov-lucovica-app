import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import styles from './Contacts.module.css';

export function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.title}>
        Контакты
      </h2>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <MapPin className={styles.icon} />
          </div>
          <div>
            <h3 className={styles.infoTitle}>Адрес</h3>
            <p className={styles.infoText}>
              г. Ростов-на-Дону,<br />
              пр. Соколова, 85
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <Clock className={styles.icon} />
          </div>
          <div>
            <h3 className={styles.infoTitle}>Часы работы</h3>
            <p className={styles.infoText}>
              Пн-Вс: 9:00 — 21:00<br />
              Без выходных
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <Phone className={styles.icon} />
          </div>
          <div>
            <h3 className={styles.infoTitle}>Телефон</h3>
            <a href="tel:+78612345678" className={styles.phoneLink}>
              +7 (861) 234-56-78
            </a>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <a 
          href="tel:+78612345678"
          className={styles.primaryButton}
        >
          <Phone className={styles.buttonIcon} />
          Позвонить
        </a>
        
        <a 
          href="https://wa.me/78612345678"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          <MessageCircle className={styles.buttonIcon} />
          Написать в WhatsApp
        </a>
      </div>

      <div className={styles.mapWrapper}>
        <div className={styles.mapPlaceholder}>
          <MapPin className={styles.mapIcon} />
          <p className={styles.mapText}>Карта студии</p>
          <p className={styles.mapAddress}>пр. Соколова, 85</p>
        </div>
      </div>
    </section>
  );
}
