import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonNav.style.scss';

const ButtonNav = () => {
  // Falta adicionar função para os botões de previous e next page
  return (
    <div className="prev-next-buttons">
      <button className="previous-page" type="button">
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <button className="next-page" type="button">
        <FontAwesomeIcon icon="chevron-right" />
      </button>
    </div>
  );
};

export default ButtonNav;
