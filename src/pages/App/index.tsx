import React from 'react';

import ListWithController from '../../components/ListWithController';

import './styles.css';

function App() {

  return (
    <div className="app-container">
      <header>
        <h1>Estrutura avançada de dados - Trabalho GA</h1>
        <h2>Eduardo Cruz</h2>
        <h2>Rômulo Maciel</h2>
      </header>

      <body>
        <ListWithController />
      </body>
    </div>
  );
}

export default App;
