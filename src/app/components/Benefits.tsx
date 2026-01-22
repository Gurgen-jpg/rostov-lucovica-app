import { Smile, Shield, Clock, TrendingUp } from 'lucide-react';
import styles from './Benefits.module.css';

export function Benefits() {
  const benefits = [
    {
      icon: Smile,
      title: 'Безболезненно',
      description: 'Система охлаждения и современные технологии для комфортной процедуры',
    },
    {
      icon: Shield,
      title: 'Безопасно',
      description: 'Одноразовые расходники, стерильность и медицинский подход',
    },
    {
      icon: Clock,
      title: 'Быстро',
      description: 'Процедура занимает от 15 до 60 минут в зависимости от зоны',
    },
    {
      icon: TrendingUp,
      title: 'Долгий результат',
      description: 'Забудьте о волосах на несколько лет после курса процедур',
    },
  ];

  return (
    <section className={styles.benefits}>
      <h2 className={styles.title}>
        Почему LUCOVICA
      </h2>

      <div className={styles.list}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <benefit.icon className={styles.icon} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>
                {benefit.title}
              </h3>
              <p className={styles.cardDescription}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
