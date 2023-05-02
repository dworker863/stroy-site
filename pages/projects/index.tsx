import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { StyledProjects } from './StyledProjects';
import cookie from 'cookie';
import { IProjects } from './IProjects';
import { StyledPage } from '../../commonStyles/StyledPage';
import Container from '../../components/Blocks/Container/Container';
import { StyledTitle } from '../../commonStyles/StyledTitle';

const Projects: NextPage<IProjects> = ({ auth, projects }) => {
  return (
    <StyledPage>
      <Container column>
        <StyledTitle>Работы</StyledTitle>
        {projects.map((project) => project.name)}
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
