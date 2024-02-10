package com.example.sectorsspring.helpers;

import com.example.sectorsspring.module.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationHelper {

    public User getAuthenticatedUserEntity() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
