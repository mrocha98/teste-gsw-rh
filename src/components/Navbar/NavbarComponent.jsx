import React from 'react';
import propTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ReactComponent as SVGSWLogo } from '../../assets/logo-gsw-minimal.svg';
import DropDown from '../DropDown/DropDown.component';
import UserService from '../../redux/_services/user.service';

import './NavbarComponent.style.scss';

function NavbarComponent({ className, onMenuClicked }) {
  return (
    <nav className={`navbar ${className}`}>
      <Link to="/app/home" className="navbar--painel-1">
        <button
          type="button"
          className="icon-bars"
          disabled={isMobile}
          onClick={onMenuClicked}
        >
          <FontAwesomeIcon icon="bars" />
        </button>
        <span>Painel de controle</span>
      </Link>
      <div className="navbar--painel-2">
        <Link to="/" className="link">
          Página inicial
        </Link>
        <FontAwesomeIcon className="fa-circle" icon="circle" />
        <Link to="/" className="link">
          Ajuda
        </Link>
        <FontAwesomeIcon className="fa-circle" icon="circle" />
        <FontAwesomeIcon icon="search" className="search" />
        <div className="navbar__avatar--cont">
          <div className="navbar__avatar">
            <SVGSWLogo alt="MB" />
          </div>
          <DropDown
            options={[
              { text: 'Trocar senha', to: 'app/recover-password' },
              {
                text: 'Sair do sistema',
                isButton: true,
                handleClick: () => UserService.logout(),
              },
            ]}
          />
        </div>
      </div>
    </nav>
  );
}

NavbarComponent.propTypes = {
  className: propTypes.string,
  onMenuClicked: propTypes.func.isRequired,
};

NavbarComponent.defaultProps = {
  className: '',
};

export default NavbarComponent;
