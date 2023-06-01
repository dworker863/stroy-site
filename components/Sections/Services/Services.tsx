import React, { FC, useContext, useState } from 'react';
import FormService from '../../Blocks/FormService/FormService';
import Search from '../../Elements/Search/Search';
import Service from '../../Blocks/Service/Service';
import { IServices } from './IServices';
import { CalculatorContext } from '../../../pages/calculator';
import { StyledServices, StyledServicesWrapper } from './StyledServices';

const Services: FC<IServices> = ({ auth, services }) => {
  const { serviceButtonHandler } = useContext(CalculatorContext);
  const [searchValue, setSearchValue] = useState('');

  const currentServices = services.filter((service) => {
    const regex = new RegExp(`^${searchValue}`);
    return regex.test(service.name);
  });

  const searchChangeHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <StyledServices>
      <Search onChange={searchChangeHandler} />
      {auth && <FormService />}
      <StyledServicesWrapper>
        {currentServices.map((service) => (
          <Service
            key={service.id + service.name}
            auth={auth}
            service={service}
            onClick={serviceButtonHandler.bind(null, service)}
          />
        ))}
      </StyledServicesWrapper>
    </StyledServices>
  );
};

export default Services;
