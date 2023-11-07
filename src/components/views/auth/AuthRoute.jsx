import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../Home';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = true;
  const location = useLocation();
  return (
    <Route {...rest}>
      {isAuthenticated ?(
        <Home />
      ) : (
        <Navlink to='/login' state={{ from: location }} />
      )}
    </Route>
  );
}