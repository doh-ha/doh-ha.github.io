import React from "react";
import { SectionContainer, SectionTitle } from "../../styles/section";
import { newsItems } from "../../data/News.data";
import { Section, MoreLink, MoreRow } from "./News.styles";
import NewsListView from "./NewsListView";

const PREVIEW_COUNT = 3;

interface NewsProps {
  onMoreClick: () => void;
}

const News: React.FC<NewsProps> = ({ onMoreClick }) => {
  const previewItems = newsItems.slice(0, PREVIEW_COUNT);
  const hasMore = newsItems.length > PREVIEW_COUNT;

  return (
    <Section id="news">
      <SectionContainer>
        <SectionTitle>News</SectionTitle>
        <NewsListView items={previewItems} />
        {hasMore && (
          <MoreRow>
            <MoreLink
              href="?page=news"
              onClick={(e) => {
                e.preventDefault();
                onMoreClick();
              }}
            >
              See more
            </MoreLink>
          </MoreRow>
        )}
      </SectionContainer>
    </Section>
  );
};

export default News;
