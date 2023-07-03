import styled from 'styled-components';
import { StyledField } from './StyledField';

export const StyledCheckbox = styled(StyledField)`
  position: relative;
  visibility: hidden;
  cursor: pointer;
  display: inline-block;
  margin-right: auto;
  line-height: 40px;

  &::before {
    content: '';
    visibility: visible;
    position: absolute;
    display: inline-block;
    top: 1px;
    left: 0;
    width: 13px;
    height: 13px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  &[type='checkbox']:checked {
    &:before {
      background-image: url('images/check-icon.png');
      background-color: ${({ theme }) => theme.colors.primary};
      background-size: 10px;
      background-repeat: no-repeat;
      background-position: 50%;
    }
  }
`;
