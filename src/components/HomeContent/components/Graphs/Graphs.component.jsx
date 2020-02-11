import React from 'react';
import Chart from './Chart/Chart.component';
import './Graphs.style.scss';
import ChartsMock from '../../../../utils/ChartsMock';

const Graphs = () => {
  return (
    <section className='graphs'>
      <h3 className='graphs__resumo'>RESUMO</h3>

      <div className='graphs__container'>
        {ChartsMock.map(({ id, percent, label, desc }) => (
          <Chart key={id} percent={percent} label={label} desc={desc} />
        ))}
      </div>
    </section>
  );
};

export default Graphs;
