import React from 'react';
import { StyledUl, StyledA } from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsis, faGripLinesVertical, faMoon} from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
  return (
    <StyledUl>
        <li><StyledA href="#"><FontAwesomeIcon icon={faEllipsis}/></StyledA></li>
        <li><StyledA href="#"><FontAwesomeIcon icon={faGripLinesVertical}/></StyledA></li>
        <li><StyledA href="#"><FontAwesomeIcon icon={faMoon}/></StyledA></li>
    </StyledUl>
  );
}
