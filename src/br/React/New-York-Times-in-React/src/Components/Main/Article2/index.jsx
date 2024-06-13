import React from "react";
import { StyledArticle } from "../style.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Article1() {
    return (
        <StyledArticle>
            <h3>Lastest News</h3>
            <div className="news">
                <div className="detail_and_date">
                    <span>THE UPSHOT</span>
                    <time dateTime="2020-05-19">May 19, 2020</time>
                </div>
                <h2>A Wave of Small Business Closures Is on the Way. Can Washington Stop It?</h2>
                <a className="continue" href="#">Continue Reading</a>
            </div>
            <div className="news">
                <div className="detail_and_date">
                    <span>NEW ANALYSIS</span>
                    <time dateTime="2020-05-19">May 19, 2020</time>
                </div>
                <h2>Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?</h2>
                <a className="continue" href="#">Continue Reading</a>
            </div>
            <div>
                <FontAwesomeIcon className="point" icon={faCircle} />
                <FontAwesomeIcon className="point" icon={faCircle} />
                <FontAwesomeIcon className="point" icon={faCircle} />
            </div>
        </StyledArticle>
    );
}