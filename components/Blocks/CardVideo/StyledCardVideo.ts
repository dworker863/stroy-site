import styled from 'styled-components';

export const StyledCardVideo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.grey};
  box-shadow: 1px 1px 5px #292828;
  margin-bottom: 40px;
`;

export const StyledVideoTitle = styled.div`
  position: relative;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledVideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const StyledVideoPlayer = styled.div`
  width: 500px;
  height: 302px;

  @media (max-width: 1400px) {
    width: 450px;
    height: calc(450px / ${({ theme }) => theme.sizes.videoRatio});
  }

  @media (max-width: 1200px) {
    width: 400px;
    height: calc(400px / ${({ theme }) => theme.sizes.videoRatio});
  }

  @media (max-width: 992px) {
    width: 300px;
    height: calc(300px / ${({ theme }) => theme.sizes.videoRatio});
  }

  @media (max-width: 768px) {
    width: 480px;
    height: calc(500px / ${({ theme }) => theme.sizes.videoRatio});
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    width: 400px;
    height: calc(400px / ${({ theme }) => theme.sizes.videoRatio});
  }

  @media (max-width: 472px) {
    width: 270px;
    height: calc(300px / ${({ theme }) => theme.sizes.videoRatio});
  }
`;

export const StyledVideoDesc = styled.p`
  width: 55%;
  word-wrap: break-word;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 400px;
  }

  @media (max-width: 472px) {
    width: 270px;
  }
`;
