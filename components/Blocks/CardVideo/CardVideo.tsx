import { FC, useState } from 'react';
import {
  StyledCardVideo,
  StyledVideoDesc,
  StyledVideoInfo,
  StyledVideoPlayer,
  StyledVideoTitle,
} from './StyledCardVideo';
import dynamic from 'next/dynamic';
import { TCardVideoProps } from './TCardVideo';
import EditButtons from '../../Elements/EditButtons/EditButtons';
import { deleteVideo } from '../../../api/api';
import { useRouter } from 'next/router';
import { StyledFullText } from '../../../commonStyles/StyledFullText';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoCard: FC<TCardVideoProps> = ({
  auth,
  video,
  showVideoFormHandler,
}) => {
  const router = useRouter();
  const [showText, setShowText] = useState(false);

  const updateVideoHandler = () => {
    showVideoFormHandler();
  };
  const deleteVideoHandler = () => {
    deleteVideo(video.id as number);
    router.push(router.pathname, undefined, { scroll: false });
  };

  const showFullTextHandler = () => {
    setShowText(!showText);
  };

  return (
    <StyledCardVideo>
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
        <StyledVideoPlayer>
          <ReactPlayer
            url={video.link || video.video}
            width="100%"
            height="100%"
            controls
          />
        </StyledVideoPlayer>
        <StyledVideoDesc>
          {!showText &&
          video?.description &&
          video?.description.length > 200 ? (
            <>
              {video?.description.slice(0, 200) + '...'}
              <StyledFullText onClick={showFullTextHandler}>
                Читать
              </StyledFullText>
            </>
          ) : !video?.description ? (
            ''
          ) : video?.description.length > 200 ? (
            <>
              {video?.description + '   '}
              <StyledFullText onClick={showFullTextHandler}>
                Скрыть
              </StyledFullText>
            </>
          ) : (
            video.description
          )}
        </StyledVideoDesc>
      </StyledVideoInfo>
    </StyledCardVideo>
  );
};

export default VideoCard;
