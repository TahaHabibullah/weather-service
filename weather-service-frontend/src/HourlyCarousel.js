import React from 'react';
import { translateTime, precipitationWrapper, getIcon, getTempIcon }  from './Utils';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const HourlyCarousel = ({ weatherData }) => {
  const hourly = weatherData.forecast.hourly.properties.periods.slice(0, 24);
  const itemsPerPage = 4;
  const totalItems = Math.ceil(hourly.length / itemsPerPage);

  const renderCarouselItems = () => {
    const carouselItems = [];

    for (let i = 0; i < totalItems; i++) {
      const startIndex = i * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = hourly.slice(startIndex, endIndex);

      carouselItems.push(
        <Carousel.Item key={i}>
          <Card style={{backgroundColor: '#2e333b', fontSize: '20px', color: '#acacac'}}>
            <Card.Body>
              <Row>
                {items.map((data, index) => (
                  <Col key={index} sm={6} md={3}>
                    <Card.Header className='mb-4' style={{textAlign: 'center', backgroundColor: '#282b31'}}>
                      {translateTime(data.startTime)}
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Text className={getIcon(data.shortForecast, data.name)}/>
                        </Col>
                        <Col>
                          <Card.Text className={getTempIcon(data.temperature)}/> {data.temperature} &deg;F
                        </Col>
                        <Col>
                          <Card.Text className='pe-7w-umbrella'/> {precipitationWrapper(data.probabilityOfPrecipitation.value)}%
                        </Col>
                      </Row>
                    </Card.Body> 
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };

  return (
    <Carousel className='mb-4' interval={null}>
      {renderCarouselItems()}
    </Carousel>
  );
};

export default HourlyCarousel;