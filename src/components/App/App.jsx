import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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

function App() {
  const dispatch = useDispatch();
  
  

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/landing" />

          <Route
            // shows Landing page at all times (logged in or not)
            exact
            path="/landing"
          >
            <LandingPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows AboutPage
            exact
            path="/about"
          >
            <AboutPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in will show the info page once clicked
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/user"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route exact path='/landing'>
            <LandingPage />
          </Route>
          
          <Route
            exact
            path="/details/:id">
             <RecipeDetails />
          </Route>

          <Route
            exact
            path="/addRecipe">
              <AddRecipe />
          </Route>

          <Route
            exact
            path="/searchRecipe">
              <SearchRecipe />
          </Route>

          <Route
            exact
            path="/edit/:id">
              <EditPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
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
