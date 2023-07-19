// Die Fußleiste am unteren Rand.

import React from 'react';
import './footer.css';

const Footer=()=>{
    return (
        <div className='footer'>
            <p>Hier kommt links Logo und rechts Social Media</p>
        
        <hr></hr>
        
            <div className='footer-below'>
                <ul className='footer-below-list'>
                    <li>
                        <p className='footer-copyright'>
                            <p>
                             @{new Date().getFullYear()} FrüKiBi. All rights reserved.
                             </p>
                         </p>
                    </li>
                        <p className='footer-below-links'>
                             <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                             <a href='/impressum'><div><p>Impressum</p></div></a>
                            <a href='/datenschutz'><div><p>Datenschutzerklärung</p></div></a>
                        </p>
                </ul>
            </div>  
        </div>
    )
}

export default Footer;