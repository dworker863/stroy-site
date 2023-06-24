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
import { deleteVideo } from '../../../api/api';
import { useRouter } from 'next/router';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoCard: FC<TVideoCardProps> = ({
  auth,
  video,
  showVideoFormHandler,
}) => {
  const router = useRouter();

  const updateVideoHandler = () => {
    showVideoFormHandler();
  };
  const deleteVideoHandler = () => {
    deleteVideo(video.id as number);
    router.push(router.pathname, undefined, { scroll: false });
  };

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
