import styled from 'styled-components';

export const StyledReviews = styled.section``;

export const StyledSliderPag = styled.div`
  cursor: pointer;
  text-align: center;
  margin-top: 20px;

  span {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 5px;
  }
`;
