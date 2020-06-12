import React, { FunctionComponent } from 'react';

import './PeopleList.css'

import Person from '../../../types/Person';
import PersonItem from './PersonItem';

interface PeopleListProps {
  listData?: Person[];
};

const PeopleList: FunctionComponent<PeopleListProps> = (props) => {

  const peopleList = props.listData?.map((person) => (
    <PersonItem personData={person} />
  ));

  return(
    <div className="PeopleList" >
      <ul>
        {peopleList}
      </ul>
    </div>
  );
}

export default PeopleList;
