import React, { FunctionComponent, FormEvent, useState, ReactComponentElement } from 'react';
import { FiSearch } from 'react-icons/fi';

import SearchArguments from '../../types/SearchArguments';

import './Controller.css'

interface ControllerProps {
  updateList: Function
}

const Controller: FunctionComponent<ControllerProps> = (props) => {

  const[searchArgument, setSearchArgument] = useState<SearchArguments>();

  const handleValueChange = async (event: any) => {
    setSearchArgument({
      arguments: event.target.value
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {

    await props.updateList(searchArgument);
  }

  return(
    <form onSubmit={handleFormSubmit} >
      <div className="ControllerWithButton" >
        <input
          type="number"
          onChange={event => handleValueChange(event)}
        />
        <button type="submit">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default Controller;

