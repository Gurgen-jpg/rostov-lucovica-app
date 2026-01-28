import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import styles from './page.module.css';
import { ClientWrapper } from './components/ClientProviders';

export default function Home() {

  return (
    <div className={styles.container}>
      <ClientWrapper>
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
      </ClientWrapper>
      <Footer />
    </div>
  );
}
