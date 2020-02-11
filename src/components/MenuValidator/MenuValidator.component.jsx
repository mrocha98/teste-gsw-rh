import React from 'react';
import propTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import Sidebar from '../Sidebar/Sidebar';
import PipeSidebar from '../PipeSideBar/PipeSideBar.component';
import './MenuValidator.style.scss';

export default function MenuValidator({ isMenuOpen, className }) {
  const classNameModifier = `${className} menu-validator`;
  const ChoosedMenu =
    isMenuOpen && isBrowser ? (
      <Sidebar className={`${classNameModifier}--side`} />
    ) : (
      <PipeSidebar className={`${classNameModifier}--pipe`} />
    );
  return <>{ChoosedMenu}</>;
}

MenuValidator.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
  className: propTypes.string,
};

MenuValidator.defaultProps = {
  className: '',
};
