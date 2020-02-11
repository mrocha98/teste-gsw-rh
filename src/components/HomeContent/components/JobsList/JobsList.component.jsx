import React from 'react';
import JobsMock from '../../../../utils/JobsMock';
import JobsItem from '../JobsItem/JobsItem.component';
import './JobsList.style.scss';
const JobsList = () => {
  return (
    <ul className='jobs-list'>
      {JobsMock.map(
        ({ id, titulo, framework, validade, status, candidatos }) => (
          <JobsItem
            id={id}
            titulo={titulo}
            framework={framework}
            validade={validade}
            status={status}
            candidatos={candidatos.length}
          />
        )
      )}
    </ul>
  );
};

export default JobsList;
