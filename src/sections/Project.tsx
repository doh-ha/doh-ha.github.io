import React from "react";
import styled from "styled-components";
import { Section, Container, SectionTitle, Grid, Card, ButtonLink } from "../styles/styled-components";

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.textMuted};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Project: React.FC = () => {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      description: "React와 TypeScript를 사용하여 만든 반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
      tech: ["React", "TypeScript", "Styled Components"],
      link: "#",
    },
    {
      title: "할일 관리 앱",
      description: "사용자 친화적인 인터페이스로 일정을 효율적으로 관리할 수 있는 웹 애플리케이션입니다.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "날씨 정보 앱",
      description: "실시간 날씨 정보를 제공하는 모바일 친화적인 웹 애플리케이션입니다.",
      tech: ["React", "API", "CSS3"],
      link: "#",
    },
  ];

  return (
    <Section id="project" background="white">
      <Container>
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
      </Container>
    </Section>
  );
};

export default Project;
