import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vortex Media Lab',
  description:
    'Somos una agencia boutique de medios y producción audiovisual que resuelve tus necesidades de comunicación y de formación de audiencias.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es_MX'>
      <Head>
        <meta
          name='google-site-verification'
          content='_YwHM17lciNnXnEIeU1nWGDVFWIDMedM3KbpIgnnsBo'
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
