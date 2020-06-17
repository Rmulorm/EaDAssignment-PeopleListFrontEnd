import React, { FunctionComponent, useState, FormEvent } from 'react';
import { FiUpload } from 'react-icons/fi';

import './ListUploader.css'

import api from '../../../services/api';

interface ListUploaderProps {
  isListEmpty: boolean,
  checkIfListIsEmpty: Function
};

const ListUploader: FunctionComponent<ListUploaderProps> = (props) => {
  const { isListEmpty, checkIfListIsEmpty } = props;

  const[list, setList] = useState<File>();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files){
      throw new Error("File Updated with no file");
    }

    setList(event.target.files[0]);
  };

  const handleFormSubmit = async (event: FormEvent) => {
    if (!list) {
      return;
    }
    event.preventDefault();

    const data = new FormData();
    data.append('file', list.slice());
    api.post('list', data)
    .then(() => {
      checkIfListIsEmpty();
    })
    .catch(() => {
      alert(`Falha ao enviar o .csv.`);
    });
  }

  const isSubmitButtonDisabled = (): boolean => {
    return (!list) ? true : false;
  }

  const renderInformTest = () => {
    if (isListEmpty) {
      return(
        <div>
          <h1>A Lista está vazia.</h1>
          <h1>Envie um .csv para carrega-la.</h1>
        </div>
      )
    } else {
      return(
        <div>
          <h1>A Lista já está carregada.</h1>
          <h1>Deseja atualiza-lá?</h1>
        </div>
      )
    }
  }

  return(
    <div className="ListUploader" >
      {renderInformTest()}
      <form onSubmit={handleFormSubmit}>
          <div className="Uploader">
            <label>Selecione o seu .csv</label>
            <input
              type="file"
              accept=".csv"
              onChange={onFileChange} />
          </div>
          <button
            type="submit"
            disabled={isSubmitButtonDisabled()} >
            <FiUpload size={25} color="#fff" />
          </button>
      </form>
    </div>
  );
};

export default ListUploader;