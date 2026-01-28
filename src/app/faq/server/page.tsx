// src/app/faq/page.tsx (или где у вас выводится секция)
import { FAQClient } from '../client/FAQClient';
import faqs from '../const/faq';
import styles from '../styles/FAQ.module.css'; // Заголовки можно оставить тут

export const FAQSection = () => {
  // Генерация микроразметки для Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className={styles.faq}>
      {/* Вставка JSON-LD. Google прочтет это гарантированно. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className={styles.title}>Частые вопросы</h2>
      <p className={styles.subtitle}>
        Ответы на самые популярные вопросы о лазерной эпиляции
      </p>

      {/* Передаем данные в клиентский интерактивный компонент */}
      <FAQClient data={faqs} />
    </section>
  );
}
