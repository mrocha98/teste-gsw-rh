import React from 'react';
import '../../styles/_global.scss';
import './BancoDeTalentos.style.scss';

import BuscaAvancada from './components/BuscaAvancada/BuscaAvancada.component';
import FiltrarCompetencias from './components/FiltrarCompetencias/FiltrarCompetencias';
import FiltrarLabels from './components/FiltrarLabels/FiltrarLabels';
import FiltrarCategorias from './components/FiltrarCategorias/FiltrarCategorias';
import FiltrarFuncionario from './components/FiltrarFuncionario/FiltrarFuncionario';
import ContainerHeader from '../../components/ContainerHeader/ContainerHeader';
import TalentsList from '../../components/TalentsList/TalentsList.component';
import TalentsActions from '../../components/TalentsList/components/TalentsActions/TalentsActions.component';
import PageNavigation from '../../components/TalentsList/components/PageNavigation/PageNavigation.component';

function BancoDeTalentos() {
  return (
    <div className="container">
      <section className="container__search">
        {/* titulo do container */}
        <ContainerHeader title="Banco de Talentos" />
        {/* formulario */}
        <form className="form-format">
          {/* primeiro filtro por nome: */}
          <input className="input-format" placeholder="Buscar pelo nome ..." />

          {/* Expandir busca avançada */}
          <BuscaAvancada title="Busca avançada">
            {/* filtro de de busca por categorias */}
            <FiltrarCategorias placeholder="Selecione uma categoria" />
            {/* filtro de busca por competência */}
            <FiltrarCompetencias />
            {/* filtro de busca por labels */}
            <FiltrarLabels />
            {/* filtro de busca por funcionario ou novo talento */}
            <FiltrarFuncionario />
          </BuscaAvancada>
          {/* Botão de filtrar */}
          <button className="submit btn-register" type="button">
            BUSCAR
          </button>
        </form>
      </section>
      <section className="container__talents-result">
        <ContainerHeader title="Resultado da Busca" />
        <TalentsActions />
        <TalentsList />
        <PageNavigation />
      </section>
    </div>
  );
}

export default BancoDeTalentos;
