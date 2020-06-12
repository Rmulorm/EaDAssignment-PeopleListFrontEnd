import React, { FunctionComponent, useState, FormEvent } from 'react';
import { FiUpload } from 'react-icons/fi';

import './ListUploader.css'
import api from '../../services/api';

interface ListUploaderProps {
  trash?: any
};

const ListUploader: FunctionComponent<ListUploaderProps> = (props) => {

  const[list, setList] = useState<File>();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files){
      return;
    }

    setList(event.target.files[0]);
  };

  const handleFormSubmit = async (event: FormEvent) => {
    if (!list) {
      return;
    }

    event.preventDefault();

    const listReader = new FileReader();

    listReader.readAsBinaryString(list.slice());

    const data = new FormData();
    data.append('file', list.slice());

    api.post('list', data)
    .catch(() => {
      alert(`Óbvio.`);
    });
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <div className="ListUploader" >
        <div className="Uploader">
          <label>Selecione o seu .csv</label>
          <input
            type="file"
            accept=".csv"
            onChange={onFileChange} />
        </div>
        <button type="submit">
          <FiUpload size={25} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default ListUploader;