import React from 'react';
import {useState, useEffect} from 'react';
import { createClient } from 'pexels';

// my API key
const client = createClient('eLaNYZUymi9Rxf39jlIChTmvokyrbZENPyQEbQKPmRhTaIhwYYfRjrHb');

// function that calls the Pexels API, searches for a cat image and displays it to screen
function DisplayImage() {
    const [imageURL, setImageURL] = useState(null);
    const [imagePhotographer, setImagePhotographer] = useState('');
    const query = 'Cats';
    /* 
    1. search for the cat images with only one photo per response and then with this response
    2. if there are photos in the response then the image will be set to the first one that is returned and it will be in the original size. 
    3. else if there is an error it will be caught with the corresponding console message 
    */
    useEffect(() => {
        client.photos.search({ query, per_page: 1 }).then(response => {
            if (response.photos.length > 0) {
                setImageURL(response.photos[0].src.original)
                setImagePhotographer(response.photos[0].photographer)
            }
        }).catch(error => console.error('Error fetching cat image:', error));
    }, []);
    /*the function will return and display an image if the imageURL exists, otherwise it will render a p element stating that a cat image is being loaded*/
    return (
        <div className="gen-image-cat">
            {imageURL ? (<img src={imageURL} alt="Pexels Cat" style={{ maxWidth: '80%', height: '60%' }} />):(<p>Loading Cat...</p>)}
            {/* credits the photographer */}
            {imageURL && (<p>Photo by {imagePhotographer} on Pexels
            </p>)}

        </div>

    );
}

export default DisplayImage;
