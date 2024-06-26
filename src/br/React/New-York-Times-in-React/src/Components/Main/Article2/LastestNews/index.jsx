import React from "react";
import { NewsItem } from "../../detail_and_date/index.jsx";
import { StyledNews, StyledA } from "../../style.js";

export const LastestNews = ({ dateTime, title }) => (
  <StyledNews>
    <NewsItem dateTime={dateTime} />
    <h2>{title}</h2>
    <StyledA href="#">Continue Reading</StyledA>
  </StyledNews>
);
