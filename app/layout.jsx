/** Store. */
import StoreProvider from '../redux/store-provider';

/** Components */
import Nav from '../components/nav';
import Footer from '../components/footer';

/** Font */
import { Montserrat } from 'next/font/google';

/** Styles */
import '../styles/globals.css';
import '../styles/vendors/hamburger.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Orion Docker Mongo Next Portfolio Application',
  description: 'Success starts with a single step.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`gotham text-slate-300 leading-5 montserrat.className`}>
        <StoreProvider>
          <main className='h-m-screen'>
            <Nav />
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
