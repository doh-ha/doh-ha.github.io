import React from "react";
import { Section, List, Block, Row, Column, School, Degree, Meta, Period, Location, Details, InlineLink, DegreeGroup, Divider, DegreeItem, HighlightSubTitle } from "./Education.styles";
import { SectionContainer, SectionTitle } from "../styles/section";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <List>
          <Block>
            <Row>
              <Column>
                <School>Ewha Womans University</School>
                <Period>Mar 2021 ~</Period>
                <Location>Seoul, South Korea</Location>
              </Column>
              <Column>
                <Details>
                  <li>Total GPA 4.1 / 4.3</li>
                </Details>
                <DegreeGroup>
                  <DegreeItem>
                    <HighlightSubTitle>
                      <InlineLink href="https://cse.ewha.ac.kr/cseeng/index.do" target="_blank" rel="noreferrer">
                        B.S. in Computer Science & Engineering
                      </InlineLink>
                    </HighlightSubTitle>
                    <Details>
                      <li>Primary major</li>
                      <li>Major GPA: 4.0 / 4.3</li>
                    </Details>
                  </DegreeItem>

                  <DegreeItem>
                    <HighlightSubTitle>
                      <InlineLink href="https://scrantoncollege.ewha.ac.kr/escranton/shp/about-shp.do" target="_blank" rel="noreferrer">
                        B.A. in Scranton Honors Program (Digital Humanities Track)
                      </InlineLink>
                    </HighlightSubTitle>
                    <Details>
                      <li>
                        Scranton Honors Program: Liberal arts honors program emphasizing interdisciplinary studies—including philosophy, science, politics, law, and design—with a focus on global
                        leadership.
                      </li>
                      <li>Digital Humanities Track: Specialized in digital content creation, UX/UI design, and integrating technology with the humanities and social sciences.</li>
                    </Details>
                  </DegreeItem>

                  <DegreeItem>
                    <HighlightSubTitle>
                      <InlineLink href="https://www.ewha.ac.kr/ewha/bachelor/license01-1.do" target="_blank" rel="noreferrer">
                        Teacher Certification Program
                      </InlineLink>
                    </HighlightSubTitle>
                    <Details>
                      <li>Qualified to teach computer science at secondary schools through a certification in Computer Science & Engineering.</li>
                    </Details>
                  </DegreeItem>
                </DegreeGroup>
              </Column>
            </Row>
            <Divider />
          </Block>

          <Block>
            <Row>
              <Column>
                <School>Uppsala University</School>
                <Period>Aug 2023 ~ Jan 2024</Period>
                <Location>Uppsala, Sweden</Location>
              </Column>
              <Column>
                <DegreeGroup>
                  <DegreeItem>
                    <HighlightSubTitle>Exchange student major in Computer Science</HighlightSubTitle>
                    <Details>
                      <li>Completed Human-Computer Interaction, Computer Networks, Computer Architecture, and Computer Programming courses.</li>
                    </Details>
                  </DegreeItem>
                </DegreeGroup>
              </Column>
            </Row>
          </Block>
        </List>
      </SectionContainer>
    </Section>
  );
};

export default Education;
