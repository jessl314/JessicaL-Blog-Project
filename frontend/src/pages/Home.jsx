import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.scss";

function Home () {
    return (
       <div>
        {/* get rid of Hello World on my about me page */}
        <h1>Welcome to Jessica's Corner!</h1>
        <p className="p-3 rounded intro-block">Hello World! Welcome to my personal portfolio website! Looking around you'll learn a bit more about me and some projects that I'm proud of. <br className="spacing"/> Wonder why I have a page with a cat image generator? This website is my first ever personal project! Since I wanted some experience using API's and Express.js I chose to use a simple API to display something that I like a lot, cats!</p>

        {/* fun facts?? a most recent achievement box?? */}

       </div>
    )

}

export default Home