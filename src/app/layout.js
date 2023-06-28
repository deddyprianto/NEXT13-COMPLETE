import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ProviderSession from '../components/Provider';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <ProviderSession>{children}</ProviderSession>
      </body>
    </html>
  );
}
