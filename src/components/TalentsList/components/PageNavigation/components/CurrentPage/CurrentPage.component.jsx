import React from 'react';
import './CurrentPage.style.scss';

const CurrentPage = ({ firstPage = '1', lastPage, totalPages }) => {
  return (
    <div className="current-page ">
      <span className="current-page__text">{firstPage}</span> &nbsp; - &nbsp;
      <span className="current-page__text">{lastPage}</span> &nbsp; de &nbsp;
      <span className="current-page__text">{totalPages}</span>
    </div>
  );
};

export default CurrentPage;
