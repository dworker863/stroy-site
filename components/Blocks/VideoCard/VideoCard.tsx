import { FC } from 'react';
import { StyledVideoCard, StyledVideoDesc } from './StyledVideoCard';
import dynamic from 'next/dynamic';
import { TVideoCardProps } from './TVideoCard';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoCard: FC<TVideoCardProps> = ({ video }) => {
  return (
    <StyledVideoCard>
      <ReactPlayer
        url={video.link || video.video}
        width={300}
        height={176}
        controls
      />
      <StyledVideoDesc>{video.description}</StyledVideoDesc>
    </StyledVideoCard>
  );
};

export default VideoCard;
