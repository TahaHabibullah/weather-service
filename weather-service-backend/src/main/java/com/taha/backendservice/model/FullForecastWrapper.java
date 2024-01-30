package com.taha.backendservice.model;

import lombok.Data;

@Data
public class FullForecastWrapper {
    private int responseCode;
    private String responseMessage;
    private FullForecast forecast;

    public FullForecastWrapper(FullForecast forecast, int responseCode, String responseMessage) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.forecast = forecast;
    }
}
