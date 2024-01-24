const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const recipeRouter = require('./routes/recipe.router');
const detailsRouter = require('./routes/details.router');
const recipeItemRouter = require('./routes/recipeItem.router');
const addRecipeRouter = require('./routes/addRecipe.router');
require('dotenv').config();


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
// recipe router for getting all the recipes
app.use('/api/recipe', recipeRouter);
// details router 
app.use('/api/details', detailsRouter);
// recipeInfo router used for the RecipeDetails page
app.use('/api/recipeItem', recipeItemRouter);
// addRecipe router to add recipe and image
app.use('/api/addRecipe', addRecipeRouter);
// The route to hit when a user is editing a recipe, but not an image
app.use('/api/addRecipe/:id', addRecipeRouter);
// The route to hit when a user is editing a recipe image
app.use('/api/addRecipe/:id/image_edit', addRecipeRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
