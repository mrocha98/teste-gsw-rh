import React, { useState } from 'react';

const allData = ['Funcionarios', 'Novos Talentos', 'Todos'];

function FiltrarFuncionario() {
  const [radio] = useState([...allData]);

  return (
    <>
      {radio.map(selection => (
        <label className="Label-radio" key={Math.random()}>
          {selection}
          <input type="radio" name="radio" />
          <span className="Radio-span" />
        </label>
			))}
    </>
  );
}

export default FiltrarFuncionario;
