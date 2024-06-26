import React from "react";
import { StyledSection } from "./style.js";

export default function Section() {
  const categories = ["Features", "Americas", "Europe", "Asia", "Commodities"];

  return (
    <StyledSection>
      <nav>
        <div>
          <p>MARKET SNAPSHOT</p>
          <p>6:07 AM</p>
        </div>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </StyledSection>
  );
}
