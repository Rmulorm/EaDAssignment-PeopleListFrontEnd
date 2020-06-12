import React from 'react';

import './styles.css';

import ListWithController from '../../components/ListWithController';
import TabsWrapper from '../../components/TabsWrapper';

function App() {

  return (
    <div className="app-container">
      <header>
        <h1>Estrutura avançada de dados - Trabalho GA</h1>
        <h2>Eduardo Cruz</h2>
        <h2>Rômulo Maciel</h2>
      </header>

      <body>
        <TabsWrapper />
      </body>
    </div>
  );
}

export default App;
