import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
// import Logo from '/../../public/chef_dude.jpeg';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* <Link to="/home"> */}
        {/* <img className="nav-title" src="/images/chef_dude.jpeg" /> */}
      {/* </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            {/* // If there's no user, show login/registration links */}
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
            </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/addRecipe">
              Add recipe
            </Link>

            <Link className="navLink" to="/searchRecipe">
              Search 
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>


            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
