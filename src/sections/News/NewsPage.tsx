import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/section";
import { newsItems } from "../../data/News.data";
import { Section, BackLink } from "./News.styles";
import NewsListView from "./NewsListView";

interface NewsPageProps {
  onBack: () => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onBack }) => {
  return (
    <Section id="news-archive">
      <SectionContainer>
        <BackLink
          href="./"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          ← Back
        </BackLink>
        <SectionTitle>News</SectionTitle>
        <NewsListView items={newsItems} />
      </SectionContainer>
    </Section>
  );
};

export default NewsPage;
