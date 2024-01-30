package com.taha.backendservice.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Unit {
    private String unitCode;
    private String value;
}
