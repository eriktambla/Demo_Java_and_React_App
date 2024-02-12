package com.example.sectorsspring.module.sector;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class SectorDto {
    private Number value;
    private String name;
    private List<SectorDto> children;
}
