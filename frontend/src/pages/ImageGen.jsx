import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
import DisplayImage from '../../../backend/server';
import { useState } from 'react';


function ImageGen () {
    const [showImage, setShowImage] = useState(false);

    const handleButtonClick = () => {
        setShowImage(!showImage);
    };

    return (
       <>
       <h1>cat image generator</h1>

       <Button variant="light" className="rounded-circle" onClick={handleButtonClick}>Show Cat!</Button>
       {showImage && <DisplayImage />}
       
       <a href="https://www.pexels.com">Photos provided by Pexels</a>

       </>
    )  

}

export default ImageGen