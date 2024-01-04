import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="zipcode">
        <Form.Control
          style={{backgroundColor: '#2e333b', color: 'white', width: '50%', align: 'center', display: 'inline-block'}}
          type="text"
          placeholder="Enter ZIP Code"
          name="zipcode"
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <Button variant="outline-primary" type="submit">
            Submit
        </Button>
      </Form.Group>
      { response ? (
        <div>
          <strong>Forecast in {response.forecast.loc.city}, {response.forecast.loc.state}</strong>
          <HourlyCarousel weatherData={response}/>
          <WeatherCards weatherData={response}/>
        </div>
      ) : (
        <p></p>
      )}
    </Form>
  )
};

export default Forecast;