const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require('../modules/cloudinary.config');

// Route to post a new recipe with an image
router.post('/', cloudinaryUpload.single('image'), async(req, res) => {
   try {
      console.log('req.body------>', req.body);
      console.log('req.file.path------>', req.file.path);

      const {title: recipeTitle, description: recipeDescription, ingredients, procedure} = req.body
      const imageUrl = req.file.path;
      const userId = req.user.id;

      const sqlText = `
      INSERT INTO "recipes" ("image_url", "user_id", "title", "description", "ingredients", "procedure")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING "id";`;

        const insertRecipeValues = [imageUrl, userId, recipeTitle, recipeDescription, ingredients, procedure]
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
      const {
         title = '', 
         description ='', 
         ingredients = '', 
         procedure =''} = req.body;

      const userId = req.user.id;

      // Check that fields are required 
      

      const updateRecipeQuery = `
      UPDATE "recipes"
       SET 
        image_url = $1,
        user_id = $2,
        title = $3,
        description = $4,
        ingredients = $5,
        procedure =$6
        WHERE id = $7;`;

        const updateRecipeValues = [imageUrl, userId, title, description, ingredients, procedure, id]
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



