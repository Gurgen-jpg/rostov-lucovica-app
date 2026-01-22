import { X } from 'lucide-react';
import { useEffect } from 'react';
import logoL from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import logoText from 'figma:asset/ec4cb93d910ee4c2a7039af136640dc96c4b49d2.png';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    { label: 'Услуги и цены', href: '#services' },
    { label: 'До/после', href: '#before-after' },
    { label: 'О нас', href: '#about' },
    { label: 'Вопросы', href: '#faq' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logoL} alt="L" className={styles.logoIcon} />
            <img src={logoText} alt="LUCOVICA" className={styles.logoText} />
          </div>
          
          <button 
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Закрыть меню"
          >
            <X className={styles.closeIcon} />
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={styles.menuItem}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <button className={styles.ctaButton}>
              Записаться
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
