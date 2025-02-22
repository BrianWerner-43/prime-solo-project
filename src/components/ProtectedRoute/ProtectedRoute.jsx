import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

function ProtectedRoute({ component: Component, children, guestCanAccess, ...props }) {
  const user = useSelector((store) => store.user);

  // Component may be passed in as a "component" prop,
  // or as a child component.
  const ProtectedComponent = Component || (() => children);



  // We return a Route component that gets added to our list of routes
  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
      render={(routeProps) => 
        // Allow access if user is logged in or it is a guest accessible route
        user.id || (user.isGuest && guestCanAccess) ? (
          <ProtectedComponent {...routeProps} />
        ) : (
          // Redirect to login or search page if a guest
          <Redirect to="/login" />
        )
      }
    >
     
    </Route>

  );
}

export default ProtectedRoute;
