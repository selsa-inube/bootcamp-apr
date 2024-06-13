// Article.js
import React from 'react';
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
  SectionTitle
} from './ArticleStyles';

const Article = ({
  image,
  sectionTitle,
  subtitle,
  date,
  title,
  content,
  showIcon,
  smallImage,
  smallTitle,
  smallestOverall,
  hideReadMore,
  showShowAllLink,
}) => {
  return (
    <ArticleContainer>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      {image && <Image src={image} alt="Article Image" small={smallImage} />}
      {subtitle && (
        <Subtitle>
          <Category>{subtitle}</Category>
          <Date className="date">{date}</Date>
        </Subtitle>
      )}
      <ArticleTitle smallTitle={smallTitle} smallestOverall={smallestOverall}>
        {title}
      </ArticleTitle>
      <Content>{content}</Content>
      <ReadMore href="#" className="links" hideReadMore={hideReadMore}>
        Continue Reading
      </ReadMore>
      {showIcon && (
        <div>
          <Icon className='bx bx-circle'></Icon>
          <Icon className='bx bxs-circle'></Icon>
          <Icon className='bx bxs-circle'></Icon>
        </div>
      )}
      {showShowAllLink && (
        <ReadMore href="#" className="links">
          Show All
        </ReadMore>
      )}
    </ArticleContainer>
  );
};

export default Article;
