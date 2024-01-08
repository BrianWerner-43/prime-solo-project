const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Delete request to the database
router.delete('/delete/:id', (req, res) => {
    const queryText = `DELETE FROM recipes WHERE id = $1;`;

    pool.query(queryText, [req.params.id])
    .then(response => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error with delete in the server', error);
        res.sendStatus(500)
    })
});



/**
 * GET route for recipes
 */
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const queryText = `SELECT * FROM "recipes" WHERE "user_id" = $1;`;
    const sqlValues = [userId]
   
    pool.query(queryText, sqlValues)
    .then(result => {
        console.log('Checking req.params.userId', req.params.userId);
        console.log('Checking the response from the DB', result.rows);
        res.send(result.rows)
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
