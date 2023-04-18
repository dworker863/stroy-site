import React, { FC } from 'react';
import FormService from '../FormService/FormService';
import Service from '../Service/Service';
import { IServices } from './IServices';

const Services: FC<IServices> = ({ auth, services }) => {
  return (
    <>
      {auth && <FormService />}
      {services.map((service) => (
        <Service key={service.id + service.name} service={service} />
      ))}
    </>
  );
};

export default Services;
