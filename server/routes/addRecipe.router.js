const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary.config');

// Route to post a new recipe with an image
router.post('/', cloudinaryUpload.single('image'), async(req, res) => {
   try {
      console.log('req.body------>', req.body);
      console.log('req.file.path------>', req.file.path);

      const {title: recipeTitle, recipe: recipeDescription} = req.body
      const imageUrl = req.file.path;
      const userId = req.user.id;

      const sqlText = `
      INSERT INTO "recipes" ("image_url", "user_id", "title", description)
        VALUES ($1, $2, $3, $4)
        RETURNING "id";`;

        const insertRecipeValues = [imageUrl, userId, recipeTitle, recipeDescription]
        const result = await pool.query(sqlText, insertRecipeValues);
        console.log('POST result', result);
        res.sendStatus(201);
       }catch (error) {
       console.log('Error in the POST route', error)
       res.sendStatus(500)
      }
     });

// This is so that a user can edit an image
router.put('/:id', cloudinaryUpload.single('image'), async(req, res) => {
   try {
      console.log('Incoming PUT request for ID:', req.params.id);
      console.log('Request Body:', req.body);
      console.log('Request file:', req.file)
      let imageUrl = req.body.image_url;

      if (req.file) {
         imageUrl = req.file.path;
      }

      const {id} = req.params;
      const {title, description} = req.body;
      const userId = req.user.id;

      const updateRecipeQuery = `
      UPDATE recipes
       SET 
        image_url = $1,
        user_id = $2,
        title = $3,
        description = $4
        WHERE id = $5;`;

        const updateRecipeValues = [imageUrl, userId, title, description, id]
        console.log('updateRecipeValues is:', updateRecipeValues)

        await pool.query(updateRecipeQuery, updateRecipeValues);
        console.log('Recipe updated sucessfully!!');
        res.sendStatus(200);
   }catch (error) {
      console.error('error in the PUT route /api/addRecipe/:id', error);
      res.sendStatus(500)
   }
})

module.exports = router;



// Edit route to hit if the user is NOT editing recipe photo:
// router.put('/:id', (req, res) => {
//    const userId = req.user.id
//    const recipeId = req.params.id
//    const recipeTitle = req.body.title;
//    const recipeDescription = req.body.recipe
//    console.log('req.body', req.body)
 
//     const sqlText = `
//     UPDATE "recipes"
//        SET "title"= $1, "description"= $2
//        WHERE "id" = $3 AND "user_id" = $4;`;
 
//     const updateRecipeValues = [recipeTitle, recipeDescription, recipeId, userId]
 
//     // query to update the recipe image and recipe details
//     pool.query(sqlText, updateRecipeValues)
//     .then(result => {
//        res.sendStatus(201)
//     }).catch((error) => {
//        console.log('Error in our PUT route:', error);
//        res.sendStatus(500);
//     })
//  })


// Edit route to hit if the user IS EDITING recipe photo:
// router.put('/:id/image_edit', cloudinaryUpload.single('image'), async (req, res) => {
//    console.log('req.body', req.body)
 
//    console.log('req.file is:', req.file);
 
//    const imageUrl = req.file.path;
//    const recipeTitle = req.body.title;
//    const recipeDescription = req.body.recipe
//    const recipeId = req.params.id
//    const userId = req.user.id
 
//    const sqlText = `
//    UPDATE "recipes"
//       SET "image_url" = $1, "title"= $2, "description"= $3
//       WHERE "id" = $4 AND "user_id" = $5;`;
 
//    const updateRecipeValues = [imageUrl, userId, recipeTitle, recipeDescription, recipeId ]
 
//    // query to update the recipe image and recipe details
//    pool.query(sqlText, updateRecipeValues)
//    .then(result => {
//       console.log('PUT route working--->', result);
//       res.sendStatus(201)
//    }).catch((error) => {
//       console.log('Error in our PUT route:', error);
//       res.sendStatus(500);
//    })
//  })
