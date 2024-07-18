import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// This function that will handle the inputs for the user to be able 
// to add a new recipe with an image
function AddRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const formData = new FormData();
  const [title, setTitle] = useState('');
  const [image_url, setImage_url] = useState([]);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [procedure, setProcedure] = useState('');
  
    

  //will have to call to the store for the saga and reducer
  const handleSubmit = (event) => {
    event.preventDefault();
    formData.append('image', image_url[0]);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('procedure', procedure);
   

    
    dispatch({
      type: 'SAGA/ADD_RECIPE',
      payload: formData
    })
    history.push('/user');

  }
  // const fillMyForm = () => {
  //   setTitle('Chicken soup')
  //   setRecipe('1 tablespoon butter,½ cup chopped onion, ½ cup chopped celery, 4 (14.5 ounce) cans chicken broth,1 (14.5 ounce) can vegetable broth, ½ pound chopped cooked chicken breast,1 ½ cups egg noodles, 1 cup sliced carrots,½ teaspoon dried basil,½ teaspoon dried oregano,salt and ground black pepper to taste, Directions,Melt butter in a pot over medium heat add onion and celery and cook until just tender, about 5 minutes, add chicken broth, vegetable broth, chicken and egg noodles, carrots, basil, oregano, salt, and pepper. Stir to combine and bring to a boil, Reduce heat and simmer for 20 minutes.')  
   
  // }

  return (
    <div className="container">
      <h2>Add Your favorite recipes {user.username}!</h2>
    <form onSubmit={handleSubmit}>
      <input onChange={(event) => setTitle(event.target.value)}
            name="title"
            placeholder="Recipe Title"
            value={title}
             
             />
             <br></br>
      <input onChange={(event) => setImage_url(event.target.files)}
             type="file"
             name='image'
             
             />
             <br></br>
      <input onChange={(event) => setDescription(event.target.value)}
             name="description"
             placeholder='Description'
             value={description}
             />
             <br></br>

      <textarea onChange={(event) => setIngredients(event.target.value)}
            name="recipe"
            cols="30"
            rows="10"
            wrap="hard"
            placeholder="Ingredients"
            value={ingredients}
             />
             <br></br>
      <textarea onChange={(event) => setProcedure(event.target.value)}
            name="procedure"
            cols="30"
            rows="10"
            placeholder='Procedure'
            value={procedure}
            />
        
      <button type="submit">Submit</button>
    </form>
    </div>
    
  )
}
export default AddRecipe;