import React from "react";
import { educations } from "../data/Education.data";
import { Section, Container, Title, List, Block, Row, School, Degree, Meta, Period, Location, Details } from "./Education.styles";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <Container>
        <Title>Education</Title>
        <List>
          {educations.map((ed, index) => (
            <Block key={index}>
              <Row>
                <School>{ed.school}</School>
                <Degree>{ed.degree}</Degree>
              </Row>
              <Meta>
                <Period>{ed.period}</Period>
                <Location>{ed.details ? ed.details.split("|")[0] : ""}</Location>
              </Meta>
              {ed.details && (
                <Details>
                  {ed.details
                    .split("|")
                    .slice(1)
                    .map((d, i) => (
                      <li key={i}>{d.trim()}</li>
                    ))}
                </Details>
              )}
            </Block>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Education;
