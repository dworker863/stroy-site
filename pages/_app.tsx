import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Sections/Layout/Layout';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/commonStyles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
