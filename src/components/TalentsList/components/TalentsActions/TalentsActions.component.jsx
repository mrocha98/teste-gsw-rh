import React from 'react';
import TalentsMock from '../../../../utils/TalentsMock';
import './TalentsActions.style.scss';
import DropDown from '../../../../components/DropDown/DropDown.component';

function TalentsActions() {
  return (
    <section className="actions">
      <p className="actions__results">
        Exibindo{' '}
        <span className="--bold">&nbsp; {TalentsMock.length} &nbsp; </span>
        resultados
      </p>
      <div className="actions__massive-action">
        <span>Ações em massa </span>
        <DropDown
          options={[
            {
              text: 'Adicionar a vaga',
              isButton: true,
              handleClick: () => console.log('aaa'),
            },
          ]}
        />
      </div>
    </section>
  );
}

export default TalentsActions;
