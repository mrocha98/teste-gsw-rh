import React, { useState } from 'react';
import './DropDown.style.scss';
import DropDownButton from './components/DropDownButton/DropDownButton.component';
import DropDownContainer from './components/DropDownContainer/DropDownContainer.component';

const DropDown = ({ className, options, modifier, icon, size }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`dropdown-box ${className}`}>
      <DropDownButton onClick={handleClick} icon={icon} size={size} />
      <DropDownContainer modifier={modifier} options={options} />
    </div>
  );
};

export default DropDown;
