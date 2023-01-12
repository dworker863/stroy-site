import React, { FC, ReactNode } from 'react';
import { IContainer } from './IContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<IContainer> = ({ children, column }) => {
  return <StyledContainer column={column}>{children}</StyledContainer>;
};

export default Container;
