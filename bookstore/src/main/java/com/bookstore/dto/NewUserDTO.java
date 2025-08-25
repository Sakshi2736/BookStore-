package com.bookstore.dto;

import lombok.Data;

@Data
public class NewUserDTO {
    private String username;
    private String password;
    private String role;
}