import React from "react";
import { StyledSection } from "./style.js";

export default function Section(){
    return(
        <StyledSection>
            <nav>
                <div>
                    <p>MARKET SNAPSHOT</p>
                    <p>6:07 AM</p>
                </div>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Americas</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Commodities</a></li>
                </ul>
            </nav>
        </StyledSection>
    )
}