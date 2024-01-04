package com.taha.backendservice.controller;

import com.taha.backendservice.model.Forecast;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;


@RestController
public class Controller {

    @GetMapping("/helloWorld")
    public String helloWorld() { return "helloWorld"; }

    @GetMapping("/weather")
    public String getWeather() {
        String url = "https://api.ipgeolocation.io/getip";
        RestTemplate rt = new RestTemplate();

        String ip = rt.getForObject(url, String.class);
        JsonParser jp = JsonParserFactory.getJsonParser();
        Map < String, Object > map = jp.parseMap(ip);
        ip = (String)map.get("ip");
        map.clear();

        url = "https://api.ipgeolocation.io/ipgeo?ip="+ip+"&apiKey=5b9062d7502a43838f9f65df3d0c16d1";
        String data = rt.getForObject(url, String.class);
        map = jp.parseMap(data);
        String latitude = (String)map.get("latitude");
        String longitude = (String)map.get("longitude");
        map.clear();

        url = "https://api.weather.gov/points/"+latitude+","+longitude;
        data = rt.getForObject(url, String.class);
        map = jp.parseMap(data);
        LinkedHashMap<String, Object> lhm = (LinkedHashMap<String, Object>) map.get("properties");
        url = (String)lhm.get("forecast");
        lhm.clear();
        map.clear();

        data = rt.getForObject(url, String.class);
        map = jp.parseMap(data);
        lhm = (LinkedHashMap<String, Object>) map.get("properties");
        ArrayList<Map<String, Object>> periods = (ArrayList<Map<String, Object>>)lhm.get("periods");
        Forecast forecast = new Forecast();
        forecast.initForecast(periods);

        return forecast.toString();
    }
}
