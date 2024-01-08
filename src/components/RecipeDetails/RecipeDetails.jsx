import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './RecipeDetails.css';


// Creating a function that will display the recipe and recipe detals
function RecipeDetails() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();
  const details = useSelector(store => store.setDetailsReducer);
  



// Sending a call to the store to retrieve the recipe details for the user
  
  useEffect(() =>{
    console.log('Expect to get the ids:', ID);
    dispatch({
      type: "SAGA_GET_DETAILS",
      payload: ID.id  
    })
    
  }, [])
  

  return (
  <div className="container">
    <div>
      
      <img src={details.image_url} />
      <h1>{details.title}</h1>
      <h2>Method:</h2>
      <p>{details.description}</p>

      <button className="back-btn" onClick={() => history.goBack()}>👈</button>
     </div>
    </div>
  )
  


    

}

export default RecipeDetails;