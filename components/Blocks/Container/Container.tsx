import { FC } from 'react';
import { TContainerProps } from './TContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<TContainerProps> = ({ children, column }) => {
  return <StyledContainer column={column}>{children}</StyledContainer>;
};

export default Container;
