package com.taha.backendservice.model;

import lombok.Data;

@Data
public class FullForecast {
    private Forecast daily;
    private Forecast hourly;
    private Location loc;

    public FullForecast(Forecast daily, Forecast hourly, Location loc) {
        this.daily = daily;
        this.hourly = hourly;
        this.loc = loc;
    }
}
