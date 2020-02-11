import React from 'react';
import { Redirect } from 'react-router-dom';
import MainRoutes from './routes/main.routes';
import 'normalize.css';
import 'antd/dist/antd.min.css';
import './App.scss';

export default function App() {
  return (
    <>
      <MainRoutes />
      <Redirect to="/auth/login" />
    </>
  );
}
