import React from "react";
import { NewsItem } from "../../data/News.data";
import { NewsList, NewsItemRow, NewsDate, NewsText } from "./News.styles";

const NewsListView: React.FC<{ items: NewsItem[] }> = ({ items }) => (
  <NewsList>
    {items.map((item, idx) => (
      <NewsItemRow key={`${item.date}-${idx}`}>
        <NewsDate>{item.date}</NewsDate>
        <NewsText>{item.text}</NewsText>
      </NewsItemRow>
    ))}
  </NewsList>
);

export default NewsListView;
