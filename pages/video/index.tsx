import { NextPage } from 'next';
import { useContext, useState } from 'react';
import { StyledPage } from '../../commonStyles/StyledPage';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import Container from '../../components/Blocks/Container/Container';
import FormVideo from '../../components/Blocks/FormVideo/FormVideo';
import VideoCard from '../../components/Blocks/VideoCard/VideoCard';
import Button from '../../components/Elements/Button/Button';
import { AppContext } from '../../components/Sections/Layout/Layout';
import { GetServerSideProps } from 'next';
import { TVideoPageProps } from './TVideoPage';

const Video: NextPage<TVideoPageProps> = ({ videos }) => {
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
        {videos.map((video, index) => (
          <VideoCard key={index + video.name} auth={auth} video={video} />
        ))}
      </Container>
    </StyledPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('http://192.168.1.4:8000/videos');
  const videos = await res.json();

  return {
    props: {
      videos,
    },
  };
};

export default Video;
