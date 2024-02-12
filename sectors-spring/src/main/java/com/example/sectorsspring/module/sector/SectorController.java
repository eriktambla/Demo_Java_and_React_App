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

    private final SectorRepository sectorRepository;

    @GetMapping("/all")
    public List<SectorDto> getAllSectors() {
        return sectorRepository.findAll()
                .stream().map(sector ->
                    SectorDto.builder()
                        .value(sector.getValue())
                        .name(sector.getName())
                        .children(sector.getChildrenSectors().stream().map(
                                childSector ->
                                        SectorDto.builder()
                                        .value(childSector.getValue())
                                        .name(childSector.getName())
                                        .build()
                        ).toList())
                        .build()
                ).toList();
    }
}
