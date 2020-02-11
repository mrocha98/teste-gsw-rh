import React from 'react';
import PropTypes from 'prop-types';
import { File } from 'react-kawaii';
import './NotFound.style.scss';
import { withRouter } from 'react-router-dom';

function NotFound({ history }) {
  return (
    <article className="not-found">
      <File className="not-found__file" size={200} mood="ko" color="#EEE8E8" />
      <hgroup className="not-found__titles">
        <h1>Oooops!</h1>
        <h2>Erro 404</h2>
        <h3>Página não encontrada</h3>
        <button
          type="button"
          className="titles__back"
          onClick={() => history.goBack()}
        >
          <span className="back__arrow">↜</span> Voltar à civilização
        </button>
      </hgroup>
    </article>
  );
}

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default withRouter(NotFound);
