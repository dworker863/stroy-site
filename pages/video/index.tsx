import { FC, useContext } from 'react';
import { StyledPage } from '../../commonStyles/StyledPage';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import Container from '../../components/Blocks/Container/Container';
import VideoCard from '../../components/Blocks/VideoCard/VideoCard';
import { AppContext } from '../../components/Sections/Layout/Layout';

const Video: FC = () => {
  const { auth } = useContext(AppContext);

  return (
    <StyledPage>
      <Container column>
        <StyledTitle>Видео</StyledTitle>
        <VideoCard />
      </Container>
    </StyledPage>
  );
};

export default Video;
