import { MessageCircle, Award, Zap, Users } from 'lucide-react';
import logoLWhite from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgLogo}>
        <img src={logoLWhite} alt="" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          LUCOVICA — студия лазерной эпиляции в Ростове‑на‑Дону
        </h1>
        
        <p className={styles.subtitle}>
          Безопасная, комфортная и эффективная процедура для гладкой кожи надолго. Современное оборудование и опытные мастера.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Записаться онлайн
          </button>
          
          <button className={styles.secondaryButton}>
            <MessageCircle className={styles.buttonIcon} />
            Задать вопрос в WhatsApp
          </button>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Award />
            </div>
            <p className={styles.featureText}>Сертифицированные мастера</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Zap />
            </div>
            <p className={styles.featureText}>Современное оборудование</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Users />
            </div>
            <p className={styles.featureText}>1000+ клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
}
