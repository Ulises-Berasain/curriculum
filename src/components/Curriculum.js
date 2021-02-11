import React from "react";
import cv from "assets/cv/Ulises Berasain CV.pdf";
import "styled-components/Curriculum.css";

export default function Curriculum(){
    return(
        <div className="cv-info-container" id="curriculum">
            <h1 className="title-name">ULISES BERASAIN</h1>
            <h2 className="title-dev">Front-End Web Developer</h2>
            <div className="cv-download-container">
                <a href={cv} className="cv-download" download>Descargar Curriculum Vitae<hr/><span>Formato PDF</span></a>
            </div>
        </div>
    );
};
