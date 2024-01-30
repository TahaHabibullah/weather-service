package com.taha.backendservice.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Periods {
    private String name;
    private String startTime;
    private String endTime;
    private String isDaytime;
    private String temperature;
    private String temperatureUnit;
    private String temperatureTrend;
    private Unit probabilityOfPrecipitation;
    private Unit dewpoint;
    private Unit relativeHumidity;
    private String windSpeed;
    private String windDirection;
    private String shortForecast;
    private String detailedForecast;
}
