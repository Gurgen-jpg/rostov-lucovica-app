import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import styles from './BeforeAfter.module.css';

export function BeforeAfter() {
  const results = [
    {
      title: 'Зона бикини',
      procedures: 4,
      description: 'Полное удаление волос, гладкая кожа без раздражений',
    },
    {
      title: 'Подмышки',
      procedures: 5,
      description: 'Долгосрочный результат, забудьте о ежедневном бритье',
    },
    {
      title: 'Ноги',
      procedures: 6,
      description: 'Идеально гладкая кожа на длительный период',
    },
  ];

  return (
    <section id="before-after" className={styles.section}>
      <h2 className={styles.title}>
        Результаты наших клиентов
      </h2>
      <p className={styles.subtitle}>
        Реальные фото до и после курса процедур
      </p>

      <div className={styles.list}>
        {results.map((result, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <ImageWithFallback 
                src={`https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop`}
                alt={`До и после - ${result.title}`}
                className={styles.image}
              />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>
                {result.title}
              </h3>
              <p className={styles.procedures}>
                Результат после {result.procedures} процедур
              </p>
              <p className={styles.description}>
                {result.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
