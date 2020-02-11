import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Tag.style.scss";

function Tag({ tag, onRemoveClick }) {
  const onClick = useCallback(
    event => {
      event && event.preventDefault();
      onRemoveClick && onRemoveClick(event);
    },
    [onRemoveClick]
  );

  return (
    <div className="Tag">
      <span className="TextTag">{tag}</span>
      <button className="BtnTag" onClick={onClick}>
        <FontAwesomeIcon
          icon="times-circle"
          color="white"
        />
      </button>
    </div>
  );
}

export default Tag;
