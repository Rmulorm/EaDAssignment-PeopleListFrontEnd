import React, { useState, useEffect, FunctionComponent } from 'react';

import SearchArguments from '../types/SearchArguments';
import ControllerTab from './ControllerTab/ControllerTab';
import ListTab from './ListTab/ListTab';
import Person from '../types/Person';
import api from '../services/api';

import './ListWithController.css';

const ListWithController: FunctionComponent = () => {

  const[listData, setListData] = useState<Person[]>();

  useEffect(() => {
    updateList();
  }, []);
  
  const updateList = async (searchArguments?: SearchArguments) => {
    await api.get<Person[]>('list', { params: searchArguments })
    .then((response) => {
      setListData(response.data);
    });
  }

  return(
    <div className="ListWithController" >
      <ControllerTab updateList={updateList} />
      <ListTab
        listData={listData}
        updateList={updateList}
      />
    </div>
  );
}

export default ListWithController;
