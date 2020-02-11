import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import CheckedBox from '../CheckedBox/CheckedBox.component';

import './InputSelect.style.scss';

function InputSelect({
  placeholder,
  options = [],
  filterValue = '',
  fallbackText = 'Nenhuma opção encontrada.',
  onFilter = () => {},
  isOptionChecked = (o, i) => {},
  onOptionChange = (o, i) => {},
  className,
}) {
  const inputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isIgnoreBlur, setIsIgnoreBlur] = useState(false);

  const handleOptionChange = useCallback(
    (option, i) => () => {
      onOptionChange(option, i);
    },
    [onOptionChange],
  );

  const handleInputFocus = useCallback(event => setIsOpen(true), [setIsOpen]);

  const handleInputBlur = useCallback(
    event => {
      if (!isIgnoreBlur) {
        setIsOpen(false);
      } else {
        inputRef.current.focus();
      }
    },
    [isIgnoreBlur, setIsOpen, inputRef],
  );

  const renderOptions = useCallback(() => {
    const allOptions = options.map((option, i) => (
      <CheckedBox
        key={i}
        className="checkbox-label"
        label={option}
        checked={isOptionChecked(option, i)}
        onChange={handleOptionChange(option, i)}
      />
    ));

    if (allOptions.length === 0) {
      return <span>{fallbackText}</span>;
    } else {
      return allOptions;
    }
  }, [options, isOptionChecked, handleOptionChange, fallbackText]);

  const renderSelectCard = useCallback(() => {
    return isOpen ? <div className="SelectCard">{renderOptions()}</div> : null;
  }, [isOpen, renderOptions]);

  const handleIgnoreBlur = useCallback(event => setIsIgnoreBlur(true), [
    setIsIgnoreBlur,
  ]);

  const handleAllowBlur = useCallback(event => setIsIgnoreBlur(false), [
    setIsIgnoreBlur,
  ]);

  return (
    <div
      className={`InputSelect ${className}`}
      onTouchStart={handleIgnoreBlur}
      onMouseEnter={handleIgnoreBlur}
      onMouseLeave={handleAllowBlur}
    >
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="Input"
        placeholder={placeholder}
        value={filterValue}
        onChange={onFilter}
      />
      <span className="InputArrowDown">
        <FontAwesomeIcon icon="chevron-down" />
      </span>
      {renderSelectCard()}
    </div>
  );
}

export default InputSelect;
