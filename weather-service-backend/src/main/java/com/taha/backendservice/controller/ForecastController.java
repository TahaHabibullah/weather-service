package com.taha.backendservice.controller;

import com.taha.backendservice.constants.ForecastConstants;
import com.taha.backendservice.model.FullForecastWrapper;
import com.taha.backendservice.model.ZipCode;
import com.taha.backendservice.service.impl.WeatherServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ForecastController {

    @Autowired
    private WeatherServiceImpl weatherServiceImpl;

    @CrossOrigin
    @RequestMapping(method=RequestMethod.POST, path=ForecastConstants.WEATHER, produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FullForecastWrapper> getWeather(@RequestBody ZipCode zipcode) {
        return weatherServiceImpl.weatherService(zipcode.toString());
    }
}