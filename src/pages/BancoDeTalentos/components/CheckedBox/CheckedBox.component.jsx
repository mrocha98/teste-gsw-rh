import React from 'react';
import './CheckedBox.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CheckedBox({ label, checked, onChange, className }) {
  return (
    <>
      <label className={`CheckBoxcontainer ${className}`}>
        <input
          type="checkbox"
          checked={checked ? 'checked' : ''}
          onChange={onChange}
        />
        <span className="CheckBoxcheckmark">
          <FontAwesomeIcon size="sm" icon="check" color="white" />
        </span>
        <span className="CheckBoxLabel">{label}</span>
      </label>
    </>
  );
}

export default CheckedBox;
