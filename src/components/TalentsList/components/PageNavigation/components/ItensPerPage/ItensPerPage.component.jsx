import React from 'react';
import './ItensPerPage.style.scss';

const ItensPerPage = ({ pages }) => {
  return (
    <section className="itens-per-page">
      <select className="itens-per-page__select">
        {pages.map((page, index) => (
          <option key={index}>{page}</option>
        ))}
      </select>
    </section>
  );
};

export default ItensPerPage;
