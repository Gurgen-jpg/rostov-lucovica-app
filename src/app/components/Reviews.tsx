import { Star } from 'lucide-react';
import styles from './Reviews.module.css';

export function Reviews() {
  const reviews = [
    {
      name: 'Анна',
      age: 28,
      zone: 'Глубокое бикини',
      rating: 5,
      text: 'Невероятный результат! Процедура прошла комфортно, мастер очень деликатная и профессиональная. Результат превзошёл все ожидания. Рекомендую!',
    },
    {
      name: 'Елена',
      age: 32,
      zone: 'Ноги полностью',
      rating: 5,
      text: 'Делаю эпиляцию в LUCOVICA уже год. Чистота, современное оборудование, приятная атмосфера. О бритве забыла навсегда!',
    },
    {
      name: 'Мария',
      age: 25,
      zone: 'Подмышки',
      rating: 5,
      text: 'Очень боялась боли, но всё прошло легко благодаря системе охлаждения. После третьей процедуры волос почти не осталось. Спасибо!',
    },
    {
      name: 'Ольга',
      age: 35,
      zone: 'Лицо (усики)',
      rating: 5,
      text: 'Деликатная работа мастера, быстро и эффективно. Кожа стала гладкой, а главное — нет раздражений. Очень довольна!',
    },
  ];

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>
        Отзывы клиентов
      </h2>
      <p className={styles.subtitle}>
        Реальные истории наших клиентов
      </p>

      <div className={styles.list}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.userInfo}>
                <h3 className={styles.userName}>
                  {review.name}, {review.age} лет
                </h3>
                <p className={styles.zone}>{review.zone}</p>
              </div>
              
              <div className={styles.rating}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>
            </div>
            
            <p className={styles.text}>
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
