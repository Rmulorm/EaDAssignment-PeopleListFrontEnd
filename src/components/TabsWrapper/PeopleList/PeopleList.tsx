import React, { FunctionComponent } from 'react';

import './PeopleList.css'

import Person from '../../../types/Person';
import PersonItem from './PersonItem';

interface PeopleListProps {
  listData?: Person[];
};

const PeopleList: FunctionComponent<PeopleListProps> = (props) => {

  const { listData } = props;
  
  const peopleList = props.listData?.map((person) => (
    <PersonItem personData={person} />
  ));

  const renderList = () => {
    if (listData) {
      return(
        <ul>
          {peopleList}
        </ul>
        );
    } else {
      return(
        <h1>Nenhuma pessoa bate com os filtros da busca.</h1>
      )
    }
  };

  return(
    <div className="PeopleList" >
      {renderList()}
    </div>
  );
}

export default PeopleList;
