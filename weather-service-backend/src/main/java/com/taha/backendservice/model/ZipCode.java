package com.taha.backendservice.model;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class ZipCode {
    private String zipcode;

    public String toString() { return zipcode; }
}
