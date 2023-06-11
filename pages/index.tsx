import Container from '../components/Blocks/Container/Container';
import Reviews from '../components/Sections/Reviews/Reviews';
import { StyledTitle } from '../commonStyles/StyledTitle';
import { StyledPage } from '../commonStyles/StyledPage';
import { StyledDesc } from '../commonStyles/StyledDesc';
import { GetServerSideProps, NextPage } from 'next';
import { IProject } from '../commonTypesInterfaces/IProject';
import { createContext } from 'react';
import cookie from 'cookie';
import { IReview } from '../commonTypesInterfaces/IReview';

export interface IHome {
  projects: IProject[];
  reviews: (IReview | undefined)[];
}

export const HomeContext = createContext<IHome>({
  projects: [],
  reviews: [],
});

const Home: NextPage<IHome> = ({ projects }) => {
  const reviews = projects
    .filter((project) => project.projectReview)
    .map((project) => project.projectReview);

  return (
    <HomeContext.Provider value={{ projects, reviews }}>
      <StyledPage>
        <Container column>
          <StyledTitle>О нас</StyledTitle>
          <StyledDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolorum eligendi reprehenderit et sit porro, maiores fuga cupiditate
            nam, totam sint modi. Earum fuga quae veritatis, quas maiores
            quibusdam libero? Numquam, reprehenderit? Suscipit corporis fugiat
            molestiae inventore voluptates amet tempore perspiciatis possimus
            animi est? Voluptatem similique quisquam consequatur perspiciatis.
            Ut velit doloribus explicabo hic cum. Accusantium, quo. Laudantium,
            quas voluptatum. Eveniet beatae provident totam voluptate tenetur,
            autem maiores reiciendis ut quasi natus ipsum consectetur incidunt
            laboriosam dolorem perferendis obcaecati iure a veritatis. Excepturi
            quibusdam perferendis velit, cumque maxime ducimus cupiditate? Sed
            culpa enim eveniet voluptate praesentium quia facilis perspiciatis,
            architecto, suscipit amet numquam corrupti iusto itaque ipsam odit
            minus reiciendis sit optio doloremque repellat recusandae! Debitis
            quaerat iure optio accusamus? Voluptatum porro at aliquid distinctio
            magnam omnis alias praesentium cumque nisi optio repudiandae
            perferendis tempora suscipit natus, ad obcaecati, excepturi velit
            facilis impedit doloremque. Incidunt cupiditate dicta atque sequi
            eius. Sed accusantium, earum aliquam voluptatum sunt, quam
            laudantium consectetur quis atque corrupti, numquam sint tenetur
            architecto? Amet ullam blanditiis itaque possimus, cumque adipisci
            minus provident quas ratione voluptates cupiditate facilis.
            Temporibus nesciunt, architecto autem fugiat dicta provident alias
            aliquid deserunt ut consectetur, quae vero deleniti totam ipsa culpa
            quos debitis sit hic itaque, exercitationem quas unde? Dicta debitis
            corrupti sunt. Consequuntur, qui sit. Laboriosam soluta quo
            consectetur amet veritatis ab, adipisci et minima vero provident
            praesentium eligendi. Libero, nisi. Unde ullam commodi rerum? Dicta
            fuga pariatur accusantium optio modi similique.
          </StyledDesc>
          {reviews.length > 2 && <Reviews />}
        </Container>
      </StyledPage>
    </HomeContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('http://192.168.1.4:8000/projects');
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default Home;
