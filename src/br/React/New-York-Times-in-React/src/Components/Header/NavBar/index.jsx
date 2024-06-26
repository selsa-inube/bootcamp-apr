import React from "react";
import { StyledNav, StyledUl } from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const categories = [
    "World",
    "Politics",
    "Business",
    "Opinion",
    "Tech",
    "Science",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Magazine",
  ];

  return (
    <StyledNav>
      <div>
        <p>Thursday</p>
        <time dateTime="2020-05-21">May 21, 2020</time>
      </div>
      <StyledUl>
        {categories.map((category) => (
          <li key={category}>
            <a href="#">{category}</a>
          </li>
        ))}
      </StyledUl>
      <FontAwesomeIcon className="iconNav" icon={faEllipsis} />
    </StyledNav>
  );
}
