package com.example.sectorsspring.module.user;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping("/signup")
    public void signup(@Valid @RequestBody UserSignupRequest request) {
        service.signup(request);
    }

    @GetMapping("/{userId}/sectors")
    public UserSectorsDto getUserWithSectors(@PathVariable String userId){
        return service.getUserWithSectors(Long.valueOf(userId));
    }
}
