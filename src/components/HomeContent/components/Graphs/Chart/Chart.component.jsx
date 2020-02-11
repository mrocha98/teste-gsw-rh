import React from 'react';
import { Progress } from 'antd';
import './Chart.style.scss';

const Chart = ({ percent, type = 'circle', label, desc, color = '' }) => {
  return (
    <div className='chart'>
      <Progress
        type={type}
        percent={percent}
        strokeWidth='7'
        strokeColor={color}
        width={85}
      />
      <label className='chart__label'>{label}</label>
      <p className='chart__desc'>{desc}</p>
    </div>
  );
};

export default Chart;
