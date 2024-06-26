// ArticleStyles.js
import styled, { css } from "styled-components";

export const ArticleContainer = styled.article`
  border-right: 1px solid rgb(233, 232, 232);
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 50%;
  margin-bottom: 10px;

  ${(props) =>
    props.small &&
    css`
      width: 27%;
      float: right;
      margin-left: 10px;
    `}
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Category = styled.span`
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 7px 10px;
  font-size: 0.75em;
  margin-right: 5px;
`;

export const ArticleTitle = styled.h3`
  font-size: ${(props) => {
    if (props.smallTitle) return "1.7em";
    if (props.smallestOverall) return "1em";
    return "2.3em";
  }};
  margin-bottom: 10px;
`;

export const Date = styled.time`
  font-size: 13px;
`;

export const Content = styled.p`
  font-size: 1em;
  color: rgb(175, 175, 175);
  margin-bottom: 10px;
`;

export const ReadMore = styled.a`
  text-decoration: none;
  color: #242424;
  border-bottom: 1px solid rgb(182, 182, 182);
  display: ${(props) => (props.hideReadMore ? "none" : "inline")};

  &:hover {
    color: #aaaaaa;
  }
`;

export const Icon = styled.i`
  font-size: 15px;
  margin-left: 5px;
  color: grey;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1em;
  margin-bottom: 20px;
`;
