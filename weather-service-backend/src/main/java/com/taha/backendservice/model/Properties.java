package com.taha.backendservice.model;

import lombok.Data;
@Data
public class Properties {
    private String latitude;
    private String longitude;

    public String toString() {return latitude + "," + longitude;}
}
