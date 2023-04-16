import React, {
  ReactNode,
  useEffect,
  useState,
  MouseEvent,
  useRef,
} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import { IAppContext } from './ILayout';
import { StyledOverlay } from './StyledLayot';
import Modal from '../../Blocks/Modal/Modal';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
export const AppContext = React.createContext<IAppContext>({
  auth: false,
  setAuth: () => {},
  loginHandler: () => {},
  logoutHandler: () => {},
});

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const [modalActive, setModalActive] = useState(false);
  const [auth, setAuth] = useState(false);
  const [modalType, setModalType] = useState('login');

  useEffect(() => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem('token') || '';
      setAuth(!!token);
    }
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

  const overlayClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalActive && e.target !== modalRef.current) {
      setModalActive(false);
    }
  };

  return (
    <AppContext.Provider value={{ auth, setAuth, loginHandler, logoutHandler }}>
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
