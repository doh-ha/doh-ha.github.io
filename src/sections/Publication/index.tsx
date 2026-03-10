import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/section";
import { publications } from "../../data/Publication.data";
import { Section, PublicationList, PublicationItemRow, PublicationContent, Title, Authors, HighlightAuthor, Status, LinkButton } from "./Publication.styles";

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
                  <LinkButton href={pub.link} target="_blank" rel="noreferrer">
                    arXiv
                  </LinkButton>
                )}
              </PublicationContent>
              <Status>{pub.status}</Status>
            </PublicationItemRow>
          ))}
        </PublicationList>
      </SectionContainer>
    </Section>
  );
};

export default Publication;
