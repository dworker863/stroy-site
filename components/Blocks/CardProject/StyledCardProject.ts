import styled from 'styled-components';

export const StyledCardProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;

  .swiper img {
    width: 598px;
  }
`;

export const StyledCardProjectTitle = styled.div`
  padding: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  text-align: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledCardProjectContent = styled.div`
  display: flex;
`;

export const StyledCardProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 50%;
  padding: 25px 10px;
`;

export const StyledCardProjectDesc = styled.div`
  padding: 10px;
  text-align: center;
`;

export const StyledCardProjectReview = styled.div`
  text-align: center;
`;

export const StyledCardProjectPrice = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCardProjectDate = styled.div`
  text-align: center;
`;

export const StyledCardProjectSliderButtons = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const StyledCardProjectSliderPrev = styled.span``;
export const StyledCardProjectSliderNext = styled.span``;
