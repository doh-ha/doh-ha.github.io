import React from "react";
import { educations } from "../data/Education.data";
import { Section, List, Block, Row, School, Degree, Meta, Period, Location, Details } from "./Education.styles";
import { SectionContainer, SectionTitle } from "../styles/section";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
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
      </SectionContainer>
    </Section>
  );
};

export default Education;
