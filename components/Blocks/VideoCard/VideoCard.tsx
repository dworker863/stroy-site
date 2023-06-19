import { FC } from 'react';
import { StyledVideoCard, StyledVideoDesc } from './StyledVideoCard';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoCard: FC = () => {
  return (
    <StyledVideoCard>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={300}
        height={176}
        controls
      />
      <StyledVideoDesc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consequuntur quasi eveniet doloremque vitae officiis. Aperiam esse
        perferendis asperiores beatae, praesentium impedit inventore
        perspiciatis, quos repellendus distinctio quis ea aliquam?
      </StyledVideoDesc>
    </StyledVideoCard>
  );
};

export default VideoCard;
