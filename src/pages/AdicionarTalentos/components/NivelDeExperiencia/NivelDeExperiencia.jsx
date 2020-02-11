import React, { useState } from 'react';

const allData = [
  'Estágio',
  'Júnior',
  'Júnior/Pleno',
  'Pleno',
  'Pleno/Senior',
  'Senior',
];

function NivelDeExperiencia({ handlerNivelDeExp }) {
  const [radio] = useState([...allData]);

  return (
    <>
      {radio.map(selection => (
        <label className="Label-radio" key={Math.random()}>
          {selection}
          <input type="radio" name="radio" onChange={handlerNivelDeExp} />
          <span className="Radio-span" />
        </label>
      ))}
    </>
  );
}

export default NivelDeExperiencia;
