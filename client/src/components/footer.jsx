// Die Fußleiste am unteren Rand.

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import FrüKiBi_Logo_Weiß from "../img/FrüKiBi_Logo_Weiß.svg"

const Footer=()=>{
    return (
        <div className='footer'>
            <div className='footer-above'>
            <img src={FrüKiBi_Logo_Weiß} style={{ height: 40 }} alt="FrüKiBi Logo"/>
                <div class="social-container">
                    <a href="/"
                        className="social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="/"
                        className="social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
            </div>
        </div>
        
        <hr></hr>
        
            <div className='footer-below'>
                <div className='footer-copyright'>
                            <p>
                             @{new Date().getFullYear()} FrüKiBi. All rights reserved.
                             </p>
                </div>
                <div className='footer-below-links'>
                             <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                             <a href='/impressum'><div><p>Impressum</p></div></a>
                            <a href='/datenschutz'><div><p>Datenschutzerklärung</p></div></a>
                </div>
            </div>
        </div>

    )
}

export default Footer;
