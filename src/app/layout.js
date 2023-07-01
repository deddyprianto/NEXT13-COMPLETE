import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ProviderSession from '../components/Provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <div className='w-screen h-screen grid grid-rows-15'>
          <Header />
          <ProviderSession>{children}</ProviderSession>
          <Footer />
        </div>
      </body>
    </html>
  );
}
