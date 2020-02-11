import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login/Login.page';

export default function AuthRoutes() {
  return (
    <>
      <Route path="/auth/login" exact component={Login} />
      <Redirect from="/auth" to="/auth/login" exact />
    </>
  );
}
