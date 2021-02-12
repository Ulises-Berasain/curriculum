import React from "react";
import "styled-components/Experience.css";

export default function Experience(){
    return(
        <div className="container-experience" id="experience">
            <h1 className="experience-title">Experiencia Laboral</h1>
            <div className="experience">
                <div className="container-quiniela">
                    <span className="date-quiniela">Feb 2013 - Actualidad</span>
                    <div className="quiniela">
                        <h3>Empleado en Agencia de Loteria</h3>
                        <h4>Agencia de Quiniela "El 72"</h4>
                        <ul>
                            <li>Atención al cliente.</li>
                            <li>Manejar la caja registradora.</li>
                            <li>Manejo de la terminal online.</li>
                        </ul>
                    </div>
                </div>
                <div className="container-ma">
                    <span className="date-ma">Ene 2021 - Feb 2021</span>
                    <div className="marketing-academy">
                        <h3>Freelance para una empresa de Chile</h3>
                        <h4>Marketing Academy <a href="https://marketingacademy.cl/" target="_blank">marketingacademy.cl</a></h4>
                        <ul>
                            <li>Creación de temarios para los cursos de JavaScript, HTML y CSS.</li>
                            <li>Preparar las clases por cada curso.</li>
                            <li>Dictar y grabar cursos de JavaScript, HTML y CSS.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
