import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JobsItem.style.scss';

const JobsItem = ({ id, titulo, framework, validade, status, candidatos }) => {
  return (
    <li className='jobs-item' key={id}>
      <FontAwesomeIcon
        className='jobs-item__icon'
        color='gray'
        icon='briefcase'
        size='4x'
      />

      <div className='jobs-item__info'>
        <h2 className='info__title'>
          {titulo} ({framework})
          <label
            className={`title__status ${
              status === 'Ativo' ? '--ativo' : '--inativo'
            }`}
          >
            {status}
          </label>
        </h2>

        <div className='info__desc'>
          <label className='desc__candidatos'>
            <span className='--bold'>({candidatos})</span> Candidatos a vaga
          </label>
          <label className='desc__validade'>
            <span className='--bold'>Vence em: </span>
            {validade}
          </label>
        </div>
      </div>

      <button className='jobs-item__button'>
        <FontAwesomeIcon icon='ellipsis-v' color='gray' />
      </button>
    </li>
  );
};

export default JobsItem;
