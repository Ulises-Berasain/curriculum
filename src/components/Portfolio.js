import React from "react";
import "styled-components/Portfolio.css";
import gitHubLogo from "assets/img/git-hub-logo.png";
import rotomDex from "assets/img/rotom-dex.png";
import pokeballLogo from "assets/img/pokeball-logo.png";
import pelotaBall from "assets/img/pelota.png";

export default function Portfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <h1 className="title-portfolio">Portfolio</h1>
            <h3 className="title-git-hub">GitHub</h3>
            <a href="https://github.com/Ulises-Berasain" className="git-hub" target="_blank" rel="noreferrer">
                <span>Git Hub: Ulises-Berasain</span> 
                <img className="git-hub-logo" alt="Git Hub Logo" src={gitHubLogo}/>
            </a>

            <h3 className="title-gh-pages">GH-PAGES</h3>
            <a href="https://ulises-berasain.github.io/pokedex-react/" className="pokedex-react" target="_blank" rel="noreferrer">
                <span>Pokédex hecha con React</span> 
                <img className="rotom-dex" alt="Rotom Dex Logo" src={rotomDex}/>
            </a>

            <a href="https://ulises-berasain.github.io/pokedex-api/" className="pokedex-javascript" target="_blank" rel="noreferrer">
                <span>Pokédex hecha con JavaScript</span> 
                <img className="pokeball-logo" alt="Pokeball Logo" src={pokeballLogo}/>
            </a>

            <a href="https://ulises-berasain.github.io/gran-dt/" className="gran-dt" target="_blank" rel="noreferrer">
                <span>Gran DT hecho con JavaScript</span> 
                <img className="pelota-logo" alt="Pelota de Futbol Logo" src={pelotaBall}/>
            </a>
        </div>
    );
};
