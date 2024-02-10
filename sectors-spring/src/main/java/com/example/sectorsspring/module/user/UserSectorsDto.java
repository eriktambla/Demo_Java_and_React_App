package com.example.sectorsspring.module.user;

import com.example.sectorsspring.module.sector.SectorDto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserSectorsDto {
    private String name;
    private Boolean agreedToTerms;
    private List<SectorDto> sectors;
}
