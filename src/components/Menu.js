import React from "react";
import "styled-components/Menu.css";

export default function Menu(){
    return(
        <div className="container-menu">
            <input type="checkbox" className="menu-input"/>
            <i className="fas fa-bars"><hr/><hr/><hr/></i>
            <i className="fas fa-times">X</i>

            <nav className="nav-menu">
                <ul className="container-menu-items">
                    <li className="cv-menu">
                        <a href="#curriculum">Curriculum</a>
                    </li>
                    <li className="about-me-menu">
                        <a href="#about-me">Acerca de mi</a>
                    </li>
                    <li className="experience-menu">
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li className="studies-menu">
                        <a href="#studies">Estudios</a>
                    </li>
                    <li className="portfolio-menu">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="aptitudes-menu">
                        <a href="#aptitudes">Aptitudes</a>
                    </li>
                    <li className="contact-menu">
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
