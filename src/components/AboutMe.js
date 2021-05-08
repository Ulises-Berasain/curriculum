import React from "react";
import profilePicture from "assets/img/foto-perfil.jpg";
import "styled-components/AboutMe.css";

export default function AboutMe(){
    return(
        <div className="containter-ub-info" id="about-me">
            <h1>Acerca de mí</h1>
            <div className="container-profile-picture">
                <img className="profile-picture"src={profilePicture}/>
            </div>
            <div className="container-info">
                <p>Mi nombre es <strong>Ulises Berasain</strong>, naci el <strong>11 de Marzo de 1994</strong> y resido en <strong>Azul, Provincia de Buenos Aires, Argentina</strong>.<br/>
                    Actualmente me encuentro estudiando de forma autodidacta Desarrollo Web para poder convertirme en <strong>Full Stack Web Developer</strong>.<br/>
                    Por el momento me desempeño como <strong>Front-End Web Developer Jr.</strong>, sigo siempre estudiando y empezando proyectos personales nuevos.<br/>  
                    Busco poder seguir creciendo en lo que es la industria IT para poder estar en constante desarrollo tanto como persona y profesionalmente.<br/> 
                    Siempre estoy estudiando y buscando aprender algo nuevo, estar al tanto de las nuevas tecnologías que van saliendo y si son necesarias poder aprenderlas y dominarlas.
                </p>
            </div>
        </div>
    );
};
