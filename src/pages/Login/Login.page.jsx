import React, { useState, useCallback } from 'react';
import { ReactComponent as LogoGSW } from '../../assets/logo-gsw.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader.component';

import { login as LoginAction } from '../../redux/_actions/user.actions';

import './Login.styles.scss';
import useLoader from '../../components/Loader/useLoader';

function Login({ login, isLoading, isAuthenticated, error, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader] = useLoader();

  const handleSetPassword = useCallback(
    e => {
      const { value } = e.target;
      setPassword(value);
    },
    [setPassword],
  );

  const handleSetEmail = useCallback(
    e => {
      const { value } = e.target;
      setEmail(value);
    },
    [setEmail],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      login(email, password);
    },
    [email, password, login],
  );

  if (isAuthenticated) {
    history.push('/app');
  }

  return (
    <section className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <LogoGSW className="form__logo" />
        {loader}
        {isLoading ? <Loader isLoading /> : null}
        {error ? <span style={{ color: 'red' }}>{error}</span> : null}

        <input
          onChange={handleSetEmail}
          className="form__input"
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          placeholder="Seu login"
          disabled={isLoading ? 'disabled' : null}
          required
        />
        <input
          onChange={handleSetPassword}
          className="form__input"
          type="password"
          name="password"
          value={password}
          placeholder="Sua senha"
          minLength="3"
          disabled={isLoading ? 'disabled' : null}
          required
        />
        <Link className="form__forgot" to="/login">
          Recuperar senha
        </Link>
        <button
          type="submit"
          className="form__submit"
          disabled={isLoading ? 'disabled' : null}
        >
          Acessar conta
        </button>
      </form>
    </section>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoading: auth.isLoading,
    isAuthenticated: auth.isAuthenticated,
    error: auth.error && auth.error.mensagem,
  };
};

export default connect(mapStateToProps, { login: LoginAction })(Login);
