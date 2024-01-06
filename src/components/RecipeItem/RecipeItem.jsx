import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// This function will make the recipe images into cards and when a user clicks on an image
// They will be brought to the recipe details page
function RecipeItem({recipe}) {
    const dispatch = useDispatch();
    const history = useHistory();


         // useDispatch to call the saga
         const handleClick = () => {
         dispatch({
            type: "SAGA_GET_DETAILS",
            payload: recipe.id
         })
         history.push(`/details/${recipe.id}`);
        }
      

      return (
        //   Using Mateial Ui to make the recipe images into cards logic here
        <Grid className="card-border" data-testid="movieItem">
        <Card sx={{ minWidth: 200, maxWidth: 200, minHeight: 300, maxHeigh: 300 }}>
          <CardMedia
            sx={{ height: 300 }}
            id={recipe.user_id}
            image={recipe.image_url}
            title={recipe.title}
            onClick={handleClick}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.title}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>
    
        
      );



}


export default RecipeItem;