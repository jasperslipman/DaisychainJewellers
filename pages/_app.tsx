import '../public/css/jasperminimalreset.css';
import '../public/css/jaspernormalize.css';
import '../public/css/animations.css';
import '../public/css/designsystem.css';
import '../public/css/mainstylesheet.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;