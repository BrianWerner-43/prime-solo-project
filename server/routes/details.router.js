const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Router for recipe details
router.get('/:id', (req, res) => {
    const idToGet = req.params.id;
    console.log('Checking the idToGet', idToGet);


    // Query for just displaying the recipes

    const queryText = `
    SELECT * FROM recipes
      WHERE recipes.id = $1;`;

    pool.query(queryText, [idToGet])
    .then((result) => {
        console.log('result.rows:', result.rows[0]);
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log('Error with our query:', queryText);
        res.sendStatus(500)
    })
});

module.exports = router