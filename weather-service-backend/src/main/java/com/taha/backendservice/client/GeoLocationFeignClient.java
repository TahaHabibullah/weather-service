package com.taha.backendservice.client;

import com.taha.backendservice.model.Coordinates;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

@Component
@FeignClient(name="geoLocationFeignClient",
        url="https://api.zipcodestack.com/v1/")
public interface GeoLocationFeignClient {

    @RequestMapping(method=RequestMethod.GET, path="search?codes={zipcode}&country=us&apikey={key}", consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Coordinates> getLatAndLon(@PathVariable("key") String key, @PathVariable("zipcode") String zipcode);

}
