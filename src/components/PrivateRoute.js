import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo: address }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return !isLoggedIn ? <Navigate to={address} /> : <Component />;
};

export default PrivateRoute;
