const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Getting the detalis for an recipe item for the details page
router.get('/:id', (req,res) => {
    const idToGet = req.params.id;
    console.log('Testing the the id recipe item:', idToGet);

    const queryText = `
    SELECT * FROM recipes
      WHERE recipes.id = $1;`;


    pool.query(queryText, [idToGet])
    .then((result) => {
        console.log('result.rows:', result.rows);
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log('Error with recipe item query:', queryText)
        res.sendStatus(500)
    })

});

module.exports = router