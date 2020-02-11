import React from 'react';
import './FormExperiencias.style.scss';

export default function FormExperiencias({
  handlerEmpresaName,
  handlerCargo,
  handlerDateStart,

  handlerDateEnd,
}) {
  return (
    <div className="form-experiencias">
      <input
        className="input --bigger"
        type="text"
        placeholder="Nome da Empresa..."
        onChange={handlerEmpresaName}
      />
      <input
        className="input --bigger"
        type="text"
        placeholder="Cargo..."
        onChange={handlerCargo}
      />
      <div className="datepickers">
        <span className="Label_title">Período:</span>
        <div className="form__group">
          <input
            className="input datepicker"
            type="date"
            required
            onChange={handlerDateStart}
          />
          <input
            className="input datepicker"
            type="date"
            required
            onChange={handlerDateEnd}
          />
        </div>
      </div>
    </div>
  );
}
