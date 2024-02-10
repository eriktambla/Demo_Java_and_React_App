package com.example.sectorsspring.module.user;

import com.example.sectorsspring.module.sector.Sector;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;


@Getter
@AllArgsConstructor
public class UserDto {
    private String name;
    private Boolean agreedToTerms;
    private List<Sector> sectors;
}
