import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
import DisplayImage from '../../../backend/server';
import { useState } from 'react';


function ImageGen () {
    const [showImage, setShowImage] = useState(false);
    // when button is clicked, showImage = true, meaning that we should show image
    const handleButtonClick = () => {
        setShowImage(!showImage);
    };

    return (
       <>
       <h1>cat image generator</h1>

       {/* this is the button. when it is clicked we will use the handleButtonClick event handler */}
       <Button variant="light" className="rounded-circle" onClick={handleButtonClick}>Show Cat!</Button>

       {/* if showImage is true, then the DisplayImage component will be executed otherwise it won't */}
       {showImage && <DisplayImage />}
       
       {/* credit to Pexels */}
       <a href="https://www.pexels.com">Photos provided by Pexels</a>

       </>
    )  

}

export default ImageGen