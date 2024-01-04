import React from 'react';
import Forecast from './Forecast';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Weather Service</h1>
          <Forecast/>
        </header>
      </div>
  );
};
export default App;
