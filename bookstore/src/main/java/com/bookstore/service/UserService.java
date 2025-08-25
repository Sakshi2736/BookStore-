package com.bookstore.service;

import com.bookstore.entity.User;
import com.bookstore.dto.NewUserDTO;


import java.util.List;

//public interface UserService {
//    User register(User user);
//    String login(String username, String password);
//    List<User> getAllUsers();
//    void banUser(Long userId);
//}

public interface UserService {
    User register(User user);
    String login(String username, String password);
    List<User> getAllUsers();
    void banUser(Long id);
    void unbanUser(Long id);
    boolean checkUsernameDup(String username);
    User checkUser(String username, String password);
}
