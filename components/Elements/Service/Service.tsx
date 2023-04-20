import React, { FC } from 'react';
import { IServiceProps } from './IService';

const Service: FC<IServiceProps> = ({ service, onClick }) => {
  return <div onClick={onClick}>{service.name}</div>;
};

export default Service;
