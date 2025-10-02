import React from "react";
import { Section, Grid, Card, ButtonLink } from "../styles/styled-components";
import { SectionContainer, SectionTitle } from "../styles/section";
import { ProjectTitle, ProjectDescription, TechStack, TechTag } from "./Project.styles";
import { projects } from "../data/Project.data";

const Project: React.FC = () => {
  return (
    <Section id="project" background="white">
      <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
        <Grid columns={3}>
          {projects.map((project, index) => (
            <Card key={index} hover>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              <ButtonLink href={project.link}>프로젝트 보기</ButtonLink>
            </Card>
          ))}
        </Grid>
      </SectionContainer>
    </Section>
  );
};

export default Project;
