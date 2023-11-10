/** Font */
import { Montserrat } from 'next/font/google';

/** Styles */
import '../styles/globals.css';
import '../styles/vendors/hamburger.css';

/** Components */
import Nav from '../components/nav';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Orion Next Docker Mongo Portfolio Website',
  description: 'Success start with single step.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`gotham text-slate-200 ${montserrat.className} leading-5`}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
