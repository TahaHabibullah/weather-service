package com.taha.backendservice.model;

public class Weather {

    private String name;
    private String desc;
    private int temperature;
    private double dewPoint;
    private int humidity;
    private String windSpeed;
    private String windDirection;

    public Weather(String name, String desc, int temperature, double dewPoint, int humidity, String windSpeed, String windDirection) {
        this.name = name;
        this.desc = desc;
        this.temperature = temperature;
        this.dewPoint = dewPoint;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
    }

    public Weather() {
        this.name = "";
        this.desc = "";
        this.temperature = 0;
        this.dewPoint = 0;
        this.humidity = 0;
        this.windSpeed = "";
        this.windDirection = "";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public double getDewPoint() {
        return dewPoint;
    }

    public void setDewPoint(double dewPoint) {
        this.dewPoint = dewPoint;
    }

    public int getHumidity() {
        return humidity;
    }

    public void setHumidity(int humidity) {
        this.humidity = humidity;
    }

    public String getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(String windSpeed) {
        this.windSpeed = windSpeed;
    }

    public String getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(String windDirection) {
        this.windDirection = windDirection;
    }

    public String toString() {
        String res =
        "Weather for " + name +": <br>"+
        desc+"<br>"+
        "Temperature: " + temperature + " Degrees F <br>"+
        "Dew Point: " + (int)(dewPoint*1.8+32) + " Degrees F <br>"+
        "Humidity: " + humidity + "% <br>"+
        "Wind: " + windSpeed + " " + windDirection + " <br>";

        return res;
    }
}
