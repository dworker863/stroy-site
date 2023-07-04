import { FC } from 'react';
import { StyledBarProgress, StyledProgress } from './StyledBarProgress';
import { TBarProgressProps } from './TBarProgress';

const BarProgress: FC<TBarProgressProps> = ({ percent }) => {
  return (
    <StyledBarProgress>
      <StyledProgress percent={percent} />
    </StyledBarProgress>
  );
};

export default BarProgress;
