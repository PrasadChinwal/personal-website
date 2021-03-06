import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "nprogress/nprogress.css";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
