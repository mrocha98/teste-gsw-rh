import React from 'react';
import ItensPerPage from './components/ItensPerPage/ItensPerPage.component';
import CurrentPage from './components/CurrentPage/CurrentPage.component';
import ButtonNav from './components/ButtonNav/ButtonNav.component';
import './PageNavigation.style.scss';

const PageNavigation = () => {
  const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <nav className="pagination-nav">
      <span className="pagination-nav__text">Itens por página: </span>
      &nbsp;
      <ItensPerPage pages={pages} />
      <CurrentPage
        firstPage={pages[0]}
        lastPage={pages.length}
        totalPages={pages.length}
      />
      <ButtonNav />
    </nav>
  );
};

export default PageNavigation;
