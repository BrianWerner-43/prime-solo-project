// const express = require('express');
// const axios = require('axios');
// const { spoonacularApiKey } = require('../modules/spoonacular.config');
// const router = express.Router();

// router.get('/', async (req, res) => {
//     const query = req.query.q;

//     if (!query) {
//         return res.status(400).send('Query parameter "q" is required')
//     }

//     try {
//         const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
//             params: {
//                 query: query,
//                 apiKey: spoonacularApiKey,
//             }
//         });
//         res.json(response.data)
//         console.log('response.datad is ------>', response.data)
//     } catch (error) {
//         console.error('Error fetching the recipes from Spoonacular API', error)
//         res.status(500).send('Error fetching recipes')
//     }
// })

// module.exports = router;