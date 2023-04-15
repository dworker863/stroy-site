import { GetServerSideProps } from 'next';
import Container from '../components/Blocks/Container/Container';
import Reviews from '../components/Blocks/Reviews/Reviews';
import { StyledTitle } from '../components/commonStyles/StyledTitle';
import { StyledHome, StyledHomeDesc } from './StyledHome';
import cookie from 'cookie';
import { IService } from '../commonInterfaces/IService';
import Link from 'next/link';
import FormAuth from '../components/Blocks/FormAuth/FormAuth';
import Button from '../components/Elements/Button/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';

type THomeProps = {
  auth: boolean;
  services: IService[];
};

export default function Home({ auth, services }: THomeProps) {
  const router = useRouter();
  const [modalActive, setModalActive] = useState(false);

  const closeButtonHandler = () => {
    setModalActive(false);
  };

  const loginHandler = () => {
    document.cookie = cookie.serialize('token', '');
    setModalActive(true);
  };

  const logoutHandler = () => {
    document.cookie = cookie.serialize('token', '');
    setModalActive(false);
    router.push('/', undefined, { scroll: false });
  };

  return (
    <StyledHome>
      <FormAuth active={modalActive} onClick={closeButtonHandler} />
      <Container column>
        <StyledTitle>О нас</StyledTitle>
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
        <StyledTitle>Отзывы</StyledTitle>
        <Button
          type="button"
          text={!auth ? 'Войти' : 'Выйти'}
          onClick={auth ? logoutHandler : loginHandler}
        />
      </Container>
      <Reviews />
    </StyledHome>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = cookie.parse(ctx.req.headers.cookie || '');
  const auth = !!cookies.token;

  const res = await fetch('http://192.168.1.2:8000/services');

  const services = await res.json();
  console.log(services);

  return {
    props: {
      auth,
      services,
    },
  };
};
