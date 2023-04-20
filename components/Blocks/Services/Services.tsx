import React, { FC, useContext, useState } from 'react';
import FormService from '../FormService/FormService';
import Search from '../../Elements/Search/Search';
import Service from '../../Elements/Service/Service';
import { IServices } from './IServices';
import { CalculatorContext } from '../../../pages/calculator';

const Services: FC<IServices> = ({ auth, services }) => {
  const { serviceButtonHandler } = useContext(CalculatorContext);
  const [searchValue, setSearchValue] = useState('');

  console.log(services);

  const currentServices = services.filter((service) => {
    const regex = new RegExp(`^${searchValue}`);
    return regex.test(service.name);
  });

  const searchChangeHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Search onChange={searchChangeHandler} />
      {auth && <FormService />}
      {currentServices.map((service) => (
        <Service
          key={service.id + service.name}
          service={service}
          onClick={serviceButtonHandler.bind(null, service)}
        />
      ))}
    </>
  );
};

export default Services;
