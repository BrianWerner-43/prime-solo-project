import * as React from 'react';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';

// New MUI imports:
import {Card, 
       CardHeader,
       CardMedia,
       CardContent,
       CardActions,
       IconButton,
       Typography,
       Grid,
       Button} from '@mui/material';
import { green } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './RecipeDetails.css';
import Swal from 'sweetalert2';

// Complex Interaction card material UI function
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Creating a function that will display the recipe and recipe detals
function RecipeDetails () {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();
  const details = useSelector(store => store.setDetailsReducer);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
  setExpanded(!expanded);
};
  


  // Delete function that will delete the recipe
   // As well as using a sweet alet to give the user the option to delete or not
   const handleDelete = () => {
    
    Swal.fire({
      title: `Are you sure you want to delete ${details.title} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(() => {
          dispatch({
            type: 'DELETE_RECIPE',
            payload: details.id
          });
          history.push("/user");
          
        });
      }
    });
   };

  // Edit function that when clicked it will bring the user to the edit recipe page
  const handleEditBtn = () => {
    // Make a dispatch to the saga for the added recipe
    dispatch({
      type: "SAGA_GET_RECIPES",
      payload: ID.id
    })
    history.push(`/edit/${ID.id}`)
    
  };

  //Add button that when clicked it will bring the user to the add recipe page
  const handleAddBtn = () => {
    history.push('/addRecipe')
  }

// Sending a call to the store to retrieve the recipe details for the user
   useEffect(() =>{
    console.log('Expect to get the ids:', ID);
    dispatch({
      type: "SAGA_GET_DETAILS",
      payload: ID.id  
    })
    
  }, [dispatch, ID])

  // New code for reformatting the recipe cards

  return (
    <div className="container">
      <div className="image-border">
        <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
          <CardHeader 
            avatar={
              <Avatar sx={{ bgcolor: green[600] }} aria-label="logo">
                cwc
              </Avatar>
            }
              
          />
          <Typography  variant='h6' component="div" style={{marginBottom: "20px",fontFamily: '"Noconsequence"', color: 'seagreen'}}>
             {details.title}
            </Typography>
          <CardMedia
            component="img"
            height="300"
            image={details.image_url}
          />
          <CardContent>
            <Typography variant='h6' component="div" style={{fontFamily: '"Noconsequence"', color: 'seagreen'}}>Description: {details.description}</Typography>
            
            <Typography variant="h6" component="div" style={{marginTop: 16, fontFamily: '"Noconsequence"'}}>Ingredients:</Typography>
            <Grid container spacing={1}>
              {details.ingredients && details.ingredients.split(',').map((ingredient, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="body2" style={{whiteSpace: 'pre-line', fontFamily: 'fantasy'}}>{ingredient}</Typography>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" component="div" style={{ marginTop: 16, fontFamily: '"Noconsequence"' }}>Procedure: </Typography>
            <Typography variant="body2" component="div" style={{whiteSpace: 'pre-line', marginTop: 8, fontFamily: 'fantasy'}}>{details.procedure}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Button onClick={() => history.goBack()} variant="contained" color="primary" style={{ marginRight: 8 }}>
                👈 Go back
              </Button>
              <Button onClick={handleAddBtn} variant="contained" color="secondary" style={{ marginRight: 8 }}>
                Add Recipe
              </Button>
              <Button onClick={handleEditBtn} variant="contained" style={{ backgroundColor: '#FFA726', marginRight: 8 }}>
                Edit
              </Button>
              <Button onClick={handleDelete} variant="contained" color="error">
                Delete
              </Button>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
export default RecipeDetails;
  

  
  


