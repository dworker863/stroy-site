import React, { FC } from 'react';
import { StyledAddress, StyledContacts } from './StyledContactsBlock';

const ContactsBlock: FC = () => {
  return (
    <StyledContacts>
      <StyledAddress>Адрес: г. Алматы, ул. Достык, 78</StyledAddress>
      <StyledAddress>Телефон: +7 777 777 77 77</StyledAddress>
      <StyledAddress>Почта: dworker863@gmail.com</StyledAddress>
    </StyledContacts>
  );
};

export default ContactsBlock;
