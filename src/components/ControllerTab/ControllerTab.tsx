import React, { FunctionComponent } from 'react';

import './ControllerTab.css'

import Controller from './Controller';
import api from '../../services/api';
import SearchArguments from '../../types/SearchArguments';

interface ControllerTabProps {
  updateList: Function;
}

const ControllerTab: FunctionComponent<ControllerTabProps> = (props) => {

  return(
    <div className="ControllerTab" >
      <Controller
        updateList={props.updateList}
      />
      <Controller
        updateList={props.updateList}
      />
      <Controller
        updateList={props.updateList}
      />
    </div>
  );
};

export default ControllerTab;