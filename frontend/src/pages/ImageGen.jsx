import React from 'react';
import { useState, useEffect} from 'react';

// this component utilized my express.js server to make calls to the Pixabay API and generate cat images
// it also displays the individual cat image generated and credits the user/photographer that uploaded that image to Pixabay

function ImageGen({imageKey}) {
    const [imageURL, setImageURL] = useState(null);
    const [imagePhotographer, setImagePhotographer] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/cat-image').then(response => response.json()).then(photos => {
            if(photos.imageURL) {
                setImageURL(photos.imageURL);
                setImagePhotographer(photos.imagePhotographer);
            } else {
                console.error('no image found');
            }
        })
        .catch(error => {
            console.error('Error fetching cat image: ', error);
        });
    }, [imageKey]);

    return (
        <div className="gen-image-cat">
            
            {imageURL ? (<img src={imageURL} alt="random cat image generated from Pexels API" style={{ maxWidth: '80%', height: '60%' }} />):(<p>Loading Cat...</p>)}
            {/* credits the photographer for each image generated */}
            {imageURL && (<p>Photo by {imagePhotographer} on Pixabay
            </p>)}
        </div>
    )
}

export default ImageGen;