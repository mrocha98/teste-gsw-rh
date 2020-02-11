import React from 'react';
import { Link } from 'react-router-dom';
import './DropDownOption.style.scss';

const DropDownOption = ({ text, to, handleClick, isButton }) =>
  isButton ? (
    <button className="dropdown-option" type="button" onClick={handleClick}>
      {text}
    </button>
  ) : (
    <Link to={to} className="dropdown-option">
      {text}
    </Link>
  );

export default DropDownOption;
