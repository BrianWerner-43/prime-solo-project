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
       
      </div>
    </div>
  );
}

export default Nav;
