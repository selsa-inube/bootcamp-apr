import React from 'react';
import { StyledNav, StyledArticles } from "./style.js";
import Article1 from "./Article1/index.jsx"
import Article2 from "./Article2/index.jsx"
import Article3 from "./Article3/index.jsx"

export default function Main() {
  return (
    <main>
      <StyledNav>
        <h2>Business</h2>
        <ul>
          <li><a href="#">Tech</a></li>
          <li><a href="#">Econ</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Money</a></li>
          <li><a href="#">DealBook</a></li>
        </ul>
      </StyledNav>
      <StyledArticles>
        <Article1 />
        <Article2 />
        <Article3 />
      </StyledArticles>
    </main>
  );
}

