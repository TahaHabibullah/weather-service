package com.taha.backendservice.model;

import lombok.Data;

@Data
public class GeoWeatherProperties {
    private String gridId;
    private String gridX;
    private String gridY;
    private RelativeLocation relativeLocation;

    public String toString() {
        return gridX + "," + gridY;
    }
}
