const express = require('express');
const axios = require('axios');
const { spoonacularApiKey } = require('../modules/spoonacular.config');
const router = express.Router();

router.get('/', async (req, res) => {
    const query = req.query.q;
    const number = req.query.number || 50;
    const offset = req.query.offset || 0;

    if (!query) {
        return res.status(400).send('Query parameter "q" is required')
    }

    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                query: query,
                number: number,
                offset: offset,
                apiKey: spoonacularApiKey,
                addRecipeInformation: true,
               
               
            }   
        });
        res.json(response.data)     
        console.log('response.data is ------>', response.data)
    } catch (error) {
        console.error('Error fetching the recipes from Spoonacular API', error)
        res.status(500).send('Error fetching recipes')
    }
})

module.exports = router;