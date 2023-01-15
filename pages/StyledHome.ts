import styled from 'styled-components';

export const StyledHome = styled.main`
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: #fff;
`;

export const StyledHomeTitle = styled.h2`
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const StyledHomeDesc = styled.p`
  margin-bottom: 80px;
`;

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
