import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './MenuList.style.scss';
import SubItems from '../subItems/SubItems.component';

export default function MenuList() {
  const [dropDownToogled, setDropDownToggled] = useState(true);
  const dropDownHandler = () => setDropDownToggled(!dropDownToogled);

  return (
    <section className="menu-list">
      <section className="menu-list__principal">
        <Link className="principal__link" to="/">
          <FontAwesomeIcon icon="plus-circle" />
          <span>Abrir uma nova vaga</span>
        </Link>
      </section>
      <nav className="menu-list__nav">
        <ul className="nav__items">
          <li className="items__item">
            <Link className="item__link" to="/app">
              <FontAwesomeIcon className="link__icon" icon="chart-pie" />
              <span className="link__text">Dashboard</span>
            </Link>
          </li>
          <li className="items__item">
            <div
              className="item__link item__link--toggleable"
              onClick={dropDownHandler}
              onKeyDown={dropDownHandler}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon className="link__icon" icon="briefcase" />
              <span className="link__text">Novo Cadastro</span>
              <FontAwesomeIcon
                className="link__icon--dropdown"
                icon="chevron-down"
                transform={dropDownToogled ? { rotate: 180 } : { rotate: 0 }}
              />
            </div>
            {dropDownToogled ? <SubItems active={dropDownToogled} /> : null}
          </li>
          <li className="items__item">
            <Link className="item__link" to="/app/vagas">
              <FontAwesomeIcon className="link__icon" icon="id-badge" />
              <span className="link__text">Ver todas vagas</span>
            </Link>
          </li>
          <li className="items__item">
            <Link className="item__link" to="/app/banco-de-talentos">
              <FontAwesomeIcon className="link__icon" icon="user-plus" />
              <span className="link__text">Banco de talentos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
