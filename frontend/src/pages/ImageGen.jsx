import React from 'react';
import { useState, useEffect} from 'react';

// this component utilized my express.js server to make calls to the Pixabay API and generate cat images
// it also displays the individual cat image generated and credits the user/photographer that uploaded that image to Pixabay

function ImageGen({imageKey}) {
    const [imageURL, setImageURL] = useState(null);
    const [imagePhotographer, setImagePhotographer] = useState('');
    // fetching from my express api
    useEffect(() => {
        fetch('http://localhost:5000/api/cat-image').then(response => response.json()).then(photos => {
            // checks if my response has an image url
            // if there is then we set the variable imageURL to the image url and imagePhotographer to the photographer
            // else write a error message to the terminal
            if(photos.imageURL) {
                setImageURL(photos.imageURL);
                setImagePhotographer(photos.imagePhotographer);
            } else {
                console.error('no image found');
            }
        })
        .catch(error => {
            // if there are any errors beyond not finding a image url then write this error message
            console.error('Error fetching cat image: ', error);
        });
    }, [imageKey]);

    return (
        <div className="gen-image-cat">
            {/* if imageURL exists then the function returns the image with corresponding styles, else the text is returned */}
            {imageURL ? (<img src={imageURL} alt="random cat image generated from Pexels API" style={{ maxWidth: '80%', height: '60%' }} />):(<p>Loading Cat...</p>)}
            {/* credits the photographer for each image generated and the text only appears if there was an image url */}
            {imageURL && (<p>Photo by {imagePhotographer} on Pixabay
            </p>)}
        </div>
    )
}

export default ImageGen;