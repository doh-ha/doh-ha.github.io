import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/section";
import { publications } from "../../data/Publication.data";
import {
  Section,
  PublicationList,
  PublicationItemRow,
  PublicationContent,
  Title,
  Authors,
  HighlightAuthor,
  MetaColumn,
  AwardStack,
  AwardTag,
  Venue,
  LinkButton,
} from "./Publication.styles";

const renderVenue = (venue: string) =>
  venue.split("\n").map((line, i, lines) => (
    <React.Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </React.Fragment>
  ));

const renderAuthors = (authors: string, highlightName?: string) => {
  if (!highlightName) return authors;
  const parts = authors.split(new RegExp(`(${highlightName})`));
  return parts.map((part, idx) => (part === highlightName ? <HighlightAuthor key={`${part}-${idx}`}>{part}</HighlightAuthor> : <span key={`${part}-${idx}`}>{part}</span>));
};

const Publication: React.FC = () => {
  return (
    <Section id="publication">
      <SectionContainer>
        <SectionTitle>Publication</SectionTitle>

        <PublicationList>
          {publications.map((pub, idx) => (
            <PublicationItemRow key={`${pub.title}-${idx}`}>
              <PublicationContent>
                <Title>{pub.title}</Title>
                <Authors>{renderAuthors(pub.authors, pub.highlightName)}</Authors>
                {pub.link && (
                  <LinkButton href={pub.link.url} target="_blank" rel="noreferrer">
                    {pub.link.label}
                  </LinkButton>
                )}
              </PublicationContent>
              <MetaColumn>
                <Venue>{renderVenue(pub.venue)}</Venue>
                {pub.awards && pub.awards.length > 0 && (
                  <AwardStack>
                    {pub.awards.map((award) => (
                      <AwardTag key={award}>{award}</AwardTag>
                    ))}
                  </AwardStack>
                )}
              </MetaColumn>
            </PublicationItemRow>
          ))}
        </PublicationList>
      </SectionContainer>
    </Section>
  );
};

export default Publication;
