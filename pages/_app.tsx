import './../styles/jasperminimalreset.css';
import './../styles/jaspernormalize.css';
import './../styles/designsystem.css';
import './../styles/mainstylesheet.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;