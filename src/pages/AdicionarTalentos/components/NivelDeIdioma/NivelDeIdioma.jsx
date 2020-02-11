import React, { useState } from 'react';

const allData = ['Básico', 'Intermediario', 'Avançado'];

function NivelDeIdioma({ onChange }) {
  const [radio] = useState([...allData]);

  return (
    <>
      {/*radio.map(selection => (
        <label className="Label-radio" key={Math.random()}>
          {selection}
          <input type="radio" name="radio" value={value} onChange={onChange} />
          <span className="Radio-span" />
        </label>
      ))*/}
      {radio.map(option => (
        <>
          <input
            name={option}
            id={option}
            type="radio"
            value={option}
            onChange={onChange}
          />
          <label htmlFor={option}>{option}</label>
        </>
      ))}
    </>
  );
}

export default NivelDeIdioma;
