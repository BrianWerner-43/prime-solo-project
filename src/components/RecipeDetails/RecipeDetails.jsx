import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './RecipeDetails.css';
import Swal from 'sweetalert2';
import { BloodtypeOutlined } from '@mui/icons-material';



// Creating a function that will display the recipe and recipe detals
function RecipeDetails() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();
  const details = useSelector(store => store.setDetailsReducer);
  
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
          history.push("/");
          
        });
      }
    });
   };

  // Edit function that when clicked it will bring the user to the edit recipe page
  const handleEditBtn = (id) => {
    history.push(`/edit/${id}`)
    
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
    
  }, [])
  
// The render for the Complex Interaction card from material UI
  return (
  <div className="container">
    <div className="image-border">
     
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="logo">
            cwc
          </Avatar>
        }
        title={details.title}  
      />
       <CardMedia
       sx={{height: 300 }}
       image={details.image_url}  
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>  
          {details.description}
          </Typography>
      </CardContent>
      </Collapse>
    </Card>
  
      
      <button className="back-btn" onClick={() => history.goBack()}>👈 Go back</button>
      <button className="add-btn" onClick={handleAddBtn}>Add Recipe</button>
      <br></br>
      <button className="edit-btn"  onClick={handleEditBtn}>Edit</button>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
      
     </div>
    </div>
    
  );
}
    
  
  


export default RecipeDetails;