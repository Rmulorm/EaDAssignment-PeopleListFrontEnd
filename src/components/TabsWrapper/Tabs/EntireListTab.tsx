import React, { FunctionComponent, useState, useEffect } from 'react';

import api from '../../../services/api';
import Person from '../../../types/Person';
import PeopleList from '../../ListTab/PeopleList/PeopleList';

const EntireListTab: FunctionComponent = () => {

  const[listData, setListData] = useState<Person[]>();

  useEffect(() => {
    updateList();
  }, []);
  
  const updateList = async () => {
    await api.get<Person[]>('list')
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
  }

  return(
    <div style={ {
      display: 'flex',
      width: '100%',
      maxWidth: 'inherit',
      height: '100%',
      maxHeight: 'inherit'
    } } >
      <PeopleList
        listData={listData}
      />
    </div>
  );
}

export default EntireListTab;