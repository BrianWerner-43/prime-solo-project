const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary.config');

// Using cloudinary so that a user can add an image
router.post('/', cloudinaryUpload.single('image'), async (req, res) => {
    console.log('req.body----->', req.body);
    console.log('req.file.path---->', req.file.path);
    const recipeTitle = req.body.title;
    const imageUrl = req.file.path;
    const recipe = req.body.recipe;
    const userId = req.user.id;


    const sqltext = `
    INSERT INTO "recipes"
     ( "image_url", "user_id", "title", "description")
     VALUES
     ($1, $2, $3, $4)
     RETURNING "id";`;

     const insertRecipeValues = [ imageUrl, userId, recipeTitle, recipe ]

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

// Edit route to hit if the user is NOT editing recipe photo:
router.put('/:id', (req, res) => {
   const userId = req.user.id
   const recipeId = req.params.id
   const recipeTitle = req.body.title;
   const recipeDescription = req.body.recipe
   console.log('req.body', req.body)
 
    const sqlText = `
    UPDATE "recipes"
       SET "title"= $1, "description"= $2
       WHERE "id" = $3 AND "user_id" = $4;`;
 
    const updateRecipeValues = [recipeTitle, recipeDescription, recipeId, userId]
 
    // query to update the recipe image and recipe details
    pool.query(sqlText, updateRecipeValues)
    .then(result => {
       res.sendStatus(201)
    }).catch((error) => {
       console.log('Error in our PUT route:', error);
       res.sendStatus(500);
    })
 })


// Edit route to hit if the user IS EDITING recipe photo:
router.put('/:id/image_edit', cloudinaryUpload.single('image'), async (req, res) => {
   console.log('req.body', req.body)
 
   console.log('req.file is:', req.file);
 
   const imageUrl = req.file.path;
   const recipeTitle = req.body.title;
   const recipeDescription = req.body.recipe
   const recipeId = req.params.id
   const userId = req.user.id
 
   const sqlText = `
   UPDATE "recipes"
      SET "image_url" = $1, "title"= $2, "description"= $3
      WHERE "id" = $4 AND "user_id" = $5;`;
 
   const updateRecipeValues = [imageUrl, userId, recipeTitle, recipeDescription, recipeId, ]
 
   // query to update the recipe image and recipe details
   pool.query(sqlText, updateRecipeValues)
   .then(result => {
      console.log('PUT route working--->', result);
      res.sendStatus(201)
   }).catch((error) => {
      console.log('Error in our PUT route:', error);
      res.sendStatus(500);
   })
 })

// router.put('/edit/:id', cloudinaryUpload.single('image'), async (req, res) => {
   
//    console.log('IN OUR PUT ROUTE---->', req.body);
//    console.log('req.file.path, PUT ROUTE---->', req.file.path);
//    let recipeImage;

//    if(!req.file) {
//       recipeImage = req.body.image_url;
//    } else {
//       recipeImage = req.file.path;
//    }
//    console.log('req.file is:', req.file);
//    // console.log('recipeImage is:', recipeImage)
//    const recipeTitle = req.body.title;
//    const imageUrl = req.file.path;
//    const userId = req.user.id
//    const recipeId = req.params.id
//    const recipeDescription = req.body.recipe

//    const sqlText = `
//    UPDATE "recipes"
//       SET "image_url" = $1, "user_id"= $2, "title"= $3, "description"= $4
//       WHERE "id" = $5;`;

//    const updateRecipeValues = [imageUrl, userId, recipeTitle, recipeDescription, recipeId, ]

//    // query to update the recipe image and recipe details
//    pool.query(sqlText, updateRecipeValues)
//    .then(result => {
//       console.log('PUT route working--->', result);
//       res.sendStatus(201)
//    }).catch((error) => {
//       console.log('Error in our PUT route:', error);
//       res.sendStatus(500);
//    })
// })

module.exports = router;