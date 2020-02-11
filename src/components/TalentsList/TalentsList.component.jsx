import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TalentItem from './components/TalentItem/TalentItem.component';
import './TalentsList.style.scss';

const TalentsList = () => {
  const [talentsList, setTalentsList] = useState([]);
  useEffect(() => {
    async function fetchDataAndSet() {
      const { data } = await Axios.get(
        `http://5e3ae42df2cb300014390d38.mockapi.io/talents`,
      );
      setTalentsList(data);
    }
    fetchDataAndSet();
  }, [talentsList]);

  return (
    <ul className="talentos">
      {talentsList.map(({ id, name, email, uf, city }) => (
        <TalentItem key={id} name={name} email={email} uf={uf} city={city} />
      ))}
    </ul>
  );
};
export default TalentsList;
