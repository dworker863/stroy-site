import React, { useEffect, useState, MouseEvent, useRef, FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import { TAppContext, TLayoutProps } from './TLayout';
import { StyledOverlay } from './StyledLayot';
import Modal from '../../Blocks/Modal/Modal';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';
import { checkJwt } from '../../../api/api';
import { IFormAuthValues } from '../../Blocks/FormAuth/IFormAuth';

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' });

export const AppContext = React.createContext<TAppContext>({
  auth: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

const Layout: FC<TLayoutProps> = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const [modalActive, setModalActive] = useState(false);
  const [auth, setAuth] = useState(false);
  const [modalType, setModalType] = useState('login');

  useEffect(() => {
    const checkAuth = async () => {
      if (typeof window !== undefined) {
        const jwtAuth = await checkJwt();

        if (typeof jwtAuth === 'boolean') {
          setAuth(jwtAuth);
        }
      }
    };

    checkAuth();
  }, [auth]);

  const closeButtonHandler = () => {
    setModalActive(false);
  };

  const registrModeHandler = () => {
    setModalType('registration');
  };

  const loginModeHandler = () => {
    setModalType('login');
  };

  const loginHandler = () => {
    setAuth(true);
    setModalActive(true);
  };

  const logoutHandler = () => {
    document.cookie = cookie.serialize('token', '');
    localStorage.setItem('token', '');
    setAuth(false);
    router.push('/', undefined, { scroll: false });
  };

  const overlayClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalActive && e.target !== modalRef.current) {
      setModalActive(false);
    }
  };

  return (
    <AppContext.Provider value={{ auth, loginHandler, logoutHandler }}>
      <div className={roboto.className}>
        <Modal
          ref={modalRef}
          active={modalActive}
          closeButtonHandler={closeButtonHandler}
        >
          {modalType === 'registration' ? (
            <FormRegistration loginHandler={loginModeHandler} />
          ) : (
            <FormAuth
              closeButtonHandler={closeButtonHandler}
              submitHandler={loginHandler}
              registrHandler={registrModeHandler}
            />
          )}
        </Modal>
        <StyledOverlay active={modalActive} onClick={overlayClickHandler}>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledOverlay>
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
