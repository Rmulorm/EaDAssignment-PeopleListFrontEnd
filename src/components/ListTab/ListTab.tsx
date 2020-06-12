import React, { FunctionComponent } from 'react';

import './ListTab.css'
import PeopleList from './PeopleList';
import Person from '../../types/Person';
import ListUploader from './ListUploader';

interface ListTabProps {
  listData?: Person[];
  updateList: Function;
};

const ListTab: FunctionComponent<ListTabProps> = (props) => {
  const mountList = () => {
    if (!props.listData) {
      return(
        <ListUploader />
      )
    } else {
      return(
        <PeopleList
          listData={props.listData} />
      );
    }
  };

  return(
    <div className="ListTab" >
      {mountList()}
    </div>
  );
};

export default ListTab;
