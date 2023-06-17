import { FC, useContext, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { deleteService } from '../../../api/api';
import FormService from '../FormService/FormService';
import { TServiceProps } from './TService';
import {
  StyledService,
  StyledServiceBtn,
  StyledServiceBtns,
  StyledServiceWrapper,
} from './StyledService';
import { CalculatorContext } from '../../../pages/calculator';

const Service: FC<TServiceProps> = ({ auth, service }) => {
  const router = useRouter();
  const { serviceButtonHandler } = useContext(CalculatorContext);
  const [showServiceForm, setShowServiceForm] = useState(false);

  const updateServiceHandler = () => {
    setShowServiceForm(!showServiceForm);
  };

  const deleteServiceHandler = async (id?: number) => {
    await deleteService(id);
    router.push('calculator', undefined, { scroll: false });
  };

  return (
    <StyledServiceWrapper>
      <StyledService onClick={serviceButtonHandler.bind(null, service)}>
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
          showServiceFormHandler={setShowServiceForm}
        />
      )}
    </StyledServiceWrapper>
  );
};

export default Service;
