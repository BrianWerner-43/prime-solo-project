import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';


// Creating a function that will display the recipe and recipe detals
function RecipeDetails() {
  // console.log('In recipeDetails:', RecipeDetails);
  
  const dispatch = useDispatch();
  const ID = useParams();
  const details = useSelector(store => store.setDetailsReducer);
  // const recipes = useSelector(store => store.setRecipes);



// Sending a call to the store to retrieve the recipe details for the user
  
  useEffect(() =>{
    console.log('Expect to get the ids:', ID);
    dispatch({
      type: "SAGA_GET_DETAILS",
      payload: ID.id
      
    })
  }, [])
  console.log('checking details:', details);

  return (
  <div className="container">
    <div>
      <h2>Hello User!</h2>
      <img src={details.image_url} />
      <h1>{details.title}</h1>
      <p>{details.description}</p>

      {/* {recipes.map((item, i) => (
        <p key={i}>{item.user_id}</p> */}
      {/* ))} */}
     </div>
    </div>
  )
  


    

}

export default RecipeDetails;