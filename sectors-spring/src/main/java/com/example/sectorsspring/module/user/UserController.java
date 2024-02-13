package com.example.sectorsspring.module.user;

import com.example.sectorsspring.helpers.AuthenticationHelper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;
    private final AuthenticationHelper authHelper;

    @PostMapping("/signup")
    public void signup(@Valid @RequestBody UserSignupRequest request) {
        service.signup(request);
    }

    @GetMapping("/{userId}/sectors")
    public UserSectorsDto getUserWithSectors(@PathVariable String userId){
        User authenticatedUser = authHelper.getAuthenticatedUserEntity();

        if (!Objects.equals(authenticatedUser.getId(), Long.valueOf(userId))) {
            throw new IllegalArgumentException();
        }

        return service.getUserWithSectors(Long.valueOf(userId));
    }
}
