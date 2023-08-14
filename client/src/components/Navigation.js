// Die Navigationsleiste am oberen Rand.

import React from "react";


const Navigation=()=>{
    return (
        <div className='navigation'>
            <div className="nav-links">
                             <a href='/Über-Uns'><div><p>Über Uns</p></div></a>
                             <a href='/Aktivitäten'><div><p>Aktivitäten</p></div></a>
                             <a href='/Home'><div><p>Home</p></div></a>
            </div>
        </div>
    );
}

export default Navigation;