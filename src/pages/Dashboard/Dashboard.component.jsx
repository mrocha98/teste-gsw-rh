import React, { useState } from 'react';
import { isBrowser } from 'react-device-detect';
import Navbar from '../../components/Navbar/NavbarComponent';
import MenuValidator from '../../components/MenuValidator/MenuValidator.component';
import ContainerRoutes from '../../routes/container.routes';
import PageContainer from '../../components/PageContainer/PageContainer.component';
import Footer from '../../components/Footer/Footer';
import './Dashboard.style.scss';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleIsMenuOpen = () =>
    isBrowser ? setIsMenuOpen(!isMenuOpen) : setIsMenuOpen(false);

  return (
    <main className="main">
      <div className="bg" />
      <div className="dashboard">
        <Navbar className="dashboard__nav" onMenuClicked={toogleIsMenuOpen} />
        <MenuValidator isMenuOpen={isMenuOpen} className="dashboard__sidebar" />
        <PageContainer
          className="dashboard__container"
          routes={<ContainerRoutes />}
        />
        <Footer className="dashboard__footer" />
      </div>
    </main>
  );
}
