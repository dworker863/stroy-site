import { FC, useContext } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardReview from '../../Blocks/CardReview/CardReview';
import { StyledReviews, StyledSliderPag } from './StyledReviews';
import { HomeContext } from '../../../pages';
import { StyledTitle } from '../../../commonStyles/StyledTitle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews: FC = () => {
  const { reviews } = useContext(HomeContext);

  return (
    <StyledReviews>
      <StyledTitle>Отзывы</StyledTitle>
      <Swiper
        updateOnWindowResize
        observer
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '"></span>';
          },
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review: any) => (
          <SwiperSlide key={review.name + review.id}>
            <CardReview review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledSliderPag className="custom-swiper-pagination" />
    </StyledReviews>
  );
};

export default Reviews;
