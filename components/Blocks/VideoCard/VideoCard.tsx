import { FC } from 'react';
import {
  StyledVideoCard,
  StyledVideoDesc,
  StyledVideoInfo,
  StyledVideoTitle,
} from './StyledVideoCard';
import dynamic from 'next/dynamic';
import { TVideoCardProps } from './TVideoCard';
import EditButtons from '../../Elements/EditButtons/EditButtons';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoCard: FC<TVideoCardProps> = ({ auth, video }) => {
  const updateVideoHandler = () => {};
  const deleteVideoHandler = () => {};

  return (
    <StyledVideoCard>
      <StyledVideoTitle>
        {video.name}
        {auth && (
          <EditButtons
            entityId={video.id as number}
            updateBtnHandler={updateVideoHandler}
            deleteBtnHandler={deleteVideoHandler}
            styles="video"
          />
        )}
      </StyledVideoTitle>
      <StyledVideoInfo>
        <ReactPlayer
          url={video.link || video.video}
          width={300}
          height={176}
          controls
        />
        <StyledVideoDesc>{video.description}</StyledVideoDesc>
      </StyledVideoInfo>
    </StyledVideoCard>
  );
};

export default VideoCard;
