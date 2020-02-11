import React from 'react';
import PropTypes from 'prop-types';
import './ContainerHeader.style.scss';
import '../../styles/_global.scss';

function ContainerHeader({ title }) {
  // Separate words in blank spaces
  const titleRegex = /\S+/g;
  return (
    <div className="container-header">
      <span className="--bold">{title.match(titleRegex)[0]}</span>{' '}
      {title
        .match(titleRegex)
        .slice(1)
        .join(' ')}
    </div>
  );
}

ContainerHeader.propTypes = {
  title: PropTypes.string,
};

ContainerHeader.defaultProps = {
  title: 'Páginal Inicial',
};

export default ContainerHeader;

ContainerHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ContainerHeader.defaultProps = {
  className: null,
  title: 'Página Inicial',
};
