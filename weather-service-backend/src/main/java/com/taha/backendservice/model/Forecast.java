package com.taha.backendservice.model;

import lombok.Data;
import java.util.List;

@Data
public class Forecast {
    private ForecastProperties properties;

    @Data
    public class ForecastProperties {
        private List<Periods> periods;
    }
}
