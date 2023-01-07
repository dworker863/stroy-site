import React, { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={roboto.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
