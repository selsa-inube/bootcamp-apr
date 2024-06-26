import React from 'react';
import { StyledUpperLine } from "./style.js";
import logo from '../../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar/index.jsx';


export default function Header() {
  return (
    <header>
      <StyledUpperLine>
        <div>
          <FontAwesomeIcon className='iconHeader' icon={faMagnifyingGlass} />
          <span><FontAwesomeIcon className='iconHeader' icon={faBell} /></span>
          
        </div>
        <img src={logo} alt="New York Times Logo" />
        <div>
          <button>SIGN IN</button>
          <button>SUBSCRIBE</button>
        </div>
      </StyledUpperLine>
      <NavBar />
    </header>
  );
}
