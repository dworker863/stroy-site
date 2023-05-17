import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { deleteService } from '../../../api/api';
import FormService from '../FormService/FormService';
import { IServiceProps } from './IService';
import {
  StyledService,
  StyledServiceBtn,
  StyledServiceBtns,
  StyledServiceWrapper,
} from './StyledService';

const Service: FC<IServiceProps> = ({ auth, service, onClick }) => {
  const [showServiceForm, setShowServiceForm] = useState(false);
  const router = useRouter();

  const updateServiceHandler = () => {
    setShowServiceForm(!showServiceForm);
  };

  const deleteServiceHandler = async (id?: number) => {
    const result = await deleteService(id);
    router.push('calculator', undefined, { scroll: false });
  };

  return (
    <StyledServiceWrapper>
      <StyledService onClick={onClick}>
        {service.name}
        {auth && (
          <StyledServiceBtns>
            <StyledServiceBtn
              icon={faPen as IconProp}
              onClick={updateServiceHandler}
            />
            <StyledServiceBtn
              icon={faTrash as IconProp}
              onClick={deleteServiceHandler.bind(null, service.id)}
            />
          </StyledServiceBtns>
        )}
      </StyledService>
      {showServiceForm && (
        <FormService
          id={service.id}
          name={service.name}
          measure={service.measure}
          price={service.price}
          setShowServiceForm={setShowServiceForm}
        />
      )}
    </StyledServiceWrapper>
  );
};

export default Service;
