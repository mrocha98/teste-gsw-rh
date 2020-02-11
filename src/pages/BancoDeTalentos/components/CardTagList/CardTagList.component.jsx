import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "../Tag/Tag.component";

import "./CardTagList.style.scss";

function CardTagList({
  title,
  tags = [],
  onClearAll = () => {},
  onRemoveTag = () => {},
  showClearAll = true
}) {
  const clearAll = useCallback(
    event => {
      event && event.preventDefault();
      onClearAll && onClearAll();
    },
    [onClearAll]
  );

  const removeTag = useCallback(
    tag => {
      onRemoveTag && onRemoveTag(tag);
    },
    [onRemoveTag]
  );

  const renderTags = useCallback(() => {
    return tags.map((l, i) => (
      <Tag key={i} onRemoveClick={() => removeTag(l)} tag={l} />
    ));
  }, [tags, removeTag]);

  const renderClearAll = useCallback(
    () => (
      <span className="trash-format">
        <button className="btn-icon" onClick={clearAll}>
          <FontAwesomeIcon
            icon="trash-alt"
            className="x-format"
            type="button"
          />
          &nbsp; Limpar tudo
        </button>
      </span>
    ),
    [clearAll]
  );

  return (
    <div className="CardTagList">
      <div className="CardTagListHeader">
        <span className="CardTagListTitle">{title}</span>
        {showClearAll ? renderClearAll() : null}
      </div>
      <div className="tag-List">{renderTags()}</div>
    </div>
  );
}

export default CardTagList;
