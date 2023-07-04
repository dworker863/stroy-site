import { FC, useState } from 'react';
import { TVideoProps } from './TVideo';
import CardVideo from '../CardVideo/CardVideo';
import FormVideo from '../FormVideo/FormVideo';

const Video: FC<TVideoProps> = ({ video, auth }) => {
  const [showVideoForm, setShowVideoForm] = useState(false);

  const updateVideoFormHandler = () => {
    setShowVideoForm(!showVideoForm);
  };

  return (
    <>
      <CardVideo
        auth={auth}
        video={video}
        updateVideoFormHandler={updateVideoFormHandler}
      />
      {showVideoForm && (
        <FormVideo
          video={video}
          updateVideoFormHandler={updateVideoFormHandler}
        />
      )}
    </>
  );
};

export default Video;
