import React from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.style.scss';
import ContainerHeader from '../ContainerHeader/ContainerHeader';

export default function Modal({ header, content, footer, toggled, onClose }) {
  const ModalContent = () => (
    <section className="modal">
      <section className="modal__body">
        {header ? (
          <ContainerHeader className="body__header" title={header} />
        ) : null}
        {content ? (
          <article className="body__content">{content}</article>
        ) : null}
        {footer ? <footer className="body__footer">{footer}</footer> : null}
      </section>
      <button className="modal__close" type="button" onClick={onClose}>
        <FontAwesomeIcon icon="times" color="white" size="3x" />
      </button>
    </section>
  );

  return toggled ? render.createPortal(<ModalContent />, document.body) : null;
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  toggled: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  header: 'Mensagem',
  content: null,
  footer: null,
  toggled: false,
};
