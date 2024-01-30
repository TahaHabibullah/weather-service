package com.taha.backendservice.model;
import com.fasterxml.jackson.annotation.*;
import com.taha.backendservice.service.impl.WeatherServiceImpl;
import lombok.Data;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Map;

@Data
public class Coordinates {
    private Results results;
}