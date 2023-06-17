import { FC, useState } from 'react';
import FormService from '../../Blocks/FormService/FormService';
import Search from '../../Elements/Search/Search';
import Service from '../../Blocks/Service/Service';
import { TServicesProps } from './TServices';
import { StyledServices, StyledServicesWrapper } from './StyledServices';

const Services: FC<TServicesProps> = ({ auth, services }) => {
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
      <Search changeHandler={searchChangeHandler} />
      {auth && <FormService />}
      <StyledServicesWrapper>
        {currentServices.map((service) => (
          <Service
            key={service.id + service.name}
            auth={auth}
            service={service}
          />
        ))}
      </StyledServicesWrapper>
    </StyledServices>
  );
};

export default Services;
