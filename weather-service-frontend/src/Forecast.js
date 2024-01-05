import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import WeatherCards from './WeatherCards';
import HourlyCarousel from './HourlyCarousel';

const Forecast = () => {
  const [response, setResponse] = useState(null);
  const [zipcode, setZipCode] = useState('');

  const restEndpoint = "http://localhost:8080/weather";

  const callRestApi = async (zipcode) => {
    const body = {zipcode}
    return fetch(restEndpoint, {method:'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body.zipcode)})
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      setResponse(responseJson);
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    callRestApi(formJson);
  }

  return (
    <div>
        <center>
          <Form onSubmit={handleSubmit} style={{width: '30%'}}>
            <Form.Group className="mb-3" controlId="zipcode">
              <Form.Control
                style={{backgroundColor: '#252c38', color: 'white', display: 'inline-block'}}
                type="text"
                placeholder="Enter ZIP Code"
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </center>
      
      { response ? (
        <div>
          <div>
            <center>
              Forecast in {response.forecast.loc.city}, {response.forecast.loc.state}
            </center>
          </div>
          <div>
            <strong style={{paddingLeft: '10%', paddingRight: '10%'}}>
              Hourly
            </strong>
          </div>
          <div>
            <HourlyCarousel weatherData={response}/>
          </div>
          <div>
            <strong style={{paddingLeft: '20%', paddingRight: '20%'}}>
              Next 7 Days
            </strong>
          </div>
          <div>
            <WeatherCards weatherData={response}/>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
    
  )
};

export default Forecast;