import React from "react";
import imagen1 from "../../../assets/fast1.png";
import imagen2 from "../../../assets/fast2.png";
import imagen3 from "../../../assets/fast3.png";
import { StyledArticle } from "./style.js";
import { StyledA } from "../style.js";
import { FastNews } from "./FastFoward/index.jsx";

export default function Article1() {
  return (
    <StyledArticle>
      <h3>Fast Foward</h3>
      <FastNews
        title="Another Grim Tally of U.S. Unemployment Is Expected: Live Business Updates"
        imageSrc={imagen1}
        imageAlt="abandoned streets of New York"
        paragraphText="Live Stock Market News During the Coronavirus Pandemic"
      />
      <FastNews
        title="How the 'pandemic' Movie and its falsehoods Spread widely Business online"
        imageSrc={imagen2}
        imageAlt="commentator looking at the camera"
        paragraphText="Conspiracy theories about the pandemic have gained more..."
      />
      <FastNews
        title="Joe Rogan strikes an Exclusive, Multi Year deal with spotify Business premium"
        imageSrc={imagen3}
        imageAlt="abandoned streets of New York"
        paragraphText="Live Stock Market News During the Coronavirus Pandemic"
      />
      <StyledA href="#">Show All</StyledA>
    </StyledArticle>
  );
}
