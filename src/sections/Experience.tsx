import React from "react";
import { Section, Container, Title, Timeline, ExperienceItem, ExperienceContent, TimelineDot, ExperienceTitle, Company, Duration, Description } from "./Experience.styles";
import { experiences } from "../data/Experience.data";

const Experience: React.FC = () => {
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
