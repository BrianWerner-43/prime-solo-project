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
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';



function RecipeDetails({}) {
  
  const dispatch = useDispatch();
  const ID = useParams();
  const recipe = useSelector(store => store.details);


// Sending a call to the store to retrieve the recipe details for the user
  
  useEffect(() =>{
    console.log('Expect to get the ids:', ID);
    dispatch({
      type: "SAGA_GET_DETAILS",
      payload: ID.id
    })
  }, [])


    // Using Material UI complex Interaction card
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
        console.log('recipe:', recipe);
        setExpanded(!expanded);
      }
      



    return (
    // Mapping over the users recipes and display the selected rcipe on the DOM
    <div>
      {recipe.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345}}>

      

    {/* // Should render the complex Interaction card */} 
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         👨‍🍳 
        </Avatar>
      }
      
    />
    <CardMedia
      sx={{height: 300}}
      id={item.user_id}
      image={item.image_url}
      title={item.title}
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {item.title}
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
          {item.description}
        </Typography>    
      </CardContent>
    </Collapse>
  </Card>
  ))}
  </div>
    )

}

export default RecipeDetails;