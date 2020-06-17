import React, { FunctionComponent } from 'react';


import ListUploader from '../ListUploader/ListUploader';

interface UploadTabProps {
  isListEmpty: boolean,
  checkIfListIsEmpty: Function
};

const UploadTab: FunctionComponent<UploadTabProps> = (props) => {
  const { isListEmpty, checkIfListIsEmpty } = props;

  return(
    <ListUploader
      isListEmpty={isListEmpty}
      checkIfListIsEmpty={checkIfListIsEmpty} />
  );
}

export default UploadTab;