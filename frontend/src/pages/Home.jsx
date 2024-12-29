import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.scss";
import {Link} from "react-router-dom";

function Home () {
    return (
       <div>
        {/* get rid of Hello World on my about me page */}
        <h1>Welcome to Jessica's Corner!</h1>
        <h5>Here are some quick access links!</h5>
        <ol className="p-3 rounded intro-block">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/DisplayImage">Cat!</Link></li>
        <p>Projects!</p>
        <li><Link to="/Speepy">Speepy</Link></li>
        <li><Link to="/Solace">Solace</Link></li>
        </ol>

        {/* fun facts?? a most recent achievement box?? */}

       </div>
    )

}

export default Home

// keep the title but instead to a list in a box with my page links 