import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TalentItem.style.scss';
import CheckBox from '../../../../pages/BancoDeTalentos/components/CheckedBox/CheckedBox.component';

const TalentItem = ({
  name,
  email,
  uf,
  city,
  //categoria,
  // competencias,
  // labels,
  //experiencia,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <li className="talent">
      <CheckBox onChange={handleCheck} checked={checked} />
      <div className="talent__avatar">
        <span className="avatar__letter">{name.charAt(0)}</span>
      </div>
      <div className="talent__info">
        <h2 className="info__name">{name}</h2>
        <p className="info__content">
          {/*categoria.slice().join('/')}: {experiencia*/}
          {uf} - {city}
        </p>
        <p className="info__content">
          {/*categoria.slice().join('/')}: {experiencia*/}
          {email}
        </p>
      </div>
      <button className="talent__button" type="button">
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
    </li>
  );
};

TalentItem.propTypes = {
  name: PropTypes.string.isRequired,
  //categoria: PropTypes.arrayOf(PropTypes.string).isRequired,
  //experiencia: PropTypes.string.isRequired,
  // checked: PropTypes.bool.isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default TalentItem;
