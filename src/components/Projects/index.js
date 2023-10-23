import React from 'react';
import { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          has worked on various projects. From a web application to an API. Here
          are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value='all' onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value='all' onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton
              active
              value='web app'
              onClick={() => setToggle('web app')}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value='web app' onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'API' ? (
            <ToggleButton active value='API' onClick={() => setToggle('API')}>
              API
            </ToggleButton>
          ) : (
            <ToggleButton value='API' onClick={() => setToggle('API')}>
              API
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Other' ? (
            <ToggleButton
              active
              value='Other'
              onClick={() => setToggle('Other')}
            >
              Other
            </ToggleButton>
          ) : (
            <ToggleButton value='Other' onClick={() => setToggle('Other')}>
              Other
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
