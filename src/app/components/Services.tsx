import { Footprints, Heart, Sparkles, User, Hand } from 'lucide-react';
import logoLWhite from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import styles from './Services.module.css';

export function Services() {
  const services = [
    {
      icon: Footprints,
      name: 'Ноги полностью',
      price: 'от 3 500 ₽',
      duration: 'Процедура 40–50 минут',
    },
    {
      icon: Heart,
      name: 'Глубокое бикини',
      price: 'от 2 500 ₽',
      duration: 'Процедура 20–30 минут',
    },
    {
      icon: Sparkles,
      name: 'Подмышки',
      price: 'от 800 ₽',
      duration: 'Процедура 10–15 минут',
    },
    {
      icon: User,
      name: 'Лицо (усики, подбородок)',
      price: 'от 600 ₽',
      duration: 'Процедура 15–20 минут',
    },
    {
      icon: Hand,
      name: 'Руки полностью',
      price: 'от 2 200 ₽',
      duration: 'Процедура 30–40 минут',
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.bgLogo}>
        <img src={logoLWhite} alt="" />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Услуги и цены
        </h2>
        <p className={styles.subtitle}>
          Точная стоимость определяется на консультации
        </p>

        <div className={styles.list}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <service.icon className={styles.icon} />
                </div>
                
                <div className={styles.info}>
                  <div className={styles.header}>
                    <h3 className={styles.serviceName}>
                      {service.name}
                    </h3>
                    <span className={styles.price}>
                      {service.price}
                    </span>
                  </div>
                  <p className={styles.duration}>
                    {service.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <button className={styles.secondaryButton}>
            Посмотреть полный прайс
          </button>
          
          <button className={styles.primaryButton}>
            Записаться на консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
