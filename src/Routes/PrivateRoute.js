import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({
  component: Component,
  redirectTo: address,
  redirectTo: contacts,
}) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return !isLoggedIn ? (
    <Navigate to={address} />
  ) : (
    <Navigate to={contacts} /> && <Component />
  );
};

export default PrivateRoute;
