import { FC, useState } from 'react';
import { TVideoProps } from './TVideo';
import VideoCard from '../../components/Blocks/VideoCard/VideoCard';
import FormVideo from '../Blocks/FormVideo/FormVideo';

const Video: FC<TVideoProps> = ({ video, auth }) => {
  const [showVideoForm, setShowVideoForm] = useState(false);

  const showVideoFormHandler = () => {
    setShowVideoForm(!showVideoForm);
  };

  return (
    <>
      <VideoCard
        auth={auth}
        video={video}
        showVideoFormHandler={showVideoFormHandler}
      />
      {showVideoForm && <FormVideo video={video} />}
    </>
  );
};

export default Video;
