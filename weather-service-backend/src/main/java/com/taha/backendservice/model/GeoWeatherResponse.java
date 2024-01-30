package com.taha.backendservice.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
public class GeoWeatherResponse {
    private GeoWeatherProperties properties;

}
