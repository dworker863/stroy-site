import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import {
  StyledCopyrights,
  StyledFooter,
  StyledFooterBlock,
  StyledFooterSocials,
} from './StyledFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Montserrat } from '@next/font/google';
import Nav from '../../Blocks/Nav/Nav';
import ContactsBlock from '../../Blocks/ContactsBlock/ContactsBlock';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

const Footer: FC = () => {
  return (
    <StyledFooter className={montserrat.className}>
      <Container>
        <StyledFooterBlock>
          <ContactsBlock />
          <Nav column />
          <StyledFooterSocials>
            <a
              href="https://wa.me/77776196190"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://vk.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faVk} size="2x" />
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </StyledFooterSocials>
        </StyledFooterBlock>
        <StyledCopyrights>&#169; dworker 2023г.</StyledCopyrights>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
