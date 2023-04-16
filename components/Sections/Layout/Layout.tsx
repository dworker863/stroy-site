import React, { Dispatch, ReactNode, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import { IAppContext } from './ILayout';
import { StyledOverlay } from './StyledLayot';
import Modal from '../../Blocks/Modal/Modal';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export const AppContext = React.createContext<IAppContext>({
  auth: false,
  setAuth: () => {},
  loginHandler: () => {},
  logoutHandler: () => {},
});

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [modalActive, setModalActive] = useState(false);
  const [auth, setAuth] = useState(false);
  console.log(auth + '0');

  useEffect(() => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem('token') || '';
      setAuth(!!token);
    }
  }, [auth]);

  const closeButtonHandler = () => {
    setModalActive(false);
  };

  const loginHandler = () => {
    const token = localStorage.getItem('token') || '';
    document.cookie = cookie.serialize('token', token);
    setAuth(true);
    setModalActive(true);
  };

  const logoutHandler = () => {
    document.cookie = cookie.serialize('token', '');
    localStorage.setItem('token', '');
    setAuth(false);
    router.push('/', undefined, { scroll: false });
  };
  return (
    <AppContext.Provider value={{ auth, setAuth, loginHandler, logoutHandler }}>
      <div className={roboto.className}>
        <Modal active={modalActive} closeButtonHandler={closeButtonHandler}>
          <FormAuth
            closeButtonHandler={closeButtonHandler}
            loginHandler={loginHandler}
          />
        </Modal>
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
