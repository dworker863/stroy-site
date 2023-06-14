import React, { createContext, useContext, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { StyledProjectsDesc } from './StyledProjectsPage';
import { TProjectsContext, TProjectsPageProps } from './TProjectsPage';
import { StyledPage } from '../../commonStyles/StyledPage';
import Container from '../../components/Blocks/Container/Container';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import Button from '../../components/Elements/Button/Button';
import FormProject from '../../components/Blocks/FormProject/FormProject';
import Projects from '../../components/Sections/Projects/Projects';
import { AppContext } from '../../components/Sections/Layout/Layout';

export const ProjectsContext = createContext<TProjectsContext>({
  auth: false,
  showFormHandler: () => {},
});

const ProjectsPage: NextPage<TProjectsPageProps> = ({ projects }) => {
  const { auth } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <ProjectsContext.Provider value={{ auth, showFormHandler }}>
      <StyledPage>
        <Container column>
          <StyledTitle>Работы</StyledTitle>
          <StyledProjectsDesc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            non modi, molestias soluta perspiciatis sequi distinctio, nemo earum
            qui ut maxime voluptatibus voluptates. Sint aliquam excepturi alias,
            optio iure possimus. Nisi omnis quis asperiores quae dolorum
            assumenda nemo rem, quam dignissimos optio, dolorem expedita unde
            saepe laborum. Doloribus quas obcaecati magnam, rem unde error quis
            vero hic, nam itaque distinctio. Culpa, in unde saepe, perferendis
            dolor officia repellendus eligendi voluptatibus, maxime fuga cumque
            quibusdam mollitia assumenda! Enim minima dolore, repellat quasi
            tempore labore, accusantium dolores optio assumenda corrupti
            laudantium omnis. Odit labore recusandae molestias nulla
            consequuntur iste ullam repudiandae. Sequi expedita ipsum atque
            molestias repudiandae facere quidem voluptates commodi voluptatum
            vitae eum recusandae, eveniet officia harum esse ea nesciunt ex?
          </StyledProjectsDesc>
          {auth && (
            <Button
              type="button"
              text="Добавить проект"
              onClick={showFormHandler}
              center
            />
          )}
          {showForm && <FormProject />}
          <Projects projects={projects} />
        </Container>
      </StyledPage>
    </ProjectsContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await fetch('http://192.168.1.4:8000/projects');
  const projects = await data.json();

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;
