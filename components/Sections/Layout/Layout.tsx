import {
  createContext,
  useEffect,
  useState,
  MouseEvent,
  useRef,
  FC,
} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Roboto } from '@next/font/google';
import FormAuth from '../../Blocks/FormAuth/FormAuth';
import { TAppContext } from './TLayout';
import { StyledOverlay } from './StyledLayout';
import Modal from '../../Blocks/Modal/Modal';
import FormRegistration from '../../Blocks/FormRegistration/FormRegistration';
import { checkJwt } from '../../../api/api';
import { TWrapper } from '../../../commonTypesInterfaces/TWrapper';
import { useRouter } from 'next/router';

const roboto = Roboto({ weight: '400', subsets: ['latin'], display: 'swap' });

export const AppContext = createContext<TAppContext>({
  auth: false,
  setModalActive: () => {},
  logoutHandler: () => {},
});

const Layout: FC<TWrapper> = ({ children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const registrBtnHandler = () => {
    setModalType('registration');
  };

  const loginBtnHandler = () => {
    setModalType('login');
  };

  const submitHandler = () => {
    setAuth(true);
    setModalActive(false);
    router.push(router.pathname, undefined, { scroll: false });
  };

  const logoutHandler = () => {
    localStorage.setItem('token', '');
    setAuth(false);
  };

  const overlayClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalActive && e.target !== modalRef.current) {
      setModalActive(false);
    }
  };

  return (
    <AppContext.Provider value={{ auth, setModalActive, logoutHandler }}>
      <div className={roboto.className}>
        <Modal
          ref={modalRef}
          active={modalActive}
          closeButtonHandler={closeButtonHandler}
        >
          {modalType === 'registration' ? (
            <FormRegistration
              loginBtnHandler={loginBtnHandler}
              submitHandler={submitHandler}
            />
          ) : (
            <FormAuth
              submitHandler={submitHandler}
              registrBtnHandler={registrBtnHandler}
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
