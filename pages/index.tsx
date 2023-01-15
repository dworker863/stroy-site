import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardReview from '../components/Blocks/CardReview/CardReview';
import Container from '../components/Blocks/Container/Container';
import {
  StyledHome,
  StyledHomeDesc,
  StyledHomeTitle,
  StyledSliderPag,
} from './StyledHome';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <StyledHome>
      <Container column>
        <StyledHomeTitle>Lorem ipsum</StyledHomeTitle>
        <StyledHomeDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorum eligendi reprehenderit et sit porro, maiores fuga cupiditate
          nam, totam sint modi. Earum fuga quae veritatis, quas maiores
          quibusdam libero? Numquam, reprehenderit? Suscipit corporis fugiat
          molestiae inventore voluptates amet tempore perspiciatis possimus
          animi est? Voluptatem similique quisquam consequatur perspiciatis. Ut
          velit doloribus explicabo hic cum. Accusantium, quo. Laudantium, quas
          voluptatum. Eveniet beatae provident totam voluptate tenetur, autem
          maiores reiciendis ut quasi natus ipsum consectetur incidunt
          laboriosam dolorem perferendis obcaecati iure a veritatis. Excepturi
          quibusdam perferendis velit, cumque maxime ducimus cupiditate? Sed
          culpa enim eveniet voluptate praesentium quia facilis perspiciatis,
          architecto, suscipit amet numquam corrupti iusto itaque ipsam odit
          minus reiciendis sit optio doloremque repellat recusandae! Debitis
          quaerat iure optio accusamus? Voluptatum porro at aliquid distinctio
          magnam omnis alias praesentium cumque nisi optio repudiandae
          perferendis tempora suscipit natus, ad obcaecati, excepturi velit
          facilis impedit doloremque. Incidunt cupiditate dicta atque sequi
          eius. Sed accusantium, earum aliquam voluptatum sunt, quam laudantium
          consectetur quis atque corrupti, numquam sint tenetur architecto? Amet
          ullam blanditiis itaque possimus, cumque adipisci minus provident quas
          ratione voluptates cupiditate facilis. Temporibus nesciunt, architecto
          autem fugiat dicta provident alias aliquid deserunt ut consectetur,
          quae vero deleniti totam ipsa culpa quos debitis sit hic itaque,
          exercitationem quas unde? Dicta debitis corrupti sunt. Consequuntur,
          qui sit. Laboriosam soluta quo consectetur amet veritatis ab, adipisci
          et minima vero provident praesentium eligendi. Libero, nisi. Unde
          ullam commodi rerum? Dicta fuga pariatur accusantium optio modi
          similique.
        </StyledHomeDesc>
      </Container>
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
    </StyledHome>
  );
}
