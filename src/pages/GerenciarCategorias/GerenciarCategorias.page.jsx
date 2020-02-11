import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GerenciarCategorias.style.scss";
import "../../styles/_global.scss";

//pega o valor do ID
function GetSelectedValue() {
  var e = document.getElementById("selectID");
  var result = e.options[e.selectedIndex].value;
  document.getElementById("result").innerHTML = result;
}

//pega o valor do TEXTO
function GetSelectedText() {
  var e = document.getElementById("selectID");
  var result = e.options[e.selectedIndex].text;
  document.getElementById("result").innerHTML = result;
}

//remover todos da lista
function RemoverTodos() {
  var e = document.getElementById("selectID");
  while (e.length) {
    e.remove(0);
  }
}

// Carregar lista
function Carregar(e) {
  var comboCidades = document.getElementById("selectID");

  var opt0 = document.createElement("option");
  opt0.value = "javaID";
  opt0.text = "JAVA";
  comboCidades.add(opt0, comboCidades.options[0]);

  var opt1 = document.createElement("option");
  opt1.value = "jsID";
  opt1.text = "JS";
  comboCidades.add(opt1, comboCidades.options[1]);

  var opt2 = document.createElement("option");
  opt2.value = "htmlID";
  opt2.text = "HTML";
  comboCidades.add(opt2, comboCidades.options[2]);

  var opt3 = document.createElement("option");
  opt3.value = "cssID";
  opt3.text = "CSS";
  comboCidades.add(opt3, comboCidades.options[3]);

}

function GerenciarCategorias({ title = "Gerenciar  Categorias" }) {
  const [selections, setSelections] = useState([]);
  const titleRegex = /\S+/g;

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
          <option value="FRONT-END">FRONT-END</option>
          <option value="BACK-END">BACK-END</option>
          <option value="ANALISTA">ANALISTA</option>
          <option value="DATA SCIENCE">DATA SCIENCE</option>
        </select>
        <br />
        {/* botão de função */}
        <button
          className="btn-register"
          type="button"
          onClick={() => console.log("pimba")}
        >
          PEGA O VALOR DO VALUE
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
      {/* testes de função */}
      <form className="form-format">
        <select className="input-format" id="selectID">
          <option value="javaID">JAVA</option>
          <option value="jsID">JS</option>
          <option value="htmlID">HTML</option>
          <option value="cssID">CSS</option>
        </select>
        <br />
        <button
          className="btn-register"
          type="button"
          onClick={GetSelectedValue}
        >
          PEGA O VALOR DO VALUE
        </button>
        <br />
        <button
          className="btn-register"
          type="button"
          onClick={GetSelectedText}
        >
          PEGA O VALOR DO TEXTO
        </button>
        <br />
        <button className="btn-register" type="button" onClick={RemoverTodos}>
          REMOVER TODOS VIA ID
        </button>
        <br />
        <button className="btn-register" id="btnCarregar" onClick={Carregar}>
          CARREGAR O SELECT
        </button>
        <br />
        <br />
        <p className="tag-format" id="result">
          United State
        </p>
      </form>
    </div>
  );
}

export default GerenciarCategorias;
