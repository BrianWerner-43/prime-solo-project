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
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function RecipeDetails({}) {
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
      // Make a call to the store to retrieve the data for recipe details
      // useEffect and dispatch 


    return (
    // Should render the complex Interaction card
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         👨‍🍳 
        </Avatar>
      }
      
    />
    <CardMedia
      sx={{height: 300}}
      id={recipe.user_id}
      image={recipe.image_url}
      title={recipe.title}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {recipe.title}
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
          {recipe.description}
        </Typography>    
      </CardContent>
    </Collapse>
  </Card>
    )

}

export default RecipeDetails;