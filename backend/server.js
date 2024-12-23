const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());

const pixaBayAPIKey = '47745339-b5ac535ed90ab426c13aaa83c';
/* the application is getting data using the search query Cats. I have added a random page parameter to make sure that each cat picture is "randomly" chosen */
// res: response object
app.get('/api/cat-image', async (req, res) => {
    try {
        const query = 'Cats';


        const initialResponse = await axios.get('https://pixabay.com/api/', {
            params: {
                key: pixaBayAPIKey,
                q: query,
                image_type: 'photo',
                per_page: 3, // Only 1 result needed to calculate total pages
            },
        });

        const totalHits = initialResponse.data.totalHits; // Total number of results
        const perPage = 3; // Images per page
        const maxPage = Math.ceil(totalHits / perPage); 


        const randomPage = Math.floor(Math.random() * maxPage) + 1;
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: pixaBayAPIKey,
                q: query,
                image_type: 'photo',
                per_page: 3,
                page: randomPage,
            }
        });
        // image url is to generate the actual image
        // image photographer is to credit the user that uploaded the photo to Pixabay
        const imageURL = response.data.hits[0].webformatURL;
        const imagePhotographer = response.data.hits[0].user;
        res.json({imageURL, imagePhotographer})
    } catch (error) {
        console.error('Error fetching cat image: ', error);
        // internal server error
        res.status(500).json({ error: 'Error fetching cat image'});
    }
});

// lets programmer know that the server is running
// to run, cd to the backend folder and use the command "node server.js"
// then in a new terminal tab cd frontend and do npm run dev like normal
app.listen(port, () => {
    console.log('Server running on http://localhost:$5000')
})