import React, { useState } from "react";
import {
  Section,
  List,
  Block,
  Row,
  LeftColumn,
  RightColumn,
  School,
  Period,
  Location,
  Details,
  // InlineLink,
  DegreeGroup,
  Divider,
  DegreeItem,
  HighlightSubTitle,
  ExpandHint,
  EducationCard,
} from "./Education.styles";
import { SectionContainer, SectionTitle } from "../../styles/section";

const Education: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const handleCardKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded(index);
    }
  };

  const ewhaExpanded = expandedIndex === 0;
  const uppsalaExpanded = expandedIndex === 1;
  const kaistExpanded = expandedIndex === 2;

  return (
    <Section id="education">
      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <ExpandHint>Click a card to see details</ExpandHint>
        <List>
          <Block>
            <Row>
              <LeftColumn>
                <School>KAIST</School>
                <Period>Sep 2026 ~ Present</Period>
                <Location>Daejeon, South Korea</Location>
              </LeftColumn>
              <RightColumn>
                <EducationCard $expanded={kaistExpanded} role="button" tabIndex={0} aria-expanded={kaistExpanded} onClick={() => toggleExpanded(2)} onKeyDown={(event) => handleCardKeyDown(event, 2)}>
                  <DegreeGroup>
                    <DegreeItem>
                      <HighlightSubTitle>Department of AI Computing, Graduate School </HighlightSubTitle>
                      {kaistExpanded && (
                        <Details>
                          <li>Research-focused graduate studies at KAIST.</li>
                        </Details>
                      )}
                    </DegreeItem>
                  </DegreeGroup>
                </EducationCard>
              </RightColumn>
            </Row>
            <Divider />
          </Block>
          <Block>
            <Row>
              <LeftColumn>
                <School>Ewha Womans University</School>
                <Period>Mar 2021 ~ Aug 2026</Period>
                <Location>Seoul, South Korea</Location>
              </LeftColumn>
              <RightColumn>
                <EducationCard $expanded={ewhaExpanded} role="button" tabIndex={0} aria-expanded={ewhaExpanded} onClick={() => toggleExpanded(0)} onKeyDown={(event) => handleCardKeyDown(event, 0)}>
                  {ewhaExpanded && (
                    <Details>
                      <li>Total GPA 4.1 / 4.3</li>
                      <li>Major GPA: 4.1 / 4.3</li>
                    </Details>
                  )}
                  <DegreeGroup>
                    <DegreeItem>
                      <HighlightSubTitle>
                        {/* <InlineLink href="https://cse.ewha.ac.kr/cseeng/index.do" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          B.S. in Computer Science & Engineering
                        </InlineLink> */}
                        B.S. in Computer Science & Engineering
                      </HighlightSubTitle>
                      {ewhaExpanded && (
                        <Details>
                          <li>Primary major</li>
                        </Details>
                      )}
                    </DegreeItem>

                    <DegreeItem>
                      <HighlightSubTitle>
                        {/* <InlineLink href="https://scrantoncollege.ewha.ac.kr/escranton/shp/about-shp.do" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          B.A. in Scranton Honors Program (Digital Humanities Track)
                        </InlineLink> */}
                        B.A. in Scranton Honors Program (Digital Humanities Track)
                      </HighlightSubTitle>
                      {ewhaExpanded && (
                        <Details>
                          <li>
                            Scranton Honors Program: Liberal arts honors program emphasizing interdisciplinary studies—including philosophy, science, politics, law, and design—with a focus on global
                            leadership.
                          </li>
                          <li>Digital Humanities Track: Specialized in digital content creation, UX/UI design, and integrating technology with the humanities and social sciences.</li>
                        </Details>
                      )}
                    </DegreeItem>

                    <DegreeItem>
                      <HighlightSubTitle>
                        {/* <InlineLink href="https://www.ewha.ac.kr/ewha/bachelor/license01-1.do" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          Teacher Certification Program
                        </InlineLink> */}
                        Teacher Certification Program
                      </HighlightSubTitle>
                      {ewhaExpanded && (
                        <Details>
                          <li>Qualified to teach computer science at secondary schools through a certification in Computer Science & Engineering.</li>
                        </Details>
                      )}
                    </DegreeItem>
                  </DegreeGroup>
                </EducationCard>
              </RightColumn>
            </Row>
            <Divider />
          </Block>

          <Block>
            <Row>
              <LeftColumn>
                <School>Uppsala University</School>
                <Period>Aug 2023 ~ Jan 2024</Period>
                <Location>Uppsala, Sweden</Location>
              </LeftColumn>
              <RightColumn>
                <EducationCard
                  $expanded={uppsalaExpanded}
                  role="button"
                  tabIndex={0}
                  aria-expanded={uppsalaExpanded}
                  onClick={() => toggleExpanded(1)}
                  onKeyDown={(event) => handleCardKeyDown(event, 1)}
                >
                  <DegreeGroup>
                    <DegreeItem>
                      <HighlightSubTitle>Exchange student major in Computer Science</HighlightSubTitle>
                      {uppsalaExpanded && (
                        <Details>
                          <li>Completed Human-Computer Interaction, Computer Networks, Computer Architecture, and Computer Programming courses.</li>
                        </Details>
                      )}
                    </DegreeItem>
                  </DegreeGroup>
                </EducationCard>
              </RightColumn>
            </Row>
          </Block>
        </List>
      </SectionContainer>
    </Section>
  );
};

export default Education;
