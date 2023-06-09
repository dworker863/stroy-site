import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const StyledCardProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 550px;
  margin-bottom: 40px;
  padding-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;

  .swiper {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 576px) {
    width: 300px;
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
  justify-content: space-around;

  @media (max-width: 576px) {
    flex-direction: column;
  }
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

  @media (max-width: 576px) {
    width: calc(100% - 10px);
  }
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
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50px;
  transform: translateY(-50%);

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
