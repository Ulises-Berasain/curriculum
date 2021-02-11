import React from "react";
import "styled-components/Logo.css";
import ubLogo from "assets/img/logo-ub.png";

export default function Logo(){
    return(
        <div className="logo">
            <img src={ubLogo} alt="Ulises Berasain Logo" className="ub-logo"/>
        </div>
    );
};
