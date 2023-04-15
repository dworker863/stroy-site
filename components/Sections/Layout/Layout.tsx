import React, { ReactNode, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import { IAppContext } from './ILayout';
import { StyledOverlay } from './StyledLayot';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export const AppContext = React.createContext<IAppContext>({
  loginHandler: () => {},
  logoutHandler: () => {},
});

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [modalActive, setModalActive] = useState(false);

  const closeButtonHandler = () => {
    setModalActive(false);
  };

  const loginHandler = () => {
    document.cookie = cookie.serialize('token', '');
    setModalActive(true);
  };

  const logoutHandler = () => {
    document.cookie = cookie.serialize('token', '');
    setModalActive(false);
    router.push('/', undefined, { scroll: false });
  };
  return (
    <AppContext.Provider value={{ loginHandler, logoutHandler }}>
      <div className={roboto.className}>
        <FormAuth active={modalActive} onClick={closeButtonHandler} />
        <StyledOverlay active={modalActive}>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledOverlay>
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
