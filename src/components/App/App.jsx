import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import LocationProvder from '../LocationProvider.jsx';


// Component pages
import AboutPage from '../AboutPage/AboutPage';
import AddRecipe from '../AddRecipePage/AddRecipe';
import SearchRecipe from '../SearchRecipePage/SearchRecipe';
import EditPage from '../EditPage/EditPage';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Navbar from '../NavBar/NavBar';


import './App.css';



function App( ) {
  const dispatch = useDispatch();
  // const location = useLocation();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  

  // Animation configuration for the routes
  const routeVariants = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    }
  };

  const landingVariants = {
    initial: {
      opacity: 0,
      y: "50px"
    },
    final: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.5,
        delay: 0.25
      }
    }
  }
  

 
  


  return (
    <Router>
      <div>
        <Navbar />
        <AnimatePresence mode="wait">
        <Switch>
          <Route exact path="/">
          <Redirect to="/landing" />
          </Route>

          <Route exact path="/landing">
            
              <LandingPage routeVariants={landingVariants}/>
          </Route>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {/* <Redirect exact from="/" to="/landing" /> */}
          {/* <Route */}
            {/* // shows Landing page at all times (logged in or not)
            exact
            path="/landing" */}
          {/* > */}

            
          {/* </Route> */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user">
          
            <UserPage routeVariants={routeVariants}/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/about" guestCanAccess={true}> 
            <AboutPage routeVariants={routeVariants}/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/info" guestCanAccess={true}>
            <InfoPage routeVariants={routeVariants}/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/searchRecipe" guestCanAccess={true}>
            
            <SearchRecipe routeVariants={routeVariants}/>
          </ProtectedRoute>

          <Route
            exact
            path="/login">
           {user.id ? (
            <Redirect to="/user" />
           ) : user.isGuest ? (
            <Redirect to="/searchRecipe" />
           ) : (
            <LoginPage routeVariants={routeVariants} />
           )}
          
          </Route>

          <Route
            exact
            path="/registration">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <RegisterPage routeVariants={routeVariants}/>
            )}
  
          </Route>
          <Route
          exact
          path="/addRecipe">
            <AddRecipe routeVariants={routeVariants}/>
          </Route>
          <Route
            exact
            path="/details/:id">
             <RecipeDetails routeVariants={routeVariants}/>
          </Route>

          <Route
            exact
            path="/edit/:id">
              <EditPage routeVariants={routeVariants}/>
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
          {/* <LocationProvder /> */}
        </Switch>
        </AnimatePresence>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
