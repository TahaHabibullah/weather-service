package com.taha.backendservice.service.impl;

import com.taha.backendservice.client.GeoLocationFeignClient;
import com.taha.backendservice.client.WeatherFeignClient;
import com.taha.backendservice.constants.ForecastConstants;
import com.taha.backendservice.constants.GeoLocationConstants;
import com.taha.backendservice.model.*;
import com.taha.backendservice.service.WeatherService;
import feign.FeignException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class WeatherServiceImpl implements WeatherService {

    private static final Logger logger = LoggerFactory.getLogger(WeatherServiceImpl.class);
    @Autowired
    private GeoLocationFeignClient geoLocationFeignClient;
    @Autowired
    private WeatherFeignClient weatherFeignClient;
    @Autowired
    private GeoLocationConstants geoLocationConstants;

    public ResponseEntity<FullForecastWrapper> weatherService(String zipcode) {
        String key = geoLocationConstants.API_KEY;
        Forecast daily;
        Forecast hourly;
        Location loc;
        FullForecast forecast;
        try {
            logger.info("Zipcode returned: {}", zipcode);
            String coordinates = geoLocationFeignClient.getLatAndLon(key, zipcode).getBody().getResults().getBody().get(0).toString();
            logger.info("Coordinates returned: {}", coordinates);
            GeoWeatherProperties grid = weatherFeignClient.getForecastProps(coordinates).getBody().getProperties();
            logger.info("Calling Weather API to retrieve this week's forecast");
            loc = grid.getRelativeLocation().getProperties();
            daily = weatherFeignClient.getDailyForecast(grid.getGridId(), grid.toString()).getBody();
            hourly = weatherFeignClient.getHourlyForecast(grid.getGridId(), grid.toString()).getBody();
            forecast = new FullForecast(daily, hourly, loc);
            return new ResponseEntity<>(new FullForecastWrapper(forecast, 200, ForecastConstants.SUCCESS), HttpStatus.OK);
        } catch(FeignException e) {
            logger.error("Exception occurred: {}", e);
            return new ResponseEntity<>(new FullForecastWrapper(null, 500, e.getMessage()), HttpStatus.OK);
        } catch(Exception e) {
            logger.error("Exception occurred: {}", e);
            return new ResponseEntity<>(new FullForecastWrapper(null, 500, e.getMessage()), HttpStatus.OK);
        }
    }
}
