import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Sections/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/commonStyles/theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'swiper/css';
import 'swiper/css/navigation';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
