import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';
import ContactsBlock from '../../components/Blocks/ContactsBlock/ContactsBlock';
import Container from '../../components/Blocks/Container/Container';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import { StyledContacts } from './StyledContacts';

const Contacts = () => {
  const defaultState = {
    center: [43.235015, 76.958805],
    zoom: 16,
  };

  return (
    <StyledContacts>
      <Container column>
        <StyledTitle>Контакты</StyledTitle>
        <ContactsBlock />
        <YMaps>
          <Map defaultState={defaultState} width="100%" height="400px">
            <Placemark geometry={[43.235015, 76.958805]} />
          </Map>
        </YMaps>
      </Container>
    </StyledContacts>
  );
};

export default Contacts;
