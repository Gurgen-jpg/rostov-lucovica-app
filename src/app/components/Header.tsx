import { Menu } from 'lucide-react';
import logoL from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
import logoText from 'figma:asset/ec4cb93d910ee4c2a7039af136640dc96c4b49d2.png';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoL} alt="L" className={styles.logoIcon} />
          <img src={logoText} alt="LUCOVICA" className={styles.logoText} />
        </div>
        
        <button 
          onClick={onMenuClick}
          className={styles.menuButton}
          aria-label="Открыть меню"
        >
          <Menu className={styles.menuIcon} />
        </button>
      </div>
    </header>
  );
}
