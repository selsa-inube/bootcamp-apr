import React from "react";
import { StyledArticle, StyledNews, StyledA } from "../style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { NewsItem } from "../detail_and_date/index.jsx";
import { LastestNews } from "./LastestNews/index.jsx";

export default function Article1() {
  return (
    <StyledArticle>
      <h3>Lastest News</h3>
      <LastestNews
        dateTime="2020-05-20"
        title="A Wave of Small Business Closures Is on the Way. Can Washington Stop It?"
      />
      <LastestNews
        dateTime="2020-05-20"
        title="Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?"
      />
      <div>
        <FontAwesomeIcon className="point" icon={faCircle} />
        <FontAwesomeIcon className="point" icon={faCircle} />
        <FontAwesomeIcon className="point" icon={faCircle} />
      </div>
    </StyledArticle>
  );
}
