import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Cooking with Confidence an easy to use app to give you the confidence to cook at home!');
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
    <div className="container">
      <h2>{heading}</h2>
       
        <div className="registerBtn2">
          <RegisterForm />
        </div>
         <center className='memberLogin'>
            <h4>Already a Member?</h4>
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
  );
}

export default LandingPage;
