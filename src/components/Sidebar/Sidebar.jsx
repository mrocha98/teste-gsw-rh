import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/profile/Profile.component';
import MenuList from './components/menuList/MenuList.component';
import './Sidebar.style.scss';

function Sidebar({ className }) {
  return (
    <aside className={`sidebar ${className}`}>
      <Profile />
      <MenuList />
      <div className="int-by">powered by GSW</div>
    </aside>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
};
