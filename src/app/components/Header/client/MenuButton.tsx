'use client';
import { Menu } from 'lucide-react';

interface MenuButtonProps {
    onMenuClick: () => void;
    classNames: [string, string];
}

export function MenuButton({ onMenuClick, classNames }: MenuButtonProps) {
    const [menuButton, menuIcon] = classNames;
    return (
        <button
            onClick={onMenuClick}
            className={menuButton}
            aria-label="Открыть меню"
        >
            <Menu className={menuIcon} />
        </button>
    );
}