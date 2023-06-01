import React, { FC, SyntheticEvent, useContext, useState } from 'react';
import { A11y, EffectFlip, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardReview from '../CardReview/CardReview';
import { ICardProject } from './ICardProject';
import {
  StyledCardProject,
  StyledCardProjectContent,
  StyledCardProjectDesc,
  StyledCardProjectInfo,
  StyledCardProjectPrice,
  StyledCardProjectSliderButtons,
  StyledCardProjectSliderNext,
  StyledCardProjectSliderPrev,
  StyledCardProjectTitle,
  StyledProjectBtn,
  StyledProjectBtns,
} from './StyledCardProject';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import { ProjectsContext } from '../../../pages/projects';
import { deleteProject } from '../../../api/api';
import { useRouter } from 'next/router';
import Image from 'next/image';

const CardProject: FC<ICardProject> = ({
  project,
  updateProjectFormHandler,
}) => {
  const { auth } = useContext(ProjectsContext);
  const router = useRouter();
  const [originalWidth, setOriginalWidth] = useState(1);
  const [originalHeight, setOriginalHeight] = useState(1);
  const [aspectRatio, setAspectRatio] = useState(1);

  const targetWidth = 250;

  const imageLoadHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const image = e.target as HTMLImageElement;
    setOriginalWidth(image.naturalWidth);
    setOriginalHeight(image.naturalHeight);

    setAspectRatio(
      Number((image.naturalWidth / image.naturalHeight).toFixed(2)),
    );
  };

  const deleteProjectHandler = async (id?: number) => {
    const project = await deleteProject(id);
    router.push('./projects');
  };

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
        <StyledCardProjectSliderButtons>
          <StyledCardProjectSliderPrev className="swiper-button-prev" />
          <StyledCardProjectSliderNext className="swiper-button-next" />
        </StyledCardProjectSliderButtons>
        {project.images.map((image) => (
          <SwiperSlide key={project.id + project.name}>
            <Image
              src={image}
              alt={project.name}
              width={targetWidth}
              height={targetWidth / aspectRatio}
              onLoad={imageLoadHandler}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledCardProjectContent>
        <StyledCardProjectInfo>
          <StyledCardProjectPrice>
            {project.price + ' тг'}
          </StyledCardProjectPrice>
          <StyledCardProjectDesc>{project.description}</StyledCardProjectDesc>
        </StyledCardProjectInfo>
        <CardReview review={project.projectReview} />
      </StyledCardProjectContent>
      {auth && (
        <StyledProjectBtns>
          <StyledProjectBtn
            icon={faPen as IconProp}
            onClick={updateProjectFormHandler}
          />
          <StyledProjectBtn
            icon={faTrash as IconProp}
            onClick={deleteProjectHandler.bind(null, project.id)}
          />
        </StyledProjectBtns>
      )}
    </StyledCardProject>
  );
};

export default CardProject;
