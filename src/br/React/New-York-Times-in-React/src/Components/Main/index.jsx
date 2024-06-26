import React from "react";
import { StyledNav, StyledArticles } from "./style.js";
import Article1 from "./Article1/index.jsx";
import Article2 from "./Article2/index.jsx";
import Article3 from "./Article3/index.jsx";

export default function Main() {
  const categories = ["Tech", "Econ", "Media", "Money", "DealBook"];

  return (
    <main>
      <StyledNav>
        <h2>Business</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
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
