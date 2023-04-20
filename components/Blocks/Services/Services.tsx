import React, { FC, useState } from 'react';
import FormService from '../FormService/FormService';
import Search from '../Search/Search';
import Service from '../Service/Service';
import { IServices } from './IServices';

const Services: FC<IServices> = ({ auth, services }) => {
  const [searchValue, setSearchValue] = useState('');

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
        <Service key={service.id + service.name} service={service} />
      ))}
    </>
  );
};

export default Services;
