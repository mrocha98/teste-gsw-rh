import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PrivateRoute } from './private.route';
import Home from '../pages/Home/HomePage';
import Categorias from '../pages/Categorias/Categorias.page';
import BancoDeTalentos from '../pages/BancoDeTalentos/BancoDeTalentos.page';
import AdicionarTalentos from '../pages/AdicionarTalentos/AdicionarTalentos.page';

export default function ContainerRoutes() {
  return (
    <>
      <PrivateRoute path="/app/home" exact component={Home} />
      <PrivateRoute path="/app/dashboard" exact component={Home} />
      <PrivateRoute path="/app/categorias" exact component={Categorias} />
      <PrivateRoute
        path="/app/adicionar-talentos"
        exact
        component={AdicionarTalentos}
      />
      <PrivateRoute
        path="/app/banco-de-talentos"
        exact
        component={BancoDeTalentos}
      />
      <Route
        path="/app"
        exact
        render={() => <Redirect from="/app" to="/app/home" />}
      />
    </>
  );
}
