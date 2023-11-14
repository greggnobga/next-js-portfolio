/** Font */
/** import { Montserrat } from 'next/font/google'; */

/** Styles */
import '../styles/globals.css';
import '../styles/vendors/hamburger.css';

/** Components */
import Nav from '../components/nav';
import Footer from '../components/footer';

/** const montserrat = Montserrat({ subsets: ['latin'] }); */

export const metadata = {
  title: 'Orion Docker Mongo Next Portfolio Application',
  description: 'Success starts with a single step.',
};

/**montserrat.className */

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`gotham text-slate-300 leading-5`}>
        <main className='h-m-screen'>
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
