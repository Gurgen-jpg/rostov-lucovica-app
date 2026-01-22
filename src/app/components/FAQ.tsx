'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Больно ли это?',
      answer: 'Современное оборудование с системой охлаждения делает процедуру максимально комфортной. Большинство клиентов описывают ощущения как легкое покалывание. Уровень дискомфорта зависит от индивидуальной чувствительности и зоны обработки.',
    },
    {
      question: 'Сколько нужно процедур?',
      answer: 'Для достижения стойкого результата обычно требуется 5-8 процедур с интервалом 4-6 недель. Точное количество зависит от типа кожи, цвета и структуры волос, а также обрабатываемой зоны.',
    },
    {
      question: 'Есть ли противопоказания?',
      answer: 'Да, основные противопоказания: беременность, онкология, сахарный диабет в стадии декомпенсации, острые воспалительные процессы на коже, свежий загар. На консультации мастер подробно расскажет обо всех нюансах.',
    },
    {
      question: 'Как подготовиться к процедуре?',
      answer: 'За 2 недели до процедуры нельзя загорать и использовать автозагар. За 1-2 дня необходимо сбрить волосы в зоне обработки. В день процедуры не использовать косметику и дезодоранты на обрабатываемую зону.',
    },
    {
      question: 'Когда будет виден результат?',
      answer: 'Первый результат заметен уже после первой процедуры — волосы выпадают в течение 1-2 недель. С каждой последующей процедурой волос становится всё меньше, они истончаются и растут медленнее.',
    },
    {
      question: 'Можно ли делать эпиляцию летом?',
      answer: 'Да, лазерную эпиляцию можно делать круглый год. Главное — избегать активного загара за 2 недели до и после процедуры, а также использовать солнцезащитный крем SPF 50+ на обработанные зоны.',
    },
    {
      question: 'Сколько длится процедура?',
      answer: 'Время зависит от зоны: подмышки — 10-15 минут, зона бикини — 20-30 минут, ноги полностью — 40-50 минут. Мы ценим ваше время и работаем быстро, сохраняя высокое качество.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.title}>
        Частые вопросы
      </h2>
      <p className={styles.subtitle}>
        Ответы на самые популярные вопросы о лазерной эпиляции
      </p>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              onClick={() => toggleFAQ(index)}
              className={styles.question}
            >
              <span className={styles.questionText}>
                {faq.question}
              </span>
              <ChevronDown 
                className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
              />
            </button>
            
            {openIndex === index && (
              <div className={styles.answer}>
                <p className={styles.answerText}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
