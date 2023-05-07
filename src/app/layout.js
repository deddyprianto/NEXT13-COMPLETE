import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
