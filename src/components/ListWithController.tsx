import React, { useState, useEffect, FunctionComponent } from 'react';

import SearchArguments from '../types/SearchArguments';
import ControllerTab from './ControllerTab/ControllerTab';
import Person from '../types/Person';
import api from '../services/api';

import './ListWithController.css';

const ListWithController: FunctionComponent = () => {

  // const[listData, setListData] = useState<Person[]>();

  // useEffect(() => {
  //   updateList();
  // }, []);
  
  // const updateList = async () => {
  //   await api.get<Person[]>('list')
  //   .then((response) => {
  //     const receivedList = new Array<Person>();
  //     response.data.forEach((person) => {
  //       receivedList.push({
  //         name: person.name,
  //         cpf: Number(person.cpf),
  //         rg: Number(person.rg),
  //         birthDay: new Date(person.birthDay),
  //         cityOfBirth: person.cityOfBirth
  //       });
  //     });
  //     setListData(receivedList);
  //   });
  // }

  // return(
  //   <div className="ListWithController" >
  //     <ControllerTab updateList={updateList} />
  //     <ListTab
  //       listData={listData}
  //       updateList={updateList}
  //     />
  //   </div>
  // );

  return(
    <h1>Vai</h1>
  )
}

export default ListWithController;
