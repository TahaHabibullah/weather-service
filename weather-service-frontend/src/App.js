import React from 'react';
import Forecast from './Forecast';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <div className="App">
        <div className="App-header">
          <Forecast/>
        </div>
      </div>
  );
};
export default App;
