import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
import ImageGen from './ImageGen';
import { useState, useEffect } from 'react';

// this component displays the UI for the cat image generator
function DisplayImage () {
    const [showImage, setShowImage] = useState(false);
    const [imageKey, setImageKey] = useState(0);
    // when button is clicked, showImage = true, meaning that we should show image
    const handleButtonClick = () => {
        setShowImage(true);
        setImageKey((prevKey) => prevKey + 1);
    };

    return (
       <div>
       <h1>cat image generator</h1>

       {/* this is the button. when it is clicked we will use the handleButtonClick event handler */}
       <Button variant="light" className="rounded-circle" onClick={handleButtonClick}>Show Cat!</Button>

       {/* if shonwImage is true, then the DisplayImage component will be executed otherwise it won't */}
       {showImage && <ImageGen imageKey={imageKey} />}
       
       {/* credit to Pixabay */}
       <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" className="styled-link">Photos provided by Pixabay</a> 
       </div>
    )  

}

export default DisplayImage

{/* <a href="https://www.pexels.com">Photos provided by Pexels</a> */}