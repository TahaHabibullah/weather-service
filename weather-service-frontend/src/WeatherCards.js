import React from 'react';
import { precipitationWrapper, getIcon, getTempIcon }  from './Utils';
import { Card, Row, Col, Accordion } from 'react-bootstrap';
import './pe-icon-7-weather/css/pe-icon-7-weather.css';

const WeatherCards = ({ weatherData }) => (
  <>
    {weatherData && (
      <Row style={{paddingLeft: '20%', paddingRight: '20%'}}>
        {weatherData.forecast.daily.properties.periods.map((data, index) => (
            <Card key={index} className='mb-3' style={{backgroundColor: '#252c38', fontSize: '20px', color: '#dddddd', outlineWidth: '2px', outlineStyle: 'solid', outlineColor: '#acacac'}}>
              <Card.Header style={{textAlign: 'center', backgroundColor: '#14161f'}}>
                <strong>{data.name}</strong>
              </Card.Header>
              <Card.Body style={{textAlign: 'center', fontSize: '30px'}}>
                <Accordion>
                  <Accordion.Item eventKey="0" style={{backgroundColor: 'white'}}>
                    <Accordion.Button>
                      <Col>
                        <center>
                          <Card.Text className={getIcon(data.shortForecast, data.name)}/> {data.shortForecast}
                        </center>
                      </Col>
                      <Col>
                        <center>
                          <Card.Text className={getTempIcon(data.temperature)}/> {data.temperature} &deg;F
                        </center>
                      </Col>
                    </Accordion.Button>
                    <Accordion.Body>
                      <Row>
                        <Col>
                          <div>
                            <strong>Chance of Precipitation:</strong> {precipitationWrapper(data.probabilityOfPrecipitation.value)}%
                          </div>
                          <div>
                            <strong>Dewpoint:</strong> {(Math.round(data.dewpoint.value) * 9.0/5.0) + 32} &deg;F
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <strong>Wind:</strong> {data.windSpeed} {data.windDirection}
                          </div>
                          <div>
                            <strong>Humidity:</strong> {data.relativeHumidity.value}%
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
        ))}
      </Row>
    )}
  </>
);

export default WeatherCards;