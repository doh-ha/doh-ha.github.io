import React from "react";
import { Section, Timeline, ExperienceItem, ExperienceContent, TimelineDot, Duration, Description, CardHeader, RoleTitle, OrgLabel, OrgColumn, OrgLogo, OrgDescription } from "./Experience.styles";
import { SectionTitle } from "../styles/section";
import { experiences } from "../data/Experience.data";
import { Container } from "../styles/styled-components";

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>
          {experiences.map((exp, index) => (
            <div key={index} style={{ position: "relative" }}>
              <ExperienceItem isLeft>
                <OrgColumn>
                  <OrgLabel>{exp.organization}</OrgLabel>
                  <OrgDescription>{exp.orgDescription}</OrgDescription>
                  {exp.logoUrl ? (
                    <OrgLogo>
                      <img src={exp.logoUrl} alt={`${exp.organization} logo`} />
                    </OrgLogo>
                  ) : null}
                </OrgColumn>
                <ExperienceContent isLeft>
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} style={{ marginBottom: rIdx < exp.roles.length - 1 ? 12 : 0 }}>
                      <RoleTitle>{role.title}</RoleTitle>
                      <Duration>{exp.duration}</Duration>
                      <Description>{role.description}</Description>
                    </div>
                  ))}
                </ExperienceContent>
                <TimelineDot />
              </ExperienceItem>
            </div>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Experience;
