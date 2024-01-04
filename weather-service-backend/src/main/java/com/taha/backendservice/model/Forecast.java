package com.taha.backendservice.model;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

public class Forecast {
    private ArrayList<Weather> periods;

    public Forecast() {
        periods = null;
    }

    public void initForecast(ArrayList<Map<String, Object>> forecast) {
        periods = new ArrayList<Weather>();
        for(Map m : forecast) {
            Weather w = new Weather();
            w.setName((String)m.get("name"));
            w.setDesc((String)m.get("shortForecast"));
            w.setTemperature((int)m.get("temperature"));
            w.setWindSpeed((String)m.get("windSpeed"));
            w.setWindDirection((String)m.get("windDirection"));
            LinkedHashMap<String, Object> lhm = (LinkedHashMap<String, Object>) m.get("dewpoint");
            w.setDewPoint((Double)lhm.get("value"));
            lhm = (LinkedHashMap<String, Object>) m.get("relativeHumidity");
            w.setHumidity((int)lhm.get("value"));
            periods.add(w);
        }
    }

    public String toString() {
        String res = "7 Day Weather Forecast In Your Area: <br><br>";
        for(Weather w : periods)
            res += w.toString() + "<br>";
        return res;
    }
}
