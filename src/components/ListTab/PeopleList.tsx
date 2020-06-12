import React, { FunctionComponent } from 'react';

import Person from '../../types/Person';

interface PeopleListProps {
  listData: Person[];
};

const PeopleList: FunctionComponent<PeopleListProps> = (props) => {
  return(
    <div className="PeopleList" >
      <h1>Aqui vai uma lista de pessoas</h1>
    </div>
  );
}

export default PeopleList;
