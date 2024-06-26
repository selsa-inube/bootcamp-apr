import React from "react";
import imagen1 from "../../../assets/article1.png";
import { StyledArticle, StyledNews, StyledA } from "../style.js";
import { NewsItem } from "../detail_and_date/index.jsx";

export default function Article1() {
  return (
    <StyledArticle>
      <img src={imagen1} alt="A frustrated person, on a yellow background" />
      <StyledNews>
        <NewsItem dateTime="2020-05-21" />
        <h2>Everything You Need to Know About Slow Internet Speeds</h2>
        <p>
          Our Crummy connections are the biggest tech headache in the pandemic.
          Here's a comprehensive guide to do about them.
        </p>
        <StyledA href="#">Continue Reading</StyledA>
      </StyledNews>
    </StyledArticle>
  );
}
