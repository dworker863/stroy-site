import { FC, SyntheticEvent, useContext, useEffect, useState } from 'react';
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

import { ProjectsContext } from '../../../pages/projects';
import { deleteProject } from '../../../api/api';
import { useRouter } from 'next/router';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

const CardProject: FC<ICardProject> = ({
  project,
  updateProjectFormHandler,
}) => {
  const { auth } = useContext(ProjectsContext);
  const router = useRouter();
  const [smallImage, setSmallImage] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 576px)`);
    if (media.matches) {
      setSmallImage(true);
    }
  }, []);

  const targetWidth = smallImage ? 250 : 450;

  const imageLoadHandler = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const image = e.target as HTMLImageElement;

    setAspectRatio(
      Number((image.naturalWidth / image.naturalHeight).toFixed(2)),
    );
  };

  const deleteProjectHandler = async (id?: number) => {
    await deleteProject(id);
    router.push('./projects');
  };

  return (
    <StyledCardProject>
      <StyledCardProjectTitle>{project.name}</StyledCardProjectTitle>
      <Swiper
        modules={[Navigation, EffectFlip, A11y]}
        grabCursor={true}
        slidesPerView={1}
        effect={'flip'}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <StyledCardProjectSliderButtons>
          <StyledCardProjectSliderPrev className="swiper-button-prev" />
          <StyledCardProjectSliderNext className="swiper-button-next" />
        </StyledCardProjectSliderButtons>
        {project.images.map((image) => (
          <SwiperSlide
            key={project.id + project.name}
            style={{
              width: `${targetWidth}`,
              height: `calc(${targetWidth}px / ${aspectRatio})`,
            }}
          >
            <Image
              fill
              src={image}
              alt={project.name}
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
