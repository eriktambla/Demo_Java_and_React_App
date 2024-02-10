package com.example.sectorsspring.module.sector;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class SectorDto {
    private Long id;
    private String name;
}
