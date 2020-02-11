import React, { useState } from 'react';
import CategoriasMock from '../../../../utils/CategoriasMock';

function FiltrarCategorias({ options, className, placeholder, handler }) {
  const [optionsCat] = useState([...CategoriasMock]);

  return (
    <>
      <select className={`input-format ${className}`} onChange={handler}>
        <option value="Selecione">{placeholder}</option>
        {options
          ? options.map(({ id, nome }) => (
              <option value={`${nome}`} key={id}>
                {nome}
              </option>
            ))
          : optionsCat.map(selection => (
              <option key={Math.random()}>{selection}</option>
            ))}
      </select>
    </>
  );
}

export default FiltrarCategorias;
