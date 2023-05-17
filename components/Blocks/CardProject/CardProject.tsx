import React, { FC } from 'react';
import { A11y, EffectFlip, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardReview from '../CardReview/CardReview';
import { ICardProject } from './ICardProject';
import {
  StyledCardProject,
  StyledCardProjectContent,
  StyledCardProjectDesc,
  StyledCardProjectInfo,
  StyledCardProjectPrice,
  StyledCardProjectReview,
  StyledCardProjectSliderButtons,
  StyledCardProjectSliderNext,
  StyledCardProjectSliderPrev,
  StyledCardProjectTitle,
} from './StyledCardProject';

const CardProject: FC<ICardProject> = ({ project }) => {
  return (
    <StyledCardProject>
      <StyledCardProjectTitle>{project.name}</StyledCardProjectTitle>
      <Swiper
        modules={[Navigation, EffectFlip, A11y]}
        grabCursor={true}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        // effect={'flip'}
      >
        {project.images.map((image) => (
          <SwiperSlide key={project.id + project.name}>
            <img src={image} alt={project.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledCardProjectSliderButtons>
        <StyledCardProjectSliderPrev className="swiper-button-prev" />
        <StyledCardProjectSliderNext className="swiper-button-next" />
      </StyledCardProjectSliderButtons>
      <StyledCardProjectContent>
        <StyledCardProjectInfo>
          <StyledCardProjectPrice>
            {project.price + ' тг'}
          </StyledCardProjectPrice>
          <StyledCardProjectDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            eligendi sint, autem ratione, minus incidunt illum necessitatibus
            fugiat vitae odio quos eius quis eum, ab unde? Iste earum libero
            totam? Consectetur debitis quos dolorem at cum atque amet harum
            adipisci ipsum in quo optio aut animi eveniet maxime ut, quibusdam
            reprehenderit, iste est repudiandae consequuntur. Incidunt illo
            quaerat minus ad!
          </StyledCardProjectDesc>
        </StyledCardProjectInfo>
        <CardReview />
      </StyledCardProjectContent>
    </StyledCardProject>
  );
};

export default CardProject;
