import React from "react";
import "styled-components/Contact.css";
import twitterLogo from "assets/img/twitter-logo.png";
import facebookLogo from "assets/img/facebook-logo.png";
import instagramLogo from "assets/img/instagram-logo.png";
import emailLogo from "assets/img/email-logo.png";
import wappLogo from "assets/img/wapp-logo.png";
import inLogo from "assets/img/in-logo.png";

export default function Contact(){
    return(
        <div className="media" id="contact">
            <h1 className="title-contact">Contacto</h1>
            <ul className="social-media" >
                <li>
                    <a href="https://twitter.com/UBerasain" target="_blank" rel="noreferrer" className="twitter">
                        <span>Twitter: @UBerasain</span> 
                        <img className="twitter-logo" alt="Twitter Logo" src={twitterLogo}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.facebook.com/Berasain.Uliii/" className="facebook" target="_blank" rel="noreferrer"> 
                        <span>Facebook: Ulises Berasain</span> 
                        <img className="facebook-logo" alt="Facebook Logo" src={facebookLogo}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/uliuli77/" target="_blank" rel="noreferrer" className="instagram">
                        <span>Instagram: uliuli77</span> 
                        <img className="instagram-logo" alt="Instagram Logo" src={instagramLogo}/>
                    </a>
                </li>

                <li>
                    <a href="mailto:ulises.berasain@gmail.com" className="email" target="_blank" rel="noreferrer">
                        <span>e-mail: ulises.berasain@gmail.com</span> 
                        <img className="email-logo" alt="e-mail Logo" src={emailLogo}/>
                    </a>
                </li>

                <li>
                    <a href="tel:2281535211" className="telefono" target="_blank" rel="noreferrer">
                        <span>Telefono: 2281-535211</span>
                        <img className="wapp-logo" alt="Whats App Logo" src={wappLogo}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/ulises-berasain-09b2b01b1/" className="linkedin" target="_blank" rel="noreferrer">
                        <span>LinkedIn: Ulises Berasain</span>
                        <img className="in-logo" alt="LinkedIn Logo" src={inLogo}/>
                    </a>
                </li>
            </ul>
        </div>
    );
};
