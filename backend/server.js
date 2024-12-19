const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());

const pexelsAPIKey = 'eLaNYZUymi9Rxf39jlIChTmvokyrbZENPyQEbQKPmRhTaIhwYYfRjrHb';

// res: response object
app.get('/api/cat-image', async (req, res) => {
    try {
        const query = 'Cats';
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                Authorization: 'Bearer ${pexelsAPIKey}'
            },
            params: {
                query,
                per_page: 1,
            }
        });

        if (response.data.photos.length > 0) {
            // the data response that we get
            res.json({
                imageURL: response.data.photos[0].src.original,
                imagePhotographer: response.data.photos[0].photographer
            });
            console.log({imageURL})
        } else {
            // resource not found
            res.status(404).json({ error: 'No images found'});
        }
    } catch (error) {
        console.error('Error fetching cat image: ', error);
        // internal server error
        res.status(500).json({ error: 'Error fetching data from Pexels'});
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:$5000')
})