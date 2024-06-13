import React from "react";
import imagen1 from '../../../assets/article1.png'
import { StyledArticle } from "../style.js"

export default function Article1() {
    return (
        
        <StyledArticle>
            <img src={imagen1} alt="A frustrated person, on a yellow background"/>
            <div className="news">
                <div className="detail_and_date">
                    <span>TECH FIX</span>
                    <time dateTime="2020-05-20">May 20, 2020</time>
                </div>
                <h2>Everything You Need to Know About Slow Internet Speeds</h2>
                <p>Our Crummy connections are the biggest tech headache in the pandemic. Here's a comprehensive guide to do about them.</p>
                <a className="continue" href="#">Continue Reading</a>
            </div>
        </StyledArticle>
    );
}