import { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { deleteService } from '../../../api/api';
import FormService from '../FormService/FormService';
import { TServiceProps } from './TService';
import { StyledService, StyledServiceWrapper } from './StyledService';
import { CalculatorContext } from '../../../pages/calculator';
import EditButtons from '../../Elements/EditButtons/EditButtons';

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
          <EditButtons
            entityId={service.id as number}
            updateBtnHandler={updateServiceHandler}
            deleteBtnHandler={deleteServiceHandler}
          />
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
