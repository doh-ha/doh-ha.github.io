import React, { useState } from "react";
import {
  Section,
  Timeline,
  ExperienceItem,
  ExperienceContent,
  TimelineDot,
  Duration,
  Description,
  CardHeader,
  RoleTitle,
  RolePeriod,
  OrgLabel,
  OrgColumn,
  OrgLogo,
  OrgDescription,
  TagsContainer,
  Tag,
  FilterContainer,
  FilterButton,
} from "./Experience.styles";
import { SectionTitle } from "../../styles/section";
import { experiences } from "./Experience.data";
import { Container } from "../../styles/styled-components";

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.tags?.includes(activeFilter.toUpperCase());
  });

  return (
    <Section id="experience">
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <SectionTitle>Experience</SectionTitle>
        <FilterContainer>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={activeFilter === "cse"} onClick={() => setActiveFilter("cse")}>
            CSE
          </FilterButton>
          <FilterButton active={activeFilter === "edu"} onClick={() => setActiveFilter("edu")}>
            EDU
          </FilterButton>
        </FilterContainer>
        <Timeline>
          {filteredExperiences.map((exp, index) => (
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
                  {exp.tags && (
                    <TagsContainer>
                      {exp.tags.map((tag, tIdx) => (
                        <Tag key={tIdx} variant={tag.toLowerCase() as "cse" | "edu"}>
                          {tag}
                        </Tag>
                      ))}
                    </TagsContainer>
                  )}
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} style={{ marginBottom: rIdx < exp.roles.length - 1 ? 12 : 0 }}>
                      <RoleTitle>
                        {role.title}
                        {role.duration && <RolePeriod>{role.duration}</RolePeriod>}
                      </RoleTitle>
                      <Description>{role.description}</Description>
                    </div>
                  ))}
                </ExperienceContent>
                <TimelineDot />
              </ExperienceItem>
            </div>
          ))}
        </Timeline>
      </div>
    </Section>
  );
};

export default Experience;
