'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';
import styles from './page.module.css';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <Services />
        <BeforeAfter />
        <About />
        <Reviews />
        <FAQ />
        <Contacts />
      </main>
      
      <Footer />
    </div>
  );
}
