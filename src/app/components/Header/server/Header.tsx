// import logoL from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
// import logoText from 'figma:asset/ec4cb93d910ee4c2a7039af136640dc96c4b49d2.png';
import styles from './Header.module.css';
import { MenuButton } from '../client/MenuButton';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <img src={logoL} alt="L" className={styles.logoIcon} />
          <img src={logoText} alt="LUCOVICA" className={styles.logoText} /> */}
        </div>
        <MenuButton onMenuClick={onMenuClick} classNames={[styles.menuButton, styles.menuIcon]} />
      </div>
    </header>
  );
}
