import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './private.route';
import AuthRoutes from './auth.routes';
import Dashboard from '../pages/Dashboard/Dashboard.component';
import NotFoundPage from '../pages/NotFound/NotFound.page';

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <PrivateRoute path="/app" component={Dashboard} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
