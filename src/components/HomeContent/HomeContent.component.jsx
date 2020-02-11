import React from 'react';
import './HomeContent.style.scss';
import Graphs from './components/Graphs/Graphs.component';
import JobsList from './components/JobsList/JobsList.component';
import ContainerHeader from '../ContainerHeader/ContainerHeader';

function HomeContent() {
  return (
    <div className="home-content">
      <ContainerHeader />
      <Graphs />
      <ContainerHeader title="Vagas Abertas" />
      <JobsList />
    </div>
  );
}

export default HomeContent;
