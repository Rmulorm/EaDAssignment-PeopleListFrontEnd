import React, { FunctionComponent } from 'react';

import './ListTab.css'

import PeopleList from './PeopleList/PeopleList';
import Person from '../../types/Person';
import ListUploader from './ListUploader/ListUploader';

interface ListTabProps {
  listData?: Person[];
  updateList: Function;
};

const ListTab: FunctionComponent<ListTabProps> = (props) => {
  return(
    <div className="ListTab" >
      <h1>NAH</h1>
    </div>
  );
};

export default ListTab;
