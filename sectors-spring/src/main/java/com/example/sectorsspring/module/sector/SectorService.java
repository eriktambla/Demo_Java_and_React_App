package com.example.sectorsspring.module.sector;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SectorService {

    private final SectorRepository sectorRepository;

    public List<SectorDto> getAllSectors() {
        return sectorRepository.findAll()
                .stream()
                .map(sector ->
                        SectorDto
                                .builder()
                                .value(sector.getValue())
                                .name(sector.getName())
                                .children(
                                        sector.getChildrenSectors()
                                                .stream().map(childSector ->
                                                        SectorDto
                                                                .builder()
                                                                .value(childSector.getValue())
                                                                .name(childSector.getName())
                                                                .build()
                                                ).toList())
                                .build()
                ).toList();
    }

}
