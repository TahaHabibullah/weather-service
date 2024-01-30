package com.taha.backendservice.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties
public class GeoLocationConstants {
    @Value("${api.key}")
    public String API_KEY;
}
