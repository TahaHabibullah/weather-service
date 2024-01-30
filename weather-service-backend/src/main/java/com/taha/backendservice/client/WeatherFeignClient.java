package com.taha.backendservice.client;

import com.taha.backendservice.model.Forecast;
import com.taha.backendservice.model.GeoWeatherResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

@Component
@FeignClient(name="weatherFeignClient",
                url="https://api.weather.gov/")
public interface WeatherFeignClient {

    @RequestMapping(method=RequestMethod.GET, path="/points/{latAndLon}", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<GeoWeatherResponse> getForecastProps(@PathVariable("latAndLon") String latAndLon);

    @RequestMapping(method=RequestMethod.GET, path="/gridpoints/{gridId}/{gridCoordinates}/forecast", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Forecast> getDailyForecast(@PathVariable("gridId") String gridId, @PathVariable("gridCoordinates") String gridCoordinates);

    @RequestMapping(method=RequestMethod.GET, path="/gridpoints/{gridId}/{gridCoordinates}/forecast/hourly", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Forecast> getHourlyForecast(@PathVariable("gridId") String gridId, @PathVariable("gridCoordinates") String gridCoordinates);

}
