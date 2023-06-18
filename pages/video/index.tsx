import { NextPage } from 'next';
import { useContext, useState } from 'react';
import { StyledPage } from '../../commonStyles/StyledPage';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import Container from '../../components/Blocks/Container/Container';
import FormVideo from '../../components/Blocks/FormVideo/FormVideo';
import VideoCard from '../../components/Blocks/VideoCard/VideoCard';
import Button from '../../components/Elements/Button/Button';
import { AppContext } from '../../components/Sections/Layout/Layout';

const Video: NextPage = () => {
  const { auth } = useContext(AppContext);
  const [showVideoForm, setShowVideoForm] = useState(false);

  const showVideoFormHandler = () => {
    setShowVideoForm(!showVideoForm);
  };

  return (
    <StyledPage>
      <Container column>
        {auth && (
          <Button
            type="button"
            text="Добавить видео"
            center
            onClick={showVideoFormHandler}
          />
        )}
        {showVideoForm && <FormVideo />}
        <StyledTitle>Видео</StyledTitle>
        <VideoCard />
      </Container>
    </StyledPage>
  );
};

export default Video;
