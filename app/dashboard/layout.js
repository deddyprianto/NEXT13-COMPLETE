import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Sidebar from '../../components/Sidebar';
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
        <div className='h-screen'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
