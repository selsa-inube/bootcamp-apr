import React from "react";
import {
  ArticleContainer,
  Image,
  Subtitle,
  Category,
  ArticleTitle,
  Date,
  Content,
  ReadMore,
  Icon,
  SectionTitle,
} from "./ArticleStyles";

const Article = ({
  image,
  subtitle,
  sectionTitle,
  date,
  title,
  content,
  smallImage,
  smallestOverall,
  hideReadMore,
  showIcon,
  smallTitle,
  showShowAllLink,
}) => {
  return (
    <ArticleContainer>
      {image && <Image src={image} alt={title} small={smallImage} />}
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <Subtitle>
        {subtitle && <Category>{subtitle}</Category>}
        {date && <Date>{date}</Date>}
        {showIcon && <Icon className="bx bx-bar-chart"></Icon>}
      </Subtitle>
      <ArticleTitle smallTitle={smallTitle} smallestOverall={smallestOverall}>
        {title}
      </ArticleTitle>
      <Content>{content}</Content>
      {!hideReadMore && <ReadMore href="#">Read more</ReadMore>}
      {showShowAllLink && <ReadMore href="#">Show all</ReadMore>}
    </ArticleContainer>
  );
};

export default Article;
