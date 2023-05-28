import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledPhotosWrapper = styled.div`
  display: flex;
`;

export const StyledPhoto = styled.div`
  position: relative;
  width: max-content;

  img {
    height: 100px;
  }
`;

export const StyledPhotosCloseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
