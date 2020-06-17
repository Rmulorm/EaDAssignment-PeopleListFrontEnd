import React, { FunctionComponent, useState, useEffect, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import './FindTab.css'

import api from '../../../services/api';
import Person from '../../../types/Person';
import PeopleList from '../PeopleList/PeopleList';

const FindCpfTab: FunctionComponent = () => {

  const[listData, setListData] = useState<Person[]>();
  const[cpf, setCpf] = useState<number>(0);

  useEffect(() => {
    updateList();
  }, []);

  const updateList = async () => {
    await api.get<Person[]>('list', { params: {
      cpf: cpf
    }})
    .then((response) => {
      const receivedList = new Array<Person>();
      response.data.forEach((person) => {
        receivedList.push({
          name: person.name,
          cpf: Number(person.cpf),
          rg: Number(person.rg),
          birthDay: new Date(person.birthDay),
          cityOfBirth: person.cityOfBirth
        });
      });
      setListData(receivedList);
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    updateList();
  };

  return(
    <div style={ {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 'inherit',
      height: '100%',
      maxHeight: 'inherit'
    } } >
      <form onSubmit={handleFormSubmit} >
        <div className="Controllers" >
          <input
            type="number"
            onChange={event => setCpf(Number(event.target.value))}
            placeholder="Buscar pelo CPF..." />
          <button type="submit">
            <FiSearch size={25} color="#fff" />
          </button>
        </div>
      </form>
      <PeopleList
        listData={listData}
      />
    </div>
  );
}

export default FindCpfTab;