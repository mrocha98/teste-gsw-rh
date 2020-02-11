import React, { useCallback, useState } from 'react';
import InputSelect from '../InputSelect/InputSelect.component';
import CardTagList from '../CardTagList/CardTagList.component';
import CompetenciaMock from '../../../../utils/CompetenciasMock';

function FiltrarCompetencias() {
  const [optionsCompetencia, setOptionsCompetencia] = useState([
    ...CompetenciaMock,
  ]);

  const [selectedOptionsCompetencia, setSelectedOptionsCompetencia] = useState(
    [],
  );

  const [filterText, setFilterText] = useState('');

  const clearAllCompetencia = useCallback(
    () => setSelectedOptionsCompetencia([]),
    [setSelectedOptionsCompetencia],
  );

  const isOptionCheckedCompetencia = useCallback(
    (option, i) => selectedOptionsCompetencia.indexOf(option) > -1,
    [selectedOptionsCompetencia],
  );

  const onFilter = useCallback(
    event => {
      const filterText = event.target.value || '';
      setFilterText(filterText);
      setOptionsCompetencia(
        CompetenciaMock.filter(
          option => option.toUpperCase().indexOf(filterText.toUpperCase()) > -1,
        ),
      );
    },
    [setFilterText, setOptionsCompetencia],
  );

  const handleOptionChangeCompetencia = useCallback(
    (option, i) => {
      const isChecked = isOptionCheckedCompetencia(option, i);
      if (isChecked) {
        setSelectedOptionsCompetencia(
          selectedOptionsCompetencia.filter(opt => opt !== option),
        );
      } else {
        setSelectedOptionsCompetencia([...selectedOptionsCompetencia, option]);
      }
      setFilterText('');
      onFilter({ target: { value: '' } });
    },
    [
      selectedOptionsCompetencia,
      setSelectedOptionsCompetencia,
      isOptionCheckedCompetencia,
      setFilterText,
      onFilter,
    ],
  );

  return (
    <>
      <InputSelect
        placeholder="Selecionar competências"
        options={optionsCompetencia}
        isOptionChecked={isOptionCheckedCompetencia}
        onOptionChange={handleOptionChangeCompetencia}
        onFilter={onFilter}
        filterValue={filterText}
      />
      {/* card de tags competências */}
      <CardTagList
        title="Competências Adicionadas: "
        showClearAll={true}
        tags={selectedOptionsCompetencia}
        onRemoveTag={handleOptionChangeCompetencia}
        onClearAll={clearAllCompetencia}
      />
    </>
  );
}

export default FiltrarCompetencias;
