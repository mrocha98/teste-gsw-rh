import React, { useCallback, useState } from "react";
import InputSelect from "../InputSelect/InputSelect.component";
import CardTagList from "../CardTagList/CardTagList.component";
import LabelsMock from '../../../../utils/LabelsMock';

function FiltrarLabels() {

	const [optionsLabels, setOptionsLabels] = useState([...LabelsMock]);

  const [selectedOptionsLabels, setSelectedOptionsLabels] = useState([]);

  const [filterText, setFilterText] = useState("");

  const clearAllLabels = useCallback(() => setSelectedOptionsLabels([]), [
    setSelectedOptionsLabels
  ]);

  const isOptionCheckedLabels = useCallback(
    (option, i) => selectedOptionsLabels.indexOf(option) > -1,
    [selectedOptionsLabels]
  );

  const onFilter = useCallback(
    event => {
      const filterText = event.target.value || "";
      setFilterText(filterText);
      setOptionsLabels(
        LabelsMock.filter(
          option => option.toUpperCase().indexOf(filterText.toUpperCase()) > -1
        )
      );
    },
    [setFilterText, setOptionsLabels]
  );

  const handleOptionChangeLabels = useCallback(
    (option, i) => {
      const isChecked = isOptionCheckedLabels(option, i);
      if (isChecked) {
        setSelectedOptionsLabels(
          selectedOptionsLabels.filter(opt => opt !== option)
        );
      } else {
        setSelectedOptionsLabels([...selectedOptionsLabels, option]);
      }
      setFilterText("");
      onFilter({ target: { value: "" } });
    },
    [
      selectedOptionsLabels,
      setSelectedOptionsLabels,
      isOptionCheckedLabels,
      setFilterText,
      onFilter
    ]
  );

  return (
    <>
      <InputSelect
        placeholder="Selecionar Labels"
        options={optionsLabels}
        isOptionChecked={isOptionCheckedLabels}
        onOptionChange={handleOptionChangeLabels}
        onFilter={onFilter}
        filterValue={filterText}
      />

      {/* card de tags labels */}
      <CardTagList
        title="Labels Adicionadas: "
        showClearAll={true}
        tags={selectedOptionsLabels}
        onRemoveTag={handleOptionChangeLabels}
        onClearAll={clearAllLabels}
      />
    </>
  );
}

export default FiltrarLabels;
