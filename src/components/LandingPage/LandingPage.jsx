import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage({ routeVariants }) {
  const [heading, setHeading] = useState('Welcome to Cooking with Confidence an easy to use app to use to save all of your favorite recipes!');
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogin = (event) => {
    history.push('/login');
  };

   // This is for handling continue as a guest
   const handleGuestLogin = () => {
    dispatch({ type: 'SET_GUEST_USER'});
    history.push('/user')
  }

  return (
    <motion.div
      initial="initial"
      animate="final"
      variants={routeVariants}
    >
    <div className="container">
      <h2>{heading}</h2>
       
        <div className="registerBtn2">
          <RegisterForm />
        </div>
         <center className='memberLogin'>
            <h4 className='memberHeader'>Already a Member?</h4>
            <button className="btn" onClick={onLogin}>
              Login
            </button>
            <button
              type="button"
              className="guestBtn"
              onClick={handleGuestLogin}
          >
            Continue as Guest
          </button>
        </center>
       
    </div>
    </motion.div>
  );
}

export default LandingPage;
