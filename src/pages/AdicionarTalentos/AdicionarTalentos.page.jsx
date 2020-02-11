import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContainerHeader from '../../components/ContainerHeader/ContainerHeader';
import TalentsList from '../../components/TalentsList/TalentsList.component';
import SelectStates from '../BancoDeTalentos/components/FiltrarCategorias/FiltrarCategorias';
import './AdicionarTalentos.style.scss';
import TalentsActions from '../../components/TalentsList/components/TalentsActions/TalentsActions.component';
import PageNavigation from '../../components/TalentsList/components/PageNavigation/PageNavigation.component';
import AdicionarCompetencias from '../BancoDeTalentos/components/FiltrarCompetencias/FiltrarCompetencias';
import NivelDeExperiencia from './components/NivelDeExperiencia/NivelDeExperiencia';
import FormExperiencias from './components/FormExperiencias/FormExperiencias.component';
import NivelDeIdioma from './components/NivelDeIdioma/NivelDeIdioma';

function AdicionarTalentos() {
  const initialState = {
    name: '',
    cpf: '',
    email: '',
    city: '',
    state: '',
    startAvaliability: '',
    desiredSalary: '',
    status: '',
    observation: '',
    experienceLevel: '',
    phones: [{ phone1: '', phone2: '' }],
    skills: [{ name: '' }],
    languages: [{ name: '', level: '' }],
    experiences: [
      {
        company: '',
        jobRole: '',
        dateStart: '',
        dateEnd: '',
        activities: '',
      },
    ],
    qualifications: [
      {
        institution: '',
        courseName: '',
        conclusion: '',
        period: '',
        type: '',
      },
    ],
  };

  const [name, setName] = useState(initialState.name);
  const [cpf, setCpf] = useState(initialState.cpf);
  const [email, setEmail] = useState(initialState.email);
  const [city, setCity] = useState(initialState.city);
  const [uf, setUf] = useState(initialState.uf);
  const [startAvaliability, setStartAvaliability] = useState(
    initialState.startAvaliability,
  );
  const [desiredSalary, setDesiredSalary] = useState(
    initialState.desiredSalary,
  );
  const [observation, setObservation] = useState(initialState.observation);
  //const [phones, setPhones] = useState(initialState.phones);
  const [phone1, setPhone1] = useState(initialState.phones.phone1);
  const [phone2, setPhone2] = useState(initialState.phones.phone2);
  const [skills, setSkills] = useState(initialState.skills);
  const [languages, setLanguages] = useState(initialState.languages);
  const [experiences, setExperiences] = useState(initialState.experiences);
  const [experienceLevel, setExperienceLevel] = useState(
    initialState.experienceLevel,
  );
  const [qualifications, setQualifications] = useState(
    initialState.qualifications,
  );

  const [statesList, setStatesList] = useState([]);
  const [citysList, setCitysList] = useState([]);
  const [isExperienceOpen, setExperienceOpen] = useState(false);
  const [isQualificationOpen, setQualificationOpen] = useState(false);

  useEffect(() => {
    async function fetchStates() {
      const { data } = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      );
      setStatesList(data);
    }
    async function fetchCitys() {
      const { data } = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios',
      );
      setCitysList(data);
    }
    fetchStates();
    fetchCitys();
  }, [setStatesList, setCitysList]);

  const handlerCollapse = (e, isExperience) => {
    e.preventDefault();
    return isExperience
      ? setExperienceOpen(!isExperienceOpen)
      : setQualificationOpen(!isQualificationOpen);
  };

  const submit = async e => {
    e.preventDefault();
    const { data } = await axios.post(
      `http://5e3ae42df2cb300014390d38.mockapi.io/talents`,
      {
        name,
        cpf,
        email,
        uf,
        city,
        startAvaliability,
        desiredSalary,
        observation,
        phone1,
        phone2,
        skills,
        languages,
        experiences,
        qualifications,
      },
    );
    await console.log(data);
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err));
  };

  return (
    <article className="new-talent-page">
      <section className="new-talent-page__add-talent">
        <ContainerHeader title="Novo talento" className="add-talent__header" />
        <form className="add-talent__form" onSubmit={submit}>
          <input
            type="text"
            className="input form__input"
            placeholder="Digite o nome do talento..."
            name="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            className="input form__input"
            placeholder="Digite o e-mail do talento..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="input form__input"
            placeholder="Digite o CPF do talento..."
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
          <div className="form__group">
            <input
              type="number"
              className="input form__input group__input"
              placeholder="Telefone 1"
              value={phone1}
              id="1"
              onChange={e => setPhone1(e.target.value)}
            />
            <input
              type="number"
              className="input form__input group__input"
              placeholder="Telefone 2"
              value={phone2}
              onChange={e => setPhone2(e.target.value)}
            />
          </div>
          <div className="form__group">
            <SelectStates
              className="group__select --smaller"
              name="estados"
              options={statesList}
              placeholder="UF"
              value={uf}
              handler={e => setUf(e.target.value)}
            />
            <SelectStates
              className="group__select --bigger"
              name="cidades"
              options={citysList}
              placeholder="Municipío"
              value={city}
              handler={e => setCity(e.target.value)}
            />
          </div>
          <div className="form__salary">
            <span className="salary">BRL</span>
            <input
              type="number"
              className="input form__input"
              placeholder="Pretensão salarial"
              value={desiredSalary}
              onChange={e => setDesiredSalary(e.target.value)}
            />
          </div>

          <section className="form__colapse">
            <button
              type="button"
              className="colapse__button"
              onClick={(e, isExperience) =>
                handlerCollapse(e, (isExperience = true))
              }
            >
              Experiências <FontAwesomeIcon icon="chevron-down" />{' '}
            </button>
            {isExperienceOpen ? (
              <div className="colapse__container">
                {/* Componente Nivel de experiencia */}
                <FormExperiencias
                  className="form__input"
                  handlerEmpresaName={e =>
                    setExperiences({ company: e.target.value })
                  }
                  handlerCargo={e =>
                    setExperiences({ jobRole: e.target.value })
                  }
                  handlerDateStart={e =>
                    setExperiences({ dateStart: e.target.value })
                  }
                  handlerDateEnd={e =>
                    setExperiences({ dateEnd: e.target.value })
                  }
                />
                <div>
                  <label className="Label_title">Nível de experiência:</label>
                </div>
                <NivelDeExperiencia
                  handlerNivelDeExp={e => setExperienceLevel(e.target.value)}
                />
                <textarea
                  className="input form__input"
                  rows="2"
                  cols="50"
                  placeholder="Observações da experiência do candidato..."
                  value={experiences.activities}
                  onChange={e => setExperiences({ activities: e.target.value })}
                />
              </div>
            ) : null}
          </section>

          <section className="form__colapse">
            <button
              type="button"
              className="colapse__button"
              onClick={(e, isExperience) => handlerCollapse(e, isExperience)}
            >
              Qualificações <FontAwesomeIcon icon="chevron-down" />{' '}
            </button>
            {isQualificationOpen ? (
              <div className="colapse__container">
                {/* Componente competencias */}
                <AdicionarCompetencias />
                {/* Idiomas */}
                <div>
                  <label className="Label_title">Idiomas:</label>
                  <input className="input form__input" />
                  <label className="Label_title">Nível:</label>
                  <NivelDeIdioma
                    handlerIdiomaLevel={e => setLanguages(e.target.value)}
                  />
                </div>
              </div>
            ) : null}
          </section>
          {/* Observações do candidato */}
          <textarea
            className="input form__input"
            rows="4"
            cols="50"
            placeholder="Observações do candidato..."
            value={observation}
            onChange={e => setObservation(e.target.value)}
          />
          <button type="submit" className="submit add-talent__button">
            Adicionar talento
          </button>
        </form>
      </section>

      <section className="new-talent__last-added">
        <ContainerHeader title="Últimos talentos cadastrados" />
        <TalentsActions />
        <TalentsList />
        <PageNavigation />
      </section>
    </article>
  );
}

export default AdicionarTalentos;
