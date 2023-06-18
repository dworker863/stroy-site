import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledThumbnailsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const StyledThumbnail = styled.div`
  position: relative;
  width: max-content;

  img {
    height: 100px;
  }
`;

export const StyledThumbnailsCloseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;
