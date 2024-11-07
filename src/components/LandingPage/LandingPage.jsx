import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Cooking with Confidence an easy to use app to give you the confidence to cook at home!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

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
          </center>
       
    </div>
  );
}

export default LandingPage;
