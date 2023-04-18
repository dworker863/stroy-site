import React, { FC } from 'react';
import { IServiceProps } from './IService';

const Service: FC<IServiceProps> = ({ service }) => {
  return <div>{service.name}</div>;
};

export default Service;
