import React from "react";
import { StyledDiv } from "./style";

export const NewsItem = ({ dateTime }) => {
  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <StyledDiv>
      <span>TECH FIX</span>
      <time dateTime={dateTime}>{formatDate(dateTime)}</time>
    </StyledDiv>
  );
};
