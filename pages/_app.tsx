import '../commonStyles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Sections/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import { defaultTheme } from '../commonStyles/theme';

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
