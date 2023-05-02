import React, { FC } from 'react';
import { StyledRedSpan } from '../../../commonStyles/StyledRedSpan';
import { StyledLogo } from './StyledLogo';

const Logo: FC = () => {
  return (
    <StyledLogo>
      <StyledRedSpan>ST</StyledRedSpan>roy
    </StyledLogo>
  );
};

export default Logo;
