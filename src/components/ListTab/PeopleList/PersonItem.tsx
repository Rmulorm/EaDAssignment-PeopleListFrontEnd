import React, { FunctionComponent } from 'react';

import Person from '../../../types/Person';

interface PersonItemProps {
  personData: Person;
};

const parseDate = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

const PersonItem: FunctionComponent<PersonItemProps> = (props) => {
  return(
    <li key={String(props.personData.cpf)} >
      <div className="Name" >
        <h2>{props.personData.name}</h2>
      </div>

      <div className="PersonalInformation" >
        <div className="IdentificationNumber" >
          <strong>CPF:</strong>
          <p>{props.personData.cpf}</p>
          <strong>RG:</strong>
          <p>{props.personData.rg}</p>
        </div>

        <div className="BirthInformation" >
          <div>
            <strong>Data de Nascimento:</strong>
            <p>{parseDate(props.personData.birthDay)}</p>
          </div>
          <div>
            <strong>Cidade Natal:</strong>
            <p>{props.personData.cityOfBirth}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PersonItem;
