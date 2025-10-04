import React, { useState } from "react";
import { Section, Grid } from "../../styles/styled-components";
import { SectionContainer, SectionTitle } from "../../styles/section";
import {
  ProjectTitle,
  ProjectDescription,
  TechStack,
  AchievementStack,
  TechTag,
  AchievementTag,
  ProjectImage,
  ProjectCard,
  ProjectContent,
  MoreLink,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalImage,
  ModalTitle,
  ModalDescription,
  ModalTechStack,
  ModalTechTag,
  ModalActions,
  ModalButton,
} from "./Project.styles";
import { projects, ProjectItemData } from "./Project.data";

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItemData | null>(null);

  const openModal = (project: ProjectItemData) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="project" background="white">
        <SectionContainer>
          <SectionTitle>Projects</SectionTitle>
          <Grid columns={3}>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                {project.imageUrl && (
                  <ProjectImage size={project.imageSize}>
                    <img src={project.imageUrl} alt={project.title} />
                  </ProjectImage>
                )}
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  {project.achievements && project.achievements.length > 0 && (
                    <AchievementStack>
                      {project.achievements.map((achievement, achievementIndex) => (
                        <AchievementTag key={`achievement-${achievementIndex}`}>{achievement}</AchievementTag>
                      ))}
                    </AchievementStack>
                  )}
                  <MoreLink onClick={() => openModal(project)}>More</MoreLink>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid>
        </SectionContainer>
      </Section>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
            {selectedProject.imageUrl && (
              <ModalImage>
                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              </ModalImage>
            )}
            <ModalTitle>{selectedProject.title}</ModalTitle>
            <ModalDescription>{selectedProject.description}</ModalDescription>
            <ModalTechStack>
              {selectedProject.tech.map((tech, techIndex) => (
                <ModalTechTag key={techIndex}>{tech}</ModalTechTag>
              ))}
            </ModalTechStack>
            <ModalActions>
              <ModalButton href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                프로젝트 보기
              </ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Project;
