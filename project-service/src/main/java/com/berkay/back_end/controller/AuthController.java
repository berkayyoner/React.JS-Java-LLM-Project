package com.berkay.back_end.controller;

import com.berkay.back_end.repository.UserRepository;
import com.berkay.back_end.security.JwtUtil;
import com.berkay.back_end.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepo, PasswordEncoder encoder, JwtUtil jwtUtil) {
        this.userRepo = userRepo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public User register(@RequestParam String username, @RequestParam String password) {
        User u = new User();
        u.setUsername(username);
        u.setPassword(encoder.encode(password));
        u.setRole("USER");
        return userRepo.save(u);
    }

    @PostMapping("/login")
    public Map<String,String> login(@RequestParam String username, @RequestParam String password) {
        User u = userRepo.findByUsername(username).orElseThrow();
        if (!encoder.matches(password, u.getPassword())) throw new RuntimeException("Bad creds");
        return Map.of("token", jwtUtil.generateToken(username));
    }
}