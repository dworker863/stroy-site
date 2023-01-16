import React, { FC } from 'react';
import Container from '../Container/Container';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardReview from '../CardReview/CardReview';
import { StyledReviews, StyledSliderPag } from './StyledReviews';

const Reviews: FC = () => {
  return (
    <StyledReviews>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={20}
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
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
        </Swiper>
      </Container>
      <StyledSliderPag className="custom-swiper-pagination" />
    </StyledReviews>
  );
};

export default Reviews;
