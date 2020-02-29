import React from 'react';
import './App.css';

import CalculatorComponent from './Components/CalculatorComponent';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <CalculatorComponent/>
      </div>
    </Provider>
  );
}

export default App;
