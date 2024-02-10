package com.example.sectorsspring.configuration;

import com.example.sectorsspring.module.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig {
    private final String[] publicEntryPoints = new String[]{"/v1/user/signup", "/v1/login"};

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, ObjectMapper objectMapper) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(publicEntryPoints).permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(login -> login
                        .loginProcessingUrl("/v1/login")
                        .failureHandler(((request, response, exception) -> response.sendError(400, "Login failed")))
                        .successHandler(((request, response, authentication) -> response
                                .getWriter()
                                .write(
                                        objectMapper.writeValueAsString(((User) authentication.getPrincipal()).getId())
                                )))
                )
                .logout(logout -> logout
                        .logoutUrl("/v1/logout")
                        .deleteCookies("JSESSIONID")
                )
                .sessionManagement(sess -> sess.maximumSessions(1))
                .build();
    }

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
