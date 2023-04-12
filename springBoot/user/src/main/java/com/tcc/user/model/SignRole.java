package com.tcc.user.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
public class SignRole {
    private String username;
    private String roleName;
}
