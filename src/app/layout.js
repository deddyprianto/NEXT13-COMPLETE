import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from './components/Sidebar';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <div className='h-screen grid grid-cols-15 gap-x-2 overflow-x-auto '>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
