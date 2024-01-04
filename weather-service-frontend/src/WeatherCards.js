import React from 'react';
import { precipitationWrapper, getIcon, getTempIcon }  from './Utils';
import { Card, Row, Col, Accordion } from 'react-bootstrap';
import './pe-icon-7-weather/css/pe-icon-7-weather.css';

const WeatherCards = ({ weatherData }) => (
  <>
    {weatherData && (
      <Row>
        {weatherData.forecast.daily.properties.periods.map((data, index) => (
            <Card key={index} className='mb-3' style={{backgroundColor: '#2e333b', fontSize: '20px', color: '#acacac'}}>
              <Card.Header style={{textAlign: 'center', backgroundColor: '#282b31'}}>
                <strong>{data.name}</strong>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text className={getIcon(data.shortForecast, data.name)}/> {data.shortForecast}
                  </Col>
                  <Col>
                    <Card.Text className={getTempIcon(data.temperature)}/> {data.temperature} &deg;F
                  </Col>
                </Row>
              </Card.Body>
              <Accordion flush='true'>
                <Accordion.Item eventKey="0">
                  <Accordion.Button>Details</Accordion.Button>
                  <Accordion.Body>
                    <Row>
                      <Col>
                        <Card.Text>
                          <strong>Chance of Precipitation:</strong> {precipitationWrapper(data.probabilityOfPrecipitation.value)}%
                        </Card.Text>
                        <Card.Text>
                          <strong>Dewpoint:</strong> {(Math.round(data.dewpoint.value) * 9.0/5.0) + 32} &deg;F
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          <strong>Wind:</strong> {data.windSpeed} {data.windDirection}
                        </Card.Text>
                        <Card.Text>
                          <strong>Humidity:</strong> {data.relativeHumidity.value}%
                        </Card.Text>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
        ))}
      </Row>
    )}
  </>
);

export default WeatherCards;