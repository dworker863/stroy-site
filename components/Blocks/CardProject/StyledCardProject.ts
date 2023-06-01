import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledCardProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 550px;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;

  .swiper {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const StyledCardProjectTitle = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  text-align: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledCardProjectContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCardProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 48%;
  min-height: 300px;
  margin: 5px;
  border-radius: 10px;

  box-shadow: 1px 1px 5px #292828;
`;

export const StyledCardProjectDesc = styled.div`
  padding: 10px;
  text-align: center;
`;

export const StyledCardProjectReview = styled.div`
  text-align: center;
`;

export const StyledCardProjectPrice = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCardProjectDate = styled.div`
  text-align: center;
`;

export const StyledCardProjectSliderButtons = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const StyledCardProjectSliderPrev = styled.span``;
export const StyledCardProjectSliderNext = styled.span``;

export const StyledProjectBtns = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  width: 100px;
  padding: 10px 30px;
  border-bottom-left-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledProjectBtn = styled(FontAwesomeIcon)`
  color: #fff;

  &:last-child {
    margin-left: 10px;
  }
`;
