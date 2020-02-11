import React from 'react';
import { createPortal } from 'react-dom';
import logo from '../../assets/gsw-logo-flip.svg';
import './Loader.style.scss';

const Loader = ({ isLoading }) =>
  isLoading
    ? createPortal(
        <div className="loader">
          <img className="loader__img" src={logo} alt="Loader GSW logo" />
          <h2 className="loader__msg">Carregando...</h2>
        </div>,
        document.body,
      )
    : null;

export default Loader;
