import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import render from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toast.style.scss';

export default function Toast({
  header,
  footer,
  body,
  toggled,
  type = 'default',
  onClose,
  duration,
}) {
  const ToastContent = () => (
    <div className={`toast is-${type}`}>
      {header ? <header className="toast__header">{header}</header> : null}
      {body ? <section className="toast__body">{body}</section> : null}
      {footer ? <footer className="toast__footer">{footer}</footer> : null}
      <button className="toast__close" type="button" onClick={onClose}>
        <FontAwesomeIcon icon="times" />
      </button>
    </div>
  );

  useEffect(() => {
    if (toggled) setTimeout(onClose, duration);
  }, [onClose, duration, toggled]);

  return toggled ? render.createPortal(<ToastContent />, document.body) : null;
}

Toast.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  body: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  toggled: PropTypes.bool,
  type: PropTypes.oneOf(['alert', 'default', 'error', 'info', 'success']),
  duration: PropTypes.number,
};

Toast.defaultProps = {
  header: null,
  footer: null,
  body: null,
  toggled: false,
  type: 'default',
  duration: 3500,
};
