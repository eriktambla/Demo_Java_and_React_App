package com.example.sectorsspring.module.sector;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class SectorDto {
    private int value;
    private String name;
    private List<SectorDto> children;
}
