import React, { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { StyledProjectDesc, StyledProjects } from './StyledProjects';
import cookie from 'cookie';
import { IProjects } from './IProjects';
import { StyledPage } from '../../commonStyles/StyledPage';
import Container from '../../components/Blocks/Container/Container';
import { StyledTitle } from '../../commonStyles/StyledTitle';
import CardProject from '../../components/Blocks/CardProject/CardProject';
import Button from '../../components/Elements/Button/Button';
import { StyledDesc } from '../../commonStyles/StyledDesc';
import FormProject from '../../components/Blocks/FormProject/FormProject';

const Projects: NextPage<IProjects> = ({ auth, projects }) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <StyledPage>
      <Container column>
        <StyledTitle>Работы</StyledTitle>
        <StyledProjectDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          non modi, molestias soluta perspiciatis sequi distinctio, nemo earum
          qui ut maxime voluptatibus voluptates. Sint aliquam excepturi alias,
          optio iure possimus. Nisi omnis quis asperiores quae dolorum assumenda
          nemo rem, quam dignissimos optio, dolorem expedita unde saepe laborum.
          Doloribus quas obcaecati magnam, rem unde error quis vero hic, nam
          itaque distinctio. Culpa, in unde saepe, perferendis dolor officia
          repellendus eligendi voluptatibus, maxime fuga cumque quibusdam
          mollitia assumenda! Enim minima dolore, repellat quasi tempore labore,
          accusantium dolores optio assumenda corrupti laudantium omnis. Odit
          labore recusandae molestias nulla consequuntur iste ullam repudiandae.
          Sequi expedita ipsum atque molestias repudiandae facere quidem
          voluptates commodi voluptatum vitae eum recusandae, eveniet officia
          harum esse ea nesciunt ex?
        </StyledProjectDesc>
        {auth && (
          <Button
            type="button"
            text="Добавить проект"
            onClick={showFormHandler}
            center
          />
        )}
        {showForm && <FormProject />}
        <StyledProjects>
          {projects.map((project) => (
            <CardProject key={project.id + project.name} project={project} />
          ))}
        </StyledProjects>
      </Container>
    </StyledPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = cookie.parse(ctx.req.headers.cookie || '');
  const auth = !!cookies.token;

  const data = await fetch('http://192.168.1.4:8000/projects');
  const projects = await data.json();

  return {
    props: {
      auth,
      projects,
    },
  };
};

export default Projects;
