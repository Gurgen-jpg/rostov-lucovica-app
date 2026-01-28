import { createContext, useContext } from 'react';
const MenuContext = createContext<{
    openMenu: () => void;
}>({ openMenu: () => { } });

// Хук для использования в Header
export const useMenu = () => useContext(MenuContext);