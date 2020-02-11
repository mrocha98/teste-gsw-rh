import React, { useState } from "react";
import "../../styles/_global.scss";
import "./GerenciarCompetencias.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GerenciarCompetencias({ title = "Gerenciar  Competências" }) {
  const [selections, setSelections] = useState([]);
  const titleRegex = /\S+/g;

  function SubmitInput() {
    setSelections(selections.concat(document.getElementById("id_input").value));
  }

  return (
    <div>
      {/* teste de estilo p/ produção */}

      {/* titulo do container */}
      <div className="container-header">
        <span className="--bold">{title.match(titleRegex)[0]}</span>
        {title.match(titleRegex)[1]}
      </div>
      {/* formulario */}
      <form className="form-format">
        {/* select/imnput */}
        <select
          className="input-format"
          onChange={e => {
            setSelections(selections.concat(e.target.value));
            console.log("teste");
          }}
        >
          <option value="JAVA">JAVA</option>
          <option value="JS">JS</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
        <br />
        <br />

        <input id="id_input" className="input-format" placeholder="Digite o nome da nova Label"/>
        <br />
        {/* botão de função */}
        <button
          className="btn-register"
          type="button"
          onClick={SubmitInput}
        >
          CADASTRAR COMPETÊNCIAS
        </button>
        <div>
          <label className="label-format">Categorias cadastradas</label>
          <div>
            {/* tags selecionadas */}
            <ul>
              {selections.map(selection => (
                <li className="tag-format" key={Math.random()}>
                  <span className="text__tag-format">
                    {selection}
                    <FontAwesomeIcon
                      icon="times-circle"
                      className="x-format"
                      type="button"
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GerenciarCompetencias;
