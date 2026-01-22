import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LUCOVICA — студия лазерной эпиляции в Ростове-на-Дону',
  description: 'Безопасная, комфортная и эффективная лазерная эпиляция. Современное оборудование и опытные мастера.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
