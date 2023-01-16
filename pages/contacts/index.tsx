import React from 'react';
import ContactsBlock from '../../components/Blocks/ContactsBlock/ContactsBlock';
import Container from '../../components/Blocks/Container/Container';
import { StyledTitle } from '../../components/commonStyles/StyledTitle';
import { StyledContacts } from './StyledContacts';

const Contacts = () => {
  return (
    <StyledContacts>
      <Container column>
        <StyledTitle>Контакты</StyledTitle>
        <ContactsBlock />
      </Container>
    </StyledContacts>
  );
};

export default Contacts;
