import React from "react";
import imagen1 from '../../../assets/fast1.png'
import imagen2 from '../../../assets/fast2.png'
import imagen3 from '../../../assets/fast3.png'
import { StyledArticle } from "./style.js"

export default function Article1() {
    return (
        
        <StyledArticle>
            <h3>Fast Foward</h3>
            <div className="fast_news">
                <h2>Another Grim Tally of U.S. Unemployement Is Exoected: Live Business Updates</h2>
                <img src={imagen1} alt="abandoned streets of New York"/>
                <p>Live stock Market News Darling the Coronavirus Pandemic</p>
            </div>
            <div className="fast_news">
                <h2>Another Grim Tally of U.S. Unemployement Is Exoected: Live Business Updates</h2>
                <img src={imagen2} alt="stadium"/>
                <p>Live stock Market News Darling the Coronavirus Pandemic</p>
            </div>
            <div className="fast_news">
                <h2>Another Grim Tally of U.S. Unemployement Is Exoected: Live Business Updates</h2>
                <img src={imagen3} alt="commentator looking at the camera"/>
                <p>Live stock Market News Darling the Coronavirus Pandemic</p>
            </div>
            <a className="continue" href="#">Show All</a>
        </StyledArticle>
    );
}