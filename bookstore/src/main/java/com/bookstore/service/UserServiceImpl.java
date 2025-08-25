package com.bookstore.service;

import com.bookstore.entity.User;
import com.bookstore.repository.UserRepository;
import com.bookstore.service.JwtService;
import com.bookstore.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }


//    @Override
//    public User register(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//
//        // Ensure role is in uppercase and prefixed with "ROLE_"
//        String role = user.getRole();
//        if (role == null || role.isBlank()) {
//            role = "CUSTOMER"; // default role
//        }
//        user.setRole("ROLE_" + role.toUpperCase());
//
//        return userRepo.save(user);
//    }



    @Override
    public String login(String username, String password) {
        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Not found"));
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return jwtService.generateToken(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public void banUser(Long id) {
        User user = userRepo.findById(id).orElseThrow();
        user.setBanned(true);
        userRepo.save(user);
    }

    @Override
    public void unbanUser(Long id) {
        User user = userRepo.findById(id).orElseThrow();
        user.setBanned(false);
        userRepo.save(user);
    }

    @Override
    public boolean checkUsernameDup(String username) {
        return userRepo.findByUsername(username).isPresent();
    }

    @Override
    public User checkUser(String username, String password) {
        User user = userRepo.findByUsername(username).orElse(null);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;
    }
}
