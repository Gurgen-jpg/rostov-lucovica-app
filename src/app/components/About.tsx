import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
// import logoLWhite from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import styles from './About.module.css';

export function About() {
  const badges = [
    '3+ года работы',
    '1000+ клиентов',
    'Стерильность и одноразовые расходники',
    'Сертифицированное оборудование',
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.bgLogo}>
        {/* <img src={logoLWhite} alt="" /> */}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          О студии LUCOVICA
        </h2>

        <div className={styles.imageWrapper}>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1676536162793-faa565d976d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
            alt="Интерьер студии LUCOVICA"
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            LUCOVICA — это современная студия лазерной эпиляции в самом сердце Ростова‑на‑Дону. Мы используем новейшее оборудование последнего поколения, которое обеспечивает максимальную эффективность и безопасность процедур.
          </p>
          
          <p className={styles.paragraph}>
            Наш приоритет — это ваш комфорт и безопасность. Все процедуры проводятся опытными сертифицированными специалистами с соблюдением всех медицинских норм.
          </p>
        </div>

        <div className={styles.badges}>
          {badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
