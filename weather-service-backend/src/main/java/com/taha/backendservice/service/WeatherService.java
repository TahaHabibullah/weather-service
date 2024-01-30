package com.taha.backendservice.service;

import com.taha.backendservice.model.FullForecastWrapper;
import org.springframework.http.ResponseEntity;

public interface WeatherService {
    public ResponseEntity<FullForecastWrapper> weatherService(String zipcode);
}
