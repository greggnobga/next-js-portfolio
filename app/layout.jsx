/** Next. */
import dynamic from 'next/dynamic';

/** Store. */
import StoreProvider from '../redux/store-provider';

/** Components */
import Nav from '../components/ui/nav';
import Footer from '../components/ui/footer';

/** Font */
import { Montserrat } from 'next/font/google';

/** Styles */
import '../styles/globals.css';
import '../styles/vendors/hamburger.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
    title: 'Reijo N | Full Stack Web Developer',
    description: 'Success starts with a single step.',
    referrer: 'no-referrer',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <script type='module' src='/js/animate.js' />
            </head>
            <body className={`gotham text-slate-300 leading-7 text-base ${montserrat.className}`}>
                <StoreProvider>
                    <header>
                        <Nav />
                    </header>
                    <main className='h-m-screen'>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
