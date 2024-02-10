package com.example.sectorsspring.module.sector;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/sector")
@RequiredArgsConstructor
public class SectorController {

    private final SectorRepository sectorRepository;

    @GetMapping("/all")
    public List<Sector> getAllSectors() {
        return sectorRepository.findAll();
    }
}
