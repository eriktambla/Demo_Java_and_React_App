package com.example.sectorsspring.module.sector;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/sector")
@RequiredArgsConstructor
public class SectorController {

    private final SectorService service;

    @GetMapping("/all")
    public List<SectorDto> getAllSectors() {
        return service.getAllSectors();
    }
}
