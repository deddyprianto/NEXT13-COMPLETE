import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from './components/Provider';
import { Toaster } from 'react-hot-toast';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'font-popins',
          }}
        />
        <Providers>
          <div className='w-screen h-screen flex justify-center items-center'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
