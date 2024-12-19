const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());

const pixaBayAPIKey = '47745339-b5ac535ed90ab426c13aaa83c';

// res: response object
app.get('/api/cat-image', async (req, res) => {
    try {
        const query = 'Cats';
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: pixaBayAPIKey,
                q: query,
                image_type: 'photo',
                per_page: 3,
            }
        });

        const imageURL = response.data.hits[0].webformatURL;
        const imagePhotographer = response.data.hits[0].user;
        res.json({imageURL, imagePhotographer})
    } catch (error) {
        console.error('Error fetching cat image: ', error);
        // internal server error
        res.status(500).json({ error: 'Error fetching cat image'});
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:$5000')
})