import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';


// This page will display the users recipes
// They should be able to click on the recipe and be navigated to the recipe details page
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* message to let the user know whta recipes they have */}
      {/* map over recentRecipes((userRecipes, i)) */}
      <LogOutButton className="btn" />
    </div>



  );
}

// this allows us to use <App /> in index.js
export default UserPage;
