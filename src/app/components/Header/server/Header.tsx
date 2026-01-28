// import logoL from 'figma:asset/4d081c1d6ff7597eeada0ab976e423614455a50f.png';
// import logoText from 'figma:asset/ec4cb93d910ee4c2a7039af136640dc96c4b49d2.png';
import styles from './Header.module.css';
import { MenuButton } from '../client/MenuButton';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={"/images/Symbol_black.png"}
            alt={"Логотип студии"}
            width={32}
            height={32}
          />
          <Image
            src={"/images/Logo_main_black.png"}
            alt="Луковица"
            fill // Растянет картинку по родителю
            style={{ objectFit: 'contain' }} // Чтобы не обрезалась
          />
        </div>
        <MenuButton onMenuClick={onMenuClick} classNames={[styles.menuButton, styles.menuIcon]} />
      </div>
    </header>
  );
}
