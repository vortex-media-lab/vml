import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vortex Media Lab',
  description:
    'Somos una agencia boutique de medios y producción audiovisual que resuelve tus necesidades de comunicación y de formación de audiencias.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es_MX'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
