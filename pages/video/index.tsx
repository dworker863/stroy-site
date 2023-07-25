import { NextPage } from 'next';
import { useContext, useState } from 'react';
import { StyledPage } from '../../commonStyles/StyledPage';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import Container from '../../components/Blocks/Container/Container';
import FormVideo from '../../components/Blocks/FormVideo/FormVideo';
import Button from '../../components/Elements/Button/Button';
import { AppContext } from '../../components/Sections/Layout/Layout';
import { GetServerSideProps } from 'next';
import { TVideoPageProps } from './stylesTypes/TVideoPage';
import Video from '../../components/Blocks/Video/Video';
import { StyledCalculatorDesc } from '../calculator/stylesTypes/StyledCalculatorPage';
import { StyledVideos } from './stylesTypes/StyledVideoPage';

const VideoPage: NextPage<TVideoPageProps> = ({ videos }) => {
  const { auth } = useContext(AppContext);
  const [showVideoForm, setShowVideoForm] = useState(false);

  const showVideoFormHandler = () => {
    setShowVideoForm(!showVideoForm);
  };

  return (
    <StyledPage>
      <Container column>
        <StyledTitle>Видео</StyledTitle>
        <StyledCalculatorDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          non modi, molestias soluta perspiciatis sequi distinctio, nemo earum
          qui ut maxime voluptatibus voluptates. Sint aliquam excepturi alias,
          optio iure possimus. Nisi omnis quis asperiores quae dolorum assumenda
          nemo rem, quam dignissimos optio, dolorem expedita unde saepe laborum.
          Doloribus quas obcaecati magnam, rem unde error quis vero hic, nam
          itaque distinctio. Culpa, in unde saepe, perferendis dolor officia
          repellendus eligendi voluptatibus, maxime fuga cumque quibusdam
          mollitia assumenda! Enim minima dolore, repellat quasi tempore labore,
          accusantium dolores optio assumenda corrupti laudantium omnis. Odit
          labore recusandae molestias nulla consequuntur iste ullam repudiandae.
          Sequi expedita ipsum atque molestias repudiandae facere quidem
          voluptates commodi voluptatum vitae eum recusandae, eveniet officia
          harum esse ea nesciunt ex?
        </StyledCalculatorDesc>
        {auth && (
          <Button
            type="button"
            text="Добавить видео"
            center
            clickHandler={showVideoFormHandler}
          />
        )}
        {auth && showVideoForm && (
          <FormVideo showVideoFormHandler={showVideoFormHandler} />
        )}
        <StyledVideos>
          {videos.map((video, index) => (
            <Video key={index + video.name} auth={auth} video={video} />
          ))}
        </StyledVideos>
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

export default VideoPage;
