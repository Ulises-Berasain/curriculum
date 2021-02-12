import React from "react";
import "styled-components/Studies.css";

export default function Studies(){
    return(
        <div className="studies" id="studies">
            <div className="education">
                <h1>Educación</h1>
                <div className="high-school">
                    <h3>Escuela De Educación Secundaria Técnica Nº2 "Vicente Pereda" (2010 - 2012)</h3>
                    <h4>Técnico en Informática profesional y personal</h4>
                    <p>Titulo Secundario</p>
                </div>
            </div>

            <div className="complementary-education">
                <h1>Educación Complementaria</h1>
                <div className="google-activate">
                    <h3>Google Actívate (2020)</h3>
                    <ul>
                        <li>Familiarízate con los principios básicos de la programación.</li>
                        <li>Curso de Introducción al Desarrollo Web: HTML y CSS (1/2).</li>
                        <li>Curso de Introducción al Desarrollo Web: HTML y CSS (2/2).</li>
                    </ul>
                </div>

                <div className="polo-tic">
                    <h3>Polo TIC Misiones (2020)</h3>
                    <ul>
                        <li>Curso de Programación Web con Python y JavaScript.</li>
                        <li>Curso de Programación Web con PHP.</li>
                    </ul>
                </div>

                <div className="udemy">
                    <h3>Udemy (2020)</h3>
                    <ul>
                        <li>Desarrollo web. HTML desde cero. Edición 2020.</li>
                        <li>HTML5 desde cero Edición 2020/2021.</li>
                        <li>Desarrollo web. CSS desde cero. Edición 2020.</li>
                        <li>Desarrollo web. JavaScript desde cero.</li>
                    </ul>
                </div>

                <div className="argentina-programa">
                    <h3>r/argentina-programa (2020)</h3>
                    <h4>Full-stack Web Developer</h4>
                    <p>JavaScript, HTML, CSS, Bootstrap, GitHub, Cypress, jQuery, regEX, Unit Test, React, Node.js</p>
                </div>
            </div>
        </div>
    )
}