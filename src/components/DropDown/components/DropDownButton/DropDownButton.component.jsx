import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropDownButton.style.scss';

const DropDownButton = ({ onClick, icon, size }) => (
  <button className="dropdown-button" type="button" onClick={onClick}>
    <FontAwesomeIcon size={size} icon={icon ? `${icon}` : 'chevron-down'} />
  </button>
);

export default DropDownButton;
