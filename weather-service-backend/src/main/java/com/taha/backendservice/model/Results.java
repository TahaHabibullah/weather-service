package com.taha.backendservice.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import lombok.Data;
import java.util.List;
import java.util.Map;

public class Results {
    private List<Properties> body;

    @JsonAnyGetter
    public List<Properties> getBody() {return body;}

    @JsonAnySetter
    public void setBody(String name, List<Properties> body) {this.body = body;}

}