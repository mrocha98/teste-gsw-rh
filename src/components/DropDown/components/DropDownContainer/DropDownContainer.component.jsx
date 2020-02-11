import React from 'react';
import DropDownOption from '../DropDownOption/DropDownOption.component';
import './DropDownContainer.style.scss';

const DropDownContainer = ({ options, modifier }) => (
  <div className={modifier ? `drop-container ${modifier}` : 'drop-container'}>
    <h2 className="drop-title">Opções</h2>
    <ul className="drop-options">
      {options.map((option, index) => (
        <DropDownOption
          key={index}
          text={option.text}
          to={option.to}
          isButton={option.isButton}
          handleClick={option.handleClick}
        />
      ))}
    </ul>
  </div>
);

export default DropDownContainer;
