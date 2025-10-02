import React from "react";
import { educations } from "../data/Education.data";
import { Section, Container, Title, Timeline, Item, Card, Dot, School, Degree, Period, Details } from "./Education.styles";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <Container>
        <Title>Education</Title>
        <Timeline>
          {educations.map((ed, index) => (
            <Item key={index} isLeft={index % 2 === 0}>
              <Card isLeft={index % 2 === 0}>
                <School>{ed.school}</School>
                <Degree>{ed.degree}</Degree>
                <Period>{ed.period}</Period>
                {ed.details && <Details>{ed.details}</Details>}
              </Card>
              <Dot />
            </Item>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;
