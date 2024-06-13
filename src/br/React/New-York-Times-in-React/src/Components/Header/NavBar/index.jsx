import React from 'react';
import { StyledNav, StyledUl } from "./style.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <StyledNav>
      <div>
        <p>Thursday</p>
        <time dateTime="2020-05-21">May 21, 2020</time>
      </div>
      <StyledUl>
        <li><a href="#">World</a></li>
        <li><a href="#">Politics</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Opinion</a></li>
        <li><a href="#">Tech</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Arts</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Style</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Magazine</a></li>
      </StyledUl>
      <FontAwesomeIcon className='iconNav' icon={faEllipsis} />
    </StyledNav>
  );
}
