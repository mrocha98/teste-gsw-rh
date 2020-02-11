import React from 'react';
import PropTypes from 'prop-types';
import './PipeSideBar.style.scss';
import { ReactComponent as LogoGSWMinimal } from '../../assets/logo-gsw-minimal.svg';
import DropDown from '../DropDown/DropDown.component';

export default function PipeSideBar({ className }) {
  return (
    <aside className={`pipe-sidebar ${className}`}>
      <ul className="sidebar__list">
        <li className="list__item list__item--logo">
          <div className="logo__container">
            <LogoGSWMinimal className="container__svg" />
          </div>
        </li>
        <li className="list__item list__item--animated">
          <DropDown
            className="item__link"
            options={[{ text: 'Nova vaga', to: 'nova-vaga' }]}
            icon="plus-circle"
            modifier="drop-container--right-top"
            size="lg"
          />
        </li>
        <li className="list__item list__item--animated">
          <DropDown
            className="item__link"
            options={[{ text: 'Dashboard', to: 'home' }]}
            icon="chart-pie"
            modifier="drop-container--right-top"
            size="lg"
          />
        </li>
        <li className="list__item list__item--animated">
          <DropDown
            className="item__link"
            options={[
              { text: 'Nova Vaga', to: 'nova-vaga' },
              { text: 'Categorias', to: 'categorias' },
              { text: 'Competências', to: 'competencias' },
              { text: 'Labels', to: 'labels' },
            ]}
            icon="briefcase"
            modifier="drop-container--right-top"
            size="lg"
          />
        </li>
        <li className="list__item list__item--animated">
          <DropDown
            className="item__link"
            options={[{ text: 'Ver todas vagas', to: 'vagas' }]}
            icon="id-badge"
            modifier="drop-container--right-top"
            size="lg"
          />
        </li>
        <li className="list__item list__item--animated">
          <DropDown
            className="item__link"
            options={[
              { text: 'Banco de talentos', to: 'banco-de-talentos' },
              { text: 'Adicionar talentos', to: 'adicionar-talentos' },
            ]}
            icon="user-plus"
            modifier="drop-container--right-top"
            size="lg"
          />
        </li>
      </ul>
    </aside>
  );
}

PipeSideBar.propTypes = {
  className: PropTypes.string,
};

PipeSideBar.defaultProps = {
  className: '',
};
