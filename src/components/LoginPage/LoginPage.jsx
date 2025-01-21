import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

function LoginPage({ routeVariants }) {
  const history = useHistory();

  

  return (
    <motion.div
    initial="initial"
    animate="final"
    variants={routeVariants}
  >
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
    </motion.div>
  );
}

export default LoginPage;
