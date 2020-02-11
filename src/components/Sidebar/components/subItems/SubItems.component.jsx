import React from 'react';
import PropTypes from 'prop-types';
import './SubItems.style.scss';
import { Link } from 'react-router-dom';

export default function SubItems({ active }) {
  return (
    <section className={`sub-items${active ? '--active' : ''}`}>
      <nav className="menu-list__nav nav--sub">
        <div className="sub-container__line" />
        <ul className="nav__items nav__sub-items">
          <li className="items__item">
            <Link className="item__link--sub" to="nova-vaga">
              <span className="link__text--sub">Nova vaga</span>
            </Link>
          </li>
          <li className="items__item">
            <Link className="item__link--sub" to="adicionar-talento">
              <span className="link__text--sub">Novo talento</span>
            </Link>
          </li>
          <li className="items__item">
            <Link className="item__link--sub" to="categorias">
              <span className="link__text--sub">Categorias</span>
            </Link>
          </li>
          <li className="items__item">
            <Link className="item__link--sub" to="competencias">
              <span className="link__text--sub">Competências</span>
            </Link>
          </li>
          <li className="items__item">
            <Link className="item__link--sub" to="labels">
              <span className="link__text--sub">Labels</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

SubItems.propTypes = {
  active: PropTypes.bool,
};

SubItems.defaultProps = {
  active: false,
};
