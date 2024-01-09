const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary.config');

router.post('/', cloudinaryUpload.single('image'), async (req, res) => {
    console.log('req.body----->', req.body);
    console.log('req.file.path---->', req.file.path);
    const recipeTitle = req.body;
    const imageUrl = req.file.path;
    const recipe = req.body;

    const sqltext = `
    INSERT INTO "recipes"
     ("user_id", "title", "description")
     VALUES
     ($1, $2, $3)
     RETURNING "id";`;

     const insertRecipeValues = [recipeTitle, imageUrl, recipe ]

     // query to add recipe title, recipe image and recipe
     pool.query(sqltext, insertRecipeValues)
     .then(result => {
        console.log('POST route working?--->', result);
        res.sendStatus(201);
     }).catch(error => {
        console.log('Error in our POST', error);
        res.sendStatus(500)
     })
});

module.exports = router;