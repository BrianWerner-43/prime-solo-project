const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




/**
 * GET route for recipes
 */
router.get('/:userId', (req, res) => {
    const queryText = `SELECT * FROM "recipes" WHERE "user_id" = $1;`;

    pool.query(queryText, [req.params.userId])
    .then(response => {
        console.log('Checking the response from the DB', response.rows);
        res.send(response.rows)
    }).catch(error => {
        console.log('Error with the get route on the server side:', error);
        res.sendStatus(500)
    })
  
});

/**
 * POST route for recipes
 */
router.post('/', (req, res) => {
  
});

module.exports = router;
