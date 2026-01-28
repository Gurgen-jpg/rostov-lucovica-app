// src/components/FAQ/FAQClient.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from '../styles/FAQ.module.css';
import faqs from '../const/faq';

export function FAQClient({ data }: { data: typeof faqs }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.list}>
      {data.map((faq, index) => (
        <div key={index} className={styles.item}>
          <button
            onClick={() => toggleFAQ(index)}
            className={styles.question}
            aria-expanded={openIndex === index}
          >
            <span className={styles.questionText}>{faq.question}</span>
            <ChevronDown
              className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
            />
          </button>
          
          {/* 
             Совет: Чтобы текст был в DOM но скрыт (лучше для SEO), 
             можно использовать CSS display:none вместо условного рендеринга.
             Но с JSON-LD (см. ниже) текущий вариант тоже допустим.
          */}
          <div 
            className={styles.answer}
            style={{ 
              display: openIndex === index ? 'block' : 'none' // Вариант для SEO: элемент всегда в DOM
            }}
          >
            <p className={styles.answerText}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
