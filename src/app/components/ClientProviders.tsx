'use client';

import { useState, ReactNode } from 'react';
import { Header } from './Header/server/Header';
import { MobileMenu } from './MobileMenu';

export function ClientWrapper({ children }: { children: ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return (
        <>
            <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
            />
            {children}
        </>
    );
}
