import React, { useState, useEffect } from "react";
import {
  Section,
  Timeline,
  ExperienceItem,
  ExperienceContent,
  TimelineDot,
  Description,
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
  SectionContainer,
  MobileOnlyBr,
  SmallMobileOnlyBr,
  TimelineDotDesktop,
  ExpandHint,
  RoleBlock,
} from "./Experience.styles";
import { SectionTitle } from "../../styles/section";
import { experiences } from "./Experience.data";

const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.tags?.includes(activeFilter.toUpperCase());
  });

  useEffect(() => {
    setExpandedIndex(null);
  }, [activeFilter]);

  const renderWithResponsiveBreaks = (text: string) => {
    const tokens = text.split(/(\[\[BR_768\]\]|\[\[BR_480\]\])/g);
    return tokens.map((tok, i) => {
      if (tok === "[[BR_768]]") return <MobileOnlyBr key={`br768-${i}`} />;
      if (tok === "[[BR_480]]") return <SmallMobileOnlyBr key={`br480-${i}`} />;
      return tok;
    });
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="experience">
      <SectionContainer>
        <SectionTitle>Experience</SectionTitle>

        <FilterContainer>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All
          </FilterButton>
          <FilterButton active={activeFilter === "cs"} onClick={() => setActiveFilter("cs")}>
            CS
          </FilterButton>
          <FilterButton active={activeFilter === "edu"} onClick={() => setActiveFilter("edu")}>
            EDU
          </FilterButton>
        </FilterContainer>
        <ExpandHint>Click a card to see details</ExpandHint>
        <Timeline>
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index} style={{ position: "relative" }}>
                <ExperienceItem isLeft>
                  <OrgColumn>
                    <OrgLabel>{exp.organization}</OrgLabel>
                    {exp.orgDescription ? <OrgDescription $visible={isExpanded}>{renderWithResponsiveBreaks(exp.orgDescription)}</OrgDescription> : null}
                    {exp.logoUrl ? (
                      <OrgLogo>
                        <img src={exp.logoUrl} alt={`${exp.organization} logo`} />
                      </OrgLogo>
                    ) : null}
                    <TimelineDot />
                  </OrgColumn>
                  <ExperienceContent type="button" isLeft $expanded={isExpanded} aria-expanded={isExpanded} onClick={() => toggleExpanded(index)}>
                    {exp.tags && (
                      <TagsContainer>
                        {exp.tags.map((tag, tIdx) => (
                          <Tag key={tIdx} variant={tag.toLowerCase() as "cs" | "edu"}>
                            {tag}
                          </Tag>
                        ))}
                      </TagsContainer>
                    )}
                    {exp.roles.map((role, rIdx) => (
                      <RoleBlock key={rIdx}>
                        <RoleTitle>{role.title}</RoleTitle>
                        {isExpanded && role.duration && <RolePeriod>{role.duration}</RolePeriod>}
                        {isExpanded && <Description>{role.description}</Description>}
                      </RoleBlock>
                    ))}
                  </ExperienceContent>
                  <TimelineDotDesktop />
                </ExperienceItem>
              </div>
            );
          })}
        </Timeline>
      </SectionContainer>
    </Section>
  );
};

export default Experience;
