import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
    transform: translateX(-50%);
  }
`;

const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: flex;
  margin-bottom: 40px;
  position: relative;

  ${(props) =>
    props.isLeft
      ? `
      flex-direction: row;
    `
      : `
      flex-direction: row-reverse;
    `}
`;

const ExperienceContent = styled.div<{ isLeft: boolean }>`
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;

  ${(props) =>
    props.isLeft
      ? `
      margin-right: 40px;
    `
      : `
      margin-left: 40px;
    `}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${(props) =>
      props.isLeft
        ? `
        right: -16px;
        border-left-color: white;
      `
        : `
        left: -16px;
        border-right-color: white;
      `}
    transform: translateY(-50%);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #2563eb;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExperienceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const Company = styled.p`
  color: #2563eb;
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;

const Duration = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: #374151;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "프론트엔드 개발자",
      company: "테크 스타트업",
      duration: "2023.01 - 현재",
      description: "React와 TypeScript를 활용한 웹 애플리케이션 개발 및 사용자 경험 개선에 기여했습니다.",
    },
    {
      title: "웹 개발 인턴",
      company: "디지털 에이전시",
      duration: "2022.06 - 2022.12",
      description: "다양한 클라이언트 프로젝트에 참여하며 실무 경험을 쌓았습니다.",
    },
    {
      title: "프리랜서 개발자",
      company: "자유계약",
      duration: "2021.03 - 2022.05",
      description: "소규모 프로젝트를 통해 독립적인 개발 능력을 향상시켰습니다.",
    },
  ];

  return (
    <Section id="experience">
      <Container>
        <Title>Experience</Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} isLeft={index % 2 === 0}>
              <ExperienceContent isLeft={index % 2 === 0}>
                <ExperienceTitle>{exp.title}</ExperienceTitle>
                <Company>{exp.company}</Company>
                <Duration>{exp.duration}</Duration>
                <Description>{exp.description}</Description>
              </ExperienceContent>
              <TimelineDot />
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Experience;
