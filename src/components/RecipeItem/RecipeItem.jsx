import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


function RecipeItem({recipe}) {
 const dispatch = useDispatch();
 const history = useHistory();

 const handleClick = () => {
  dispatch({
    type: 'SAGA_GET_RECIPES',
    payload: recipe.id

  })

  history.push(`/details/${recipe.id}`)
 }

 return (
  <Grid className="card-border">
        <Card sx={{ minWidth: 250, maxWidth: 300, minHeight: 300, maxHeight: 380 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={recipe.image_url}
            title={recipe.title}
            description={recipe.description}
            ingredients={recipe.ingredients}
            procedure={recipe.procedure}
            onClick={handleClick}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {recipe.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
 )
}
export default RecipeItem;
    






