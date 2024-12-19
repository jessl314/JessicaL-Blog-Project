import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
import DisplayImage from '../../../backend/server';


function ImageGen () {
    return (
       <>
       <h1>image generator</h1>
       <Button variant="light" className="rounded-circle social-button"> <DisplayImage/></Button>
       <a href="https://www.pexels.com">Photos provided by Pexels</a>
       </>
    )  

}

export default ImageGen