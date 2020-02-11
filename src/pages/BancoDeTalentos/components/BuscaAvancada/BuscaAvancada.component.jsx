import React, { useState, useCallback } from "react";
import "./BuscaAvancada.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BuscaAvancada({ children, title }) {
  const [isShowFilter, setIsShowFilter] = useState(false);

  const toggleFilter = useCallback(
    event => {
      event.preventDefault();
      setIsShowFilter(!isShowFilter);
    },
    [setIsShowFilter, isShowFilter]
  );

  return (
    <>
      <button className="btn-busca" onClick={toggleFilter}>
        {title}
        {isShowFilter ? (
          <FontAwesomeIcon className="icon-up-down" icon="chevron-up" />
        ) : (
          <FontAwesomeIcon className="icon-up-down" icon="chevron-down" />
        )}
      </button>

      {isShowFilter ? children : null}
    </>
  );
}

export default BuscaAvancada;
