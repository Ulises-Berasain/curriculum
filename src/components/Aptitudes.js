import React from "react";
import "styled-components/Aptitudes.css";
import reactLogo from "assets/img/react-logo.png";
import javascriptLogo from "assets/img/javascript-logo.png";
import cssLogo from "assets/img/css-logo.png";
import htmlLogo from "assets/img/html-logo.png";

export default function Aptitudes(){
    return(
        <div className="aptitudes" id="aptitudes">
            <h1 className="title-aptitudes">Aptitudes Principales</h1>
            <div className="react">
                <h3>React</h3>
                <img src={reactLogo} alt="React Logo" className="react-logo"/>
            </div>

            <div className="javascript">
                <h3>JavaScript</h3>
                <img src={javascriptLogo} alt="JavaScript Logo" className="javascript-logo"/>
            </div>

            <div className="css">
                <h3>CSS</h3>
                <img src={cssLogo} alt="CSS Logo" className="css-logo"/>
            </div>

            <div className="html">
                <h3>HTML</h3>
                <img src={htmlLogo} alt="HTML Logo" className="html-logo"/>
            </div>
        </div>
    );
};
